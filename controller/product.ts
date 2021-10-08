import { HOST } from "../config";

class ProductController {
    productService: any;
    constructor(productService) {
        this.productService = productService;
    }
    async createProduct(req, res) {
        const { description, price, amount_left, category_id } = req.body;
        const image = req.file.filename;

        const newProduct = await this.productService.createProduct(
            description,
            price,
            amount_left,
            category_id,
            image
        );
        newProduct.image = HOST + "media/" + newProduct.image;
        res.json(newProduct);
    }
    async getProduct(req, res) {
        const product = await this.productService.getProduct();
        res.json(product);
    }
    async getOneProduct(req, res) {
        const oneProduct = await this.productService.getOneProduct(
            req.params.id
        );
        res.json(oneProduct);
    }
    async updateProduct(req, res) {
        const { description, price, amount_left, category_id } = req.body;
        const image = req.file.filename;
        const updateProduct = await this.productService.updateProduct(
            req.params.id,
            description,
            price,
            amount_left,
            category_id,
            image
        );
        updateProduct.image = HOST + "media/" + updateProduct.image;
        res.json(updateProduct);
    }
    async deleteProduct(req, res) {
        const deleteProduct = await this.productService.deleteProduct(
            req.params.id
        );
        res.json(deleteProduct);
        console.log(deleteProduct);
    }
}

export { ProductController };
