

class ProductCategoryController {
    constructor(productCategoryService) {
        this.productCategoryService = productCategoryService
    }
    async createProductCategory(req, res) {

            const {name} = req.body
            const newProductCategory = await this.productCategoryService.createCategory(name)
            res.json(newProductCategory)
    }

    async getCategories(req, res) {
            const categories = await this.productCategoryService.getCategories();
            res.json(categories);
    }

    async getOneCategory(req, res) {
            const oneCategory = await this.productCategoryService.getOneCategory(req.params.id);
            res.json(oneCategory);
    }

    async updateCategory(req, res) {
            const {name} = req.body
            const updateCategory = await this.productCategoryService.updateCategory(req.params.id, name)
            res.json(updateCategory)
    }
    async deleteCategory(req, res) {
            const deleteCategory = await this.productCategoryService.deleteCategory(req.params.id)
            res.json(deleteCategory)
        }
}

module.exports = ProductCategoryController
