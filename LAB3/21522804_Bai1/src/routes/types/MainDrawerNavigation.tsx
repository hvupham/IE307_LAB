import { AntDesign, Feather } from "@expo/vector-icons"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { MainDrawerParamsList } from "./type" 
import { HomeDrawer } from "../../pages/mainScreen/Home/HomeDrawer"
import { NotificationDrawer } from "../../pages/mainScreen/Home/NotificationDrawer"
import { HelpDrawer } from "../../pages/mainScreen/Home/HelpDrawer"

const Drawer = createDrawerNavigator<MainDrawerParamsList>()
export const MainDrawer = () => {
	return (
		<Drawer.Navigator
			initialRouteName="Home"
			screenOptions={({ route }) => ({
				drawerIcon: () => {
					if (route.name === "Home") return <AntDesign name="home" size={24} />
					if (route.name === "Notification")
						return <AntDesign name="notification" size={24} />
					if (route.name === "Helps")
						return <Feather name="help-circle" size={24} />
				},
			})}>
			<Drawer.Screen name="Home" 
			component={HomeDrawer} />	
			<Drawer.Screen name="Notification" component={NotificationDrawer} />
			<Drawer.Screen name="Helps" component={HelpDrawer} />
		</Drawer.Navigator>
	)
}
