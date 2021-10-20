import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ImageInput({ imageUri, onChangeImage }) {
  //Request image media library permission
  const requestPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Image Picker", "Please allow permission for media library."),
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed"), style: "ok" },
        ],
        { cancelable: false };
    }
  };

  //Handle image input icon press
  const handlePress = async () => {
    if (!imageUri) {
      selectImage();
    } else
      Alert.alert(
        "Delete Image",
        "Are you sure you want to delete this image?",
        [{ text: "Yes", onPress: () => onChangeImage(null) }, { text: "No" }]
      );
  };

  //Select image from media library
  const selectImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      console.log("IMAGE:", result);

      if (!result.cancelled) {
        onChangeImage(result.uri);
      }
    } catch (error) {
      console.log("Error reading image", error);
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            color={colors.subTitleGray}
            name="camera"
            size={30}
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
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
    height: 100,
    overflow: "hidden",
    // margin: 10,
    resizeMode: "contain",
    width: 100,
  },
  image: { width: "100%", height: "100%" },
});
