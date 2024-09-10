import React from 'react';
import {
    Text,
    View,
  } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const MovieList = () => {

    const movies = useSelector((state: RootState) => state.movies.moviesArray);
    console.log('-------movies---------');
    console.log(movies);

  return (
    <View>
        <Text>MovieList</Text>
    </View>
  );
};

export default MovieList;
