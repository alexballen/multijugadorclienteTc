/* import { useEffect , useState } from "react"; */
import { usePlayer } from "../hooks/PlayerContext";
import { HandlerShot } from "../services";
import socket from "../socketSetup";
import sa from "./TresEnLinea.module.css";

const GameBoard = () => {
  /* const [coordinates, setCoordinates] = useState([]); */
  const {
    gameBoard,
    players,
    turn,
    winnerOk,
    gameOver,
    playerPieces,
    setGameBoard,
    playersRoom,
    roundsStorage,
  } = usePlayer();

  /* useEffect(() => {
    socket.on("winningCoordinates", (winningCoordinates) => {
      console.log("winningCoordinates ->", winningCoordinates);
      setCoordinates(winningCoordinates);
    });
  }, []); */

  return (
    <div className={sa.board_container}>
      {gameBoard.map((row, rowIndex) => (
        <div className={sa.board} key={rowIndex}>
          {row.map((cell, colIndex) => (
            <button
              value={gameBoard}
              disabled={
                players[socket?.id]?.user !== turn?.user
                  ? true
                  : false || cell !== null || winnerOk || gameOver
              }
              key={`${rowIndex}-${colIndex}`}
              onClick={() =>
                HandlerShot(
                  rowIndex,
                  colIndex,
                  gameBoard,
                  playerPieces,
                  setGameBoard,
                  playersRoom,
                  roundsStorage
                )
              }
              className={cell === "X" ? sa.cellRed : sa.cellGreen}
              /* className={`${sa.cell} ${
                coordinates.some(
                  (coord) => coord[0] === rowIndex && coord[1] === colIndex
                )
                  ? sa.winningCell
                  : ""
              } ${cell === "X" ? sa.cellRed : sa.cellGreen}`} */
            >
              {cell}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
