import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Truck, Globe2, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { categories, services } from "@/lib/catalog";
import heroImg from "@/assets/hero.png";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { QuoteForm } from "@/components/QuoteForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NRM Supply — Humanitarian Products & Field Services" },
      {
        name: "description",
        content:
          "Reliable humanitarian supplies and operational services for NGOs, charities, and emergency-response programs.",
      },
      { property: "og:title", content: "NRM Supply — Humanitarian Products & Field Services" },
      {
        property: "og:description",
        content:
          "Essential relief supplies and field services for humanitarian organizations worldwide.",
      },
    ],
  }),
  component: Home,
});

const categoryStyles: Record<string, {
  accent: string;
  bg: string;
  border: string;
  glow: string;
  iconBg: string;
  iconColor: string;
  span?: string;
}> = {
  "food-items": {
    accent: "text-amber-600 dark:text-amber-400",
    bg: "group-hover:bg-amber-500/5",
    border: "hover:border-amber-500/40",
    glow: "shadow-amber-500/5 hover:shadow-amber-500/10",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-600",
    span: "lg:col-span-2 md:col-span-2",
  },
  "hygiene-kits": {
    accent: "text-teal-600 dark:text-teal-400",
    bg: "group-hover:bg-teal-500/5",
    border: "hover:border-teal-500/40",
    glow: "shadow-teal-500/5 hover:shadow-teal-500/10",
    iconBg: "bg-teal-500/10",
    iconColor: "text-teal-600",
    span: "lg:col-span-1",
  },
  "mhm-kits": {
    accent: "text-rose-600 dark:text-rose-400",
    bg: "group-hover:bg-rose-500/5",
    border: "hover:border-rose-500/40",
    glow: "shadow-rose-500/5 hover:shadow-rose-500/10",
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-600",
    span: "lg:col-span-1",
  },
  "dignity-kits": {
    accent: "text-violet-600 dark:text-violet-400",
    bg: "group-hover:bg-violet-500/5",
    border: "hover:border-violet-500/40",
    glow: "shadow-violet-500/5 hover:shadow-violet-500/10",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-600",
    span: "lg:col-span-1",
  },
  "kitchen-sets": {
    accent: "text-emerald-600 dark:text-emerald-400",
    bg: "group-hover:bg-emerald-500/5",
    border: "hover:border-emerald-500/40",
    glow: "shadow-emerald-500/5 hover:shadow-emerald-500/10",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600",
    span: "lg:col-span-1",
  },
  "school-kits": {
    accent: "text-indigo-600 dark:text-indigo-400",
    bg: "group-hover:bg-indigo-500/5",
    border: "hover:border-indigo-500/40",
    glow: "shadow-indigo-500/5 hover:shadow-indigo-500/10",
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-600",
    span: "lg:col-span-1",
  },
  "relief-items": {
    accent: "text-blue-600 dark:text-blue-400",
    bg: "group-hover:bg-blue-500/5",
    border: "hover:border-blue-500/40",
    glow: "shadow-blue-500/5 hover:shadow-blue-500/10",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600",
    span: "lg:col-span-1",
  },
  "shelter-items": {
    accent: "text-sky-600 dark:text-sky-400",
    bg: "group-hover:bg-sky-500/5",
    border: "hover:border-sky-500/40",
    glow: "shadow-sky-500/5 hover:shadow-sky-500/10",
    iconBg: "bg-sky-500/10",
    iconColor: "text-sky-600",
    span: "lg:col-span-1 md:col-span-1",
  },
  "solar-products": {
    accent: "text-orange-600 dark:text-orange-400",
    bg: "group-hover:bg-orange-500/5",
    border: "hover:border-orange-500/40",
    glow: "shadow-orange-500/5 hover:shadow-orange-500/10",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-600",
    span: "lg:col-span-1",
  },
};

function Home() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const openQuote = (categorySlug: string = "") => {
    setSelectedCategory(categorySlug);
    setIsQuoteOpen(true);
  };

  return (
    <SiteLayout>
      {/* Magazine masthead */}
      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.22em] text-muted-foreground">
          <span>Issue 01 · Field Edition</span>
          <span className="hidden sm:inline">Humanitarian Supply Quarterly</span>
          <span>Est. NRM Supply</span>
        </div>
        <div className="editorial-rule mt-4" />
      </section>

      {/* Hero — editorial asymmetric */}
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <span className="tag-pill">The Cover Story</span>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.02] md:text-6xl lg:text-7xl">
              Relief supplies, made for the <em className="not-italic text-primary">frontline</em>.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              NRM Supply equips NGOs, charities, and emergency teams with
              dependable products and operational support — anywhere, on any
              timeline.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" onClick={() => openQuote("")}>
                Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button asChild size="lg" variant="outline">
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
            { icon: ShieldCheck, t: "Quality assured", d: "Specs aligned with humanitarian standards." },
            { icon: Truck, t: "Timely delivery", d: "Reliable logistics for emergency timelines." },
            { icon: Globe2, t: "Global reach", d: "Support across field operations worldwide." },
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

      {/* Products — Bento Grid showcase */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:flex-wrap sm:items-end sm:justify-between border-b border-border/60 pb-6 mb-10">
          <div className="min-w-0">
            <span className="tag-pill">Catalog</span>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Product Categories</h2>
          </div>
          <Button asChild variant="outline" className="shrink-0">
            <Link to="/products">View all products</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c) => {
            const Icon = c.icon;
            const style = categoryStyles[c.slug] || {
              accent: "text-primary",
              bg: "group-hover:bg-primary/5",
              border: "hover:border-primary/40",
              glow: "shadow-primary/5 hover:shadow-primary/10",
              iconBg: "bg-primary/10",
              iconColor: "text-primary",
              span: "lg:col-span-1",
            };
            const isFeatured = c.slug === "food-items";

            return (
              <article
                key={c.slug}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${style.span || "lg:col-span-1"} ${style.border} ${style.glow}`}
              >
                {/* Glowing background hint on hover */}
                <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br from-transparent via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${style.bg}`} />

                <div className="relative flex h-full flex-col">
                  {/* Top row: Icon and badge */}
                  <div className="flex items-start justify-between">
                    <span className={`grid h-12 w-12 place-items-center rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${style.iconBg} ${style.iconColor}`}>
                      <Icon className="h-6 w-6" />
                    </span>
                    {isFeatured && (
                      <span className="inline-flex items-center rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-semibold text-amber-700 dark:text-amber-400">
                        Featured Category
                      </span>
                    )}
                  </div>

                  {/* Body info */}
                  <div className="mt-6">
                    <h3 className={`font-display font-semibold transition-colors duration-300 group-hover:text-foreground ${isFeatured ? "text-2xl md:text-3xl" : "text-lg"}`}>
                      {c.name}
                    </h3>
                    <p className={`mt-3 text-muted-foreground leading-relaxed ${isFeatured ? "text-base" : "line-clamp-3 text-sm"}`}>
                      {c.description}
                    </p>
                  </div>

                  {/* Item Previews as Pills */}
                  <div className="mt-6">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60 mb-2">
                      Key Items
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {c.items.slice(0, isFeatured ? 5 : 3).map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground/80 border border-border/40 transition-colors duration-300 group-hover:bg-background group-hover:text-foreground"
                        >
                          {item}
                        </span>
                      ))}
                      {c.items.length > (isFeatured ? 5 : 3) && (
                        <span className="inline-flex items-center rounded-md px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground/50">
                          +{c.items.length - (isFeatured ? 5 : 3)} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions footer */}
                  <div className={`mt-auto flex items-center justify-between gap-4 border-t border-border/50 pt-5 ${isFeatured ? "mt-10" : "mt-6"}`}>
                    <Link
                      to="/products"
                      hash={c.slug}
                      className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors group/link"
                    >
                      Details
                      <ArrowRight className="ml-1 h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
                    </Link>
                    <Button
                      size="sm"
                      variant={isFeatured ? "default" : "secondary"}
                      onClick={() => openQuote(c.slug)}
                    >
                      {isFeatured ? "Request Quote" : "Quote"}
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}

          {/* Custom Sourcing Card */}
          <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-dashed border-border/80 bg-muted/30 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:bg-card hover:shadow-xl hover:shadow-primary/5 md:col-span-1 lg:col-span-2">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative flex h-full flex-col justify-between md:flex-row md:items-center md:gap-8 lg:gap-12">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Globe2 className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    Custom Sourcing
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-xl">
                    Need specific products or custom kits not listed in our standard catalog? Our global sourcing network operates across international guidelines to procure and deliver what your program requires.
                  </p>
                </div>
              </div>
              <div className="mt-6 shrink-0 md:mt-0">
                <Button
                  variant="outline"
                  className="w-full md:w-auto border-primary/30 hover:border-primary hover:bg-primary/5 hover:text-primary"
                  onClick={() => openQuote("custom")}
                >
                  Inquire Custom Sourcing
                </Button>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Who we serve — editorial spread */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 border-y border-border py-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="tag-pill">Partners</span>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Who we serve</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              We support organizations responding to emergencies, displacement,
              and long-term recovery — with the right items, at the right time.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 md:col-span-7">
            {[
              "NGOs",
              "Humanitarian organizations",
              "Charities",
              "Emergency response teams",
              "Development programs",
              "Field operations",
              "Community initiatives",
              "UN partners",
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
                  Plan your next relief shipment with us
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
