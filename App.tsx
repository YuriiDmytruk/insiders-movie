import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MovieList from './components/MovieList';
import MovieCard from './components/MovieCard';
import {useGetGenresQuery} from './redux/apiMovie';
import {setGenres} from './redux/slices/moviesSlice';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  const {data} = useGetGenresQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setGenres({genres: data}));
    }
  }, [data, dispatch]);

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false, // Hides the header for a cleaner look
          }}>
          <Stack.Screen name="MovieList" component={MovieList} />
          <Stack.Screen name="MovieCard" component={MovieCard} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
