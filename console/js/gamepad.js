const submitBtn = document.querySelector(".roomCode__button");
const form = document.querySelector(".codeForm");
const URL = "http://5532-187-75-47-172.ngrok.io/api";

const postNewUser = async (user, room) => {
  console.log(`${URL}/rooms/${room}`);
  const response = await fetch(`${URL}/rooms/${room}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({user}),
  });
  const answerNewUser = await response.json();
  const isRoomAvailable = answerNewUser?.id !== undefined
  return isRoomAvailable;
};


form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const user = document.querySelector("#username").value;
  const room = document.querySelector("#roomCode").value;
  const isRoomAvailable = await postNewUser(user, room);
  if(isRoomAvailable){
    window.location.href = "connected.html"
  } else {
    const header = document.querySelector('.upperText')
    const errorMessage = document.createElement("h3")
    errorMessage.className = "errorMessage"
    errorMessage.textContent = "Try Again"
    header.appendChild(errorMessage)
  }
});
