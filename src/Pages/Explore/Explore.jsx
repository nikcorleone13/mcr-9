import React, { useContext } from "react";
import Navbar from "../../Components/Navbar";
import VideosListing from "../../Components/VideosListing";
import { DataContext } from "../../Context/Data/DataContext";
const Explore = () => {
  const { videos } = useContext(DataContext);
  return (
    <div className="flex">
      <Navbar />
      <div className=" w-[100%] h-full ">
        <div className="h-[25%] flex flex-col justify-start items-center">
          <input
            type="text"
            className="border-2 border-textColor my-16 w-[40%] p-2 text-lg rounded-2xl focus:outline-none tracking-wide"
            placeholder="Search Video"
          />
          <div className="my-8 flex flex-wrap justify-evenly  ">
            {Object.values(videos).map((item, index) => {
              return <VideosListing key={index} data={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
