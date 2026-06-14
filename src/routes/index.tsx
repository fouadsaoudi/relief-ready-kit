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
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24 lg:px-8">
          <div>
            <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
              Trusted humanitarian supplier
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
              Reliable Humanitarian Products & Field Services
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              We provide essential relief supplies and operational services for
              humanitarian organizations, NGOs, and emergency-response programs.
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

            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8 text-sm">
              {[
                { k: "9+", v: "Product categories" },
                { k: "3", v: "Field services" },
                { k: "Global", v: "Delivery reach" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-2xl font-semibold text-primary">
                    {s.k}
                  </dt>
                  <dd className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-accent/40 blur-2xl" />
            <img
              src={heroImg}
              alt="Humanitarian relief supplies and equipment"
              className="aspect-[5/4] w-full rounded-3xl object-cover shadow-xl ring-1 ring-border"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[
            { icon: ShieldCheck, t: "Quality assured", d: "Specifications aligned with humanitarian standards." },
            { icon: Truck, t: "Timely delivery", d: "Reliable logistics for emergency timelines." },
            { icon: Globe2, t: "Global reach", d: "Support across field operations worldwide." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <div>
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
          <h2 className="text-3xl font-semibold md:text-4xl">Field Services</h2>
          <p className="mt-3 text-muted-foreground">
            Practical operational support that complements our supply work in the field.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.slug}
              className="group rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="h-1.5 w-10 rounded-full bg-primary" />
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

      {/* Products */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold md:text-4xl">Product Categories</h2>
              <p className="mt-3 text-muted-foreground">
                Browse our core relief categories. Request a quote for any combination
                of items.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/products">View all products</Link>
            </Button>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.slice(0, 6).map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.slug}
                  className="flex flex-col rounded-2xl border border-border bg-card p-6"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-accent-foreground">
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
        <div className="grid items-start gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Who we serve</h2>
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
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-primary px-8 py-14 text-primary-foreground md:px-14">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="max-w-xl">
                <h2 className="text-3xl font-semibold md:text-4xl">
                  Plan your next relief shipment with us
                </h2>
                <p className="mt-3 text-primary-foreground/80">
                  Share your needs and we'll prepare a tailored quotation — no
                  commitments.
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
