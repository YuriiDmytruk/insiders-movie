import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ActionSetGenre, ActionSetSearch, ActionSetTag, MoviesState } from './types';

const initialState: MoviesState = {
  genres: [],
  tag: 'now_playing',
  searchString: '',
  moviesArray: [],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMoviesSearch: (state, action: PayloadAction<ActionSetSearch>) => {
      state.searchString = action.payload.searchString;
      state.moviesArray = action.payload.moviesArray;
    },
    setMoviesTag: (state, action: PayloadAction<ActionSetTag>) => {
      state.tag = action.payload.tag;
      state.moviesArray = action.payload.moviesArray;
    },
    setGenres: (state, action: PayloadAction<ActionSetGenre>) => {
      state.genres = action.payload.genres;
    },
  },
});

export const { setGenres, setMoviesSearch, setMoviesTag } = moviesSlice.actions;
export default moviesSlice.reducer;
