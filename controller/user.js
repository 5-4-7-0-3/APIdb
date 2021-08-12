
class UserController {
    constructor(userService) {
        this.userService = userService
    }
    async createUser(req, res) {
        try {
            const {name, login, password} = req.body
            const newUser = await this.userService.createUser(name, login, password)
            res.json(newUser)

        }catch (err) {
            console.error(err);
            res.status(500).json(err);
        }

    }
    async getUsers(req, res) {
        try {
            const user = await this.userService.getUsers();
            res.json(user);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    }
    async getOneUser(req, res) {
        try {
            const oneUser = await this.userService.getOneUser(req.params.id);
            res.json(oneUser);
        }catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    }
    async updateUser(req, res) {
        try {
            const {name, login, password} = req.body
            const updateUser = await this.userService.updateUser(req.params.id, name, login, password)
            res.json(updateUser)
        }catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    }
    async deleteUser(req, res) {
        try {
            const deleteUser = await this.userService.deleteUser(req.params.id)
            res.json(deleteUser)
        }
        catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    }
}

module.exports = UserController