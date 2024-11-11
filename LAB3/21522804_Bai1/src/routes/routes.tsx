// Phạm Hoài Vũ MSSV:21522804
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { RootNativeStackParamList } from "../routes/types/type"
import MainScreen from "./types/BottomTabNavigation"
import LogInScreen from "../pages/auth/LoginScreen"
import RegisterScreen from "../pages/auth/RegisterScreen"
import { AppContext } from "../context/AppContextProps "
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NotificationDrawer } from "../pages/mainScreen/Home/NotificationDrawer"
import Home from "../pages/mainScreen/HomeScreen"
import { NotificationDetailScreen } from "../pages/mainScreen/NotificationDetailScreen"
const Stack = createNativeStackNavigator<RootNativeStackParamList>()
export const Screen = () => {
	const appContext = React.useContext(AppContext)

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{ headerShown: false }}
				initialRouteName="LogIn">
				{appContext?.isLoggedIn === "success" ? (
					<>
					<Stack.Screen name="HomeScreen" component={MainScreen} />
						<Stack.Screen
							options={{ headerShown: true }}
							name="HomeDetailScreen"
							component={Home}
						/>
						<Stack.Screen
							options={{ headerShown: true }}
							name="NotificationDetailScreen"
							component={NotificationDetailScreen}
						/>
					</>
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