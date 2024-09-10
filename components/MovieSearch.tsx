import React, {useEffect, useState} from 'react';
import {View, Button, TextInput, StyleSheet} from 'react-native';
import { useDispatch } from 'react-redux';
import { useGetNowPlayingMoviesQuery } from '../redux/apiMovie';
import { setMovies } from '../redux/slices/moviesSlice';

const MovieSearch = () => {
  const [searchString, setSearchString] = useState<string>('');


  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetNowPlayingMoviesQuery();

  useEffect(() => {
    if (data?.results) {
      dispatch(setMovies(data.results)); // Dispatch the movie results to the store
    }
  }, [data, dispatch]);

  return (
    <View>
      <TextInput
        style={styles.input}
        value={searchString}
        onChangeText={setSearchString}
      />
      <Button onPress={() => {}} title="Search" />
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

export default MovieSearch;
