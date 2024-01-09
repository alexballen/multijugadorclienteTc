import { useEffect } from "react";
import { usePlayer } from "../hooks/PlayerContext";
import socket from "../socketSetup";

const RoundsE = () => {
  const { rounds, setRounds } = usePlayer();

  useEffect(() => {
    socket.on("roundsTc", (roundsNew) => {
      setRounds(roundsNew);
    });
  }, []);

  return rounds;
};

export default RoundsE;
