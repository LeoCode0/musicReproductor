import { createContext, useState } from "react";

export const initialState = () => {
  const [data, setData] = useState([]);

  return {
    setData,
    data,
  };
};

export const FavoritesContext = createContext(initialState);
