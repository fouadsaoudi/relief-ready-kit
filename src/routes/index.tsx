import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Truck, Globe2, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { services, categories } from "@/lib/catalog";
import heroImg from "@/assets/hero.png";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { QuoteForm } from "@/components/QuoteForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NRM Supply — Relief Supplies & B2B Bulk Sourcing" },
      {
        name: "description",
        content:
          "Reliable relief supplies, custom kit assembly, and B2B bulk sourcing services for humanitarian organizations and corporate clients.",
      },
      { property: "og:title", content: "NRM Supply — Relief Supplies & B2B Bulk Sourcing" },
      {
        property: "og:description",
        content:
          "Essential humanitarian supplies and B2B commercial procurement solutions worldwide.",
      },
    ],
  }),
  component: Home,
});


function Home() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const openQuote = (categorySlug: string = "") => {
    setSelectedCategory(categorySlug);
    setIsQuoteOpen(true);
  };

  return (
    <SiteLayout>
      {/* Hero — editorial asymmetric */}
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <span className="tag-pill">The Cover Story</span>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.02] md:text-6xl lg:text-7xl">
              Dependable bulk supplies & field services, built for <em className="not-italic text-primary">performance</em>.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              NRM Supply provides high-quality bulk supplies, custom kit assemblies, and end-to-end logistics to support your operations, anywhere, on any timeline.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" onClick={() => openQuote("")}>
                Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button asChild size="lg" variant="outline" className="border-0">
                <Link to="/products">Explore Products</Link>
              </Button>
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-6">
              {[
                { k: "9+", v: "Categories" },
                { k: "Global", v: "Delivery" },
                { k: "24/7", v: "Quotes" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-3xl font-semibold text-foreground">{s.k}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="md:col-span-5">
            <figure className="relative overflow-hidden rounded-xl border border-border">
              <img
                src={heroImg}
                alt="Humanitarian relief supplies"
                className="aspect-[4/5] w-full object-cover"
                loading="eager"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent p-5 text-xs uppercase tracking-[0.18em] text-background">
                Field operations · Global reach
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: ShieldCheck, t: "Quality assured", d: "Specs aligned with humanitarian & corporate standards." },
            { icon: Truck, t: "Timely delivery", d: "Reliable logistics for emergency & supply chain timelines." },
            { icon: Globe2, t: "Global reach", d: "Support across field operations & commercial supply chains." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="feature-card flex items-start gap-4 p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary/12 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="font-medium">{t}</p>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* Product Summary Showcase */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 bg-secondary/15 rounded-3xl border border-border/40 p-8 sm:p-10 mb-20 relative overflow-hidden">
        {/* Subtle decorative glows */}
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

        <div className="relative flex flex-wrap items-end justify-between gap-6 border-b border-border/50 pb-6 mb-10">
          <div className="max-w-2xl">
            <span className="tag-pill">Catalog Showcase</span>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
              Core Products
            </h2>
          </div>
          <Button asChild variant="outline" className="border-primary/20 hover:bg-primary/5 hover:text-primary">
            <Link to="/products">
              View Full Catalog <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((c) => {
            const Icon = c.icon;
            const kitCount = c.products ? c.products.length : 0;
            return (
              <Link
                key={c.slug}
                to="/products/$categoryId"
                params={{ categoryId: c.slug }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30"
              >
                <div>
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/8 text-primary transition-all duration-300 group-hover:scale-110">
                    <Icon className="h-5.5 w-5.5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {c.name}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {c.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60">
                    {kitCount > 0 ? `${kitCount} Specialized Kits` : "Custom Ranges"}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/45 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Services — editorial */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-border pb-6">
          <div className="max-w-2xl">
            <span className="tag-pill">In this issue</span>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Field Services</h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Practical operational support that complements our supply work — logistics,
            assessment, and program enablement.
          </p>
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
          {services.map((s, i) => (
            <article
              key={s.slug}
              className="group relative flex flex-col justify-between pl-6 py-2 transition-all duration-300"
            >
              {/* Vertical line indicator */}
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-border/60" />
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />

              <div className="transition-transform duration-300 group-hover:translate-x-2">
                <div className="font-display text-7xl font-extrabold tracking-tighter text-muted-foreground/15 select-none leading-none">
                  0{i + 1}
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold leading-tight text-foreground group-hover:text-primary transition-colors duration-300">
                  {s.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>

              <div className="mt-8 transition-transform duration-300 group-hover:translate-x-2">
                <Link
                  to="/services"
                  className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-primary group-hover:text-accent transition-colors duration-300"
                >
                  Explore Service
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>



      {/* Who we serve — editorial spread */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 border-y border-border py-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="tag-pill">Partners</span>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Who we serve</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground font-light">
              We provide organizations, operations, and procurement teams with dependable bulk supply, ready-assembled kits, and logistical field support.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 md:col-span-7">
            {[
              "NGOs & UN partners",
              "Corporate procurement teams",
              "Charities & foundations",
              "Wholesale commodity buyers",
              "Emergency response teams",
              "Private supply chain buyers",
              "Field operations & logistics",
              "Commercial construction developers",
            ].map((x) => (
              <li key={x} className="flex items-center gap-2 border-b border-border/60 py-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                {x}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary to-accent px-8 py-14 text-primary-foreground md:px-14">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-glow/40 blur-3xl" />
            <div className="relative flex flex-wrap items-center justify-between gap-6">
              <div className="max-w-xl">
                <h2 className="font-display text-3xl font-semibold md:text-4xl">
                  Plan your next shipment with us
                </h2>
                <p className="mt-3 text-primary-foreground/85">
                  Share your needs and we'll prepare a tailored quotation — no commitments.
                </p>
              </div>
              <Button size="lg" variant="secondary" onClick={() => openQuote("")}>
                Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={isQuoteOpen} onOpenChange={setIsQuoteOpen}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-border bg-card p-6 sm:p-8">
          <DialogHeader className="border-b border-border/50 pb-4 mb-4">
            <DialogTitle className="text-2xl font-bold font-display text-foreground">Request a Quote</DialogTitle>
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
