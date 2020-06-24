module.exports = {
    apiResponse: (data, message = 'Success') => {
      return {
        message,
        data
      }
    },
    apiError: (error) => {
      return {
        data: { error: error.message }
      }
    }
  }