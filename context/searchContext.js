import { useState, createContext } from "react";

export const initialState = () => {
  const [search, setSearch] = useState([]);

  return {
    search,
    setSearch,
  };
};

export const SearchContext = createContext({});
