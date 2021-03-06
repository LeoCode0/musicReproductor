import styles from "./Carousel.module.css";
import { NoItems } from "../NoItems";
import { FaPlay } from "react-icons/fa";
import { useEffect } from "react";

const CarouselItem = ({ cover, song, songName, album }) => {
  const handleClick = () => {
    console.log(song);
  };

  return (
    <li className={styles.list__item}>
      <div className={styles.item__image}>
        <img src={cover} alt={songName} />
        <button
          type="button"
          onClick={handleClick}
          className={styles.item__button}
        >
          <FaPlay />
        </button>
      </div>
      <div className={styles.item__description}>
        <p className={styles.song_name}>{songName}</p>
        <p className={styles.song_artist}>{album}</p>
      </div>
    </li>
  );
};

export const Carousel = () => {
  let data = [];
  const s = [
    {
      cover: "https://picsum.photos/300",
      song: "test",
      songName: "test",
      album: "test",
      key: "1",
    },
    {
      cover: "https://picsum.photos/300",
      song: "test",
      songName: "test",
      album: "test",
      key: "1",
    },
    {
      cover: "https://picsum.photos/300",
      song: "test",
      songName: "test",
      album: "test",
      key: "1",
    },
    {
      cover: "https://picsum.photos/300",
      song: "test",
      songName: "test",
      album: "test",
      key: "1",
    },
    {
      cover: "https://picsum.photos/300",
      song: "test",
      songName: "test",
      album: "test",
      key: "1",
    },
  ];

  useEffect(() => {
    fetch(
      `https://ws.audioscrobbler.com/2.0/?method=track.getsimilar&artist=paulo_londra&api_key=${process.env.API_KEY}&format=json`
    )
      .then((data) => data.json())
      .then((json) => console.log(json));
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>TEXTO PARA MOSTRAR</h2>
      <ul className={styles.list}>
        {data.length === 0 ? (
          <NoItems message="Aún no has agregado canciones a favoritos" />
        ) : (
          data.map((song) => <CarouselItem {...song} />)
        )}
      </ul>
    </div>
  );
};
