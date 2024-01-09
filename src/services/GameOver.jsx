import { useEffect } from "react";
import { Winners } from "../services";
import Swal from "sweetalert2";

const GameOver = (gameOver, score) => {
  useEffect(() => {
    if (gameOver && Object.keys(score).length > 0) {
      const winerUser = Winners(score);

      setTimeout(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Ganador(es) del juego ${winerUser}`,
          html: `Reiniciar para empezar un nuevo juego¡¡`,
          showConfirmButton: false,
          timer: 4500,
        });
      }, 6800);
    }
  }, [gameOver, score]);
};

export default GameOver;
