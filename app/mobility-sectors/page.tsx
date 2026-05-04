import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import Image from "next/image";
import { Instagram, Facebook, Mail } from "lucide-react";
import { Plane, Car, Train, Ship, Cog } from "lucide-react";

const sectors = {
  Aerospace: {
    title: "Aerospace",
    description: "Precision manufacturing for aircraft components with strict certification and traceability requirements.",
    focus: [
      "5 Axis Machining",
      "CMM Inspection",
      "Batch Traceability",
      "Certification Readiness",
    ],
    image: "/aerospace.png",
    icon: Plane,
  },
  Automotive_EV: {
    title: "Automotive & EV",
    description: "High-volume production for electric and traditional vehicles with cycle optimization and quality standards.",
    focus: [
      "High Volume Production",
      "Cycle Time Optimization",
      "Line Balancing",
      "PPAP Alignment",
    ],
    image: "/automotive_Robotics.jpg",
    icon: Car,
  },
  Railway: {
    title: "Railway",
    description: "Heavy-duty manufacturing for rail systems with safety documentation and long-term reliability.",
    focus: [
      "Heavy Machining",
      "Welding Certifications",
      "Safety Documentation",
      "Long Term Traceability",
    ],
    image: "/railways.jpg",
    icon: Train,
  },
  Marine: {
    title: "Marine",
    description: "Corrosion-resistant manufacturing for marine applications with specialized surface treatments.",
    focus: [
      "Corrosion Control",
      "Surface Treatment",
      "Marine Grade Compliance",
    ],
    image: "/marine.jpg",
    icon: Ship,
  },
  Heavy_Mobility: {
    title: "Heavy Mobility",
    description: "Large-scale manufacturing for heavy machinery and equipment with advanced materials processing.",
    focus: [
      "Forging",
      "Heat Treatment",
      "Large Structural Inspection",
    ],
    image: "/heavy_mobility.jpg",
    icon: Cog,
  },
} as const;

export default function MobilitySectorsPage() {
  return (
    <div className="flex flex-col gap-10">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-10 shadow-sm">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_420px_at_12%_10%,color-mix(in_oklab,var(--navy)_10%,transparent),transparent_60%),radial-gradient(900px_380px_at_90%_20%,color-mix(in_oklab,var(--accent)_18%,transparent),transparent_60%)] opacity-90" />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Mobility Sectors
            </h1>
            <p className="max-w-2xl text-lg text-foreground/75">
              Structured capacity focus areas across mobility manufacturing sectors, from aerospace precision to heavy machinery.
            </p>
          </div>
          <div className="relative h-64 w-full max-w-sm shrink-0 overflow-hidden rounded-2xl border border-border bg-muted lg:h-80">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop" alt="Mobility sectors visualization" className="object-contain p-4 w-full h-full" />
          </div>
        </div>
      </section>

      {/* Sectors Overview */}
      <section className="space-y-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">Sector Overview</h2>
          <p className="max-w-3xl text-foreground/75">
            Our platform supports five key mobility sectors, each with specialized manufacturing requirements and compliance frameworks.
          </p>
        </div>
        <Card className="overflow-hidden">
          <div className="flex flex-col gap-4 p-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1 space-y-4">
              <p className="text-foreground/80">
                From high-precision aerospace components to heavy machinery, we provide structured capacity alignment across diverse mobility manufacturing sectors. Each sector has unique technical requirements and regulatory standards.
              </p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div className="rounded-xl bg-foreground/[0.03] px-4 py-3">
                  <h4 className="font-semibold">Sector-Specific Capabilities</h4>
                  <p className="mt-1 text-sm text-foreground/70">Tailored manufacturing processes and certifications for each industry.</p>
                </div>
                <div className="rounded-xl bg-foreground/[0.03] px-4 py-3">
                  <h4 className="font-semibold">Cross-Sector Synergies</h4>
                  <p className="mt-1 text-sm text-foreground/70">Shared infrastructure and knowledge transfer between sectors.</p>
                </div>
                <div className="rounded-xl bg-foreground/[0.03] px-4 py-3">
                  <h4 className="font-semibold">Regulatory Compliance</h4>
                  <p className="mt-1 text-sm text-foreground/70">Industry-specific standards and certification readiness.</p>
                </div>
                <div className="rounded-xl bg-foreground/[0.03] px-4 py-3">
                  <h4 className="font-semibold">Innovation Pathways</h4>
                  <p className="mt-1 text-sm text-foreground/70">Technology adoption and modernization across mobility sectors.</p>
                </div>
              </div>
            </div>
            <div className="relative h-40 w-full max-w-xs shrink-0 overflow-hidden rounded-xl border border-border bg-muted lg:h-48">
              <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop" alt="Five mobility sectors overview" className="object-contain p-4 w-full h-full" />
            </div>
          </div>
        </Card>
      </section>

      {/* Sector Characteristics */}
      <section className="space-y-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">Sector Characteristics</h2>
          <p className="max-w-3xl text-foreground/75">
            Programs are long-term. Compliance is strict. Traceability is non-negotiable. Volume expectations are high. Only structured ecosystems survive this environment. Unstructured growth collapses under complexity.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="p-4">
            <CardTitle>Long-Term Commitments</CardTitle>
            <CardDescription>
              Mobility programs span years, requiring stable partnerships and predictable capacity. Short-term thinking leads to disruptions and missed opportunities.
            </CardDescription>
          </Card>
          <Card className="p-4">
            <CardTitle>Strict Compliance Frameworks</CardTitle>
            <CardDescription>
              Safety, environmental, and quality standards are non-negotiable. Every component must meet rigorous certification requirements across global markets.
            </CardDescription>
          </Card>
          <Card className="p-4">
            <CardTitle>Complete Traceability</CardTitle>
            <CardDescription>
              From raw materials to finished products, every step must be documented and verifiable. Supply chain transparency is critical for liability and quality assurance.
            </CardDescription>
          </Card>
          <Card className="p-4">
            <CardTitle>High Volume Scaling</CardTitle>
            <CardDescription>
              Mobility manufacturing demands consistent high-volume production with zero-defect quality. Structured processes ensure scalable, reliable output.
            </CardDescription>
          </Card>
        </div>
      </section>

      {/* Sector Details */}
      <section className="space-y-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">Sector Details</h2>
          <p className="max-w-3xl text-foreground/75">
            Explore specific capabilities and focus areas across each mobility sector.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {Object.values(sectors).map((sector, index) => (
            <Card key={sector.title}>
              <div className="p-4">
                <div className="flex items-start gap-4">
                  <sector.icon className="h-8 w-8 text-accent" />
                  <div className="flex-1">
                    <CardTitle>{sector.title}</CardTitle>
                    <CardDescription>{sector.description}</CardDescription>
                    <ul className="space-y-1 text-sm text-foreground/80">
                      {sector.focus.map((item) => (
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
        <h3 className="text-2xl font-semibold tracking-tight">Find Your Sector</h3>
        <p className="mt-2 text-foreground/75">
          Explore manufacturing capabilities across mobility sectors.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <ButtonLink href="/capacity-ecosystem" variant="primary" className="w-full sm:w-auto">
            View Capacity Ecosystem
          </ButtonLink>
          <ButtonLink href="/join-network" variant="secondary" className="w-full sm:w-auto">
            Join Network
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
