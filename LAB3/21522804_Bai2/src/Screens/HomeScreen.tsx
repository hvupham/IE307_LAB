import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { HomeNativeStackParamList } from "../Navigation/navigation";
import { useRecoilValue } from "recoil";
import { themeState } from "../stores/export"
import { Home } from "../Components/Home";
import { NoteApp } from "../Components/NoteApp";
const HomeNativeStack = createNativeStackNavigator<HomeNativeStackParamList>();
export const HomeScreen = () => {
	const { theme } = useRecoilValue(themeState);
	const isDarkTheme = theme === "Dark";

	return (
		<HomeNativeStack.Navigator
			screenOptions={({ route, navigation }) => ({
				animationDuration: 100,
				animation: "fade_from_bottom",
				header: () => {
					if (route.name === "Main") {
						return (
							<SafeAreaView style={[styles.headerContainer, isDarkTheme && styles.darkBackground]}>
								<View style={styles.centeredContainer}>
									<Text style={[styles.headerText, isDarkTheme ? styles.darkText : styles.lightText]}>
										Note App
									</Text>
								</View>
							</SafeAreaView>
						);
					}
					if (route.name === "NoteApp") {
						return (
							<SafeAreaView>
								<View
									style={[
										styles.noteAppHeaderContainer,
										isDarkTheme && styles.darkGrayBackground,
									]}>
									<TouchableOpacity
										style={styles.goBackButton}
										onPress={() => navigation.navigate("Main")}>
										<Text style={isDarkTheme ? styles.whiteText : styles.orangeText}>
											Go back
										</Text>
									</TouchableOpacity>
									<Text
										style={[
											styles.headerText,
											isDarkTheme ? styles.whiteText : styles.orangeText,
										]}>
										{route.params && route.params.id ? "EditNote" : "AddNote"}
									</Text>
								</View>
							</SafeAreaView>
						);
					}
				},
			})}>
			<HomeNativeStack.Screen name="Main" component={Home} />
			<HomeNativeStack.Screen name="NoteApp" component={NoteApp} />
		</HomeNativeStack.Navigator>
	);
};

const styles = StyleSheet.create({
	headerContainer: {
		width: "100%",
		height: 64,
		borderBottomWidth: 1,
		borderColor: "gray",
		borderStyle: "solid",
	},
	centeredContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	headerText: {
		fontSize: 20,
		fontWeight: "bold",
	},
	darkBackground: {
		backgroundColor: "#1a1a1a",
	},
	darkText: {
		color: "blue",
	},
	lightText: {
		color: "orange",
	},
	noteAppHeaderContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%",
		height: 64,
		borderBottomWidth: 1,
		borderColor: "gray",
		borderStyle: "solid",
		paddingHorizontal: 16,
	},
	darkGrayBackground: {
		backgroundColor: "gray",
	},
	goBackButton: {
		width: "33%",
	},
	whiteText: {
		color: "white",
	},
	orangeText: {
		color: "orange",
	},
});
