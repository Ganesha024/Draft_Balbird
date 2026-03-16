"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import Image from "next/image";
import { Instagram, Facebook, Mail } from "lucide-react";

async function triggerBalbirdWebhook(name: string, email: string) {
  try {
    const res = await fetch(
      "https://n8n.srv1463077.hstgr.cloud/webhook/demo-login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
        }),
      }
    );

    console.log("Webhook triggered:", res.status);
  } catch (err) {
    console.error("Webhook error:", err);
  }
}

export default function LoginPage() {
  return (
    <div className="flex flex-col gap-14">
      {/* Login Form */}
      <section className="space-y-6">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">Sign In</h2>
          <p className="max-w-3xl text-foreground/75">
            Enter your credentials to access your personalized dashboard and ecosystem tools.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none"
                  placeholder="you@company.com"
                />
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium">Password</label>
                <input
                  type="password"
                  className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none"
                  placeholder="••••••••"
                />
              </div>

              <Button
                type="button"
                className="mt-2 h-11"
                onClick={() =>
                  triggerBalbirdWebhook(
                    "Demo User",
                    "ganesh5006pal@gmail.com"
                  )
                }
              >
                Demo Login
              </Button>
            </div>
          </Card>

          <Card>
            <CardTitle>Post-login access (by role)</CardTitle>

            <div className="grid gap-4 text-sm text-foreground/80">
              <div className="rounded-xl bg-muted px-4 py-3">
                <div className="font-medium">Manufacturer</div>
                <div className="mt-1">
                  Update Capacity Data · Respond to Requirements · Access
                  Program Dashboard
                </div>
              </div>

              <div className="rounded-xl bg-muted px-4 py-3">
                <div className="font-medium">OEM / Tier</div>
                <div className="mt-1">
                  Post Requirements · Review Responses
                </div>
              </div>

              <div className="rounded-xl bg-muted px-4 py-3">
                <div className="font-medium">Associations</div>
                <div className="mt-1">
                  View Cluster Summaries · Submit Program Proposals
                </div>
              </div>

              <div className="rounded-xl bg-muted px-4 py-3">
                <div className="font-medium">Students</div>
                <div className="mt-1">
                  Track Exposure Programs · Download Training Logs
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-border bg-muted px-8 py-10 text-center">
        <h3 className="text-2xl font-semibold tracking-tight">
          New to the Platform?
        </h3>

        <p className="mt-2 text-foreground/75">
          Join our ecosystem to access role-specific tools and collaborative
          opportunities.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <ButtonLink href="/join-network">Join Network</ButtonLink>
          <ButtonLink href="/request-strategic-discussion">
            Request Discussion
          </ButtonLink>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-gradient-to-br from-accent/5 to-accent/10 border-t border-border py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/logo.png"
                  alt="Balbird Industries"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-lg font-semibold">
                  Balbird Industries
                </span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/careers">Careers</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/help">Help Center</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <Instagram className="w-5 h-5" />
                <Facebook className="w-5 h-5" />
                <Mail className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}