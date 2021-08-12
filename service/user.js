
class UserService {

    constructor(userDAO) {
        this.userDAO = userDAO
    }
    createUser(name, login, password) {
        return this.userDAO.createUser(name, login, password)
    }

    getUsers() {
        return this.userDAO.getUsers();
    }

    getOneUser(id) {
        return this.userDAO.getOneUser(id);
    }

    updateUser(id, name, login, password) {
        return this.userDAO.updateUser(id, name, login, password);
    }

    deleteUser(id) {
        return this.userDAO.deleteUser(id);
    }
}

    module.exports = UserService