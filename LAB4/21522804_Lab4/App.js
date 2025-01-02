// 21522804 Phạm Hoài Vũ

import MainNavigator from "./src/Screens/MainNavigator";
import { DataContextProvider } from "./src/context/DataContext";
import { AuthenContextProvider } from "./src/context/AuthenContext";
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
