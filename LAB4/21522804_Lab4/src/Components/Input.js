// 21522732 Lê Quang Trường
import { StyleSheet, TextInput, SafeAreaView } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

const Input = ({ type, iconType, placeholder, onChangeText }) => {
  return (
    <SafeAreaView style={styles.inputBox}>
      <Icon name={iconType} style={styles.iconInput} />
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={type === "password"}
      />
    </SafeAreaView>
  );
};

export default Input;

// 21522732 Lê Quang Trường
const styles = StyleSheet.create({
  // Input group
  inputBox: {
    marginTop: 20,
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  iconInput: {
    marginHorizontal: 7,
    fontSize: 25,
  },
});
