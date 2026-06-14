import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { Sparkles, Hammer, Warehouse, ArrowRight } from "lucide-react";
import { services } from "@/lib/catalog";

const icons = { cleaning: Sparkles, contracting: Hammer, warehousing: Warehouse } as const;

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — ReliefSupply" },
      {
        name: "description",
        content:
          "Cleaning, contracting, and warehousing services for humanitarian and field-based projects.",
      },
      { property: "og:title", content: "Services — ReliefSupply" },
      {
        property: "og:description",
        content:
          "Operational support services for facilities, sites, and relief logistics.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <span className="text-sm font-medium text-primary">Services</span>
        <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
          Practical field services for humanitarian work
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          We complement our supplies with operational services that keep field sites
          running smoothly.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => {
            const Icon = icons[s.slug as keyof typeof icons];
            return (
              <div
                key={s.slug}
                className="flex flex-col rounded-2xl border border-border bg-card p-7"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-accent-foreground">
                  <Icon className="h-6 w-6" />
                </span>
                <h2 className="mt-5 text-xl font-semibold">{s.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
                <Button asChild className="mt-6 self-start" size="sm">
                  <Link to="/quote" search={{ category: s.slug }}>
                    Request a Quote <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}
