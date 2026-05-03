"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle } from "@/components/ui/Card";
import { Target, Users, TrendingUp } from "lucide-react";

export default function CapabilitiesPage() {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <Card className="p-5">
          <CardTitle className="mb-4">Capabilities</CardTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
            <Card className="p-3">
              <Target className="w-6 h-6 text-accent mb-1" />
              <h3 className="font-semibold text-sm text-foreground mb-1">Manufacturing</h3>
              <p className="text-xs text-muted-foreground mb-3">Advanced manufacturing with real-time monitoring</p>
              <Button size="sm" className="w-full">Explore</Button>
            </Card>

            <Card className="p-3">
              <Users className="w-6 h-6 text-accent mb-1" />
              <h3 className="font-semibold text-sm text-foreground mb-1">Supply Chain</h3>
              <p className="text-xs text-muted-foreground mb-3">End-to-end supply chain management</p>
              <Button size="sm" className="w-full">Explore</Button>
            </Card>

            <Card className="p-3">
              <TrendingUp className="w-6 h-6 text-accent mb-1" />
              <h3 className="font-semibold text-sm text-foreground mb-1">Analytics</h3>
              <p className="text-xs text-muted-foreground mb-3">Real-time analytics and metrics</p>
              <Button size="sm" className="w-full">Explore</Button>
            </Card>
          </div>

          <h3 className="text-sm font-semibold text-foreground mb-3">Overview</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Active Modules</span>
              <span className="font-semibold text-foreground">24</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Integrations</span>
              <span className="font-semibold text-accent">12</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">API Calls Today</span>
              <span className="font-semibold text-foreground">1,247</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Success Rate</span>
              <span className="font-semibold text-green-600">99.2%</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
