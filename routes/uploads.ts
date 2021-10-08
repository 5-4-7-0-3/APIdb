import express from "express";
import multer from "multer";

import controllers from "../controller";

const router = express.Router();

router.post("/", multer({ dest: "./uploads" }).single("image"), (req, res) => {
    controllers.uploadsController.upload(req, res);
});

export default router;
