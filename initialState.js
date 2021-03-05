import { useState } from "react";

export const initialState = () => {
  const [song, setSong] = useState({});

  return {
    song,
    setSong,
  };
};
