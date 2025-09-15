import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Testimonial = ({ quote, author }: { quote: string; author: string }) => {
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

export default Testimonial
