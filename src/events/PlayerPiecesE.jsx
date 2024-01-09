import { useEffect } from "react";
import { usePlayer } from "../hooks/PlayerContext";
import socket from "../socketSetup";

const PlayerPiecesE = () => {
  const { gamePieces, setGamePieces } = usePlayer();

  useEffect(() => {
    socket.on("playerPieceTc", (playerPiece) => {
      setGamePieces(playerPiece);
    });
  }, [setGamePieces]);

  return gamePieces;
};

export default PlayerPiecesE;
