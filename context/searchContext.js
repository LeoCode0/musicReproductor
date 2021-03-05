import { useState, createContext } from "react";

const initialState = () => {
  const [search, setSearch] = useState([]);

  return {
    search,
    setSearch,
  };
};

export const SearchContext = createContext(initialState);
