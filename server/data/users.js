const users = [];

const getUsers = () => {
  return users;
};

const addUser = (user) => {
  users.push(user);
  return user;
};

module.exports = { getUsers, addUser };
