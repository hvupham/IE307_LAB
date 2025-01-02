// 21522804 Phạm Hoài Vũ
import MapView, { Marker } from "react-native-maps";
import { useRoute } from "@react-navigation/native";

const ViewOnMap = () => {
  const route = useRoute();
  const { coordinate, address } = route.params;

  return (
    <MapView
      className="flex-1"
      region={{
        latitude: coordinate.latitude,
        longitude: coordinate.longitude,
        latitudeDelta: 0,
        longitudeDelta: 0,
      }}
    >
      <Marker
        coordinate={coordinate}
        title={`${address.name}, ${address.street}, ${address.region}`}
      />
    </MapView>
  );
};

export default ViewOnMap;
