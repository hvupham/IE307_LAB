// Phạm Hoài Vũ - 21522804
import React, { useState, useEffect } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  ImageBackground
} from "react-native";
import { workouts } from "../Data/Data";
import { Workout } from "../models/Workout";
import { StyleComponent } from "../../styles/StyleComponent";

const WorkoutsComponent: React.FC<Workout> = ({ onSelect }) => {
  const [selectedWorkouts, setSelectedWorkouts] = useState<string[]>([]);

  useEffect(() => {
    onSelect(selectedWorkouts);
  }, 
  [selectedWorkouts]);

  const toggleWorkout = (type: string) => {
    if (selectedWorkouts.includes(type)) {
      setSelectedWorkouts(selectedWorkouts.filter((item) => item !== type));
    } else {
      setSelectedWorkouts([...selectedWorkouts, type]);
    }
  };

  const renderItem = ({ item }: { item: { id: string; type: string } }) => {
    const isSelected = selectedWorkouts.includes(item.type);
    return (
      <View style={[StyleComponent.item, isSelected && StyleComponent.selectedItem]}>
        <Text style={StyleComponent.textworkout}>{item.type}</Text>
        <TouchableOpacity
          onPress={() => toggleWorkout(item.type)}
          style={StyleComponent.btn}
        >
          <Text style={StyleComponent.selectedText}>
            {isSelected ?  "DESELECT" : "SELECT" }
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={StyleComponent.container}>
      <Text style={StyleComponent.title}>FlastList - Workouts</Text>
		<ImageBackground
			source={require("../../assets/bg1.jpg")}
			style = {{width: "100%"}}
			>
			<FlatList
				style={{ width: "100%" }}
				data={workouts}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
			/>
		</ImageBackground>
      
    </View>
  );
};
export default WorkoutsComponent;
