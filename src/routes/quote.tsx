import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { SiteLayout } from "@/components/SiteLayout";
import { QuoteForm } from "@/components/QuoteForm";

const searchSchema = z.object({
  category: fallback(z.string(), "").default(""),
});

export const Route = createFileRoute("/quote")({
  validateSearch: zodValidator(searchSchema),
  head: () => ({
    meta: [
      { title: "Request a Quote — NRM Supply" },
      {
        name: "description",
        content:
          "Request a tailored quotation for humanitarian relief products and field services.",
      },
      { property: "og:title", content: "Request a Quote — NRM Supply" },
      {
        property: "og:description",
        content:
          "Request a tailored quotation for humanitarian relief products and field services.",
      },
      { name: "twitter:title", content: "Request a Quote — NRM Supply" },
      {
        name: "twitter:description",
        content:
          "Request a tailored quotation for humanitarian relief products and field services.",
      },
      { property: "og:url", content: "https://relief-ready-kit.vercel.app/quote" },
    ],
  }),
  component: Quote,
});

function Quote() {
  const { category } = Route.useSearch();

  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <span className="text-sm font-medium text-primary">Quotation</span>
        <h1 className="mt-3 text-4xl font-semibold md:text-5xl">Request a Quote</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Request a quote from NRM Supply. Share your requirements and our team will prepare a
          tailored quotation for bulk supplies or operational field services.
        </p>

        <div className="mt-10 rounded-3xl border border-border bg-card p-6 sm:p-8">
          <QuoteForm defaultCategory={category} />
        </div>
      </section>
    </SiteLayout>
  );
}
