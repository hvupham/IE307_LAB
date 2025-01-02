// 21522804 Phạm Hoài Vũ

import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const AppHeader = ({ heading }) => {
  return (
    <View style={styles.appHeader}>
      <Image
        source={require("../../assets/react_logo.png")}
        style={styles.appIcon}
      ></Image>
      <Text style={styles.appHeading}>{heading}</Text>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  // App header
  appHeader: {
    alignItems: "center",
  },
  appIcon: {
    width: 110,
    height: 110,
  },
  appHeading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
  },
});
// 21522804 Phạm Hoài Vũ

