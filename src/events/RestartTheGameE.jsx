import socket from "../socketSetup";

const RestartTheGameE = (playersRoom) => {
  socket.emit("restartTheGameTc", {
    confirm: true,
    room: playersRoom,
  });
};

export default RestartTheGameE;
