import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie, Tag } from '../types';

type MoviesState = {
  tag: Tag,
  searchString: string,
  moviesArray: Movie[];
};

type ActionPayload = {
  tag: Tag | null,
  searchString: string | null,
  moviesArray: Movie[];
}

const initialState: MoviesState = {
  tag: 'now_playing',
  searchString: '',
  moviesArray: [],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<ActionPayload>) => {
      state.tag = action.payload.tag ? action.payload.tag : state.tag;
      state.searchString = action.payload.searchString ? action.payload.searchString : state.searchString;
      state.moviesArray = action.payload.moviesArray;
    },
  },
});

export const { setMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
