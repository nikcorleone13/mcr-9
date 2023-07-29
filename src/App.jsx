import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Explore from "./Pages/Explore/Explore";
import Playlists from "./Pages/Playlists/Playlists";
import Later from "./Pages/Later/Later";
import Category from "./Pages/CategoryPage/Category";
import Single from "./Pages/SingleVideo/Single";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/watchlater" element={<Later />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/videos/:vId" element={<Single />} />
      </Routes>
    </>
  );
}

export default App;
