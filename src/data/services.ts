export type Service = {
	id: string
	name: string
	blurb: string
}

export const services: Service[] = [
	{
		id: "painting",
		name: "Interior & Exterior Painting",
		blurb:
			"Crisp lines, durable finishes, and thorough prep for lasting results.",
	},
	{
		id: "remodeling",
		name: "Home Remodeling",
		blurb:
			"Kitchens, baths, basements—organized schedules and clean work areas.",
	},
	{
		id: "cabinetry",
		name: "Cabinetry & Refinishing",
		blurb:
			"Painted or refinished cabinetry with updated hardware and finishes.",
	},
	{
		id: "flooring",
		name: "Flooring Installation",
		blurb:
			"Laminate and tile installation with tight seams and clean transitions.",
	},
	{
		id: "decking",
		name: "Decking",
		blurb: "Repairs, staining, and new deck builds built to last.",
	},
	{
		id: "power-washing",
		name: "Power Washing",
		blurb: "Safely remove dirt and mildew to refresh curb appeal.",
	},
	{
		id: "general-contracting",
		name: "General Contracting",
		blurb: "Small projects and punch lists handled professionally.",
	},
]
