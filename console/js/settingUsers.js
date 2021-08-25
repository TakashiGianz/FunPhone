import usersArray from "./refreshUsers.js";

const username = document.querySelectorAll(".usersList__item__name");

for (let i = 0; i < username.length; i++) {
  username[i].textContent = usersArray[i];
}
