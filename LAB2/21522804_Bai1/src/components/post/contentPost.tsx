// Phạm Hoài Vũ - 21522804
// contentPost.tsx
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { PostContentProps } from "../../models/PostContent";

const PostContent: React.FC<PostContentProps> = ({ title, imgUrl }) => (
  <View>
    <Text style={styles.title}>{title}</Text>
    <Image source={{ uri: imgUrl }} style={styles.postImage} />
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    marginBottom: 10,
  },
  postImage: {
    width: "100%",
    height: 400,
    marginBottom: 10,
    borderRadius: 10,
  },
});

export default PostContent;
