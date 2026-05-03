"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle } from "@/components/ui/Card";
import { FileText, Send, Clock, CheckCircle } from "lucide-react";

export default function RequestsPage() {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <Card className="p-5">
          <div className="flex items-center justify-between mb-4">
            <CardTitle>Requests</CardTitle>
            <Button variant="ghost" size="sm">
              <Send className="w-3.5 h-3.5 mr-1" />
              Create Request
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
            <Card className="p-3">
              <FileText className="w-6 h-6 text-accent mb-1" />
              <h3 className="font-semibold text-sm text-foreground mb-0.5">Pending Approval</h3>
              <p className="text-xs text-muted-foreground mb-3">3 awaiting approval</p>
              <Button size="sm" className="w-full">Review</Button>
            </Card>

            <Card className="p-3">
              <Clock className="w-6 h-6 text-blue-600 mb-1" />
              <h3 className="font-semibold text-sm text-foreground mb-0.5">In Progress</h3>
              <p className="text-xs text-muted-foreground mb-3">5 in progress</p>
              <Button variant="ghost" size="sm" className="w-full">View</Button>
            </Card>

            <Card className="p-3">
              <CheckCircle className="w-6 h-6 text-green-600 mb-1" />
              <h3 className="font-semibold text-sm text-foreground mb-0.5">Completed</h3>
              <p className="text-xs text-muted-foreground mb-3">12 this week</p>
              <Button variant="ghost" size="sm" className="w-full">Archive</Button>
            </Card>
          </div>

          <h3 className="text-sm font-semibold text-foreground mb-3">Overview</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Total</span>
              <span className="font-semibold text-foreground">47</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">This Week</span>
              <span className="font-semibold text-accent">+8</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Urgent</span>
              <span className="font-semibold text-red-600">2</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">High Priority</span>
              <span className="font-semibold text-orange-600">5</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
