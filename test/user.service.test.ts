import faker from "faker"
import bcrypt from 'bcryptjs';
import { UserService } from "../service/user";

describe('UserService', () => {

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('createUser', async () => {
    const userService = new UserService(UserDaoObj);
    const name: string = faker.name.firstName();
    const login: string = faker.internet.userName();
    const password: string = faker.internet.password();
    const hashPassword: string = bcrypt.hashSync(password, 7);
    const res = await userService.createUser(name, login, hashPassword);
    const validationPassword: boolean = bcrypt.compareSync(password, res.password);

    expect(res).not.toBeNull();
    expect(res.name).toBe(name);
    expect(res.login).toBe(login);
    expect(res.password).toBe(hashPassword);
    expect(validationPassword).toBe(true);
  });

  it('getUsers', async () => {
    const userService = new UserService(UserDaoObj);
    const res = await userService.getUsers();
    expect(res).not.toBeNull();
  });

  it('getOneUser', async () => {
    const userService = new UserService(UserDaoObj);
    const id: string = faker.datatype.uuid();

    const res = await userService.getOneUser(id);
    expect(res._id).toBe(id);
    expect(res).not.toBeNull();
  });

  it('updateUser', async () => {
    const userService = new UserService(UserDaoObj);
    const id: string = faker.datatype.uuid();
    let name: string;
    let login: string;
    let password: string;

    name = random() ? faker.name.firstName() : null
    login = random() ? faker.name.firstName() : null
    password = random() ? faker.name.firstName() : null

    const res = await userService.updateUser(id, { name, login, password });


    if (name != null) {
      expect(res.name).toBe(name);
    }
    if (login != null) {
      expect(res.login).toBe(login);
    }
    if (password != null) {
      expect(res.password).toBe(password);
    }
    expect(res).not.toBeNull();
  });

  it('deleteUser', async () => {
    const userService = new UserService(UserDaoObj);
    const id: string = faker.datatype.uuid();
    const res = await userService.deleteUser(id);

    expect(res).toEqual({ deletedCount: 1 });
  });

  it('loginVerification', async () => {
    const userService = new UserService(UserDaoObj);
    const login = faker.internet.userName()
    const res = await userService.loginVerification(login);

    expect(res.id).not.toBeNull();
    expect(res.name).not.toBeNull();
    expect(res.login).not.toBeNull();
    expect(res.password).not.toBeNull();
    expect(res.login).toBe(login);
  });
});

const UserDaoObj = {
  createUser: (name, login, hashPassword) => {
    return new Promise((res) => res({ _id: faker.datatype.uuid(), name, login, password: hashPassword }));
  },

  getUsers: () => {
    return new Promise((res) => res([
      createUser(),
      createUser(),
      createUser()
    ]))
  },

  getOneUser: (id) => {
    return new Promise((res) => res({
      _id: id,
      name: faker.name.firstName(),
      login: faker.internet.userName(),
      password: bcrypt.hashSync(faker.internet.password(), 7)
    }));
  },

  updateUser: (id, { name, login, password }) => {
    return new Promise((res) => res({
      _id: id,
      name: name || faker.name.firstName(),
      login: login || faker.internet.userName(),
      password: password || bcrypt.hashSync(faker.internet.password(), 7)
    }))
  },

  deleteUser: (id) => {
    if (id != null) {
      return new Promise((res) => res({
        deletedCount: 1
      }))
    }
  },

  loginVerification: (login) => {
    return new Promise((res) => res({ _id: faker.datatype.uuid(), name: faker.name.firstName(), login, password: bcrypt.hashSync(login) }))
  },
}

function random() {
  return Boolean(Math.round(Math.random()))
}
function createUser() {
  return { _id: faker.datatype.uuid(), name: faker.name.firstName(), login: faker.internet.userName(), password: bcrypt.hashSync(faker.internet.password(), 7) }
}
