import React, { useEffect, useCallback, useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { useGetMoviesByTagQuery } from '../../redux/apiMovie';
import { setMovies } from '../../redux/slices/moviesSlice';
import { Movie } from '../../redux/types';

const MoviesTag = () => {
  const [tag, setTag] = useState<string>('popular');
  const dispatch = useDispatch();

  const { data, isFetching } = useGetMoviesByTagQuery(tag);

  const dispatchMovies = useCallback((moviesArray: Movie[], searchString: string) => {
    dispatch(setMovies({ moviesArray, searchString }));
  }, [dispatch]);

  useEffect(() => {
    if (data?.results) {
      dispatchMovies(data.results, tag);
    }
  }, [data, tag, dispatchMovies]);

  return (
    <View style={styles.container}>
      <View style={styles.buttonGroup}>
        <Button title="Now Playing" onPress={() => setTag('now_playing')} />
        <Button title="Popular" onPress={() => setTag('popular')} />
        <Button title="Top Rated" onPress={() => setTag('top_rated')} />
        <Button title="Upcoming" onPress={() => setTag('upcoming')} />
      </View>

      {isFetching && <Text>Loading...</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  results: {
    marginTop: 20,
  },
});

export default MoviesTag;
