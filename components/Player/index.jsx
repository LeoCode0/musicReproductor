import styles from "./Player.module.css";
import { FaPlay, FaPause } from "react-icons/fa";

export const Player = () => {
  const playTrack = (song) => {
    song.play();
  };

  const stopTrack = (song) => {
    song.stop();
  };

  const handleClick = (e) => {
    const pauseElement = e.currentTarget.lastChild;
    const playElement = e.currentTarget.firstChild;

    if (pauseElement.classList.contains("hidden")) {
      pauseElement.classList.remove("hidden");
      playElement.classList.add("hidden");
    } else {
      pauseElement.classList.add("hidden");
      playElement.classList.remove("hidden");
    }
  };

  return (
    <div className={styles.player}>
      <img
        className={styles.player__image}
        src="https://picsum.photos/300"
        alt=""
      />
      <div className={styles.player__details}>
        <p className={styles.player__song}>Cancion</p>
        <p className={styles.player__artist}>Artista</p>
      </div>
      <button
        className={styles.player__button}
        type="button"
        onClick={(e) => handleClick(e)}
      >
        <FaPlay />
        <FaPause className="hidden" />
      </button>
    </div>
  );
};
