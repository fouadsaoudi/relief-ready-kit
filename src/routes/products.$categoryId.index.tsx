import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { categories } from "@/lib/catalog";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { QuoteForm } from "@/components/QuoteForm";
import { ChevronLeft, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/products/$categoryId/")({
  component: CategoryProducts,
});

const categoryStyles: Record<string, {
  accent: string;
  bg: string;
  border: string;
  glow: string;
  iconBg: string;
  iconColor: string;
}> = {
  "food-items": {
    accent: "text-amber-600 dark:text-amber-400",
    bg: "group-hover:bg-amber-500/5",
    border: "hover:border-amber-500/40",
    glow: "shadow-amber-500/5 hover:shadow-amber-500/10",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-600",
  },
  "hygiene-kits": {
    accent: "text-teal-600 dark:text-teal-400",
    bg: "group-hover:bg-teal-500/5",
    border: "hover:border-teal-500/40",
    glow: "shadow-teal-500/5 hover:shadow-teal-500/10",
    iconBg: "bg-teal-500/10",
    iconColor: "text-teal-600",
  },
  "mhm-kits": {
    accent: "text-rose-600 dark:text-rose-400",
    bg: "group-hover:bg-rose-500/5",
    border: "hover:border-rose-500/40",
    glow: "shadow-rose-500/5 hover:shadow-rose-500/10",
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-600",
  },
  "dignity-kits": {
    accent: "text-violet-600 dark:text-violet-400",
    bg: "group-hover:bg-violet-500/5",
    border: "hover:border-violet-500/40",
    glow: "shadow-violet-500/5 hover:shadow-violet-500/10",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-600",
  },
  "kitchen-sets": {
    accent: "text-emerald-600 dark:text-emerald-400",
    bg: "group-hover:bg-emerald-500/5",
    border: "hover:border-emerald-500/40",
    glow: "shadow-emerald-500/5 hover:shadow-emerald-500/10",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600",
  },
  "school-kits": {
    accent: "text-indigo-600 dark:text-indigo-400",
    bg: "group-hover:bg-indigo-500/5",
    border: "hover:border-indigo-500/40",
    glow: "shadow-indigo-500/5 hover:shadow-indigo-500/10",
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-600",
  },
  "relief-items": {
    accent: "text-blue-600 dark:text-blue-400",
    bg: "group-hover:bg-blue-500/5",
    border: "hover:border-blue-500/40",
    glow: "shadow-blue-500/5 hover:shadow-blue-500/10",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600",
  },
  "shelter-items": {
    accent: "text-sky-600 dark:text-sky-400",
    bg: "group-hover:bg-sky-500/5",
    border: "hover:border-sky-500/40",
    glow: "shadow-sky-500/5 hover:shadow-sky-500/10",
    iconBg: "bg-sky-500/10",
    iconColor: "text-sky-600",
  },
  "solar-products": {
    accent: "text-orange-600 dark:text-orange-400",
    bg: "group-hover:bg-orange-500/5",
    border: "hover:border-orange-500/40",
    glow: "shadow-orange-500/5 hover:shadow-orange-500/10",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-600",
  },
};

function CategoryProducts() {
  const { categoryId } = Route.useParams();
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string>("general");

  const category = categories.find((c) => c.slug === categoryId);

  if (!category) {
    return (
      <SiteLayout>
        <div className="mx-auto max-w-4xl px-4 py-24 text-center">
          <h1 className="text-3xl font-bold font-display text-foreground">Category Not Found</h1>
          <p className="mt-4 text-muted-foreground">The requested category could not be located.</p>
          <Button asChild className="mt-8">
            <Link to="/products">Back to products</Link>
          </Button>
        </div>
      </SiteLayout>
    );
  }

  const openQuote = (productSlug: string = "general") => {
    setSelectedProduct(productSlug);
    setIsQuoteOpen(true);
  };

  const style = categoryStyles[category.slug] || {
    accent: "text-primary",
    bg: "group-hover:bg-primary/5",
    border: "hover:border-primary/40",
    glow: "shadow-primary/5 hover:shadow-primary/10",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  };

  const productsList = category.products || [
    {
      slug: category.slug,
      name: category.name,
      description: category.description,
      items: category.items,
      specs: category.specs,
    },
  ];

  const Icon = category.icon;

  return (
    <SiteLayout>
      {/* Navigation & Breadcrumbs */}
      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <Link
          to="/products"
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft className="h-4 w-4" /> Back to products
        </Link>
        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground uppercase tracking-widest">
          <Link to="/products" className="hover:text-foreground">Catalog</Link>
          <span>/</span>
          <span className="text-foreground font-semibold">{category.name}</span>
        </div>
        <div className="editorial-rule mt-4" />
      </section>

      {/* Header Info */}
      <section className="mx-auto max-w-7xl px-4 pt-10 pb-6 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className={`grid h-12 w-12 place-items-center rounded-xl ${style.iconBg} ${style.iconColor}`}>
            <Icon className="h-6.5 w-6.5" />
          </span>
          <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">{category.name}</h1>
        </div>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground leading-relaxed">
          {category.description}
        </p>
      </section>

      {/* Products list grid */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsList.map((p) => {
            return (
              <article
                key={p.slug}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${style.border} ${style.glow}`}
              >
                {/* Overlay link for clicking the entire card */}
                <Link
                  to="/products/$categoryId/$productId"
                  params={{ categoryId: category.slug, productId: p.slug }}
                  className="absolute inset-0 z-10"
                  aria-label={`View ${p.name} details`}
                />

                <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br from-transparent via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${style.bg}`} />

                <div className="relative flex h-full flex-col justify-between">
                  <div>
                    <h3 className="font-display font-semibold transition-colors duration-300 group-hover:text-foreground text-xl">
                      {p.name}
                    </h3>
                    <p className="mt-3 text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {p.description}
                    </p>

                    <div className="mt-6">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60 mb-2">
                        Included Items
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {p.items.slice(0, 6).map((item) => (
                          <span
                            key={item}
                            className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground/80 border border-border/40 transition-colors duration-300 group-hover:bg-background group-hover:text-foreground"
                          >
                            {item}
                          </span>
                        ))}
                        {p.items.length > 6 && (
                          <span className="inline-flex items-center rounded-md px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground/50">
                            +{p.items.length - 6} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-between gap-4 border-t border-border/50 pt-5">
                    <Link
                      to="/products/$categoryId/$productId"
                      params={{ categoryId: category.slug, productId: p.slug }}
                      className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors group/link relative z-20"
                    >
                      Details
                      <ArrowRight className="ml-1 h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
                    </Link>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={(e) => {
                        e.stopPropagation();
                        openQuote(p.slug);
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
            <DialogTitle className="text-2xl font-bold font-display text-foreground">Request a Quote</DialogTitle>
            <DialogDescription className="text-muted-foreground mt-1.5">
              Share your requirements and our team will prepare a tailored quotation.
            </DialogDescription>
          </DialogHeader>
          <QuoteForm defaultCategory={selectedProduct} />
        </DialogContent>
      </Dialog>
    </SiteLayout>
  );
}
