"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle } from "@/components/ui/Card";
import { Calendar, TrendingUp } from "lucide-react";

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardTitle>Programs</CardTitle>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="p-4">
                <Calendar className="w-8 h-8 text-accent mb-2" />
                <h3 className="font-semibold text-foreground mb-2">Strategic Programs</h3>
                <p className="text-muted-foreground mb-4">Long-term strategic initiatives</p>
                <Button className="w-full">View Programs</Button>
              </Card>
              
              <Card className="p-4">
                <TrendingUp className="w-8 h-8 text-accent mb-2" />
                <h3 className="font-semibold text-foreground mb-2">Performance Programs</h3>
                <p className="text-muted-foreground mb-4">Performance improvement initiatives</p>
                <Button className="w-full">View Programs</Button>
              </Card>
              
              <Card className="p-4">
                <Calendar className="w-8 h-8 text-accent mb-2" />
                <h3 className="font-semibold text-foreground mb-2">Training Programs</h3>
                <p className="text-muted-foreground mb-4">Employee training and development</p>
                <Button className="w-full">View Programs</Button>
              </Card>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Program Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Active Programs</span>
                    <span className="font-semibold text-foreground">18</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Participants</span>
                    <span className="font-semibold text-foreground">247</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Completion Rate</span>
                    <span className="font-semibold text-green-600">87%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Avg Duration</span>
                    <span className="font-semibold text-foreground">6 months</span>
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
