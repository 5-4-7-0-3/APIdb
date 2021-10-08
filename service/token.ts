const jwt = require("jsonwebtoken");
import config from "../JWT/config";
class TokenService {
    tokenDAO: any;
    constructor(tokenDAO) {
        this.tokenDAO = tokenDAO;
    }

    generateAccessToken(id) {
        const payload = {
            id,
        };
        return jwt.sign(payload, config.secret, { expiresIn: "30m" });
    }
    generateRefreshToken() {
        const payload = {};
        return jwt.sign(payload, config.secret, { expiresIn: "30m" });
    }
    saveRefreshToken(user_id, refreshToken) {
        return this.tokenDAO.createRefreshToken(user_id, refreshToken);
    }

    updateRefreshToken(user_id, refreshToken) {
        return this.tokenDAO.updateRefreshToken(user_id, refreshToken);
    }
    checkToken(refreshToken) {
        const currentDate = Math.floor(Date.now() / 1000);
        const decodedRefresh = jwt.decode(refreshToken);
        return decodedRefresh.exp > currentDate;
    }
}
export { TokenService };
