import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
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
        <Button
          title="Search Movies"
          onPress={() => handleToggle('search')}
          color={activeComponent === 'search' ? 'blue' : 'gray'}
        />
        <Button
          title="Browse by Tag"
          onPress={() => handleToggle('tag')}
          color={activeComponent === 'tag' ? 'blue' : 'gray'}
        />
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
});

export default Search;
