import { usePlayer } from "../hooks/PlayerContext";
import { RestartTheGameE } from "../events";
import { MdRestartAlt } from "react-icons/md";
import s from "./GameSettings.module.css";

const NewGame = () => {
  const { playersRoom } = usePlayer();

  return (
    <div className={s.containerTfiReload}>
      <button>
        <MdRestartAlt
          className={s.tfireload}
          onClick={() => RestartTheGameE(playersRoom)}
        />
        <p>Nuevo juego</p>
      </button>
    </div>
  );
};

export default NewGame;
