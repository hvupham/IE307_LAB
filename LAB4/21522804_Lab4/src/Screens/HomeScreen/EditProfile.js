// 21522732 Lê Quang Trường
import { StyleSheet, Text, View, TextInput } from "react-native";
import { useContext, useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { DataContext } from "../../Components/DataContext";
import axios from "axios";
import { SafeAreaView } from "react-native";

const EditProfile = () => {
  const route = useRoute();
  const {
    userInfo,
    setUserInfo,
    isUpdateButtonPressed,
    setIsUpdateButtonPressed,
  } = useContext(DataContext);

  const [firstName, setFirstName] = useState(route.params.firstName);
  const [lastName, setLastName] = useState(route.params.lastName);
  const [username, setUsername] = useState(route.params.username);
  const [email, setEmail] = useState(route.params.email);
  const [phoneNumber, setPhoneNumber] = useState(route.params.phoneNumber);
  const [houseNumber, setHouseNumber] = useState(
    route.params.houseNumber.toString()
  );
  const [city, setCity] = useState(route.params.city);
  const [street, setStreet] = useState(route.params.street);

  // 21522732 Lê Quang Trường
  const updateDataOnServer = () => {
    axios
      .put(`https://fakestoreapi.com/users/${userInfo.id}`, userInfo)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (isUpdateButtonPressed) {
      setIsUpdateButtonPressed(false);
      setUserInfo({
        ...userInfo,
        name: { firstname: firstName, lastname: lastName },
        username: username,
        email: email,
        phone: phoneNumber,
        address: {
          city: city,
          street: street,
          number: houseNumber,
        },
      });
      console.log("User info is updated");
      updateDataOnServer();
    }
  }, [isUpdateButtonPressed]);

  return (
    // 21522732 Lê Quang Trường
    <SafeAreaView style={styles.container}>
      {/* Name group */}
      <View style={styles.row}>
        <View style={[styles.inputGroup, styles.longInput]}>
          <Text style={styles.title}>First Name</Text>
          <TextInput
            defaultValue={firstName}
            style={styles.input}
            onChangeText={(newText) => setFirstName(newText)}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.title}>Last Name</Text>
          <TextInput
            defaultValue={lastName}
            style={styles.input}
            onChangeText={(newText) => setLastName(newText)}
          />
        </View>
      </View>

      {/* Username */}
      <View style={styles.inputGroup}>
        <Text style={styles.title}>Username</Text>
        <TextInput
          defaultValue={username}
          style={styles.input}
          onChangeText={(newText) => setUsername(newText)}
        />
      </View>

      {/* 21522732 Lê Quang Trường */}
      {/* Email */}
      <View style={styles.inputGroup}>
        <Text style={styles.title}>Email</Text>
        <TextInput
          defaultValue={email}
          style={styles.input}
          onChangeText={(newText) => setEmail(newText)}
        />
      </View>

      {/* Phone Number */}
      <View style={styles.inputGroup}>
        <Text style={styles.title}>Phone Number</Text>
        <TextInput
          defaultValue={phoneNumber}
          style={styles.input}
          onChangeText={(newText) => setPhoneNumber(newText)}
        />
      </View>

      {/* House Number */}
      <View style={styles.inputGroup}>
        <Text style={styles.title}>House Number</Text>
        <TextInput
          defaultValue={houseNumber}
          style={styles.input}
          onChangeText={(newText) => setHouseNumber(newText)}
        />
      </View>

      {/* 21522732 Lê Quang Trường */}
      {/* Street */}
      <View style={styles.inputGroup}>
        <Text style={styles.title}>Street</Text>
        <TextInput
          defaultValue={street}
          style={styles.input}
          onChangeText={(newText) => setStreet(newText)}
        />
      </View>

      {/* City */}
      <View style={styles.inputGroup}>
        <Text style={styles.title}>City</Text>
        <TextInput
          defaultValue={city}
          style={styles.input}
          onChangeText={(newText) => setCity(newText)}
        />
      </View>
    </SafeAreaView>
  );
};

// 21522732 Lê Quang Trường
export default EditProfile;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 35,
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  title: {
    fontSize: 23,
    fontWeight: "bold",
  },
  inputGroup: {
    marginTop: 20,
  },
  input: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    padding: 5,
  },
  longInput: {
    flex: 2,
    marginRight: 30,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
