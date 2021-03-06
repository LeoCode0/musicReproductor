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
import { Player, Desk } from "../components/Player/";
import { useEffect } from "react";

function home() {
  useEffect(() => {}, []);
  return (
    <SongContext.Provider value={initialState}>
      <main>
        <div className="music">
          <SearchContext.Provider value={searchState}>
            <SearchBar />
            <Carousel />
          </SearchContext.Provider>
          <Carousel />
          <div className="containerElements">
            <TopArtist />
            <Notification />
          </div>
          <RecentPlayed />
        </div>
        <div className="desktop">
          <Notification />
          <TopArtist />
          <Desk />
        </div>
        <Player />
      </main>
    </SongContext.Provider>
  );
}

export default home;
