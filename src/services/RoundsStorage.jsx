import { useEffect } from "react";
import { usePlayer } from "../hooks/PlayerContext";

const RoundsStorage = (storedRounds) => {
  const { roundsStorage, setRoundsStorage } = usePlayer();

  useEffect(() => {
    const storedRoundsFromLocalStorage = JSON.parse(
      localStorage.getItem("roundsTc")
    );
    if (storedRoundsFromLocalStorage) {
      setRoundsStorage(storedRoundsFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    if (storedRounds.length > 0) {
      setRoundsStorage((prevUniqueRoundIds) => [
        ...prevUniqueRoundIds,
        storedRounds,
      ]);
    }
  }, [storedRounds]);

  useEffect(() => {
    if (roundsStorage.length > 0) {
      localStorage.setItem("roundsTc", JSON.stringify(roundsStorage));
    }
  }, [roundsStorage]);

  return roundsStorage;
};

export default RoundsStorage;
