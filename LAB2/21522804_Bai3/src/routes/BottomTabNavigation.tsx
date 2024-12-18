// Phạm Hoài Vũ MSSV:21522804
// HomeScreen.tsx
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeTabParamsList } from "./types/type";
import { Home } from "../pages/mainScreen/HomeScreen";
import { Categories } from "../pages/mainScreen/CategoriesScreen";
import { Profile } from "../pages/mainScreen/ProfileScreen";
import { Favorites } from "../pages/mainScreen/FavoritesScreen";
import { AntDesign, FontAwesome, Octicons } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";
const favouritesCount = 5;

const Tab = createBottomTabNavigator<HomeTabParamsList>();

export const MainScreen = () => {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused }) => {
					const iconColor = focused ? "blue" : "black";
					let IconComponent;

					switch (route.name) {
						case "Home":
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
			<Tab.Screen name="Home" component={Home} />
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
