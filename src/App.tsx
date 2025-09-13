import { Route, Routes, Link, Outlet, NavLink } from "react-router-dom"

function Layout() {
	return (
		<div className="min-h-dvh flex flex-col">
			<header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
				<div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
					<Link to="/" className="font-semibold tracking-tight">
						RGS Property Services
					</Link>
					<nav className="hidden md:flex gap-6 text-sm">
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive
									? "font-medium"
									: "text-foreground/70 hover:text-foreground"
							}
						>
							Home
						</NavLink>
						<a
							href="#services"
							className="text-foreground/70 hover:text-foreground"
						>
							Overview
						</a>
						<NavLink
							to="/services"
							className={({ isActive }) =>
								isActive
									? "font-medium"
									: "text-foreground/70 hover:text-foreground"
							}
						>
							Services
						</NavLink>
						<a
							href="#reviews"
							className="text-foreground/70 hover:text-foreground"
						>
							Reviews
						</a>
						<a
							href="#contact"
							className="text-foreground/70 hover:text-foreground"
						>
							Contact
						</a>
					</nav>
					<a
						href="tel:+17742802315"
						className="inline-flex items-center text-sm font-medium rounded-md px-3 py-1.5 bg-primary text-primary-foreground hover:opacity-90"
					>
						Call (774) 280-2315
					</a>
				</div>
			</header>
			<main className="flex-1">
				<Outlet />
			</main>
			<footer className="border-t">
				<div className="mx-auto max-w-6xl px-4 py-8 text-sm text-foreground/70">
					<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
						<p>© R. Gonynor & Sons, Inc.</p>
						<p>
							222 N.Main Street, Whitinsville, MA • (774) 280-2315 •
							Paintguy62@gmail.com
						</p>
					</div>
				</div>
			</footer>
		</div>
	)
}

function HomePage() {
	return (
		<>
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
								className="inline-flex items-center rounded-md bg-white text-black px-4 py-2 text-sm font-medium"
							>
								Call for a Free Estimate
							</a>
							<a
								href="mailto:Paintguy62@gmail.com"
								className="inline-flex items-center rounded-md border border-white/60 text-white px-4 py-2 text-sm font-medium"
							>
								Email Us
							</a>
						</div>
					</div>
				</div>
			</section>

			<section id="services" className="py-16">
				<div className="mx-auto max-w-6xl px-4">
					<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
						Our Services
					</h2>
					<p className="mt-2 text-foreground/70">
						Painting and remodeling are our specialty. We also handle decking,
						cabinetry, flooring, power washing, and general contracting.
					</p>
					<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						<ServiceCard
							title="Interior & Exterior Painting"
							description="From prep to final coat, crisp lines and durable finishes throughout your home."
						/>
						<ServiceCard
							title="Home Remodeling"
							description="Kitchens, baths, basements, and more—organized, clean, and on schedule."
						/>
						<ServiceCard
							title="Cabinetry & Refinishing"
							description="Refresh cabinets with professional refinishing and hardware updates."
						/>
						<ServiceCard
							title="Flooring Installation"
							description="Laminate and tile installs with tight seams and clean transitions."
						/>
						<ServiceCard
							title="Decking"
							description="Repairs, staining, and new deck builds built to last."
						/>
						<ServiceCard
							title="Power Washing"
							description="Safely remove dirt and mildew to restore curb appeal."
						/>
					</div>
					<div className="mt-8">
						<NavLink
							to="/services"
							className="text-sm font-medium underline underline-offset-4"
						>
							View all services
						</NavLink>
					</div>
				</div>
			</section>

			<section id="reviews" className="py-16 bg-secondary">
				<div className="mx-auto max-w-6xl px-4">
					<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
						Testimonials
					</h2>
					<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10">
						<Testimonial
							quote="Seth and his team at R. Gonynor and Sons have completed two projects for us, a full color change on the exterior of our home and then wallpaper removal and paint of the interior. Seth was extremely responsive and came out both times and provided us with a free quote which was reasonable and affordable! We could not be happier with the work they did on our home. Seth and his crew are knowledgeable, trustworthy, friendly and professional. I highly recommend R. Gonynor and Sons for their excellent service and top notch quality."
							author="Nicole"
						/>
						<Testimonial
							quote="Highly recommend R.Gonynor and Sons for your next project. They just completed repainting the interior of my house, replacing plumbing fixtures, light fixtures, staining the deck and other maintenance items. They were so pleasant to work with from the estimate through the end of the job. Everyone on the crew did excellent work and always cleaned up at the end of the day. Well priced and professional! Thank you Seth and crew. I would not hesitate to use them again."
							author="Shannon G"
						/>
						<Testimonial
							quote="Gonynor and Sons just finished painting the exterior of our old (and quirky) house. They did an amazing job! The team that worked on our house was very responsive to our questions and checked in with us frequently throughout the process. Highly recommend and would use them again."
							author="Allice K"
						/>
						<Testimonial
							quote="We just had Seth and his team work on our kitchen cabinets. Matt and Steve were excellent workers who were professional, concise, and courteous. They worked long hours to ensure that our project would be completed in a timely manner. Seth did an excellent job on the doors and they look INCREDIBLE. We are happy with the work that was done and I look forward to using R Gonynor and Sons in the future."
							author="Julie Ann"
						/>
					</div>
				</div>
			</section>

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
							href="mailto:Paintguy62@gmail.com"
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

function ServicesPage() {
	return (
		<section className="py-16">
			<div className="mx-auto max-w-6xl px-4">
				<h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
					Our Services
				</h1>
				<p className="mt-3 text-foreground/70 max-w-2xl">
					From clean, crisp painting to full-room remodels, we help homeowners
					improve and protect their homes with reliable scheduling and
					respectful crews.
				</p>
				<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					<ServiceCard
						title="Interior & Exterior Painting"
						description="Crisp lines, durable finishes, expert prep."
					/>
					<ServiceCard
						title="Home Remodeling"
						description="Kitchens, baths, basements—organized and on schedule."
					/>
					<ServiceCard
						title="Cabinetry & Refinishing"
						description="Painted or refinished cabinetry with updated hardware."
					/>
					<ServiceCard
						title="Flooring Installation"
						description="Laminate and tile installs with tight seams."
					/>
					<ServiceCard
						title="Decking"
						description="Repairs, staining, and new builds."
					/>
					<ServiceCard
						title="Power Washing"
						description="Refresh siding, decks, and walkways."
					/>
					<ServiceCard
						title="General Contracting"
						description="Small projects and punch lists handled professionally."
					/>
				</div>
				<div className="mt-10 flex gap-3">
					<a
						href="tel:+17742802315"
						className="inline-flex items-center rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium"
					>
						Call for a Free Estimate
					</a>
					<a
						href="mailto:Paintguy62@gmail.com"
						className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium"
					>
						Email Us
					</a>
				</div>
			</div>
		</section>
	)
}

function ServiceCard({
	title,
	description,
}: {
	title: string
	description: string
}) {
	return (
		<div className="rounded-lg border p-5 bg-card text-card-foreground">
			<h3 className="text-lg font-semibold tracking-tight">{title}</h3>
			<p className="mt-2 text-sm text-foreground/70">{description}</p>
		</div>
	)
}

function Testimonial({ quote, author }: { quote: string; author: string }) {
	return (
		<figure className="rounded-lg border bg-card text-card-foreground p-6">
			<blockquote className="text-[15px] leading-relaxed">“{quote}”</blockquote>
			<figcaption className="mt-4 font-medium">— {author}</figcaption>
		</figure>
	)
}

function ContactCard({
	label,
	value,
	href,
}: {
	label: string
	value: string
	href?: string
}) {
	const Comp = href ? "a" : "div"
	return (
		<Comp
			className="rounded-lg border p-5 bg-card text-card-foreground"
			href={href}
		>
			<div className="text-sm font-semibold">{label}</div>
			<div className="mt-1 text-foreground/80">{value}</div>
		</Comp>
	)
}

export default function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path="/services" element={<ServicesPage />} />
			</Route>
		</Routes>
	)
}
