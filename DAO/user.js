const User = require("../db/models/user.js");

class UserDAO {

    createUser(name, login, hashPassword) {
        return new User({
                    name,
                    login,
                    password: hashPassword
              }).save()
            
    }

    getUsers() {
        return User.find();
    }

    getOneUser(id) {
        return User.findById(id);
    }

    updateUser(id, name) {
        return User.findOneAndUpdate(
            {_id: id}, 
            {
                $set: name
            },
            {new: true}
            );
    }

    deleteUser(id) {
        return User.deleteOne({id})


    }

    loginVerification(login) {
        return User.findOne({login: login})


    }
}

module.exports = new UserDAO()