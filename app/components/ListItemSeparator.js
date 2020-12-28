import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

export default function ListItemSeparator() {
  return (
    <View
      style={{
        backgroundColor: colors.backgroundGray,
        width: "100%",
        height: 1,
      }}
    />
  );
}

const styles = StyleSheet.create({});
