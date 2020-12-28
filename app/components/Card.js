import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

const Card = ({ title, subTitle, image, style, price }) => (
  <View style={styles.card}>
    <Image source={image} style={styles.image} />
    <View style={styles.detailsContainer}>
      <AppText>{title}</AppText>
      <AppText style={styles.subTitle}>
        {price && "$"}
        {subTitle}
      </AppText>
    </View>
  </View>
);
export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 1,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 15,
  },
  image: { height: 200, width: "100%", overflow: "hidden" },
  subTitle: { color: colors.secondary, fontWeight: "bold" },
  title: { marginBottom: 7 },
});
