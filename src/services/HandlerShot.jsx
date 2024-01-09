import socket from "../socketSetup";

const HandlerShot = (
  row,
  column,
  gameBoard,
  playerPieces,
  setGameBoard,
  playersRoom,
  roundsStorage
) => {
  const newBoard = [...gameBoard];
  newBoard[row][column] = playerPieces;
  setGameBoard(newBoard);

  socket.emit("motionTc", {
    room: playersRoom,
    board: gameBoard,
    roundsStorage,
  });

  const dataNextTurn = {
    next: true,
    room: playersRoom,
    count: 1,
  };

  socket.emit("nextTurnTc", dataNextTurn);

  socket.emit("checkWinnerTc", {
    verify: true,
    board: gameBoard,
    room: playersRoom,
  });
};

export default HandlerShot;
