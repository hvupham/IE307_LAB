// PostActions.tsx
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

interface PostActionsProps {
  status: { LIKE: boolean };
  handleInteract: (nameText: string) => void;
}

const PostActions: React.FC<PostActionsProps> = ({ status, handleInteract }) => (
  <View style={styles.actionsContainer}>
    <TouchableOpacity onPress={() => handleInteract("like")}>
      <Text style={[styles.actionText, status.LIKE ? styles.liked : styles.unliked]}>
        <Icon name="heart-o" color={status.LIKE ? "#e1056e" : "black"} /> Like
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
);

const styles = StyleSheet.create({
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 2,
  },
  actionText: {
    fontSize: 16,
    display: "flex",
    alignItems: "center",
  },
  liked: {
    color: "#e1056e",
  },
  unliked: {
    color: "black",
  },
});

export default PostActions;
