import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { Alert, Image, StyleSheet, View } from "react-native";
import AppLoading from "expo-app-loading";
import * as ImagePicker from "expo-image-picker";

import Screen from "./app/components/Screen";
import colors from "./app/config/colors";

import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/Forms/AppTextInput";
import AppSwitch from "./app/components/AppSwitch";
import AppPicker from "./app/components/AppPicker";
import AppButton from "./app/components/AppButton";
import LoginScreen from "./app/screens/LoginScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ListingDetailsScreen from "./app/screens/ListingDetails";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ImageInput from "./app/components/ImageInput";

export default function App() {
  const [imageUri, setImageUri] = useState(null);

  const pickImage = async () => {
    try {
      let result = await ImagePicker.getMediaLibraryPermissionsAsync();
      console.log("IMAGE:", result);

      if (!result.cancelled) {
        setImageUri(result.uri);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getImagePickerPermission = async () => {
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

  useEffect(() => {
    getImagePickerPermission();
  }, []);

  console.log("IMAGE IN STATE IS:", imageUri);
  return (
    <Screen>
      <View style={styles.container}>
        <AppButton title="Select Image" onPress={pickImage} />
        <ImageInput imageUri={imageUri} onPress={pickImage} />
        <Image source={{ uri: imageUri }} />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // backgroundColor: colors.backgroundGray,
  },
});
