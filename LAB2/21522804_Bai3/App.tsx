// Phạm Hoài Vũ MSSV:21522804
//App.tsx
import React from "react"
import { AppContextProvider } from "./src/provider/AppContextProvider"
import { Screen } from "./src/routes/routes"
export default function App() {
	return (
		<AppContextProvider>
			<Screen />
		</AppContextProvider>
	)
}
