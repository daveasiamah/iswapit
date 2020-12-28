import "react-native-gesture-handler";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import AppLoading from "expo-app-loading";

import Screen from "./app/components/Screen";
import colors from "./app/config/colors";

import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppSwitch from "./app/components/AppSwitch";

export default function App() {
  return (
    <Screen style={{ paddingHorizontal: 10 }}>
      <AppTextInput placeholder="Email" icon="email" />
      <AppSwitch />
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundGray,
  },
});
