import styles from "./RecentPlayer.module.css";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";

export const RecentPlayed = () => {
  const [songs, setsongs] = useState([]);
  useEffect(() => {
    fetch(
      `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${process.env.API_KEY}&limit=10&format=json`
    )
      .then((data) => data.json())
      .then((json) => setsongs(json.tracks.track));
  }, []);
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Top 10</h2>
      <ul className={styles.list}>
        {songs.map((item, id) => (
          <RecentSong data={item} number={id} key={id} />
        ))}
      </ul>
    </section>
  );
};

const RecentSong = ({ data, number }) => {
  const handleClick = () => {
    console.log("Reproducir musica");
  };
  return (
    <li className={styles.list__song}>
      <div className={styles.song__description}>
        <span className={`${styles.song__number} ${styles.gray__text} `}>
          {number + 1}
        </span>
        <img
          className={styles.song__image}
          src={data.image[1]["#text"]}
          alt="SongName"
        />
        <div>
          <p className={styles.song__name}>{data.name}</p>
          <p className={`${styles.gray__text} ${styles.song__author}`}>
            {data.artist.name}
          </p>
        </div>
      </div>
      <div className={styles.song__tools}>
        <span className={`${styles.song__duration} ${styles.gray__text}`}>
          {data.listeners}
        </span>
        <button
          className={styles.song__play}
          type="button"
          onClick={handleClick}
        >
          <FaPlay />
        </button>
      </div>
    </li>
  );
};
