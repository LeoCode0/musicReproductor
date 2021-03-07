import { createContext, useState } from "react";

export const initialState = () => {
  const [data, setData] = useState([]);

  return {
    data,
    setData,
  };
};

export const SearchContext = createContext(null);
