
const Token = require("../db/models/token.js");

class TokenDAO {

    createRefreshToken(user_id, refreshToken) {
        return new Token({
            user_id,
            refreshToken
        }).save()

    }
    generateRefreshToken(user_id) {
        Token.findOneAndRemove({user_id})
        .exect()
        .then(() => createRefreshToken(user_id, refreshToken))
    }

}

module.exports = new TokenDAO()