import { useState } from "react"
import {
	Phone,
} from "lucide-react"
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
import ContactDialog from "@/features/contact/ContactDialog"
import TestimonialSection from "./features/testimonials/TestimonialSection"
import AboutSection from "./features/about/AboutSection"
import { BRAND_RED, BRAND_BLUE, BRAND_YELLOW, TINT_BLUE, TINT_RED, TINT_YELLOW } from "@/constants/theme"
import ServicesSection from "./features/services/ServicesSection"
import ContactCard from "./features/contact/ContactCard"

const navUnderlineBase =
	"relative px-1 py-0.5 transition text-foreground/70 hover:text-foreground after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-primary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"

function Layout({ children }: { children: React.ReactNode }) {
	const [menuOpen, setMenuOpen] = useState(false)
	const [contactOpen, setContactOpen] = useState(false)
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
						<Sheet open={menuOpen} onOpenChange={setMenuOpen}>
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
									<a href="#home" onClick={() => setMenuOpen(false)}>
										Home
									</a>
									<a href="#services" onClick={() => setMenuOpen(false)}>
										Services
									</a>
									<a href="#reviews" onClick={() => setMenuOpen(false)}>
										Reviews
									</a>
									<a href="#about" onClick={() => setMenuOpen(false)}>
										About
									</a>
									<a href="#contact" onClick={() => setMenuOpen(false)}>
										Contact
									</a>
								</nav>
							</SheetContent>
						</Sheet>
					</div>
					<div className="hidden md:flex items-center gap-2">
						<Button asChild size="sm">
							<a href="tel:+17742802315">
								<Phone className="mr-2 h-4 w-4" />
								Call (774) 280-2315
							</a>
						</Button>
						<Button
							size="sm"
							variant="outline"
							onClick={() => setContactOpen(true)}
						>
							Free Estimate
						</Button>
					</div>
				</div>
				{/* Subtle brand gradient bar */}
				<div
					className="h-px w-full"
					style={{
						background: `linear-gradient(90deg, ${BRAND_RED}, ${BRAND_BLUE}, ${BRAND_YELLOW})`,
						opacity: 0.5,
					}}
				/>
			</header>
			<main className="flex-1">{children}</main>
			<ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
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
	const [heroDialogOpen, setHeroDialogOpen] = useState(false)
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
							tint={TINT_BLUE}
						/>
						<ContactCard
							label="Email"
							value="Paintguy62@gmail.com"
							href="mailto:Paintguy62@gmail.com"
							tint={TINT_RED}
						/>
						<ContactCard
							label="Address"
							value="222 N.Main Street, Whitinsville, MA, United States, Massachusetts"
							tint={TINT_YELLOW}
						/>
					</div>
				</div>
			</section>
		</>
	)
}

export default function App() {
	return (
		<Layout>
			<HomePage />
		</Layout>
	)
}
