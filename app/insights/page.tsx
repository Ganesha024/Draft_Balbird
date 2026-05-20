import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import {
  BookOpen, Filter, FileText, Tag, Calendar,
  Lightbulb, ChevronDown, TrendingUp, Shield, Users,
} from "lucide-react";

const filters = [
  "Aerospace", "Automotive EV", "Railway", "Marine", "Heavy Mobility",
  "Capacity Trends", "Compliance Documentation", "Workforce Development", "Strategic Programs",
] as const;

const articleStructure = [
  "Title", "Sector Tag", "Summary", "Date",
  "Key Takeaways", "Related Resources", "Related Requirements",
] as const;

export default function InsightsPage() {
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
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[300px] bg-accent/10 rounded-full blur-[120px]" />

        <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 pt-28 pb-16 animate-fade-in">
          <span className="inline-block text-accent font-bold tracking-widest uppercase text-sm mb-6 px-5 py-1.5 border border-accent/30 rounded-full bg-accent/10 backdrop-blur-sm">
            Knowledge Hub
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.1] max-w-3xl">
            Industry<br />
            <span className="text-accent">Insights</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-8 font-medium leading-relaxed">
            Structured articles tagged to sectors and programs, connected to resources and active requirements for informed decision-making.
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white/50 w-8 h-8" />
        </div>
      </section>

      {/* Knowledge Areas */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col gap-3 mb-12">
            <span className="text-accent font-bold tracking-widest uppercase text-xs">Categories</span>
            <h2 className="text-3xl font-extrabold tracking-tight">Knowledge Areas</h2>
            <p className="max-w-3xl text-foreground/75">
              Access industry analysis, market trends, compliance updates, and strategic insights across all mobility manufacturing sectors.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-16">
            {[
              { icon: TrendingUp, title: "Sector-Specific Analysis", desc: "Deep dives into aerospace, automotive, railway, marine, and heavy mobility trends." },
              { icon: Shield, title: "Regulatory Intelligence", desc: "Compliance updates, documentation requirements, and certification guidance." },
              { icon: Users, title: "Capacity & Workforce", desc: "Market trends, workforce development, and capacity planning strategies." },
              { icon: Lightbulb, title: "Strategic Updates", desc: "Progress reports and outcomes from ecosystem development initiatives." },
            ].map((item, idx) => (
              <div key={idx} className="p-5 bg-slate-50 rounded-xl border border-black/5 hover:shadow-md transition-shadow">
                <item.icon className="w-6 h-6 text-accent mb-3" />
                <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-foreground/60">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Filters & Article Structure */}
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow">
              <div className="p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Filter className="w-5 h-5 text-accent" />
                  <CardTitle>Filters</CardTitle>
                </div>
                <CardDescription>Filter insights by sector, topic, and stakeholder type.</CardDescription>
                <div className="mt-4 flex flex-wrap gap-2">
                  {filters.map((f) => (
                    <span key={f} className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent-foreground rounded-full border border-accent/20">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </Card>

            <div className="lg:col-span-2">
              <Card className="hover:shadow-lg transition-shadow">
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="w-5 h-5 text-accent" />
                    <CardTitle>Article Structure</CardTitle>
                  </div>
                  <CardDescription>Each insight follows a structured format for consistency.</CardDescription>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {articleStructure.map((item, index) => (
                      <div key={item} className="flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-xl border border-black/5">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm font-medium text-foreground/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Placeholder */}
      <section className="py-24 md:py-32 bg-slate-50 border-y border-border/30">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col gap-3 mb-12">
            <span className="text-accent font-bold tracking-widest uppercase text-xs">Latest</span>
            <h2 className="text-3xl font-extrabold tracking-tight">Latest Articles</h2>
          </div>
          <Card className="p-8 text-center">
            <BookOpen className="w-12 h-12 text-accent/30 mx-auto mb-4" />
            <CardTitle>Coming Soon</CardTitle>
            <CardDescription>
              Curated insights and analysis from across the mobility manufacturing ecosystem will be published here. Stay tuned for sector-specific analysis and strategic updates.
            </CardDescription>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Stay Informed</h2>
          <p className="text-xl mb-10 font-medium max-w-2xl mx-auto text-white/80">
            Get the latest insights on mobility manufacturing trends and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ButtonLink href="/join-network" variant="primary" className="px-10 py-5 text-lg">
              Join Network
            </ButtonLink>
            <ButtonLink href="/active-requirements" variant="secondary" className="px-10 py-5 text-lg border-2 border-white/20 text-white hover:border-white">
              View Requirements
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
