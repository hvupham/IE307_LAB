// Phạm Hoài Vũ - 21522804
// PostItem.tsx
import React from "react";
import { View, StyleSheet } from "react-native";
import PostHeader from "./headerPost";
import PostContent from "./contentPost";
import PostInteractions from "./bottomPost";
import PostActions from "./actionPost";

import { PostItemProps } from "../../models/PostItemProps";
import { status as StatusType } from "../../models/status";
import { interactProps } from "../../models/interactProps";

const PostItem: React.FC<PostItemProps> = ({ username, title, imgUrl, likes, comments, shares }) => {
  const [status, setStatus] = React.useState<StatusType>({ LIKE: false });
  const [interact, setInteract] = React.useState<interactProps>({ like: likes, comment: comments, share: shares });

  const handleInteract = (nameText: string) => {
    if (nameText === "like") {
      setStatus((preState) => ({ ...preState, LIKE: !preState.LIKE }));
      setInteract((preState) => ({
        ...preState,
        like: status.LIKE ? preState.like - 1 : preState.like + 1,
      }));
    }
    if (nameText === "comment") setInteract((preState) => ({ ...preState, comment: preState.comment + 1 }));
    if (nameText === "share") setInteract((preState) => ({ ...preState, share: preState.share + 1 }));
  };

  return (
    <View style={styles.container}>
      <PostHeader username={username} />
      <PostContent title={title} imgUrl={imgUrl} />
      <PostInteractions like={interact.like} comment={interact.comment} share={interact.share} />
      <View style={styles.divider} />
      <PostActions status={status} handleInteract={handleInteract} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#f8f8f8",
  },
  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 10,
  },
});

export default PostItem;
