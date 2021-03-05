import { useEffect } from "react";
import { FaPlay } from "react-icons/fa";

const CarouselItem = ({ cover, song, songName, album }) => {
  const handleClick = () => {
    console.log(song);
  };

  return (
    <li>
      <div>
        <img src={cover} alt={songName} />
        <button type="button" onClick={handleClick}>
          <FaPlay />
        </button>
      </div>
      <div>
        <p>{songName}</p>
        <p>{album}</p>
      </div>
    </li>
  );
};

export const Carousel = () => {
  const songs = [
    { cover: "test", song: "test", songName: "test", album: "test", key: "1" },
  ];

  useEffect(() => {
    fetch("https://api.deezer.com/search?q=eminem").then((data) =>
      console.log(data)
    );
  }, []);

  return (
    <ul>
      {songs.map((song) => (
        <CarouselItem {...song} />
      ))}
    </ul>
  );
};
