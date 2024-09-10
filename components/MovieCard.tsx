import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackParamList} from '../redux/types';

type MovieCardRouteProp = RouteProp<StackParamList, 'MovieCard'>;

const MovieCard: React.FC = () => {
  const route = useRoute<MovieCardRouteProp>();
  const navigation = useNavigation();
  const {movie} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.buttonContainer}>
          <Button title="Back to List" onPress={() => navigation.goBack()} />
        </View>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
          }}
          style={styles.poster}
          resizeMode="contain"
        />
        <View style={styles.textContainer}>
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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  overview: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  buttonContainer: {
    marginVertical: 20,
  },
  textContainer: {
    marginBottom: 20,
  },
});

export default MovieCard;
