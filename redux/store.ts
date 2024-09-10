import { configureStore } from '@reduxjs/toolkit';
import { apiMovie } from './apiMovie'; // Import RTK Query service
import moviesReducer from './slices/moviesSlice'; // Import movies slice

export const store = configureStore({
  reducer: {
    movies: moviesReducer, // Add the movies slice
    [apiMovie.reducerPath]: apiMovie.reducer, // Add the RTK Query reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiMovie.middleware), // Add the middleware for RTK Query
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
