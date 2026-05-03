"use client";

import { Card, CardTitle } from "@/components/ui/Card";
import { TrendingUp, Activity, Clock } from "lucide-react";

export default function PerformancePage() {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <Card className="p-5">
          <CardTitle className="mb-4">Performance</CardTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
            <Card className="p-3">
              <TrendingUp className="w-6 h-6 text-green-600 mb-1" />
              <h3 className="font-semibold text-sm text-foreground mb-1">Efficiency</h3>
              <div className="text-xl font-bold text-green-600">94.2%</div>
              <div className="text-xs text-muted-foreground">+2.3% from last month</div>
            </Card>

            <Card className="p-3">
              <Activity className="w-6 h-6 text-blue-600 mb-1" />
              <h3 className="font-semibold text-sm text-foreground mb-1">Productivity</h3>
              <div className="text-xl font-bold text-blue-600">87.5%</div>
              <div className="text-xs text-muted-foreground">+5.1% from last month</div>
            </Card>

            <Card className="p-3">
              <Clock className="w-6 h-6 text-accent mb-1" />
              <h3 className="font-semibold text-sm text-foreground mb-1">Response Time</h3>
              <div className="text-xl font-bold text-accent">1.2s</div>
              <div className="text-xs text-muted-foreground">-0.3s from last month</div>
            </Card>
          </div>

          <h3 className="text-sm font-semibold text-foreground mb-3">Trends</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Daily Output</span>
              <span className="font-semibold text-foreground">1,247</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Quality Score</span>
              <span className="font-semibold text-green-600">98.5%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Uptime</span>
              <span className="font-semibold text-green-600">99.8%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Error Rate</span>
              <span className="font-semibold text-red-600">0.2%</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
