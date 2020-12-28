import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Red Jacket for sale",
    price: "79.99",
    image: { uri: "https://picsum.photos/400/400" },
  },
  {
    id: 123,
    title: "Red Hat for sale",
    price: "90.99",
    image: { uri: "https://picsum.photos/400/350" },
  },
  {
    id: 132,
    title: "Black Jacket for sale",
    price: "120.99",
    image: { uri: "https://picsum.photos/500/300" },
  },
  {
    id: 210,
    title: "Green Blazer for sale",
    price: "85.99",
    image: { uri: "https://picsum.photos/200/200" },
  },
  {
    id: 901,
    title: "Blue Jeans for sale",
    price: "30.99",
    image: { uri: "https://picsum.photos/300/400" },
  },
];

export default function ListingsScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const renderListings = (item) => (
    <Card title={item.title} price subTitle={item.price} image={item.image} />
  );
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <FlatList
          data={listings}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => renderListings(item)}
          ItemSeparatorComponent={() => <ListItemSeparator />}
          refreshing={refreshing}
          onRefresh={() => console.log("finished refreshing!")}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 20 },
  screen: { backgroundColor: colors.backgroundGray },
});
