import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Movie } from './types'; // Import Movie type

export const apiMovie = createApi({
  reducerPath: 'apiMovie',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
    prepareHeaders: (headers) => {
      headers.set('accept', 'application/json');
      headers.set(
        'Authorization',
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmZjNDM4MjI2MzI1MGZjMTFhZmFhNzBkZjVmMDUyYiIsIm5iZiI6MTcyNTk1MzQ3NS44MjI0MDgsInN1YiI6IjY1MTkxMjVlOTNiZDY5MDExYjhlMGUyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.clYwHQ_ghcsQUeyufg2lh7LS-iusKVcreyC2iVyKK1s' // Your Bearer token here
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMoviesByTag: builder.query<{ results: Movie[] }, string>({
      query: (tag) => `/movie/${tag}?language=en-US&page=1`,
    }),
    searchMovies: builder.query<{ results: Movie[] }, string>({
      query: (searchString) =>
        `/search/movie?query=${encodeURIComponent(searchString)}&include_adult=false&language=en-US&page=1`,
    }),
  }),
});

export const { useGetMoviesByTagQuery, useSearchMoviesQuery } = apiMovie;
