import {Genre, Movie, Tag} from '../types';

export type MoviesState = {
  genres: Genre[];
  tag: Tag;
  searchString: string;
  moviesArray: Movie[];
  filters: Genre[];
  filteredMovies: Movie[];
};

export type ActionSetSearch = {
  searchString: string;
  moviesArray: Movie[];
};

export type ActionSetTag = {
  tag: Tag;
  moviesArray: Movie[];
};

export type ActionSetGenre = {
  genres: Genre[];
};

export type ActionFilter = {
  filters: Genre[];
};
