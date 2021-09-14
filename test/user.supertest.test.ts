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

    const res = await request.post('/user/registration')
      .send({
        name: faker.name.firstName(),
        login: faker.name.firstName(),
        password: faker.name.firstName()
      })

    expect(res.body).toStrictEqual({ message: "registration successful" })
    // expect(res.body).toStrictEqual({ message: "registration successful" })

  });

  // it('auth', async () => {

  //   const res = await request.post('/user/auth')


  // });

  // it('refreshToken', async () => {

  //   const res = await request.post('/user/auth/refresh')


  // });

  // it('createUser', async () => {

  //   const res = await request.post('/user')


  // });

  // it('getUsers', async () => {

  //   const res = await request.get('/user')

  // });

  // it('getOneUser', async () => {

  //   const res = await request.get('/user/:id')

  // });

  // it('updateUser', async () => {

  //   const res = await request.put('/user/:id')

  // });

  // it('deleteUser', async () => {

  //   const res = await request.delete('/user/:id')

  // });
});

