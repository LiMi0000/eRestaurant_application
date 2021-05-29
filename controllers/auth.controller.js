const AuthModel = require("../models/auth.model");
const am = new AuthModel();

class AuthController {
  registerUser(credentials) {
    return am.register(credentials);
  }

  loginUser(credentials) {
    return am.login(credentials);
  }
}

module.exports = AuthController;
