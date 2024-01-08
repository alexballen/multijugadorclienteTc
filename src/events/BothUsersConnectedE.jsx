import socket from "../socketSetup";
import { usePlayer } from "../hooks/PlayerContext";
import { useEffect, useRef } from "react";

const BothUsersConnectedE = (playersRoom) => {
  const {
    bothUsersConnected,
    setBothUsersConnected,
    connectionMessages,
    setConnectionMessages,
  } = usePlayer();

  const roomRef = useRef();

  useEffect(() => {
    roomRef.current = playersRoom;
  }, [playersRoom]);

  useEffect(() => {
    socket.on("bothUsersConnectedTc", (bothUsersConnected) => {
      const { connected } = bothUsersConnected;
      if (connected) {
        const connectionData = {
          connected: true,
          room: roomRef.current,
        };
        socket.emit("successfulConnectionTc", connectionData);
        setBothUsersConnected(true);
        setConnectionMessages(bothUsersConnected);
      } else {
        const connectionData = {
          connected: false,
          room: roomRef.current,
        };
        socket.emit("successfulConnectionTc", connectionData);
        setBothUsersConnected(false);
        setConnectionMessages(bothUsersConnected);
      }
    });
  }, []);

  return {
    bothUsersConnected,
    connectionMessages,
  };
};

export default BothUsersConnectedE;
