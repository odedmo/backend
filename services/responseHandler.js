const apiResponse = (data, message = 'Success') => {
  return {
    message,
    data
  }
};

const apiError = error => {
  return {
    data: {
      error: error.message
    }
  }
};

module.exports = {
  apiResponse,
  apiError
}