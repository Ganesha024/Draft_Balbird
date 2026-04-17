"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle } from "@/components/ui/Card";
import { Target, TrendingUp, Users, Briefcase } from "lucide-react";

export default function RequirementsPage() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardTitle>Requirements</CardTitle>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="p-4">
                <h3 className="font-semibold text-foreground mb-2">Active Requirements</h3>
                <div className="text-muted-foreground mb-4">12 ongoing requirements</div>
                <Button className="w-full">View Details</Button>
              </Card>
              
              <Card className="p-4">
                <h3 className="font-semibold text-foreground mb-2">Pending Review</h3>
                <div className="text-muted-foreground mb-4">5 requirements pending</div>
                <Button variant="outline" className="w-full">Review Now</Button>
              </Card>
              
              <Card className="p-4">
                <h3 className="font-semibold text-foreground mb-2">Completed</h3>
                <div className="text-muted-foreground mb-4">28 completed this month</div>
                <Button variant="ghost" className="w-full">View Archive</Button>
              </Card>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Requirements Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Requirements</span>
                    <span className="font-semibold text-foreground">45</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">This Month</span>
                    <span className="font-semibold text-accent">+12</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Critical Priority</span>
                    <span className="font-semibold text-red-600">3</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">High Priority</span>
                    <span className="font-semibold text-orange-600">8</span>
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
