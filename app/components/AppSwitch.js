import React, { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import Screen from "./Screen";

export default function AppSwitch() {
  const [isNew, setIsNew] = useState(false);
  return (
    <Screen>
      <Switch
        value={isNew}
        onValueChange={(newValue) => setIsNew(newValue)}
      ></Switch>
    </Screen>
  );
}

const styles = StyleSheet.create({});
