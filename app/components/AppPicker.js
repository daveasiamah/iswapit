import React, { useState } from "react";
import { Modal, StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import {
  FlatList,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import AppButton from "./AppButton";
import PickerItem from "./PickerItem";

export default function AppPicker({
  icon,
  items,
  numberOfColumns,
  onSelectItem,
  placeholder,
  PickerItemComponent = PickerItem,
  selectedItem,
  width = "100%",
}) {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.subTitleGray}
              style={{ marginRight: 10 }}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.subTitleGray}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={visible} animationType="slide">
        <View style={styles.modalWrapper}>
          <AppButton title="Close" onPress={() => setVisible(false)} />
          <FlatList
            data={items}
            numColumns={numberOfColumns}
            keyExtractor={(item) => item.label}
            renderItem={({ item }) => (
              <PickerItemComponent
                label={item.label}
                item={item}
                onPress={() => {
                  setVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.backgroundGray,
    borderRadius: 25,
    flexDirection: "row",
    marginVertical: 10,
    padding: 15,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  modalWrapper: { paddingHorizontal: 10, flex: 1 },
  placeholder: {
    color: defaultStyles.colors.subTitleGray,
    flex: 1,
  },
  text: {
    flex: 1,
  },
  textInput: defaultStyles.text,
});
