import { useEffect } from "react";
import { usePlayer } from "../hooks/PlayerContext";
import socket from "../socketSetup";

const BoardUpdateE = () => {
  const { gameBoard, setGameBoard } = usePlayer();

  useEffect(() => {
    socket.on("boardUpdateTc", (boardUpdate) => {
      setGameBoard(boardUpdate);
    });
  }, []);

  return gameBoard;
};

export default BoardUpdateE;
