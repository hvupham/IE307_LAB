// Phạm Hoài Vũ - 21522804
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
	return (
		<View style={styles.headerContainer}>
			<Text style={styles.headerText}>Social Media</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	headerContainer: {
		height: 60,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#2563eb', 
	},
	headerText: {
		fontSize: 24,
		color: 'white', 
		fontWeight: 'bold', 
	},
});

export default Header;
