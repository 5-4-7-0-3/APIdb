

class ProductController {
    constructor(productService  ) {
        this.productService = productService
    }
    async createProduct(req, res) {
        try {
            const {description, price, amount_left, category_id} = req.body
            const newProduct = await this.productService.createProduct(description, price, amount_left, category_id)
           
            res.json(newProduct)
            console.log(newProduct);

        }catch (err) {
            console.error(err);
            res.status(500).json(err);
        }

    }
    async getProduct(req, res) {
        try {
            const product = await this.productService.getProduct();
            res.json(product);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    }
    async getOneProduct(req, res) {
        try {
            const oneProduct = await this.productService.getOneProduct(req.params.id);
            res.json(oneProduct);
        }catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    }
    async updateProduct(req, res) {
        try {
            const {description, price, amount_left, category_id} = req.body
            const updateProduct = await this.productService.updateProduct(req.params.id, description, price, amount_left, category_id)
            console.log(req.body);
            res.json(updateProduct)
            
        }catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    }
    async deleteProduct(req, res) {
        try {
            const deleteProduct = await this.productService.deleteProduct(req.params.id)
            res.json(deleteProduct)
            console.log(deleteProduct);
        }
        catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    }
}

module.exports = ProductController