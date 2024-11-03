// Favorites.tsx
import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

export const Favorites = () => {
	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				<Text>Favorites Screen</Text>
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
});

export default Favorites;
