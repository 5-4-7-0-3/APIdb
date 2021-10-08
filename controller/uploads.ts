import { HOST } from "../config";

class UploadsController {
    upload(req, res) {
        return res.json({
            message: HOST + "media/" + req.file.filename,
        });
    }
}

export { UploadsController };
