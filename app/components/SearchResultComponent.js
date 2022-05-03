import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React from "react";
import colors from "../config/colors";

const SearchResultComponent = ({ navigation, item }) => {
  return (
    <TouchableHighlight
      onPress={() => navigation.navigate("Details", { item })}
      key={item.title}
      style={{ width: "25%" }}
    >
      <View style={styles.container}>
        <Image
          source={{ uri: item.image }}
          style={{ width: "100%", height: "100%" }}
        />
        <Text style={styles.title}>
          {item.title.length > 7
            ? item.title.slice(0, 5) + "See more..."
            : item.title}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default SearchResultComponent;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 100,
    borderTopWidth: 0.5,
    alignItems: "center",
    flexDirection: "row",
    margin: 5,
  },
  title: {
    color: colors.white,
    position: "absolute",
    alignSelf: "center",
    width: "100%",
  },
});
