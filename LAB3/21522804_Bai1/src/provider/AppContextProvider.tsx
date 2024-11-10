// Phạm Hoài Vũ MSSV:21522804
import React from "react"
import { AppContext } from "../context/AppContextProps "
type AppProps = {
	children: React.ReactNode
}
export const AppContextProvider: React.FC<AppProps> = (props) => {
	const { children } = props
	const [isLoggedIn, setIsLoggedIn] = React.useState<
		"idle" | "success" | "hasError"
	>("idle")
	return (
		<AppContext.Provider
			value={{
				data: [
					{
						email: ``,
						password: ``,
					},
				],
				isLoggedIn,
				setIsLoggedIn,
			}}>
			{children}
		</AppContext.Provider>
	)
}