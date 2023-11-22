const AuthenticationController = require("../Controller/AuthenticationController");
const AuthenticationControllerPolicy = require("../Policies/AuthenticationControllerPolicy");

module.exports = (app) => {
  app.post(
    "/register",
    AuthenticationControllerPolicy.registerPolicy,
    AuthenticationController.register
  );
};
