import {
	Boxes,
	Layers,
	Hammer,
	Wrench,
	PaintRoller,
	Droplets,
} from "lucide-react"

const ServiceIcon = ({ id }: { id: string }) => {
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

export default ServiceIcon
