import React from 'react';
import { Text, View, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Movie, StackParamList } from '../redux/types';
import Search from './Search/Search';


type MovieListNavigationProp = NavigationProp<StackParamList, 'MovieList'>;

const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';

const MovieList = () => {
  const movies = useSelector((state: RootState) => state.movies.moviesArray);
  const navigation = useNavigation<MovieListNavigationProp>();

  const handleCardPress = (movie: Movie) => {
    navigation.navigate('MovieCard', { movie });
  };

  const renderItem = ({ item }: { item: Movie }) => (
    <TouchableOpacity style={styles.card} onPress={() => handleCardPress(item)}>
      <Image
        source={{ uri: `${IMAGE_PATH}${item.poster_path}` }}
        style={styles.image}
      />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Search />
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 250,
  },
  title: {
    textAlign: 'center',
    padding: 5,
    fontWeight: 'bold',
  },
});

export default MovieList;
