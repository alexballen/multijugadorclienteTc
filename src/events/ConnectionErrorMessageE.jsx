import { useEffect } from "react";
import { usePlayer } from "../hooks/PlayerContext";
import socket from "../socketSetup";

const ConnectionErrorMessageE = () => {
  const { connectionErrorMessage, setConnectionErrorMessage } = usePlayer();

  useEffect(() => {
    socket.on("connectionErrorMessageTc", (errorMessage) => {
      setConnectionErrorMessage(errorMessage);
    });
  }, [setConnectionErrorMessage]);

  return connectionErrorMessage;
};

export default ConnectionErrorMessageE;
