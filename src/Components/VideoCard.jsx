import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ data }) => {
  const { _id, thumbnail, src, category } = data;
  return (
    <Link to={`/category/${category}`}>
      <div className="bg-textColor text-primary w-[350px] h-[250px] cursor-pointer hover:scale-105 duration-150 rounded-md font-medium my-3">
        <div
          className="h-[85%] w-[100%] rounded-t-md"
          style={{
            backgroundImage: `url(${thumbnail})`,
            backgroundSize: "cover",
            backgroundPosition: "center ",
          }}
        ></div>
        <p className="p-1">{category}</p>
      </div>
    </Link>
  );
};

export default VideoCard;
