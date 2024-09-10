import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Movie, Genre } from './types'; // Import Movie and Genre types

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
    getGenres: builder.query<Genre[], void>({
      query: () => '/genre/movie/list?language=en',
      transformResponse: (response: { genres: Genre[] }) => response.genres,
    }),
  }),
});

export const { useGetMoviesByTagQuery, useSearchMoviesQuery, useGetGenresQuery } = apiMovie;
