// MovieCard.tsx
import React, { useState } from 'react';

interface MovieCardProps {
  title: string;
  poster_path: string;
  release_date: Date;
  onClick: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, poster_path, release_date, onClick }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation(); // Prevent event propagation to parent container
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  return (
    <div className="movieContainer group relative transition-transform duration-300 transform hover:scale-105" onClick={onClick}>
      <h1 className="text-lg font-semibold mb-2">{title}</h1>
      {poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w200${poster_path}`}
          alt={`${title} Poster`}
          className="w-full h-auto rounded-lg mb-2 group-hover:shadow-lg transition-shadow duration-300"
        />
      )}
      <p className="text-sm text-gray-500 mb-2">{release_date.toString()}</p>
      <button
        className={`absolute top-2 right-2 text-yellow-400 text-2xl focus:outline-none`}
        onClick={handleFavoriteClick}
      >
        {isFavorite ? '★' : '☆'}
      </button>
    </div>
  );
};

export default MovieCard;
