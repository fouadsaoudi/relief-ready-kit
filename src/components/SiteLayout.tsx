import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Mail, Phone, MapPin, HeartHandshake, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories } from "@/lib/catalog";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/quote", label: "Request Quote" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
              <HeartHandshake className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">
              NRM Supply
            </span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {nav.map((n) => {
              if (n.label === "Products") {
                return (
                  <div key={n.to} className="group relative py-4 -my-4 flex items-center">
                    <Link
                      to={n.to}
                      activeOptions={{ exact: false }}
                      className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:font-medium data-[status=active]:text-foreground"
                    >
                      {n.label}
                      <svg className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                      </svg>
                    </Link>

                    {/* Megamenu dropdown */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 hidden group-hover:block w-[580px] z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="rounded-2xl border border-border bg-card p-5 shadow-xl transition-all duration-200">
                        <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                          {categories.map((c) => {
                            const Icon = c.icon;
                            return (
                              <Link
                                key={c.slug}
                                to="/products/$categoryId"
                                params={{ categoryId: c.slug }}
                                className="group/item flex items-center justify-between gap-3 rounded-xl p-2.5 transition-all duration-200 hover:bg-secondary/60"
                              >
                                <div className="flex items-start gap-3 min-w-0 flex-1">
                                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary transition-transform duration-200 group-hover/item:scale-110">
                                    <Icon className="h-4.5 w-4.5" />
                                  </span>
                                  <div className="min-w-0 flex-1">
                                    <span className="block text-sm font-semibold text-foreground transition-colors duration-200 truncate">
                                      {c.name}
                                    </span>
                                    <span className="block mt-0.5 text-[11px] text-muted-foreground line-clamp-1 leading-normal">
                                      {c.description}
                                    </span>
                                  </div>
                                </div>
                                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground/30 transition-all duration-200 -translate-x-1.5 opacity-0 group-hover/item:translate-x-0 group-hover/item:opacity-100 group-hover/item:text-primary" />
                              </Link>
                            );
                          })}
                        </div>

                        {/* Footer links inside popover */}
                        <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs">
                          <span className="text-muted-foreground">Essential supplies & kits</span>
                          <Link to="/products" className="font-semibold text-primary hover:text-primary/80 flex items-center gap-0.5">
                            View All Products <ArrowRight className="h-3 w-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={n.to}
                  to={n.to}
                  activeOptions={{ exact: n.to === "/" }}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:font-medium data-[status=active]:text-foreground"
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Button asChild>
              <Link to="/quote">Request a Quote</Link>
            </Button>
          </div>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-md md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-border bg-background md:hidden">
            <div className="space-y-1 px-4 py-3">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-secondary"
                >
                  {n.label}
                </Link>
              ))}
              <Button asChild className="mt-2 w-full">
                <Link to="/quote" onClick={() => setOpen(false)}>
                  Request a Quote
                </Link>
              </Button>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
                <HeartHandshake className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-semibold">NRM Supply</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Dependable supplies and field services to support camp operations, field projects, and emergency response programs.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:text-foreground">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Product Categories</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {categories.slice(0, 6).map((c) => (
                <li key={c.slug}>
                  <Link to="/products" hash={c.slug} className="hover:text-foreground">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <span>info@nrmsupply.example</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <a href="tel:+96170616333" className="hover:text-foreground">
                  +961 70 616 333
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Field operations worldwide</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto max-w-7xl px-4 py-5 text-xs text-muted-foreground sm:px-6 lg:px-8">
            © {new Date().getFullYear()} NRM Supply. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
