import React, { useEffect, useState } from "react";
import { MovieCardDetails, MovieList } from "../api/movieLists.api";
import MovieCard from "../FrontendFiles/src/components/MovieCard";

const TopRated = () => {
  const [topRatedData, setTopRatedData] = useState<MovieCardDetails[]>([]);

  useEffect(() => {
    const loadTopRatedData = async () => {
      try {
        setTopRatedData(await MovieList.getTopRated());
      } catch (err) {
        console.error(err);
      }
    };
    loadTopRatedData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {topRatedData.map((movie) => (
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

export default TopRated;
