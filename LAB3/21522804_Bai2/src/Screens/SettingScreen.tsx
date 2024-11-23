import { SafeAreaView, Switch, Text, View, StyleSheet } from "react-native";
import { useRecoilState } from "recoil";
import { themeState } from "../../stores/atom";
import Slider from "@react-native-community/slider";

export const SettingView = () => {
	const [getThemeState, setThemeState] = useRecoilState(themeState);
	const isDarkTheme = getThemeState.theme === "Dark";

	const handleChangeTheme = () => {
		setThemeState((preState) => ({
			...preState,
			theme: isDarkTheme ? "Light" : "Dark",
		}));
	};

	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={[styles.header, isDarkTheme && styles.darkBackground]}>
				<Text style={[styles.headerText, isDarkTheme && styles.whiteText]}>Settings</Text>
			</View>
			<View style={[styles.container, isDarkTheme && styles.darkContainer]}>
				<View style={styles.row}>
					<Text style={[styles.text, { fontSize: getThemeState.fontSize }, isDarkTheme && styles.whiteText]}>
						Dark Mode
					</Text>
					<Switch onChange={handleChangeTheme} value={isDarkTheme} />
				</View>
				<View style={styles.column}>
					<View style={styles.row}>
						<Text style={[styles.text, { fontSize: getThemeState.fontSize }, isDarkTheme && styles.whiteText]}>
							Font Size
						</Text>
						<Text style={[styles.text, { fontSize: getThemeState.fontSize }, isDarkTheme && styles.whiteText]}>
							{getThemeState.fontSize}
						</Text>
					</View>
					<Slider
						style={styles.slider}
						value={getThemeState.fontSize}
						onValueChange={(fontSize) => {
							setThemeState((preState) => ({
								...preState,
								fontSize: Math.round(fontSize),
							}));
						}}
						minimumValue={1}
						maximumValue={32}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
	},
	header: {
		paddingLeft: 16,
		width: "100%",
		height: 48,
		borderBottomWidth: 1,
		borderColor: "gray",
		borderStyle: "solid",
		justifyContent: "center",
	},
	darkBackground: {
		backgroundColor: "gray",
	},
	headerText: {
		fontSize: 18,
		fontWeight: "bold",
	},
	container: {
		flex: 1,
		paddingHorizontal: 32,
		justifyContent: "center",
	},
	darkContainer: {
		backgroundColor: "#1A1A1A",
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%",
		marginVertical: 8,
	},
	column: {
		alignItems: "center",
		width: "100%",
	},
	text: {
		fontSize: 16,
	},
	whiteText: {
		color: "white",
	},
	slider: {
		width: 240,
		marginTop: 8,
	},
});
