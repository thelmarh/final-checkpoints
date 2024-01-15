const http = require("http");
const app = require("./app");
const connectDb = require("./utils/database/mysqlConnector");

const httpServer = http.createServer(app);

const PORT = 3000;

const startServer = async () => {
  connectDb();

  httpServer.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
};

startServer();
