import { FaPlay, FaPause } from "react-icons/fa";
import { useState, useEffect } from "react";
import styles from "./Player.module.css";

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

export const Player = () => {
  const [song, setSong] = useState({
    name: "Smells",
    image: [{ "#text": "./" }, { "#text": "./" }],
    artist: { name: "undefined" },
  });
  useEffect(() => {
    fetch(
      `http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=rock&api_key=6965faf2bd1c9d882e72bc0aef536612&limit=1&format=json`
    )
      .then((data) => data.json())
      .then((json) => setSong(json.tracks.track[0]));
  }, []);

  return (
    <div className={`${styles.player} ${styles.mobile}`}>
      <img
        className={styles.player__image}
        src={song.image[1]["#text"]}
        alt={song.name}
      />
      <div className={styles.player__details}>
        <p className={styles.player__song}>{song.name}</p>
        <p className={styles.player__artist}>{song.artist.name}</p>
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

export const Desk = () => {
  const [song, setSong] = useState({
    name: "Smells",
    image: [{ "#text": "./" }, { "#text": "./" }],
    artist: { name: "undefined" },
  });
  useEffect(() => {
    fetch(
      `http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=pop&api_key=6965faf2bd1c9d882e72bc0aef536612&limit=1&format=json`
    )
      .then((data) => data.json())
      .then((json) => setSong(json.tracks.track[0]));
  }, []);
  return (
    <div className={styles.player}>
      <p className={styles.white}>Reproduciendo</p>
      <img
        className={styles.player__image}
        src={song.image[1]["#text"]}
        alt={song.name}
      />
      <div className={styles.player__details}>
        <p className={styles.player__song}>{song.name}</p>
        <p className={styles.player__artist}>{song.artist.name}</p>
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
