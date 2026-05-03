"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import Image from "next/image";
import { Instagram, Facebook, Mail, Building, Users, Package, FileText, Bell, Settings } from "lucide-react";
import { useEffect, useState } from "react";

async function triggerBalbirdWebhook() {
  try {
    const res = await fetch("/api/rfq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        part: "demo part",
        quantity: 50,
      }),
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
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background p-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-screen">
          {/* Left Column - Login Form */}
          <div className="flex flex-col justify-center">
            <Card className="w-full max-w-md mx-auto shadow-xl">
              <div className="p-8">
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
                  <CardDescription className="text-base">
                    Sign in to access your manufacturing portal and manage your operations
                  </CardDescription>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email Address</label>
                    <input
                      type="email"
                      className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-accent transition-all"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Password</label>
                    <input
                      type="password"
                      className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-accent transition-all"
                      placeholder="•••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2 text-sm text-foreground">
                      <input type="checkbox" className="rounded border-border" />
                      <span>Remember me</span>
                    </label>
                    <Button variant="ghost" className="text-sm text-accent hover:text-accent/80">
                      Forgot password?
                    </Button>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 text-base font-semibold"
                  >
                    Sign In
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <Button variant="ghost" className="text-sm text-accent hover:text-accent/80 p-0 h-auto">
                      Contact Admin
                    </Button>
                  </p>
                </div>
              </div>
            </Card>

            {/* Quick Demo Access */}
            <Card className="w-full max-w-md mx-auto mt-6 shadow-xl">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Quick Demo Access</h3>
                <Button
                  onClick={triggerBalbirdWebhook}
                  className="w-full h-11 bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
                >
                  Submit Demo RFQ
                </Button>
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  Creates a demo RFQ with sample data
                </p>
              </div>
            </Card>
          </div>

          {/* Right Column - Role Access & Features */}
          <div className="space-y-6">
            {/* Role-based Access */}
            <Card className="shadow-xl">
              <div className="p-6">
                <CardTitle className="text-xl mb-6 flex items-center">
                  <Users className="w-6 h-6 mr-2 text-accent" />
                  Role-based Access
                </CardTitle>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 p-4 hover:shadow-lg transition-all">
                    <div className="flex items-center mb-3">
                      <Building className="w-8 h-8 text-blue-600 mr-2" />
                      <h4 className="font-semibold text-foreground">Manufacturer</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Production & manufacturing control</p>
                    <ButtonLink 
                      href="/dashboard" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Access Portal
                    </ButtonLink>
                  </div>

                  <div className="rounded-xl bg-gradient-to-r from-green-50 to-green-100 border border-green-200 p-4 hover:shadow-lg transition-all">
                    <div className="flex items-center mb-3">
                      <Package className="w-8 h-8 text-green-600 mr-2" />
                      <h4 className="font-semibold text-foreground">Supplier</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Supply chain & vendor management</p>
                    <ButtonLink 
                      href="/dashboard" 
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                    >
                      Access Portal
                    </ButtonLink>
                  </div>

                  <div className="rounded-xl bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 p-4 hover:shadow-lg transition-all">
                    <div className="flex items-center mb-3">
                      <FileText className="w-8 h-8 text-purple-600 mr-2" />
                      <h4 className="font-semibold text-foreground">Distributor</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Distribution & logistics management</p>
                    <ButtonLink 
                      href="/dashboard" 
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      Access Portal
                    </ButtonLink>
                  </div>

                  <div className="rounded-xl bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 p-4 hover:shadow-lg transition-all">
                    <div className="flex items-center mb-3">
                      <Bell className="w-8 h-8 text-orange-600 mr-2" />
                      <h4 className="font-semibold text-foreground">Admin</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">System administration</p>
                    <ButtonLink 
                      href="/dashboard" 
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                    >
                      Access Portal
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </Card>

            {/* Platform Features */}
            <Card className="shadow-xl">
              <div className="p-6">
                <CardTitle className="text-xl mb-6 flex items-center">
                  <Settings className="w-6 h-6 mr-2 text-accent" />
                  Platform Features
                </CardTitle>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-foreground">Real-time Manufacturing</h4>
                      <p className="text-sm text-muted-foreground">Live production monitoring and control</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-foreground">Supply Chain Integration</h4>
                      <p className="text-sm text-muted-foreground">End-to-end supply chain visibility</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-foreground">Quality Management</h4>
                      <p className="text-sm text-muted-foreground">Automated quality control systems</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-foreground">Analytics Dashboard</h4>
                      <p className="text-sm text-muted-foreground">Comprehensive performance metrics</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="shadow-xl">
              <div className="p-6">
                <CardTitle className="text-lg mb-4">Connect With Us</CardTitle>
                <div className="flex space-x-4">
                  <Button variant="ghost" className="p-3 rounded-full hover:bg-muted">
                    <Instagram className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" className="p-3 rounded-full hover:bg-muted">
                    <Facebook className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" className="p-3 rounded-full hover:bg-muted">
                    <Mail className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
