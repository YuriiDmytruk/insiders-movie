import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import MoviesTag from './MoviesTag';
import MoviesSearch from './MoviesSearch';

const Search = () => {
  const [activeComponent, setActiveComponent] = useState<'search' | 'tag'>('tag');

  const handleToggle = (component: 'search' | 'tag') => {
    setActiveComponent(component);
  };

  return (
    <View>
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={[
            styles.button,
            activeComponent === 'search'
              ? styles.activeButton
              : styles.inactiveButton,
          ]}
          onPress={() => handleToggle('search')}>
          <Text
            style={[
              styles.buttonText,
              activeComponent === 'search'
                ? styles.activeButtonText
                : styles.inactiveButtonText,
            ]}
          >
            Search Movies
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            activeComponent === 'tag'
              ? styles.activeButton
              : styles.inactiveButton,
          ]}
          onPress={() => handleToggle('tag')}>
          <Text
            style={[
              styles.buttonText,
              activeComponent === 'tag'
                ? styles.activeButtonText
                : styles.inactiveButtonText,
            ]}
          >
            Browse by Tag
          </Text>
        </TouchableOpacity>
      </View>

      {activeComponent === 'search' ? <MoviesSearch /> : <MoviesTag />}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonGroup: {
    paddingHorizontal: 20,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: 'transparent',
  },
  inactiveButton: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    fontSize: 20,
  },
  activeButtonText: {
    color: 'blue',
  },
  inactiveButtonText: {
    color: 'gray',
  },
});

export default Search;
