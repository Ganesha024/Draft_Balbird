"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Target, Users, TrendingUp, Settings2, Network } from "lucide-react";

export default function CapabilitiesPage() {
  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">Matchmaking & Capabilities</h1>
          <p className="text-sm text-muted-foreground">
            AI-driven partner matching and capability validation.
          </p>
        </div>
        <Button className="shrink-0">
          <Network className="w-4 h-4 mr-2" /> Find New Match
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="p-5 hover:border-accent/50 transition-colors">
          <Target className="w-8 h-8 text-accent mb-4" />
          <h3 className="font-bold text-base text-white mb-1">Manufacturing</h3>
          <p className="text-sm text-muted-foreground mb-4">Advanced manufacturing with real-time monitoring</p>
          <Button size="sm" variant="secondary" className="w-full">Explore Matches</Button>
        </Card>

        <Card className="p-5 hover:border-accent/50 transition-colors">
          <Users className="w-8 h-8 text-accent mb-4" />
          <h3 className="font-bold text-base text-white mb-1">Supply Chain</h3>
          <p className="text-sm text-muted-foreground mb-4">End-to-end supply chain integration partners</p>
          <Button size="sm" variant="secondary" className="w-full">Explore Matches</Button>
        </Card>

        <Card className="p-5 hover:border-accent/50 transition-colors">
          <TrendingUp className="w-8 h-8 text-accent mb-4" />
          <h3 className="font-bold text-base text-white mb-1">Strategic Scaling</h3>
          <p className="text-sm text-muted-foreground mb-4">Capital alignment and facility expansion partners</p>
          <Button size="sm" variant="secondary" className="w-full">Explore Matches</Button>
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-4 border-b border-white/10/50 pb-2">
          <h3 className="text-lg font-bold text-white">Matchmaking Engine Stats</h3>
          <Settings2 className="w-4 h-4 text-muted-foreground cursor-pointer" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 bg-background/5/5 rounded-xl border border-white/10">
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold block mb-1">Active Modules</span>
            <span className="text-2xl font-bold text-white">24</span>
          </div>
          <div className="p-4 bg-background/5/5 rounded-xl border border-white/10">
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold block mb-1">Integrations</span>
            <span className="text-2xl font-bold text-accent">12</span>
          </div>
          <div className="p-4 bg-background/5/5 rounded-xl border border-white/10">
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold block mb-1">API Calls Today</span>
            <span className="text-2xl font-bold text-white">1,247</span>
          </div>
          <div className="p-4 bg-green-50 rounded-xl border border-green-100">
            <span className="text-xs text-green-700 uppercase tracking-wider font-semibold block mb-1">Match Success</span>
            <span className="text-2xl font-bold text-green-700">99.2%</span>
          </div>
        </div>
      </Card>
    </>
  );
}
