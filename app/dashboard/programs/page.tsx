"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle } from "@/components/ui/Card";
import { Calendar, TrendingUp } from "lucide-react";

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <Card className="p-5">
          <CardTitle className="mb-4">Programs</CardTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
            <Card className="p-3">
              <Calendar className="w-6 h-6 text-accent mb-1" />
              <h3 className="font-semibold text-sm text-foreground mb-1">Strategic Programs</h3>
              <p className="text-xs text-muted-foreground mb-3">Long-term strategic initiatives</p>
              <Button size="sm" className="w-full">View Programs</Button>
            </Card>

            <Card className="p-3">
              <TrendingUp className="w-6 h-6 text-accent mb-1" />
              <h3 className="font-semibold text-sm text-foreground mb-1">Performance Programs</h3>
              <p className="text-xs text-muted-foreground mb-3">Performance improvement initiatives</p>
              <Button size="sm" className="w-full">View Programs</Button>
            </Card>

            <Card className="p-3">
              <Calendar className="w-6 h-6 text-accent mb-1" />
              <h3 className="font-semibold text-sm text-foreground mb-1">Training Programs</h3>
              <p className="text-xs text-muted-foreground mb-3">Employee training and development</p>
              <Button size="sm" className="w-full">View Programs</Button>
            </Card>
          </div>

          <h3 className="text-sm font-semibold text-foreground mb-3">Overview</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Active</span>
              <span className="font-semibold text-foreground">18</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Participants</span>
              <span className="font-semibold text-foreground">247</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Completion Rate</span>
              <span className="font-semibold text-green-600">87%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Avg Duration</span>
              <span className="font-semibold text-foreground">6 months</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
