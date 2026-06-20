import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { categories } from "@/lib/catalog";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { QuoteForm } from "@/components/QuoteForm";
import { Globe2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — NRM Supply" },
      {
        name: "description",
        content:
          "Browse our humanitarian product categories: food, hygiene, MHM, dignity, kitchen, school, relief, shelter, and solar items.",
      },
      { property: "og:title", content: "Products — NRM Supply" },
      {
        property: "og:description",
        content:
          "Humanitarian product catalog covering food, hygiene, shelter, and more.",
      },
    ],
  }),
  component: Products,
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

function Products() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const openQuote = (categorySlug: string = "") => {
    setSelectedCategory(categorySlug);
    setIsQuoteOpen(true);
  };

  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <span className="tag-pill">Catalog</span>
        <h1 className="mt-4 text-4xl font-semibold md:text-5xl font-display">Products</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Explore our range of essential relief items and humanitarian supplies. Request a quotation 
          for any combination of goods and custom configurations.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
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
                id={c.slug}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${style.span || "lg:col-span-1"} ${style.border} ${style.glow} scroll-mt-24`}
              >
                {/* Glowing background hint on hover */}
                <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br from-transparent via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${style.bg}`} />

                <div className="relative flex h-full flex-col justify-between">
                  <div>
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
                      <h2 className="font-display font-semibold transition-colors duration-300 group-hover:text-foreground text-xl md:text-2xl">
                        {c.name}
                      </h2>
                      <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                        {c.description}
                      </p>
                    </div>

                    {/* Item Previews as Pills */}
                    <div className="mt-6">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60 mb-2">
                        Included Items
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {c.items.map((item) => (
                          <span
                            key={item}
                            className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground/80 border border-border/40 transition-colors duration-300 group-hover:bg-background group-hover:text-foreground"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Specs if present */}
                    {c.specs && (
                      <div className="mt-5 rounded-xl bg-secondary/30 border border-border/30 p-4 text-xs">
                        <p className="font-semibold text-foreground/80 uppercase tracking-wider text-[9px] mb-2">Specifications</p>
                        <dl className="grid gap-1.5">
                          {c.specs.map((s) => (
                            <div key={s.label} className="grid grid-cols-[80px_1fr] gap-2">
                              <dt className="font-medium text-muted-foreground">{s.label}</dt>
                              <dd className="text-foreground/90 font-medium truncate">{s.value}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    )}
                  </div>

                  {/* Actions footer */}
                  <div className="mt-8 flex items-center justify-between gap-4 border-t border-border/50 pt-5">
                    <Button asChild variant="outline" size="sm">
                      <Link to="/contact">Ask a question</Link>
                    </Button>
                    <Button
                      size="sm"
                      variant={isFeatured ? "default" : "secondary"}
                      onClick={() => openQuote(c.slug)}
                    >
                      Request Quote
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
