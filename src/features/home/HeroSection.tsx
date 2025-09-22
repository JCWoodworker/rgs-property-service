import { BRAND_RED } from "@/constants/theme"

interface HeroSectionProps {
  setHeroDialogOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const HeroSection = ({ setHeroDialogOpen }: HeroSectionProps) => {
	return (
		<section id="home" className="relative isolate">
			<img
				src="/Home-hero.jpeg"
				alt="Freshly painted home exterior"
				className="w-full h-[60svh] object-cover object-center"
			/>
			<div className="absolute inset-0 bg-black/40" />
			<div className="absolute inset-0 flex items-center">
				<div className="mx-auto max-w-6xl px-4 text-white">
					<h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
						Big or small, we do it all.
					</h1>
					<p className="mt-3 max-w-2xl text-white/90">
						Family-owned painting and remodeling for Central Massachusetts
						homes. Honest estimates, clean work, reliable scheduling.
					</p>
					<div className="mt-5 flex gap-3">
						<a
							href="tel:+17742802315"
							className="inline-flex items-center rounded-md text-white px-4 py-2 text-sm font-medium hover:opacity-90"
							style={{ backgroundColor: BRAND_RED }}
						>
							Call for a Free Estimate
						</a>
						<button
							type="button"
							className="inline-flex items-center rounded-md border text-white px-4 py-2 text-sm font-medium border-white/60 hover:bg-white/10"
							onClick={() => setHeroDialogOpen(true)}
						>
							Email Us
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
