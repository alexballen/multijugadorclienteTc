import { useEffect } from "react";
import { usePlayer } from "../hooks/PlayerContext";
import socket from "../socketSetup";
import Swal from "sweetalert2";

const FullShotsE = () => {
  const { winnerOk, playersRoom } = usePlayer();

  useEffect(() => {
    socket.on("fullShotsTc", (fullShotsTc) => {
      if (!winnerOk && fullShotsTc) {
        let remainingTime = 6;
        let timerInterval;

        Swal.fire({
          icon: "success",
          title: "Limpiando juego¡",
          html: `<p>Sin ganador¡</p><p>Limpiando en <b>${remainingTime}</b> segundos</p>`,
          timer: 6000,
          timerProgressBar: true,
          allowOutsideClick: false,

          didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
              remainingTime--;
              timer.textContent = `${remainingTime}`;
            }, 1000);
          },

          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            socket.emit("buttonRestartTheGame", {
              confirm: true,
              room: playersRoom,
            });
          }
        });
      }
    });
  }, [winnerOk, playersRoom]);
};

export default FullShotsE;
