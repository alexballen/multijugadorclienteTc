import socket from "../socketSetup";

const HandlerNewUser = (userNameId, playersRoom, rounds) => {
  const idUserAndRoom = {
    idUser: userNameId,
    room: playersRoom,
    rounds,
  };

  socket.emit("newUserTc", idUserAndRoom);
};

export default HandlerNewUser;
