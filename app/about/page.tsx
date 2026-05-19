import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import Image from "next/image";
import {
  Factory,
  CheckCircle,
  Shield,
  Users,
  Target,
  ClipboardList,
  Network,
  Workflow,
  GraduationCap,
  Palette,
  BarChart3,
  Code,
  Globe,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-12 py-24 md:py-32">
      {/* Hero */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-8 py-14 shadow-sm">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_420px_at_12%_10%,color-mix(in_oklab,var(--accent)_12%,transparent),transparent_60%),radial-gradient(900px_380px_at_90%_20%,color-mix(in_oklab,var(--accent)_8%,transparent),transparent_60%)] opacity-90" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-4 max-w-2xl">
              <span className="inline-block text-accent font-bold tracking-widest uppercase text-xs w-fit">
                About Balbird
              </span>
              <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Cross-Border Manufacturing<br />Execution Partner
              </h1>
              <p className="text-lg text-foreground/75 leading-relaxed">
                Balbird is a cross-border manufacturing execution partner operating
                in the <strong>mobility components manufacturing sector</strong>. We help
                companies, manufacturers, suppliers, and partners execute
                manufacturing-related projects and operations together — with structure,
                traceability, and consistency.
              </p>
            </div>
            <div className="relative h-64 w-full max-w-sm shrink-0 overflow-hidden rounded-2xl border border-border bg-slate-900 lg:h-80 flex items-center justify-center">
              <div className="text-center p-6">
                <Globe className="w-16 h-16 text-accent mx-auto mb-4" />
                <p className="text-white font-bold text-xl">Mobility Components</p>
                <p className="text-white/60 text-sm mt-1">Manufacturing Sector</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Are / What We Are Not */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16 space-y-6">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-extrabold tracking-tight">Our Identity</h2>
          <p className="max-w-3xl text-foreground/75">
            Understanding what Balbird is — and what it is not — is critical to how we work with every stakeholder.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6 border-l-4 border-l-accent">
            <CardTitle>What We Are</CardTitle>
            <CardDescription>
              <ul className="mt-3 space-y-3">
                {[
                  'A cross-border manufacturing execution partner',
                  'Project-based — every engagement is a defined project',
                  'Focused exclusively on mobility components manufacturing',
                  'A facilitator of structured collaboration between stakeholders',
                  'Commission-based on production work + fees from execution cell',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardDescription>
          </Card>
          <Card className="p-6 border-l-4 border-l-red-300">
            <CardTitle>What We Are Not</CardTitle>
            <CardDescription>
              <ul className="mt-3 space-y-3">
                {[
                  'Not a broker — we don\'t take positions or trade margins',
                  'Not a marketplace — no open listings or spot trades',
                  'Not a trading company — we don\'t buy or resell',
                  'Not a listing platform — we maintain qualified, validated nodes',
                  'Not ad-hoc — every engagement follows structured execution',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-red-400 text-xs font-bold">✕</span>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardDescription>
          </Card>
        </div>
      </section>

      {/* What We Provide (Services Overview) */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16 space-y-6">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-extrabold tracking-tight">What We Provide</h2>
          <p className="max-w-3xl text-foreground/75">
            Contract Development Manufacturing Operations (CDMO) — structured execution across the mobility supply chain.
          </p>
        </div>
        <Card className="overflow-hidden">
          <div className="p-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Factory, title: 'Manufacturing Operations', desc: 'Coordinated production workflows across verified manufacturers.' },
                { icon: Workflow, title: 'Execution Coordination', desc: 'Project-level coordination from scoping through delivery.' },
                { icon: Shield, title: 'Manufacturing Traceability', desc: 'End-to-end documentation and compliance at every node.' },
                { icon: Network, title: 'Consortium Coordination', desc: 'Multi-stakeholder consortium alignment for large programs.' },
                { icon: Users, title: 'Execution Cell (HR)', desc: 'Student workforce support for HR and operational functions.' },
                { icon: BarChart3, title: 'Execution Cell (BD)', desc: 'Business development, outreach, and stakeholder research.' },
              ].map((service, idx) => (
                <div key={idx} className="rounded-xl bg-foreground/[0.03] px-5 py-4">
                  <div className="flex items-center gap-3 mb-2">
                    <service.icon className="h-5 w-5 text-accent" />
                    <h4 className="font-bold text-sm">{service.title}</h4>
                  </div>
                  <p className="text-sm text-foreground/70">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </section>

      {/* Operational Verticals */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16 space-y-6">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-extrabold tracking-tight">Operational Verticals</h2>
          <p className="max-w-3xl text-foreground/75">
            Four operational verticals structure everything we build and execute.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { icon: ClipboardList, title: 'Communication', desc: 'Stakeholder interaction systems, chatbot, and structured information flow.' },
            { icon: Target, title: 'Task Management', desc: 'Execution tracking, milestone monitoring, and accountability workflows.' },
            { icon: Network, title: 'Matchmaking', desc: 'AI-assisted matching of capabilities with requirements.' },
            { icon: Shield, title: 'Engineering', desc: 'Technical validation, quality assurance, and DFM analysis.' },
          ].map((vertical, idx) => (
            <Card key={idx} className="p-5 text-center">
              <vertical.icon className="h-8 w-8 text-accent mx-auto mb-3" />
              <CardTitle>{vertical.title}</CardTitle>
              <CardDescription>{vertical.desc}</CardDescription>
            </Card>
          ))}
        </div>
      </section>

      {/* Team Structure */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16 space-y-6">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-extrabold tracking-tight">Team Structure</h2>
          <p className="max-w-3xl text-foreground/75">
            A lean, focused team structured around execution — each member owns a critical operational domain.
          </p>
        </div>

        {/* Execution Architect */}
        <Card className="p-6 border-l-4 border-l-accent">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0">
              <Globe className="h-7 w-7 text-accent" />
            </div>
            <div>
              <CardTitle>Balraj — Execution Architect</CardTitle>
              <CardDescription>
                Responsible for overall execution system, structure and coordination, and system planning.
                Defines how all operational verticals connect and ensures the platform evolves as a cohesive ecosystem.
              </CardDescription>
            </div>
          </div>
        </Card>

        {/* Team Members */}
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              icon: Code,
              role: 'Member 1 — Frontend & Digital Experience',
              areas: [
                'Website and portal sophistication',
                'Workflow identification and implementation',
                'Stakeholder UX design',
                'Supplier capacity display on website',
                'SEO, trust signals, and continuous improvements',
                'Project execution through website',
              ],
            },
            {
              icon: Workflow,
              role: 'Member 2 — Backend & Operations',
              areas: [
                'Workflow implementation and automation',
                'Data mining and data flow formatting',
                'Workflow testing and reliability',
                'Engineering and matchmaking with AI',
                'Backend alignment with available tools',
                'System integration across tools',
              ],
            },
            {
              icon: Palette,
              role: 'Member 3 — Brand Identity & Media Systems',
              areas: [
                'Digital experience and communication tools',
                'Brand identity themes and PMF content',
                'LinkedIn, blogs, resources, insights',
                'Brochures, presentations, and creatives',
                'Stakeholder-specific content delivery',
                'Case studies and social media strategy',
              ],
            },
            {
              icon: BarChart3,
              role: 'Member 4 — Strategy, Outreach & Business Development',
              areas: [
                'Stakeholder research and behavior analysis',
                'Outreach and demand creation',
                'Market and stakeholder feedback collection',
                'Opportunity analysis and conversion strategy',
                'Legal, financial, and technical factor analysis',
                'Competitor outperformance strategies',
              ],
            },
          ].map((member, idx) => (
            <Card key={idx} className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <member.icon className="h-5 w-5 text-accent" />
                </div>
                <CardTitle>{member.role}</CardTitle>
              </div>
              <ul className="space-y-2">
                {member.areas.map((area, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    {area}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* Resources We Have */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16 space-y-6">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-extrabold tracking-tight">Resources & Network</h2>
          <p className="max-w-3xl text-foreground/75">
            We leverage a strong network of advisors, associations, and industry connections.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            'Legal Advisor',
            'Financial Advisor',
            'Tech Advisor',
            'Supplier Associations',
            'Student Workforce',
            'Non-Tech Advisors',
            'Industrial HR Networks',
            'Sales Networks',
            'Quality Networks',
            'Manufacturer Networks',
            'Financial Stability',
            'LinkedIn Premium',
          ].map((resource, idx) => (
            <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-black/5">
              <CheckCircle className="w-4 h-4 text-accent shrink-0" />
              <span className="text-sm font-medium text-foreground/80">{resource}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Tools We Use */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16 space-y-6">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-extrabold tracking-tight">Tools & Systems</h2>
          <p className="max-w-3xl text-foreground/75">
            Our current operational toolkit — continuously evolving as we scale.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: 'Website & Portal', desc: 'Digital presence and stakeholder interface' },
            { name: 'Communication Chatbot', desc: 'Stakeholder interaction system' },
            { name: 'Task Management App', desc: 'Execution tracking and coordination' },
            { name: 'n8n', desc: 'Workflow automation engine' },
            { name: 'NoteGPT.io', desc: 'Video content and note processing' },
            { name: 'Google Workspace', desc: 'Collaboration and documents' },
            { name: 'LinkedIn Premium', desc: 'Professional networking and outreach' },
            { name: 'Free Tools Stack', desc: 'Additional utility tools as needed' },
          ].map((tool, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-foreground/[0.03] border border-black/5">
              <h4 className="font-bold text-sm mb-1">{tool.name}</h4>
              <p className="text-xs text-foreground/60">{tool.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Design Expectations */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16 space-y-6">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-extrabold tracking-tight">What We Build Towards</h2>
          <p className="max-w-3xl text-foreground/75">
            Our standards for everything we build and deploy.
          </p>
        </div>
        <Card className="p-6">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'Operationally seamless for stakeholders',
              'Flexible and not rigid',
              'Space for continuous evolution',
              'Externally deployable/configurable',
              'Designed properly from ground level',
              'Precise and structured',
              'Testable with dummy data',
              'Managed through task management',
              'Quantifiable with proper justification',
              'Continuously evolvable',
              'Multi-stakeholder capable',
              'AI and automation wherever possible',
            ].map((expectation, idx) => (
              <div key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>{expectation}</span>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="rounded-2xl border border-border bg-muted px-8 py-10 text-center">
          <h3 className="text-2xl font-extrabold tracking-tight">Ready to Work Together?</h3>
          <p className="mt-2 text-foreground/75">
            Join a structured ecosystem built for mobility manufacturing execution.
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
