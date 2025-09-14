import { useForm, ValidationError } from "@formspree/react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const ContactForm = () => {
	const [state, handleSubmit] = useForm("mgvlbwqb")
	if (state.succeeded) {
		return (
			<p className="text-sm text-foreground/80">
				Thanks! We'll get back to you shortly.
			</p>
		)
	}
	return (
		<form onSubmit={handleSubmit} className="grid gap-4">
			<div className="grid gap-2">
				<Label htmlFor="email">Your Email Address</Label>
				<Input
					id="email"
					type="email"
					name="email"
					required
					placeholder="you@example.com"
				/>
				<ValidationError prefix="Email" field="email" errors={state.errors} />
			</div>
			<div className="grid gap-2">
				<Label htmlFor="message">Message</Label>
				<Textarea
					id="message"
					name="message"
					required
					placeholder="How can we help?"
					rows={5}
				/>
				<ValidationError
					prefix="Message"
					field="message"
					errors={state.errors}
				/>
			</div>
			<div>
				<Button type="submit" disabled={state.submitting}>
					Send
				</Button>
			</div>
		</form>
	)
}

export default ContactForm
