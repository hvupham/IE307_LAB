// 21522732 Lê Quang Trường
import { StyleSheet, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import axios from "axios";
import { ActivityIndicator } from "react-native";
import Category from "../../Components/Category";
import { DataContext } from "../../Components/DataContext";
import Product from "../../Components/Product";

const Categories = () => {
  const { activeCategory, allProducts } = useContext(DataContext);
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [jeweleryProducts, setJeweleryProducts] = useState([]);
  const [electronicsProducts, setElectronicsProducts] = useState([]);
  const [menProducts, setMenProducts] = useState([]);
  const [womenProducts, setWomenProducts] = useState([]);
  const [currentProducts, setCurrentProducts] = useState([]);

  const categoriesIcon = {
    all: "https://cdn.icon-icons.com/icons2/2941/PNG/512/category_icon_183800.png",
    electronics:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTry1vwjhGFtxuSOmmL8LZm8p2UfQw-jOCsQ&usqp=CAU",
    jewelery: "https://cdn-icons-png.flaticon.com/512/2237/2237677.png",
    "men's clothing": "https://static.thenounproject.com/png/860317-200.png",
    "women's clothing":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROVxXazviFEKTNVPtOEQ1Z-vWJt7p2hybmtA&usqp=CAU",
  };

  // 21522732 Lê Quang Trường
  const getCategories = () => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        const data = ["all", ...response.data];
        const categoriesArr = data.map((category) => {
          return {
            title: category,
            image: categoriesIcon[`${category}`],
          };
        });
        setCategories(categoriesArr);

        console.log("Get categories");
      })
      .catch((err) => console.log(err));
  };

  // 21522732 Lê Quang Trường
  const getElectronicProducts = () => {
    axios
      .get("https://fakestoreapi.com/products/category/electronics")
      .then((response) => {
        setElectronicsProducts(response.data);
        console.log("Get electronronics products");
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getJeweleryProducts = () => {
    axios
      .get("https://fakestoreapi.com/products/category/jewelery")
      .then((response) => {
        setJeweleryProducts(response.data);
        console.log("Get jewelery products");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 21522732 Lê Quang Trường
  const getMenProducts = () => {
    axios
      .get("https://fakestoreapi.com/products/category/men's clothing")
      .then((response) => {
        setMenProducts(response.data);
        console.log("Get men's clothing products");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getWomenProducts = () => {
    axios
      .get("https://fakestoreapi.com/products/category/women's clothing")
      .then((response) => {
        setWomenProducts(response.data);
        console.log("Get women's clothing products");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 21522732 Lê Quang Trường
  const loadCurrentProducts = () => {
    switch (activeCategory) {
      case "electronics":
        setCurrentProducts(electronicsProducts);
        break;
      case "jewelery":
        setCurrentProducts(jeweleryProducts);
        break;
      case "men's clothing":
        setCurrentProducts(menProducts);
        break;
      case "women's clothing":
        setCurrentProducts(womenProducts);
        break;
      default:
        setCurrentProducts(allProducts);
        break;
    }
    console.log(`Load ${activeCategory} products`);
  };

  useEffect(() => {
    getCategories();
    getElectronicProducts();
    getJeweleryProducts();
    getMenProducts();
    getWomenProducts();
  }, []);

  // 21522732 Lê Quang Trường
  useEffect(() => {
    loadCurrentProducts();
  }, [activeCategory]);

  return (
    <View style={styles.container}>
      {!isLoading ? (
        <View>
          <FlatList
            style={styles.categoriesList}
            data={categories}
            horizontal
            renderItem={({ item }) => <Category item={item} />}
            keyExtractor={(item) => item.title}
          />
          <FlatList
            data={currentProducts}
            renderItem={({ item }) => <Product item={item} />}
            keyExtractor={(item) => item.id}
            numColumns={2}
          />
        </View>
      ) : (
        <ActivityIndicator size={"large"} style={styles.centerContainer} />
      )}
    </View>
  );
};

// 21522732 Lê Quang Trường
export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    paddingTop: 50,
    paddingBottom: 110,
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  categoriesList: {
    height: 90,
    marginBottom: 10,
  },
});
