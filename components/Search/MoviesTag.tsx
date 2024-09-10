import React, { useEffect, useCallback, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useGetMoviesByTagQuery } from '../../redux/apiMovie';
import { setMovies } from '../../redux/slices/moviesSlice';
import { Movie, Tag } from '../../redux/types';
import { RootState } from '../../redux/store';

const MoviesTag = () => {

  const _tag = useSelector((state: RootState) => state.movies.tag);

  const [tag, setTag] = useState<Tag>(_tag);
  const dispatch = useDispatch();

  const { data, isFetching } = useGetMoviesByTagQuery(tag);

  const dispatchMovies = useCallback((moviesArray: Movie[], __tag: Tag ) => {
    dispatch(setMovies({ moviesArray, searchString: null, tag: __tag }));
  }, [dispatch]);

  useEffect(() => {
    if (data?.results) {
      dispatchMovies(data.results, tag);
    }
  }, [data, tag, dispatchMovies]);

  return (
    <View style={styles.container}>
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={[styles.button, tag === 'now_playing' && styles.activeButton]}
          onPress={() => setTag('now_playing')}
        >
          <Text style={[styles.buttonText, tag === 'now_playing' && styles.activeButtonText]}>
            Now Playing
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, tag === 'popular' && styles.activeButton]}
          onPress={() => setTag('popular')}
        >
          <Text style={[styles.buttonText, tag === 'popular' && styles.activeButtonText]}>
            Popular
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, tag === 'top_rated' && styles.activeButton]}
          onPress={() => setTag('top_rated')}
        >
          <Text style={[styles.buttonText, tag === 'top_rated' && styles.activeButtonText]}>
            Top Rated
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, tag === 'upcoming' && styles.activeButton]}
          onPress={() => setTag('upcoming')}
        >
          <Text style={[styles.buttonText, tag === 'upcoming' && styles.activeButtonText]}>
            Upcoming
          </Text>
        </TouchableOpacity>
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
  button: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: '#ddd',
  },
  buttonText: {
    fontSize: 14,
    color: '#000',
  },
  activeButton: {
    backgroundColor: '#007bff',
  },
  activeButtonText: {
    color: '#fff',
  },
});

export default MoviesTag;
