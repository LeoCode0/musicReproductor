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

export const Carousel = (songs) => {
  return (
    <ul>
      {songs.map((song) => (
        <CarouselItem {...song} />
      ))}
    </ul>
  );
};
