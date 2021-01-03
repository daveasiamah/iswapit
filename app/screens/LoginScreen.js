import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import SubmitButton from "../components/SubmitButton";
import AppFormField from "../components/Forms/AppFormField";
import AppForm from "../components/Forms/AppForm";

export default function LoginScreen() {
  const handleLogin = ({ values }) => {
    alert("Values are:", JSON.stringify(values));
  };

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be like user@domain.com")
      .required("Email is required.")
      .trim(),
    password: Yup.string()
      .min(8, "Password must be more that 8 characters.")
      .required("Password is required.")
      .trim(),
  });

  return (
    <Screen style={{ paddingHorizontal: 10 }}>
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../assets/iswapit_logo2.png")}
          style={{ width: 120, height: 120 }}
        />
      </View>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log("Form values are:", values)}
        validateOnBlur
        validationSchema={loginSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name="email"
          icon="email"
          placeholder="Email"
          keyboardType="email-address"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name="password"
          icon="lock"
          placeholder="Password"
          secureTextEntry
        />

        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({});
