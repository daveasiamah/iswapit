import React from "react";
import { View, Text, StyleSheet } from "react-native";

const StylingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.blueBox}>
        <View style={styles.yellowBox}>
          <Text style={styles.text}>Box</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  blueBox: {
    backgroundColor: "steelblue",
    justifyContent: "center",
    shadowColor: "lightgrey",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.7,
    shadowRadius: 9,
    width: 150,
    height: 130,
    padding: 20,
    paddingLeft: 30,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  yellowBox: {
    width: 60,
    height: 60,
    backgroundColor: "gold",
  },
  text: { textAlign: "center", alignSelf: "center" },
});

export default StylingScreen;
