import styles from "./TopArtist.module.css";
import { FaStar } from "react-icons/fa";

export const TopArtist = () => {
  let artists = [
    {
      cover: "https://picsum.photos/400",
      artist: "lorem 2ipsums",
    },
    {
      cover: "https://picsum.photos/400",
      artist: "lorem ipsums",
    },
    {
      cover: "https://picsum.photos/400",
      artist: "lorem 2ipsums",
    },
    {
      cover: "https://picsum.photos/400",
      artist: "lorem 2ipsums",
    },
    {
      cover: "https://picsum.photos/400",
      artist: "lorem 2ipsums",
    },
    {
      cover: "https://picsum.photos/400",
      artist: "lorem 2ipsums",
    },
  ];
  return (
    <section className={styles.container}>
      <div className={styles.artists__header}>
        <h2>Top artist</h2>
        <span>
          <FaStar color={"#ffd500"} />
        </span>
      </div>
      <ul className={styles.artists__list}>
        {artists.map((artist) => (
          <Artist {...artist} />
        ))}
      </ul>
    </section>
  );
};

const Artist = ({ cover, artist }) => (
  <li className={styles.artist}>
    <img className={styles.artist__image} src={cover} alt={artist} />
    <p className={styles.artist__name}>{artist}</p>
  </li>
);
