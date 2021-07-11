import React from "react";
import { View, Text, Modal, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";
import LottieView from "lottie-react-native";

import colors from "../config/colors";

const UploadScreen = ({ onDone, progress = 0, visible = false }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            color={colors.primary}
            progress={progress}
            width={200}
          />
        ) : (
          <Text style={styles.done}>Done!</Text>
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  done: {
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 30,
    color: colors.primary,
  },
});
export default UploadScreen;
