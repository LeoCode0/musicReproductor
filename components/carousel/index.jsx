import { FavoritesContext } from "../../context/favoritesContext";
import { SearchContext } from "../../context/searchContext";
import { FaPlay, FaStar } from "react-icons/fa";
import styles from "./Carousel.module.css";
import { NoItems } from "../NoItems";
import { useContext } from "react";

const CarouselItem = ({ name, artist, image, url }) => {
  const { data, setData } = useContext(FavoritesContext);

  const handleClick = () => {
    let favoriteSong = { name, artist, image, url };
    const myData = data.splice();
    myData.push(favoriteSong);
    setData([...data, favoriteSong]);
  };

  return (
    <li className={styles.list__item}>
      <div className={styles.item__image}>
        <img src={image[1]["#text"]} alt={name} />
        <button type="button" className={styles.item__button}>
          <a href={url} rel="noopener noreferrer" target="__blank">
            <FaPlay />
          </a>
        </button>
        <button
          className={`${styles.item__star} ${styles.item__button}`}
          onClick={handleClick}
        >
          <FaStar />
        </button>
      </div>
      <div className={styles.item__description}>
        <p className={styles.song_name}>{name} </p>{" "}
        <p className={styles.song_artist}>{artist}</p>
      </div>
    </li>
  );
};

export const Carousel = ({ context, defaultText, errorText }) => {
  let dataSearch = useContext(SearchContext);
  let dataFavorites = useContext(FavoritesContext);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{defaultText}</h2>
      <ul className={styles.list}>
        {context === "search" ? (
          dataSearch.data.length === 0 ? (
            <NoItems message={errorText} />
          ) : (
            dataSearch.data.map((item) => (
              <CarouselItem {...item} key={item.name} />
            ))
          )
        ) : dataFavorites.data.length === 0 ? (
          <NoItems message={errorText} />
        ) : (
          dataFavorites.data.map((item) => (
            <CarouselItem {...item} key={item.name} />
          ))
        )}
      </ul>
    </div>
  );
};
