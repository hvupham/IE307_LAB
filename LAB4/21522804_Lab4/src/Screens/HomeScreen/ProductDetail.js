// 21522732 Lê Quang Trường
import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ProductDetail = () => {
  const route = useRoute();
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.productImg} />
      <ScrollView style={styles.productInfo}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productDesc}>{item.description}</Text>
        <Text style={styles.productPrice}>Price: ${item.price}</Text>
        <View style={styles.ratingGroup}>
          <Text style={styles.ratingText}>Rating: {item.rating.rate}</Text>
          <Ionicons
            name="star"
            color={styles.star.color}
            size={styles.star.size}
          />
          <Text style={styles.ratingText}>({item.rating.count} reviews)</Text>
        </View>
      </ScrollView>
    </View>
  );
};

// 21522732 Lê Quang Trường
export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  productInfo: {
    flex: 1,
    paddingTop: 9,
    paddingBottom: 5,
    paddingHorizontal: 10,
  },
  productImg: {
    width: "100%",
    height: "60%",
  },
  productTitle: {
    fontSize: 23,
    fontWeight: "bold",
  },
  productDesc: {
    marginTop: 7,
    fontSize: 22,
  },
  productPrice: {
    marginTop: 7,
    fontWeight: "bold",
    fontSize: 22,
    color: "#b00000",
  },
  ratingGroup: {
    marginTop: 7,
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 20,
  },
  ratingText: {
    fontWeight: "bold",
    fontSize: 22,
    marginRight: 7,
  },
  star: {
    size: 20,
    color: "yellow",
  },
});
