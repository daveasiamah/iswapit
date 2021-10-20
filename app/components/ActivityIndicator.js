import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

export default function ActivityIndicator({ visible = false, style }) {
  if (!visible) return null;
  return (
    <View style={[styles.container, style]}>
      <ImageBackground
        source={require("../assets/animations/animation_500_kjnq8rof.gif")}
        style={styles.indicator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  indicator: { width: "99%", height: 500, resizeMode: "contain" },
});
