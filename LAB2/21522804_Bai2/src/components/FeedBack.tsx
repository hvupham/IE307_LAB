// FeedBack.tsx
import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { themState } from "../../App";

type FeedbackProps = {
  theme: themState;
  isNotifications: boolean;
  onSetFeadbackList: (feedbackItem: string) => void;
};

const FeedBack: React.FC<FeedbackProps> = ({ theme, isNotifications, onSetFeadbackList }) => {
  const [text, setText] = useState<string>("");

  const createNotificationAlert = () => {
    Alert.alert("Thank you for your feedback!", "", [{ text: "Ok" }]);
  };

  return (
    <View
      style={styles.container}
      onTouchStart={() => Keyboard.dismiss()}
    >
      <Text style={[styles.heading, { color: theme.TEXT_COLOR }]}>Feedback</Text>
      <View style={[styles.inputContainer, { borderColor: theme.STATE === "light" ? "#ccc" : "#444" }]}>
        <TextInput
          multiline={true}
          placeholder="Your feedback here..."
          style={[styles.textInput, { color: theme.TEXT_COLOR }]}
          placeholderTextColor={theme.STATE === "light" ? "#ccc" : "#fff"}
          keyboardType="default"
          onChangeText={(text) => setText(text)}
          autoFocus={false}
          value={text}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          if (text.trim()) {
            onSetFeadbackList(text);
            setText("");
            if (isNotifications) createNotificationAlert();
          }
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>SEND FEEDBACK</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 16,
  },
  heading: {
    fontSize: 20, // tương đương text-xl
    fontWeight: "bold",
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    height: 144,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "#1E90FF", // blue-500
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default FeedBack;
