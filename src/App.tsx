import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
	PaintRoller,
	Hammer,
	Boxes,
	Layers,
	Droplets,
	Wrench,
	Phone,
} from "lucide-react"
import { services } from "@/data/services"
import { testimonials } from "@/data/testimonials"
import { Button } from "@/components/ui/button"
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet"

const navUnderlineBase =
	"relative px-1 py-0.5 transition text-foreground/70 hover:text-foreground after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-primary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-dvh flex flex-col">
			<header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
				<div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
					<a
						href="#home"
						className="flex items-center gap-2"
						aria-label="RGS Property Services"
					>
						<img
							src="/RGS_Web_Logo_230X50 (1).svg"
							alt="RGS Property Services"
							className="h-6 sm:h-8 w-auto"
						/>
					</a>
					<div className="hidden md:block">
						<NavigationMenu>
							<NavigationMenuList className="gap-7">
								<NavigationMenuItem>
									<NavigationMenuLink href="#home" className={navUnderlineBase}>
										Home
									</NavigationMenuLink>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<NavigationMenuLink
										href="#services"
										className={navUnderlineBase}
									>
										Services
									</NavigationMenuLink>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<NavigationMenuLink
										href="#reviews"
										className={navUnderlineBase}
									>
										Reviews
									</NavigationMenuLink>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<NavigationMenuLink
										href="#about"
										className={navUnderlineBase}
									>
										About
									</NavigationMenuLink>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<NavigationMenuLink
										href="#contact"
										className={navUnderlineBase}
									>
										Contact
									</NavigationMenuLink>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>
					</div>
					<div className="md:hidden">
						<Sheet>
							<SheetTrigger asChild>
								<Button variant="outline" size="sm">
									Menu
								</Button>
							</SheetTrigger>
							<SheetContent side="right">
								<SheetHeader>
									<SheetTitle>Menu</SheetTitle>
								</SheetHeader>
								<nav className="mt-4 grid gap-3 text-sm">
									<a href="#home">Home</a>
									<a href="#services">Services</a>
									<a href="#reviews">Reviews</a>
									<a href="#about">About</a>
									<a href="#contact">Contact</a>
								</nav>
							</SheetContent>
						</Sheet>
					</div>
					<Button asChild size="sm" className="hidden md:inline-flex">
						<a href="tel:+17742802315">
							<Phone className="mr-2 h-4 w-4" />
							Call (774) 280-2315
						</a>
					</Button>
				</div>
			</header>
			<main className="flex-1">{children}</main>
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
						{services.slice(0, 6).map((s) => (
							<ServiceCard
								key={s.id}
								title={s.name}
								description={s.blurb}
								iconId={s.id}
							/>
						))}
					</div>
				</div>
			</section>

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

			<section id="about" className="py-16">
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

// service icon and cards (unchanged from previous block)
function ServiceIcon({ id }: { id: string }) {
	const size = 18
	switch (id) {
		case "painting":
			return <PaintRoller size={size} />
		case "remodeling":
			return <Hammer size={size} />
		case "cabinetry":
			return <Boxes size={size} />
		case "flooring":
			return <Layers size={size} />
		case "decking":
			return <Hammer size={size} />
		case "power-washing":
			return <Droplets size={size} />
		default:
			return <Wrench size={size} />
	}
}

function ServiceCard({
	title,
	description,
	iconId,
}: {
	title: string
	description: string
	iconId?: string
}) {
	return (
		<Card className="group hover:shadow-sm hover:border-foreground/20 transition">
			<CardHeader className="flex flex-row items-center gap-3">
				{iconId ? (
					<span className="inline-grid place-items-center h-9 w-9 rounded-md bg-primary/10 text-primary group-hover:bg-primary/15 transition">
						<ServiceIcon id={iconId} />
					</span>
				) : null}
				<CardTitle className="text-base">{title}</CardTitle>
			</CardHeader>
			<CardContent>
				<p className="text-sm text-foreground/70">{description}</p>
			</CardContent>
		</Card>
	)
}

function Testimonial({ quote, author }: { quote: string; author: string }) {
	return (
		<Card>
			<CardContent className="p-6">
				<blockquote className="text-[15px] leading-relaxed">
					“{quote}”
				</blockquote>
				<Separator className="my-4" />
				<div className="font-medium">— {author}</div>
			</CardContent>
		</Card>
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
	if (href) {
		return (
			<a
				className="rounded-lg border p-5 bg-card text-card-foreground"
				href={href}
			>
				<div className="text-sm font-semibold">{label}</div>
				<div className="mt-1 text-foreground/80">{value}</div>
			</a>
		)
	}
	return (
		<div className="rounded-lg border p-5 bg-card text-card-foreground">
			<div className="text-sm font-semibold">{label}</div>
			<div className="mt-1 text-foreground/80">{value}</div>
		</div>
	)
}

export default function App() {
	return (
		<Layout>
			<HomePage />
		</Layout>
	)
}
