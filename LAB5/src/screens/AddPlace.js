// 21522804 Phạm Hoài Vũ
import {
  View,
  Text,
  Button,
  TextInput,
  Image,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import useStore from "../store";

const AddPlace = () => {
  const [title, setTitle] = useState(null);
  const [image, setImage] = useState(null);

  const chosenLocation = useStore((state) => state.chosenLocation);
  const setChosenLocation = useStore((state) => state.setChosenLocation);
  const addPlaces = useStore((state) => state.addPlaces);
  const places = useStore((state) => state.places);

  const navigation = useNavigation();

  const pickImage = async () => {
    let { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      return;
    }

    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    let { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      return;
    }

    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const getCurrentLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      return;
    }

    const { latitude, longitude } = (await Location.getCurrentPositionAsync({}))
      .coords;

    let address = await Location.reverseGeocodeAsync({
      latitude,
      longitude,
    });

    const { name, street, region, subregion, country } = address[0];

    setChosenLocation({
      coordinate: {
        latitude,
        longitude,
      },
      address: {
        name,
        street,
        region,
        country,
        subregion,
      },
    });
  };

  const handleSubmit = async () => {
    try {
      if (!title || !image || !chosenLocation) {
        Alert.alert("Error", "Please fill all required");
        return;
      }
      addPlaces({ title, image, ...chosenLocation });
      setChosenLocation(null);
      navigation.navigate("MainPlaces");

      let jsonValue;
      if (places.length) {
        jsonValue = JSON.stringify([
          ...places,
          { title, image, ...chosenLocation },
        ]);
      } else {
        jsonValue = JSON.stringify([{ title, image, ...chosenLocation }]);
      }
      await AsyncStorage.removeItem("places");
      await AsyncStorage.setItem("places", jsonValue);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ScrollView className="px-6">
      {/* Input title */}
      <View className="mt-4">
        <Text className="font-bold text-xl">Title</Text>
        <TextInput
          className="border-2 border-slate-300 mt-2 p-2 text-lg"
          placeholder="Title"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
      </View>

      {/* Pick image */}
      <View>
        <View className="w-full h-44 bg-gray-300 justify-center items-center mt-4">
          {image ? (
            <Image source={{ uri: image }} className="w-full h-full" />
          ) : (
            <Text>No image taken yet!</Text>
          )}
        </View>
        <View className="flex-row justify-between px-7 mt-4">
          <Pressable
            className="border-2 p-2 flex-row items-center justify-center"
            onPress={pickImage}
          >
            <Ionicons name="image" size={17} />
            <Text className="font-bold ml-1">Pick Image</Text>
          </Pressable>
          <Pressable
            className="border-2 p-2 flex-row items-center justify-center"
            onPress={takePhoto}
          >
            <Ionicons name="camera" size={17} />
            <Text className="font-bold ml-1">Take Photo</Text>
          </Pressable>
        </View>
      </View>

      {/* Pick location */}
      <View>
        <View className="w-full h-44 bg-gray-300 justify-center items-center mt-4">
          {chosenLocation ? (
            <MapView
              provider={PROVIDER_GOOGLE}
              region={{
                latitude: chosenLocation.coordinate.latitude,
                longitude: chosenLocation.coordinate.longitude,
                latitudeDelta: 0,
                longitudeDelta: 0,
              }}
              className="w-full h-full"
            />
          ) : (
            <Text>No location chosen yet!</Text>
          )}
        </View>

        {/* Option */}
        <View className="flex-row justify-between px-5 mt-4">
          {/* Get current location button */}
          <Pressable
            className="border-2 border- p-2 flex-row items-center justify-center"
            onPress={getCurrentLocation}
          >
            <Ionicons name="location" size={17} />
            <Text className="font-bold ml-1">Pick location</Text>
          </Pressable>

          {/* 21522804 Phạm Hoài Vũ */}
          {/* Pick on map button */}
          <Pressable
            className="border-2 p-2 flex-row items-center justify-center"
            onPress={() => navigation.navigate("PickOnMap")}
          >
            <Ionicons name="map" size={17} />
            <Text className="font-bold ml-1">Pick on map</Text>
          </Pressable>
        </View>
      </View>

      {/* Submit button */}
      <View className="my-6">
        <Button title="Add place" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

export default AddPlace;
