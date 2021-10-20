import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";

const ListingDetailsScreen = ({ route }) => {
  const listing = route.params;

  return (
    <View>
      <Image source={{ uri: listing.images[0].url }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.subTitle}>${listing.price}</AppText>
        {listing.description && (
          <AppText style={styles.description}>{listing.description}</AppText>
        )}
      </View>
      <ListItem
        title="David"
        subTitle="10 Listings"
        image={{ uri: "https://picsum.photos/400/400" }}
      />
    </View>
  );
};
export default ListingDetailsScreen;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    marginBottom: 20,
  },
  detailsContainer: {
    padding: 10,
    // marginBottom: 20,
    backgroundColor: colors.white,
  },
  description: { marginTop: 15, padding: 5 },
  image: {
    height: 300,
    width: "100%",
  },
  subTitle: { color: colors.secondary, fontWeight: "bold" },
  title: { fontWeight: "bold", marginBottom: 7 },
});
