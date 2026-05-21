"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Briefcase, FolderPlus, ArrowRight } from "lucide-react";

export default function ProjectsPage() {
  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">Projects</h1>
          <p className="text-sm text-muted-foreground">
            Track and manage your ongoing execution projects.
          </p>
        </div>
        <Button className="shrink-0">
          <FolderPlus className="w-4 h-4 mr-2" /> Create Project
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {[
          { name: "Mobility Platform", desc: "Core mobility management and trace documentation", progress: 75, status: "On Track" },
          { name: "Supply Chain Portal", desc: "Real-time supply chain tracking dashboard", progress: 92, status: "Nearing Completion" },
          { name: "Analytics Dashboard", desc: "Performance analytics platform setup", progress: 45, status: "At Risk" },
        ].map((project) => (
          <Card key={project.name} className="p-5 flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div className="h-10 w-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-accent" />
              </div>
              <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full ${
                project.status === "On Track" ? "bg-green-100 text-green-700" :
                project.status === "At Risk" ? "bg-red-100 text-red-700" :
                "bg-blue-100 text-blue-700"
              }`}>
                {project.status}
              </span>
            </div>
            <h3 className="font-bold text-base text-white mb-1">{project.name}</h3>
            <p className="text-sm text-muted-foreground mb-6 flex-1">{project.desc}</p>
            
            <div className="mt-auto">
              <div className="flex justify-between items-center text-xs mb-2 font-medium">
                <span>Progress</span>
                <span className="text-accent">{project.progress}%</span>
              </div>
              <div className="w-full bg-background/5/10 rounded-full h-2 mb-4 overflow-hidden border border-white/10/50">
                <div className="bg-accent h-full rounded-full transition-all" style={{ width: `${project.progress}%` }} />
              </div>
              <Button size="sm" variant="outline" className="w-full">
                View Workspace <ArrowRight className="w-3 h-3 ml-1.5" />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-bold text-white mb-4 border-b border-white/10/50 pb-2">Portfolio Overview</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 bg-background/5/5 rounded-xl border border-white/10">
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold block mb-1">Active Projects</span>
            <span className="text-2xl font-bold text-white">8</span>
          </div>
          <div className="p-4 bg-green-50 rounded-xl border border-green-100">
            <span className="text-xs text-green-700 uppercase tracking-wider font-semibold block mb-1">Completed</span>
            <span className="text-2xl font-bold text-green-700">3</span>
          </div>
          <div className="p-4 bg-background/5/5 rounded-xl border border-white/10">
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold block mb-1">Budget Utilized</span>
            <span className="text-2xl font-bold text-white">$124,500</span>
          </div>
          <div className="p-4 bg-background/5/5 rounded-xl border border-white/10">
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold block mb-1">Team Members</span>
            <span className="text-2xl font-bold text-white">24</span>
          </div>
        </div>
      </Card>
    </>
  );
}
