class ProductController {
    productService: any;
    constructor(productService) {
        this.productService = productService;
    }
    async createProduct(req, res) {
        const { description, price, amount_left, category_id } = req.body;
        const newProduct = await this.productService.createProduct(
            description,
            price,
            amount_left,
            category_id
        );

        res.json(newProduct);
        console.log(newProduct);
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
        const updateProduct = await this.productService.updateProduct(
            req.params.id,
            description,
            price,
            amount_left,
            category_id
        );
        console.log(req.body);
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
