import React, { useEffect, useState } from "react";
import { MovieList } from "../api/movieLists.api";
import MovieCard from "../FrontendFiles/src/components/MovieCard";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const TopRated = () => {
  const [topRatedData, setTopRatedData] = useState<MovieCardDetails[]>([]);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTopRatedData = async () => {
      try {
        setTopRatedData(await MovieList.getTopRatedDetail(id));
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
          onClick={navigate(`top-rated/${movie.id}`)}
          isFavorite={false}
        />
      ))}
    </div>
  );
};

export default TopRated;
