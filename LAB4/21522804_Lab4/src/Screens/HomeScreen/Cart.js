// 21522804 Phạm Hoài Vũ
import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { DataContext } from "../../context/DataContext";
import { FlatList } from "react-native-gesture-handler";
import InCartProduct from "../../Components/InCartProduct";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Cart = () => {
  const navigation = useNavigation();
  const { cartList, allProducts, userInfo } = useContext(DataContext);
  const [shownProduct, setShownProduct] = useState([]);
  const [total, setTotal] = useState(0);

  const updateUserCartOnSever = () => {
    axios
      .put(`https://fakestoreapi.com/carts/${userInfo.id}`, {
        userId: userInfo.id,
        date: new Date().toDateString(),
        products: cartList,
      })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };

// 21522804 Phạm Hoài Vũ
const deleteUserCartOnSever = () => {
    axios
      .delete(`https://fakestoreapi.com/carts/${userInfo.id}`)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
    console.log("Cart deleted");
  };

  useEffect(() => {
    // Get id of product in cart
    const ids = cartList.map((product) => product.productId);

    // Get detail of products in cart
    const productsInCart = allProducts.filter((product) =>
      ids.includes(product.id)
    );
    setShownProduct(productsInCart);

    // Get total price
    setTotal(
      cartList.reduce((acc, product) => {
        const totalProductPrice =
          product.quantity *
          productsInCart.find((item) => item.id === product.productId).price;

        return acc + totalProductPrice;
      }, 0)
    );
  }, []);

// 21522804 Phạm Hoài Vũ
useEffect(() => {
    // Get id of product in cart
    const ids = cartList.map((product) => product.productId);
    // Get detail of products in cart
    const productsInCart = allProducts.filter((product) =>
      ids.includes(product.id)
    );
    setShownProduct(productsInCart);
    // Get total price
    setTotal(
      cartList.reduce((acc, product) => {
        const totalProductPrice =
          product.quantity *
          productsInCart.find((item) => item.id === product.productId).price;

        return acc + totalProductPrice;
      }, 0)
    );

    if (cartList.length > 0) {
      updateUserCartOnSever();
    } else {
      deleteUserCartOnSever();
    }
  }, [cartList]);

// 21522804 Phạm Hoài Vũ
return (
    <View style={[styles.container, styles.largeContainer]}>
      {cartList.length !== 0 ? (
        <View style={styles.container}>
          <FlatList
            style={styles.list}
            data={shownProduct}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <InCartProduct item={item} />}
          />
          <View style={styles.totalGroup}>
            <Text style={styles.totalText}>Total: ${total.toFixed(2)}</Text>
            <Button title="Check out" />
          </View>
        </View>
      ) : (
        <View>
          <Text style={styles.notification}>You haven't buy anything yet</Text>
          <Button
            title="Back to home"
            onPress={() => navigation.navigate("Home")}
          />
        </View>
      )}
    </View>
  );
};

export default Cart;

// 21522804 Phạm Hoài Vũ
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    paddingTop: 50,
    position: "relative",
    width: "100%",
  },
  largeContainer: {
    paddingTop: 0,
    flex: 1,
  },
  list: {
    marginBottom: 70,
    width: "100%",
    paddingHorizontal: 12,
  },
  totalGroup: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
  },
  totalText: {
    fontWeight: "bold",
    fontSize: 25,
  },
  notification: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 15,
  },
});
