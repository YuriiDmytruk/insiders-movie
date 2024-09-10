import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { useSearchMoviesQuery } from '../../redux/apiMovie';
import { setMovies } from '../../redux/slices/moviesSlice';

const MoviesSearch = () => {
  const [searchString, setSearchString] = useState<string>('');
  const dispatch = useDispatch();

  const { data, isFetching } = useSearchMoviesQuery(searchString, {
    skip: searchString === '',
  });

  const handlePress = () => {
    if (data?.results) {
      dispatch(setMovies({ moviesArray: data.results, searchString }));
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        value={searchString}
        onChangeText={setSearchString}
        placeholder="Search movies..."
      />
      <Button onPress={handlePress} title="Search" />
      {isFetching && <View><Text>Loading...</Text></View>}
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
