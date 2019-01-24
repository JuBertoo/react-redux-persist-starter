const baseUrl = 'http://localhost:3000'
module.exports = {
  headers: {
    default: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    formData: {
      'Accept': 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  },
  urls: {
    login: "/auth/sign_in",
    validateToken: "/auth/validate_token",
    lunchs: "/lunches",
  }
}