import { useContext, useEffect, useState } from "react";
import styles from "./searchBar.module.css";
import { MdSearch } from "react-icons/md";
import { SearchContext } from "../../context/searchContext";

export const SearchBar = () => {
  const { setData } = useContext(SearchContext);
  const baseApi = "https://ws.audioscrobbler.com";
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = new FormData(e.target);
    let value = data.get("search");
    fetch(
      `${baseApi}/2.0/?method=track.search&track=${value}&api_key=6965faf2bd1c9d882e72bc0aef536612&format=json`
    )
      .then((data) => data.json())
      .then((json) => setData(json.results.trackmatches.track));
  };

  return (
    <div className={styles.searchBar}>
      <form className={styles.searchBar__form} onSubmit={handleSubmit}>
        <input type="text" name="search" />
        <button type="submit" className={styles.searchBar__icon}>
          <MdSearch />
        </button>
      </form>
    </div>
  );
};
