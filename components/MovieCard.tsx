import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackParamList} from '../redux/types';
import GenreList from './GenreList';

type MovieCardRouteProp = RouteProp<StackParamList, 'MovieCard'>;

const MovieCard: React.FC = () => {
  const route = useRoute<MovieCardRouteProp>();
  const navigation = useNavigation();
  const {movie} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>Back to List</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
          }}
          style={styles.poster}
          resizeMode="contain"
        />
        <View style={styles.textContainer}>
          <GenreList genresId={movie.genre_ids} />
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.overview}>{movie.overview}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  poster: {
    width: '100%',
    height: 500, // Adjust the height as needed
    marginBottom: 20,
  },
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  overview: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  buttonContainer: {
    marginVertical: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  buttonText: {
    color: 'blue',
    fontSize: 16,
  },
  textContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default MovieCard;
