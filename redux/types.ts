export type Movie = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  };

// types.ts or similar
export type StackParamList = {
  MovieList: undefined; // No params expected
  MovieCard: { movie: Movie }; // Expecting `movie` object as a parameter
};
