// MovieDetails.tsx
import { useParams } from "react-router-dom";
import { MovieData, MovieDataDetails } from "../api/movieData.api";
import { useEffect, useState } from "react";

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [movieData, setMovieData] = useState<MovieDataDetails>(Object);
  
  useEffect(() => {
    try {
      const loadMovieData = async () => {
        setMovieData(await MovieData.getMovieData(Number(id)));
      };
      loadMovieData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="movieDetailsContainer flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">{movieData.title}</h1>
      <p className="text-gray-500 mb-2">
        {movieData.releaseDate ? new Date(movieData.releaseDate).getFullYear() : ''}
        &nbsp;&nbsp;&nbsp;&nbsp;
        {movieData.vote_average || 'N/A'}
      </p>
      {movieData.youtubeTrailers && movieData.youtubeTrailers.length > 0 && (
        <iframe
          title="Trailer"
          width="100%"
          height="400"
          src={`https://www.youtube.com/embed/${movieData.youtubeTrailers[0].key}?autoplay=1&mute=1`}
          allowFullScreen
        ></iframe>
      )}

      <div className="flex flex-col md:flex-row mt-4">
        {movieData.posterPath && (
          <img
            src={`https://image.tmdb.org/t/p/w200${movieData.posterPath}`}
            alt={`${movieData.title} Poster`}
            className="w-full md:w-1/2 rounded-lg"
          />
        )}

        <div className="md:ml-4 mt-4 md:mt-0">
          <h2 className="text-2xl font-bold mb-4">{movieData.title}</h2>
          <p className="text-gray-500 mb-2">Realease Date: {movieData.releaseDate?.toString()}</p>
          <p className="text-sm text-gray-500 mb-4">{movieData.overview}</p>
          <p className="text-yellow-500 font-bold">
            Rating: {movieData.vote_average || 'N/A'}
          </p>
          <p className="text-blue-500">
            Popularity: {movieData.popularity || 0}
          </p>
          <ul className="text-gray-500">
            <label>Cast</label>
            <li>
              {movieData.cast?.map((actor) => (
                <span key={actor.name}>{actor.name}, </span>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
