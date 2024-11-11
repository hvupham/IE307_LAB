import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { createNoteState, themeState, updateNoteState } from "../stores/atom";
import { AntDesign, Octicons } from "@expo/vector-icons";
import hooksNote from "../hooks/hookNote/hooksNote";
import { RouteProp, useRoute } from "@react-navigation/native";
import { HomeNativeStackParamList } from "../Navigation/Type";
export const NoteAppHomeScreen = () => {
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
		padding: 16,
	},
	darkContainer: {
		backgroundColor: "#1A1A1A",
	},
	inputContainer: {
		paddingVertical: 8,
		paddingHorizontal: 16,
		borderWidth: 1,
		borderColor: "gray",
		borderRadius: 8,
	},
	noteInputContainer: {
		height: 128,
		paddingVertical: 8,
		paddingHorizontal: 16,
		borderWidth: 1,
		borderColor: "gray",
		borderRadius: 8,
	},
	textInput: {
		color: "black",
	},
	darkText: {
		color: "white",
	},
	actionContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 16,
	},
});
