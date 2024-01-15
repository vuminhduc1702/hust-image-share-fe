const { default: api } = require("../config/ApiConfig");

const AuthenticationService = {
  login(data) {
    return api.post("/api/user/authenticate", data);
  },
  register(data) {
    return api.post("/api/user/register", data);
  },
};

export default AuthenticationService;
