import { useEffect } from "react";
import { UpdatePlayers } from "../services";
import { usePlayer } from "../hooks/PlayerContext";
import socket from "../socketSetup";

const UpdatePlayersE = () => {
  const { players, setPlayers } = usePlayer();

  useEffect(() => {
    socket.on("updatePlayersTc", (userNew) => {
      setPlayers((prevPlayers) => UpdatePlayers(prevPlayers, userNew));
    });
  }, []);

  return players;
};

export default UpdatePlayersE;
