import { FaPlay } from "react-icons/fa";
import styles from "./RecentPlayer.module.css";

export const RecentPlayed = ({ recentPlayed }) => {
  let data = [
    {
      cover: "https://picsum.photos/300",
      song: "test",
      songName: "test",
      author: "test",
      number: "1",
    },
    {
      cover: "https://picsum.photos/300",
      song: "test",
      songName: "test",
      author: "test",
      number: "2",
    },
    {
      cover: "https://picsum.photos/300",
      song: "test",
      songName: "test",
      author: "test",
      number: "3",
    },
    {
      cover: "https://picsum.photos/300",
      song: "test",
      songName: "test",
      author: "test",
      number: "4",
    },
    {
      cover: "https://picsum.photos/300",
      song: "test",
      songName: "test",
      author: "test",
      number: "5",
    },
  ];

  console.log(data);
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Recientemente escuchadas</h2>
      <ul className={styles.list}>
        {data.map((item) => (
          <RecentSong {...item} />
        ))}
      </ul>
    </section>
  );
};

const RecentSong = ({ number, cover, songName, author, duration }) => {
  const handleClick = () => {
    console.log("Reproducir musica");
  };
  return (
    <li className={styles.list__song}>
      <div className={styles.song__description}>
        <span className={`${styles.song__number} ${styles.gray__text} `}>
          {number}
        </span>
        <img className={styles.song__image} src={cover} alt="SongName" />
        <div>
          <p className={styles.song__name}>{songName}</p>
          <p className={`${styles.gray__text} ${styles.song__author}`}>
            {author}
          </p>
        </div>
      </div>
      <div className={styles.song__tools}>
        <span className={`${styles.song__duration} ${styles.gray__text}`}>
          3:00
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
