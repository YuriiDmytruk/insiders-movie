import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

type GenreListProps = {
  genresId: number[];
};

const GenreList: React.FC<GenreListProps> = ({genresId}) => {
  const genres = useSelector((state: RootState) => state.movies.genres);

  const filteredGenres = genres.filter(genre => genresId.includes(genre.id));

  return (
    <View style={styles.container}>
      {filteredGenres.map(genre => (
        <View key={genre.id} style={styles.genreBox}>
          <Text style={styles.genreText}>{genre.name}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
    padding: 10,
  },
  genreBox: {
    minWidth: '30%',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  genreText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
});

export default GenreList;
