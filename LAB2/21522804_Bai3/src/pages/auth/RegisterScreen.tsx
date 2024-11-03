// Phạm Hoài Vũ MSSV:21522804
// SignUpScreen.tsx
import { AntDesign, Feather, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
	SafeAreaView,
	TextInput,
	TouchableOpacity,
	Text,
	View,
	StyleSheet,
} from "react-native";

export const RegisterScreen = () => {
	const navigation = useNavigation();
	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				<View style={styles.logoContainer}>
					<FontAwesome5 name="react" size={52} color="#61dbfb" />
				</View>
				<Text style={styles.title}>Create New Account</Text>
				<View style={styles.inputContainer}>
					<View style={styles.inputWrapper}>
						<AntDesign name="user" size={24} />
						<TextInput style={styles.input} placeholder="Enter username" />
					</View>
					<View style={styles.inputWrapper}>
						<Feather name="mail" size={24} />
						<TextInput style={styles.input} placeholder="Enter email" />
					</View>
					<View style={styles.inputWrapper}>
						<AntDesign name="lock1" size={24} />
						<TextInput style={styles.input} placeholder="Enter password" secureTextEntry />
					</View>
					<View style={styles.inputWrapper}>
						<AntDesign name="lock1" size={24} />
						<TextInput style={styles.input} placeholder="Confirm password" secureTextEntry />
					</View>
					<TouchableOpacity style={styles.createButton}>
						<Text style={styles.createButtonText}>CREATE</Text>
					</TouchableOpacity>
					<View>
						<Text style={styles.footerText}>
							Already have an account?{" "}
							<Text
								onPress={() => navigation.navigate("LogIn" as never)}
								style={styles.loginLink}>
								Login now!
							</Text>
						</Text>
					</View>
				</View>
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
		paddingHorizontal: 32,
	},
	logoContainer: {
		width: 80,
		height: 80,
		backgroundColor: "black",
		borderRadius: 40,
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 16,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 16,
	},
	inputContainer: {
		width: "100%",
	},
	inputWrapper: {
		flexDirection: "row",
		alignItems: "center",
		padding: 12,
		borderWidth: 2,
		borderColor: "#cbd5e1", // Màu tương đương với "border-slate-300"
		borderRadius: 8,
		marginBottom: 16,
	},
	input: {
		flex: 1,
		fontSize: 16,
	},
	createButton: {
		padding: 12,
		backgroundColor: "#f97316", // Màu tương đương với "bg-orange-500"
		borderRadius: 8,
		marginBottom: 16,
	},
	createButtonText: {
		color: "white",
		fontSize: 18,
		textAlign: "center",
	},
	footerText: {
		textAlign: "center",
		fontSize: 16,
	},
	loginLink: {
		fontWeight: "bold",
		color: "#2563eb", // Màu tương đương với "text-blue-600"
	},
});

export default RegisterScreen;
