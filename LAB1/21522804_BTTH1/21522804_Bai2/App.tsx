// Phạm Hoài Vũ - 21522804
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import WorkoutsComponent from "./src/components/workout";
import FruitComponent from "./src/components/Fruit";
import Header from "./src/components/shared/Header";
const App = () => {
  const [selectedWorkouts, setSelectedWorkouts] = useState<string[]>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleWorkoutSelection = (selected: string[]) => {
    setSelectedWorkouts(selected);
  };

  const handleItemSelection = (selected: string[]) => {
    setSelectedItems(selected);
  };

  return (
    <SafeAreaView style={styles.container}>
    {/* <Header></Header> */}
      <View style={styles.containerWorkoutsComponent}>
        <WorkoutsComponent onSelect={handleWorkoutSelection} />
      </View>
      <View style={styles.containerFruitComponent}>
        <FruitComponent onSelect={handleItemSelection} />
      </View>
      <View style={styles.selectedContainer}>
        <Text style={styles.selectedText}>SELECTED EXERCISES:</Text>
        <Text style={{ fontSize: 16, alignContent: "center" }}>
          {selectedWorkouts.join(", ") + " " + selectedItems.join(", ")}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  containerWorkoutsComponent: {
    height: "43%",
    paddingHorizontal: 10,
  },
  containerFruitComponent: {
    height: "43%",
    paddingHorizontal: 10,
  },
  selectedContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
});

export default App;
