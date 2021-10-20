import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import AppIcon from "../components/AppIcon";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";

const menuItems = [
  {
    title: "My Listings",
    icon: { name: "format-list-bulleted", backgroundColor: colors.primary },
    screen: "MyListings",
  },
  {
    title: "My Messages",
    icon: { name: "email", backgroundColor: colors.secondary },
    screen: "Messages",
  },
];

export default function AccountScreen({ navigation }) {
  const renderMenuItem = (item) => (
    <ListItem
      title={item.title}
      IconComponent={
        <AppIcon
          name={item.icon.name}
          backgroundColor={item.icon.backgroundColor}
        />
      }
      onPress={() => navigation.navigate(item.screen)}
    />
  );
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          image={require("../assets/phonebg.jpg")}
          title="iceColdDave"
          subTitle="icecolddave@mk.com"
          onPress={() => navigation.navigate(routes.PROFILE)}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => renderMenuItem(item)}
          ItemSeparatorComponent={() => <ListItemSeparator />}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={
          <AppIcon name="logout" backgroundColor={colors.yellow} />
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 20 },
  screen: { backgroundColor: colors.backgroundGray },
});
