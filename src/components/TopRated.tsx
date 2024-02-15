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
        console.log(err);
      }
    };
    loadTopRatedData();
    //console.log(topRatedData);
  }, []);

  return (
    <div>
      {topRatedData.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          release_date={movie.release_date}
          onFavoriteClick={function (
            event: React.MouseEvent<HTMLButtonElement, MouseEvent>
          ): void {
            throw new Error("Function not implemented.");
          }}
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
          isFavorite={false}
        />
      ))}
    </div>
  );
};

export default TopRated;
