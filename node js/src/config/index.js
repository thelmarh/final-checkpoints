const dotenv = require("dotenv");

dotenv.config();

const { env } = process;

const envVariable = {
  PORT: env.PORT,
  CLIENT_SECRET: env.CLIENT_SECRET,
  CLIENT_ID: env.CLIENT_ID,
  REFRESH_TOKEN: env.REFRESH_TOKEN,
  ACCESS_TOKEN: env.ACCESS_TOKEN,
  DB_NAME: env.DB_NAME,
  DB_PASSWORD: env.DB_PASSWORD,
  DB_USERNAME: env.DB_USERNAME,
  DB: env.DB,
};

module.exports = envVariable;
