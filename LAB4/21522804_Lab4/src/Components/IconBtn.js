// 21522732 Lê Quang Trường
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";

const IconBtn = ({ imageSrc }) => {
  return (
    <TouchableOpacity>
      <Image source={imageSrc} style={styles.loginLogo} />
    </TouchableOpacity>
  );
};

export default IconBtn;

const styles = StyleSheet.create({
  loginLogo: {
    width: 50,
    height: 50,
    marginHorizontal: 15,
  },
});
