import { useForm, ValidationError } from "@formspree/react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { Loader2, CheckCircle2 } from "lucide-react"

type ContactFormProps = {
	onClose?: () => void
}

const ContactForm = ({ onClose }: ContactFormProps) => {
	const [state, handleSubmit] = useForm("mgvlbwqb")
	if (state.succeeded) {
		return (
			<div className="grid gap-4">
				<div className="inline-flex items-center gap-2 text-green-600">
					<CheckCircle2 className="h-5 w-5" />
					<span className="font-medium">Request received</span>
				</div>
				<p className="text-sm text-foreground/80">
					Thanks! We'll get back to you shortly.
				</p>
				<div>
					<Button type="button" onClick={onClose}>
						Close
					</Button>
				</div>
			</div>
		)
	}
	return (
		<form
			onSubmit={handleSubmit}
			className="grid gap-4"
			aria-busy={state.submitting}
		>
			<div>
				<Label htmlFor="name">Your Name</Label>
				<Input
					id="name"
					type="text"
					name="name"
					required
					placeholder="Your Name"
					disabled={state.submitting}
				/>
				<ValidationError prefix="Name" field="name" errors={state.errors} />
			</div>
			<div>
				<Label htmlFor="phone">Your Phone Number</Label>
				<Input
					id="phone"
					type="tel"
					name="phone"
					placeholder="Your Phone Number"
					disabled={state.submitting}
				/>
				<ValidationError prefix="Phone" field="phone" errors={state.errors} />
			</div>
			<div className="grid gap-2">
				<Label htmlFor="email">Your Email Address</Label>
				<Input
					id="email"
					type="email"
					name="email"
					required
					placeholder="you@example.com"
					disabled={state.submitting}
				/>
				<ValidationError prefix="Email" field="email" errors={state.errors} />
			</div>
			<div className="grid gap-2">
				<Label htmlFor="preferred_contact">Preferred Contact Method</Label>
				<Select name="preferred_contact" required disabled={state.submitting}>
					<SelectTrigger className="w-full">
						<SelectValue placeholder="Select a method" />
					</SelectTrigger>
					<SelectContent
						align="start"
						className="min-w-[--radix-select-trigger-width]"
					>
						<SelectItem value="email">Email</SelectItem>
						<SelectItem value="phone">Phone</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div className="grid gap-2">
				<Label htmlFor="message">Message & Project Details</Label>
				<Textarea
					id="message"
					name="message"
					required
					placeholder="How can we help?"
					rows={5}
					disabled={state.submitting}
				/>
				<ValidationError
					prefix="Message"
					field="message"
					errors={state.errors}
				/>
			</div>
			<div>
				<Button type="submit" disabled={state.submitting}>
					{state.submitting ? (
						<span className="inline-flex items-center">
							<Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
						</span>
					) : (
						"Send"
					)}
				</Button>
			</div>
		</form>
	)
}

export default ContactForm
