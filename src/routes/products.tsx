import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { categories } from "@/lib/catalog";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — ReliefSupply" },
      {
        name: "description",
        content:
          "Browse our humanitarian product categories: food, hygiene, MHM, dignity, kitchen, school, relief, shelter, and solar items.",
      },
      { property: "og:title", content: "Products — ReliefSupply" },
      {
        property: "og:description",
        content:
          "Humanitarian product catalog covering food, hygiene, shelter, and more.",
      },
    ],
  }),
  component: Products,
});

function Products() {
  const [active, setActive] = useState<string>("all");
  const list = active === "all" ? categories : categories.filter((c) => c.slug === active);

  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <span className="text-sm font-medium text-primary">Catalog</span>
        <h1 className="mt-3 text-4xl font-semibold md:text-5xl">Products</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Explore our humanitarian product categories. Request a quotation for any
          combination of items and quantities.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          <FilterChip label="All" active={active === "all"} onClick={() => setActive("all")} />
          {categories.map((c) => (
            <FilterChip
              key={c.slug}
              label={c.name}
              active={active === c.slug}
              onClick={() => setActive(c.slug)}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-10 px-4 pb-20 sm:px-6 lg:px-8">
        {list.map((c) => {
          const Icon = c.icon;
          return (
            <article
              key={c.slug}
              id={c.slug}
              className="scroll-mt-24 overflow-hidden rounded-3xl border border-border bg-card"
            >
              <div className="grid gap-8 p-8 md:grid-cols-[1fr_2fr] md:p-10">
                <div>
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent text-accent-foreground">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h2 className="mt-5 text-2xl font-semibold">{c.name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {c.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <Button asChild size="sm">
                      <Link to="/quote" search={{ category: c.slug }}>Request Quote</Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link to="/contact">Ask a question</Link>
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Items included
                  </h3>
                  <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                    {c.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {c.specs && (
                    <div className="mt-6 rounded-2xl bg-secondary/50 p-5">
                      <h4 className="text-sm font-semibold">Specifications</h4>
                      <dl className="mt-3 grid gap-2 text-sm">
                        {c.specs.map((s) => (
                          <div key={s.label} className="grid grid-cols-[minmax(0,1fr)_2fr] gap-3">
                            <dt className="font-medium">{s.label}</dt>
                            <dd className="text-muted-foreground">{s.value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </SiteLayout>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-1.5 text-sm transition ${
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-card text-foreground/80 hover:bg-secondary"
      }`}
    >
      {label}
    </button>
  );
}
