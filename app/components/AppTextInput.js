import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";

export default function AppTextInput({ icon, placeholder, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.subTitleGray}
          style={{ marginRight: 10 }}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.subTitleGray}
        placeholder={placeholder}
        style={styles.textInput}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.backgroundGray,
    borderRadius: 25,
    flexDirection: "row",
    marginVertical: 10,
    padding: 15,
    width: "100%",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  textInput: defaultStyles.text,
});
