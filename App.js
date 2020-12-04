import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ViewImageScreen /> */}
      <AppText style={styles.title}>I Love React Native.</AppText>
      {/* <WelcomeScreen /> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
});
