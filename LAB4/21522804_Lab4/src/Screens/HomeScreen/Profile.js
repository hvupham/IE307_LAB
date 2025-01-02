// 21522804 Phạm Hoài Vũ

import { StyleSheet, Text, View, Button, Image, Pressable } from "react-native";
import { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { AuthenContext } from "../../context/AuthenContext";
import { DataContext } from "../../context/DataContext";

const Profile = ({ navigation }) => {
  const { setAuthen } = useContext(AuthenContext);
  const { userInfo, setToken } = useContext(DataContext);

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const handleLogOut = () => {
    setAuthen(false);
    setToken("");
    console.log("Log out");
  };

  // 21522804 Phạm Hoài Vũ

  return (
    <View style={styles.container}>
      {/* Main info */}
      <View style={styles.row}>
        <View style={styles.mainInfo}>
          <Image source={require("../../../assets/avatar.jpg")} style={styles.avatar} />
          <Text style={styles.boldText}>
            {capitalize(userInfo.name.firstname)}
          </Text>
          <Text style={styles.boldText}>
            {capitalize(userInfo.name.lastname)}
          </Text>
        </View>

        <Pressable
          onPress={() =>
            navigation.navigate("EditProfile", {
              firstName: userInfo.name.firstname,
              lastName: userInfo.name.lastname,
              username: userInfo.username,
              email: userInfo.email,
              phoneNumber: userInfo.phone,
              houseNumber: userInfo.address.number,
              street: userInfo.address.street,
              city: userInfo.address.city,
            })
          }
        >
          {/* 21522804 Phạm Hoài Vũ
 */}
          <Ionicons
            name="open"
            color={styles.editIcon.color}
            size={styles.editIcon.size}
          />
        </Pressable>
      </View>

      {/* Specific info */}
      <View style={styles.specificInfo}>
        {/* Name */}
        <View style={styles.specificInfoGroup}>
          <Text style={[styles.boldText, styles.title]}>Name:</Text>
          <Text style={styles.detailInfo}>{userInfo.name.firstname}</Text>
          <Text style={[styles.detailInfo, styles.space]}>
            {userInfo.name.lastname}
          </Text>
        </View>

        {/* Username */}
        <View style={styles.specificInfoGroup}>
          <Text style={[styles.boldText, styles.title]}>Username:</Text>
          <Text style={styles.detailInfo}>{userInfo.username}</Text>
        </View>

        {/* Email */}
        <View style={styles.specificInfoGroup}>
          <Text style={[styles.boldText, styles.title]}>Email:</Text>
          <Text style={styles.detailInfo}>{userInfo.email}</Text>
        </View>

        {/* 21522804 Phạm Hoài Vũ
 */}
        {/* Phone */}
        <View style={styles.specificInfoGroup}>
          <Text style={[styles.boldText, styles.title]}>Phone:</Text>
          <Text style={styles.detailInfo}>{userInfo.phone}</Text>
        </View>

        {/* Address */}
        <View style={styles.specificInfoGroup}>
          <Text style={[styles.boldText, styles.title]}>Address:</Text>
          <Text style={styles.detailInfo}>{userInfo.address.number}</Text>
          <Text style={[styles.detailInfo, styles.space]}>
            {userInfo.address.street}
          </Text>
          <Text style={[styles.detailInfo, styles.space]}>
            {userInfo.address.city}
          </Text>
        </View>
      </View>

      {/* Log out btn */}
      <Button title="log out" onPress={handleLogOut} />
    </View>
  );
};

// 21522804 Phạm Hoài Vũ

export default Profile;

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    paddingTop: 50,
    paddingHorizontal: 30,
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  boldText: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 7,
  },
  mainInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  editIcon: {
    color: "black",
    size: 40,
  },
  specificInfo: {
    marginTop: 50,
    marginBottom: 30,
  },
  specificInfoGroup: {
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 23,
    marginLeft: 0,
    marginRight: 20,
  },
  detailInfo: {
    fontSize: 20,
  },
  space: { marginLeft: 5 },
});
