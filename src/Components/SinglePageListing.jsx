import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import { HiClock } from "react-icons/hi";
import { WatchLaterContext } from "../Context/WatchLater/WatchLaterContext";

const SinglePageListing = ({ data }) => {
  const { _id, title, views, chips, thumbnail, src, category, creator } = data;
  const {handleLater} = useContext(WatchLaterContext);
  return (
    <Link to={`/videos/${_id}`} className="mb-12">
      <div className="text-textColor bg-primary w-[380px] h-[300px] cursor-pointer rounded-md font-medium relative group">
        {/* clock div */}
        <div className="absolute top-0 right-0 p-2 bg-slate-300 text-textColor opacity-0 group-hover:opacity-100 transition-opacity"  >
          <HiClock size={25} />
        </div>
        <div
          className="h-[70%] w-[100%] rounded-t-md"
          style={{
            backgroundImage: `url(${thumbnail})`,
            backgroundSize: "cover",
            backgroundPosition: "center ",
          }}
        ></div>
        <div className="h-[30%] p-2 flex flex-col justify-between relative">
          <p className="p-1 font-semibold justify-start  ">{title}</p>
          <p className="p-1 flex items-center justify-start absolute bottom-0">
            <IoEyeSharp className=" pr-1" size={23} /> {views}{" "}
            <span className="mx-2 "> || {creator}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SinglePageListing;
