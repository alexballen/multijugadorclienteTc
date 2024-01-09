import { useEffect } from "react";

const SetPlayerPieces = (gamePieces, setPlayerPieces, userNameId) => {
  useEffect(() => {
    const findPiece = gamePieces.filter(
      (piece) => Object.keys(piece)[0] === userNameId
    );

    if (findPiece[0]) {
      const getPiece = findPiece[0][userNameId];
      setPlayerPieces(getPiece);
    }
  }, [gamePieces, userNameId, setPlayerPieces]);
};

export default SetPlayerPieces;
