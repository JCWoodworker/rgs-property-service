import { TINT_YELLOW } from "@/constants/theme"

const AboutSection = () => {
	return (
		<section
			id="about"
			className="py-16"
			style={{ backgroundColor: TINT_YELLOW }}
		>
			<div className="mx-auto max-w-6xl px-4">
				<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
					About Us
				</h2>
				<p className="mt-2 text-foreground/70 max-w-3xl">
					Family-owned since 1984, serving Central Massachusetts with
					professional painting, remodeling, and general contracting. Reliable
					crews, clean jobsites, and clear communication.
				</p>
			</div>
		</section>
	)
}

export default AboutSection