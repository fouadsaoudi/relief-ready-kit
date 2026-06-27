import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { categories } from "@/lib/catalog";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { QuoteForm } from "@/components/QuoteForm";
import { Globe2, ArrowRight } from "lucide-react";
import productsBg from "@/assets/products_hero.jpg";

export const Route = createFileRoute("/products/")({
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
          "Browse our humanitarian product categories: food, hygiene, MHM, dignity, kitchen, school, relief, shelter, and solar items.",
      },
      { name: "twitter:title", content: "Products — NRM Supply" },
      {
        name: "twitter:description",
        content:
          "Browse our humanitarian product categories: food, hygiene, MHM, dignity, kitchen, school, relief, shelter, and solar items.",
      },
      { property: "og:url", content: "https://relief-ready-kit.vercel.app/products" },
    ],
  }),
  component: Products,
});

const categoryStyles: Record<
  string,
  {
    accent: string;
    bg: string;
    border: string;
    glow: string;
    iconBg: string;
    iconColor: string;
    span?: string;
  }
> = {
  "food-items": {
    accent: "text-amber-600 dark:text-amber-400",
    bg: "group-hover:bg-amber-500/5",
    border: "hover:border-amber-500/40",
    glow: "shadow-amber-500/5 hover:shadow-amber-500/10",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-600",
    span: "lg:col-span-1",
  },
  "wash-kits": {
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
  "relief-kits": {
    accent: "text-blue-600 dark:text-blue-400",
    bg: "group-hover:bg-blue-500/5",
    border: "hover:border-blue-500/40",
    glow: "shadow-blue-500/5 hover:shadow-blue-500/10",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600",
    span: "lg:col-span-1",
  },
  "bedding-items": {
    accent: "text-indigo-600 dark:text-indigo-400",
    bg: "group-hover:bg-indigo-500/5",
    border: "hover:border-indigo-500/40",
    glow: "shadow-indigo-500/5 hover:shadow-indigo-500/10",
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-600",
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
  const [selectedCategory, setSelectedCategory] = useState<string>("general");

  const openQuote = (categorySlug: string = "general") => {
    setSelectedCategory(categorySlug);
    setIsQuoteOpen(true);
  };

  return (
    <SiteLayout>
      {/* Hero Header with Background Image */}
      <section className="relative  h-[85vh] w-full mb-10 overflow-hidden bg-zinc-950 min-h-[450px] flex items-center border-b border-border">
        {/* Background Image & Gradient overlay */}
        <img
          src={productsBg}
          alt="Our Products Sourcing"
          className="absolute inset-0 h-full w-full object-cover z-0 object-center transition-all duration-300"
          style={{ imageRendering: "-webkit-optimize-contrast" }}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35 lg:to-transparent z-10" />

        {/* Overlaid Content Container */}
        <div className="relative z-20 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-24 text-white">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-primary-foreground backdrop-blur border border-white/10">
            Catalog
          </span>
          <h1 className="mt-4 text-4xl font-semibold md:text-5xl lg:text-6xl font-display text-white">
            Our Products
          </h1>
          <p className="mt-6 max-w-3xl text-lg md:text-xl text-zinc-300 leading-relaxed font-light">
            Explore NRM Supply's catalog of high-quality products, essential bulk supplies, and
            custom configurations. Click on any category below to view specific items and technical
            specifications.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
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
                  Need specific products or custom configurations not listed in our standard
                  catalog? Our global sourcing network can procure and deliver what your operation
                  requires.
                </p>
              </div>
            </div>
            <div className="mt-6 shrink-0 md:mt-0">
              <Button
                variant="outline"
                className="w-full md:w-auto border-primary/30 hover:border-primary hover:bg-primary/5 hover:text-primary"
                onClick={() => openQuote("custom")}
              >
                Inquire Sourcing
              </Button>
            </div>
          </div>
        </article>
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
                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${style.span || "lg:col-span-1"} ${style.border} ${style.glow}`}
              >
                {/* Overlay link for clicking the entire card */}
                <Link
                  to="/products/$categoryId"
                  params={{ categoryId: c.slug }}
                  className="absolute inset-0 z-10"
                  aria-label={`View ${c.name} category`}
                />

                {/* Glowing background hint on hover */}
                <div
                  className={`absolute -inset-px rounded-2xl bg-gradient-to-br from-transparent via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${style.bg}`}
                />

                <div className="relative flex h-full flex-col justify-between">
                  <div>
                    {/* Top row: Icon and featured tag */}
                    <div className="flex items-start justify-between">
                      <span
                        className={`grid h-12 w-12 place-items-center rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${style.iconBg} ${style.iconColor}`}
                      >
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
                      <h3
                        className={`font-display font-semibold transition-colors duration-300 group-hover:text-foreground ${isFeatured ? "text-2xl md:text-3xl" : "text-lg"}`}
                      >
                        {c.name}
                      </h3>
                      <p
                        className={`mt-3 text-muted-foreground leading-relaxed ${isFeatured ? "text-base" : "line-clamp-3 text-sm"}`}
                      >
                        {c.description}
                      </p>
                    </div>

                    {/* Preview Items */}
                    <div className="mt-6">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60 mb-2">
                        Included Kits / Items
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {c.products
                          ? // If it has nested products, show them
                            c.products.map((p) => (
                              <span
                                key={p.slug}
                                className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground/80 border border-border/40 transition-colors duration-300 group-hover:bg-background group-hover:text-foreground"
                              >
                                {p.name}
                              </span>
                            ))
                          : // Otherwise show a few items
                            c.items.slice(0, isFeatured ? 5 : 3).map((item) => (
                              <span
                                key={item}
                                className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground/80 border border-border/40 transition-colors duration-300 group-hover:bg-background group-hover:text-foreground"
                              >
                                {item}
                              </span>
                            ))}
                        {!c.products && c.items.length > (isFeatured ? 5 : 3) && (
                          <span className="inline-flex items-center rounded-md px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground/50">
                            +{c.items.length - (isFeatured ? 5 : 3)} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Actions footer */}
                  <div
                    className={`mt-auto flex items-center justify-between gap-4 border-t border-border/50 pt-5 ${isFeatured ? "mt-10" : "mt-6"}`}
                  >
                    <Link
                      to="/products/$categoryId"
                      params={{ categoryId: c.slug }}
                      className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors group/link relative z-20"
                    >
                      Details
                      <ArrowRight className="ml-1 h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
                    </Link>
                    <Button
                      size="sm"
                      variant={isFeatured ? "default" : "secondary"}
                      onClick={(e) => {
                        e.stopPropagation();
                        openQuote(c.slug);
                      }}
                      className="relative z-20"
                    >
                      Quote
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
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
