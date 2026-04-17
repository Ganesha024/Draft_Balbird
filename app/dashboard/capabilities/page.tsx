"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle } from "@/components/ui/Card";
import { Target, Users, TrendingUp } from "lucide-react";

export default function CapabilitiesPage() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardTitle>Capabilities</CardTitle>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="p-4">
                <Target className="w-8 h-8 text-accent mb-2" />
                <h3 className="font-semibold text-foreground mb-2">Manufacturing</h3>
                <p className="text-muted-foreground mb-4">Advanced manufacturing capabilities with real-time monitoring</p>
                <Button className="w-full">Explore</Button>
              </Card>
              
              <Card className="p-4">
                <Users className="w-8 h-8 text-accent mb-2" />
                <h3 className="font-semibold text-foreground mb-2">Supply Chain</h3>
                <p className="text-muted-foreground mb-4">End-to-end supply chain management and tracking</p>
                <Button className="w-full">Explore</Button>
              </Card>
              
              <Card className="p-4">
                <TrendingUp className="w-8 h-8 text-accent mb-2" />
                <h3 className="font-semibold text-foreground mb-2">Analytics</h3>
                <p className="text-muted-foreground mb-4">Real-time analytics and performance metrics</p>
                <Button className="w-full">Explore</Button>
              </Card>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Capability Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Active Modules</span>
                    <span className="font-semibold text-foreground">24</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Integration Points</span>
                    <span className="font-semibold text-accent">12</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">API Calls Today</span>
                    <span className="font-semibold text-foreground">1,247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Success Rate</span>
                    <span className="font-semibold text-green-600">99.2%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
