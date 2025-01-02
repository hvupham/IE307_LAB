// 21522804 Phạm Hoài Vũ
import { createStackNavigator } from "@react-navigation/stack";

import AddPlace from "./AddPlace";
import PickOnMap from "./PickOnMap";

const Stack = createStackNavigator();

const AddPlaceStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AddPlace"
        component={AddPlace}
        options={{ title: "Add new place" }}
      />
      <Stack.Screen
        name="PickOnMap"
        component={PickOnMap}
        options={{
          title: "Map",
        }}
      />
    </Stack.Navigator>
  );
};

export default AddPlaceStack;
