const User = require("../db/models/user.js");

class UserDAO {

    createUser(name, login, password) {
        return User.query().insert({
            name,
            login,
            password
        })

    }
    getUsers() {
        return User.query();
    }
    getOneUser(id) {
        return User.query().findById(id);
    }
    updateUser(id, name, login, password) {
        return User.query()
            .findById(id)
            .patch({
                name,
                login,
                password
            });
    }
    deleteUser(id) {
        return User.relatedQuery('orders')
            .for([id])
            .delete()


    }
    authUser(login, password) {
            return User.query().select('login', 'password')

    }

}

module.exports = new UserDAO()