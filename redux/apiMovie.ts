import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Movie } from './types'; // Import Movie type

//const API_KEY = 'your_api_key_here'; // Replace with your actual API key

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
    getNowPlayingMovies: builder.query<{ results: Movie[] }, void>({
      query: () => '/movie/now_playing?language=en-US&page=1',
    }),
  }),
});

export const { useGetNowPlayingMoviesQuery } = apiMovie;
