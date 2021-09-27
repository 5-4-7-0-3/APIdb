class ProductCategoryService {
    productCategoryDAO: any;
    constructor(productCategoryDAO) {
        this.productCategoryDAO = productCategoryDAO;
    }
    createCategory(name) {
        return this.productCategoryDAO.createCategory(name);
    }

    getCategories() {
        return this.productCategoryDAO.getCategories();
    }

    getOneCategory(id) {
        return this.productCategoryDAO.getOneCategory(id);
    }

    updateCategory(id, name) {
        return this.productCategoryDAO.updateCategory(id, name);
    }
    deleteCategory(id) {
        return this.productCategoryDAO.deleteCategory(id);
    }
}
export { ProductCategoryService };
