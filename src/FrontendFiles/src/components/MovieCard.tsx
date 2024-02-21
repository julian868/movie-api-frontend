// MovieCard.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StarFilled from "../../../components/Icons/StarFilled";
import StarEmpty from "../../../components/Icons/StarEmpty";

interface MovieCardProps {
  id: number;
  title: string;
  poster_path: string;
  release_date: Date;
  onFavoriteClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isFavorite: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  title,
  poster_path,
  release_date,
  onFavoriteClick,
}) => {
  const [isFavorite, setisFavorite] = useState(false);

  const handleFavoriteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation(); // Prevent event propagation to parent container
    onFavoriteClick(event);
    isFavorite ? setisFavorite(false) : setisFavorite(true);
    localStorage.getItem(`${id}`)
      ? localStorage.removeItem(`${id}`)
      : localStorage.setItem(`${id}`, isFavorite.toString());
  };

  return (
    <div className="movieContainer group relative transition-transform duration-300 transform hover:scale-105">
        <div className="flex">
          <h1 className="text-lg font-semibold mb-2 flex-1">{title}</h1>
          <button
            className="px-4 py-2 rounded-md"
            onClick={handleFavoriteClick}
          >
            {localStorage.getItem(`${id}`) ? <StarFilled /> : <StarEmpty />}
          </button>
        </div>
      <Link to={`/movie-details/${id}`}>
        {poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w200${poster_path}`}
            alt={`${title} Poster`}
            className="w-full h-auto rounded-lg mb-2 group-hover:shadow-lg transition-shadow duration-300"
          />
        )}
      </Link>
      <p className="text-sm text-gray-500 mb-2">{release_date.toString()}</p>
    </div>
  );
};

export default MovieCard;
