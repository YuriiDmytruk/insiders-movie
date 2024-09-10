import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../types'; // Import Movie type

type MoviesState = {
  searchString: string,
  moviesArray: Movie[];
};

type ActionPayload = {
  searchString: string,
  moviesArray: Movie[];
}

const initialState: MoviesState = {
  searchString: 'Now Playing',
  moviesArray: [],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<ActionPayload>) => {
      state.searchString = action.payload.searchString
      state.moviesArray = action.payload.moviesArray;
    },
  },
});

export const { setMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
