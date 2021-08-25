import usersArray from "./refreshUsers.js";

const NewUser = () => {
  const usersSection = document.querySelector(".usersList");
  const usersDiv = document.createElement("div");
  const usersImg = document.createElement("img");
  const usersName = document.createElement("span");

  usersDiv.classList.add("usersList__item");
  usersImg.classList.add("usersList__item__img");
  usersName.classList.add("usersList__item__name");

  usersSection.appendChild(usersDiv);
  usersDiv.appendChild(usersImg);
  usersDiv.appendChild(usersName);
};

for (let i = 0; i < usersArray.length - 1|| i < 0; i++) {
  NewUser()
}

const users = document.querySelectorAll(".usersList__item");
const userName = document.querySelectorAll(".usersList__item__name");
const userAvatar = document.querySelectorAll(".usersList__item__img");

for (let i = 0; i < users.length-(users.length - usersArray.length); i++) {
  userName[i].textContent = usersArray[i].name;
  userAvatar[i].src = usersArray[i].avatar;
}


