// Phạm Hoài Vũ -21522804
// App.tsx
import React from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import HeaderViewer from "./src/components/HeaderViewer";
import Option from "./src/components/Option";
import FeedBack from "./src/components/FeedBack";
import Questions from "./src/components/Questions";

export type themState = {
  STATE: string;
  BACKGROUND_COLOR: string;
  TEXT_COLOR: string;
};

const light = {
  STATE: "light",
  BACKGROUND_COLOR: "#ffffff",
  TEXT_COLOR: "#000000",
};

const dark = {
  STATE: "dark",
  BACKGROUND_COLOR: "#000000",
  TEXT_COLOR: "#ffffff",
};

export default function App() {
  const [theme, setTheme] = React.useState<themState>(light);
  const [isNotifications, setIsNotifications] = React.useState<boolean>(false);
  const [feedbackList, setFeedbackList] = React.useState<string[]>([]);

  const handleTheme = () => {
    setTheme((preState) => (preState.STATE !== "light" ? light : dark));
  };

  const handleSetIsNotifications = () => {
    setIsNotifications((preState) => !preState);
  };

  const handleSetFeedbackList = (feedbackItem: string) => {
    setFeedbackList((preState) => [...preState, feedbackItem]);
  };

  return (
    <SafeAreaView style={[styles.flex, { backgroundColor: theme.BACKGROUND_COLOR }]}>
      <View style={[styles.container, { backgroundColor: theme.BACKGROUND_COLOR }]}>
        <View style={styles.innerContainer}>
          <HeaderViewer theme={theme} />
          <Option
            theme={theme}
            onSetTheme={handleTheme}
            isNotifications={isNotifications}
            onSetIsNotifications={handleSetIsNotifications}
          />
          <FeedBack
            theme={theme}
            onSetFeadbackList={handleSetFeedbackList}
            isNotifications={isNotifications}
          />
          <Questions feedbackList={feedbackList} theme={theme} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  innerContainer: {
    margin: 16,
  },
});

