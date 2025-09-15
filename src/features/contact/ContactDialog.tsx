import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogClose,
} from "@/components/ui/dialog"
import ContactForm from "@/features/contact/ContactForm"
import { Button } from "@/components/ui/button"

type ContactDialogProps = {
	open: boolean
	onOpenChange: (open: boolean) => void
}

const ContactDialog = ({ open, onOpenChange }: ContactDialogProps) => {
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Request a Free Estimate</DialogTitle>
					<DialogDescription>
						Tell us a bit about your project and how to reach you.
					</DialogDescription>
				</DialogHeader>
				<ContactForm onClose={() => onOpenChange(false)} />
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

export default ContactDialog
