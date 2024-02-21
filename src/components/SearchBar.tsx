import React, { useState} from 'react';
import { MovieData, MovieDataDetails } from '../api/movieData.api';
import { useNavigate } from 'react-router-dom'

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<MovieDataDetails[]>([]);
  const history = useNavigate();

  const handleMovieClick = (movieId: number) => {
    history(`/movie/${movieId}`);
    // Optionally, you can clear the search results and query when a movie is clicked
    setSearchQuery('');
    setSearchResults([]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query) {
      // Perform movie search when the user types in the search bar
      MovieData.searchMovies(query)
        .then((response) => setSearchResults(response.results))
        .catch((error) => console.error('Error searching movies:', error));
    } else {
      // Clear search results if the search query is empty
      setSearchResults([]);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for movies..."
        value={searchQuery}
        onChange={handleInputChange}
      />

      {searchResults.length > 0 && (
        <ul className="search-results">
          {searchResults.map((movie) => (
            <li key={movie.id} onClick={() => handleMovieClick(movie.id)}>
              {movie.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
