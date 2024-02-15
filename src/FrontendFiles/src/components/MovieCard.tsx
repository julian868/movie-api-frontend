// MovieCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface MovieCardProps {
  id: number;
  title: string;
  poster_path: string;
  release_date: Date;
  onFavoriteClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isFavorite: boolean;
  // Add other movie details as needed
}

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  title,
  poster_path,
  release_date,
  onFavoriteClick,
  isFavorite,
}) => {
  return (
    <div className="movieContainer">
      <Link to={`/movie/${id}`}>
        <h1>{title}</h1>
        {poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w200${poster_path}`}
            alt={`${title} Poster`}
          />
        )}
        <p>{release_date.toString()}</p>
      </Link>
      <button onClick={onFavoriteClick}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default MovieCard;
