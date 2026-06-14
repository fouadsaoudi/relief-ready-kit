import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";
import { categories, services } from "@/lib/catalog";
import { toast } from "sonner";

const searchSchema = z.object({
  category: fallback(z.string(), "").default(""),
});

export const Route = createFileRoute("/quote")({
  validateSearch: zodValidator(searchSchema),
  head: () => ({
    meta: [
      { title: "Request a Quote — ReliefSupply" },
      {
        name: "description",
        content:
          "Request a tailored quotation for humanitarian relief products and field services.",
      },
      { property: "og:title", content: "Request a Quote — ReliefSupply" },
      {
        property: "og:description",
        content:
          "Tell us your needs and we'll prepare a quotation — no commitments.",
      },
    ],
  }),
  component: Quote,
});

const formSchema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  organization: z.string().trim().min(1, "Required").max(150),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(3, "Required").max(40),
  country: z.string().trim().min(1, "Required").max(100),
  interest: z.string().trim().min(1, "Please choose"),
  quantity: z.string().trim().max(200).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

function Quote() {
  const { category } = Route.useSearch();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const parsed = formSchema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        errs[String(issue.path[0])] = issue.message;
      }
      setErrors(errs);
      toast.error("Please review the form");
      return;
    }
    setErrors({});
    setSubmitted(true);
    toast.success("Quote request received");
  }

  if (submitted) {
    return (
      <SiteLayout>
        <section className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
          <span className="grid mx-auto h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary">
            <CheckCircle2 className="h-7 w-7" />
          </span>
          <h1 className="mt-6 text-3xl font-semibold">Thank you</h1>
          <p className="mt-3 text-muted-foreground">
            Your quotation request has been received. Our team will get back to you
            shortly with details and pricing.
          </p>
          <Button className="mt-8" onClick={() => setSubmitted(false)}>
            Submit another request
          </Button>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <span className="text-sm font-medium text-primary">Quotation</span>
        <h1 className="mt-3 text-4xl font-semibold md:text-5xl">Request a Quote</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Share your requirements and our team will prepare a tailored quotation.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-10 grid gap-5 rounded-3xl border border-border bg-card p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full Name" name="name" error={errors.name} required />
            <Field
              label="Organization Name"
              name="organization"
              error={errors.organization}
              required
            />
            <Field label="Email" name="email" type="email" error={errors.email} required />
            <Field label="Phone Number" name="phone" error={errors.phone} required />
            <Field
              label="Country / Location"
              name="country"
              error={errors.country}
              required
            />
            <div className="grid gap-2">
              <Label htmlFor="interest">Product or Service Interested In *</Label>
              <Select name="interest" defaultValue={category || undefined}>
                <SelectTrigger id="interest">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General inquiry</SelectItem>
                  {categories.map((c) => (
                    <SelectItem key={c.slug} value={c.slug}>
                      {c.name}
                    </SelectItem>
                  ))}
                  {services.map((s) => (
                    <SelectItem key={s.slug} value={s.slug}>
                      {s.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.interest && (
                <p className="text-xs text-destructive">{errors.interest}</p>
              )}
            </div>
          </div>

          <Field
            label="Quantity / Estimated Need"
            name="quantity"
            placeholder="e.g. 500 hygiene kits"
            error={errors.quantity}
          />

          <div className="grid gap-2">
            <Label htmlFor="message">Message / Notes</Label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell us about your project, timeline, and delivery location."
            />
          </div>

          <Button type="submit" size="lg" className="mt-2 justify-self-start">
            Submit Request
          </Button>
        </form>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={name}>
        {label} {required && "*"}
      </Label>
      <Input id={name} name={name} type={type} placeholder={placeholder} />
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
