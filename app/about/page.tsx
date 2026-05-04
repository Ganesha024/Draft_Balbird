import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import Image from "next/image";
import { Instagram, Facebook, Mail, Factory, CheckCircle, Shield } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-10">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-10 shadow-sm">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_420px_at_12%_10%,color-mix(in_oklab,var(--navy)_10%,transparent),transparent_60%),radial-gradient(900px_380px_at_90%_20%,color-mix(in_oklab,var(--accent)_18%,transparent),transparent_60%)] opacity-90" />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              About Balbird Industries
            </h1>
            <p className="max-w-2xl text-lg text-foreground/75">
              Balbird is a structured ecosystem platform focused on mobility manufacturing only—built to align capacity, capabilities, compliance, and traceability across stakeholders.
            </p>
          </div>
          <div className="relative h-64 w-full max-w-sm shrink-0 overflow-hidden rounded-2xl border border-border bg-muted lg:h-80">
            <Image src="/images/about-hero.svg" alt="Balbird ecosystem visualization" fill className="object-contain p-4" />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="space-y-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">Our Story</h2>
          <p className="max-w-3xl text-foreground/75">
            Balbird emerged from the critical challenges faced in mobility manufacturing ecosystems. As global demand for sustainable transportation grows, the complexity of aligning capacity, capabilities, and compliance across borders has become a major bottleneck.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="p-4">
            <CardTitle>The Problem</CardTitle>
            <CardDescription>
              Traditional manufacturing networks lack structure, leading to mismatched expectations, wasted capacity, and compliance failures. Unstructured growth creates fragility in critical supply chains.
            </CardDescription>
          </Card>
          <Card className="p-4">
            <CardTitle>Our Solution</CardTitle>
            <CardDescription>
              Balbird provides a role-defined framework that structures mobility manufacturing capacity across stakeholders—manufacturers, OEMs, associations, workforce, and finance—ensuring transparency and scalability.
            </CardDescription>
          </Card>
          <Card className="p-4">
            <CardTitle>Why It Matters</CardTitle>
            <CardDescription>
              In mobility sectors, programs are long-term, compliance is strict, and traceability is non-negotiable. Only structured ecosystems can scale sustainably in this environment.
            </CardDescription>
          </Card>
          <Card className="p-4">
            <CardTitle>The Future</CardTitle>
            <CardDescription>
              We're building foundation for resilient, cross-border manufacturing networks that power next generation of mobility solutions—from aerospace to electric vehicles.
            </CardDescription>
          </Card>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="space-y-4">
        <Card className="overflow-hidden">
          <div className="flex flex-col gap-4 p-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="grid flex-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col gap-2">
                <Factory className="h-6 w-6 text-accent" />
                <h3 className="text-lg font-semibold">Capacity</h3>
                <p className="text-sm text-foreground/70">
                  Verified production capacity across facilities with real-time availability and utilization metrics.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <CheckCircle className="h-6 w-6 text-accent" />
                <h3 className="text-lg font-semibold">Capability</h3>
                <p className="text-sm text-foreground/70">
                  Certified capabilities, process standards, and technology readiness levels for each manufacturing node.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <Shield className="h-6 w-6 text-accent" />
                <h3 className="text-lg font-semibold">Continuity</h3>
                <p className="text-sm text-foreground/70">
                  Risk mitigation, supply chain resilience, and compliance traceability from raw material to finished goods.
                </p>
              </div>
            </div>
            <div className="relative h-40 w-full max-w-xs shrink-0 overflow-hidden rounded-xl border border-border bg-muted lg:h-48">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop" alt="Three pillars visualization" className="object-contain p-4 w-full h-full" />
            </div>
          </div>
        </Card>
      </section>

      {/* Not a */}
      <section className="space-y-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">What We Are Not</h2>
          <p className="max-w-3xl text-foreground/75">
            We are not another marketplace or broker. We are a structured platform that enforces standards and transparency.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardTitle>Not a Broker</CardTitle>
            <CardDescription>
              We don’t take positions or trade margins. We provide verified data and structured workflows for direct engagement.
            </CardDescription>
          </Card>
          <Card>
            <CardTitle>Not a Trading Intermediary</CardTitle>
            <CardDescription>
              We don’t facilitate spot trades or speculative transactions. All engagements are role-defined and compliance-bound.
            </CardDescription>
          </Card>
          <Card>
            <CardTitle>Not a Listing Platform</CardTitle>
            <CardDescription>
              We don’t host open listings. We maintain qualified, validated manufacturing nodes with traceable capabilities.
            </CardDescription>
          </Card>
        </div>
      </section>

      {/* Long-term direction */}
      <section className="space-y-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">Long-term Direction</h2>
          <p className="max-w-3xl text-foreground/75">
            Our roadmap focuses on strengthening clusters, improving transparency, and enabling seamless OEM integration.
          </p>
        </div>
        <Card className="overflow-hidden">
          <div className="flex flex-col gap-4 p-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="grid flex-1 gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-foreground/[0.03] px-4 py-3">
                <h4 className="font-semibold">Cluster Strengthening</h4>
                <p className="mt-1 text-sm text-foreground/70">Build regional manufacturing clusters with shared infrastructure.</p>
              </div>
              <div className="rounded-xl bg-foreground/[0.03] px-4 py-3">
                <h4 className="font-semibold">Acquisition Transparency</h4>
                <p className="mt-1 text-sm text-foreground/70">End-to-end traceability of component sourcing and costs.</p>
              </div>
              <div className="rounded-xl bg-foreground/[0.03] px-4 py-3">
                <h4 className="font-semibold">Funding Clarity</h4>
                <p className="mt-1 text-sm text-foreground/70">Clear funding flows and compliance for cross-border programs.</p>
              </div>
              <div className="rounded-xl bg-foreground/[0.03] px-4 py-3">
                <h4 className="font-semibold">OEM Onboarding Structure</h4>
                <p className="mt-1 text-sm text-foreground/70">Standardized pathways for OEMs to join and integrate.</p>
              </div>
              <div className="rounded-xl bg-foreground/[0.03] px-4 py-3">
                <h4 className="font-semibold">Workforce Integration</h4>
                <p className="mt-1 text-sm text-foreground/70">Skill mapping and workforce mobility across nodes.</p>
              </div>
            </div>
            <div className="relative h-40 w-full max-w-xs shrink-0 overflow-hidden rounded-xl border border-border bg-muted lg:h-48">
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop" alt="Long-term direction roadmap" className="object-contain p-3 w-full h-full" />
            </div>
          </div>
        </Card>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-border bg-muted px-6 py-8 text-center">
        <h3 className="text-2xl font-semibold tracking-tight">Ready to Engage?</h3>
        <p className="mt-2 text-foreground/75">
          Join a structured ecosystem built for mobility manufacturing excellence.
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
