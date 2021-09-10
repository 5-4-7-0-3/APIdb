import bcrypt from 'bcryptjs';
import { validationResult } from 'express-validator';



class UserController {
  userService: any;
  tokenService: any;
  constructor(userService, tokenService) {
    this.userService = userService,
      this.tokenService = tokenService
  }

  async createUser(req, res) {
      const err = validationResult(req)
      if (!err.isEmpty()) {
        res.status(400).json(err);
      }
      const { name, login, password } = req.body
      console.log(req.body)
      const hashPassword = bcrypt.hashSync(password, 7);
      const newUser = await this.userService.createUser(name, login, hashPassword)
      res.json(newUser)
  }

  async getUsers(req, res) {
      const user = await this.userService.getUsers();
      res.json(user);
  }

  async getOneUser(req, res) {
      const oneUser = await this.userService.getOneUser(req.params.id);
      res.json(oneUser);
  }

  async updateUser(req, res) {
      const err = validationResult(req)
      if (!err.isEmpty()) {
        res.status(400).json(err);
      }
      const { name, login, password } = req.body
      const hashPassword = bcrypt.hashSync(password, 7);
      const updateUser = await this.userService.updateUser(req.params.id, {
        name,
        login,
        password: hashPassword,
      })
      res.json(updateUser)
  }

  async deleteUser(req, res) {
      const deleteUser = await this.userService.deleteUser(req.params.id)
      res.json(deleteUser)
  }

  async registrationUser(req, res) {
      const err = validationResult(req)
      if (!err.isEmpty()) {
        res.status(400).json(err);
      }
      console.log(req.body)
      const { name, login, password } = req.body

      const candidate = await this.userService.loginVerification(login)
      if (candidate) {

        return res.status(400).json({ message: "User exists" })
      } else {
        const hashPassword = bcrypt.hashSync(password, 7);
        await this.userService.createUser(name, login, hashPassword)
        return res.json({ message: "registration successful" })
      }
  }

  async authUser(req, res) {
      const { login, password } = req.body
      const user = await this.userService.loginVerification(login)
      if (!user) {
        return res.status(400).json({ message: `User with this ${login} was not found` })
      }

      const validationPassword = bcrypt.compareSync(password, user.password)

      if (!validationPassword) {
        return res.status(400).json({ message: `Wrong password` })
      }
      const accessToken = this.tokenService.generateAccessToken(user.id)
      const refreshToken = this.tokenService.generateRefreshToken()
      this.tokenService.saveRefreshToken(user.id, refreshToken)
      return res.json({ accessToken, refreshToken })

  }
  async refreshToken(req, res) {
      const { user_id, refreshToken } = req.body
      const validationToken = await this.tokenService.updateRefreshToken(user_id, refreshToken)
      const checkToken = this.tokenService.checkToken(refreshToken)
      if (validationToken <= 0 || !checkToken) {
        return res.status(400).json({ message: `invalid token` })
      }
      const newAccessToken = this.tokenService.generateAccessToken(user_id)
      const newRefreshToken = this.tokenService.generateRefreshToken()
      await this.tokenService.saveRefreshToken(user_id, newRefreshToken)
      return res.json({ newAccessToken, newRefreshToken })
    }
}

export {UserController}
