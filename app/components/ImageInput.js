import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ImageInput({ imageUri, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            color={colors.subTitleGray}
            name="camera"
            size={30}
          />
        )}
        {imageUri && (
          <Image
            source={{ uri: imageUri }}
            style={{ width: 200, height: 200 }}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.backgroundGray,
    borderRadius: 15,
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
});
