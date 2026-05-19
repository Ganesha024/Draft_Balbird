import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import {
  Factory,
  Building2,
  Handshake,
  Briefcase,
  Globe,
  GraduationCap,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const stakeholders = [
  {
    key: "Manufacturer",
    label: "Manufacturers",
    icon: Factory,
    description:
      "Core manufacturing nodes providing verified capacity, capabilities, and compliance across mobility sectors. They execute production within consortium-aligned projects.",
    whatTheyDo: [
      "Provide verified production capacity",
      "Execute manufacturing operations per project scope",
      "Maintain certifications and quality standards",
      "Participate in cross-border consortium programs",
    ],
    whatTheyGet: [
      "Access to structured project pipelines",
      "Cross-border collaboration opportunities",
      "Execution coordination and traceability support",
      "Visibility to OEMs and buyers through the ecosystem",
    ],
  },
  {
    key: "Buyer",
    label: "Buyers & OEMs",
    icon: Building2,
    description:
      "Companies sourcing mobility components with specific technical requirements, volume needs, and compliance standards. They drive project requirements and demand.",
    whatTheyDo: [
      "Define technical specifications and volume requirements",
      "Set quality standards and compliance expectations",
      "Participate in project scoping and planning",
      "Evaluate and approve matched manufacturer capabilities",
    ],
    whatTheyGet: [
      "Access to verified manufacturer capacities",
      "Structured execution with full traceability",
      "Reduced sourcing risk through pre-qualified networks",
      "Consortium-aligned production partnerships",
    ],
  },
  {
    key: "Strategic_Partner",
    label: "Strategic Partners",
    icon: Handshake,
    description:
      "Legal, financial, and technical advisors who support execution quality, compliance, and strategic direction across manufacturing projects.",
    whatTheyDo: [
      "Provide legal, financial, and regulatory guidance",
      "Support compliance and risk assessment",
      "Offer technical advisory for manufacturing operations",
      "Enable strategic planning and market intelligence",
    ],
    whatTheyGet: [
      "Structured advisory engagement model",
      "Access to cross-border manufacturing programs",
      "Long-term ecosystem participation",
      "Role-defined contribution framework",
    ],
  },
  {
    key: "Retail_Middlemen",
    label: "Retail & Middlemen",
    icon: Briefcase,
    description:
      "Distribution and channel partners enabling market access, delivery logistics, and commercial facilitation within defined project scopes.",
    whatTheyDo: [
      "Facilitate market access and distribution channels",
      "Support commercial logistics coordination",
      "Enable last-mile delivery and distribution",
      "Bridge local market relationships",
    ],
    whatTheyGet: [
      "Access to verified manufacturing output",
      "Structured engagement without intermediary trading",
      "Quality-assured components with full traceability",
      "Program-level participation opportunities",
    ],
  },
  {
    key: "Association",
    label: "Associations & Members",
    icon: Globe,
    description:
      "Industry bodies and supplier associations facilitating collaboration, standardization, and collective capability development across mobility manufacturing clusters.",
    whatTheyDo: [
      "Facilitate industry standards and best practices",
      "Coordinate cluster development and export promotion",
      "Enable member capability aggregation",
      "Support industry advocacy and policy alignment",
    ],
    whatTheyGet: [
      "Structured ecosystem for member activation",
      "Cross-border program participation for members",
      "Data-driven insights on sector capacity",
      "Enhanced value proposition for members",
    ],
  },
  {
    key: "Execution_Cell",
    label: "Execution Cell Members (Students)",
    icon: GraduationCap,
    description:
      "Student workforce contributing to HR operations, business development, and manufacturing process support — forming the execution backbone of project operations.",
    whatTheyDo: [
      "Support HR and workforce coordination",
      "Drive business development and outreach activities",
      "Assist in manufacturing process documentation",
      "Handle operational tasks across project phases",
    ],
    whatTheyGet: [
      "Real-world manufacturing industry exposure",
      "Structured skill development framework",
      "Cross-functional operational experience",
      "Network access to industry professionals",
    ],
  },
] as const;

export default function StakeholdersPage() {
  return (
    <div className="flex flex-col gap-12 py-24 md:py-32">
      {/* Hero */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-8 py-14 shadow-sm">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_420px_at_12%_10%,color-mix(in_oklab,var(--accent)_12%,transparent),transparent_60%),radial-gradient(900px_380px_at_90%_20%,color-mix(in_oklab,var(--accent)_8%,transparent),transparent_60%)] opacity-90" />
          <div className="relative flex flex-col gap-6 max-w-3xl">
            <span className="inline-block text-accent font-bold tracking-widest uppercase text-xs w-fit">
              Who&apos;s Involved
            </span>
            <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Stakeholder Ecosystem
            </h1>
            <p className="text-lg text-foreground/75 leading-relaxed">
              Balbird operates with a defined set of stakeholders — each with a clear role,
              structured access, and aligned outcomes. We don&apos;t do open listings.
              Every participant is role-defined by design.
            </p>
          </div>
        </div>
      </section>

      {/* Overview: Why Defined Roles */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16 space-y-6">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-extrabold tracking-tight">Why Defined Roles Matter</h2>
          <p className="max-w-3xl text-foreground/75">
            In mobility manufacturing, unstructured collaboration creates risk. Defined roles create predictability.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6 border-l-4 border-l-red-300">
            <CardTitle>When roles are unclear</CardTitle>
            <CardDescription>
              <ul className="mt-3 space-y-2">
                {[
                  'Expectations mismatch between stakeholders',
                  'Capacity gets misused or misallocated',
                  'Funding decisions become risky and uncertain',
                  'Growth becomes unstable and unpredictable',
                  'Compliance gaps emerge at critical stages',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <span className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-red-400 text-xs font-bold">✕</span>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </CardDescription>
          </Card>
          <Card className="p-6 border-l-4 border-l-accent">
            <CardTitle>When roles are defined</CardTitle>
            <CardDescription>
              <ul className="mt-3 space-y-2">
                {[
                  'Capacity aligns with actual demand',
                  'Workforce integrates properly into operations',
                  'Compliance improves across all nodes',
                  'Capital flows through logical pathways',
                  'Structure creates predictability and trust',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardDescription>
          </Card>
        </div>
      </section>

      {/* Stakeholder Roles — Detailed Cards */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16 space-y-6">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-extrabold tracking-tight">Stakeholder Roles</h2>
          <p className="max-w-3xl text-foreground/75">
            Each stakeholder type has defined responsibilities and receives structured value
            from the ecosystem.
          </p>
        </div>
        <div className="space-y-6">
          {stakeholders.map((s) => (
            <Card key={s.key} className="overflow-hidden">
              <div className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <s.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle>{s.label}</CardTitle>
                    <CardDescription>{s.description}</CardDescription>
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="bg-slate-50 rounded-xl p-5 border border-black/5">
                    <h4 className="font-bold text-sm mb-3 text-foreground/90">What they contribute</h4>
                    <ul className="space-y-2">
                      {s.whatTheyDo.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-foreground/70">
                          <ArrowRight className="w-3 h-3 text-accent shrink-0 mt-1" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-accent/5 rounded-xl p-5 border border-accent/10">
                    <h4 className="font-bold text-sm mb-3 text-foreground/90">What they receive</h4>
                    <ul className="space-y-2">
                      {s.whatTheyGet.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-foreground/70">
                          <CheckCircle className="w-3 h-3 text-accent shrink-0 mt-1" />
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
      <section className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="rounded-2xl border border-border bg-muted px-8 py-10 text-center">
          <h3 className="text-2xl font-extrabold tracking-tight">Find Your Role in the Ecosystem</h3>
          <p className="mt-2 text-foreground/75 max-w-xl mx-auto">
            Whether you&apos;re a manufacturer, buyer, association, or student —
            there&apos;s a defined role for you in the Balbird ecosystem.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <ButtonLink href="/join-network" variant="primary" className="w-full sm:w-auto">
              Join the Network
            </ButtonLink>
            <ButtonLink href="/request-strategic-discussion" variant="secondary" className="w-full sm:w-auto">
              Request Strategic Discussion
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
