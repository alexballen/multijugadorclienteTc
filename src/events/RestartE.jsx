import socket from "../socketSetup";

const RestartE = (playersRoom) => {
  socket.emit("buttonRestartTheGameTc", { confirm: true, room: playersRoom });
};

export default RestartE;
