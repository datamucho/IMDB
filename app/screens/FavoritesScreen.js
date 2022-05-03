import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import Text from "../components/Text";
import colors from "../config/colors";
import { FlatList } from "react-native-gesture-handler";
import FavMovieItem from "../components/FavMovieItem";

const FavoritesScreen = ({ navigation, favMovies }) => {
  console.log(favMovies);
  return (
    <Screen style={{ backgroundColor: colors.primary }}>
      <View>
        <Text style={styles.title}>Favorites</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          style={styles.flatList}
          columnWrapperStyle={{
            alignItems: "center",
          }}
          numColumns={2}
          data={favMovies}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableHighlight
              onPress={() => navigation.navigate("Details", { item })}
            >
              <FavMovieItem imageUrl={item.image} name={item.title} />
            </TouchableHighlight>
          )}
        />
      </View>
    </Screen>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  flatList: {
    width: "100%",
    height: "100%",
  },
  title: {
    color: colors.white,
    fontSize: 40,
    fontFamily: "Montserrat",
    fontWeight: "700",
    margin: 20,
  },
});
