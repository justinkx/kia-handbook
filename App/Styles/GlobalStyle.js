import { StyleSheet } from "react-native";

import COLORS from "./Colors";

const PAGE_PADDING = 15;

export default GlobalStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  flexGrow: {
    flexGrow: 1,
  },
  whiteBackground: {
    backgroundColor: COLORS.white,
  },
  pagePadding: {
    padding: PAGE_PADDING,
  },
  row: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
