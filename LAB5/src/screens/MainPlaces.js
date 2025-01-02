// 21522804 Phạm Hoài Vũ
import { View, Text, FlatList, Image, Pressable } from "react-native";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import useStore from "../store";

const MainPlaces = () => {
  const navigation = useNavigation();

  const places = useStore((state) => state.places);
  const setPlaces = useStore((state) => state.setPlaces);

  useEffect(() => {
    places.forEach((place) => place);
  }, [places]);

  useEffect(() => {
    if (places) {
      (async () => {
        try {
          const jsonValue = await AsyncStorage.getItem("places");
          const result = jsonValue != null ? JSON.parse(jsonValue) : null;
          console.log(jsonValue);
          setPlaces(result);
        } catch (err) {
          console.log(err);
        }
      })();
    }
  }, []);

  // 21522804 Phạm Hoài Vũ
  return (
    <View className="flex-1 items-center justify-center p-4 bg-gray-200">
      {places.length ? (
        <FlatList
          data={places}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => (
            <Pressable
              className="flex-row items-center w-full bg-[#fff] mt-3"
              onPress={() =>
                navigation.navigate("PlaceDetailStack", { item: item })
              }
            >
              <Image source={{ uri: item.image }} className="w-28 h-28" />
              <View className="w-full px-4">
                <Text className="font-bold text-lg">{item.title}</Text>
                <Text className="w-44">{`${item.address.name}, ${
                  item.address.street
                }, ${
                  item.address.region
                    ? item.address.region
                    : item.address.subregion
                }, ${item.address.country}`}</Text>
              </View>
            </Pressable>
          )}
        />
      ) : (
        <Text>No places added</Text>
      )}
    </View>
  );
};

export default MainPlaces;
