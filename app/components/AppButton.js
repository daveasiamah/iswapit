import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

import { default as colors } from "../config/colors";

const AppButton = ({ title, color = "primary", onPress }) => (
  <TouchableOpacity
    style={[styles.button, { backgroundColor: colors[color] }]}
    onPress={onPress}
  >
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    height: 70,
    width: "100%",
    borderRadius: 335,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    elevation: 3,
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default AppButton;
