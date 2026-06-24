import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Truck, Globe2, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { services, categories } from "@/lib/catalog";
import heroBg from "@/assets/hero_background.png";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
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
          "Reliable relief supplies, custom kit assembly, and B2B bulk sourcing services for humanitarian organizations and corporate clients.",
      },
      { name: "twitter:title", content: "NRM Supply — Relief Supplies & B2B Bulk Sourcing" },
      {
        name: "twitter:description",
        content:
          "Reliable relief supplies, custom kit assembly, and B2B bulk sourcing services for humanitarian organizations and corporate clients.",
      },
      { property: "og:url", content: "https://relief-ready-kit.vercel.app/" },
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
      {/* Hero — wide background image spread edge-to-edge */}
      <section className="relative w-full overflow-hidden bg-zinc-950 min-h-[580px] lg:min-h-[640px] flex items-center border-b border-border">
        {/* Background Image & Gradient overlay */}
        <img
          src={heroBg}
          alt="Logistics Sourcing Operations"
          className="absolute inset-0 h-full w-full object-cover z-0 object-center transition-all duration-300"
          style={{ imageRendering: "-webkit-optimize-contrast" }}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30 lg:to-transparent z-10" />

        {/* Overlaid Content Container aligned with page layout */}
        <div className="relative z-20 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-24 text-white">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-primary-foreground backdrop-blur border border-white/10">
              The Cover Story
            </span>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.02] md:text-6xl lg:text-7xl text-white">
              Your Partner for every <span className="text-primary">Mission</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300 font-light">
              Supporting humanitarian, development, and commercial operations with reliable supplies
              and operational services across Lebanon and the region.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                size="lg"
                onClick={() => openQuote("")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-semibold"
              >
                Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border border-white/20 text-white bg-transparent hover:bg-white/10 hover:text-white transition-all font-semibold"
              >
                <Link to="/products">Explore Products</Link>
              </Button>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {[
                { k: "9+", v: "Categories" },
                { k: "Global", v: "Delivery" },
                { k: "24/7", v: "Quotes" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-3xl font-semibold text-white">{s.k}</dt>
                  <dd className="mt-1 text-[10px] uppercase tracking-widest text-zinc-400 font-medium">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Trust strip overlaid slightly on the hero */}
      <section className="relative z-30 mx-auto max-w-7xl px-4 pb-20 -mt-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              t: "Quality Assured",
              d: "Specs aligned with humanitarian & corporate standards.",
            },
            {
              icon: Truck,
              t: "Timely Delivery",
              d: "Reliable logistics for emergency & supply chain timelines.",
            },
            {
              icon: Globe2,
              t: "Global Reach",
              d: "Support across field operations & commercial supply chains.",
            },
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
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Core Products</h2>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-primary/20 hover:bg-primary/5 hover:text-primary"
          >
            <Link to="/products">
              View Full Catalog <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {categories.slice(0, 4).map((c) => {
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

          {/* "+ More" Link Card */}
          {categories.length > 4 && (
            <Link
              to="/products"
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-dashed border-border bg-muted/20 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40 hover:bg-card"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex-1 flex flex-col justify-center items-center text-center py-4">
                <span className="text-4xl font-extrabold tracking-tighter text-primary/70 mb-2 group-hover:scale-110 transition-transform duration-300">
                  +{categories.length - 4}
                </span>
                <h3 className="font-display text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  More Categories
                </h3>
                <p className="mt-1 text-[11px] text-muted-foreground max-w-[150px] leading-relaxed">
                  Explore shelter items, solar products, and more.
                </p>
              </div>

              <div className="relative mt-4 flex items-center justify-between border-t border-border/40 pt-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60">
                  View Full Catalog
                </span>
                <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/45 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
              </div>
            </Link>
          )}
        </div>
      </section>

      {/* Services — editorial with background color */}
      <section className="w-full bg-secondary/30 border-y border-border/50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-border/60 pb-6">
            <div className="max-w-2xl">
              <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl text-foreground">
                Field Services
              </h2>
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
                    className="inline-flex items-center text-xs font-bold tracking-widest text-primary group-hover:text-accent transition-colors duration-300"
                  >
                    Explore Service
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve — editorial spread */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 border-y border-border py-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="tag-pill">Partners</span>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Who we serve</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground font-light">
              We provide organizations, operations, and procurement teams with dependable bulk
              supply, ready-assembled kits, and logistical field support.
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
              <li
                key={x}
                className="flex items-center gap-2 border-b border-border/60 py-2 text-sm"
              >
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
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-navy px-8 py-14 text-white md:px-14 border border-navy/20">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />
            <div className="relative flex flex-wrap items-center justify-between gap-6">
              <div className="max-w-xl">
                <h2 className="font-display text-3xl font-semibold md:text-4xl text-white">
                  Plan your next shipment with us
                </h2>
                <p className="mt-3 text-zinc-100">
                  Share your needs and we'll prepare a tailored quotation — no commitments.
                </p>
              </div>
              <Button
                size="lg"
                onClick={() => openQuote("")}
                className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-sm transition-all duration-200"
              >
                Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

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
