import React from 'react';

interface NavbarProps {
  showHome: () => void;
  showTrending: () => void;
  showUpcoming: () => void;
  showGenres: () => void;
  showFavorites: () => void;
  showLogin: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ showHome, showTrending, showUpcoming, showGenres, showFavorites, showLogin }) => {
  return (
    <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <div className="flex space-x-4">
        <button className="hover:underline" onClick={showHome}>
          Home
        </button>
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
            <button className="hover:underline" onClick={showTrending}>
              Trending
            </button>
            <button className="hover:underline" onClick={showUpcoming}>
              Upcoming
            </button>
          </div>
        </div>
        <button className="hover:underline" onClick={showGenres}>
          Genres
        </button>
        <button className="hover:underline" onClick={showFavorites}>
          Favorites
        </button>
        <button className="hover:underline" onClick={showLogin}>
          Login
        </button>
      </div>
      <h3 className="text-xl font-semibold">Welcome to MovieFlix!</h3>
    </div>
  );
};

export default Navbar;
