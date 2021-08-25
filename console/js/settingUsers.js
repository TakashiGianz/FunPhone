import usersArray from "./refreshUsers.js";

const users = document.querySelectorAll(".usersList__item");
const userName = document.querySelectorAll(".usersList__item__name");
const userAvatar = document.querySelectorAll(".usersList__item__img");

for (let i = 0; i < users.length-(users.length - usersArray.length); i++) {
  userName[i].textContent = usersArray[i].name;
  userAvatar[i].src = usersArray[i].avatar;
}


