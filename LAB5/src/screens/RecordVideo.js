import { View, Text, Pressable } from "react-native";
import { useEffect, useRef, useState } from "react";
import { Camera, CameraType } from "expo-camera";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Video } from "expo-av";
import * as MediaLibrary from "expo-media-library";

const RecordVideo = () => {
  const cameraRef = useRef();

  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMicrophonePermission, setHasMicrophonePermission] = useState();
  const [isRecording, setIsRecording] = useState(false);
  const [video, setVideo] = useState();

  const startRecord = async () => {
    setIsRecording(true);

    cameraRef.current.recordAsync().then((recordedVideo) => {
      setVideo(recordedVideo);
      setIsRecording(false);
    });
  };

  const stopRecord = () => {
    setIsRecording(false);
    cameraRef.current.stopRecording();
  };

  const saveVideo = (async) => {
    MediaLibrary.saveToLibraryAsync(video.uri).then(() => setVideo(null));
  };

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonePermission =
        await Camera.requestMicrophonePermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMicrophonePermission(microphonePermission.status === "granted");
    })();
  }, []);

  if (!hasCameraPermission || !hasMicrophonePermission) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="font-bold text-xl">Requesting permissions...</Text>
      </View>
    );
  }

  if (video) {
    return (
      <View className="flex-1">
        <Video
          source={{ uri: video.uri }}
          useNativeControls
          className="w-full h-5/6"
        />

        <View className="flex-row items-center justify-center mt-6">
          <Pressable
            className="bg-red-500 rounded-lg p-3"
            onPress={() => setVideo(null)}
          >
            <Text className="text-[#fff] font-bold">Re-record</Text>
          </Pressable>
          <Pressable
            className="bg-blue-400 rounded-lg py-3 px-6 ml-4"
            onPress={saveVideo}
          >
            <Text className="text-[#fff] font-bold">Save</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  // 21522804 Phạm Hoài Vũ
  return (
    <Camera
      type={CameraType.back}
      className="flex-1 items-center justify-end"
      ref={cameraRef}
    >
      <Pressable
        className="justify-center items-center rounded-full bg-red-500 w-12 h-12 mb-10"
        onPress={!isRecording ? startRecord : stopRecord}
      >
        <Ionicons
          name={!isRecording ? "videocam" : "square"}
          size={27}
          color={"white"}
        />
      </Pressable>
    </Camera>
  );
};

export default RecordVideo;
