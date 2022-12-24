import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: -27,
  },
  addButton: {
    width: 52,
    height: 52,
    padding: 18,
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonActive: {
    backgroundColor: "#4EA8DE",
  },
  addButtonText: {
    color: "#f2f2f2",
    fontSize: 16,
  },
});
