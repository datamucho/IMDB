import { Image, StyleSheet, View } from "react-native";
import Text from "./Text";
import React from "react";

const FavMovieItem = ({ imageUrl, name }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          elevation: 10,
        }}
      >
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Image
          source={require("../assets/rate.png")}
          style={{
            position: "absolute",
            right: -45,
            top: 10,
            width: 30,
            height: 30,
          }}
        />
      </View>

      <View opacity={0.7}>
        <Text
          style={{ alignSelf: "center", fontFamily: "Hind", marginTop: 10 }}
        >
          {name}
        </Text>
      </View>
    </View>
  );
};

export default FavMovieItem;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    width: "50%",
  },
  image: { width: 160, height: 220 },
});
