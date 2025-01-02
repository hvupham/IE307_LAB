import { NavigationContainer } from "@react-navigation/native";
import AuthenticationScreen from "./AuthenScreen/AuthenticationScreen";
import HomeStack from "./HomeScreen/HomeStack";
import { AuthenContext } from "../context/AuthenContext";
import { useContext } from "react";

const MainNavigator = () => {
  const { isAuthen } = useContext(AuthenContext);

  return (
    <NavigationContainer>
      {isAuthen ? <HomeStack /> : <AuthenticationScreen />}
    </NavigationContainer>
  );
};

export default MainNavigator;
