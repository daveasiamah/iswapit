import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  Alert,
  Button,
  Platform,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

const getScreenInfo = () => {
  const screenSize = Dimensions.get("screen");
  console.log(screenSize);
};

export default function App() {
  const { landscape } = useDeviceOrientation();
  console.log(useDimensions());
  console.log(useDeviceOrientation());

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={{
          color: "black",
          width: "100%",
          height: landscape ? "100%" : "30%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "gold",
        }}
        onPress={() => getScreenInfo()}
      >
        <Text style={styles.text}>Press Me</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  image: {
    width: 300,
    height: 200,
  },
  text: {
    color: "#ffff",
    fontSize: 35,
    fontWeight: "bold",
  },
});
