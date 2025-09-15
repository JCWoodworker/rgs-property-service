import { testimonials } from "@/data/testimonials"
import Testimonial from "./Testimonial"

const TestimonialSection = () => {
	return (
		<section id="reviews" className="py-16 bg-secondary">
			<div className="mx-auto max-w-6xl px-4">
				<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
					Testimonials
				</h2>
				<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10">
					{testimonials.map((t, i) => (
						<Testimonial key={i} quote={t.quote} author={t.author} />
					))}
				</div>
			</div>
		</section>
	)
}

export default TestimonialSection