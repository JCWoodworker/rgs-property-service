import { useState } from "react"
import ContactDialog from "@/features/contact/ContactDialog"
import TestimonialSection from "../testimonials/TestimonialSection"
import AboutSection from "../about/AboutSection"
import ServicesSection from "../services/ServicesSection"
import ContactCard from "../contact/ContactCard"
import HeroSection from "./HeroSection"

const HomePage = () => {
	const [heroDialogOpen, setHeroDialogOpen] = useState(false)
	return (
		<>
			<HeroSection setHeroDialogOpen={setHeroDialogOpen} />
			<ContactDialog open={heroDialogOpen} onOpenChange={setHeroDialogOpen} />
			<ServicesSection />
			<TestimonialSection />
			<AboutSection />
			<section id="contact" className="py-16">
				<div className="mx-auto max-w-6xl px-4 grid gap-8">
					<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
						Contact
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<ContactCard
							label="Phone"
							value="(774) 280-2315"
							href="tel:+17742802315"
						/>
						<ContactCard
							label="Email"
							value="Paintguy62@gmail.com"
						/>
						<ContactCard
							label="Address"
							value="222 N.Main Street, Whitinsville, MA, United States, Massachusetts"
						/>
					</div>
				</div>
			</section>
		</>
	)
}

export default HomePage