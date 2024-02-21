import { useEffect, useState } from "react";
import MovieCard from "../FrontendFiles/src/components/MovieCard";
import { MovieCardDetails, MovieList } from "../api/movieLists.api";
import { Genre } from "../api/movieLists";
import { useParams } from "react-router-dom";

const GenrePage = () => {
    const { genre } = useParams<{ genre: Genre }>();
    const [genreData, setGenreData] = useState<MovieCardDetails[]>([]);

    useEffect(() => {
      const loadTopRatedData = async () => {
        try {
          setGenreData(await MovieList.getMoivesByGenre(genre as Genre));
        } catch (err) {
          console.error(err);
        }
      };
      loadTopRatedData();
    }, [genre]);
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {genreData.map((movie) => (
          <div key={movie.id} className="bg-white p-4 rounded-lg shadow-md">
            <MovieCard
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
              onFavoriteClick={(event) =>
                console.log("Favorite clicked", event)
              }
              isFavorite={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenrePage;
