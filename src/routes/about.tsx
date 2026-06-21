import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { Target, Compass, CheckCircle2, ShieldCheck, Heart, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — NRM Supply" },
      {
        name: "description",
        content:
          "NRM Supply delivers end-to-end supply chain, distribution, and relief solutions across Lebanon and the region, moving essential relief supplies and commercial goods alike.",
      },
      { property: "og:title", content: "About Us — NRM Supply" },
      {
        property: "og:description",
        content:
          "Built to perform under the most demanding conditions, we bring speed, quality, and accountability to every client we serve.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      {/* Hero Intro */}
      <section className="mx-auto max-w-4xl px-4 pt-12 pb-16 text-center sm:px-6 lg:px-8">
        <span className="tag-pill">Who We Are</span>
        <h1 className="mt-4 font-display text-4xl font-semibold md:text-5xl lg:text-6xl tracking-tight">
          NRM Supply
        </h1>
        <p className="mt-6 text-lg md:text-xl leading-relaxed text-muted-foreground font-light">
          Learn more about us and our capabilities. NRM Supply delivers end-to-end supply chain and distribution solutions across Lebanon and the region,
          moving essential relief supplies and commercial goods alike. Built to perform under the
          most demanding conditions, we bring that same speed, quality, and accountability to every client we serve.
        </p>
      </section>

      {/* Mission & Vision cards */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Mission Card */}
          <div className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Target className="h-6 w-6" />
              </span>
              <h2 className="font-display text-2xl font-semibold">Our Mission</h2>
            </div>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              We deliver end-to-end supply chain and distribution solutions across Lebanon and the region,
              moving essential relief supplies and commercial goods alike. Built to perform under the
              most demanding conditions, we bring that same speed, quality, and accountability to every
              client we serve.
            </p>
          </div>

          {/* Vision Card */}
          <div className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Compass className="h-6 w-6" />
              </span>
              <h2 className="font-display text-2xl font-semibold">Our Vision</h2>
            </div>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              To provide the essential supply chain solutions that empower every organization working
              to reach people, whether responding to a crisis or serving an everyday market. We exist
              to ensure that goods move further, faster, and reach the lives and communities that depend on them.
            </p>
          </div>
        </div>

        {/* What We Provide Grid */}
        <div className="mt-16 rounded-3xl bg-secondary/30 border border-border/60 p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1.8fr]">
            {/* Left side info */}
            <div>
              <span className="tag-pill">Capabilities</span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                What We Provide
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                At NRM Supply, we offer a comprehensive range of essential goods and end-to-end
                operational services designed to meet the demands of humanitarian response,
                institutional operations, and commercial logistics alike.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link to="/quote">Request a Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>

            {/* Right side detailed list/columns */}
            <div className="space-y-8">
              {/* Product Portfolio */}
              <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80 flex items-center gap-2 mb-4">
                  <ShieldCheck className="h-4.5 w-4.5 text-primary" /> Product Portfolio
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Sourced and supplied to the quality standards required by international organizations and UN agencies.
                </p>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {[
                    "Food kits",
                    "Hygiene and dignity kits",
                    "Relief and shelter items",
                    "Bedding",
                    "Kitchen sets",
                    "Tarpaulins & tents",
                    "Solar energy solutions",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-foreground/90 font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Operational Services */}
              <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80 flex items-center gap-2 mb-4">
                  <Heart className="h-4.5 w-4.5 text-accent" /> Operational Services
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Ensuring that every step of the supply chain is covered under one reliable partner.
                </p>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    "Fully managed warehousing",
                    "Professional cleaning",
                    "Contracting services",
                  ].map((service) => (
                    <div key={service} className="flex flex-col justify-between border border-border/40 rounded-xl p-3 bg-secondary/10 hover:bg-secondary/20 transition-colors duration-200">
                      <span className="text-xs font-semibold leading-normal text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Callout */}
          <div className="mt-12 pt-8 border-t border-border/60 text-center">
            <p className="text-base font-medium text-foreground italic max-w-4xl mx-auto leading-relaxed">
              "Whether you are responding to a crisis, running a large-scale operation, or managing everyday business needs, NRM Supply delivers with the speed, precision, and accountability your mission demands."
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
