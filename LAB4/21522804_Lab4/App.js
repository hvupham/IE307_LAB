// 21522804 Phạm Hoài Vũ
import { AuthenContextProvider } from "./src/Components/AuthenContext";
import MainNavigator from "./src/Screens/MainNavigator";
import { DataContextProvider } from "./src/Components/DataContext"; 

const App = () => {
  return (
    <AuthenContextProvider>
      <DataContextProvider>
        <MainNavigator />
      </DataContextProvider>
    </AuthenContextProvider>
  );
};

export default App;
