const submitBtn = document.querySelector(".roomCode__button");
const form = document.querySelector(".codeForm");
const URL = "http://localhost:3000/api";

const postNewUser = async (user, room) => {
  const response = await fetch(`${URL}/rooms/${room}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user }),
  });
  const answerNewUser = await response.json();
  const isRoomAvailable = answerNewUser?.id !== undefined;
  return isRoomAvailable;
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const user = document.querySelector("#username").value;
  const room = document.querySelector("#roomCode").value;
  const isRoomAvailable = await postNewUser(user, room);
  if (isRoomAvailable) {
    window.location.href = "connected.html";
  } else {
    if (document.getElementsByClassName("errorMessage").length > 0) return;
    else {
      const header = document.querySelector(".upperText");
      const errorMessage = document.createElement("h3");
      errorMessage.className = "errorMessage";
      errorMessage.textContent = "Room doesn't exist, try again!";
      header.appendChild(errorMessage);
    }
  }
});
