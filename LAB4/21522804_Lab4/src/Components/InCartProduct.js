// 21522804 Phạm Hoài Vũ

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { DataContext } from "../context/DataContext";

const InCartProduct = ({ item }) => {
  const navigation = useNavigation();
  const { cartList, setCartList } = useContext(DataContext);
  const [itemQuantity, setItemQuantity] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  // 21522804 Phạm Hoài Vũ

  const updateCartList = () => {
    // Update quantity in cart
    const index = cartList.findIndex(
      (product) => product.productId === item.id
    );
    const newCartList = [...cartList];
    newCartList[index].quantity = itemQuantity;
    setCartList(newCartList);
  };

  const handleIncrease = () => {
    setItemQuantity(itemQuantity + 1);
  };

  const handleDecrease = () => {
    if (itemQuantity > 1) {
      setItemQuantity(itemQuantity - 1);
    } else {
      setModalVisible(true);
    }
  };

  const handleDelete = () => {
    const newCart = [...cartList];
    setCartList(newCart.filter((product) => product.productId !== item.id));
    setModalVisible(false);
  };

  // 21522804 Phạm Hoài Vũ

  useEffect(() => {
    setItemQuantity(
      cartList.find((product) => product.productId === item.id).quantity
    );
  }, []);

  useEffect(() => {
    updateCartList();
  }, [itemQuantity]);

  // 21522804 Phạm Hoài Vũ

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
          <View style={styles.largeRow}>
            <TouchableOpacity
              style={styles.quantityText}
              onPress={handleDecrease}
            >
              <Ionicons
                name="remove"
                color={styles.quantityText.color}
                size={26}
              />
            </TouchableOpacity>
            {/* 21522804 Phạm Hoài Vũ
 */}
            <Text style={styles.quantityText}>{itemQuantity}</Text>
            <TouchableOpacity
              style={styles.quantityText}
              onPress={handleIncrease}
            >
              <Ionicons
                name="add"
                color={styles.quantityText.color}
                size={26}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.total}>
              Total: ${itemQuantity * item.price}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={[styles.quantityText, styles.deleteBtn]}
        onPress={() => setModalVisible(true)}
      >
        <Ionicons name="close" color={styles.deleteBtn.color} size={26} />
      </TouchableOpacity>
      {/* Modal */}
      {/* 21522804 Phạm Hoài Vũ
 */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Are you sure to delete this product?
            </Text>
            <View style={styles.row}>
              <Pressable
                style={[styles.button, styles.buttonClose, styles.delete]}
                onPress={handleDelete}
              >
                <Text style={styles.textStyle}>Delete</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

export default InCartProduct;

const styles = StyleSheet.create({
  product: {
    flex: 1,
    flexDirection: "row",
    height: 150,
    width: "100%",
    marginTop: 15,
    padding: 8,
    paddingRight: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "grey",
    position: "relative",
  },
  productInfo: {
    flex: 4,
    paddingBottom: 5,
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  productImg: {
    flex: 2,
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
  largeRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityText: {
    fontSize: 18,
    color: "#000",
    marginRight: 10,
  },
  total: {
    fontWeight: "bold",
    fontSize: 20,
  },
  deleteBtn: {
    color: "red",
    justifyContent: "center",
  }, // Modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "rgba(255, 255, 255,0.7)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  row: {
    flexDirection: "row",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
  },
  delete: {
    backgroundColor: "#e62020",
    marginRight: 15,
  },
});
