import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import Screen from "../components/Screen";

const UserProfile = () => {
  return (
    <Screen style={styles.container}>
      {/* <View style={styles.container}> */}
      <AppText>User Profile</AppText>
      {/* </View> */}
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.backgroundGray },
});
export default UserProfile;
