import React, {useCallback, useEffect, useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSearchMoviesQuery} from '../../redux/apiMovie';
import {setMovies} from '../../redux/slices/moviesSlice';
import {Movie} from '../../redux/types';

const MoviesSearch = () => {
  const [searchString, setSearchString] = useState<string>('');
  const dispatch = useDispatch();

  const {data, isFetching} = useSearchMoviesQuery(searchString, {
    skip: searchString === '',
  });

  const dispatchMovies = useCallback(
    (moviesArray: Movie[], search: string) => {
      dispatch(setMovies({moviesArray, searchString: search}));
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
    <View>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default MoviesSearch;
