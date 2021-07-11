import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";

import listingsApi from "../api/listings";
import useApi from "../hooks/useApi";

import ActivityIndicator from "../components/ActivityIndicator";
import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import routes from "../navigation/routes";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";

export default function ListingsScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);

  const {
    data: listings,
    error,
    loading,
    request: loadListings,
  } = useApi(listingsApi.getListings);

  //Render Listings
  const renderListings = (item) => (
    <>
      <Card
        title={item.title}
        price
        subTitle={item.price}
        imageUrl={item.images[0].url}
        onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
      />
    </>
  );

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Could not retrieve the listings.</AppText>
          <AppButton titl="Retry" onPress={loadListings} />
        </>
      )}
      <ActivityIndicator
        visible={loading}
        style={{ position: "absolute", top: 150 }}
      />
      <View style={styles.container}>
        <FlatList
          data={listings}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => renderListings(item)}
          ItemSeparatorComponent={() => <ListItemSeparator />}
          refreshing={refreshing}
          onRefresh={() => loadListings()}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 20 },
  screen: { backgroundColor: colors.backgroundGray },
});
