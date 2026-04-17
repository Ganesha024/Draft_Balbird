"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle } from "@/components/ui/Card";
import { Briefcase, Calendar, Clock } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardTitle>Projects</CardTitle>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="p-4">
                <Briefcase className="w-8 h-8 text-accent mb-2" />
                <h3 className="font-semibold text-foreground mb-2">Mobility Platform</h3>
                <p className="text-muted-foreground mb-4">Core mobility management system</p>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="text-accent">75%</span>
                </div>
                <Button className="w-full">View Project</Button>
              </Card>
              
              <Card className="p-4">
                <Briefcase className="w-8 h-8 text-accent mb-2" />
                <h3 className="font-semibold text-foreground mb-2">Supply Chain Portal</h3>
                <p className="text-muted-foreground mb-4">Real-time supply chain tracking</p>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="text-accent">92%</span>
                </div>
                <Button className="w-full">View Project</Button>
              </Card>
              
              <Card className="p-4">
                <Briefcase className="w-8 h-8 text-accent mb-2" />
                <h3 className="font-semibold text-foreground mb-2">Analytics Dashboard</h3>
                <p className="text-muted-foreground mb-4">Performance analytics platform</p>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="text-accent">45%</span>
                </div>
                <Button className="w-full">View Project</Button>
              </Card>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Project Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Active Projects</span>
                    <span className="font-semibold text-foreground">8</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Completed This Month</span>
                    <span className="font-semibold text-green-600">3</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Budget Used</span>
                    <span className="font-semibold text-foreground">$124,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Team Members</span>
                    <span className="font-semibold text-foreground">24</span>
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
