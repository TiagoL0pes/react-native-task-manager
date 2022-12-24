import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingLeft: 12,
    paddingRight: 24,
    backgroundColor: "#262626",
    borderColor: "#333333",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 8,
  },
  containerDone: {
    borderColor: "#262626",
  },
  description: {
    width: "80%",
    color: "#F2F2F2",
  },
  done: {
    textDecorationLine: "line-through",
    color: "#808080",
  },
});
