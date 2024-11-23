import { useSetRecoilState } from "recoil"
import { database } from "../../../config"
import { listNoteState } from "../../stores/atom"
export const useGetListNote = () => {
	const setListNote = useSetRecoilState(listNoteState)
	const handleGetListNote = () => {
		database.transaction((tx) => {
			tx.executeSql(`select * from Note`, [], (_, { rows }) => {
				setListNote({
					state: "hasValue",
					contents: rows._array,
				})
			})
		})
	}
	return { handleGetListNote }
}
