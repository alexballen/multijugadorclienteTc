import { useRef } from "react";
import { usePlayer } from "../hooks/PlayerContext";
import { UserDisconnectionMessage, ScrollTop } from "../services";
import s from "./GameSettings.module.css";
import GoToPlay from "./GoToPlay";
import Alias from "./Alias";
import Room from "./Room";
import Rounds from "./Rounds";
import ReloadPage from "./ReloadPage";
import NewGame from "./NewGame";
import GoOut from "./GoOut";
import Score from "./Score";
import GameBoard from "./GameBoard";
import SendMessages from "./SendMessages";
import MessageContainer from "./MessageContainer";

const GameSettings = () => {
  const {
    turn,
    disconnectedUsers,
    connectionMessages,
    connectionErrorMessage,
    storedUserChatMessage,
    showSettings,
  } = usePlayer();
  const messagesContainerRef = useRef(null);

  ScrollTop(messagesContainerRef, storedUserChatMessage);

  return (
    <div className={s.container}>
      <div className={s.title}>
        <h1>Tres En Linea</h1>
      </div>

      {!showSettings && (
        <div className={s.nickname}>
          <h3 className={s.nicknametitle}>Configurar Sala de Juego</h3>

          <Alias />

          <Room />

          <div className={s.margindivs}>
            <h3>Rondas</h3>
            <div className={s.buttonselect}>
              <Rounds />

              <ReloadPage />

              <GoToPlay />
            </div>
          </div>
        </div>
      )}

      {!showSettings && (
        <div className={s.nickname}>
          <h3 className={s.nicknametitle}>Conectarse a Sala de Juego</h3>

          <Alias />

          <Room />

          <GoToPlay />

          {connectionErrorMessage.message && (
            <div className={s.connectionmsm}>
              {connectionErrorMessage.message}
            </div>
          )}
        </div>
      )}

      {showSettings && (
        <div className={s.containerturnscore}>
          <div className={s.turn}>
            <h3>Turno:</h3>
            <h4>{turn.message}</h4>

            <NewGame />

            <GoOut />
          </div>
          <Score />
        </div>
      )}

      {showSettings && <GameBoard />}

      {showSettings && (
        <div className={s.containerchat}>
          <h3>Chat </h3>

          <MessageContainer messagesContainerRef={messagesContainerRef} />

          <SendMessages />
        </div>
      )}

      {!showSettings &&
        connectionMessages.message === "Conexion incompleta¡" && (
          <div className={s.containermsm}>
            <div className={s.connectionmsmerror}>
              <p>Esperando que se conecten todos los jugadores...</p>
            </div>
          </div>
        )}

      {!showSettings && disconnectedUsers && (
        <div className={s.containermsm}>
          <div className={s.connectionmsmerror}>
            {disconnectedUsers && UserDisconnectionMessage(disconnectedUsers)}
          </div>
        </div>
      )}
    </div>
  );
};

export default GameSettings;
