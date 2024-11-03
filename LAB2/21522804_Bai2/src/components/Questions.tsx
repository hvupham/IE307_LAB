// QA.tsx
import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { themState } from "../../App";

type QaProps = {
  theme: themState;
  feedbackList: string[];
};

const Item: React.FC<{ item: string; textColor: string }> = ({ item, textColor }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={[styles.itemText, { color: textColor }]}>Q: {item}</Text>
    </View>
  );
};

const Questions: React.FC<QaProps> = ({ theme, feedbackList }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.header, { color: theme.TEXT_COLOR }]}>
        Frequently Asked Questions
      </Text>
      <FlatList
        data={feedbackList}
        renderItem={({ item }) => <Item item={item} textColor={theme.TEXT_COLOR} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  header: {
    fontSize: 20, // Thay cho text-xl
    fontWeight: "bold",
    marginBottom: 8,
  },
  itemContainer: {
    marginVertical: 4,
  },
  itemText: {
    fontSize: 16,
  },
});

export default Questions;
