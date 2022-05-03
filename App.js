import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from "./app/navigation/Navigator";

import useFetch from "./app/api/useFetch";
import { useFonts } from "expo-font";
import MovieDetailsScreen from "./app/screens/MovieDetailsScreen";

const getFonts = () =>
  Font.loadAsync({ poppins: require("./app/fonts/Poppins-Medium.ttf") });

export default function App() {
  const [loaded] = useFonts({
    Montserrat: require("./app/fonts/Poppins-Medium.ttf"),
    Hind: require("./app/fonts/Hind-Light.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
