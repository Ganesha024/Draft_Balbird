import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import Image from "next/image";
import { Instagram, Facebook, Mail, Factory, Car, Users, GraduationCap, Briefcase, DollarSign, Globe } from "lucide-react";

const roles = [
  {
    key: "Manufacturer",
    label: "Manufacturer",
    description: "Core manufacturing nodes providing verified capacity, capabilities, and compliance across mobility sectors.",
    responsibilities: ["Capacity verification", "Process certification", "Quality assurance", "Production scalability"],
    icon: Factory,
  },
  {
    key: "OEM_Tier",
    label: "OEM / Tier",
    description: "Original equipment manufacturers and tier suppliers driving sector requirements and specifications.",
    responsibilities: ["Technical specifications", "Volume planning", "Quality standards", "Supply chain integration"],
    icon: Car,
  },
  {
    key: "Industrial_Association",
    label: "Industrial Association",
    description: "Industry bodies facilitating collaboration, standardization, and collective capability development.",
    responsibilities: ["Standards development", "Cluster coordination", "Export facilitation", "Industry advocacy"],
    icon: Users,
  },
  {
    key: "Student_Workforce",
    label: "Student / Workforce",
    description: "Educational institutions and skilled workforce contributing to manufacturing operations and development.",
    responsibilities: ["Production support", "Process documentation", "Skill development", "Workforce integration"],
    icon: GraduationCap,
  },
  {
    key: "Strategic_Advisor",
    label: "Strategic Advisor",
    description: "Expert consultants providing strategic guidance on manufacturing strategy and operations.",
    responsibilities: ["Strategic planning", "Process optimization", "Market intelligence", "Regulatory guidance"],
    icon: Briefcase,
  },
  {
    key: "Financial_Institution",
    label: "Financial Institution",
    description: "Funding partners supporting manufacturing investments and cross-border program financing.",
    responsibilities: ["Investment facilitation", "Risk assessment", "Funding structuring", "Financial compliance"],
    icon: DollarSign,
  },
  {
    key: "International_Trade_Partner",
    label: "International Trade Partner",
    description: "Cross-border trade and logistics partners enabling international manufacturing collaboration.",
    responsibilities: ["Trade facilitation", "Customs coordination", "Logistics management", "International compliance"],
    icon: Globe,
  },
] as const;

export default function StakeholdersPage() {
  return (
    <div className="flex flex-col gap-10">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-10 shadow-sm">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_420px_at_12%_10%,color-mix(in_oklab,var(--navy)_10%,transparent),transparent_60%),radial-gradient(900px_380px_at_90%_20%,color-mix(in_oklab,var(--accent)_18%,transparent),transparent_60%)] opacity-90" />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Stakeholders
            </h1>
            <p className="max-w-2xl text-lg text-foreground/75">
              Balbird is role-defined by design. Each stakeholder participates through structured fields, validation, and aligned programs across the mobility manufacturing ecosystem.
            </p>
          </div>
          <div className="relative h-64 w-full max-w-sm shrink-0 overflow-hidden rounded-2xl border border-border bg-muted lg:h-80">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop" alt="Stakeholders network visualization" className="object-contain p-4 w-full h-full" />
          </div>
        </div>
      </section>

      {/* Stakeholders Overview */}
      <section className="space-y-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">Stakeholder Ecosystem</h2>
          <p className="max-w-3xl text-foreground/75">
            Our platform brings together diverse stakeholders in a structured ecosystem, each contributing unique value to mobility manufacturing.
          </p>
        </div>
        <Card className="overflow-hidden">
          <div className="flex flex-col gap-4 p-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1 space-y-4">
              <p className="text-foreground/80">
                The Balbird stakeholder ecosystem is built on role-defined participation, ensuring that each organization contributes according to its capabilities and receives value aligned with its needs. This structured approach enables efficient collaboration across the entire mobility manufacturing value chain.
              </p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div className="rounded-xl bg-foreground/[0.03] px-4 py-3">
                  <h4 className="font-semibold">Role-Based Access</h4>
                  <p className="mt-1 text-sm text-foreground/70">Tailored interfaces and data access based on stakeholder type and responsibilities.</p>
                </div>
                <div className="rounded-xl bg-foreground/[0.03] px-4 py-3">
                  <h4 className="font-semibold">Validation Framework</h4>
                  <p className="mt-1 text-sm text-foreground/70">Structured validation processes ensuring quality and compliance across all stakeholders.</p>
                </div>
                <div className="rounded-xl bg-foreground/[0.03] px-4 py-3">
                  <h4 className="font-semibold">Collaborative Benefits</h4>
                  <p className="mt-1 text-sm text-foreground/70">Mutual value creation through aligned incentives and shared success metrics.</p>
                </div>
                <div className="rounded-xl bg-foreground/[0.03] px-4 py-3">
                  <h4 className="font-semibold">Scalable Participation</h4>
                  <p className="mt-1 text-sm text-foreground/70">Flexible engagement models accommodating organizations of all sizes and types.</p>
                </div>
              </div>
            </div>
            <div className="relative h-40 w-full max-w-xs shrink-0 overflow-hidden rounded-xl border border-border bg-muted lg:h-48">
              <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop" alt="Stakeholder ecosystem overview" className="object-contain p-4 w-full h-full" />
            </div>
          </div>
        </Card>
      </section>

      {/* Why Defined Roles Matter */}
      <section className="space-y-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">Why Defined Roles Matter</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="p-4">
            <div className="mb-4">
              <CardTitle>When roles are unclear</CardTitle>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Expectations mismatch</p>
                  <p className="text-xs text-muted-foreground">When roles are ambiguous, stakeholders have different interpretations of responsibilities.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Capacity gets misused</p>
                  <p className="text-xs text-muted-foreground">Resources are allocated inefficiently without clear guidelines.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Funding decisions become risky</p>
                  <p className="text-xs text-muted-foreground">Investors lack confidence in uncertain role definitions.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Growth becomes unstable</p>
                  <p className="text-xs text-muted-foreground">Expansion efforts falter due to lack of clear direction.</p>
                </div>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="mb-4">
              <CardTitle>When roles are defined</CardTitle>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Capacity aligns with demand</p>
                  <p className="text-xs text-muted-foreground">Resources match actual needs precisely.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Workforce integrates properly</p>
                  <p className="text-xs text-muted-foreground">Team members know their roles and work cohesively.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Compliance improves</p>
                  <p className="text-xs text-muted-foreground">Clear standards ensure regulatory adherence.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Capital flows logically</p>
                  <p className="text-xs text-muted-foreground">Funding follows structured, predictable pathways.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Structure creates predictability</p>
                  <p className="text-xs text-muted-foreground">Operations become reliable and foreseeable.</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Stakeholder Roles */}
      <section className="space-y-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">Stakeholder Roles</h2>
          <p className="max-w-3xl text-foreground/75">
            Each stakeholder type plays a critical role in the ecosystem, contributing specific capabilities and receiving tailored benefits.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {roles.map((role) => (
            <Card key={role.key}>
              <div className="p-4">
                <div className="flex items-start gap-4">
                  <role.icon className="h-8 w-8 text-accent" />
                  <div className="flex-1">
                    <CardTitle>{role.label}</CardTitle>
                    <CardDescription>{role.description}</CardDescription>
                    <div className="space-y-1">
                      <h5 className="text-sm font-semibold text-foreground/80">Key Responsibilities:</h5>
                      <ul className="space-y-1 text-sm text-foreground/70">
                        {role.responsibilities.map((resp) => (
                          <li key={resp} className="flex items-center gap-2">
                            <div className="h-1 w-1 rounded-full bg-accent" />
                            {resp}
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
        <h3 className="text-2xl font-semibold tracking-tight">Find Your Role</h3>
        <p className="mt-2 text-foreground/75">
          Discover how your organization can participate in the mobility manufacturing ecosystem.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <ButtonLink href="/join-network" variant="primary" className="w-full sm:w-auto">
            Join the Network
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
