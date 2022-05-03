import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function AppTextInput({ icon, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.white}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={"#C4C4C4"}
        style={{
          color: "black",
          alignContent: "center",
          justifyContent: "center",
        }}
        width="100%"
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 10,
    flexDirection: "row",
    padding: 10,
    marginVertical: 0,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
