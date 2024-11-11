import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootNativeStackParamList } from "./Type"
import { HomeView } from "./BottomTabNavigation"
import hooksNote from "../hooks/hookNote/hooksNote"
import React from "react"

const NativeStack = createNativeStackNavigator<RootNativeStackParamList>()
export const MainStackNavigation = () => {
	const { handleGetListNote } = hooksNote.useGetListNote()
	React.useEffect(() => {
		handleGetListNote()
	}, [])
	return (
		<NativeStack.Navigator initialRouteName="HomeScreen">
			<NativeStack.Screen
				options={{
					headerShown: false,
				}}
				name="HomeScreen"
				component={HomeView}
			/>
		</NativeStack.Navigator>
	)
}
