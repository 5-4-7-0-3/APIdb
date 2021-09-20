import app from '../index'
import supertest from 'supertest'
import faker from 'faker'
import bcrypt from 'bcryptjs'
import { param } from 'express-validator'

const request = supertest(app)

// beforeAll(async () => {
//   const url = `mongodb+srv://Freak:5t4r3e2w1q@api.hngeh.mongodb.net/${databaseName}?retryWrites=true&w=majority`  //TODO
//   await mongoose.connect(url)
// })

describe('UserRoutes', () => {

  it('registration', async () => {
    const name = faker.name.firstName()
    const login = faker.internet.userName()
    const password = faker.internet.password()
    const res = await request.post('/user/registration')
      .send({
        name,
        login,
        password
      })
    expect(res.body.name).not.toBe(0)
    expect(res.body.login).not.toBe(0)
    expect(res.body.name).not.toBeDefined
    expect(res.body.login).not.toBeDefined
    expect(res.body).not.toBeNull()
    expect(res.body.name).toBe(name)
    expect(res.body.login).toBe(login)
  });

  it('registrationError', async () => {
    const name = "test"
    const login = "test"
    const password = "test"
    const res = await request.post('/user/registration')
      .send({
        name,
        login,
        password
      })

    expect(res.body.errors[0].msg).toContain('Login password must be more than 5 characters and less than 24')
    expect(res.body.errors[1].msg).toContain('Password must be more than 5 characters and less than 24')

  });

  it('auth', async () => {
    const name = faker.name.firstName()
    const login = faker.internet.userName()
    const password = faker.internet.password()

    await request.post('/user/registration')
      .send({
        name,
        login,
        password
      })

    const res = await request.post('/user/auth')
      .send({
        login,
        password
      })

    expect(res.body.accessToken).not.toBeNull()
    expect(res.body.refreshToken).not.toBeNull()
  });

  it('authError', async () => {
    const login: string = "123456789"
    const password: string = "123456789"
    const res = await request.post('/user/auth')
      .send({
        login,
        password
      })

    expect(res.body.message).toContain(`User with this ${login} was not found`)
  });

  it('authValidationError', async () => {
    await request.post('/user/registration')
      .send({
        name: "testtest",
        login: "testtest",
        password: "testtest"
      })

    const res = await request.post('/user/auth')
      .send({
        login: "testtest",
        password: "testtest1"
      })

    expect(res.body.message).toContain('Wrong password')
  });

  it('refreshToken', async () => {
    const { id, refreshToken } = await auth()
    const res = await request.post('/user/auth/refresh')
      .send({ id, refreshToken })

    expect(res.body).toMatchObject({})
    expect(res.body.accessToken).not.toBeNull()
    expect(res.body.refreshToken).not.toBeNull()
  });

  it('refreshTokenError', async () => {
    const { id } = await auth()
    const refreshToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
    const res = await request.post('/user/auth/refresh')
      .send({ id, refreshToken })

    expect(res.body.message).toContain('invalid token')
  });

  it('createUser', async () => {
    const { name, login } = await auth()
    const res = await request.post('/user')
      .send({
        name,
        login,
        password: faker.internet.password(),
      })

    expect(res.body).not.toBeNull();
    expect(res.body.name).toBe(name);
    expect(res.body.login).toBe(login);
  });

  it('createUserError', async () => {
    const res = await request.post('/user')
      .send({
        name: "test",
        login: "test",
        password: faker.internet.password(),
      })

    expect(res.body.errors[0].msg).toContain('Login password must be more than 5 characters and less than 24')
  });

  it('getUsers', async () => {
    const { accesstoken } = await auth()
    const res = await request.get('/user')
      .auth(accesstoken, { type: "bearer" })

    expect(res.body).not.toBeNull();
  });

  it('getOneUser', async () => {
    const { id, accesstoken } = await auth()
    const res = await request.get(`/user/${id}`)
      .auth(accesstoken, { type: "bearer" })

    expect(res.body._id).toBe(id);
    expect(res.body).not.toBeNull();
  });

  it('updateUser', async () => {
    const { id, accesstoken } = await auth()
    let updateName: string = faker.name.firstName()
    let updateLogin: string = faker.internet.userName()
    let updatePassword: string = faker.internet.password()

    const res = await request.put(`/user/${id}`)
      .auth(accesstoken, { type: "bearer" })
      .send({ name: updateName, login: updateLogin, password: updatePassword })
    const hashPassword = bcrypt.compareSync(updatePassword, res.body.password)

    expect(res.body.name).toBe(updateName);
    expect(res.body.login).toBe(updateLogin);
    expect(hashPassword).toBeTruthy()
    expect(res).not.toBeNull();
  });

  it('updateUserError', async () => {
    const { id, accesstoken } = await auth()
    const res = await request.put(`/user/${id}`)
      .auth(accesstoken, { type: "bearer" })
      .send({
        name: "test",
        login: "test",
        password: "test"
      })
      expect(res.body.errors[0].msg).toContain('Login password must be more than 5 characters and less than 24')
      expect(res.body.errors[1].msg).toContain('Password must be more than 5 characters and less than 24')
  });

  it('deleteUser', async () => {
    const { id, accesstoken } = await auth()
    const res = await request.delete(`/user/${id}`)
      .auth(accesstoken, { type: "bearer" })

    expect(res.body).toEqual({ deletedCount: 1 });
  });
});

async function auth() {
  let name: string = faker.name.firstName()
  let login: string = faker.internet.userName()
  let password: string = faker.internet.password()

  const registration = await request.post('/user/registration')
    .send({
      name,
      login,
      password
    })

  const id: any = registration.body._id
  const auth = await request.post('/user/auth')
    .send({
      login,
      password
    })

  const accesstoken: any = auth.body.accessToken
  const refreshToken: any = auth.body.refreshToken
  return ({ id, name, login, password, accesstoken, refreshToken })
}
