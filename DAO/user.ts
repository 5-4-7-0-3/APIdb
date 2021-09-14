import { User } from "../db/models/user";

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

  updateUser(id, { name, login, password }) {
    return User.findOneAndUpdate(
      { _id: id },
      {
        $set: { name, login, password }
      },
      { new: true }
    );
  }

  deleteUser(id) {
    return User.deleteOne({ id })


  }

  loginVerification(login) {
    return User.findOne({ login: login })


  }
}

const userDAO = new UserDAO()

export { userDAO }
