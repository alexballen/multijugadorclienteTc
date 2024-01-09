import { useEffect } from "react";
import { usePlayer } from "../hooks/PlayerContext";
import socket from "../socketSetup";

const ScoreE = () => {
  const { score, setScore } = usePlayer();
  useEffect(() => {
    socket.on("scoreTc", (scoreUser) => {
      setScore(scoreUser);
    });
  }, []);

  return score;
};

export default ScoreE;
