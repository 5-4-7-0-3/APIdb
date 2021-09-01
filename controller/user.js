const bcrypt = require('bcryptjs')
const {validationResult, Result} = require('express-validator');
const DAO = require('../DAO');


class UserController {
    constructor(userService, tokenService, tokenDAO) {
        this.userService = userService,
        this.tokenService = tokenService
    }

    async createUser(req, res) {
        try {
            const err = validationResult(req)
            if (!err.isEmpty()) {
                res.status(400).json(err);
            }
            const {name, login, password} = req.body
            console.log(req.body)
            const hashPassword = bcrypt.hashSync(password, 7);
            const newUser = await this.userService.createUser(name, login, hashPassword)
            res.json(newUser)

        } catch (err) {
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
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    }

    async updateUser(req, res) {
        try {
            const err = validationResult(req)
            if (!err.isEmpty()) {
                res.status(400).json(err);
            }
            const {name, login, password} = req.body
            const hashPassword = bcrypt.hashSync(password, 7);
            const updateUser = await this.userService.updateUser(req.params.id, {
                name,
                login,
                password: hashPassword,
            })
            res.json(updateUser)
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    }

    async deleteUser(req, res) {
        try {
            const deleteUser = await this.userService.deleteUser(req.params.id)
            res.json(deleteUser)
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    }

    async registrationUser(req, res) {
        try {
            const err = validationResult(req)
            if (!err.isEmpty()) {
                res.status(400).json(err);
            }
            console.log(req.body)
            const {name, login, password} = req.body

            const candidate = await this.userService.loginVerification(login)
            if (candidate) {

                return res.status(400).json({message: "User exists"})
            } else {
                const hashPassword = bcrypt.hashSync(password, 7);
                await this.userService.createUser(name, login, hashPassword)
                return res.json({message: "registration successful"})
            }


        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }

    }

    async authUser(req, res) {
        try {
            const {login, password} = req.body
            const user = await this.userService.loginVerification(login)
            if (!user) {
                return res.status(400).json({message: `User with this ${login} was not found`})
            }

            const validationPassword = bcrypt.compareSync(password, user.password)

            if (!validationPassword) {
                return res.status(400).json({message: `Wrong password`})
            }
            const accessToken = this.tokenService.generateAccessToken(user.id)
            const refreshToken = this.tokenService.generateRefreshToken()
            this.tokenService.saveRefreshToken(user.id, refreshToken)
            return res.json({accessToken, refreshToken})

        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    }
    async refreshToken(req, res) {
        try {
            const {user_id, refreshToken} = req.body
            const validationToken = await this.tokenService.updateRefreshToken(user_id, refreshToken)
            if(validationToken <= 0) {
                return res.status(400).json({message: `invalid token`})
            }
            const checkToken = this.tokenService.checkToken(refreshToken)
            if(checkToken) {
            this.tokenService.updateRefreshToken(user_id, refreshToken)
            const newAccessToken = this.tokenService.generateAccessToken(user_id)
            const newRefreshToken = this.tokenService.generateRefreshToken()
            this.tokenService.saveRefreshToken(user_id, newRefreshToken)
            return res.json({newAccessToken, newRefreshToken})
            } else if (!checkToken) {
              this.tokenService.updateRefreshToken(user_id, refreshToken)
              return res.status(400).json({message: `invalid token`})
            }

        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    }
}

module.exports = UserController
