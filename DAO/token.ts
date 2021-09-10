
import { Token } from "../db/models/token";

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

const tokenDAO = new TokenDAO()

export {tokenDAO}
