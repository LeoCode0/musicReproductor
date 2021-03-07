import { MdNotifications, MdComputer } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import styles from "./Promotion.module.css";

export const Notification = () => {
  return (
    <section className={styles.container}>
      <div className={styles.notification__header}>
        <h2>Notificaciones</h2>
        <span>
          <MdNotifications color="#808080" />
        </span>
      </div>
      <div className={styles.notification__body}>
        <div className={styles.notification__item}>
          <span className={styles.twitter}>
            <FaTwitter />
          </span>
          <div className="text__container">
            <p className={styles.notification__text}>Visita mi twitter</p>
            <a
              href="https://twitter.com/LeoCode0"
              target="__blank"
              rel="noopener noreferrer"
              className={styles.notification__link}
            >
              Da click aquí
            </a>
          </div>
        </div>
        <div className={styles.notification__item}>
          <span className={styles.computer}>
            <MdComputer />
          </span>
          <div className="text__container">
            <p className={styles.notification__text}>
              Mira mis otros proyectos
            </p>
            <a
              href="https://challenge-march.vercel.app/"
              className={styles.notification__link}
              target="__blank"
              rel="noopener noreferrer"
            >
              Da click aquí
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
