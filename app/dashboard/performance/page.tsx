"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle } from "@/components/ui/Card";
import { TrendingUp, Activity, Clock } from "lucide-react";

export default function PerformancePage() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardTitle>Performance</CardTitle>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="p-4">
                <TrendingUp className="w-8 h-8 text-green-600 mb-2" />
                <h3 className="font-semibold text-foreground mb-2">Efficiency</h3>
                <p className="text-muted-foreground mb-4">Overall operational efficiency</p>
                <div className="text-2xl font-bold text-green-600">94.2%</div>
                <div className="text-sm text-muted-foreground">+2.3% from last month</div>
              </Card>
              
              <Card className="p-4">
                <Activity className="w-8 h-8 text-blue-600 mb-2" />
                <h3 className="font-semibold text-foreground mb-2">Productivity</h3>
                <p className="text-muted-foreground mb-4">Team productivity metrics</p>
                <div className="text-2xl font-bold text-blue-600">87.5%</div>
                <div className="text-sm text-muted-foreground">+5.1% from last month</div>
              </Card>
              
              <Card className="p-4">
                <Clock className="w-8 h-8 text-accent mb-2" />
                <h3 className="font-semibold text-foreground mb-2">Response Time</h3>
                <p className="text-muted-foreground mb-4">Average response time</p>
                <div className="text-2xl font-bold text-accent">1.2s</div>
                <div className="text-sm text-muted-foreground">-0.3s from last month</div>
              </Card>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Performance Trends</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Daily Output</span>
                    <span className="font-semibold text-foreground">1,247 units</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Quality Score</span>
                    <span className="font-semibold text-green-600">98.5%</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Uptime</span>
                    <span className="font-semibold text-green-600">99.8%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Error Rate</span>
                    <span className="font-semibold text-red-600">0.2%</span>
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
