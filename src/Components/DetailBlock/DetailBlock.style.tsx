import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  detailBlockContainer: {
    padding: 15,
    borderBottomWidth: 0.25,
    borderTopWidth: 0.25,
    borderColor: "#CBD2E1",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  detailBlockTime: {
    color: "#4F6C92",
    fontSize: 15,
    fontWeight: "500",
  },
  detailBlockArea: {
    color: "#A7B7CC",
    fontSize: 12,
    fontWeight: "500",
  },
  detailBlockRightContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  detailBlockRightText: {
    marginRight: 10,
    fontSize: 12,
    fontWeight: "700",
  },
  detailBlockRightBookedText: {
    color: "#4F6C92",
  },
  detailBlockRightOverlappingText: {
    color: "#E2006A",
  },
});
