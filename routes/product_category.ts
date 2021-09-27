import express from "express";
import controllers from "../controller";

const router = express.Router();

router.post(
    "/",
    controllers.productCategoryController.createProductCategory.bind(
        controllers.productCategoryController
    )
);
router.get(
    "/",
    controllers.productCategoryController.getCategories.bind(
        controllers.productCategoryController
    )
);
router.get(
    "/:id",
    controllers.productCategoryController.getOneCategory.bind(
        controllers.productCategoryController
    )
);
router.put(
    "/:id",
    controllers.productCategoryController.updateCategory.bind(
        controllers.productCategoryController
    )
);
router.delete(
    "/:id",
    controllers.productCategoryController.deleteCategory.bind(
        controllers.productCategoryController
    )
);

export default router;
