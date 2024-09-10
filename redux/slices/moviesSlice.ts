import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ActionFilter, ActionSetGenre, ActionSetSearch, ActionSetTag, MoviesState } from './types';

const initialState: MoviesState = {
  genres: [],
  filters: [],
  filteredMovies: [],
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
    filterMovies: (state, action: PayloadAction<ActionFilter>) => {
      const filters = action.payload.filters;
      state.filters = filters;
      state.filteredMovies = state.moviesArray.filter(movie =>
        movie.genre_ids.some(genreId => filters.some(filter => filter.id === genreId))
      );
    },
  },
});

export const { setGenres, setMoviesSearch, setMoviesTag, filterMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
