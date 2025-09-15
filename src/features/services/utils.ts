import { BRAND_RED, BRAND_BLUE, BRAND_YELLOW } from "@/constants/theme"

export function serviceStyleFor(id?: string): React.CSSProperties {
	switch (id) {
		case "painting":
			return { backgroundColor: BRAND_RED, color: "#fff" }
		case "remodeling":
			return { backgroundColor: BRAND_BLUE, color: "#fff" }
		case "cabinetry":
			return { backgroundColor: BRAND_YELLOW, color: "#000" }
		case "flooring":
			return { backgroundColor: BRAND_BLUE, color: "#fff" }
		case "decking":
			return { backgroundColor: BRAND_RED, color: "#fff" }
		case "power-washing":
			return { backgroundColor: BRAND_BLUE, color: "#fff" }
		case "general-contracting":
			return { backgroundColor: BRAND_YELLOW, color: "#000" }
		default:
			return { backgroundColor: BRAND_BLUE, color: "#fff" }
	}
}
