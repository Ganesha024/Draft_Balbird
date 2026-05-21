"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FileText, Send, Clock, CheckCircle } from "lucide-react";

export default function RequestsPage() {
  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">Multi-Role Requests</h1>
          <p className="text-sm text-foreground/70">
            Manage your cross-functional requests and approvals.
          </p>
        </div>
        <Button className="shrink-0">
          <Send className="w-4 h-4 mr-2" /> Create Request
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="p-5 border-t-4 border-t-accent">
          <FileText className="w-6 h-6 text-accent mb-3" />
          <h3 className="font-bold text-base text-foreground mb-1">Pending Approval</h3>
          <p className="text-sm text-foreground/70 mb-4">3 requests awaiting your approval</p>
          <Button size="sm" className="w-full font-medium">Review Requests</Button>
        </Card>

        <Card className="p-5 border-t-4 border-t-blue-500">
          <Clock className="w-6 h-6 text-blue-600 mb-3" />
          <h3 className="font-bold text-base text-foreground mb-1">In Progress</h3>
          <p className="text-sm text-foreground/70 mb-4">5 requests currently being processed</p>
          <Button variant="outline" size="sm" className="w-full font-medium">View Status</Button>
        </Card>

        <Card className="p-5 border-t-4 border-t-green-500">
          <CheckCircle className="w-6 h-6 text-green-600 mb-3" />
          <h3 className="font-bold text-base text-foreground mb-1">Completed</h3>
          <p className="text-sm text-foreground/70 mb-4">12 requests resolved this week</p>
          <Button variant="ghost" size="sm" className="w-full border border-border font-medium">Archive</Button>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-4 border-b border-border/50 pb-2">Request Statistics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 bg-background/5/5 rounded-xl border border-border">
            <span className="text-xs text-foreground/70 uppercase tracking-wider font-semibold block mb-1">Total Active</span>
            <span className="text-2xl font-bold text-foreground">47</span>
          </div>
          <div className="p-4 bg-background/5/5 rounded-xl border border-border">
            <span className="text-xs text-foreground/70 uppercase tracking-wider font-semibold block mb-1">This Week</span>
            <span className="text-2xl font-bold text-accent">+8</span>
          </div>
          <div className="p-4 bg-red-50 rounded-xl border border-red-100">
            <span className="text-xs text-red-600 uppercase tracking-wider font-semibold block mb-1">Urgent</span>
            <span className="text-2xl font-bold text-red-600">2</span>
          </div>
          <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
            <span className="text-xs text-orange-600 uppercase tracking-wider font-semibold block mb-1">High Priority</span>
            <span className="text-2xl font-bold text-orange-600">5</span>
          </div>
        </div>
      </Card>
    </>
  );
}
