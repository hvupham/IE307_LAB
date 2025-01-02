// 21522732 Lê Quang Trường
import { createStackNavigator } from "@react-navigation/stack";
import HomeBottom from "./HomeBottom";
import ProductDetail from "./ProductDetail";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeBottom">
      <Stack.Screen
        name="HomeBottom"
        component={HomeBottom}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={({ route }) => ({ title: route.params.item.title })}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
