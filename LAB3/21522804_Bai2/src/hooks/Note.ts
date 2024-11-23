import { useCreateNote } from "./hookNote/useCreateNote"
import { useGetListNote } from "./hookNote/useGetNote"
import { useDeleteNote } from "./hookNote/useDeleteNote"
import { useUpdateNote } from "./hookNote/useUpdateNote"
const hooksNote = {
	useCreateNote,
	useGetListNote,
	useUpdateNote,
	useDeleteNote,
}
export default hooksNote
