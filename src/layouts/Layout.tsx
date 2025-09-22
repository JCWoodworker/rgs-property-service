import ContactDialog from "@/features/contact/ContactDialog"
import { useState } from "react"
import LayoutHeader from "./LayoutHeader"
import LayoutFooter from "./LayoutFooter"

const Layout = ({ children }: { children: React.ReactNode }) => {
	const [menuOpen, setMenuOpen] = useState(false)
	const [contactOpen, setContactOpen] = useState(false)
	return (
		<div className="min-h-dvh flex flex-col">
			<LayoutHeader
				menuOpen={menuOpen}
				setMenuOpen={setMenuOpen}
				setContactOpen={setContactOpen}
			/>
			<main className="flex-1">{children}</main>
			<ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
			<LayoutFooter />
		</div>
	)
}

export default Layout
