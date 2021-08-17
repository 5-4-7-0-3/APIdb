const User = require("../db/models/user.js");

class UserDAO {

    createUser(name, login, hashPassword) {
        return User.query().insert({
            name,
            login,
            password: hashPassword,
            role: 'admin'
        })

    }

    getUsers() {
        return User.query();
    }

    getOneUser(id) {
        return User.query().findById(id);
    }

    updateUser(id, name, login, password, role) {
        return User.query()
            .findById(id)
            .patch({
                name,
                login,
                password,
                role
            });
    }

    deleteUser(id) {
        return User.relatedQuery('orders')
            .for([id])
            .delete()


    }

    loginVerification(login) {
        return User.query().where('login', login)


    }
}

module.exports = new UserDAO()