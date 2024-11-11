import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from "react-native";

export const HomeDrawer = () => {
  const navigation = useNavigation();

  const handleGoToDetail = () => {
    navigation.navigate("HomeDetailScreen");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.text}>Home</Text>
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