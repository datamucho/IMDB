import { StyleSheet, View, Image, ScrollView } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import Text from "../components/Text";
import AppButton from "../components/Button";
import colors from "../config/colors";
const imgArrays = [
  "https://picsum.photos/200",
  "https://picsum.photos/200",
  "https://picsum.photos/200",
  "https://picsum.photos/200",
  "https://picsum.photos/200",
  "https://picsum.photos/200",
  "https://picsum.photos/200",
  "https://picsum.photos/200",
];

const MovieDetailsScreen = ({ navigation, route, onAdd, onRemove }) => {
  const { item } = route.params;
  console.log(item);
  return (
    <Screen style={{ backgroundColor: colors.primary }}>
      <View style={styles.ImageContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <ScrollView>
        <View style={styles.description}>
          <Text>Description</Text>
          <Text>{item.description}</Text>
          <View style={styles.desc}>
            <Text style={styles.item}>Director</Text>
            <Text style={[styles.item, { color: "#2ECC71" }]}>Lorema</Text>
            <Text style={styles.item}>Serial film</Text>
            <Text style={[styles.item, { color: "#2ECC71" }]}>Lorema</Text>
          </View>
          <Text style={{ fontSize: 30 }}>The cast</Text>
          <ScrollView horizontal>
            {imgArrays.length > 1 &&
              imgArrays.map((item, idx) => (
                <View key={idx.toString()}>
                  <Image
                    source={{ uri: item }}
                    style={{ width: 50, height: 50, margin: 5 }}
                  />
                </View>
              ))}
          </ScrollView>
        </View>
      </ScrollView>

      <View style={styles.button}>
        <AppButton
          title="+ Favorites"
          width="60%"
          color="red"
          onPress={() => {
            onAdd(item);
            navigation.navigate("Favorites");
          }}
        />
        <AppButton
          title="hide"
          width="30%"
          color="white"
          textColor="red"
          onPress={() => {
            onRemove(item.title);
            navigation.navigate("Favorites");
          }}
        />
      </View>
    </Screen>
  );
};

export default MovieDetailsScreen;

const styles = StyleSheet.create({
  ImageContainer: {
    alignItems: "center",
    height: "65%",
  },
  image: {
    width: "100%",
    height: "100%",

    position: "absolute",
  },
  title: {
    position: "absolute",
    top: "65%",
    fontSize: 40,
    fontWeight: "700",
  },
  description: {
    marginLeft: 20,
    marginTop: 20,
  },
  desc: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    width: "50%",
  },
  button: {
    width: "100%",
    flexDirection: "row",
    height: 75,
    backgroundColor: colors.primary,
    bottom: 0,
    justifyContent: "space-around",
  },
});
