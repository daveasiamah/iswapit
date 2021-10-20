import "react-native-gesture-handler";
import React from "react";
import { Text, View } from "react-native";

import Screen from "./app/components/Screen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";

export default function App() {
  const netInfo = useNetInfo();
  console.log("NETWORK STATUS:", netInfo);
  const Main = () => (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
  return netInfo.isInternetReachable ? (
    <Main />
  ) : (
    <View>
      <Text>No internet connection.</Text>
    </View>
  );
  // return (
  //   <NavigationContainer theme={navigationTheme}>
  //     <AppNavigator />
  //   </NavigationContainer>
  // );
}
