import { useEffect } from "react";
import { usePlayer } from "../hooks/PlayerContext";
import socket from "../socketSetup";

const ClearStorageE = () => {
  const { roundsStorage, setRoundsStorage } = usePlayer();

  useEffect(() => {
    socket.on("clearStorageTc", (clearStorage) => {
      if (clearStorage) {
        localStorage.removeItem("rounds");
        setRoundsStorage([]);
      }
    });
  }, []);

  return roundsStorage;
};

export default ClearStorageE;
