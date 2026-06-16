import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { Target, Package, Users, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — NRM Supply" },
      {
        name: "description",
        content:
          "NRM Supply supports humanitarian organizations with reliable relief products and field services.",
      },
      { property: "og:title", content: "About Us — NRM Supply" },
      {
        property: "og:description",
        content:
          "Reliability, quality, and timely support for communities affected by emergencies and crisis.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <span className="text-sm font-medium text-primary">About us</span>
        <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
          Supporting humanitarian work with reliable supplies
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          We support humanitarian organizations, NGOs, and field operations by
          providing essential relief products and practical services. Our focus is on
          reliability, quality, and timely support for communities affected by
          emergencies, displacement, and crisis situations.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Target,
              title: "Our Mission",
              text: "To provide dependable humanitarian supplies and services that help organizations respond quickly and effectively to communities in need.",
            },
            {
              icon: Package,
              title: "What We Provide",
              text: "Relief products including food, hygiene kits, dignity kits, shelter and solar items, alongside cleaning, contracting and warehousing services.",
            },
            {
              icon: Users,
              title: "Who We Serve",
              text: "NGOs, humanitarian organizations, charities, emergency response teams, development programs, and community support initiatives.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-7">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <h2 className="mt-5 text-xl font-semibold">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 rounded-3xl bg-secondary/50 p-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">Who we serve</h2>
            <p className="mt-3 text-muted-foreground">
              From sudden-onset emergencies to long-term recovery, we deliver to
              organizations of every size.
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
              "Community support initiatives",
            ].map((x) => (
              <li key={x} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {x}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link to="/quote">Request a Quote</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
