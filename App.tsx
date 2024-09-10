import React from 'react';
import {
  SafeAreaView,
  ScrollView,
} from 'react-native';
import MovieList from './components/MovieList';
import MovieSearch from './components/MovieSearch';
import { Provider } from 'react-redux';
import { store } from './redux/store';



function App(): React.JSX.Element {

  return (
    <Provider store={store} >
    <SafeAreaView>
      <ScrollView>
        <MovieSearch />
        <MovieList />
      </ScrollView>
    </SafeAreaView>
    </Provider>
  );
}

/*
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
*/
export default App;
