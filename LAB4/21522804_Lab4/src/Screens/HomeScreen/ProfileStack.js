// 21522804 Phạm Hoài Vũ

import { createStackNavigator } from "@react-navigation/stack";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { DataContext } from "../../context/DataContext";
import { useContext } from "react";

const Stack = createStackNavigator();

const ProfileStack = () => {
  const { setIsUpdateButtonPressed } = useContext(DataContext);
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Profile");
    setIsUpdateButtonPressed(true);
  };

  // 21522804 Phạm Hoài Vũ

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerTitle: "Edit Profile",
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 20 }}
              onPress={() => handlePress()}
            >
              <Ionicons name="checkmark" color={{ color: "black" }} size={30} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
