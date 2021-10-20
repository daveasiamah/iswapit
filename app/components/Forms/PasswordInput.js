import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import AppIcon from "../AppIcon";
import colors from "../../config/colors";

export default function PasswordInput({
  isSecure,
  keyboardType,
  onChangeText,
  style,
}) {
  return (
    <View>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        style={[styles.input, style]}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        {...rest}
        secureTextEntry={isSecure}
      />
      {isSecure ? (
        <AppIcon
          type="material-community"
          name="eye"
          size={20}
          color={colors.inputBorderGrey}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.subTitleGray,
    borderRadius: 15,
    paddingHorizontal: 25,
    width: "100%",
    minHeight: 60,
    marginTop: "3%",
    marginBottom: "3%",
  },
  inputLabel: {
    fontWeight: "bold",
    fontSize: 16,
    color: colors.subTitleGray,
  },
});
