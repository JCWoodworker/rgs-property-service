import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { serviceStyleFor } from "./utils"
import ServiceIcon from "./ServiceIcon"

const ServiceCard = ({
	title,
	description,
	iconId,
}: {
	title: string
	description: string
	iconId?: string
}) => {
	const style = serviceStyleFor(iconId)
	return (
		<Card className="group hover:shadow-sm hover:border-foreground/20 transition">
			<CardHeader className="flex flex-row items-center gap-3">
				{iconId ? (
					<span
						className={`inline-grid place-items-center h-9 w-9 rounded-md transition`}
						style={style}
					>
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

export default ServiceCard
