// Phạm Hoài Vũ MSSV:21522804
// Categories.tsx
import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

export const Categories = () => {
	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				<Text>Categories Screen</Text>
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

export default Categories;
