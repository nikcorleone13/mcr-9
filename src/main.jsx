import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./Components/Navbar.jsx";
import { BrowserRouter } from "react-router-dom";
import DataProvider from "./Context/Data/DataProvider.jsx";
import PlaylistProvider from "./Context/Playlist/PlaylistProvider.jsx";
import WatchLaterProvider from "./Context/WatchLater/WatchLaterProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
        <PlaylistProvider>
          <WatchLaterProvider>
            <App />
          </WatchLaterProvider>
        </PlaylistProvider>
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>
);
