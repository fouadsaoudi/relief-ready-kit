import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Hammer,
  Warehouse,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Info,
} from "lucide-react";
import { services } from "@/lib/catalog";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { QuoteForm } from "@/components/QuoteForm";
import servicesBg from "@/assets/services_hero.jpg";

const icons = { cleaning: Sparkles, contracting: Hammer, warehousing: Warehouse } as const;

const servicesDetail = {
  cleaning: {
    title: "Operational Cleaning & Sanitation Services",
    subtitle:
      "Professional sanitization for refugee sites, offices, warehouses, and clinical facilities.",
    description:
      "With extensive experience serving international organizations, UN agencies, and large-scale institutions, NRM Supply maintains the highest standards in professional cleaning and facility maintenance. Our teams are equipped with advanced, high-quality equipment and certified cleaning products to deliver consistent, thorough results across all types of environments.",
    description2:
      "Every assignment is executed with full attention to detail, strict hygiene protocols, and a commitment to preserving the integrity of your space. We understand that operations don't stop, which is why our cleaning services are available 24/7, ready to respond whenever you need us. From routine maintenance to full facility turnarounds, NRM Supply is the partner you can count on to keep your environment clean, safe, and operational.",
    capabilities: [
      "Refugee settlement residential and common facility sanitization",
      "Corporate and NGO field office deep cleaning and maintenance",
      "Large-scale supply warehouse dust abatement and logistics site cleanup",
      "Clinical facility, mobile medical unit, and emergency health site sterilization",
      "Post-construction debris removal and institutional facility site prep",
    ],
    specs: [
      {
        label: "Standards",
        value: "Compliant with WHO and international field sanitation standards",
      },
      { label: "Mobilization Time", value: "24/7 emergency site mobilization within 24-48 hours" },
      {
        label: "Sanitation Agents",
        value: "Eco-friendly, biodegradable, non-hazardous disinfectants",
      },
      {
        label: "Team Training",
        value: "Certified hazardous waste handling & infection control crews",
      },
    ],
  },
  contracting: {
    title: "Field Contracting & Camp Infrastructure Assembly",
    subtitle: "Modular shelters, camp plumbing, electrical grids, and structural setup.",
    description:
      "We supply skilled craftsmen, tools, and technical oversight to construct, repair, and install essential field infrastructure. From modular office base assemblies and industrial warehouse tents to residential family camps, our crews handle camp electrical grids, supply line plumbing, and secure perimeter installations.",
    capabilities: [
      "Prefabricated storage warehouse and family shelter assembly",
      "Field office electrical grids, power distribution, and light systems",
      "Camp supply line plumbing, sewage tank connections, and water points",
      "Camp perimeter fencing, security gates, and support structure setup",
      "Emergency structural remediation and shelter reinforcement",
    ],
    specs: [
      {
        label: "Shelter Speeds",
        value: "Standard warehouse tent assembly completed in 48-72 hours",
      },
      {
        label: "Workforce",
        value: "Licensed electricians, carpenters, plumbers, and safety leads",
      },
      { label: "Field Gear", value: "Self-contained mobile power generators and tool sets" },
      { label: "Guidelines", value: "Structures aligned with UNHCR shelter design specifications" },
    ],
  },
  warehousing: {
    title: "Secure Storage & Inventory Logistics Services",
    subtitle: "Supply cataloging, climate-controlled storage, and dispatch management.",
    description:
      "NRM Supply operates fully equipped warehousing facilities designed to meet the storage and handling requirements of international organizations, NGOs, and commercial clients across Lebanon and the region. Our warehouses are managed to the highest operational standards, ensuring the safety, integrity, and traceability of every item in our care from relief supplies and humanitarian goods to commercial stock.",
    description2:
      "We implement strict inventory management systems, regular quality checks, and structured handling procedures to guarantee that your goods are stored correctly and dispatched accurately. Our facilities are accessible and operational around the clock, giving clients the flexibility to move goods on their timeline without compromise. Whether you require short-term storage or long-term warehousing solutions, NRM Supply provides the space, the systems, and the team to keep your supply chain moving.",
    capabilities: [
      "Real-time digital inventory records and supply reports",
      "Climate-controlled containment for sensitive kits and dry foods",
      "Relief item consolidation, kit re-packing, and custom labeling",
      "High-throughput cross-docking and logistics loading docks",
      "24/7 camera monitoring, fire suppression, and perimeter security",
    ],
    specs: [
      {
        label: "System Tracking",
        value: "Digital dashboard access for real-time inventory updates",
      },
      {
        label: "Storage Capacity",
        value: "Pallet racking, bulk floor storage, and cold chain capacity",
      },
      {
        label: "Dispatch Logic",
        value: "FIFO (First In, First Out) and FEFO (First Expired, First Out)",
      },
      {
        label: "Site Security",
        value: "Restricted badge-only access, fire sprinklers, and active CCTV",
      },
    ],
  },
};

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — NRM Supply" },
      {
        name: "description",
        content:
          "Cleaning, contracting, and warehousing services for humanitarian and field-based projects.",
      },
      { property: "og:title", content: "Services — NRM Supply" },
      {
        property: "og:description",
        content:
          "Cleaning, contracting, and warehousing services for humanitarian and field-based projects.",
      },
      { name: "twitter:title", content: "Services — NRM Supply" },
      {
        name: "twitter:description",
        content:
          "Cleaning, contracting, and warehousing services for humanitarian and field-based projects.",
      },
      { property: "og:url", content: "https://relief-ready-kit.vercel.app/services" },
    ],
  }),
  component: Services,
});

function Services() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const openQuote = (categorySlug: string = "") => {
    setSelectedCategory(categorySlug);
    setIsQuoteOpen(true);
  };

  return (
    <SiteLayout>
      {/* Hero Header with Background Image */}
      <section className="relative h-[85vh] w-full mb-10 overflow-hidden bg-zinc-950 min-h-[400px] flex items-center border-b border-border">
        {/* Background Image & Gradient overlay */}
        <img
          src={servicesBg}
          alt="Operational Field Services"
          className="absolute inset-0 h-full w-full object-cover z-0 object-center transition-all duration-300"
          style={{ imageRendering: "-webkit-optimize-contrast" }}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30 lg:to-transparent z-10" />

        {/* Overlaid Content Container */}
        <div className="relative z-20 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-24 text-white">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-primary-foreground backdrop-blur border border-white/10">
            Capabilities
          </span>
          <h1 className="mt-4 text-4xl font-semibold md:text-5xl lg:text-6xl font-display text-white">
            Operational Field Services
          </h1>
          <p className="mt-6 max-w-3xl text-lg md:text-xl text-zinc-300 leading-relaxed font-light">
            NRM Supply complements physical supplies with professional, field-proven operational
            services to support base camps, emergency shelters, and logistics centers worldwide.
          </p>

          {/* Quick Nav Anchors */}
          <div className="flex flex-wrap gap-2 mt-10 border-t border-white/10 pt-6">
            {services.map((s) => {
              const Icon = icons[s.slug as keyof typeof icons] || Info;
              return (
                <a
                  key={s.slug}
                  href={`#${s.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold hover:border-primary hover:bg-white/20 transition-all duration-300 text-white"
                >
                  <Icon className="h-4 w-4" />
                  {s.name}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 space-y-16">
        {services.map((s) => {
          const Icon = icons[s.slug as keyof typeof icons] || Info;
          const detail = servicesDetail[s.slug as keyof typeof servicesDetail];

          if (!detail) return null;

          return (
            <article
              key={s.slug}
              id={s.slug}
              className="scroll-mt-24 overflow-hidden rounded-3xl border border-border/80 bg-card p-6 sm:p-8 lg:p-12 transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Header block with Title & Icon */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 border-b border-border/50 pb-6 mb-8">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary shrink-0">
                  <Icon className="h-7 w-7" />
                </span>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
                    {detail.title}
                  </h2>
                  <p className="text-sm font-semibold text-primary mt-1">{detail.subtitle}</p>
                </div>
              </div>

              {/* Grid block layout: Capabilities & CTAs on the left, descriptions on the right */}
              <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
                {/* Left Side: Capabilities & CTA Buttons */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80 mb-4 flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-primary" /> Key Capabilities
                    </h3>

                    <ul className="space-y-3">
                      {detail.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-3 text-sm text-foreground/90">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button onClick={() => openQuote(s.slug)} size="lg">
                      Request Service Quote
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link to="/contact">Ask a question</Link>
                    </Button>
                  </div>
                </div>

                {/* Right Side: Descriptions */}
                <div className="space-y-6">
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {detail.description}
                  </p>
                  {detail.description2 && (
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {detail.description2}
                    </p>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* Quote Dialog Modal */}
      <Dialog open={isQuoteOpen} onOpenChange={setIsQuoteOpen}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-border bg-card p-6 sm:p-8">
          <DialogHeader className="border-b border-border/50 pb-4 mb-4">
            <DialogTitle className="text-2xl font-bold font-display text-foreground">
              Request a Quote
            </DialogTitle>
            <DialogDescription className="text-muted-foreground mt-1.5">
              Share your requirements and our team will prepare a tailored quotation.
            </DialogDescription>
          </DialogHeader>
          <QuoteForm defaultCategory={selectedCategory} />
        </DialogContent>
      </Dialog>
    </SiteLayout>
  );
}
