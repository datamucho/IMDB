import {
  Image,
  StyleSheet,
  View,
  TouchableHighlight,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import Screen from "../components/Screen";
import Text from "../components/Text";
import AppTextInput from "../components/AppTextInput";

import colors from "../config/colors";
import SearchResultComponent from "../components/SearchResultComponent";

const SearchScreen = ({ navigation }) => {
  const [searchWord, setSearchWord] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, [searchWord]);

  const fetchMovies = async () => {
    const response = await fetch(
      `https://imdb-api.com/en/API/Search/k_9m71pu7i/${searchWord}`
    );
    const data = await response.json();

    setMovies(data.results);
  };

  return (
    <Screen style={{ backgroundColor: "#2C3E50" }}>
      <View style={styles.container}>
        <Text style={styles.title}>Find your favorite movie!</Text>

        <AppTextInput
          name="search"
          placeholder="Search for movies"
          width="90%"
          value={searchWord}
          style={{ marginBottom: 0 }}
          onChangeText={(val) => setSearchWord(val)}
        />
        <Text>Search results: </Text>
        <View style={{ width: "90%", marginTop: 20 }}>
          <FlatList
            data={movies}
            keyExtractor={(item) => item.title}
            numColumns={4}
            renderItem={({ item }) => (
              <SearchResultComponent item={item} navigation={navigation} />
            )}
          />
        </View>
      </View>
    </Screen>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    textAlign: "left",
  },
  title: {
    fontSize: 42,
    margin: 20,
    fontWeight: "700",
  },
});
