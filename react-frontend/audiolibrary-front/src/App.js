import './App.css';
import HomePage from "./sites/HomePage/HomePage"
import AddPlaylistPage from "./sites/AddPlaylistPage"
import FavouritesPage from "./sites/FavouritesPage/FavouritesPage"
import PlaylistPage from "./sites/PlaylistPage"
import Login from "./sites/LoginPage"
import ArtistPage from "./sites/ArtistPage/ArtistPage"
import SongPage from "./sites/SongPage/SongPage"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
            <Route path="/favourites" element={<FavouritesPage/>}/>
            <Route path="/add-playlist" element={<AddPlaylistPage/>}/>
            <Route path="/playlist" element={<PlaylistPage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/artist" element={<ArtistPage/>}/>
            <Route path="/song" element={<SongPage/>}/>
        </Routes>
      </Router>
  );
}

export default App;
