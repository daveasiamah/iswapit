import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Alert,
} from "react-native";
import AppButton from "../components/AppButton";

const WelcomeScreen = () => {
  const handleLogin = () => {
    Alert.alert("Login Button Pressed!", "You Pressed the Login Button");
  };
  const handleRegister = () => {
    Alert.alert("Register Button Pressed!", "You Pressed the Register Button");
  };
  return (
    <ImageBackground
      blurRadius={3}
      style={styles.background}
      source={require("../assets/Regent-Street.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/iswapit_logo2.png")}
          style={styles.logo}
        />
        <Text style={styles.tagline}>Swap What You Don't Need.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={() => handleLogin()} />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => handleRegister()}
        />
      </View>
    </ImageBackground>
  );
};
export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    alignItems: "center",
    top: 70,
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagline: { fontSize: 16, fontWeight: "bold", paddingVertical: 5 },
  buttonContainer: {
    width: "100%",
    padding: 20,
  },
  registerButton: {
    height: 70,
    width: "100%",
    backgroundColor: "#fc5c72",
  },
});
