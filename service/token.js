const jwt = require('jsonwebtoken')
const {secret} = require('../JWT/config.js')
const { v4: uuidv4 } = require('uuid');
class TokenService {

    generateAccessToken(id) {
        const payload = {
            id,
        }
        return jwt.sign(payload, secret, {expiresIn: "3m"})
    }
    generateRefreshToken() {
        const payload = {
            id: uuidv4(),
        }
        return jwt.sign(payload, secret, {expiresIn: "5m"})
    }
}
module.exports = TokenService