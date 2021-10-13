import express from "express";
import multer from "multer";

import controllers from "../controller";

const router = express.Router();
const storage = multer.memoryStorage();

router.post("/", multer({ storage }).single("image"), (req, res) => {

    controllers.uploadsController.upload(req, res);

});

export default router;
