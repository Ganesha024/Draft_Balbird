import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import {
  ChevronDown, MessageSquare, ClipboardList,
  Shield, Target,
} from "lucide-react";

export default function RequestStrategicDiscussionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent/10 rounded-full blur-[120px]" />

        <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 pt-28 pb-16 animate-fade-in">
          <span className="inline-block text-accent font-bold tracking-widest uppercase text-sm mb-6 px-5 py-1.5 border border-accent/30 rounded-full bg-accent/10 backdrop-blur-sm">
            Start a Conversation
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.1] max-w-3xl">
            Request Strategic<br />
            <span className="text-accent">Discussion</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-8 font-medium leading-relaxed">
            Connect with our strategic team for in-depth discussions on mobility manufacturing opportunities, capacity planning, and ecosystem participation.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-16">
            {[
              { icon: ClipboardList, title: "Comprehensive Assessment", desc: "Detailed evaluation of your capabilities and strategic goals." },
              { icon: MessageSquare, title: "Expert Guidance", desc: "Direct access to industry experts and strategic advisors." },
              { icon: Target, title: "Customized Solutions", desc: "Tailored recommendations for your sector and requirements." },
              { icon: Shield, title: "Actionable Outcomes", desc: "Clear next steps and implementation strategies." },
            ].map((item, idx) => (
              <div key={idx} className="p-5 bg-slate-50 rounded-xl border border-black/5">
                <item.icon className="w-6 h-6 text-accent mb-3" />
                <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-foreground/60">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Intake Form */}
          <Card className="overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-extrabold tracking-tight mb-6">Request Your Discussion</h2>
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
                      <option value="oem_tier">OEM / Buyer</option>
                      <option value="association">Association</option>
                      <option value="student">Student / Execution Cell</option>
                      <option value="advisor">Strategic Advisor</option>
                      <option value="retail">Retail / Middlemen</option>
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
                      <option value="ev">Electric Vehicles</option>
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
                      placeholder="Describe the key topics you'd like to discuss"
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
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-slate-50 border-t border-border/30">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h2 className="text-3xl font-extrabold mb-4 tracking-tight">Explore the Ecosystem</h2>
          <p className="text-foreground/75 max-w-xl mx-auto mb-8">
            Learn more about our network and strategic programs while we prepare your discussion.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ButtonLink href="/join-network" variant="primary">
              Join Network
            </ButtonLink>
            <ButtonLink href="/strategic-programs" variant="secondary">
              View Strategic Programs
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
