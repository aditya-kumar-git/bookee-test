import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  customButton: {
    borderWidth: 0.5,
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 30,
    width: 80,
    height: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  customButtonSuccess: {
    borderColor: "#9DD3AB",
  },
  customButtonDanger: {
    borderColor: "#F299B7",
  },
  customButtonDisabled: {
    borderColor: "#D6D5D4",
  },

  customButtonSpinner: {
    width: 10,
    height: 10,
  },
  customButtonText: {
    fontSize: 12,
    fontWeight: "500",
  },
  customButtonTextSuccess: {
    color: "#14A64D",
  },
  customButtonTextDanger: {
    color: "#E2006A",
  },
  customButtonTextDisabled: {
    color: "#ACABAB",
  },
});
