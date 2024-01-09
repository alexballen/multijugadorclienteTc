import { usePlayer } from "../hooks/PlayerContext";
import { useEffect } from "react";
import socket from "../socketSetup";

const PlayersQueueE = () => {
  const { playersQueue, setPlayersQueue } = usePlayer();

  useEffect(() => {
    socket.on("playersQueueTc", (playersQueue) => {
      setPlayersQueue(playersQueue);
    });
  }, []);

  return playersQueue;
};

export default PlayersQueueE;
