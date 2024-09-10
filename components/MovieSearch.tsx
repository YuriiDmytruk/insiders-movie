import React, {useState} from 'react';
import {View, Button, TextInput, StyleSheet} from 'react-native';

const MovieSearch = () => {
  const [searchString, setSearchString] = useState<string>('');

  const handlePress = () => {
    console.log(searchString);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        value={searchString}
        onChangeText={setSearchString}
      />
      <Button onPress={handlePress} title="Search" />
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

export default MovieSearch;
