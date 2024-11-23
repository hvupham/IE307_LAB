import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeTabParamList } from "./navigation";
import { SettingView } from "../Screens/SettingScreen";
import { HomeScreen } from "../Screens/HomeScreen";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useRecoilValue } from "recoil";
import { themeState } from "../stores/atom";
const Tab = createBottomTabNavigator<HomeTabParamList>();

export const HomeView = () => {
	const { theme } = useRecoilValue(themeState);
	const isDarkTheme = theme === "Dark";

	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={({ route }) => ({
				tabBarActiveBackgroundColor: isDarkTheme ? "black" : "white",
				tabBarInactiveBackgroundColor: isDarkTheme ? "black" : "white",
				headerShown: false,
				tabBarIcon: ({ focused }) => {
					const iconColor = focused ? "blue" : "#ccc";
					const borderStyle = focused ? styles.focusedBorder : undefined;

					if (route.name === "Home")
						return (
							<View style={[styles.iconContainer, borderStyle]}>
								<Feather name="home" size={24} color={iconColor} />
							</View>
						);

					if (route.name === "Settings")
						return (
							<View style={[styles.iconContainer, borderStyle]}>
								<AntDesign name="setting" size={24} color={iconColor} />
							</View>
						);
				},
			})}>
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Settings" component={SettingView} />
		</Tab.Navigator>
	);
};

const styles = StyleSheet.create({
	iconContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	focusedBorder: {
		borderTopWidth: 1,
		borderTopColor: "black",
	},
});
