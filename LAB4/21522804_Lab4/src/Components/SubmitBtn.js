// 21522732 Lê Quang Trường
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const SubmitBtn = ({ title, handleOnPress }) => {
  return (
    <TouchableOpacity style={styles.submitBtn} onPress={handleOnPress}>
      <Text style={styles.submitBtnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SubmitBtn;

const styles = StyleSheet.create({
  submitBtn: {
    marginTop: 20,
    width: 200,
    height: 50,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  submitBtnText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#000000",
  },
});
