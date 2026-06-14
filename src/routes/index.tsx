import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Truck, Globe2, CheckCircle2, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { categories, services } from "@/lib/catalog";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ReliefSupply — Humanitarian Products & Field Services" },
      {
        name: "description",
        content:
          "Reliable humanitarian supplies and operational services for NGOs, charities, and emergency-response programs.",
      },
      { property: "og:title", content: "ReliefSupply — Humanitarian Products & Field Services" },
      {
        property: "og:description",
        content:
          "Essential relief supplies and field services for humanitarian organizations worldwide.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      {/* Hero bento */}
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-12 sm:px-6 md:pt-20 lg:px-8">
        <div className="grid auto-rows-[minmax(0,1fr)] gap-4 md:grid-cols-6 md:grid-rows-[auto_auto]">
          {/* Headline tile */}
          <div className="bento-card col-span-1 p-7 md:col-span-4 md:row-span-1 md:p-10">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-2/60 px-3 py-1 text-xs font-medium text-foreground/80">
              <Sparkles className="h-3 w-3 text-primary" />
              Trusted humanitarian supplier
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] md:text-5xl lg:text-6xl">
              Relief supplies & field services{" "}
              <span className="bg-gradient-to-r from-primary to-glow bg-clip-text text-transparent">
                built for the frontline.
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              We equip NGOs, charities, and emergency teams with dependable
              products and operational support — anywhere, on any timeline.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/quote">
                  Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/products">Explore Products</Link>
              </Button>
            </div>
          </div>

          {/* Hero image tile */}
          <div className="bento-card relative col-span-1 min-h-[260px] md:col-span-2 md:row-span-2">
            <img
              src={heroImg}
              alt="Humanitarian relief supplies"
              className="absolute inset-0 h-full w-full object-cover opacity-90"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-foreground/70">
                Global reach
              </p>
              <p className="mt-1 font-display text-2xl font-semibold">
                Field-ready logistics
              </p>
            </div>
          </div>

          {/* Stat tiles */}
          {[
            { k: "9+", v: "Product categories" },
            { k: "3", v: "Field services" },
            { k: "Global", v: "Delivery reach" },
            { k: "24/7", v: "Quote support" },
          ].map((s) => (
            <div key={s.v} className="bento-card p-5 md:col-span-1">
              <div className="font-display text-3xl font-semibold text-primary">
                {s.k}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust strip */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: ShieldCheck, t: "Quality assured", d: "Specs aligned with humanitarian standards." },
            { icon: Truck, t: "Timely delivery", d: "Reliable logistics for emergency timelines." },
            { icon: Globe2, t: "Global reach", d: "Support across field operations worldwide." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="bento-card flex items-start gap-4 p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
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

      {/* Services */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">What we do</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Field Services</h2>
          <p className="mt-3 text-muted-foreground">
            Practical operational support that complements our supply work in the field.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.slug} className="bento-card group p-7">
              <div className="h-1.5 w-10 rounded-full bg-gradient-to-r from-primary to-glow" />
              <h3 className="mt-5 text-xl font-semibold">{s.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
              <Link
                to="/services"
                className="mt-6 inline-flex items-center text-sm font-medium text-primary"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Products bento */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.2em] text-primary">Catalog</p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Product Categories</h2>
              <p className="mt-3 text-muted-foreground">
                Browse our core relief categories. Request a quote for any combination of items.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/products">View all products</Link>
            </Button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.slice(0, 6).map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.slug} className="bento-card flex flex-col p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{c.name}</h3>
                  <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                    {c.description}
                  </p>
                  <div className="mt-6 flex gap-2 pt-2">
                    <Button asChild size="sm" variant="secondary">
                      <Link to="/products" hash={c.slug}>View Details</Link>
                    </Button>
                    <Button asChild size="sm">
                      <Link to="/quote" search={{ category: c.slug }}>Request Quote</Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="bento-card grid items-start gap-12 p-8 md:grid-cols-2 md:p-12">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Partners</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Who we serve</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We support organizations responding to emergencies, displacement, and
              long-term recovery — with the right items, at the right time.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
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
              <li key={x} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {x}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="glow-ring relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-surface-2 px-8 py-14 text-primary-foreground md:px-14">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-glow/30 blur-3xl" />
            <div className="relative flex flex-wrap items-center justify-between gap-6">
              <div className="max-w-xl">
                <h2 className="text-3xl font-semibold md:text-4xl">
                  Plan your next relief shipment with us
                </h2>
                <p className="mt-3 text-primary-foreground/85">
                  Share your needs and we'll prepare a tailored quotation — no commitments.
                </p>
              </div>
              <Button asChild size="lg" variant="secondary">
                <Link to="/quote">
                  Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
