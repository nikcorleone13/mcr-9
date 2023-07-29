import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import { DataContext } from "../../Context/Data/DataContext";
import { HiClock } from "react-icons/hi";
import { RiPlayListAddFill } from "react-icons/ri";
import { MdEditNote } from "react-icons/md";
import VideosListing from "../../Components/VideosListing";
import SinglePageListing from "../../Components/SinglePageListing";
import { FaShare } from "react-icons/fa";

const Single = () => {
  const [videoId, setVideoId] = useState();
  const [listVideos, setListVideos] = useState();
  const { videos } = useContext(DataContext);
  const [item, setItem] = useState();
  const { vId } = useParams();
  console.log("ID received", vId);

  useEffect(() => {
    localStorage.setItem("id_Value", vId);
    setVideoId(vId);
  }, [vId]);

  // filtering list
  useEffect(() => {
    const vObj = videos.filter(({ _id }) => _id === parseInt(videoId));
    setItem(vObj.length > 0 ? vObj[0] : null);

    const vids = videos.filter(({ _id }) => _id !== parseInt(videoId));
    setListVideos(vids.length > 0 ? [...vids] : null);
  }, [videoId, videos]);

  return (
    <div className="flex">
      <Navbar />
      <div className=" w-[100%] flex justify-center py-12">
        {/* video div */}
        <div className="  w-[60%] h-screen">
          <div
            className="h-[50%] relative group"
            style={{
              backgroundImage: `url(${item?.thumbnail})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Link
              to={item?.src}
              className="bg-gray-200 px-1 py-2 absolute bottom-0 text-xl hidden group-hover:block duration-150"
            >
              Watch on <span className="font-bold  ">YouTube</span>
            </Link>
            <div className="bg-textColor  text-gray-300 min-w-[15%]  justify-between absolute right-2 top-2 hidden group-hover:flex duration-150">
              <RiPlayListAddFill
                size={40}
                className=" px-1 py-2 cursor-pointer hover:scale-150 duration-200  "
              />
              <FaShare
                size={40}
                className=" px-1 py-2 cursor-pointer hover:scale-150 duration-200  "
              />
            </div>
          </div>
          <div className=" flex justify-between items-start  h-[15%] w-[100%]  pt-2  word-w  border-b-textColor border-b-2 ">
            <div className="  w-[65%] h-[100%] flex items-center justify-start font-semibold">
              <img
                src="https://freepngimg.com/thumb/facebook/62681-flat-icons-face-computer-design-avatar-icon.png"
                className=" h-[50%] w-[10%] rounded-[50%]"
              />
              <p className="ml-3 text-2xl">{item?.title}</p>
            </div>
            {/* action buttons */}
            <div className="  w-[25%] h-[100%] flex justify-evenly  items-center ">
              <HiClock
                size={25}
                className=" cursor-pointer hover:scale-150 duration-200 "
              />
              <RiPlayListAddFill
                size={25}
                className=" cursor-pointer hover:scale-150 duration-200  "
              />
              <MdEditNote
                size={30}
                className=" cursor-pointer hover:scale-150 duration-200  "
              />
            </div>
          </div>

          <div className="my-4 text-xl">
            <p>My Notes:</p>
          </div>
        </div>

        {/* next videos div */}
        <div className=" bg-white w-[30%] h-full">
          <div className="bg-gray flex flex-col justify-center ml-3">
            {listVideos &&
              Object.values(listVideos).map((item, index) => (
                <SinglePageListing key={index} data={item} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Single;
