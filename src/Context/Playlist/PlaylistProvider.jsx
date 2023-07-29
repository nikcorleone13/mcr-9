import React from "react";
import { PlaylistContext } from "./PlaylistContext";

const PlaylistProvider = ({ children }) => {
  return <PlaylistContext.Provider>{children}</PlaylistContext.Provider>;
};

export default PlaylistProvider;
