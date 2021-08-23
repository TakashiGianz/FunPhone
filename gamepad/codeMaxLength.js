const roomCodeInput = document.querySelector(".roomCode__input");

roomCodeInput.addEventListener("input", () => {
  if (roomCodeInput.value.length > roomCodeInput.maxLength)
    roomCodeInput.value = roomCodeInput.value.slice(0, roomCodeInput.maxLength);
});
