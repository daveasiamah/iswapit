import React from "react";
import { StyleSheet, Text, Platform } from "react-native";
import defaultStyles from "../config/styles";

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: defaultStyles.text,
});

export default AppText;
