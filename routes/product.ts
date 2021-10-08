import express from "express";
import multer from "multer";
import controllers from "../controller";
const router = express.Router();

router.post("/", multer({ dest: "./uploads" }).single("image"), (req, res) => {
    console.log(req);
    void controllers.productController.createProduct(req, res);
});

router.get(
    "/",
    controllers.productController.getProduct.bind(controllers.productController)
);
router.get(
    "/:id",
    controllers.productController.getOneProduct.bind(
        controllers.productController
    )
);
router.put(
    "/:id",
    multer({ dest: "./uploads" }).single("image"),
    (req, res) => {
        controllers.productController.updateProduct(req, res);
    }
);
router.delete(
    "/:id",
    controllers.productController.deleteProduct.bind(
        controllers.productController
    )
);
// router.post("/uploads", multer({ dest: "uploads" }).single("image"));

export default router;
