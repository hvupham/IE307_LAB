import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { MainStackNavigation } from "./src/Navigation/MainStackNavigation"
import * as SQLite from "expo-sqlite"
import { RecoilRoot } from "recoil"
import { db } from "./config"
export default function App() {
	React.useEffect(() => {
		db.transaction((tx) => {
			tx.executeSql(
				"create table if not exists Note (id varchar primary key not null, title varchar, note varchar);"
			)
			console.log("success create table Notes")
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
