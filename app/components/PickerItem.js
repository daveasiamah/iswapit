import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";
import defaultStyles from "../config/styles";
import ListItemSeparator from "./ListItemSeparator";

export default function PickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
      <ListItemSeparator />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({ text: { padding: 20 } });
