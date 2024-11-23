import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootNativeStackParamList } from "./navigation"
import { HomeView } from "./Bottom"
import hooksNote from "../hooks/Note"
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
