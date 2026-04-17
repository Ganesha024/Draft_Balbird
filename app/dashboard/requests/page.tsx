"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle } from "@/components/ui/Card";
import { FileText, Send, Clock, CheckCircle, AlertCircle } from "lucide-react";

export default function RequestsPage() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardTitle>Requests</CardTitle>
          <div className="p-6">
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <h3 className="text-lg font-semibold text-foreground">New Request</h3>
                <Button variant="ghost">
                  <Send className="w-4 h-4 mr-1" />
                  Create Request
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="p-4">
                <FileText className="w-8 h-8 text-accent mb-2" />
                <h3 className="font-semibold text-foreground mb-2">Pending Approval</h3>
                <p className="text-muted-foreground mb-4">3 requests awaiting approval</p>
                <Button className="w-full">Review Requests</Button>
              </Card>
              
              <Card className="p-4">
                <Clock className="w-8 h-8 text-blue-600 mb-2" />
                <h3 className="font-semibold text-foreground mb-2">In Progress</h3>
                <p className="text-muted-foreground mb-4">5 requests in progress</p>
                <Button variant="ghost" className="w-full">View Details</Button>
              </Card>
              
              <Card className="p-4">
                <CheckCircle className="w-8 h-8 text-green-600 mb-2" />
                <h3 className="font-semibold text-foreground mb-2">Completed</h3>
                <p className="text-muted-foreground mb-4">12 requests completed this week</p>
                <Button variant="ghost" className="w-full">View Archive</Button>
              </Card>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Request Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Requests</span>
                    <span className="font-semibold text-foreground">47</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">This Week</span>
                    <span className="font-semibold text-accent">+8</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Urgent</span>
                    <span className="font-semibold text-red-600">2</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">High Priority</span>
                    <span className="font-semibold text-orange-600">5</span>
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
