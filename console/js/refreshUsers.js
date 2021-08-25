import newUser from "./createNewUser.js";

const getUsers = async () => {
  const response = await fetch("http://localhost:3000/api", { method: "GET" });
  const user = await response.json();
  const users = user.usersOn;
  return users;
};

setInterval(getUsers, 1000)

const usersArray = await getUsers();

const updateUsers = () => {
  for (let i = 0; i < usersArray.length; i++) {
    newUser(usersArray[i].avatar, usersArray[i].name, usersArray[i].id);
  }
};

const gettingNewIds = async () => {
  const newIds = []
  for (let i = 0; i < usersArray.length; i++) {
    newIds.push( usersArray[i].id );
  }
  return newIds;
};

const newIds = await gettingNewIds();

const gettingIds = async () => {
  const users = document.querySelectorAll(".usersList__item");
  const userIds = [];
  for (let i = 0; i < users.length; i++) {
    userIds.push(users[i].getAttribute("data-id"));
  }
  return userIds;
};

const userIds = await gettingIds();

if(JSON.stringify(newIds) != JSON.stringify(userIds)){
  updateUsers();
}




