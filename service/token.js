const jwt = require('jsonwebtoken')
const { secret } = require('../JWT/config.js')
class TokenService {
  constructor(tokenDAO) {
    this.tokenDAO = tokenDAO
  }

  generateAccessToken(id) {
    const payload = {
      id,
    }
    return jwt.sign(payload, secret, { expiresIn: "30m" })
  }
  generateRefreshToken() {
    const payload = {
    }
    return jwt.sign(payload, secret, { expiresIn: "30" })
  }
  saveRefreshToken(user_id, refreshToken) {
    return this.tokenDAO.createRefreshToken(user_id, refreshToken)
  }

  updateRefreshToken(user_id, refreshToken) {
    return this.tokenDAO.updateRefreshToken(user_id, refreshToken)
  }
  checkToken(refreshToken) {
    const currentDate = Math.floor(Date.now() / 1000)
    const decodedRefresh = jwt.decode(refreshToken);
    if (decodedRefresh.exp > currentDate) {
      return true
    } else {
      return false
    }

  }
}
module.exports = TokenService
