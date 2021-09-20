const rooms = [];
const users = [
  {
    name: "Fernando",
    avatar: "/img/fe.jpg",
    id: 0,
  },
  {
    name: "Camila",
    avatar: "/img/pp.jpg",
    id: 1,
  },
  {
    name: "Fabio",
    avatar: "/img/fabio.jpg",
    id: 2,
  },
  {
    name: "Ellen",
    avatar: "/img/ellen.jpg",
    id: 3,
  },
  {
    name: "Mariane",
    avatar: "/img/Mari.jpg",
    id: 4,
  },
];
const INITIAL_ROOM = 321;

export const getRoom = (req, res) => {
  const totalRooms = rooms.length;
  const newRoom = { id: totalRooms + INITIAL_ROOM, usersOn: [] };
  rooms.push(newRoom);
  res.json(newRoom);
};

const getRoomById = (id) => {
  return rooms.filter((room) => room.id.toString() === id);
};

export const getRoomUsers = (req, res) => {
  const roomNumber = req.params.id;
  const roomList = getRoomById(roomNumber);
  const roomExists = roomList.length > 0;
  if (roomExists) {
    res.json(roomList[0]);
  } else {
    res.json({ id: roomNumber, usersOn: [] });
    //   res.status(500).json({error: "Room not found."})
  }
};

export const addNewUser = (req, res) => {
  const roomNumber = req.params.id;
  const userId = req.body.user;
  const usersList = users.filter((user) => user.id.toString() === userId);
  const userExists = usersList.length > 0;
  if (userExists) {
    const roomList = getRoomById(roomNumber);
    const roomExists = roomList.length > 0;
    if (roomExists) {
      const isOnList =
        roomList[0].usersOn.findIndex((user) => user.id.toString() === userId) >
        -1;
      console.log(isOnList);
      if (!isOnList) {
        roomList[0].usersOn.push(usersList[0]);
      }
      res.json(roomList[0]);
    } else {
      res.json("Ok");
      // TODO: Tratar erro
    }
  } else {
    res.json("Ok");
  }
};
