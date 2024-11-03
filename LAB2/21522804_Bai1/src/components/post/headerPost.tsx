// PostHeader.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Avatar from "../user/avatar";

interface PostHeaderProps {
  username: string;
}

const PostHeader: React.FC<PostHeaderProps> = ({ username }) => (
  <View style={styles.header}>
    <Avatar uri="https://i.pinimg.com/474x/a9/b8/43/a9b843b45b13d393a22eca1b9f7fba1a.jpg" />
    <Text style={styles.username}>{username}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default PostHeader;
