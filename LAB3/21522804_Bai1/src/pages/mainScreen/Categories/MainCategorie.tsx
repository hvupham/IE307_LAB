import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { CategoriesMaterialTopTabParamsList } from "../../../routes/types/type"
import CategoriesScreen1 from "./CategoriesScreen1"
import CategoriesScreen2 from "./CategoriesScreen2"
import CategoriesScreen3 from "./CategoriesScreen3"
const Tab = createMaterialTopTabNavigator<CategoriesMaterialTopTabParamsList>()
export const Categories = () => {
	return (
		<Tab.Navigator initialRouteName="CATEGORIES1">
            <Tab.Screen name="CATEGORIES1" component={CategoriesScreen1} />
            <Tab.Screen name="CATEGORIES2" component={CategoriesScreen2} />
            <Tab.Screen name="CATEGORIES3" component={CategoriesScreen3} />
		</Tab.Navigator>
	)
}