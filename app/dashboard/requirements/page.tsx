"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle } from "@/components/ui/Card";

export default function RequirementsPage() {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <Card className="p-5">
          <CardTitle className="mb-4">Requirements</CardTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
            <Card className="p-3">
              <h3 className="font-semibold text-sm text-foreground mb-1">Active</h3>
              <div className="text-xs text-muted-foreground mb-3">12 ongoing</div>
              <Button size="sm" className="w-full">View Details</Button>
            </Card>

            <Card className="p-3">
              <h3 className="font-semibold text-sm text-foreground mb-1">Pending Review</h3>
              <div className="text-xs text-muted-foreground mb-3">5 pending</div>
              <Button variant="outline" size="sm" className="w-full">Review Now</Button>
            </Card>

            <Card className="p-3">
              <h3 className="font-semibold text-sm text-foreground mb-1">Completed</h3>
              <div className="text-xs text-muted-foreground mb-3">28 this month</div>
              <Button variant="ghost" size="sm" className="w-full">View Archive</Button>
            </Card>
          </div>

          <h3 className="text-sm font-semibold text-foreground mb-3">Overview</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Total</span>
              <span className="font-semibold text-foreground">45</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">This Month</span>
              <span className="font-semibold text-accent">+12</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Critical</span>
              <span className="font-semibold text-red-600">3</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">High</span>
              <span className="font-semibold text-orange-600">8</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
