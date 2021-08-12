
class SalesController {
    constructor(salesService) {
        this.salesService = salesService
    }
    async createSales(req, res) {
        try {
            const {product_id, order_id, quantity} = req.body
            const newSale = await this.salesService.createSales(product_id, order_id, quantity)
            res.json(newSale)

        }catch (err) {
            console.error(err);
            res.status(500).json(err);
        }

    }
    async getSales(req, res) {
        try {
            const sale = await this.salesService.getSales();
            res.json(sale);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    }
    async getOneSale(req, res) {
        try {
            const oneSale = await this.salesService.getOneSale(req.params.id);
            res.json(oneSale);
        }catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    }
    async updateSale(req, res) {
        try {
            const {product_id, order_id, quantity} = req.body
            const updateSale = await this.salesService.updateSale(req.params.id, product_id, order_id, quantity)
            res.json(updateSale)
        }catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    }
    async deleteSale(req, res) {
        try {
            const deleteSale = await this.salesService.deleteSale(req.params.id)
            res.json(deleteSale)
        }
        catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    }
}

module.exports = SalesController