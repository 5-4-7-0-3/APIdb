import { HOST } from "../config";
import AWS from "aws-sdk";
import type { Request, Response } from "express";
import fs from "fs";
import { PutObjectRequest } from "aws-sdk/clients/s3";
import path from "path";

const s3 = new AWS.S3({
    accessKeyId: "minioadmin",
    secretAccessKey: "minioadmin",
    endpoint: "http://minio:9000",
    s3ForcePathStyle: true,
    signatureVersion: "v4",
});

class UploadsController {
    async upload(req: Request, res: Response) {
        const uploadParams: PutObjectRequest = {
            Bucket: "images",
            Key: "",
            Body: "",
        };
        console.log(req.file);

        uploadParams.Body = req.file.buffer;

        uploadParams.Key = path.basename(req.file.originalname);

        const upload = await s3.upload(uploadParams).promise();
        console.log(upload);
        const filename = upload.ETag.slice(1, -1);
        fs.appendFile(
            "./uploads/" + `${filename}`,
            req.file.buffer,
            function (err) {
                if (err) return console.log(err);
            }
        );

        return res.json({
            message: HOST + "media/" + filename,
            minio: upload.Location,
        });
    }
}

export { UploadsController };
