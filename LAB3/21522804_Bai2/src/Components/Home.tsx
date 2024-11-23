import { AntDesign } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRecoilValue } from "recoil";
import { HomeNativeStackParamList } from "../Navigation/navigation";
import { themeState } from "../stores/export"
import { ListItemNoteScreenComponent } from "./ListItem";

export const Home = () => {
	const navigation = useNavigation<NavigationProp<HomeNativeStackParamList>>();
	const handleNavigateToNoteApp = (id: string | null) => {
		return navigation.navigate("NoteApp", { id });
	};
	const { theme, fontSize } = useRecoilValue(themeState);
	const isDarkTheme = theme === "Dark";

	return (
		<View
			style={[
				styles.container,
				isDarkTheme && styles.darkContainer,
			]}>
			<View style={styles.header}>
				<Text
					style={[
						styles.title,
						{ fontSize },
						isDarkTheme && styles.darkTitle,
					]}>
					All Notes
				</Text>
				<TouchableOpacity onPress={() => handleNavigateToNoteApp(null)}>
					<View>
						<AntDesign
							name="pluscircle"
							color={isDarkTheme ? "blue" : "green"}
							size={42}
						/>
					</View>
				</TouchableOpacity>
			</View>
			<ListItemNoteScreenComponent />
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		height: "100%",
		paddingVertical: 16,
		paddingHorizontal: 12,
		backgroundColor: "#f8f9fa",
	},
	darkContainer: {
		backgroundColor: "#121212",
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%",
		paddingHorizontal: 16,
		paddingVertical: 12,
		borderBottomWidth: 1,
		borderBottomColor: "#cccccc",
	},
	title: {
		fontSize: 26,
		fontWeight: "700",
		color: "#333333",
	},
	darkTitle: {
		color: "#ffffff",
	},
	button: {
		backgroundColor: "#00aaff",
		borderRadius: 50,
		padding: 8,
	},
	icon: {
		color: "#00aaff",
	},
});

