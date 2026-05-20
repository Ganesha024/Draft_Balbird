"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Calendar, TrendingUp, Plus } from "lucide-react";

export default function ProgramsPage() {
  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">Programs</h1>
          <p className="text-sm text-slate-400">
            Manage strategic, performance, and training programs.
          </p>
        </div>
        <Button className="shrink-0">
          <Plus className="w-4 h-4 mr-2" /> Enroll New Program
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="p-5 flex flex-col">
          <div className="h-12 w-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
            <Calendar className="w-6 h-6 text-accent" />
          </div>
          <h3 className="font-bold text-base text-white mb-2">Strategic Programs</h3>
          <p className="text-sm text-muted-foreground mb-6 flex-1">Long-term strategic initiatives and ecosystem alignment.</p>
          <Button size="sm" variant="outline" className="w-full">View Programs</Button>
        </Card>

        <Card className="p-5 flex flex-col">
          <div className="h-12 w-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
            <TrendingUp className="w-6 h-6 text-accent" />
          </div>
          <h3 className="font-bold text-base text-white mb-2">Performance Programs</h3>
          <p className="text-sm text-muted-foreground mb-6 flex-1">Capacity enhancement and performance improvement initiatives.</p>
          <Button size="sm" variant="outline" className="w-full">View Programs</Button>
        </Card>

        <Card className="p-5 flex flex-col">
          <div className="h-12 w-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
            <Calendar className="w-6 h-6 text-accent" />
          </div>
          <h3 className="font-bold text-base text-white mb-2">Training Programs</h3>
          <p className="text-sm text-muted-foreground mb-6 flex-1">Employee training, certification prep, and development.</p>
          <Button size="sm" variant="outline" className="w-full">View Programs</Button>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-bold text-white mb-4 border-b border-white/10/50 pb-2">Program Overview</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 bg-white/5/5 rounded-xl border border-white/10">
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold block mb-1">Active</span>
            <span className="text-2xl font-bold text-white">18</span>
          </div>
          <div className="p-4 bg-white/5/5 rounded-xl border border-white/10">
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold block mb-1">Participants</span>
            <span className="text-2xl font-bold text-white">247</span>
          </div>
          <div className="p-4 bg-green-50 rounded-xl border border-green-100">
            <span className="text-xs text-green-700 uppercase tracking-wider font-semibold block mb-1">Completion Rate</span>
            <span className="text-2xl font-bold text-green-700">87%</span>
          </div>
          <div className="p-4 bg-white/5/5 rounded-xl border border-white/10">
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold block mb-1">Avg Duration</span>
            <span className="text-2xl font-bold text-white">6 months</span>
          </div>
        </div>
      </Card>
    </>
  );
}
