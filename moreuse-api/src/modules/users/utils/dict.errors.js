const dictErros = {
  USER_PASS_WRONG: {
    status: 404,
    message: "User or password wrong"
  },
  USER_ALREADY_EXIST: {
    status: 409,
    message: "User already exist"
  },
  USER_NOT_FOUND: {
    status: 404,
    message: "User not found"
  },
  SERVER_ERROR: {
    status: 500,
    message: "Server internal error"
  }
}

module.exports = dictErros;

