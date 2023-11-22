const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const Config = require("./Config/Config");
const { sequelize } = require("./Models");

const app = express();

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());
require("./Routes/UserRoute")(app);
sequelize.sync().then(() => {
  app.listen(Config.port);
  console.log(
    `Connection has been established successfully, On Port ${Config.port}`
  );
});
