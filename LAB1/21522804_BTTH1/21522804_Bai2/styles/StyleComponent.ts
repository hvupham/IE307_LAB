// Phạm Hoài Vũ - 21522804
import { StyleSheet } from "react-native";
export const StyleComponent = StyleSheet.create({
    container: {
      marginTop: 30,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      width: "100%",
      height: "100%",
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      color: "blue",
      marginVertical: 10,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#f9c2ff",
      padding: 10,
    },
    headerImage: {
      width: 30,
      height: 30,
      marginRight: 10,
    },
    headerTitle: {
      fontSize: 18,
    },
    item: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 10,
      backgroundColor: "#fff",
      marginVertical: 8,
      borderRadius: 10,
    },
    selectedItem: {
      backgroundColor: "#ccc",
    },
    selectedText: {
      color: "#fff",
      fontWeight: "bold",
      alignItems: "center",
      fontSize: 16,
    },
    textworkout: {
      fontSize: 16,
      alignSelf: "center",
    },
    btn: {
      display: "flex",
      alignItems: "center",
      width: 100,
      justifyContent: "center",
      backgroundColor: "blue",
      padding: 7,
      marginLeft: 10,
      borderRadius: 4,
    },
  });
  