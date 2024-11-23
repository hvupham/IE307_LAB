import "react-native-get-random-values"
import { database } from "../../../config"
export const useDeleteNote = () => {
	const handleDeleteNote = (id: string) => {
		database.transaction((tx) => {
			tx.executeSql(`delete from Note where id = ?`, [id])
		})
	}
	return { handleDeleteNote }
}
