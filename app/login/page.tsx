"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import Image from "next/image";
import { Instagram, Facebook, Mail } from "lucide-react";
import { useEffect, useState } from "react";

interface UserData {
  name: string;
  email: string;
}

async function triggerBalbirdWebhook(name: string, email: string) {
  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Ganesh",
        email: "ganesh5006pal@gmail.com",
      }),
    });

    alert("Calling API");

    const response = await res.text();
    alert("Status: " + res.status);
    console.log("Response:", response);

  } catch (err) {
    alert("Error occurred");
    console.error(err);
  }
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    triggerBalbirdWebhook("Demo User", email);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <Card>
          <div className="p-8">
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              Enter your credentials to access your personalized dashboard.
            </CardDescription>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="text-sm font-medium">Password</label>
                <input
                  type="password"
                  className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <Button
                type="button"
                className="mt-2 h-11"
                onClick={async () => {
                  alert("Calling API");

                  try {
                    const res = await fetch("/api/login2", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        name: "Ganesh",
                        email: "ganesh5006pal@gmail.com",
                      }),
                    });

                    alert("Status: " + res.status);
                    console.log("Response:", await res.text());

                  } catch (err) {
                    alert("Error occurred");
                    console.error(err);
                  }
                }}
              >
                Demo Login
              </Button>
            </form>
          </div>
        </Card>

        <Card>
          <CardTitle>Post-login access (by role)</CardTitle>

          <div className="grid gap-4 text-sm text-foreground/80">
            <div className="rounded-xl bg-muted px-4 py-3">
              <div className="font-medium">Manufacturer</div>
              <div className="mt-1">
                <ButtonLink href="/dashboard">Access Dashboard</ButtonLink>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
