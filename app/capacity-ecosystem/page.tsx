import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import {
  Factory, Building2, GraduationCap, Globe, BarChart3,
  CheckCircle, ChevronDown, Network, Shield,
} from "lucide-react";

const pillars = [
  {
    icon: Factory,
    title: "Manufacturing Units",
    description: "Core manufacturing nodes with verified data on capacity, capabilities, and compliance.",
    data: ["Machine Level Data", "Installed vs Utilized Capacity", "Process Capabilities", "Certifications", "Inspection Systems", "Scalability Readiness"],
  },
  {
    icon: Building2,
    title: "OEM Programs",
    description: "Structured OEM engagement with clear specifications, volumes, and compliance frameworks.",
    data: ["Technical Specifications", "Production Volumes", "Compliance Requirements", "Documentation Standards", "Timelines"],
  },
  {
    icon: GraduationCap,
    title: "Workforce / Students",
    description: "Skilled workforce integration and student programs for sustainable manufacturing support.",
    data: ["Production Assistance", "Inspection Support", "Documentation Structuring", "Process Mapping"],
  },
  {
    icon: Globe,
    title: "Industrial Associations",
    description: "Collaborative bodies driving cluster development, compliance, and export readiness.",
    data: ["Cluster Capability Mapping", "Compliance Initiatives", "Export Readiness", "Standardization"],
  },
  {
    icon: BarChart3,
    title: "Strategic / Financial",
    description: "Performance analytics, scalability planning, and acquisition readiness for stakeholders.",
    data: ["Operational Performance", "Utilization Trends", "Compliance Maturity", "Scalability Planning", "Acquisition Readiness"],
  },
] as const;

export default function CapacityEcosystemPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[300px] bg-accent/10 rounded-full blur-[120px]" />

        <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 pt-28 pb-16 animate-fade-in">
          <span className="inline-block text-accent font-bold tracking-widest uppercase text-sm mb-6 px-5 py-1.5 border border-accent/30 rounded-full bg-accent/10 backdrop-blur-sm">
            Ecosystem
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.1] max-w-3xl">
            Capacity<br />
            <span className="text-accent">Ecosystem</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 font-medium leading-relaxed">
            A structured network model connecting manufacturing units, OEM programs, workforce, associations, and strategic finance using standardized data.
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white/50 w-8 h-8" />
        </div>
      </section>

      {/* Ecosystem Overview */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col gap-3 mb-12">
            <span className="text-accent font-bold tracking-widest uppercase text-xs">Overview</span>
            <h2 className="text-3xl font-extrabold tracking-tight">Five Interconnected Pillars</h2>
            <p className="max-w-3xl text-foreground/80">
              The Capacity Ecosystem integrates verified manufacturing nodes with OEM requirements, skilled workforce, industry standards, and strategic financing.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-16">
            {[
              { icon: Network, title: "Data Standardization", desc: "Unified metrics across all pillars for accurate capacity matching." },
              { icon: Shield, title: "Compliance Integration", desc: "Embedded regulatory and quality standards throughout the network." },
              { icon: BarChart3, title: "Real-time Visibility", desc: "Live utilization, performance, and readiness data for all stakeholders." },
              { icon: Globe, title: "Scalability Focus", desc: "Built-in planning for capacity expansion and new program integration." },
            ].map((item, idx) => (
              <div key={idx} className="p-5 bg-card rounded-xl border border-border">
                <item.icon className="w-6 h-6 text-accent mb-3" />
                <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-foreground/60">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Pillar Cards */}
          <div className="grid gap-6 lg:grid-cols-2">
            {pillars.map((p, idx) => (
              <Card key={p.title} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                      <p.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <CardTitle>{p.title}</CardTitle>
                      <CardDescription>{p.description}</CardDescription>
                      <ul className="mt-3 space-y-1.5">
                        {p.data.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                            <div className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
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
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-24 md:py-32 bg-card border-y border-border/30">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col gap-3 mb-12">
            <span className="text-accent font-bold tracking-widest uppercase text-xs">Why It Matters</span>
            <h2 className="text-3xl font-extrabold tracking-tight">Long-Term Manufacturing Strength</h2>
            <p className="max-w-3xl text-foreground/80">
              In mobility sectors, programs are long-term. Compliance is strict. Traceability is non-negotiable. Only structured ecosystems survive this environment.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6 border-l-4 border-l-red-300">
              <CardTitle>Unstructured Growth Risks</CardTitle>
              <CardDescription>
                When capacity isn&apos;t properly structured, expectations mismatch, resources get misused, and funding becomes unpredictable. This leads to wasted potential and unstable operations.
              </CardDescription>
            </Card>
            <Card className="p-6 border-l-4 border-l-accent">
              <CardTitle>Structured Ecosystem Benefits</CardTitle>
              <CardDescription>
                Defined roles and data standards create predictability. Capacity aligns with demand, workforce integrates smoothly, compliance improves naturally, and capital flows logically.
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Join the Ecosystem
          </h2>
          <p className="text-xl mb-10 font-medium max-w-2xl mx-auto text-white/80">
            Connect your manufacturing capabilities to OEM programs and strategic partners.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ButtonLink href="/join-network" variant="primary" className="px-10 py-5 text-lg">
              Join Network
            </ButtonLink>
            <ButtonLink href="/request-strategic-discussion" variant="secondary" className="px-10 py-5 text-lg border-2 border-white/20 text-white hover:border-white">
              Request Strategic Discussion
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
