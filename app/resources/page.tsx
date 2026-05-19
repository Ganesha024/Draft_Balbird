import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import Image from "next/image";
import { Instagram, Facebook, Mail } from "lucide-react";

const resources = {
  Manufacturers: {
    description: "Essential guides and templates for manufacturing stakeholders to onboard, comply, and scale operations.",
    items: [
      "Onboarding Guide",
      "Capacity Template",
      "Compliance Checklist",
      "Expansion Planning Outline",
    ],
  },
  OEM_Tier: {
    description: "Resources for OEMs and tier suppliers to submit requirements and evaluate manufacturing partners.",
    items: [
      "Requirement Submission Guide",
      "Supplier Evaluation Framework",
    ],
  },
  Associations: {
    description: "Tools for industrial associations to map cluster capabilities and drive compliance improvements.",
    items: [
      "Cluster Capability Mapping Guide",
      "Compliance Improvement Framework",
    ],
  },
  Students: {
    description: "Educational resources for students and workforce development programs in manufacturing.",
    items: [
      "Manufacturing Exposure Guide",
      "Structured Training Log Template",
    ],
  },
  Financial_Strategic: {
    description: "Operational and strategic resources for financial institutions and strategic investors.",
    items: [
      "Operational Review Checklist",
      "Acquisition Readiness Indicators",
    ],
  },
  Cross_Sector: {
    description: "Universal resources applicable across all sectors for compliance and traceability.",
    items: [
      "Mobility Compliance Overview",
      "Traceability Guide",
    ],
  },
} as const;

export default function ResourcesPage() {
  return (
    <div className="flex flex-col gap-10">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-10 shadow-sm">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_420px_at_12%_10%,color-mix(in_oklab,var(--navy)_10%,transparent),transparent_60%),radial-gradient(900px_380px_at_90%_20%,color-mix(in_oklab,var(--accent)_18%,transparent),transparent_60%)] opacity-90" />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Resources
            </h1>
            <p className="max-w-2xl text-lg text-foreground/75">
              Comprehensive guides and templates supporting onboarding, compliance structuring, traceability, and capacity alignment across all stakeholders.
            </p>
          </div>
          <div className="relative h-64 w-full max-w-sm shrink-0 overflow-hidden rounded-2xl border border-border bg-muted lg:h-80">
            <Image src="/images/resources-hero.svg" alt="Resources library visualization" fill className="object-contain p-4" />
          </div>
        </div>
      </section>

      {/* Resources Overview */}
      <section className="space-y-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">Resource Library</h2>
          <p className="max-w-3xl text-foreground/75">
            Access role-specific guides, templates, checklists, and frameworks to support your participation in the ecosystem.
          </p>
        </div>
        <Card className="overflow-hidden">
          <div className="flex flex-col gap-4 p-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1 space-y-4">
              <p className="text-foreground/80">
                Our comprehensive resource library provides tailored support for each stakeholder type, from onboarding guides and compliance checklists to strategic frameworks and operational templates. All resources are designed to accelerate your integration and maximize your participation in the mobility manufacturing ecosystem.
              </p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div className="rounded-xl bg-foreground/[0.03] px-4 py-3">
                  <h4 className="font-semibold">Onboarding Support</h4>
                  <p className="mt-1 text-sm text-foreground/70">Step-by-step guides to get started with the platform and ecosystem.</p>
                </div>
                <div className="rounded-xl bg-foreground/[0.03] px-4 py-3">
                  <h4 className="font-semibold">Compliance Tools</h4>
                  <p className="mt-1 text-sm text-foreground/70">Checklists and frameworks for regulatory and quality compliance.</p>
                </div>
                <div className="rounded-xl bg-foreground/[0.03] px-4 py-3">
                  <h4 className="font-semibold">Operational Templates</h4>
                  <p className="mt-1 text-sm text-foreground/70">Standardized templates for capacity planning and requirements.</p>
                </div>
                <div className="rounded-xl bg-foreground/[0.03] px-4 py-3">
                  <h4 className="font-semibold">Strategic Frameworks</h4>
                  <p className="mt-1 text-sm text-foreground/70">Advanced tools for evaluation, planning, and strategic decision-making.</p>
                </div>
              </div>
            </div>
            <div className="relative h-40 w-full max-w-xs shrink-0 overflow-hidden rounded-xl border border-border bg-muted lg:h-48">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop" alt="Resource categories overview" className="object-contain p-4 w-full h-full" />
            </div>
          </div>
        </Card>
      </section>

      {/* Resource Categories */}
      <section className="space-y-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">Resource Categories</h2>
          <p className="max-w-3xl text-foreground/75">
            Browse resources tailored to your stakeholder type and operational needs.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {Object.entries(resources).map(([group, data], index) => (
            <Card key={group}>
              <div className="p-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1">
                    <CardTitle>{group.replaceAll("_", " ")}</CardTitle>
                    <CardDescription>{data.description}</CardDescription>
                    <div className="space-y-1">
                      <h5 className="text-sm font-semibold text-foreground/80">Available Resources:</h5>
                      <ul className="space-y-1 text-sm text-foreground/70">
                        {data.items.map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <div className="h-1 w-1 rounded-full bg-accent" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-border bg-muted px-6 py-8 text-center">
        <h3 className="text-2xl font-semibold tracking-tight">Access Resources</h3>
        <p className="mt-2 text-foreground/75">
          Download guides, templates, and tools to support your mobility manufacturing journey.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <ButtonLink href="/join-network" variant="primary" className="w-full sm:w-auto">
            Join Network
          </ButtonLink>
          <ButtonLink href="/request-strategic-discussion" variant="secondary" className="w-full sm:w-auto">
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
