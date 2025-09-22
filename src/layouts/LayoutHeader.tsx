import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet"
import { BRAND_RED, BRAND_BLUE, BRAND_YELLOW } from "@/constants/theme"
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

interface LayoutHeaderProps {
	menuOpen: boolean
	setMenuOpen: (open: boolean) => void
	setContactOpen: (open: boolean) => void
}

const navUnderlineBase =
	"relative px-1 py-0.5 transition text-foreground/70 hover:text-foreground after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-primary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"

const LayoutHeader = ({
	menuOpen,
	setMenuOpen,
	setContactOpen,
}: LayoutHeaderProps) => {
	return (
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
								<NavigationMenuLink href="#about" className={navUnderlineBase}>
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
	)
}

export default LayoutHeader
