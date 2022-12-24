import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 32,
  },
  title: {
    fontWeight: "700",
    fontSize: 14,
    marginRight: 8,
  },
  chip: {
    height: 19,
    width: 25,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 999,
    backgroundColor: "#333333",
  },
  chipText: {
    color: "#D9D9D9",
    fontWeight: "700",
    fontSize: 12,
    textAlign: "center",
  },
});
