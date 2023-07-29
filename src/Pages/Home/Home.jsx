import React, { useContext } from "react";
import Navbar from "../../Components/Navbar";
import { DataContext } from "../../Context/Data/DataContext";
import VideoCard from "../../Components/VideoCard";

const Home = () => {
  const { videos, categories } = useContext(DataContext);
  console.log("home", videos, categories);
  return (
    <div className="bg-lightTextDark   flex">
      <Navbar />
      <div className=" w-full h-screen pt-[8%]">
        <div className="  w-[100%] h-[90%] flex items-start justify-evenly  flex-wrap">
          {categories.map((item) => {
            return <VideoCard key={item._id} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
