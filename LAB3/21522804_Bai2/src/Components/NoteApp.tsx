import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { createNoteState, themeState, updateNoteState } from "../stores/atom";
import { AntDesign, Octicons } from "@expo/vector-icons";
import hooksNote from "../hooks/Note";
import { RouteProp, useRoute } from "@react-navigation/native";
import { HomeNativeStackParamList } from "../Navigation/navigation";
export const NoteApp = () => {
	const {
		params: { id },
	} = useRoute<RouteProp<HomeNativeStackParamList, "NoteApp">>();
	const getCreateNoteState = useRecoilValue(createNoteState);
	const getUpdateNoteState = useRecoilValue(updateNoteState);
	const { theme, fontSize } = useRecoilValue(themeState);
	const setCreateNoteState = useSetRecoilState(createNoteState);
	const setUpdateNoteState = useSetRecoilState(updateNoteState);
	const { handleCreateNote } = hooksNote.useCreateNote();
	const { handleGetListNote } = hooksNote.useGetListNote();
	const { handleUpdateNote } = hooksNote.useUpdateNote();
	const isDarkTheme = theme === "Dark";

	return (
		<View style={[styles.container, isDarkTheme && styles.darkContainer]}>
			<View style={styles.inputContainer}>
				<TextInput
					style={[styles.textInput, { fontSize }, isDarkTheme && styles.darkText]}
					placeholderTextColor={isDarkTheme ? "white" : "gray"}
					placeholder="Enter your title"
					value={
						id
							? getUpdateNoteState.content.title ?? ''
							: getCreateNoteState.contents.title ?? ''
					}
					onChangeText={(text) => {
						if (!id) {
							setCreateNoteState((preState) => ({
								state: "hasValue",
								contents: {
									...preState.contents,
									title: text,
								},
							}));
						} else {
							setUpdateNoteState((preState) => ({
								state: "hasValue",
								content: {
									...preState.content,
									title: text,
								},
							}));
						}
					}}
				/>
			</View>
			<View style={[styles.noteInputContainer]}>
				<TextInput
					multiline={true}
					style={[styles.textInput, { fontSize }, isDarkTheme && styles.darkText]}
					placeholderTextColor={isDarkTheme ? "white" : "gray"}
					placeholder="Enter your note"
					value={
						id
							? getUpdateNoteState.content.note ?? ''
							: getCreateNoteState.contents.note ?? ''
					}
					onChangeText={(text) => {
						if (!id) {
							setCreateNoteState((preState) => ({
								state: "hasValue",
								contents: {
									...preState.contents,
									note: text,
								},
							}));
						} else {
							setUpdateNoteState((preState) => ({
								state: "hasValue",
								content: {
									...preState.content,
									note: text,
								},
							}));
						}
					}}
				/>
			</View>
			<View style={styles.actionContainer}>
				<Octicons name="x-circle-fill" size={44} color={"red"} />
				<TouchableOpacity
					onPress={() => {
						if (!id) {
							handleCreateNote();
							handleGetListNote();
						} else {
							handleUpdateNote(id);
							handleGetListNote();
						}
					}}>
					<AntDesign name="checkcircle" size={44} color={"green"} />
				</TouchableOpacity>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: "#f5f5f5",
	},
	darkContainer: {
		backgroundColor: "#121212",
	},
	inputContainer: {
		marginBottom: 12,
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderWidth: 1.5,
		borderColor: "#888",
		borderRadius: 10,
		backgroundColor: "#ffffff",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 5,
	},
	noteInputContainer: {
		height: 140,
		marginBottom: 12,
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderWidth: 1.5,
		borderColor: "#888",
		borderRadius: 10,
		backgroundColor: "#ffffff",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 5,
	},
	textInput: {
		color: "#333",
	},
	darkText: {
		color: "#e0e0e0",
	},
	actionContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
		marginTop: 20,
	},
});

