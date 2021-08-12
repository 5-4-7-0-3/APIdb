

class ProductCategoryController {
    constructor(productCategoryService) {
        this.productCategoryService = productCategoryService
    }
    async createProductCategory(req, res) {
        try {
            const {name} = req.body
            const newProductCategory = await this.productCategoryService.createCategory(name)
            res.json(newProductCategory)

        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }

    }

    async getCategories(req, res) {
        try {
            const categories = await this.productCategoryService.getCategories();
            res.json(categories);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    }

    async getOneCategory(req, res) {
        try {
            const oneCategory = await this.productCategoryService.getOneCategory(req.params.id);
            res.json(oneCategory);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    }

    async updateCategory(req, res) {
        try {
            const {name} = req.body
            const updateCategory = await this.productCategoryService.updateCategory(req.params.id, name)
            res.json(updateCategory)
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    }
    async deleteCategory(req, res) {
        try {
            const deleteCategory = await this.productCategoryService.deleteCategory(req.params.id)
            res.json(deleteCategory)
        }
        catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    }
}

module.exports = ProductCategoryController