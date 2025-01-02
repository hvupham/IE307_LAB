import { View, Pressable } from "react-native";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import Ionicons from "@expo/vector-icons/Ionicons";

import useStore from "../store";

const PickOnMap = ({ navigation }) => {
  const [markerInfo, setMarkerInfo] = useState(null);

  const chosenLocation = useStore((state) => state.chosenLocation);
  const setChosenLocation = useStore((state) => state.setChosenLocation);

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      return;
    }

    let currentLocation = await Location.getCurrentPositionAsync({});
    setChosenLocation({
      coordinate: {
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      },
    });
  };

  const handleMapPress = async (e) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;

    let response = await Location.reverseGeocodeAsync({
      latitude,
      longitude,
    });

    const { name, street, region, country } = response[0];

    setMarkerInfo({
      address: { name, street, region, country },
      coordinate: { latitude, longitude },
    });
  };

  const handleSaveButtonPress = () => {
    setChosenLocation({ ...markerInfo });
    navigation.navigate("AddPlace");
  };

  // If there is no location set, get current location
  useEffect(() => {
    if (!chosenLocation) {
      getCurrentLocation();
    }
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable className="mr-5" onPress={handleSaveButtonPress}>
          <Ionicons name="save" size={28} />
        </Pressable>
      ),
    });
  }, [navigation, markerInfo]);

  // 21522804 Phạm Hoài Vũ
  return (
    <View>
      {chosenLocation && (
        <MapView
          provider={PROVIDER_GOOGLE}
          className="w-full h-full"
          region={{
            latitude: chosenLocation.coordinate.latitude,
            longitude: chosenLocation.coordinate.longitude,
            latitudeDelta: 0,
            longitudeDelta: 0,
          }}
          onPress={handleMapPress}
          onPoiClick={handleMapPress}
        >
          {markerInfo && (
            <Marker
              draggable
              coordinate={markerInfo.coordinate}
              title={`${markerInfo.address.name}, ${markerInfo.address.street}, ${markerInfo.address.region}`}
            />
          )}
        </MapView>
      )}
    </View>
  );
};

export default PickOnMap;
