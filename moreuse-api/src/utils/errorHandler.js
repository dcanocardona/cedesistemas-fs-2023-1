const errorHandler = (errorData, extra = {}) => {
  const response = { ...extra,  message: errorData.message}
  return {
    status: errorData.status,
    response,
    handled: true,
  }
}

module.exports = errorHandler;


