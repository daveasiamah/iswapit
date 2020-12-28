import { Platform } from "react-native";
import colors from "./colors";

export default {
  colors,
  text: {
    color: colors.titleGray,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    width: "90%",
    lineHeight: 20,
    // backgroundColor: "cyan",
  },
};
