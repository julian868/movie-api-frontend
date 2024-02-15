// MovieCard.tsx
import React from 'react';

interface MovieCardProps {
  title: string;
  poster_path: string;
  release_date: Date;
  onFavoriteClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClick: () => void;
  isFavorite: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, poster_path, release_date, onFavoriteClick, isFavorite, onClick }) => {
  const handleFavoriteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation(); // Prevent event propagation to parent container
    onFavoriteClick(event);
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
        className={`bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-blue-600 transition-colors duration-300`}
        onClick={handleFavoriteClick}
      >
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default MovieCard;
