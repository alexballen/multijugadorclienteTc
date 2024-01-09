import { useEffect } from "react";
import { usePlayer } from "../hooks/PlayerContext";
import socket from "../socketSetup";

const CurrentTurnE = () => {
  const { turn, setTurn } = usePlayer();

  useEffect(() => {
    socket.on("currentTurnTc", (currentTurn) => {
      setTurn(currentTurn);
    });
  }, []);

  return turn;
};

export default CurrentTurnE;
