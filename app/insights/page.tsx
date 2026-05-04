import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import Image from "next/image";
import { Instagram, Facebook, Mail } from "lucide-react";

const filters = {
  description: "Filter insights by sector, topic, and stakeholder type to find relevant industry analysis and updates.",
  items: [
    "Aerospace",
    "Automotive EV",
    "Railway",
    "Marine",
    "Heavy Mobility",
    "Capacity Trends",
    "Compliance Documentation",
    "Workforce Development",
    "Strategic Programs",
  ],
} as const;

const articleStructure = {
  description: "Each insight article follows a structured format to provide comprehensive information and actionable insights.",
  items: [
    "Title",
    "Sector Tag",
    "Summary",
    "Date",
    "Key Takeaways",
    "Related Resources",
    "Related Requirements",
  ],
} as const;

export default function InsightsPage() {
  return (
    <div className="flex flex-col gap-10">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-10 shadow-sm">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_420px_at_12%_10%,color-mix(in_oklab,var(--navy)_10%,transparent),transparent_60%),radial-gradient(900px_380px_at_90%_20%,color-mix(in_oklab,var(--accent)_18%,transparent),transparent_60%)] opacity-90" />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Insights
            </h1>
            <p className="max-w-2xl text-lg text-foreground/75">
              Structured articles tagged to sectors and programs, connected to resources and active requirements for informed decision-making.
            </p>
          </div>
          <div className="relative h-64 w-full max-w-sm shrink-0 overflow-hidden rounded-2xl border border-border bg-muted lg:h-80">
            <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop" alt="Insights and articles visualization" className="object-contain p-4 w-full h-full" />
          </div>
        </div>
      </section>

      {/* Insights Overview */}
      <section className="space-y-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">Knowledge Hub</h2>
          <p className="max-w-3xl text-foreground/75">
            Access industry analysis, market trends, compliance updates, and strategic insights across all mobility manufacturing sectors.
          </p>
        </div>
        <Card className="overflow-hidden">
          <div className="flex flex-col gap-4 p-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1 space-y-4">
              <p className="text-foreground/80">
                Our insights platform provides structured, actionable information to help stakeholders navigate the complex mobility manufacturing landscape. Articles are carefully curated and tagged to ensure relevance and accessibility.
              </p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div className="rounded-xl bg-foreground/[0.03] px-4 py-3">
                  <h4 className="font-semibold">Sector-Specific Analysis</h4>
                  <p className="mt-1 text-sm text-foreground/70">Deep dives into aerospace, automotive, railway, marine, and heavy mobility trends.</p>
                </div>
                <div className="rounded-xl bg-foreground/[0.03] px-4 py-3">
                  <h4 className="font-semibold">Regulatory Intelligence</h4>
                  <p className="mt-1 text-sm text-foreground/70">Compliance updates, documentation requirements, and certification guidance.</p>
                </div>
                <div className="rounded-xl bg-foreground/[0.03] px-4 py-3">
                  <h4 className="font-semibold">Capacity & Workforce Insights</h4>
                  <p className="mt-1 text-sm text-foreground/70">Market trends, workforce development, and capacity planning strategies.</p>
                </div>
                <div className="rounded-xl bg-foreground/[0.03] px-4 py-3">
                  <h4 className="font-semibold">Strategic Program Updates</h4>
                  <p className="mt-1 text-sm text-foreground/70">Progress reports and outcomes from ecosystem development initiatives.</p>
                </div>
              </div>
            </div>
            <div className="relative h-40 w-full max-w-xs shrink-0 overflow-hidden rounded-xl border border-border bg-muted lg:h-48">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop" alt="Insights structure and filters overview" className="object-contain p-4 w-full h-full" />
            </div>
          </div>
        </Card>
      </section>

      {/* Filters and Articles */}
      <section className="space-y-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">Browse Insights</h2>
          <p className="max-w-3xl text-foreground/75">
            Filter articles by sector and topic to find relevant insights and analysis.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          <Card>
            <div className="p-4">
              <CardTitle>Filters</CardTitle>
              <CardDescription>{filters.description}</CardDescription>
              <ul className="space-y-2 text-sm text-foreground/80">
                {filters.items.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          <div className="lg:col-span-2">
            <Card>
              <div className="p-4">
                <CardTitle>Article Structure</CardTitle>
                <CardDescription>{articleStructure.description}</CardDescription>
                <div className="grid gap-3 sm:grid-cols-2">
                  {articleStructure.items.map((item, index) => (
                    <div key={item} className="flex items-center gap-3 rounded-xl bg-foreground/[0.03] px-4 py-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <span className="text-sm font-medium text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>

        <Card>
          <div className="p-4">
            <CardTitle>Latest Articles</CardTitle>
            <CardDescription>
              Curated insights and analysis from across the mobility manufacturing ecosystem.
            </CardDescription>
            <div className="text-sm text-foreground/70">
              Articles will be published here as insights become available. Stay tuned for sector-specific analysis and strategic updates.
            </div>
          </div>
        </Card>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-border bg-muted px-6 py-8 text-center">
        <h3 className="text-2xl font-semibold tracking-tight">Stay Informed</h3>
        <p className="mt-2 text-foreground/75">
          Get the latest insights on mobility manufacturing trends and opportunities.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <ButtonLink href="/join-network" variant="primary" className="w-full sm:w-auto">
            Join Network
          </ButtonLink>
          <ButtonLink href="/active-requirements" variant="secondary" className="w-full sm:w-auto">
            View Requirements
          </ButtonLink>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-gradient-to-br from-accent/5 to-accent/10 border-t border-border py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="/logo.png" alt="Balbird Industries" width={40} height={40} className="rounded-full" />
                <span className="text-lg font-semibold">Balbird Industries</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/about" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="/careers" className="hover:text-foreground transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/help" className="hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="/contact" className="hover:text-foreground transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent/30 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent/30 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent/30 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
