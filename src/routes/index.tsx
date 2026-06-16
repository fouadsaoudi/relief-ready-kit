import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Truck, Globe2, CheckCircle2 } from "lucide-react";
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
  const featured = categories[0];
  const rest = categories.slice(1);

  return (
    <SiteLayout>
      {/* Magazine masthead */}
      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.22em] text-muted-foreground">
          <span>Issue 01 · Field Edition</span>
          <span className="hidden sm:inline">Humanitarian Supply Quarterly</span>
          <span>Est. ReliefSupply</span>
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
              ReliefSupply equips NGOs, charities, and emergency teams with
              dependable products and operational support — anywhere, on any
              timeline.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/quote">
                  Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
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

        <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
          {services.map((s, i) => (
            <article key={s.slug} className="group">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {String(i + 1).padStart(2, "0")} · Service
              </div>
              <h3 className="mt-3 font-display text-2xl font-semibold leading-snug">{s.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              <Link
                to="/services"
                className="mt-5 inline-flex items-center text-sm font-semibold text-primary"
              >
                Read more <ArrowRight className="ml-1 h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Products — refined editorial grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:flex-wrap sm:items-end sm:justify-between">
          <div className="min-w-0">
            <span className="tag-pill">Catalog</span>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Product Categories</h2>
          </div>
          <Button asChild variant="outline" className="shrink-0">
            <Link to="/products">View all products</Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          {/* Featured */}
          {featured ? (
            <article className="feature-card lg:col-span-5">
              <div className="flex h-full flex-col p-7 md:p-10">
                <span className="grid h-14 w-14 place-items-center rounded-xl bg-accent/15 text-accent">
                  <featured.icon className="h-7 w-7" />
                </span>
                <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Featured category
                </p>
                <h3 className="mt-3 font-display text-3xl font-semibold md:text-4xl">{featured.name}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {featured.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-3 pt-10">
                  <Button asChild size="sm" variant="secondary">
                    <Link to="/products" hash={featured.slug}>View Details</Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link to="/quote" search={{ category: featured.slug }}>Request Quote</Link>
                  </Button>
                </div>
              </div>
            </article>
          ) : null}

          {/* Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {rest.map((c) => {
              const Icon = c.icon;
              return (
                <article key={c.slug} className="feature-card flex flex-col p-5 md:p-6">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/12 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold">{c.name}</h3>
                  <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{c.description}</p>
                  <div className="mt-auto flex items-center justify-between gap-2 pt-6">
                    <Link
                      to="/products"
                      hash={c.slug}
                      className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
                    >
                      Details
                    </Link>
                    <Button asChild size="sm">
                      <Link to="/quote" search={{ category: c.slug }}>Quote</Link>
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
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
