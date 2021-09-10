
class SalesService {
    salesDAO: any;
    constructor(salesDAO) {
        this.salesDAO = salesDAO
    }
    createSales( product_id, order_id, quantity) {
        return this.salesDAO.createSales( product_id, order_id, quantity);
    }

    getSales() {
        return this.salesDAO.getSales();
    }

    getOneSale(id) {
        return this.salesDAO.getOneSale(id);
    }

    updateSale(id, product_id, order_id, quantity) {
        return this.salesDAO.updateSale(id, product_id, order_id, quantity);
    }
    deleteSale(id) {
        return this.salesDAO.deleteSale(id);
    }
}
export {SalesService}
