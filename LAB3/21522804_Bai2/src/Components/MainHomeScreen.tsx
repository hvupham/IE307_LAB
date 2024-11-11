import { AntDesign } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRecoilValue } from "recoil";
import { HomeNativeStackParamList } from "../Navigation/Type";
import { themeState } from "../stores/export"
import { ListItemNoteScreenComponent } from "./ListItem";

export const MainHomeScreen = () => {
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
							color={isDarkTheme ? "blue" : "orange"}
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
		paddingVertical: 10,
	},
	darkContainer: {
		backgroundColor: "#1A1A1A",
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%",
		paddingHorizontal: 8,
		paddingVertical: 6,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
	},
	darkTitle: {
		color: "white",
	},
});
