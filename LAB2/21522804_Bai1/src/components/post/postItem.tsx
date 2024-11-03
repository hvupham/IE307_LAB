// Phạm Hoài Vũ - 21522804
import React from "react"
import Icon from "react-native-vector-icons/FontAwesome"
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native"
interface status {
	LIKE: boolean
}
interface interactProps {
	like: number
	comment: number
	share: number
}
interface PostItemProps {
	username: string
	title: string
	imgUrl: string
	likes: number
	comments: number
	shares: number
}
const PostItem = (props: PostItemProps) => {
	const { username, title, imgUrl, likes, comments, shares } = props
	const [status, setStatus] = React.useState<status>({
		LIKE: false,
	})
	const [interact, setInteract] = React.useState<interactProps>({
		like: likes,
		comment: comments,
		share: shares,
	})

	const handleInteract = (nameText: string) => {
		if (nameText === "like") {
			setStatus((preState) => ({ ...preState, LIKE: !preState.LIKE }))
			setInteract((preState) => ({
				...preState,
				like: status.LIKE ? preState.like - 1 : preState.like + 1,
			}))
		}
		if (nameText === "comment")
			setInteract((preState) => ({
				...preState,
				comment: preState.comment + 1,
			}))
		if (nameText === "share")
			setInteract((preState) => ({
				...preState,
				share: preState.share + 1,
			}))
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<View style={styles.avatarContainer}>
					<Image
						source={{
							uri: "https://i.pinimg.com/474x/a9/b8/43/a9b843b45b13d393a22eca1b9f7fba1a.jpg",
						}}
						style={styles.avatar}
					/>
				</View>
				<Text style={styles.username}>{username}</Text>
			</View>
			<Text style={styles.title}>{title}</Text>
			<Image
				source={{
					uri: imgUrl,
				}}
				style={styles.postImage}
			/>
			<View style={styles.interactContainer}>
				<Text style={styles.likes}>{interact.like} Likes</Text>
				<Text style={styles.comments}>{interact.comment} Comments</Text>
				<Text style={styles.shares}>{interact.share} Shares</Text>
			</View>
			<View style={styles.divider} />
			<View style={styles.actionsContainer}>
				<TouchableOpacity onPress={() => handleInteract("like")}>
					<Text
						style={[
							styles.actionText,
							status.LIKE ? styles.liked : styles.unliked,
						]}>
						<Icon
							name="heart-o"
							color={status.LIKE ? "#e1056e" : "black"}
						/>{" "}
						Like
					</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => handleInteract("comment")}>
					<Text style={styles.actionText}>
						<Icon name="comment-o" /> Comment
					</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => handleInteract("share")}>
					<Text style={styles.actionText}>
						<Icon name="share-square" /> Share
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create(
    {
        container: {
            padding: 10,
			backgroundColor: "#f8f8f8"
        },
        header: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
        },
        avatarContainer: {
            marginRight: 10,
        },
        avatar: {
            width: 50,
            height: 50,
            borderRadius: 25,

        },
        username: {
            fontWeight: 'bold',
            fontSize: 16,
        },
        title: {
            fontSize: 14,
            marginBottom: 10,
        },
        postImage: {
            width: '100%',
            height: 400,
            marginBottom: 10,
			borderRadius: 10,
        },
        interactContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
        },
        likes: {
            fontSize: 14,
        },
        comments: {
            fontSize: 14,
        },
        shares: {
            fontSize: 14,
            color: '#999',
        },
        divider: {
            height: 1,
            backgroundColor: '#ccc',
            marginVertical: 10,
        },
        actionsContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 2,
        },
        actionText: {
            fontSize: 16,
            display: 'flex',
            alignItems: 'center',
        },
        liked: {
            color: '#e1056e',
        },
        unliked: {
            color: 'black',
        },
    }
)
export default PostItem;