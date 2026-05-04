"use client";

import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import Image from "next/image";
import { Instagram, Facebook, Mail } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";

const roles = [
  "Manufacturer",
  "OEM_Tier",
  "Industrial_Association",
  "Student_Workforce",
  "Strategic_Advisor",
  "Financial_Institution",
  "International_Trade_Partner",
] as const;

type Role = (typeof roles)[number];

const sectors = [
  "Aerospace",
  "Automotive",
  "Electric Vehicles",
  "Railway",
  "Marine",
  "Heavy Mobility",
] as const;

export default function JoinNetworkPage() {
  const [role, setRole] = useState<Role>("Manufacturer");

  const roleFields = useMemo(() => {
    switch (role) {
      case "Manufacturer":
        return [
          "Installed Machines",
          "Monthly Capacity",
          "Certifications",
          "Core Processes",
        ];
      case "OEM_Tier":
        return ["Sector", "Volume Expectations", "Compliance Requirements"];
      case "Student_Workforce":
        return ["Qualification", "Area of Interest", "Availability Period"];
      case "Financial_Institution":
        return ["Funding Type", "Sector Preference", "Ticket Size Range"];
      default:
        return [];
    }
  }, [role]);

  return (
    <div className="flex flex-col gap-10">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-10 shadow-sm">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_420px_at_12%_10%,color-mix(in_oklab,var(--navy)_10%,transparent),transparent_60%),radial-gradient(900px_380px_at_90%_20%,color-mix(in_oklab,var(--accent)_18%,transparent),transparent_60%)] opacity-90" />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Join the Network
            </h1>
            <p className="max-w-2xl text-lg text-foreground/75">
              Role-based registration for a structured mobility manufacturing capacity & capability network. Connect with stakeholders across sectors.
            </p>
          </div>
          <div className="relative h-64 w-full max-w-sm shrink-0 overflow-hidden rounded-2xl border border-border bg-muted lg:h-80">
            <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop" alt="Network connection visualization" className="object-contain p-4 w-full h-full" />
          </div>
        </div>
      </section>

      {/* Network Overview */}
      <section className="space-y-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">Network Overview</h2>
          <p className="max-w-3xl text-foreground/75">
            The Balbird network brings together manufacturers, OEMs, associations, and strategic partners in a structured ecosystem.
          </p>
        </div>
        <Card className="overflow-hidden">
          <div className="flex flex-col gap-4 p-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1 space-y-4">
              <p className="text-foreground/80">
                Our network is designed to facilitate collaboration, transparency, and mutual benefit across the mobility manufacturing value chain. Each stakeholder type plays a critical role in building resilient, scalable manufacturing capabilities.
              </p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div className="rounded-xl bg-foreground/[0.03] px-4 py-3">
                  <h4 className="font-semibold">Structured Roles</h4>
                  <p className="mt-1 text-sm text-foreground/70">Defined participation levels and responsibilities for each stakeholder type.</p>
                </div>
                <div className="rounded-xl bg-foreground/[0.03] px-4 py-3">
                  <h4 className="font-semibold">Verified Participation</h4>
                  <p className="mt-1 text-sm text-foreground/70">All network members undergo validation and capability assessment.</p>
                </div>
                <div className="rounded-xl bg-foreground/[0.03] px-4 py-3">
                  <h4 className="font-semibold">Cross-border Collaboration</h4>
                  <p className="mt-1 text-sm text-foreground/70">International partnerships and trade facilitation.</p>
                </div>
                <div className="rounded-xl bg-foreground/[0.03] px-4 py-3">
                  <h4 className="font-semibold">Continuous Engagement</h4>
                  <p className="mt-1 text-sm text-foreground/70">Ongoing opportunities for collaboration and development.</p>
                </div>
              </div>
            </div>
            <div className="relative h-40 w-full max-w-xs shrink-0 overflow-hidden rounded-xl border border-border bg-muted lg:h-48">
              <img src="https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=600&fit=crop" alt="Stakeholder roles in the network" className="object-contain p-4 w-full h-full" />
            </div>
          </div>
        </Card>
      </section>

      {/* Stakeholder Roles */}
      <section className="space-y-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">Stakeholder Roles</h2>
          <p className="max-w-3xl text-foreground/75">
            Select your role to understand how you can contribute to and benefit from the network.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {roles.map((r, index) => (
            <Card key={r}>
              <div className="p-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1">
                    <CardTitle>{r.replaceAll("_", " ")}</CardTitle>
                    <CardDescription>
                      {r === "Manufacturer" && "Core manufacturing nodes providing capacity and capabilities."}
                      {r === "OEM_Tier" && "Original equipment manufacturers driving sector requirements."}
                      {r === "Industrial_Association" && "Industry bodies facilitating standards and collaboration."}
                      {r === "Student_Workforce" && "Educational institutions and workforce development programs."}
                      {r === "Strategic_Advisor" && "Expert consultants providing strategic guidance."}
                      {r === "Financial_Institution" && "Funding partners supporting manufacturing investments."}
                      {r === "International_Trade_Partner" && "Cross-border trade and logistics partners."}
                    </CardDescription>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Registration Form */}
      <section className="space-y-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">Register Your Organization</h2>
          <p className="max-w-3xl text-foreground/75">
            Fill out the registration form below. Role-specific fields will appear based on your selection.
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
                  placeholder="Company / Institution"
                />
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium">Sector</label>
                <select
                  className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                  name="sector"
                  defaultValue={sectors[0]}
                >
                  {sectors.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium">Country</label>
                <input
                  className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                  name="country"
                  placeholder="Country"
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
                <label className="text-sm font-medium">Role Description</label>
                <textarea
                  className="min-h-28 w-full rounded-xl border border-border bg-background px-3 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                  name="role_description"
                  placeholder="Describe your role and intent to participate"
                />
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium">Role</label>
                <select
                  className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                  value={role}
                  onChange={(e) => setRole(e.target.value as Role)}
                  name="role"
                >
                  {roles.map((r) => (
                    <option key={r} value={r}>
                      {r.replaceAll("_", " ")}
                    </option>
                  ))}
                </select>
              </div>

              {roleFields.length > 0 ? (
                <div className="rounded-2xl border border-border bg-muted p-5">
                  <CardTitle>Role-specific fields</CardTitle>
                  <div className="mt-4 grid gap-3">
                    {roleFields.map((f) => (
                      <div key={f} className="grid gap-2">
                        <label className="text-sm text-foreground/70">{f}</label>
                        <input
                          className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                          name={f.toLowerCase().replaceAll(" ", "_")}
                          placeholder={f}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl border border-border bg-muted p-5 text-sm text-foreground/70">
                  No additional role-specific fields for this role yet.
                </div>
              )}

              <Button type="button" className="mt-2 h-11">Submit registration</Button>
            </div>
          </div>
        </Card>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-border bg-muted px-6 py-8 text-center">
        <h3 className="text-2xl font-semibold tracking-tight">Ready to Connect?</h3>
        <p className="mt-2 text-foreground/75">
          Join a network of stakeholders driving mobility manufacturing excellence.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <ButtonLink href="https://wa.link/bspaba" variant="primary" className="w-full sm:w-auto">
            Learn More About Us
          </ButtonLink>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-gradient-to-br from-accent/5 to-accent/10 border-t border-border py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Image src="/logo.png" alt="Balbird Industries" width={40} height={40} className="rounded-full" />
                <span className="text-lg font-semibold">Balbird Industries</span>
              </div>
              <p className="text-xs text-foreground/60 pl-12">empowering industries</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://wa.link/bspaba" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="https://wa.link/bspaba" className="hover:text-foreground transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://wa.link/bspaba" className="hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="https://wa.link/bspaba" className="hover:text-foreground transition-colors">Contact Us</a></li>
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
