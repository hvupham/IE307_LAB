// Profile.tsx
import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AppContext } from "../../context/AppContextProps ";

export const Profile = () => {
	const appContext = React.useContext(AppContext);

	const handleLogOut = () => {
		appContext?.setIsLoggedIn("idle");
	};

	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				<Text>Profile Screen</Text>
				<TouchableOpacity onPress={handleLogOut}>
					<Text style={styles.logoutText}>Log Out</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
	},
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	logoutText: {
		color: "#1E90FF", // Thay thế cho text-blue-400
		marginTop: 12, // Tạo khoảng cách tương tự "space-y-3"
		fontSize: 16,
	},
});

export default Profile;
