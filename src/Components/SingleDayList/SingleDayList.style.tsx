import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  dayListContainer: {},
  dayListTitleContainer: {
    backgroundColor: "#F7F8FB",
    padding: 15,
    borderBottomWidth: 0.25,
    borderTopWidth: 0.25,
    borderColor: "#CBD2E1",
  },
  dayListShiftHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  dayListTitle: {
    color: "#4F6C92",
    fontWeight: "700",
    fontSize: 17,
  },
  dayListShiftTime: {
    color: "#A7B7CC",
    fontWeight: "400",
    fontSize: 13,
    marginLeft: 15,
  },
});
