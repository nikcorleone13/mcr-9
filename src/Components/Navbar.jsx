import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiHome, HiClock } from "react-icons/hi";
import { MdExplore, MdPlaylistPlay } from "react-icons/md";

const getActiveStyle = ({ isActive }) => ({
  color: isActive ? "#996751" : "",
  fontWeight: isActive ? "bolder" : "",
  padding: isActive ? "2px" : "",
});
const Navbar = () => {
  return (
    <div className="z-9999 left-0 top-0 sticky w-[15%] h-screen">
      <div className="w-[100%] bg-primary text-textColor h-screen flex flex-col gap-3 ">
        {/* logo div */}
        <div className="font-heading tracking-wider  text-3xl cpaitalize  h-[15%] flex items-center justify-center">
          <Link to="/">
            View{" "}
            <span className="bg-textColor text-primary ml-[-8px] px-1 rounded-lg ">
              Tube
            </span>
          </Link>
        </div>

        {/* links div */}
        <div className="text-xl flex flex-col items-center text-center gap-6 ">
          <NavLink
            className="w-[100%] my-2 flex items-center justify-center"
            style={getActiveStyle}
            to="/"
          >
            <div className=" w-[30%] flex items-end justify-end  ">
              <HiHome size={25} />
            </div>
            <div className="pl-3 w-[70%] flex justify-start items-center pt-[5px]">
              Home
            </div>
          </NavLink>

          <NavLink
            className=" w-[100%] my-2 flex items-center justify-center"
            style={getActiveStyle}
            to="/explore"
          >
            <div className=" w-[30%] flex items-end justify-end  ">
              <MdExplore size={25} />
            </div>
            <div className="pl-3 w-[70%] flex justify-start pt-[5px]">
              Explore
            </div>
          </NavLink>

          <NavLink
            className=" w-[100%] my-2 flex items-center justify-center"
            style={getActiveStyle}
            to="/playlists"
          >
            <div className=" w-[30%] flex items-end justify-end  ">
              <MdPlaylistPlay size={25} />
            </div>
            <div className="pl-3 w-[70%] flex justify-start pt-[5px]">
              Playlists
            </div>
          </NavLink>

          <NavLink
            className=" w-[100%] my-2 flex items-center justify-center"
            style={getActiveStyle}
            to="/watchlater"
          >
            <div className=" w-[30%] flex items-end justify-end  ">
              <HiClock size={25} />
            </div>
            <div className="pl-3 w-[70%] flex justify-start pt-[5px]">
              Watch Later
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
