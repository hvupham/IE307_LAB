import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import MainPlaces from "./MainPlaces";
import AddPlaceStack from "./AddPlaceStack";
import PlaceDetailStack from "./PlaceDetailStack";

const Stack = createStackNavigator();

const PlacesStack = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainPlaces"
        component={MainPlaces}
        options={{
          header: () => (
            <View className="flex-row justify-between items-center bg-stone-200 px-6 pb-4 pt-8">
              <Text className="text-2xl font-bold">My places</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("AddPlaceStack")}
              >
                <View className="w-10 h-10 rounded-full bg-yellow-400 items-center justify-center">
                  <Ionicons name="add" size={30} color={"#fff"} />
                </View>
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="AddPlaceStack"
        component={AddPlaceStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PlaceDetailStack"
        component={PlaceDetailStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default PlacesStack;
