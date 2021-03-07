import { useState, useEffect } from "react";
import styles from "./TopArtist.module.css";
import { FaStar } from "react-icons/fa";

export const TopArtist = () => {
  const [state, setstate] = useState([]);
  useEffect(() => {
    fetch(
      `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=6965faf2bd1c9d882e72bc0aef536612&limit=6&format=json`
    )
      .then((data) => data.json())
      .then((json) => setstate(json.artists.artist));
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.artists__header}>
        <h2>Top artist</h2>
        <span>
          <FaStar color={"#ffd500"} />
        </span>
      </div>
      <ul className={styles.artists__list}>
        {state.map((artist) => (
          <Artist artist={artist} key={artist.id} />
        ))}
      </ul>
    </section>
  );
};

const Artist = (artist) => {
  const data = artist.artist;
  return (
    <li className={styles.artist}>
      <img
        className={styles.artist__image}
        src={data.image[0]["#text"]}
        alt={data.name}
      />
      <p className={styles.artist__name}>{data.name}</p>
    </li>
  );
};
