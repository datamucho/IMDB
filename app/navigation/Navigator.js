import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import SearchScreen from "../screens/SearchScreen";
import FavoriteNavigator from "./FavoriteNavigator";

const Tab = createBottomTabNavigator();

export default function HomeNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          backgroundColor: "#2C3E50",
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Favorite"
        component={FavoriteNavigator}
        options={{
          headerTintColor: "#fff",
          tabBarIcon: ({ color, size }) => (
            <Image
              name="home"
              color={color}
              size={size}
              source={require("../assets/logo.png")}
            />
          ),
          tabBarActiveTintColor: "#fff",
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              name="home"
              color={color}
              size={size}
              source={require("../assets/search.png")}
            />
          ),
          tabBarActiveTintColor: "#fff",
        }}
      />
    </Tab.Navigator>
  );
}
