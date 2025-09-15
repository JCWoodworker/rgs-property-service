import { useState } from "react"
import ContactDialog from "./ContactDialog"

const ContactCard = ({
	label,
	value,
	href,
}: {
	label: string
	value: string
	href?: string
}) => {
	const [open, setOpen] = useState(false)

	// Map label to Tailwind tint classes (no inline styles)
	const tone =
		label === "Email" ? "red" : label === "Address" ? "yellow" : "blue"
	const toneClasses =
		tone === "red"
			? "border-rose-200/60 ring-1 ring-rose-200/40 shadow-sm"
			: tone === "yellow"
			? "border-amber-200/60 ring-1 ring-amber-200/40 shadow-sm"
			: "border-blue-200/60 ring-1 ring-blue-200/40 shadow-sm"
	const cardBase = `rounded-lg border bg-card text-card-foreground p-5 ${toneClasses}`

	if (href && label !== "Email") {
		return (
			<a
				className={cardBase + " hover:shadow-md transition-shadow"}
				href={href}
			>
				<div className="text-sm font-semibold">{label}</div>
				<div className="mt-1 text-foreground/80">{value}</div>
			</a>
		)
	}

	// Email card: use ContactDialog with a trigger
	return (
		<ContactDialog
			open={open}
			onOpenChange={setOpen}
			trigger={
				<div
					className={
						cardBase + " cursor-pointer hover:shadow-md transition-shadow"
					}
					role="button"
					tabIndex={0}
				>
					<div className="text-sm font-semibold">{label}</div>
					<div className="mt-1 text-foreground/80">{value}</div>
				</div>
			}
		/>
	)
}

export default ContactCard
