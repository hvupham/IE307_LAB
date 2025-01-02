// 21522732 Lê Quang Trường
import { decode } from "base-64";
global.atob = decode;
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [token, setToken] = useState("");
  const [isUpdateButtonPressed, setIsUpdateButtonPressed] = useState(false);
  const [activeCategory, setActiveCategory] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [homeLoading, setHomeLoading] = useState(true);

  // 21522732 Lê Quang Trường
  const getUserInfo = () => {
    const id = jwtDecode(token).sub;
    axios
      .get(`https://fakestoreapi.com/users/${id}`)
      .then((response) => {
        setUserInfo(response.data);
        console.log("Get user info successfully");
      })
      .catch((err) => {
        console.log(err);
      });
    getUserCart(id);
  };

  const getUserCart = (id) => {
    axios
      .get(`https://fakestoreapi.com/carts/${id}`)
      .then((response) => {
        setCartList(response.data.products);
        console.log(response.data.products);
      })
      .catch((err) => console.log(err));
  };

  // 21522732 Lê Quang Trường
  const getAllProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setAllProducts(response.data);
        console.log("Get all products");
        setActiveCategory("all");
        setHomeLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (token) {
      getUserInfo();
      getAllProducts();
    }
  }, [token]);

  // 21522732 Lê Quang Trường
  return (
    <DataContext.Provider
      value={{
        userInfo,
        setUserInfo,
        token,
        setToken,
        isUpdateButtonPressed,
        setIsUpdateButtonPressed,
        activeCategory,
        setActiveCategory,
        cartList,
        setCartList,
        allProducts,
        homeLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
