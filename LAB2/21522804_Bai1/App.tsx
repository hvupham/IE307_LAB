// Phạm Hoài Vũ - 21522804
// App.tsx
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/shared/Header';
import Posts from './src/components/post/ListPost';
export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Posts/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
