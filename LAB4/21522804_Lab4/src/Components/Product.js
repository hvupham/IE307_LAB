// 21522732 Lê Quang Trường
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { DataContext } from "./DataContext";
import { Alert } from "react-native";

const Product = ({ item }) => {
  const navigation = useNavigation();
  const { cartList, setCartList } = useContext(DataContext);

  const handlePress = () => {
    const productIsInCart = cartList.find(
      (product) => product.productId === item.id
    );
    if (!productIsInCart) {
      setCartList([...cartList, { productId: item.id, quantity: 1 }]);
      Alert.alert("Success", "Product added in cart");
    } else {
      Alert.alert("Action not available", "Product already in cart");
    }
  };

  return (
    <TouchableOpacity
      style={styles.product}
      onPress={() => navigation.navigate("ProductDetail", { item })}
    >
      <Image source={{ uri: item.image }} style={styles.productImg} />
      <View style={styles.productInfo}>
        <Text style={styles.productTitle} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.productPrice}>${item.price}</Text>
        <View style={styles.row}>
          <View style={styles.ratingGroup}>
            <Text style={styles.ratingText}>{item.rating.rate}</Text>
            <Ionicons
              name="star"
              color={styles.star.color}
              size={styles.star.size}
            />
            <Text style={styles.ratingText}>({item.rating.count})</Text>
          </View>
          <TouchableOpacity style={styles.addBtn} onPress={handlePress}>
            <Ionicons
              name="add"
              color={styles.addBtn.color}
              size={styles.addBtn.size}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Product;

// 21522732 Lê Quang Trường
const styles = StyleSheet.create({
  product: {
    flex: 1,
    height: 350,
    marginTop: 15,
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "grey",
    padding: 2,
  },
  productInfo: {
    flex: 1,
    paddingTop: 9,
    paddingBottom: 5,
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  productImg: {
    width: "100%",
    height: "65%",
  },
  productTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

  productPrice: {
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 18,
    color: "#b00000",
  },
  // 21522732 Lê Quang Trường
  row: {
    marginTop: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ratingGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 15,
    marginRight: 7,
  },
  star: {
    size: 20,
    color: "yellow",
  },
  addBtn: {
    size: 26,
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: "#008dd2",
  },
});
