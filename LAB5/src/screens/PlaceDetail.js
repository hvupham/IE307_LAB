// 21522804 Phạm Hoài Vũ
import { View, Text, Image, Pressable } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

const PlaceDetail = () => {
  const route = useRoute();
  const { image, address, coordinate } = route.params;

  const navigation = useNavigation();

  return (
    <View className="flex-1 p-2">
      <Image source={{ uri: image }} className="w-full h-2/3 rounded-lg mt-6" />
      <View className="justify-center items-center mt-5">
        <Text className="text-xl text-center font-bold">{`${address.name}, ${address.street}, ${address.region}, ${address.country}`}</Text>
        <Pressable
          className="mt-3 border-2 p-2 flex-row items-center justify-center rounded-lg"
          onPress={() =>
            navigation.navigate("ViewOnMap", {
              coordinate: coordinate,
              address: address,
            })
          }
        >
          <Ionicons name="map" size={17} />
          <Text className="font-bold ml-1">View on map</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default PlaceDetail;
