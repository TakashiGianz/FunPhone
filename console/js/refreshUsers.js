import newUser from "./settingUsers.js";

const getUsers = async () => {
  const response = await fetch("http://localhost:3000/api", { method: "GET" });
  const user = await response.json();
  const users = user.usersOn;
  return users;
};

const usersArray = await getUsers();

const updateUsers = () => {
  for (let i = 0; i < usersArray.length; i++) {
    newUser(usersArray[i].avatar, usersArray[i].name, usersArray[i].id);
  }
};

updateUsers();

const users = document.querySelectorAll(".usersList__item");
users.forEach
