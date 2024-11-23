import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { MainStackNavigation } from "./src/Navigation/Stack"
import { RecoilRoot } from "recoil"
import { database } from "./config"
export default function App() {
	React.useEffect(() => {
		database.transaction((tx) => {
			tx.executeSql(
				"create table if not exists Note (id varchar primary key not null, title varchar, note varchar);"
			)
		})
	}, [])
	return (
		<RecoilRoot>
			<NavigationContainer>
				<MainStackNavigation />
			</NavigationContainer>
		</RecoilRoot>
	)
}
