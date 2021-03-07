import {
  SearchContext,
  initialState as searchState,
} from "../context/searchContext";
import { RecentPlayed } from "../components/RecentPlayed/";
import { Notification } from "../components/Promotion/";
import { SongContext } from "../context/songContext";
import { Player, Desk } from "../components/Player/";
import { TopArtist } from "../components/TopArtist/";
import { SearchBar } from "../components/SearchBar";
import { Carousel } from "../components/carousel";
import { initialState } from "../initialState";
import {
  FavoritesContext,
  initialState as FavoriteState,
} from "../context/favoritesContext";

function home() {
  return (
    <SongContext.Provider value={initialState}>
      <main>
        <div className="music">
          <FavoritesContext.Provider value={FavoriteState()}>
            <SearchContext.Provider value={searchState()}>
              <SearchBar />
              <Carousel
                defaultText="Los resultados de tu busqueda"
                context="search"
                errorText="Aún no buscas nada, trata usando el input de arriba :D"
              />
            </SearchContext.Provider>
            <Carousel
              context="favorites"
              defaultText="Favoritos"
              errorText="Aun no agregas nada a favoritos, trata dandole al corazon en las canciones que busques"
            />
          </FavoritesContext.Provider>
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
