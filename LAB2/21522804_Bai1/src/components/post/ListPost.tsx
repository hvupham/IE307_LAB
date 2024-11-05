// Phạm Hoài Vũ - 21522804
// ListPost.tsx
import { ScrollView, StyleSheet, View } from "react-native"
import PostItem from "./postItem"
import itemList from "../../data/PostData"
const Posts = () => {
	return (
		<ScrollView style = {styles.container}>
			{itemList.map((item, index) => {
				return <PostItem {...item} key={index} />
			})}
		</ScrollView>
	)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
})
export default Posts;