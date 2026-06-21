import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — NRM Supply" },
      {
        name: "description",
        content: "Get in touch with NRM Supply for humanitarian product and service inquiries.",
      },
      { property: "og:title", content: "Contact — NRM Supply" },
      {
        property: "og:description",
        content: "Get in touch with NRM Supply for humanitarian product and service inquiries.",
      },
      { name: "twitter:title", content: "Contact — NRM Supply" },
      {
        name: "twitter:description",
        content: "Get in touch with NRM Supply for humanitarian product and service inquiries.",
      },
      { property: "og:url", content: "https://relief-ready-kit.vercel.app/contact" },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(2000),
});

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const i of parsed.error.issues) errs[String(i.path[0])] = i.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    (e.currentTarget as HTMLFormElement).reset();
    toast.success("Message sent — we'll be in touch.");
  }

  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <span className="text-sm font-medium text-primary">Contact</span>
        <h1 className="mt-3 text-4xl font-semibold md:text-5xl">Get in touch</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Get in touch with NRM Supply. Contact us directly for general, B2B, or humanitarian inquiries. We typically respond within one business day.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            {[
              { icon: Mail, label: "Email", value: "info@nrmsupply.example" },
              { icon: Phone, label: "Phone", value: "+961 70 616 333" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    {label}
                  </p>
                  {label === "Email" ? (
                    <a href={`mailto:${value}`} className="block mt-1 truncate font-medium hover:text-primary transition-colors">
                      {value}
                    </a>
                  ) : label === "Phone" ? (
                    <a href="tel:+96170616333" className="block mt-1 truncate font-medium hover:text-primary transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="mt-1 truncate font-medium">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={onSubmit}
            className="grid gap-5 rounded-3xl border border-border bg-card p-6 sm:p-8"
          >
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" />
              {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" />
              {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" rows={6} />
              {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
            </div>
            <Button type="submit" size="lg" className="justify-self-start">
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
