import { createStackNavigator } from "@react-navigation/stack";
import FavoritesScreen from "../screens/FavoritesScreen";
import MovieDetailsScreen from "../screens/MovieDetailsScreen";
import React, { useState } from "react";

const Stack = createStackNavigator();

const FavoriteNavigator = () => {
  const [favMovies, setFavMovies] = useState([]);

  const handleAdd = (movie) => {
    setFavMovies((prevState) => [...prevState, movie]);
  };

  const handleRemove = (title) => {
    setFavMovies((prevState) =>
      prevState.filter((item) => item.title !== title)
    );
  };

  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorites" options={{ headerShown: false }}>
        {(props) => <FavoritesScreen favMovies={favMovies} {...props} />}
      </Stack.Screen>
      <Stack.Screen name="Details" options={{ headerShown: false }}>
        {(props) => (
          <MovieDetailsScreen
            onAdd={handleAdd}
            onRemove={handleRemove}
            {...props}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
export default FavoriteNavigator;
