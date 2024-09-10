import React, { useCallback, useEffect, useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchMoviesQuery } from '../../redux/apiMovie';
import { setMoviesSearch } from '../../redux/slices/moviesSlice';
import { Movie } from '../../redux/types';
import { RootState } from '../../redux/store';

const DEBOUNCE_DELAY = 300;

const MoviesSearch = () => {
  const _searchString = useSelector(
    (state: RootState) => state.movies.searchString,
  );

  const [searchString, setSearchString] = useState<string>(_searchString);
  const [debouncedSearch, setDebouncedSearch] = useState<string>(_searchString);
  const dispatch = useDispatch();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchString);
    }, DEBOUNCE_DELAY);

    return () => {
      clearTimeout(handler);
    };
  }, [searchString]);

  const { data } = useSearchMoviesQuery(debouncedSearch, {
    skip: debouncedSearch === '',
  });

  const dispatchMovies = useCallback(
    (moviesArray: Movie[], search: string) => {
      dispatch(setMoviesSearch({ moviesArray, searchString: search }));
    },
    [dispatch],
  );

  useEffect(() => {
    if (data?.results) {
      dispatchMovies(data.results, debouncedSearch);
    }
  }, [data, debouncedSearch, dispatchMovies]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={searchString}
        onChangeText={setSearchString}
        placeholder="Search movies..."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 10,
  },
});

export default MoviesSearch;
