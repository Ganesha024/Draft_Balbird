"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { Instagram, Facebook, Mail, Building, Users, Package, FileText, Bell, Settings } from "lucide-react";
import { useState } from "react";

async function triggerBalbirdWebhook() {
  try {
    const res = await fetch("/api/rfq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ part: "demo part", quantity: 50 }),
    });
    const data = await res.json();
    alert("Success: " + JSON.stringify(data));
  } catch (err) {
    console.error(err);
    alert("Error");
  }
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    triggerBalbirdWebhook();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background flex items-center justify-center p-4">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Login Form — 2 cols */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <Card className="p-6">
            <h1 className="text-2xl font-bold text-foreground mb-1">Welcome Back</h1>
            <CardDescription>
              Sign in to access your manufacturing portal
            </CardDescription>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
                <input
                  type="email"
                  className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Password</label>
                <input
                  type="password"
                  className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="•••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-1.5 text-foreground">
                  <input type="checkbox" className="rounded border-border" />
                  <span>Remember me</span>
                </label>
                <button type="button" className="text-accent hover:text-accent/80 font-medium">
                  Forgot password?
                </button>
              </div>

              <Button type="submit" className="w-full h-10 font-semibold">
                Sign In
              </Button>
            </form>

            <p className="mt-4 text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <button className="text-accent hover:text-accent/80 font-medium">Contact Admin</button>
            </p>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <Button onClick={triggerBalbirdWebhook} className="flex-1 h-9 bg-accent hover:bg-accent/90 text-accent-foreground font-medium">
                Submit Demo RFQ
              </Button>
              <span className="text-xs text-muted-foreground">Sample data</span>
            </div>
          </Card>
        </div>

        {/* Right Column — 3 cols */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          {/* Role-based Access */}
          <Card className="p-5">
            <CardTitle className="text-base mb-3 flex items-center">
              <Users className="w-4 h-4 mr-1.5 text-accent" />
              Role-based Access
            </CardTitle>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-blue-50 border border-blue-200 p-3">
                <div className="flex items-center gap-1.5 mb-1">
                  <Building className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-sm text-foreground">Manufacturer</span>
                </div>
                <p className="text-xs text-muted-foreground mb-2">Production control</p>
                <ButtonLink href="/dashboard" size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white">Access</ButtonLink>
              </div>

              <div className="rounded-lg bg-green-50 border border-green-200 p-3">
                <div className="flex items-center gap-1.5 mb-1">
                  <Package className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-sm text-foreground">Supplier</span>
                </div>
                <p className="text-xs text-muted-foreground mb-2">Supply chain</p>
                <ButtonLink href="/dashboard" size="sm" className="w-full bg-green-600 hover:bg-green-700 text-white">Access</ButtonLink>
              </div>

              <div className="rounded-lg bg-purple-50 border border-purple-200 p-3">
                <div className="flex items-center gap-1.5 mb-1">
                  <FileText className="w-5 h-5 text-purple-600" />
                  <span className="font-semibold text-sm text-foreground">Distributor</span>
                </div>
                <p className="text-xs text-muted-foreground mb-2">Logistics</p>
                <ButtonLink href="/dashboard" size="sm" className="w-full bg-purple-600 hover:bg-purple-700 text-white">Access</ButtonLink>
              </div>

              <div className="rounded-lg bg-orange-50 border border-orange-200 p-3">
                <div className="flex items-center gap-1.5 mb-1">
                  <Bell className="w-5 h-5 text-orange-600" />
                  <span className="font-semibold text-sm text-foreground">Admin</span>
                </div>
                <p className="text-xs text-muted-foreground mb-2">Administration</p>
                <ButtonLink href="/dashboard" size="sm" className="w-full bg-orange-600 hover:bg-orange-700 text-white">Access</ButtonLink>
              </div>
            </div>
          </Card>

          {/* Platform Features */}
          <Card className="p-5">
            <CardTitle className="text-base mb-3 flex items-center">
              <Settings className="w-4 h-4 mr-1.5 text-accent" />
              Platform Features
            </CardTitle>

            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                <span className="text-sm text-foreground">Real-time Manufacturing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                <span className="text-sm text-foreground">Supply Chain Integration</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                <span className="text-sm text-foreground">Quality Management</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                <span className="text-sm text-foreground">Analytics Dashboard</span>
              </div>
            </div>
          </Card>

          {/* Social */}
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">Connect With Us</span>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="rounded-full"><Instagram className="w-4 h-4" /></Button>
                <Button variant="ghost" size="sm" className="rounded-full"><Facebook className="w-4 h-4" /></Button>
                <Button variant="ghost" size="sm" className="rounded-full"><Mail className="w-4 h-4" /></Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
