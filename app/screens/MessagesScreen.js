import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import Screen from "../components/Screen";
import { useState } from "react";
import AppText from "../components/AppText";
import colors from "../config/colors";

const initialMessages = [
  {
    name: "PlayStation 4",
    price: "$289.99",
    image: { uri: "https://i.pravatar.cc/300" },
  },
  {
    name: "Power Drill",
    price: "$159.99",
    image: { uri: "https://i.pravatar.cc/300" },
  },
  {
    name: "Antec 790GX",
    price: "$59.99",
    image: { uri: "https://i.pravatar.cc/300" },
  },
];

const refreshedMessages = [
  {
    name: "Nintendo Switch Pro",
    price: "$235.99",
    image: { uri: "https://i.pravatar.cc/400" },
  },
  {
    name: "Sega DreamCast 2",
    price: "$25.99",
    image: { uri: "https://i.pravatar.cc/300" },
  },
  {
    name: "Dell XPS 14ZX 2020",
    price: "$1900",
    image: { uri: "https://i.pravatar.cc/600" },
  },
  {
    name: "PlayStation 4 Controller Elite Black 2020 Model",
    price: "$55.99",
    image: { uri: "https://i.pravatar.cc/500" },
  },
];
export default function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  //Handle Item delete
  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.name !== message.name));
  };
  const renderList = ({ item }) => (
    <ListItem
      key={item.name}
      title={item.name}
      subTitle={item.price}
      image={item.image}
      onPress={() => console.log("Message selected", item)}
      renderRightActions={() => (
        <ListItemDeleteAction onPress={() => handleDelete(item)} />
      )}
    />
  );
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.name}
        renderItem={(item, index) => renderList(item)}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages(refreshedMessages);
        }}
        ListEmptyComponent={() => (
          <AppText style={styles.emptyComponent}>No items</AppText>
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  emptyComponent: {
    color: colors.primary,
    fontWeight: "bold",
    textAlign: "center",
  },
});
