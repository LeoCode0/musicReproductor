import {
  SearchContext,
  initialState as searchState,
} from "../context/searchContext";
import { SearchBar } from "../components/SearchBar";
import { SongContext } from "../context/songContext";
import { Carousel } from "../components/carousel";
import { initialState } from "../initialState";
import { useEffect } from "react";

function home() {
  useEffect(() => {}, []);
  return (
    <SongContext.Provider value={initialState}>
      <SearchContext.Provider value={searchState}>
        <SearchBar />
        <Carousel />
      </SearchContext.Provider>
      <Carousel />
    </SongContext.Provider>
  );
}

export default home;
