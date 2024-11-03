// Phạm Hoài Vũ - 21522804
import React, { useState, useEffect } from "react";
import {
  SectionList,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground
} from "react-native";
import { fruits_vegetables } from "../Data/Data";
import { Fruit } from "../models/Fruit";
import { StyleComponent } from "../../styles/StyleComponent";
const FruitComponent: React.FC<Fruit> = ({
  onSelect,
}) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  useEffect(() => {
    onSelect(selectedItems);
  }, [selectedItems]);

  const toggleItem = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((selected) => selected !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const renderSectionHeader = ({
    section,
  }: {
    section: { title: string; url: string };
  }) => (
    <View style={StyleComponent.header}>
      <Image source={{ uri: section.url }} style={StyleComponent.headerImage} />
      <Text style={StyleComponent.headerTitle}>{section.title}</Text>
    </View>
  );
  const renderItem = ({ item }: { item: string }) => {
    const isSelected = selectedItems.includes(item);
    return (
      <View style={[StyleComponent.item, isSelected && StyleComponent.selectedItem]}>
        <Text style={StyleComponent.textworkout}>{item}</Text>
        <TouchableOpacity onPress={() => toggleItem(item)} style={StyleComponent.btn}>
          <Text style={StyleComponent.selectedText}>
            {isSelected ? "DESELECT" : "SELECT"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={StyleComponent.container}>
      <Text style={StyleComponent.title}>SectionList - Fruits & Vegetables</Text>
      <ImageBackground
			source={require("../../assets/bg2.jpg")}
			style = {{width: "100%"}}>
        <SectionList
        style={{ width: "100%" }}
        sections={fruits_vegetables}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item, index) => item + index}
        stickySectionHeadersEnabled={true} 
      />
      </ImageBackground>
    </View>
  );
};
export default FruitComponent;
