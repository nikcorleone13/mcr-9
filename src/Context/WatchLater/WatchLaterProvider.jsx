import React, { useContext, useReducer, useState } from "react";
import { WatchLaterContext } from "./WatchLaterContext";
import { DataContext } from "../Data/DataContext";
import { videos } from "../Data/DataProvider";

const WatchLaterProvider = ({ children }) => {
  const [later, setLater] = useState();
  const { videos } = useContext(DataContext);

  // Handling function
  const handleLater = (id) => {
    const vid = videos.find((video) => parseInt(video._id) === parseInt(_id) );
    console.log("video found", vid);
    setLater([...later, vid]);
  };
  return (
    <WatchLaterContext.Provider
      value={{ later: later, handleLater: handleLater }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
};

export default WatchLaterProvider;
