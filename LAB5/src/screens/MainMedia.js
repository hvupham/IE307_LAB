import { View, FlatList, Image, Pressable } from "react-native";
import { useState, useEffect } from "react";
import * as MediaLibrary from "expo-media-library";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

const MainMedia = () => {
  const navigation = useNavigation();
  const [album, setAlbum] = useState();
  useEffect(() => {
    (async () => {
      let { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== "granted") {
        return;
      }
      const albumName = "Camera";
      const getPhotos = await MediaLibrary.getAlbumAsync(albumName);
      const getAllPhotos = await MediaLibrary.getAssetsAsync({
        first: 20,
        album: getPhotos,
        sortBy: ["creationTime"],
        mediaType: ["photo"],
      });

      const uriList = getAllPhotos.assets.map((photo) => {
        return { uri: photo.uri, id: photo.id };
      });

      setAlbum(uriList);
    })();
  }, []);

  // 21522804 Phạm Hoài Vũ
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          className="mr-5"
          onPress={() => navigation.navigate("RecordVideo")}
        >
          <Ionicons name="videocam" size={28} color={"red"} />
        </Pressable>
      ),
    });
  }, [navigation]);

  return (
    <View className="flex-1">
      <FlatList
        className="my-2"
        data={album}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.uri }}
            className="w-full flex-1 h-52 m-1 rounded-lg"
          />
        )}
      />
    </View>
  );
};

export default MainMedia;
