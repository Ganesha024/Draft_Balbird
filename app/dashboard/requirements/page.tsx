"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle } from "@/components/ui/Card";
import { ClipboardList, Clock, CheckCircle, FileText } from "lucide-react";

export default function RequirementsPage() {
  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">Requirements</h1>
          <p className="text-sm text-foreground/70">
            Manage your project requirements and specifications.
          </p>
        </div>
        <Button className="shrink-0">
          <FileText className="w-4 h-4 mr-2" /> New Requirement
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="p-5 border-l-4 border-l-accent">
          <div className="flex items-center gap-3 mb-2">
            <ClipboardList className="w-5 h-5 text-accent" />
            <h3 className="font-bold text-sm text-foreground">Active</h3>
          </div>
          <div className="text-sm text-foreground/70 mb-4">12 ongoing requirements</div>
          <Button size="sm" className="w-full font-medium">View Details</Button>
        </Card>

        <Card className="p-5 border-l-4 border-l-orange-400">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="w-5 h-5 text-orange-500" />
            <h3 className="font-bold text-sm text-foreground">Pending Review</h3>
          </div>
          <div className="text-sm text-foreground/70 mb-4">5 awaiting approval</div>
          <Button variant="outline" size="sm" className="w-full font-medium">Review Now</Button>
        </Card>

        <Card className="p-5 border-l-4 border-l-green-500">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <h3 className="font-bold text-sm text-foreground">Completed</h3>
          </div>
          <div className="text-sm text-foreground/70 mb-4">28 fulfilled this month</div>
          <Button variant="ghost" size="sm" className="w-full font-medium border border-border">View Archive</Button>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-4 border-b border-border/50 pb-2">Overview Statistics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 bg-background/5/5 rounded-xl border border-border">
            <span className="text-xs text-foreground/70 uppercase tracking-wider font-semibold block mb-1">Total</span>
            <span className="text-2xl font-bold text-foreground">45</span>
          </div>
          <div className="p-4 bg-background/5/5 rounded-xl border border-border">
            <span className="text-xs text-foreground/70 uppercase tracking-wider font-semibold block mb-1">This Month</span>
            <span className="text-2xl font-bold text-accent">+12</span>
          </div>
          <div className="p-4 bg-red-50 rounded-xl border border-red-100">
            <span className="text-xs text-red-600 uppercase tracking-wider font-semibold block mb-1">Critical</span>
            <span className="text-2xl font-bold text-red-600">3</span>
          </div>
          <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
            <span className="text-xs text-orange-600 uppercase tracking-wider font-semibold block mb-1">High Priority</span>
            <span className="text-2xl font-bold text-orange-600">8</span>
          </div>
        </div>
      </Card>
    </>
  );
}
