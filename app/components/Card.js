import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

const Card = ({ title, subTitle, imageUrl, description, price, onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>
          {price && "$"}
          {subTitle}
        </AppText>
      </View>
    </View>
  </TouchableWithoutFeedback>
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
  title: { fontWeight: "bold", marginBottom: 7 },
});
