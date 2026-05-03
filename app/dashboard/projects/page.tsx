"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle } from "@/components/ui/Card";
import { Briefcase } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <Card className="p-5">
          <CardTitle className="mb-4">Projects</CardTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
            {[
              { name: "Mobility Platform", desc: "Core mobility management", progress: 75 },
              { name: "Supply Chain Portal", desc: "Real-time supply chain tracking", progress: 92 },
              { name: "Analytics Dashboard", desc: "Performance analytics platform", progress: 45 },
            ].map((project) => (
              <Card key={project.name} className="p-3">
                <Briefcase className="w-6 h-6 text-accent mb-1" />
                <h3 className="font-semibold text-sm text-foreground mb-1">{project.name}</h3>
                <p className="text-xs text-muted-foreground mb-2">{project.desc}</p>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="text-accent">{project.progress}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-1.5 mb-3">
                  <div className="bg-accent h-1.5 rounded-full" style={{ width: `${project.progress}%` }} />
                </div>
                <Button size="sm" className="w-full">View Project</Button>
              </Card>
            ))}
          </div>

          <h3 className="text-sm font-semibold text-foreground mb-3">Overview</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Active</span>
              <span className="font-semibold text-foreground">8</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Completed</span>
              <span className="font-semibold text-green-600">3</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Budget Used</span>
              <span className="font-semibold text-foreground">$124,500</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Team</span>
              <span className="font-semibold text-foreground">24</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
