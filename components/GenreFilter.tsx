import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { filterMovies } from '../redux/slices/moviesSlice';

export type Genre = {
  id: number;
  name: string;
};

const GenreFilter: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState<Genre[]>([]);
  const allGenres = useSelector((state: RootState) => state.movies.genres);

  const dispatch = useDispatch();

  const handlePress = () => {
    setIsActive(!isActive);
  };

  const handleToggleGenre = (genre: Genre) => {
    setSelectedGenres(prevState =>
      prevState.find(g => g.id === genre.id)
        ? prevState.filter(g => g.id !== genre.id)
        : [...prevState, genre],
    );
  };

  const handleClearFilters = () => {
    setSelectedGenres([]);
    dispatch(filterMovies({ filters: [] }));
  };

  useEffect(() => {
    dispatch(filterMovies({ filters: selectedGenres }));
  }, [selectedGenres, dispatch]);

  const isFiltersActive = selectedGenres.length > 0;

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.filterButton} onPress={handlePress}>
          <Text style={[styles.filterText, isActive && styles.activeFilterText]}>
            Filter
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.clearButton, isFiltersActive && styles.activeClearButton]}
          onPress={handleClearFilters}
        >
          <Text style={[styles.clearButtonText, isFiltersActive && styles.activeClearButtonText]}>
            Clear Filters
          </Text>
        </TouchableOpacity>
      </View>
      {isActive && (
        <View style={styles.genreContainer}>
          {allGenres.map(genre => {
            const isSelected = selectedGenres.some(g => g.id === genre.id);
            return (
              <TouchableOpacity
                key={genre.id}
                style={[
                  styles.genreBox,
                  isSelected && styles.selectedGenreBox,
                ]}
                onPress={() => handleToggleGenre(genre)}
              >
                <Text
                  style={[
                    styles.genreText,
                    isSelected && styles.selectedGenreText,
                  ]}
                >
                  {genre.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterButton: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  filterText: {
    color: 'gray',
    fontSize: 20,
  },
  activeFilterText: {
    color: 'blue',
  },
  clearButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: 'transparent',
    marginLeft: 10,
    alignItems: 'center',
  },
  clearButtonText: {
    color: 'gray',
    fontSize: 16,
  },
  activeClearButton: {

  },
  activeClearButtonText: {
    color: 'blue',
  },
  genreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 4,
    padding: 10,
  },
  genreBox: {
    minWidth: '20%',
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
  selectedGenreBox: {
    borderColor: 'blue',
  },
  selectedGenreText: {
    color: 'blue',
  },
});

export default GenreFilter;
