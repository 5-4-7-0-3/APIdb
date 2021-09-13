import { UserService } from "../service/user";



describe('UserService', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });


   it('createUser', () => {
    const userService = new UserService(createUser);
    const name = 'testtest'
    const login = 'testtest'
    const hashPassword = '$2a$07$XWYvWeefPKi5AiDY4gCQve3nXzJ2Fh52.5kl/cS51R26SDWaDPl8y'

    const res = userService.createUser(name, login, hashPassword);
    expect(res).toBeUndefined();
  });
});
