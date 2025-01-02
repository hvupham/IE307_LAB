// 21522732 Lê Quang Trường
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { useContext, useState } from "react";
import axios from "axios";
import Input from "../../Components/Input";
import SubmitBtn from "../../Components/SubmitBtn";
import AppHeader from "../../Components/AppHeader";
import IconBtn from "../../Components/IconBtn";
import { AuthenContext } from "../../Components/AuthenContext";
import { DataContext } from "../../Components/DataContext";

const Login = ({ navigation }) => {
  const { setAuthen } = useContext(AuthenContext);
  const { setToken } = useContext(DataContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    axios
      .post("https://fakestoreapi.com/auth/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        const token = response.data.token;
        console.log(token);
        setToken(token);
        Alert.alert("Success", "Login successful");
        setAuthen(true);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Error", "Username or password is incorrect");
      });
  };

  // 21522732 Lê Quang Trường
  return (
    <View style={styles.container}>
      <AppHeader heading={"Welcome"} />
      {/* Input group */}
      <View style={styles.inputGroup}>
        <Input
          iconType={"mail"}
          placeholder={"Username"}
          onChangeText={setUsername}
        />
        <Input
          type={"password"}
          iconType={"lock"}
          placeholder={"Password"}
          onChangeText={setPassword}
        />
        <TouchableOpacity>
          <Text style={styles.forgotPass}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <SubmitBtn title={"LOG IN"} handleOnPress={handleLogin} />

      <View style={styles.otherMethodGroup}>
        <Text style={styles.otherMethod}>Or login with</Text>
        <View style={styles.logoGroup}>
          <IconBtn imageSrc={require("../../../assets/facebook.png")} />
          <IconBtn imageSrc={require("../../../assets/google.png")} />
        </View>
      </View>

      {/* Sign up navigate */}
      <View style={styles.signUpNavGroup}>
        <Text style={styles.signUpText}>Don't have account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={[styles.signUpText, styles.signUpNav]}>
            Sign up here!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  // Forgot password
  forgotPass: {
    marginTop: 9,
    fontSize: 13,
    color: "#d13d5d",
    textAlign: "right",
  },
  otherMethod: {
    marginTop: 13,
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
  },
  // Other method group
  otherMethodGroup: {
    width: "100%",
  },
  // Logo group
  logoGroup: {
    marginTop: 13,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
