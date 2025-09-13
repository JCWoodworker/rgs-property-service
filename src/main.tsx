import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import "@radix-ui/themes/styles.css"
import { Theme } from "@radix-ui/themes"
import { BrowserRouter } from "react-router-dom"
import App from "./App.tsx"

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Theme>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Theme>
	</StrictMode>
)
