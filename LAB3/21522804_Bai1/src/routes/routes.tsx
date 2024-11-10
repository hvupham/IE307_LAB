// Phạm Hoài Vũ MSSV:21522804
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootNativeStackParamList } from "../routes/types/type"
import MainScreen from "../pages/mainScreen/route"
import LogInScreen from "../pages/auth/LoginScreen"
import RegisterScreen from "../pages/auth/RegisterScreen"
import { AppContext } from "../context/AppContextProps "
const Stack = createNativeStackNavigator<RootNativeStackParamList>()
export const Screen = () => {
	const appContext = React.useContext(AppContext)

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{ headerShown: false }}
				initialRouteName="LogIn">
				{appContext?.isLoggedIn === "success" ? (
					<Stack.Screen name="HomeScreen" component={MainScreen} />
				) : (
					<>
						<Stack.Screen name="LogIn" component={LogInScreen} />
						<Stack.Screen name="SignUp" component={RegisterScreen} />
					</>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	)
}