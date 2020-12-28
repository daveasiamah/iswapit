import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";

const ListingDetailsScreen = ({ title, subTitle, image, style }) => (
  <View>
    <Image source={image} style={styles.image} />
    <View style={styles.detailsContainer}>
      <AppText>{title}</AppText>
      <AppText style={styles.subTitle}>{subTitle}</AppText>
    </View>
    <ListItem
      title="IceColdDave"
      subTitle="25 Listings"
      image={{ uri: "https://i.pravatar.cc/150?u=fake@pravatar.com" }}
    />
  </View>
);
export default ListingDetailsScreen;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    marginBottom: 20,
  },
  detailsContainer: {
    padding: 10,
    marginBottom: 20,
    backgroundColor: colors.white,
  },
  image: {
    height: 300,
    // resizeMode: "contain",
    width: "100%",
  },
  subTitle: { color: colors.secondary, fontWeight: "bold" },
  title: { marginBottom: 7 },
});
