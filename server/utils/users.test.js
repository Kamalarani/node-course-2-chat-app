const expect = require("expect");
const {Users} = require('./users');

describe('Users',() => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: "balu",
      room: "balu room"
    }, {
      id: '2',
      name: 'madhu',
      room: 'madhu room'
    }, {
      id: '3',
      name: 'rohith',
      room: 'madhu room'
    }];
  });

  it('should add new user' , () => {
  var users = new Users();
  var user = {
    id: '123',
    name: 'sathya',
    room: 'office staff'
  };
  var resUser = users.addUser(user.id,user.name,user.room);

  expect(users.users).toEqual([user]);
});

it('should remove a data', () => {
  var userId = '1';
  var user = users.removeUser(userId);
  expect(user.id).toBe(userId);
  expect(users.users.length).toBe(2);

});

it("Should not remove a data",() => {
  var userId = '21';
  var user = users.getUser(userId);
  expect(user).toNotExist(userId);

});

it("Should find Users", () => {
  var userId = '2';
  var user = users.getUser(userId);
  expect(user.id).toBe(userId);
});

it("should not find user" , () => {
  var userId = '89';
  var user = users.getUser(userId);
  expect(user).toNotExist(userId);
});

it('should return names from madhu room', () => {
  var userList = users.getUserList('madhu room');
  expect(userList).toEqual(['madhu','rohith']);
});

it('should return names from balu room', () => {
  var userList = users.getUserList('balu room');
  expect(userList).toEqual(['balu']);
});
});
