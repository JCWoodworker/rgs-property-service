import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog"
import ContactForm from "@/features/contact/ContactForm"

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
			</DialogContent>
		</Dialog>
	)
}

export default ContactDialog
