import React, {useCallback, useEffect, useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useSearchMoviesQuery} from '../../redux/apiMovie';
import {setMoviesSearch} from '../../redux/slices/moviesSlice';
import {Movie} from '../../redux/types';
import {RootState} from '../../redux/store';

const MoviesSearch = () => {
  const _searchString = useSelector(
    (state: RootState) => state.movies.searchString,
  );

  const [searchString, setSearchString] = useState<string>(_searchString);
  const dispatch = useDispatch();

  const {data, isFetching} = useSearchMoviesQuery(searchString, {
    skip: searchString === '',
  });

  const dispatchMovies = useCallback(
    (moviesArray: Movie[], search: string) => {
      dispatch(setMoviesSearch({moviesArray, searchString: search}));
    },
    [dispatch],
  );

  useEffect(() => {
    if (data?.results) {
      setTimeout(() => {
        dispatchMovies(data.results, searchString);
      }, 1000);
    }
  }, [data, searchString, dispatchMovies]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={searchString}
        onChangeText={setSearchString}
        placeholder="Search movies..."
      />
      {isFetching && (
        <View>
          <Text>Loading...</Text>
        </View>
      )}
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
