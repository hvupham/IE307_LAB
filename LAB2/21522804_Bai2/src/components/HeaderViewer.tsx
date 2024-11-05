// Phạm Hoài Vũ -21522804
// HeaderViewer.tsx
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { themState } from "../../App";

type HeaderViewerProps = {
  theme: themState;
};

const HeaderViewer: React.FC<HeaderViewerProps> = ({ theme }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/logo.png")}
      />
      <Text style={[styles.title, { color: theme.TEXT_COLOR }]}>React Native App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20, // khoảng cách giữa các thành phần
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default HeaderViewer;
