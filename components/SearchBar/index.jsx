import { useEffect, useState } from "react";
import styles from "./searchBar.module.css";
import { MdSearch } from "react-icons/md";

export const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <form className={styles.searchBar__form}>
        <input type="text" />
      </form>
      <button type="button" className={styles.searchBar__icon}>
        <MdSearch />
      </button>
    </div>
  );
};
