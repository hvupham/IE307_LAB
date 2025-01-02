// 21522804 Phạm Hoài Vũ
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import PlacesStack from "./src/screens/PlacesStack"
import MediaStack from "./src/screens/MediaStack"

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Places"
          component={PlacesStack}
          options={{
            tabBarIcon: () => <Ionicons name="location" size={27} />,
          }}
        />
        <Tab.Screen
          name="Media"
          component={MediaStack}
          options={{ tabBarIcon: () => <Ionicons name="image" size={27} /> }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
