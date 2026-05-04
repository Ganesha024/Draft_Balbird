import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import Image from "next/image";

export default function RequestStrategicDiscussionPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-10 shadow-sm">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_420px_at_12%_10%,color-mix(in_oklab,var(--navy)_10%,transparent),transparent_60%),radial-gradient(900px_380px_at_90%_20%,color-mix(in_oklab,var(--accent)_18%,transparent),transparent_60%)] opacity-90" />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Request Strategic Discussion
            </h1>
            <p className="max-w-2xl text-lg text-foreground/75">
              Connect with our strategic team for in-depth discussions on mobility manufacturing opportunities, capacity planning, and ecosystem participation.
            </p>
          </div>
          <div className="relative h-64 w-full max-w-sm shrink-0 overflow-hidden rounded-2xl border border-border bg-muted lg:h-80">
            <Image src="/images/request-strategic-discussion-hero.svg" alt="Strategic discussion visualization" fill className="object-contain p-4" />
          </div>
        </div>
      </section>

      {/* Discussion Overview */}
      <section className="space-y-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">Strategic Discussion Process</h2>
          <p className="max-w-3xl text-foreground/75">
            Our structured approach ensures meaningful, actionable discussions tailored to your organization's strategic needs.
          </p>
        </div>
        <Card className="overflow-hidden">
          <div className="flex flex-col gap-4 p-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1 space-y-4">
              <p className="text-foreground/80">
                Strategic discussions are the foundation of successful partnerships in the mobility manufacturing ecosystem. We take time to understand your unique challenges, objectives, and opportunities before providing customized insights and recommendations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="rounded-xl bg-foreground/[0.03] px-4 py-3">
                  <h4 className="font-semibold">Comprehensive Assessment</h4>
                  <p className="mt-1 text-sm text-foreground/70">Detailed evaluation of your current capabilities and strategic goals.</p>
                </div>
                <div className="rounded-xl bg-foreground/[0.03] px-4 py-3">
                  <h4 className="font-semibold">Expert Guidance</h4>
                  <p className="mt-1 text-sm text-foreground/70">Direct access to industry experts and strategic advisors.</p>
                </div>
                <div className="rounded-xl bg-foreground/[0.03] px-4 py-3">
                  <h4 className="font-semibold">Customized Solutions</h4>
                  <p className="mt-1 text-sm text-foreground/70">Tailored recommendations for your specific sector and requirements.</p>
                </div>
                <div className="rounded-xl bg-foreground/[0.03] px-4 py-3">
                  <h4 className="font-semibold">Actionable Outcomes</h4>
                  <p className="mt-1 text-sm text-foreground/70">Clear next steps and implementation strategies.</p>
                </div>
              </div>
            </div>
            <div className="relative h-40 w-full max-w-xs shrink-0 overflow-hidden rounded-xl border border-border bg-muted lg:h-48">
              <Image src="/images/request-strategic-discussion-overview.svg" alt="Strategic discussion process overview" fill className="object-contain p-4" />
            </div>
          </div>
        </Card>
      </section>

      {/* Intake Form */}
      <section className="space-y-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">Request Your Discussion</h2>
          <p className="max-w-3xl text-foreground/75">
            Fill out the intake form below to initiate the strategic discussion process. All information helps us prepare for a productive conversation.
          </p>
        </div>
        <Card>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium">Organization Name</label>
                <input
                  className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                  name="organization_name"
                  placeholder="Your organization name"
                />
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium">Stakeholder Type</label>
                <select
                  className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                  name="stakeholder_type"
                >
                  <option value="">Select stakeholder type</option>
                  <option value="manufacturer">Manufacturer</option>
                  <option value="oem_tier">OEM / Tier</option>
                  <option value="industrial_association">Industrial Association</option>
                  <option value="student_workforce">Student / Workforce</option>
                  <option value="strategic_advisor">Strategic Advisor</option>
                  <option value="financial_institution">Financial Institution</option>
                  <option value="international_trade_partner">International Trade Partner</option>
                </select>
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium">Sector</label>
                <select
                  className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                  name="sector"
                >
                  <option value="">Select sector</option>
                  <option value="aerospace">Aerospace</option>
                  <option value="automotive">Automotive</option>
                  <option value="electric_vehicles">Electric Vehicles</option>
                  <option value="railway">Railway</option>
                  <option value="marine">Marine</option>
                  <option value="heavy_mobility">Heavy Mobility</option>
                </select>
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium">Country / Region</label>
                <input
                  className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                  name="country_region"
                  placeholder="Country or region"
                />
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium">Contact Person</label>
                <input
                  className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                  name="contact_person"
                  placeholder="Full name"
                />
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium">Contact Email</label>
                <input
                  className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                  name="contact_email"
                  type="email"
                  placeholder="email@organization.com"
                />
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium">Program Interest</label>
                <select
                  className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                  name="program_interest"
                >
                  <option value="">Select program of interest</option>
                  <option value="capacity_enhancement">Capacity Enhancement</option>
                  <option value="capability_compliance">Capability Compliance Strengthening</option>
                  <option value="workforce_integration">Workforce Integration</option>
                  <option value="oem_alignment">OEM Alignment</option>
                  <option value="cluster_development">Cluster Development</option>
                  <option value="strategic_expansion">Strategic Expansion Capital Alignment</option>
                  <option value="cross_country_bilateral">Cross Country Bilateral Programs</option>
                </select>
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium">Capacity / Capability Focus</label>
                <select
                  className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                  name="capacity_focus"
                >
                  <option value="">Select focus area</option>
                  <option value="manufacturing_capacity">Manufacturing Capacity</option>
                  <option value="technical_capabilities">Technical Capabilities</option>
                  <option value="compliance_maturity">Compliance Maturity</option>
                  <option value="workforce_development">Workforce Development</option>
                  <option value="supply_chain">Supply Chain Integration</option>
                  <option value="international_expansion">International Expansion</option>
                </select>
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium">Compliance Maturity Level</label>
                <select
                  className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                  name="compliance_maturity"
                >
                  <option value="">Select maturity level</option>
                  <option value="basic">Basic - Initial compliance processes</option>
                  <option value="intermediate">Intermediate - Established frameworks</option>
                  <option value="advanced">Advanced - Mature compliance systems</option>
                  <option value="expert">Expert - Industry-leading standards</option>
                </select>
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium">Preferred Timeline</label>
                <select
                  className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                  name="preferred_timeline"
                >
                  <option value="">Select preferred timeline</option>
                  <option value="immediate">Immediate (within 1 week)</option>
                  <option value="short_term">Short-term (within 1 month)</option>
                  <option value="medium_term">Medium-term (1-3 months)</option>
                  <option value="long_term">Long-term (3+ months)</option>
                </select>
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium">Discussion Topics</label>
                <textarea
                  className="min-h-24 w-full rounded-xl border border-border bg-background px-3 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                  name="discussion_topics"
                  placeholder="Describe the key topics you'd like to discuss (e.g., capacity expansion, compliance challenges, market opportunities)"
                />
              </div>

              <button
                type="submit"
                className="h-11 w-full rounded-xl bg-accent px-4 text-sm font-medium text-accent-foreground transition-colors hover:brightness-110"
              >
                Submit Request
              </button>
            </div>
          </div>
        </Card>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-border bg-muted px-6 py-8 text-center">
        <h3 className="text-2xl font-semibold tracking-tight">Explore the Ecosystem</h3>
        <p className="mt-2 text-foreground/75">
          Learn more about our network and strategic programs while we prepare your discussion.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <ButtonLink href="https://wa.link/bspaba" variant="primary" className="w-full sm:w-auto">
            Join Network
          </ButtonLink>
          <ButtonLink href="https://wa.link/bspaba" variant="secondary" className="w-full sm:w-auto">
            View Strategic Programs
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}
