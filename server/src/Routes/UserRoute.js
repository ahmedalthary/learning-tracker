const AuthenticationController = require("../Controller/AuthenticationController");

module.exports = (app) => {
  app.post("/register", AuthenticationController.register);
};
