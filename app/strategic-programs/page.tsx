import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import Image from "next/image";
import { Instagram, Facebook, Mail } from "lucide-react";

const programs = [
  {
    title: "Capacity Enhancement",
    description: "Programs focused on expanding manufacturing capacity through infrastructure development and technology upgrades.",
    objectives: ["Infrastructure expansion", "Technology modernization", "Process optimization", "Scalability planning"]
  },
  {
    title: "Capability Compliance Strengthening",
    description: "Initiatives to enhance technical capabilities and ensure compliance with international standards.",
    objectives: ["Standards alignment", "Certification programs", "Quality systems", "Regulatory compliance"]
  },
  {
    title: "Workforce Integration",
    description: "Programs to develop skilled workforce and integrate educational institutions with industry needs.",
    objectives: ["Skills development", "Industry-academia partnerships", "Training programs", "Career pathways"]
  },
  {
    title: "OEM Alignment",
    description: "Strategic programs to align manufacturing capabilities with OEM requirements and specifications.",
    objectives: ["Requirements mapping", "Supplier development", "Quality partnerships", "Technology transfer"]
  },
  {
    title: "Cluster Development",
    description: "Regional manufacturing cluster initiatives to create competitive ecosystems and shared resources.",
    objectives: ["Regional collaboration", "Shared infrastructure", "Knowledge sharing", "Market access"]
  },
  {
    title: "Strategic Expansion Capital Alignment",
    description: "Programs to align capital investments with strategic manufacturing expansion goals.",
    objectives: ["Investment facilitation", "Project financing", "Risk mitigation", "Return optimization"]
  },
  {
    title: "Cross Country Bilateral Programs",
    description: "International bilateral programs for cross-border manufacturing collaboration and capacity sharing.",
    objectives: ["International partnerships", "Trade facilitation", "Technology exchange", "Joint ventures"]
  },
] as const;

export default function StrategicProgramsPage() {
  return (
    <div className="flex flex-col gap-10">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-10 shadow-sm">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_420px_at_12%_10%,color-mix(in_oklab,var(--navy)_10%,transparent),transparent_60%),radial-gradient(900px_380px_at_90%_20%,color-mix(in_oklab,var(--accent)_18%,transparent),transparent_60%)] opacity-90" />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Strategic Programs
            </h1>
            <p className="max-w-2xl text-lg text-foreground/75">
              Comprehensive programs designed to strengthen capacity, compliance maturity, workforce integration, and cross-border alignment across the mobility manufacturing ecosystem.
            </p>
          </div>
          <div className="relative h-64 w-full max-w-sm shrink-0 overflow-hidden rounded-2xl border border-border bg-muted lg:h-80">
            <img src="https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=600&fit=crop" alt="Strategic programs roadmap visualization" className="object-contain p-4 w-full h-full" />
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="space-y-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">Program Framework</h2>
          <p className="max-w-3xl text-foreground/75">
            Our strategic programs provide structured pathways for stakeholders to participate in ecosystem development and capability enhancement.
          </p>
        </div>
        <Card className="overflow-hidden">
          <div className="flex flex-col gap-4 p-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1 space-y-4">
              <p className="text-foreground/80">
                The Balbird strategic programs framework encompasses capacity building, compliance strengthening, workforce development, OEM alignment, cluster initiatives, capital alignment, and international bilateral programs. Each program is designed to address specific challenges and opportunities in the mobility manufacturing sector.
              </p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div className="rounded-xl bg-foreground/[0.03] px-4 py-3">
                  <h4 className="font-semibold">Capacity Building</h4>
                  <p className="mt-1 text-sm text-foreground/70">Infrastructure and technology programs to expand manufacturing capabilities.</p>
                </div>
                <div className="rounded-xl bg-foreground/[0.03] px-4 py-3">
                  <h4 className="font-semibold">Compliance & Standards</h4>
                  <p className="mt-1 text-sm text-foreground/70">Programs ensuring regulatory compliance and quality standards alignment.</p>
                </div>
                <div className="rounded-xl bg-foreground/[0.03] px-4 py-3">
                  <h4 className="font-semibold">Workforce Development</h4>
                  <p className="mt-1 text-sm text-foreground/70">Initiatives to build skilled workforce and industry-academia partnerships.</p>
                </div>
                <div className="rounded-xl bg-foreground/[0.03] px-4 py-3">
                  <h4 className="font-semibold">International Collaboration</h4>
                  <p className="mt-1 text-sm text-foreground/70">Cross-border programs for global manufacturing partnerships.</p>
                </div>
              </div>
            </div>
            <div className="relative h-40 w-full max-w-xs shrink-0 overflow-hidden rounded-xl border border-border bg-muted lg:h-48">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop" alt="Strategic programs framework overview" className="object-contain p-4 w-full h-full" />
            </div>
          </div>
        </Card>
      </section>

      {/* Strategic Programs */}
      <section className="space-y-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">Program Initiatives</h2>
          <p className="max-w-3xl text-foreground/75">
            Detailed programs addressing key areas of mobility manufacturing development and collaboration.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {programs.map((program, index) => (
            <Card key={program.title}>
              <div className="p-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1">
                    <CardTitle>{program.title}</CardTitle>
                    <CardDescription>{program.description}</CardDescription>
                    <div className="space-y-1">
                      <h5 className="text-sm font-semibold text-foreground/80">Key Objectives:</h5>
                      <ul className="space-y-1 text-sm text-foreground/70">
                        {program.objectives.map((obj) => (
                          <li key={obj} className="flex items-center gap-2">
                            <div className="h-1 w-1 rounded-full bg-accent" />
                            {obj}
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
        <h3 className="text-2xl font-semibold tracking-tight">Participate in Programs</h3>
        <p className="mt-2 text-foreground/75">
          Join strategic initiatives that drive mobility manufacturing excellence.
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
