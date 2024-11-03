// Phạm Hoài Vũ MSSV:21522804
// LogInScreen.tsx
import { AntDesign, Feather, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useContext } from "react";
import {
	SafeAreaView,
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Alert,
	StyleSheet,
} from "react-native";
import { AppContext } from "../../context/AppContextProps "; 

export const LogInScreen = () => {
	const navigation = useNavigation();
	const appContext = useContext(AppContext);
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const AlertContent = () =>
		Alert.alert("Incorrect email or password", "", [
			{
				onPress: () => {
					appContext?.setIsLoggedIn("hasError");
				},
			},
		]);

	const handleSubmit = () => {
		if (appContext?.data) {
			if (!appContext.data.some((e) => e.email === email && e.password === password)) {
				AlertContent();
				console.log("hasError");
			} else {
				appContext.setIsLoggedIn("success");
				console.log("success");
			}
		}
	};

	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				<View style={styles.logoContainer}>
					<FontAwesome5 name="react" size={52} color="#61dbfb" />
				</View>
				<Text style={styles.welcomeText}>Welcome</Text>
				<View style={styles.inputContainer}>
					<View style={styles.inputWrapper}>
						<Feather name="mail" size={24} />
						<TextInput
							onChangeText={setEmail}
							style={styles.input}
							placeholder="Enter email"
						/>
					</View>
					<View style={styles.inputWrapper}>
						<AntDesign name="lock1" size={24} />
						<TextInput
							onChangeText={setPassword}
							style={styles.input}
							placeholder="Enter password"
							secureTextEntry={true}
						/>
					</View>
					<View style={styles.forgotPasswordContainer}>
						<Text style={styles.forgotPasswordText}>Forgot password</Text>
					</View>
					<TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
						<Text style={styles.loginButtonText}>LOG IN</Text>
					</TouchableOpacity>
					<View style={styles.socialLoginContainer}>
						<Text style={styles.socialLoginText}>Or login with</Text>
						<View style={styles.socialIconsContainer}>
							<FontAwesome5 name="facebook" color="blue" size={48} />
							<AntDesign name="google" color="red" size={48} />
						</View>
					</View>
					<View>
						<Text style={styles.signUpText}>
							Don't have an account?{" "}
							<Text
								onPress={() => navigation.navigate("SignUp" as never)}
								style={styles.signUpLink}>
								Sign up here!
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
	welcomeText: {
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
	forgotPasswordContainer: {
		alignItems: "flex-end",
		width: "100%",
		marginBottom: 16,
	},
	forgotPasswordText: {
		color: "#fb7185", // Màu tương đương với "text-pink-400"
	},
	loginButton: {
		padding: 12,
		backgroundColor: "#f97316", // Màu tương đương với "bg-orange-500"
		borderRadius: 8,
		marginBottom: 16,
	},
	loginButtonText: {
		color: "white",
		fontSize: 18,
		textAlign: "center",
	},
	socialLoginContainer: {
		alignItems: "center",
		marginBottom: 16,
	},
	socialLoginText: {
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 8,
		textAlign: "center",
	},
	socialIconsContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	signUpText: {
		textAlign: "center",
		fontSize: 16,
	},
	signUpLink: {
		fontWeight: "bold",
		color: "#2563eb", // Màu tương đương với "text-blue-600"
	},
});

export default LogInScreen;
