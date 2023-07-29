import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import { useParams } from "react-router-dom";
import { DataContext } from "../../Context/Data/DataContext";
import VideoCard from "../../Components/VideoCard";
import VideosListing from "../../Components/VideosListing";

const Category = () => {
  const [catCategory, setCatCategory] = useState("");
  const [show, setShow] = useState("");
  const { videos } = useContext(DataContext);
  const { categoryName } = useParams();

  //   /settingn local
  useEffect(() => {
    localStorage.setItem("catValue", categoryName);
    setCatCategory(categoryName);
  }, [categoryName]);

  //   filtering list
  useEffect(() => {
    const filt = videos.filter(({ category }) =>
      category.toLowerCase().includes(catCategory.toLowerCase())
    );
    setShow([...filt]);
  }, [catCategory, videos]);

  return (
    <div className="flex">
      <Navbar />
      <div className=" w-full h-screen pt-[8%]">
        <div className="  w-[100%] h-[90%] flex items-start justify-evenly  flex-wrap">
          {Object.values(show).map((item, index) => {
            return <VideosListing key={index} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
