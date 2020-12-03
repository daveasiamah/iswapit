import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Card = (props) => (
  <View style={styles.container}>
    <Text>Card</Text>
    <Card
      title="Red jacket for sale"
      subTitle="$100"
      image={require("../assets/tiffany-stuff.jpg")}
    />
  </View>
);
export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 20,
  },
});
