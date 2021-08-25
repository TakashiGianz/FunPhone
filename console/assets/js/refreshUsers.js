const getUsers = async () => {
  const response = await fetch("http://localhost:3000/api", { method: "GET" });
  const user = await response.json();
  const users = user.usersOn;
  return users;
};

const usersArray = await getUsers();

const refreshUsers = () => console.log(usersArray);

// setInterval( refreshUsers, 1000)

export default usersArray;