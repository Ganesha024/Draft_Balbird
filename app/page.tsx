import Link from "next/link";

import { ButtonLink } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import Image from "next/image";
import { Instagram, Facebook, Mail, Plane, Car, Zap, Train, Ship, Cog } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <section className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-10 shadow-sm">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_420px_at_12%_10%,color-mix(in_oklab,var(--navy)_10%,transparent),transparent_60%),radial-gradient(900px_380px_at_90%_20%,color-mix(in_oklab,var(--accent)_18%,transparent),transparent_60%)] opacity-90" />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-4">
            <div className="text-xs font-semibold tracking-[0.2em] text-foreground/60">
              STRUCTURED ECOSYSTEM PLATFORM
            </div>
            <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Structuring Mobility Manufacturing Capacity Across Borders
            </h1>
            <p className="max-w-2xl text-lg text-foreground/75">
              Structured Mobility Manufacturing Capacity &amp; Capability Network built on a role-defined capacity alignment framework. Connecting manufacturers, OEMs, and stakeholders in a transparent, scalable ecosystem.
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "Capacity",
                "Capabilities",
                "Compliance",
                "Traceability",
              ].map((k) => (
                <span
                  key={k}
                  className="rounded-full border border-black/10 bg-background px-3 py-1 text-sm text-foreground/80 dark:border-white/10"
                >
                  {k}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/join-network" className="shadow-md shadow-black/20">
                Enter the Network
              </ButtonLink>
              <ButtonLink
                href="/mobility-sectors"
                variant="secondary"
                className="border-border bg-background text-foreground hover:bg-muted"
              >
                View Mobility Sectors
              </ButtonLink>
              <ButtonLink
                href="/active-requirements"
                variant="secondary"
                className="border-border bg-background text-foreground hover:bg-muted"
              >
                Active Mandates
              </ButtonLink>
            </div>
          </div>
          <div className="relative h-64 w-full max-w-sm shrink-0 overflow-hidden rounded-2xl border border-border bg-muted lg:h-80">
            <Image src="/images/mobility-manufacturing.jpg" alt="Balbird ecosystem network visualization" fill className="object-contain p-4" />
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-3">
          <div className="text-xs font-semibold tracking-[0.2em] text-foreground/60">
            EXECUTION MODEL
          </div>
          <h2 className="text-2xl font-semibold tracking-tight">Purpose-built structuring steps</h2>
          <p className="text-foreground/75">
            A structured pathway to align capacity, capability, compliance, and expansion. Our 6-step methodology ensures systematic integration and scalable growth across mobility manufacturing ecosystems.
          </p>
        </div>
        <div className="relative h-60 w-full max-w-xs shrink-0 overflow-hidden rounded-xl border border-border bg-muted lg:h-72 ml-auto">
          <Image src="/images/executionmodel_home.png" alt="Execution model steps visualization" fill className="object-contain p-4" />
        </div>
      </section>

      <section>
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Capacity Mapping - Identify and verify manufacturing capabilities across facilities.",
            "Capability Validation - Certify technical standards and process capabilities.",
            "Workforce Integration - Connect skilled labor with manufacturing requirements.",
            "Documentation & Traceability - Implement comprehensive compliance and quality systems.",
            "Trade & Program Alignment - Coordinate international partnerships and funding.",
            "Strategic Expansion - Plan scalable growth and cross-border manufacturing.",
          ].map((step, i) => (
            <li key={step}>
              <Card className="p-4">
                <div className="text-xs font-medium text-foreground/60">
                  Step {i + 1}
                </div>
                <div className="mt-1 font-medium">{step.split(' - ')[0]}</div>
                <div className="mt-1 text-sm text-foreground/70">{step.split(' - ')[1]}</div>
              </Card>
            </li>
          ))}
        </ol>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-3">
          <div className="text-xs font-semibold tracking-[0.2em] text-foreground/60">
            SECTORS
          </div>
          <h2 className="text-2xl font-semibold tracking-tight">Mobility Sectors</h2>
          <p className="text-foreground/75">
            Capacity and capability structuring across key mobility manufacturing domains. From aerospace precision to heavy machinery, we support specialized manufacturing requirements for each sector.
          </p>
          <div>
            <Link href="/mobility-sectors" className="text-sm font-medium hover:underline">
              Explore sectors
            </Link>
          </div>
        </div>
        <div className="relative h-40 w-full max-w-xs shrink-0 overflow-hidden rounded-xl border border-border bg-muted lg:h-48 ml-auto">
          <Image src="/images/Mobility.jpg" alt="Mobility sectors overview" fill className="object-cover" />
        </div>
      </section>

      <section>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Aerospace", desc: "Precision components with strict certification and traceability standards.", icon: Plane },
            { name: "Automotive", desc: "High-volume production for traditional and electric vehicles.", icon: Car },
            { name: "EV", desc: "Battery systems, motors, and EV-specific manufacturing.", icon: Zap },
            { name: "Railway", desc: "Heavy-duty rail systems with safety and reliability focus.", icon: Train },
            { name: "Marine", desc: "Corrosion-resistant marine applications and offshore equipment.", icon: Ship },
            { name: "Heavy", desc: "Large-scale machinery and equipment manufacturing.", icon: Cog },
          ].map((sector) => (
            <Card key={sector.name} className="p-4">
              <div className="flex items-center gap-2 mb-2">
                {typeof sector.icon === 'string' ? <Image src={sector.icon} alt={sector.name} width={28} height={28} className="rounded-full" /> : <sector.icon className="h-6 w-6 text-accent" />}
                <CardTitle>{sector.name}</CardTitle>
              </div>
              <CardDescription>{sector.desc}</CardDescription>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-3">
          <div className="text-xs font-semibold tracking-[0.2em] text-foreground/60">
            STAKEHOLDERS
          </div>
          <h2 className="text-2xl font-semibold tracking-tight">Stakeholders</h2>
          <p className="text-foreground/75">
            Role-defined participation across manufacturers, OEMs, associations, workforce, strategic advisors, and referral networks. Each stakeholder type brings unique value and receives tailored support within the ecosystem.
          </p>
          <div>
            <Link href="/stakeholders" className="text-sm font-medium hover:underline">
              View stakeholder roles
            </Link>
          </div>
        </div>
        <div className="relative h-48 w-full max-w-xs shrink-0 overflow-hidden rounded-xl border border-border bg-muted lg:h-64 ml-auto">
          <Image src="/images/stakeholder.jpg" alt="Stakeholders ecosystem overview" fill className="object-cover" />
        </div>
      </section>

      <section>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Manufacturers", desc: "Core production facilities providing capacity and capabilities." },
            { name: "OEM / Tier", desc: "Original equipment manufacturers driving market requirements." },
            { name: "Associations", desc: "Sector bodies facilitating collaboration and standards." },
            { name: "Workforce", desc: "Educational institutions and skilled labor providers." },
            { name: "Strategic Advisors", desc: "Strategic advisors and funders supporting ecosystem growth." },
            { name: "Referral Network", desc: "Industry connectors, ex-manufacturing professionals, and freelancers bridging ecosystem gaps." },
          ].map((role) => (
            <Card key={role.name} className="p-4">
              <CardTitle>{role.name}</CardTitle>
              <CardDescription>{role.desc}</CardDescription>
            </Card>
          ))}
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
