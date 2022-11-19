import './App.css';
import HomePage from "./sites/HomePage"
import AddPlaylistPage from "./sites/AddPlaylistPage"
import FavouritesPage from "./sites/FavouritesPage"
import PlaylistPage from "./sites/PlaylistPage"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage/>}/>
            <Route path="/favourites" element={<FavouritesPage/>}/>
            <Route path="/addplaylist" element={<AddPlaylistPage/>}/>
            <Route path="/playlist" element={<PlaylistPage/>}/>
        </Routes>
      </Router>
  );
}

export default App;
