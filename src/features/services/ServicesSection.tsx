import { TINT_BLUE } from "@/constants/theme"
import { services } from "@/data/services"
import ServiceCard from "./ServiceCard"

const ServicesSection = () => {
	return (
    <section
    id="services"
    className="py-16"
    style={{ backgroundColor: TINT_BLUE }}
  >
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

	)
}

export default ServicesSection