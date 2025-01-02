// 21522732 Lê Quang Trường
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Input from "../../Components/Input";
import SubmitBtn from "../../Components/SubmitBtn";
import AppHeader from "../../Components/AppHeader";

const Signup = ({ navigation }) => {
  const handleNavigate = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <AppHeader heading={"Create new account"} />
      {/* Input group */}
      <View style={styles.inputGroup}>
        <Input iconType={"person"} placeholder={"Enter username"} />
        <Input iconType={"mail"} placeholder={"Enter email"} />
        <Input
          type={"password"}
          iconType={"lock"}
          placeholder={"Enter password"}
        />
        <Input
          type={"password"}
          iconType={"lock"}
          placeholder={"Comfirm password"}
        />
      </View>
      {/* Submit button */}
      <SubmitBtn title={"SIGN UP"} />
      {/* Sign up navigate */}
      <View style={styles.signUpNavGroup}>
        <Text style={styles.signUpText}>Already have an account? </Text>
        <TouchableOpacity onPress={handleNavigate}>
          <Text style={[styles.signUpText, styles.signUpNav]}>Login now!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Signup;

// 21522732 Lê Quang Trường
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  // Sign up navigate
  signUpNavGroup: {
    marginTop: 15,
    flexDirection: "row",
  },
  signUpText: {
    fontSize: 18,
    textAlign: "center",
  },
  signUpNav: {
    color: "#41c4e8",
    fontWeight: "bold",
  },
});
