import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { categories } from "@/lib/catalog";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { QuoteForm } from "@/components/QuoteForm";
import { CheckCircle2, ChevronLeft, ArrowRight, ShieldCheck, Info } from "lucide-react";

export const Route = createFileRoute("/products/$categoryId/$productId")({
  component: ProductItemDetail,
});

function ProductItemDetail() {
  const { categoryId, productId } = Route.useParams();
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const category = categories.find((c) => c.slug === categoryId);
  
  let matchedProduct: any = null;
  if (category) {
    if (category.slug === productId) {
      matchedProduct = {
        slug: category.slug,
        name: category.name,
        description: category.description,
        items: category.items,
        specs: category.specs,
      };
    } else if (category.products) {
      matchedProduct = category.products.find((p) => p.slug === productId);
    }
  }

  if (!category || !matchedProduct) {
    return (
      <SiteLayout>
        <div className="mx-auto max-w-4xl px-4 py-24 text-center">
          <h1 className="text-3xl font-bold font-display text-foreground">Product Not Found</h1>
          <p className="mt-4 text-muted-foreground">The requested product could not be located in our catalog.</p>
          <Button asChild className="mt-8">
            <Link to="/products">Back to Catalog</Link>
          </Button>
        </div>
      </SiteLayout>
    );
  }

  const Icon = category.icon;

  return (
    <SiteLayout>
      {/* Breadcrumbs & Navigation */}
      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <Link
          to="/products/$categoryId"
          params={{ categoryId: category.slug }}
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft className="h-4 w-4" /> Back to category
        </Link>
        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground uppercase tracking-widest">
          <Link to="/products" className="hover:text-foreground">Catalog</Link>
          <span>/</span>
          <Link to="/products/$categoryId" params={{ categoryId: category.slug }} className="hover:text-foreground">
            {category.name}
          </Link>
          <span>/</span>
          <span className="text-foreground font-semibold">{matchedProduct.name}</span>
        </div>
        <div className="editorial-rule mt-4" />
      </section>

      {/* Main product showcase */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 pb-24 animate-in fade-in slide-in-from-bottom-3 duration-250">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          
          {/* Left Column: Details & Specs */}
          <div className="space-y-10">
            <div>
              <span className="tag-pill mb-4">
                <Icon className="h-3.5 w-3.5" /> {category.name}
              </span>
              <h1 className="font-display text-4xl font-semibold md:text-5xl lg:text-6xl tracking-tight text-foreground">
                {matchedProduct.name}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {matchedProduct.description}
              </p>
            </div>

            {/* Specifications Card */}
            {matchedProduct.specs && (
              <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground/80 flex items-center gap-2 mb-6 border-b border-border pb-4">
                  <ShieldCheck className="h-5 w-5 text-primary" /> Technical Specifications
                </h3>
                
                <dl className="grid gap-4 sm:grid-cols-2">
                  {matchedProduct.specs.map((s: any) => (
                    <div key={s.label} className="border-b border-border/40 pb-3 last:border-0 last:pb-0">
                      <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{s.label}</dt>
                      <dd className="mt-1 text-sm font-semibold text-foreground/90 leading-relaxed">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {/* Procurement / Standards Info */}
            <div className="rounded-2xl bg-secondary/30 border border-border/60 p-6 flex gap-4">
              <Info className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-foreground">Sourcing & Standards</h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  All items are procured, configured, and packaged to meet the quality guidelines of UN agencies and international humanitarian organizations. Custom assemblies and quantities can be quoted on request.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Included Items Checklist & CTA */}
          <div className="space-y-8">
            
            {/* Included Items list */}
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground/80 flex items-center gap-2 mb-6 border-b border-border pb-4">
                Items Included in Kit
              </h3>
              
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {matchedProduct.items.map((item: string) => (
                  <li key={item} className="flex items-start gap-3 rounded-xl border border-border/40 p-3 bg-secondary/10 hover:bg-secondary/20 transition-all duration-200">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Quote CTA Box */}
            <div className="rounded-3xl bg-gradient-to-br from-primary/10 via-background to-secondary/30 border border-primary/20 p-6 sm:p-8 shadow-sm relative overflow-hidden">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 blur-2xl" />
              
              <h3 className="font-display text-xl font-bold text-foreground">Request a Quote</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Submit a request with your desired quantities and destination. Our response team will provide a comprehensive quotation with competitive pricing.
              </p>
              
              <div className="mt-6 space-y-3">
                <Button onClick={() => setIsQuoteOpen(true)} className="w-full justify-center" size="lg">
                  Request Pricing Estimate <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button asChild variant="outline" className="w-full justify-center bg-card" size="lg">
                  <Link to="/contact">Contact Sourcing Team</Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quote Request Modal */}
      <Dialog open={isQuoteOpen} onOpenChange={setIsQuoteOpen}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-border bg-card p-6 sm:p-8">
          <DialogHeader className="border-b border-border/50 pb-4 mb-4">
            <DialogTitle className="text-2xl font-bold font-display text-foreground">Request a Quote</DialogTitle>
            <DialogDescription className="text-muted-foreground mt-1.5">
              Share your requirements for {matchedProduct.name} and our team will prepare a tailored quotation.
            </DialogDescription>
          </DialogHeader>
          <QuoteForm defaultCategory={matchedProduct.slug} onSuccess={() => setIsQuoteOpen(false)} />
        </DialogContent>
      </Dialog>
    </SiteLayout>
  );
}
