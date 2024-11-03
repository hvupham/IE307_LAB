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
						email: `21522804@gm.uit.edu.vn`,
						password: `123`,
					},
				],
				isLoggedIn,
				setIsLoggedIn,
			}}>
			{children}
		</AppContext.Provider>
	)
}