import {
  SearchContext,
  initialState as searchState,
} from "../context/searchContext";
import { SearchBar } from "../components/SearchBar/";
import { SongContext } from "../context/songContext";
import { Carousel } from "../components/carousel/";
import { initialState } from "../initialState";

function home() {
  return (
    <SongContext.Provider value={initialState}>
      <SearchContext.Provider value={searchState}>
        <SearchBar />
        <Carousel />
      </SearchContext.Provider>
    </SongContext.Provider>
  );
}

export default home;
