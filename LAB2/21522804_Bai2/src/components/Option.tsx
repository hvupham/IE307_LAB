// Phạm Hoài Vũ -21522804
// Option.tsx
import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { themState } from "../../App";

type OptionProps = {
  theme: themState;
  onSetTheme: () => void;
  isNotifications: boolean;
  onSetIsNotifications: () => void;
};

const Option: React.FC<OptionProps> = ({ theme, onSetTheme, isNotifications, onSetIsNotifications }) => {
  return (
    <View style={styles.container}>
      <View style={styles.optionRow}>
        <Text style={[styles.optionText, { color: theme.TEXT_COLOR }]}>Dark Mode</Text>
        <Switch
          value={theme.STATE === "light" ? false : true}
          onValueChange={onSetTheme}
        />
      </View>
      <View style={styles.optionRow}>
        <Text style={[styles.optionText, { color: theme.TEXT_COLOR }]}>Notifications</Text>
        <Switch
          value={isNotifications}
          onValueChange={onSetIsNotifications}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 8,
    marginTop: 8,
  },
  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 4,
  },
  optionText: {
    fontSize: 18, // Thay thế cho text-lg
  },
});

export default Option;
