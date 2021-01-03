import React from "react";
import { Text, View } from "react-native";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;
  return (
    <View>
      <Text style={{ color: "red", marginBottom: "2%" }}>{error}</Text>
    </View>
  );
}

export default ErrorMessage;
