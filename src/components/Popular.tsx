import { useEffect, useState } from "react";
import { MovieCardDetails, MovieList } from "../api/movieLists.api";
import MovieCard from "../FrontendFiles/src/components/MovieCard";

const Popular = () => {
  const [popularData, setPopularData] = useState<MovieCardDetails[]>([]);

  useEffect(() => {
    const loadPopularData = async () => {
      try {
        setPopularData(await MovieList.getPopular());
      } catch (err) {
        console.error(err);
      }
    };
    loadPopularData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {popularData.map((movie) => (
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

export default Popular;
