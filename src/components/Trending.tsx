import { useEffect, useState } from "react";
import { MovieCardDetails, MovieList } from "../api/movieLists.api";
import MovieCard from "../FrontendFiles/src/components/MovieCard";

const Trending = () => {
  const [trendingData, setTrendingData] = useState<MovieCardDetails[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTrendingData = async () => {
      try {
        const data = await MovieList.getTrending();
        setTrendingData(data || []); // Set an empty array if data is falsy
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadTrendingData();
  }, []);

  // Filter out movies with missing or undefined details
  const filteredTrendingData = trendingData.filter(
    (movie) => movie.title && movie.poster_path && movie.release_date
  );

  return (
    <div className="container mx-auto p-4">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredTrendingData.map((movie) => (
            <div key={movie.id} className="bg-white p-4 rounded-lg shadow-md">
              <MovieCard
                id={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                release_date={movie.release_date}
                onFavoriteClick={(event) => console.log('Favorite clicked', event)}
                isFavorite={false}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Trending;
