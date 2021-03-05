import { SearchBar } from "../components/SearchBar/";
import { SongContext } from "../context/songContext";
import { initialState } from "../initialState";

function home() {
  return (
    <SongContext.Provider value={initialState}>
      <SearchBar />
    </SongContext.Provider>
  );
}

export default home;
