import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import Image from "next/image";
import { Instagram, Facebook, Mail, Settings, Cog, Wrench, Hammer, Flame, Zap, Scissors, Printer, Router } from "lucide-react";

const capabilities = [
  {
    title: "Engineering / Design Capabilities",
    icon: Settings,
    image: "/images/engineering-design.jpg",
    features: [
      "AutoCAD, CATIA, SolidWorks",
      "Process planning & manufacturability analysis (DFM)",
      "Reverse engineering & design interpretation",
      "Engineering calculations & tolerance validation",
      "Production documentation & execution support",
      "Seamless integration between design and manufacturing",
    ],
  },
  {
    title: "Precision Machining",
    icon: Cog,
    image: "/images/precision-machining.jpg",
    features: [
      "CNC Turning, VMC (3, 4 & 5 Axis), VTL, Boring",
      "Materials: Carbon Steel, Alloy Steel, Stainless Steel, Aluminum",
      "High precision machining with tight tolerances",
      "Component range up to ~500 mm dia & 500–700 mm length",
      "Suitable for critical and performance-driven components",
      "Consistent output across low to medium batch production",
    ],
  },
  {
    title: "CNC Machining",
    icon: Cog,
    image: "/images/cnc-machining.jpg",
    features: [
      "Multi-axis machining capability across distributed network",
      "Materials: MS, Aluminum, Stainless Steel, Alloy Steel",
      "Batch production range: 1 to 1000 units",
      "High repeatability and dimensional consistency",
      "Flexible capacity allocation for parallel production",
      "Optimized for precision, speed, and scalability",
    ],
  },
  {
    title: "Drop Forging",
    icon: Hammer,
    image: "/images/forging.jpg",
    features: [
      "Closed-die forging for high-strength components",
      "Materials: Carbon Steel, Alloy Steel, Stainless Steel",
      "Component range: ~0.2 kg to 5 kg",
      "Superior grain structure and mechanical properties",
      "Suitable for automotive and load-bearing applications",
      "Designed for medium to high-volume production",
    ],
  },
  {
    title: "Welding & Fabrication",
    icon: Wrench,
    image: "/images/welding-fabrication.jpg",
    features: [
      "MIG, TIG, ARC & Laser welding capabilities",
      "Materials: MS, Stainless Steel, Aluminum",
      "Structural fabrication and multi-stage assemblies",
      "Certified welding processes and skilled execution",
      "Suitable for both precision and heavy fabrication",
      "Integrated with cutting, bending, and finishing",
    ],
  },
  {
    title: "Hydraulic Press Operations",
    icon: Zap,
    image: "/images/hydraulic-press.jpg",
    features: [
      "Press capacity up to ~300 Tons",
      "Suitable for forming, deep drawing, and shaping",
      "Materials: Carbon Steel, Aluminum, Alloy Steel, SS",
      "Controlled force application for precision forming",
      "Consistent performance for repeat production",
      "Ideal for medium to high-volume operations",
    ],
  },
  {
    title: "Stamping Shop",
    icon: Hammer,
    image: "/images/stamping.jpg",
    features: [
      "Mechanical presses up to ~250 Tons",
      "Pneumatic presses up to ~400 Tons",
      "Progressive die stamping capability",
      "De-coilers and continuous production setup",
      "Suitable for high-volume sheet metal production",
      "Wide range of shapes: rounds, splines, tangs, complex profiles",
    ],
  },
  {
    title: "Laser Cutting",
    icon: Scissors,
    image: "/images/laser-cutting.jpg",
    features: [
      "High-precision fiber laser cutting",
      "Bed size up to ~6000 mm",
      "Thickness up to ~20 mm (MS, SS, Aluminum)",
      "Complex profile cutting with high repeatability",
      "Ideal for sheet metal and structural parts",
      "Clean edges with minimal post-processing",
    ],
  },
  {
    title: "CNC Bending",
    icon: Settings,
    image: "/images/cnc-bending.jpg",
    features: [
      "CNC bending up to ~3000 mm length",
      "Thickness up to ~10 mm",
      "High accuracy angle control",
      "Suitable for enclosures, frames, brackets",
      "Consistent forming across batch production",
      "Integrated with cutting and fabrication",
    ],
  },
  {
    title: "Laser Welding",
    icon: Flame,
    image: "/images/laser-welding.jpg",
    features: [
      "High precision, low distortion welding",
      "Suitable for thin and complex components",
      "Clean and controlled weld joints",
      "Ideal for precision assemblies",
      "Enhanced surface finish and strength",
    ],
  },
  {
    title: "UV Printing",
    icon: Printer,
    image: "/images/uv-printing.jpg",
    features: [
      "Direct surface printing on multiple materials",
      "High-resolution marking and branding",
      "Suitable for finished components",
      "Durable and scratch-resistant output",
      "Supports batch customization",
    ],
  },
  {
    title: "CNC Routing",
    icon: Router,
    image: "/images/cnc-routing.jpg",
    features: [
      "High-speed routing for panels and non-metal materials",
      "Suitable for plastics, composites, and sheets",
      "Precision contour cutting and shaping",
      "Ideal for prototypes and batch production",
      "Smooth surface finish and accuracy",
    ],
  },
] as const;

export default function ExecutionReadyFacilitiesPage() {
  return (
    <div className="flex flex-col gap-10">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-10 shadow-sm">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_420px_at_12%_10%,color-mix(in_oklab,var(--navy)_10%,transparent),transparent_60%),radial-gradient(900px_380px_at_90%_20%,color-mix(in_oklab,var(--accent)_18%,transparent),transparent_60%)] opacity-90" />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Execution Ready Facilities
            </h1>
            <p className="max-w-2xl text-lg text-foreground/75">
              Explore our robust manufacturing infrastructure. From precision machining to advanced fabrication, our network delivers consistent, scalable, and high-quality production capabilities across diverse sectors.
            </p>
          </div>
          <div className="relative h-64 w-full max-w-sm shrink-0 overflow-hidden rounded-2xl border border-border bg-muted lg:h-80">
            <img src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&h=600&fit=crop" alt="Manufacturing facility infrastructure" className="object-contain p-4 w-full h-full" />
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="space-y-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">Manufacturing Capabilities</h2>
          <p className="max-w-3xl text-foreground/75">
            Our distributed network of execution-ready facilities spans comprehensive manufacturing processes, from engineering design to final production. Each capability is verified, standardized, and scaled for flexible capacity allocation.
          </p>
        </div>
        
        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((cap) => (
            <Card key={cap.title} className="overflow-hidden">
              <div className="p-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/20">
                    <cap.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{cap.title}</CardTitle>
                    <ul className="mt-3 space-y-1.5">
                      {cap.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-foreground/80">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="mt-4 text-sm font-medium text-accent hover:underline">
                      More Info
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Production Capacity */}
      <section className="space-y-4">
        <Card className="overflow-hidden border-accent/20">
          <div className="p-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-semibold tracking-tight">Production Capacity</h2>
                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-accent mt-2" />
                    <div>
                      <p className="font-medium">Precision machining & advanced processes</p>
                      <p className="text-sm text-foreground/70">1 – 1,000 units</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-accent mt-2" />
                    <div>
                      <p className="font-medium">Forming, stamping & casting</p>
                      <p className="text-sm text-foreground/70">1,000 – 100,000 units</p>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-foreground/80">
                  Capacity is dynamically aligned across multiple facilities and suppliers, enabling scalable, flexible, and reliable execution.
                </p>
              </div>
              <div className="relative h-48 w-full max-w-sm shrink-0 overflow-hidden rounded-xl border border-border bg-muted lg:h-56">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop" alt="Production capacity overview" className="object-contain p-4 w-full h-full" />
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-border bg-muted px-6 py-8 text-center">
        <h3 className="text-2xl font-semibold tracking-tight">Connect With Our Network</h3>
        <p className="mt-2 text-foreground/75">
          Access execution-ready manufacturing capabilities tailored to your production needs.
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
