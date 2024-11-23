// Phạm Hoài Vũ MSSV:21522804
// HomeScreen.tsx
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeTabParamsList } from "./type";
import { Categories } from "../../pages/mainScreen/Categories/MainCategorie";
import { Profile } from "../../pages/mainScreen/ProfileScreen";
import { Favorites } from "../../pages/mainScreen/FavoritesScreen";
import { AntDesign, FontAwesome, Octicons } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";
import { MainDrawer } from "./MainDrawerNavigation";
const Tab = createBottomTabNavigator<HomeTabParamsList>();
const favouritesCount = 3;
export const MainScreen = () => {
	return (
		<Tab.Navigator
			initialRouteName="HomeTab"
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused }) => {
					const iconColor = focused ? "blue" : "black";
					let IconComponent;

					switch (route.name) {
						case "HomeTab":
							IconComponent = <AntDesign name="home" size={24} color={iconColor} />;
							break;
						case "Categories":
							IconComponent = <AntDesign name="appstore1" size={24} color={iconColor} />;
							break;
						case "Favorites":
							IconComponent = <Octicons name="heart-fill" size={24} color={iconColor} />;
							break;
						case "Profile":
							IconComponent = <FontAwesome name="user" size={24} color={iconColor} />;
							break;
						default:
							IconComponent = null;
					}

					return <View style={styles.iconContainer}>{IconComponent}</View>;
				},
				tabBarShowLabel: false,
			})}
		>
			<Tab.Screen name="HomeTab" 
			options={{ headerShown: false }}
			component={MainDrawer} />
			<Tab.Screen name="Categories" component={Categories} />
			<Tab.Screen name="Favorites" 
			options={{
				tabBarBadge: favouritesCount > 0 ? favouritesCount : undefined, // Hiển thị badge chỉ khi có mục yêu thích
			  }} 
			component={Favorites} />
			<Tab.Screen name="Profile" component={Profile} />
		</Tab.Navigator>
	);
};

const styles = StyleSheet.create({
	iconContainer: {
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		height: "100%",
	},
});

export default MainScreen;
