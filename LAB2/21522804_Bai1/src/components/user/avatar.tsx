// Phạm Hoài Vũ - 21522804
// avatar.tsx
import React from "react";
import { Image, View, StyleSheet } from "react-native";

interface AvatarProps {
  uri: string;
}

const Avatar: React.FC<AvatarProps> = ({ uri }) => (
  <View style={styles.avatarContainer}>
    <Image source={{ uri }} style={styles.avatar} />
  </View>
);

const styles = StyleSheet.create({
  avatarContainer: {
    marginRight: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default Avatar;