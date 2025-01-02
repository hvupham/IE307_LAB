// 21522804 Phạm Hoài Vũ
import { createStackNavigator } from "@react-navigation/stack";

import MainMedia from "./MainMedia";
import RecordVideo from "./RecordVideo";

const Stack = createStackNavigator();

const MediaStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainMedia"
        component={MainMedia}
        options={{ headerTitle: "My gallery" }}
      />
      <Stack.Screen
        name="RecordVideo"
        component={RecordVideo}
        options={{ headerTitle: "Record video" }}
      />
    </Stack.Navigator>
  );
};

export default MediaStack;
