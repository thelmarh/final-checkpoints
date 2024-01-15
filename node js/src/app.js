const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const fs = require("fs");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const dotenv = require("dotenv");

dotenv.config();

const OAuth2 = google.auth.OAuth2;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// google oauth refresh token
const refresh_token = process.env.REFRESH_TOKEN;
const access_token = "";

const myOath2Client = new OAuth2(
  "client Id",
  "client Secret",
  "https://developers.google.com/oauthplayground"
);

myOath2Client.setCredentials({ refresh_token });

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: "",
    clientId: "",
    clientSecret: "",
    refreshToken: refresh_token,
    accessToken: access_token,
  },
});

const checkEmailExist = (req, res, next) => {
  const { email } = req.body;
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email) {
    return res.send("email is required");
  }

  if (!email.match(regex)) {
    return res.send("invalid email address");
  }

  next();
};

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.post("/email/send", checkEmailExist, (req, res) => {
  const { email } = req.body;
  const mailOption = {
    to: email,
    from: "",
    subject: "Testing email Service",
    html: `<div><h1>We are testing email functionality</h1></div>`,
  };
  transport.sendMail(mailOption, (error) => {
    if (error) {
      res.send("Something went wrong");
    } else {
      res.send("email send successfully");
    }
  });
});

module.exports = app;
