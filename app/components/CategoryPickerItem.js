import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import AppIcon from "./AppIcon";
import AppText from "./AppText";

const CategoryPickerItem = ({ item, onPress }) => {
  return (
    // <View style={styles.container}>
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <AppIcon
        name={item.icon}
        iconColor={item.iconColor}
        size={70}
        backgroundColor={item.backgroundColor}
      />
      <AppText style={styles.label}>{item.label}</AppText>
    </TouchableOpacity>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
  },
  label: {
    marginTop: 15,
    textAlign: "center",
  },
});

export default CategoryPickerItem;
