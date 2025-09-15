import { useState } from "react"
import ContactForm from "./ContactForm"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const ContactCard = ({
	label,
	value,
	href,
	tint,
}: {
	label: string
	value: string
	href?: string
	tint?: string
}) => {
	const style: React.CSSProperties | undefined = tint
		? { borderColor: tint }
		: undefined
	const [open, setOpen] = useState(false)
	if (href && label !== "Email") {
		return (
			<a
				className="rounded-lg border p-5 bg-card text-card-foreground"
				href={href}
				style={style}
			>
				<div className="text-sm font-semibold">{label}</div>
				<div className="mt-1 text-foreground/80">{value}</div>
			</a>
		)
	}
	// Email card: open a dialog with the contact form
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<div
					className="rounded-lg border p-5 bg-card text-card-foreground cursor-pointer"
					style={style}
					role="button"
					tabIndex={0}
				>
					<div className="text-sm font-semibold">{label}</div>
					<div className="mt-1 text-foreground/80">{value}</div>
				</div>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Request a Free Estimate</DialogTitle>
					<DialogDescription>
						Tell us a bit about your project and how to reach you.
					</DialogDescription>
				</DialogHeader>
				<ContactForm onClose={() => setOpen(false)} />
				<div className="flex justify-end">
					<DialogClose asChild>
						<Button type="button" variant="outline">
							Close
						</Button>
					</DialogClose>
				</div>
			</DialogContent>
		</Dialog>
	)
}

export default ContactCard
