import { FaMusic } from "react-icons/fa";
import styles from "./NoItem.module.css";

export const NoItems = ({ message }) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <FaMusic />
      </div>
      <p className={styles.text}>{message}</p>
    </div>
  );
};
