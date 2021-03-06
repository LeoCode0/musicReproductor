import styles from "./TopArtist.module.css";

export const TopArtist = () => {
  let artists = [
    {
      cover: "https://picsum.photos/400",
      artist: "Jose Madero",
    },
    {
      cover: "https://picsum.photos/400",
      artist: "Jose Madero",
    },
    {
      cover: "https://picsum.photos/400",
      artist: "Jose Madero",
    },
    {
      cover: "https://picsum.photos/400",
      artist: "Jose Madero",
    },
    {
      cover: "https://picsum.photos/400",
      artist: "Jose Madero",
    },
    {
      cover: "https://picsum.photos/400",
      artist: "Jose Madero",
    },
  ];
  return (
    <section className={styles.container}>
      <div className={styles.artists__header}>
        <h2>Top artist</h2>
        <span>icon</span>
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
