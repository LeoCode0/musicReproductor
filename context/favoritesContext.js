import { createContext, useState } from "react";

const initialState = () => {
  const [favorites, setFavorites] = useState([]);

  return {
    setFavorites,
    favorites,
  };
};

export const FavoritesContext = createContext(initialState);
