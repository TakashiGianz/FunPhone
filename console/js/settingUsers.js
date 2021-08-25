const newUser = (avatar, name, id) => {
  const usersSection = document.querySelector(".usersList");
  const usersDiv = document.createElement("div");
  const usersImg = document.createElement("img");
  const usersName = document.createElement("span");

  usersDiv.classList.add("usersList__item");
  usersImg.classList.add("usersList__item__img");
  usersName.classList.add("usersList__item__name");
  
  usersImg.src = avatar;
  usersName.textContent = name;
  usersDiv.setAttribute("data-id", id);

  usersSection.appendChild(usersDiv);
  usersDiv.appendChild(usersImg);
  usersDiv.appendChild(usersName);
};

export default newUser;
