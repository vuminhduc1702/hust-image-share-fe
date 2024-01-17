const { default: api } = require("../config/ApiConfig");

const AuthenticationService = {
  login(data) {
    return api.post("/api/public/authenticate", data);
  },
  register(data) {
    return api.post("/api/public/register", data);
  },
};

export default AuthenticationService;
