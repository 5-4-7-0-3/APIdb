import { UserService } from "../service/user";





describe('UserService', () => {
  const obj = {
    createUser: (name, login, hashPassword) => {
      return new Promise((ok) => ok({name, login, hashPassword}))  //TODO
    }
  }

  afterEach(() => {
    jest.restoreAllMocks();
  });
  


   it('createUser', async () => {
    const userService = new UserService(obj);
    const name = 'testtest'
    const login = 'testtest'
    const hashPassword = '$2a$07$XWYvWeefPKi5AiDY4gCQve3nXzJ2Fh52.5kl/cS51R26SDWaDPl8y'

    const res = await userService.createUser(name, login, hashPassword);
    expect(res).toBeUndefined();
  });
});
