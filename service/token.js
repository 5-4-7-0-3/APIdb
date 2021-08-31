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
        return jwt.sign(payload, secret, { expiresIn: "3m" })
    }
    generateRefreshToken() {
        const payload = {
        }
        return jwt.sign(payload, secret, { expiresIn: "5m" })
    }
    saveRefreshToken(user_id, refreshToken) {
        return this.tokenDAO.createRefreshToken(user_id, refreshToken)
    }
    
    updateRefreshToken(user_id, refreshToken) {
        return this.tokenDAO.updateRefreshToken(user_id, refreshToken)
    }
}
module.exports = TokenService