import createNewDiv from "./createNewDiv.js";

const codeBox = document.querySelector(".codeBox__code");
const URL = "http://localhost:3000/api";
const UPDATE_INTERVAL_SECONDS = 1 

const fetchNewRoom = async () => {
  const response = await fetch(`${URL}/rooms`);
  const room = await response.json();
  return room?.id;
};

const getRoom = async () => {
  const roomId = await fetchNewRoom();
  if (roomId) {
    codeBox.textContent = roomId;
  }
  // TODO: Tratar Erro
};

const fetchUsersOn = async () => {
  const response = await fetch(`${URL}/rooms/${codeBox.textContent}`);
  const user = await response.json();
  return user?.usersOn;
};

const getIdsFromUserDivs = () => {
  const userDivs = [...document.querySelector(".usersList").children];
  return userDivs.map((userDiv) => userDiv.getAttribute("data-id"));
};

const isElementOnList = (list, element) => {
  const found = list.find((listItem) => listItem === element);
  return found !== undefined;
};

const getItemsToAdd = (currentItems, newItems) =>
  newItems.filter((newItem) => !isElementOnList(currentItems, newItem.id));

const updateDivs = async () => {
  const currentItems = getIdsFromUserDivs();
  const newItems = await fetchUsersOn();
  const userDivs = [...document.querySelectorAll(".usersList__item")];

  userDivs.forEach((item) => {
    const idToFind = item.getAttribute("data-id");
    const foundItem = newItems.find((newItem) => newItem.id === idToFind);
    if (!foundItem) {
      item.remove();
    }
  });

  const itemsToAdd = getItemsToAdd(currentItems, newItems);
  itemsToAdd.forEach((item) => createNewDiv(item));

  const usersList = document.querySelector(".usersList").children;
  const hasNewItems = newItems.length !== 0;
  const hasCurrentItems = usersList.length !== 0;
  if (!hasNewItems && !hasCurrentItems) {
		const waiting = {
			avatar:"/img/anonymous-avatar-icon-25.jpg",
			name:"Waiting...",
			id: "-1",
		}
    createNewDiv(waiting);
  }
};
await getRoom();

setInterval(updateDivs, UPDATE_INTERVAL_SECONDS * 1000);