import { useEffect } from "react";
import { usePlayer } from "../hooks/PlayerContext";
import socket from "../socketSetup";
import Swal from "sweetalert2";

const WinnerE = () => {
  const { winnerOk, setWinnerOk, playersRoom } = usePlayer();

  useEffect(() => {
    socket.on("winnerTc", (winnerNew) => {
      const { confirm, winningPiece, winningUser } = winnerNew;
      setWinnerOk(confirm);
      if (confirm) {
        let remainingTime = 6;
        let timerInterval;

        Swal.fire({
          icon: "success",
          title: "Limpiando juego¡",
          html: `<p>Ganador(a):</p>${winningUser} con la pieza - ${winningPiece}</br></br> <p>Limpiando en <b>${remainingTime}</b> segundos</p>`,
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
            socket.emit("buttonRestartTheGameTc", {
              confirm: true,
              room: playersRoom,
            });
          }
        });
      }
    });
  }, [playersRoom, setWinnerOk]);

  return winnerOk;
};

export default WinnerE;
