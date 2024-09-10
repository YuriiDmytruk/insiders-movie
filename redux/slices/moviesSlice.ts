import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../types'; // Import Movie type

type MoviesState = {
  moviesArray: Movie[];
};

const initialState: MoviesState = {
  moviesArray: [],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<Movie[]>) => {
      state.moviesArray = action.payload;
    },
  },
});

export const { setMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
