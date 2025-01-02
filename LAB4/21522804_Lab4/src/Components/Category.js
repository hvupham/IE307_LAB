// 21522732 Lê Quang Trường
import { StyleSheet, Text, View, Image } from "react-native";
import { useContext } from "react";
import { DataContext } from "./DataContext";
import { Pressable } from "react-native";

const Category = ({ item }) => {
  const { activeCategory, setActiveCategory } = useContext(DataContext);

  return (
    <Pressable onPress={() => setActiveCategory(item.title)}>
      <View style={styles.category}>
        <Image style={styles.categoryImg} source={{ uri: item.image }} />
        <Text
          style={
            item.title !== activeCategory
              ? styles.categoryTitle
              : [styles.categoryTitle, styles.active]
          }
        >
          {item.title}
        </Text>
      </View>
    </Pressable>
  );
};

// 21522732 Lê Quang Trường
export default Category;

const styles = StyleSheet.create({
  category: {
    marginHorizontal: 13,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryTitle: {
    fontSize: 17,
  },
  categoryImg: {
    width: 55,
    height: 55,
  },
  active: {
    color: "#008dd2",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
});
