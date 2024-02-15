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

  console.log(movieData);
  return (
    <div className="movieDetailsContainer">
      <h1>{movieData.title}</h1>
      {movieData.posterPath && (
        <img
          src={`https://image.tmdb.org/t/p/w200${movieData.posterPath}`}
          alt={`${movieData.title} Poster`}
        />
      )}
      <p>{movieData.releaseDate?.toString()}</p>
      <p>{movieData.overview}</p>
      <ul>
        <label>Cast</label>
        <li>
          {movieData.cast?.map((actor) => {
            return actor.name;
          })}
        </li>
      </ul>
      <ul>
        <label>Trailers</label>
              <li>
                  {movieData.youtubeTrailers?.map((trailer)=>{return `https://www.youtube.com/watch?v=${trailer.key}`;})}
        </li>
      </ul>
    </div>
  );
};

export default MovieDetails;
