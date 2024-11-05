// Phạm Hoài Vũ - 21522804
// bottomPost.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface PostInteractionsProps {
  like: number;
  comment: number;
  share: number;
}

const PostInteractions: React.FC<PostInteractionsProps> = ({ like, comment, share }) => (
  <View style={styles.interactContainer}>
    <Text style={styles.likes}>{like} Likes</Text>
    <Text style={styles.comments}>{comment} Comments</Text>
    <Text style={styles.shares}>{share} Shares</Text>
  </View>
);

const styles = StyleSheet.create({
  interactContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    color: "#999",
  },
});

export default PostInteractions;
