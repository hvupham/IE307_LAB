import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from "react-native";

export const NotificationDrawer: React.FC = () => {
  const navigation = useNavigation();

  const handleGoToDetail = () => {
    navigation.navigate("NotificationDetailScreen");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.text}>Notification</Text>
        <TouchableOpacity style={styles.button} onPress={handleGoToDetail}>
          <Text style={styles.buttonText}>GO TO DETAIL</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#3b82f6",
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});