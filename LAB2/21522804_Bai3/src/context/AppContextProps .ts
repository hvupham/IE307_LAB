import React from "react"
type AppContextProps = {
	data: {
		email: string
		password: string
	}[]
	isLoggedIn: "idle" | "success" | "hasError"
	setIsLoggedIn: React.Dispatch<
		React.SetStateAction<"idle" | "success" | "hasError">
	>
}
export const AppContext = React.createContext<AppContextProps | null>(null)