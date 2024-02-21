import axios from "axios";

export interface MovieDataDetails {
  id: number;
  title: string;
  releaseDate: Date;
  youtubeTrailers: [
    {
      iso_639_1: string;
      iso_3166_1: string;
      name: string;
      key: string;
      site: string;
      size: number;
      type: string;
      official: boolean;
      published_at: string;
      id: string;
    }
  ];
  watchProviders: [];
  cast: [
    {
      adult: boolean;
      gender: number;
      id: number;
      known_for_department: string;
      name: string;
      original_name: string;
      popularity: number;
      profile_path: string;
      cast_id: number;
      character: string;
      credit_id: string;
      order: number;
    }
  ];
  posterPath: string;
  overview: string;
}

export class MovieData {
  static async getMovieData(movieId: Number) {
    let fullMovieData = await axios({
      method: "get",
      url: `https://api.themoviedb.org/3/movie/${movieId}?append_to_response=videos%2Cwatch%2Fproviders%2Ccredits&language=en-US`,
      responseType: "json",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    });

    let youtubeTrailers = fullMovieData.data.videos.results.filter((x: any) => {
      return x.site == "YouTube" && x.type == "Trailer";
    });
    let watchProviders =
      fullMovieData.data["watch/providers"].results.CA?.flatrate;
    let cast = fullMovieData.data.credits.cast.filter((x: any) => {
      return x.known_for_department == "Acting" && x.order < 5;
    });

    let movieData = {
      id: fullMovieData.data.id,
      title: fullMovieData.data.title,
      releaseDate: fullMovieData.data.release_date,
      youtubeTrailers: youtubeTrailers,
      watchProviders: watchProviders,
      cast: cast,
      posterPath: fullMovieData.data.poster_path,
      overview: fullMovieData.data.overview,
    };
    return movieData;
  }
  static async searchMovies(query: string): Promise<{ results: MovieDataDetails[] }> {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query,
      },
    });
    return response.data;
  }
}


//test
/*   MovieData.getMovieData(66379)
   .then((text) => {
     console.log(text);
   })
   .catch((err) => {
     console.log(err);
   });  */
