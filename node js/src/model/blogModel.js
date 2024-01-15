const { Model, DataTypes } = require("sequelize");
const sequelize = require("../utils/database/dbConfig");

class Blog extends Model {
  id;
  otherPublicField;
}

Blog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
  },
  { sequelize }
);

module.exports = Blog;
