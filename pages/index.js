import {
  SearchContext,
  initialState as searchState,
} from "../context/searchContext";
import { RecentPlayed } from "../components/RecentPlayed/";
import { Notification } from "../components/Promotion/";
import { SongContext } from "../context/songContext";
import { TopArtist } from "../components/TopArtist/";
import { SearchBar } from "../components/SearchBar";
import { Carousel } from "../components/carousel";
import { initialState } from "../initialState";
import { Player } from "../components/Player/";
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
      <div>
        <TopArtist />
        <Notification />
      </div>
      <RecentPlayed />
      <Player />
    </SongContext.Provider>
  );
}

export default home;
