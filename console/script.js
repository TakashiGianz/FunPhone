const getRoom = async () => {
  const response = await fetch("http://localhost:3000/api", { method: "GET" });
  const room = await response.json();
  const roomId = room.sala;
  return roomId;
};

const roomId = await getRoom();

const codeBox = document.querySelector(".codeBox__code");

codeBox.textContent = roomId;
