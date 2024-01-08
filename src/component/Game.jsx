import { usePlayer } from "../hooks/PlayerContext";
import {
  UpdatePlayersE,
  UserIdE,
  TotalOnlineUsersE,
  BothUsersConnectedE,
  PlayersQueueE,
  CurrentTurnE,
  ConnectionMessagesE,
  ConnectionErrorMessageE,
  DisconnectedUsersE,
  ScoreE,
  UserMovementsE,
  RoundsE,
  ChatMessageE,
  NicknameE,
  RoomE,
  PlayerPiecesE,
  FullShotsE,
  BoardUpdateE,
  WinnerE,
  ClearStorageE,
} from "../events";
import {
  RoundsStorage,
  SetGameOver,
  GameOver,
  SetPlayerPieces,
  SetShowSettings,
  SetConnectionMessages,
  SetErrorAlias,
  SetErrorRoom,
} from "../services";
import { aliasValidator, roomValidator } from "../services/Validator";
import GameSettings from "./GameSettings";

const Game = () => {
  const {
    players,
    playersRoom,
    storedRounds,
    connectionMessages,
    rounds,
    roundsStorage,
    setGameOver,
    gameOver,
    score,
    gamePieces,
    setPlayerPieces,
    userNameId,
    setShowSettings,
    setConnectionMessages,
    setDisconnectedUsers,
    setErrorAlias,
    setErrorRoom,
  } = usePlayer();

  let connectedUsers = Object.keys(players).length;

  NicknameE();

  RoomE();

  UpdatePlayersE();

  UserIdE();

  TotalOnlineUsersE(connectedUsers, playersRoom);

  BothUsersConnectedE(playersRoom);

  ConnectionMessagesE();

  ConnectionErrorMessageE();

  DisconnectedUsersE();

  PlayersQueueE();

  CurrentTurnE();

  ScoreE();

  UserMovementsE();

  RoundsE();

  PlayerPiecesE();

  ChatMessageE();

  FullShotsE();

  BoardUpdateE();

  WinnerE();

  ClearStorageE();

  RoundsStorage(storedRounds);

  SetGameOver(connectionMessages, rounds, roundsStorage, setGameOver);

  GameOver(gameOver, score);

  SetPlayerPieces(gamePieces, setPlayerPieces, userNameId);

  SetShowSettings(connectionMessages, setShowSettings);

  SetConnectionMessages(
    players,
    connectionMessages,
    setConnectionMessages,
    setDisconnectedUsers
  );

  SetErrorAlias(setErrorAlias, aliasValidator, userNameId);

  SetErrorRoom(setErrorRoom, roomValidator, playersRoom);

  return (
    <>
      <GameSettings />
    </>
  );
};

export default Game;
