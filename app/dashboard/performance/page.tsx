"use client";

import { Card } from "@/components/ui/Card";
import { TrendingUp, Activity, Clock, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function PerformancePage() {
  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">Performance</h1>
          <p className="text-sm text-muted-foreground">
            Monitor ecosystem efficiency and execution metrics.
          </p>
        </div>
        <Button variant="outline" className="shrink-0 bg-background/5">
          <Download className="w-4 h-4 mr-2" /> Export Report
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="font-bold text-sm text-white">Efficiency</h3>
          </div>
          <div className="text-3xl font-bold text-white mb-1">94.2%</div>
          <div className="text-xs font-medium text-green-600 bg-green-50 inline-block px-2 py-1 rounded-full">+2.3% from last month</div>
        </Card>

        <Card className="p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-bold text-sm text-white">Productivity</h3>
          </div>
          <div className="text-3xl font-bold text-white mb-1">87.5%</div>
          <div className="text-xs font-medium text-blue-600 bg-blue-50 inline-block px-2 py-1 rounded-full">+5.1% from last month</div>
        </Card>

        <Card className="p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 bg-accent/10 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-bold text-sm text-white">Response Time</h3>
          </div>
          <div className="text-3xl font-bold text-white mb-1">1.2s</div>
          <div className="text-xs font-medium text-green-600 bg-green-50 inline-block px-2 py-1 rounded-full">-0.3s from last month</div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-bold text-white mb-4 border-b border-white/10/50 pb-2">Operational Trends</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 bg-background/5/5 rounded-xl border border-white/10">
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold block mb-1">Daily Output</span>
            <span className="text-2xl font-bold text-white">1,247</span>
          </div>
          <div className="p-4 bg-green-50 rounded-xl border border-green-100">
            <span className="text-xs text-green-700 uppercase tracking-wider font-semibold block mb-1">Quality Score</span>
            <span className="text-2xl font-bold text-green-700">98.5%</span>
          </div>
          <div className="p-4 bg-green-50 rounded-xl border border-green-100">
            <span className="text-xs text-green-700 uppercase tracking-wider font-semibold block mb-1">Uptime</span>
            <span className="text-2xl font-bold text-green-700">99.8%</span>
          </div>
          <div className="p-4 bg-red-50 rounded-xl border border-red-100">
            <span className="text-xs text-red-600 uppercase tracking-wider font-semibold block mb-1">Error Rate</span>
            <span className="text-2xl font-bold text-red-600">0.2%</span>
          </div>
        </div>
      </Card>
    </>
  );
}
