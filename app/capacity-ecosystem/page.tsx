import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import Image from "next/image";
import { Instagram, Facebook, Mail } from "lucide-react";

const pillars = {
  Manufacturing_Units: {
    title: "Manufacturing Units",
    description: "Core manufacturing nodes with verified data on capacity, capabilities, and compliance.",
    structured_data: [
      "Machine Level Data",
      "Installed vs Utilized Capacity",
      "Process Capabilities",
      "Certifications",
      "Inspection Systems",
      "Scalability Readiness",
    ],
  },
  OEM_Programs: {
    title: "OEM Programs",
    description: "Structured OEM engagement with clear specifications, volumes, and compliance frameworks.",
    structured_data: [
      "Technical Specifications",
      "Production Volumes",
      "Compliance Requirements",
      "Documentation Standards",
      "Timelines",
    ],
  },
  Workforce_Students: {
    title: "Workforce / Students",
    description: "Skilled workforce integration and student programs for sustainable manufacturing support.",
    structured_data: [
      "Production Assistance",
      "Inspection Support",
      "Documentation Structuring",
      "Process Mapping",
    ],
  },
  Industrial_Associations: {
    title: "Industrial Associations",
    description: "Collaborative bodies driving cluster development, compliance, and export readiness.",
    structured_data: [
      "Cluster Capability Mapping",
      "Compliance Initiatives",
      "Export Readiness",
      "Standardization",
    ],
  },
  Strategic_Financial: {
    title: "Strategic / Financial",
    description: "Performance analytics, scalability planning, and acquisition readiness for stakeholders.",
    structured_data: [
      "Operational Performance",
      "Utilization Trends",
      "Compliance Maturity",
      "Scalability Planning",
      "Acquisition Readiness",
    ],
  },
} as const;

export default function CapacityEcosystemPage() {
  return (
    <div className="flex flex-col gap-10">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-10 shadow-sm">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_420px_at_12%_10%,color-mix(in_oklab,var(--navy)_10%,transparent),transparent_60%),radial-gradient(900px_380px_at_90%_20%,color-mix(in_oklab,var(--accent)_18%,transparent),transparent_60%)] opacity-90" />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Capacity Ecosystem
            </h1>
            <p className="max-w-2xl text-lg text-foreground/75">
              A structured network model that connects manufacturing units, OEM programs, workforce integration, industrial associations, and strategic finance using standardized data.
            </p>
          </div>
          <div className="relative h-64 w-full max-w-sm shrink-0 overflow-hidden rounded-2xl border border-border bg-muted lg:h-80">
            <img src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&h=600&fit=crop" alt="Capacity ecosystem network visualization" className="object-contain p-4 w-full h-full" />
          </div>
        </div>
      </section>

      {/* Ecosystem Overview */}
      <section className="space-y-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">Ecosystem Overview</h2>
          <p className="max-w-3xl text-foreground/75">
            Our ecosystem is built on five interconnected pillars, each providing critical data and capabilities to ensure seamless mobility manufacturing operations.
          </p>
        </div>
        <Card className="overflow-hidden">
          <div className="flex flex-col gap-4 p-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1 space-y-4">
              <p className="text-foreground/80">
                The Capacity Ecosystem integrates verified manufacturing nodes with OEM requirements, skilled workforce, industry standards, and strategic financing. This creates a transparent, scalable network for cross-border mobility production.
              </p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div className="rounded-xl bg-foreground/[0.03] px-4 py-3">
                  <h4 className="font-semibold">Data Standardization</h4>
                  <p className="mt-1 text-sm text-foreground/70">Unified metrics across all pillars for accurate capacity matching.</p>
                </div>
                <div className="rounded-xl bg-foreground/[0.03] px-4 py-3">
                  <h4 className="font-semibold">Compliance Integration</h4>
                  <p className="mt-1 text-sm text-foreground/70">Embedded regulatory and quality standards throughout the network.</p>
                </div>
                <div className="rounded-xl bg-foreground/[0.03] px-4 py-3">
                  <h4 className="font-semibold">Real-time Visibility</h4>
                  <p className="mt-1 text-sm text-foreground/70">Live utilization, performance, and readiness data for all stakeholders.</p>
                </div>
                <div className="rounded-xl bg-foreground/[0.03] px-4 py-3">
                  <h4 className="font-semibold">Scalability Focus</h4>
                  <p className="mt-1 text-sm text-foreground/70">Built-in planning for capacity expansion and new program integration.</p>
                </div>
              </div>
            </div>
            <div className="relative h-40 w-full max-w-xs shrink-0 overflow-hidden rounded-xl border border-border bg-muted lg:h-48">
              <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop" alt="Five pillars of capacity ecosystem" className="object-contain p-4 w-full h-full" />
            </div>
          </div>
        </Card>
      </section>

      {/* Why This Matters */}
      <section className="space-y-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">Why This Matters for Long-Term Manufacturing Strength</h2>
          <p className="max-w-3xl text-foreground/75">
            In mobility sectors, programs are long-term. Compliance is strict. Traceability is non-negotiable. Volume expectations are high. Only structured ecosystems survive this environment. Unstructured growth collapses under complexity.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="p-4">
            <CardTitle>Unstructured Growth Risks</CardTitle>
            <CardDescription>
              When capacity isn't properly structured, expectations mismatch, resources get misused, and funding becomes unpredictable. This leads to wasted potential and unstable operations.
            </CardDescription>
          </Card>
          <Card className="p-4">
            <CardTitle>Structured Ecosystem Benefits</CardTitle>
            <CardDescription>
              Defined roles and data standards create predictability. Capacity aligns with demand, workforce integrates smoothly, compliance improves naturally, and capital flows logically to support sustainable growth.
            </CardDescription>
          </Card>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="space-y-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">Resource Categories</h2>
          <p className="max-w-3xl text-foreground/75">
            Structured data points and metrics for each capacity ecosystem pillar.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {Object.values(pillars).map((p, index) => (
            <Card key={p.title}>
              <div className="p-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1">
                    <CardTitle>{p.title}</CardTitle>
                    <CardDescription>{p.description}</CardDescription>
                    <ul className="space-y-1 text-sm text-foreground/80">
                      {p.structured_data.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-border bg-muted px-6 py-8 text-center">
        <h3 className="text-2xl font-semibold tracking-tight">Join the Ecosystem</h3>
        <p className="mt-2 text-foreground/75">
          Connect your manufacturing capabilities to OEM programs and strategic partners.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <ButtonLink href="https://wa.link/bspaba" variant="primary" className="w-full sm:w-auto">
            Join Network
          </ButtonLink>
          <ButtonLink href="https://wa.link/bspaba" variant="secondary" className="w-full sm:w-auto">
            Request Strategic Discussion
          </ButtonLink>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-gradient-to-br from-accent/5 to-accent/10 border-t border-border py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Image src="/logo.png" alt="Balbird Industries" width={40} height={40} className="rounded-full" />
                <span className="text-lg font-semibold">Balbird Industries</span>
              </div>
              <p className="text-xs text-foreground/60 pl-12">empowering industries</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://wa.link/bspaba" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="https://wa.link/bspaba" className="hover:text-foreground transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/login" className="hover:text-foreground transition-colors">Login</a></li>
                <li><a href="https://wa.link/bspaba" className="hover:text-foreground transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent/30 transition-colors">
                  <span className="text-xs">📘</span>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent/30 transition-colors">
                  <span className="text-xs">🐦</span>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent/30 transition-colors">
                  <span className="text-xs">💼</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
