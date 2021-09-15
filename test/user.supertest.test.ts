import app from '../index'
import supertest from 'supertest'
import faker from 'faker'

const request = supertest(app)

// beforeAll(async () => {
//   const url = `mongodb+srv://Freak:5t4r3e2w1q@api.hngeh.mongodb.net/${databaseName}?retryWrites=true&w=majority`  //TODO
//   await mongoose.connect(url)
// })

describe('UserRoutes', () => {

  it('registration', async () => {
    const name = faker.name.firstName()
    const login = faker.name.firstName()
    const password = faker.name.firstName()
    const res = await request.post('/user/registration')
      .send({
        name,
        login,
        password
      })

    expect(res.body).not.toBeNull();
    expect(res.body.name).toBe(name);
    expect(res.body.login).toBe(login);
  });

  it('auth', async () => {
    const name = faker.name.firstName()
    const login = faker.name.firstName()
    const password = faker.name.firstName()

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

  it('refreshToken', async () => {
    const name = faker.name.firstName()
    const login = faker.name.firstName()
    const password = faker.name.firstName()

    const registration = await request.post('/user/registration')
      .send({
        name,
        login,
        password
      })
    const user_id = registration.body._id
    const auth = await request.post('/user/auth')
      .send({
        login,
        password
      })
    const refreshToken = auth.body.refreshToken
    const res = await request.post('/user/auth/refresh')
      .send({ user_id, refreshToken })

    expect(res.body.accessToken).not.toBeNull()
    expect(res.body.refreshToken).not.toBeNull()

  });

  it('createUser', async () => {
    const name = faker.name.firstName()
    const login = faker.name.firstName()
    const res = await request.post('/user')
      .send({
        name,
        login,
        password: faker.name.firstName(),
      })

    expect(res.body).not.toBeNull();
    expect(res.body.name).toBe(name);
    expect(res.body.login).toBe(login);
  });
  it('getUsers', async () => {
    const name = faker.name.firstName()
    const login = faker.name.firstName()
    const password = faker.name.firstName()

    await request.post('/user/registration')
      .send({
        name,
        login,
        password
      })
    const auth = await request.post('/user/auth')
      .send({
        login,
        password
      })
    const token = auth.body.accessToken

    const res = await request.get('/user')
      .auth(token, { type: "bearer" })

    expect(res.body).not.toBeNull();
  });

  it('getOneUser', async () => {
    const name = faker.name.firstName()
    const login = faker.name.firstName()
    const password = faker.name.firstName()

    const registration = await request.post('/user/registration')
      .send({
        name,
        login,
        password
      })
    const id = registration.body._id
    const auth = await request.post('/user/auth')
      .send({
        login,
        password
      })
    const token = auth.body.accessToken

    const res = await request.get(`/user/${id}`)
      .auth(token, { type: "bearer" })

    expect(res.body._id).toBe(id);
    expect(res.body).not.toBeNull();
  });

  it('updateUser', async () => {
    let name: string = faker.name.firstName()
    let login: string = faker.name.firstName()
    let password: string = faker.name.firstName()
    let updateName
    let updateLogin
    let updatePassword

    const registration = await request.post('/user/registration')
      .send({
        name,
        login,
        password
      })
    const id = registration.body._id

    const auth = await request.post('/user/auth')
      .send({
        login,
        password
      })
    const token = auth.body.accessToken

    if (Boolean(Math.round(Math.random()))) {
      name = null
    } else {
      name = faker.name.firstName();
    }

    if (Boolean(Math.round(Math.random()))) {
      login = null
    } else {
      login = faker.name.firstName();
    }

    if (Boolean(Math.round(Math.random()))) {
      password = null
    } else {
      password = faker.name.firstName();
    }

    const res = await request.put(`/user/${id}`)
      .auth(token, { type: "bearer" })
      .send({ name, login, password })

    if (updateName != null) {
      expect(res.body.name).toBe(updateName);
    }
    if (updateLogin != null) {
      expect(res.body.login).toBe(updateLogin);
    }
    if (updatePassword != null) {
      expect(res.body.password).toBe(updatePassword);
    }

    expect(res).not.toBeNull();
  });

  it('deleteUser', async () => {
    const name = faker.name.firstName()
    const login = faker.name.firstName()
    const password = faker.name.firstName()

    const registration = await request.post('/user/registration')
      .send({
        name,
        login,
        password
      })
    const _id = registration.body._id
    const auth = await request.post('/user/auth')
      .send({
        login,
        password
      })
    const token = auth.body.accessToken
    const res = await request.delete(`/user/${_id}`)
      .auth(token, { type: "bearer" })

    expect(res.body).toEqual({ deletedCount: 1 });
  });
});

