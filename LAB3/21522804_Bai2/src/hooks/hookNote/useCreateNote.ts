import { useRecoilValue, useResetRecoilState } from "recoil"
import "react-native-get-random-values"
import { createNoteState } from "../../stores/atom"
import { v4 as uuid } from "uuid"
import { Alert } from "react-native"
import { database } from "../../../config"
import { HomeNativeStackScreenProps } from "../../Navigation/navigation"
import { useNavigation } from "@react-navigation/native"
type Props = HomeNativeStackScreenProps<'NoteApp'>;
export const useCreateNote = () => {
	const navigation = useNavigation<Props['navigation']>();
	const {
		contents: { title, note },
	} = useRecoilValue(createNoteState)
	const alert = () =>
		Alert.alert("Warning", "Please enter a title", [
			{ text: "Oke", style: "default" },
		])
	const reset = useResetRecoilState(createNoteState)
	const handleCreateNote = () => {
		if (!title || !note) {
			console.log("Not true")
			alert()
			return
		} else {
			const id = uuid()
			database.transaction((tx) => {
				tx.executeSql(`insert into Note (id, title, note) values(?, ?, ?)`, [
					id,
					title,
					note,
				])
			})
			reset()
			navigation.navigate("Main");

		}
	}
	return { handleCreateNote }
}
