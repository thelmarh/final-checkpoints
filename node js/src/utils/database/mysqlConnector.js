const sequelize = require("./dbConfig");

const connectDb = async () => {
  const result = await sequelize
    .authenticate()
    .then(() => {
      console.log("db connected successfull");
    })
    .catch((error) => {
      console.log(error);
    });

  await sequelize.sync({ force: false });
};

module.exports = connectDb;
