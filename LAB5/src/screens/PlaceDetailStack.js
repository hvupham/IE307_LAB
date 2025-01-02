// 21522804 Phạm Hoài Vũ
import { createStackNavigator } from "@react-navigation/stack";
import { useRoute } from "@react-navigation/native";

import PlaceDetail from "./PlaceDetail";
import ViewOnMap from "./ViewOnMap";

const Stack = createStackNavigator();

const PlaceDetailStack = () => {
  const route = useRoute();
  const { item } = route.params;

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={PlaceDetail}
        name="PlaceDetail"
        options={{ headerTitle: item.title }}
        initialParams={item}
      />
      <Stack.Screen
        component={ViewOnMap}
        name="ViewOnMap"
        options={{ headerTitle: "Map" }}
      />
    </Stack.Navigator>
  );
};

export default PlaceDetailStack;
