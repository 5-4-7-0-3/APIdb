
const Token = require("../db/models/token.js");

class TokenDAO {

    createRefreshToken(user_id, refreshToken) {
        return new Token({
            user_id,
            refreshToken
        }).save()

    }
    async updateRefreshToken(user_id, refreshToken) {
        const result = await Token.deleteMany({ user_id, refreshToken }).exec();
        return result.deletedCount
    }
}

module.exports = new TokenDAO()
