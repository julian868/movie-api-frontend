import React from "react";
import { Link } from "react-router-dom";
import { genres } from "../api/movieLists.d";

const Navbar = () => {
  const genreList = genres;
  return (
    <div className="navbar bg-gray-800 text-white p-4 flex items-center justify-between">
      <div className="flex space-x-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/popular" className="hover:underline">
          Popular
        </Link>
        <Link to="/top-rated" className="hover:underline">
          Top Rated
        </Link>
        <div className="group relative inline-block text-left">
          <button className="hover:underline flex items-center">
            Lists
            <svg
              className="ml-2 -mr-1 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm0 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm0 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 absolute z-10 bg-gray-700 text-white mt-2 p-2 rounded-md">
            <Link to="/trending" className="hover:underline">
              Trending
            </Link>
            <Link to="/upcoming" className="hover:underline">
              Upcoming
            </Link>
          </div>
        </div>
        <div className="group relative inline-block text-left">
          <button className="hover:underline flex items-center">
            Genres
            <svg
              className="ml-2 -mr-1 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm0 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm0 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 absolute z-10 bg-gray-700 text-white mt-2 p-2 rounded-md">
            {genreList.map((genre) => {
              return <Link to={`genre/${genre}`}>
              {genre.toString()}
              </Link>
            })}
          </div>
        </div>

        <Link to="/favs" className="hover:underline">
          Favorites
        </Link>
        <Link to="/login" className="hover:underline">
          Login
        </Link>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" className="search-input" />
        <button className="search-button">Search</button>
      </div>
      <h3 className="text-xl font-semibold">Welcome to MovieFlix!</h3>
    </div>
  );
};

export default Navbar;
