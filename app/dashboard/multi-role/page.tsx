"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle } from "@/components/ui/Card";
import { Users, Briefcase, Target, TrendingUp } from "lucide-react";

export default function MultiRolePage() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardTitle>Multi-role Access</CardTitle>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="p-4">
                <Users className="w-8 h-8 text-accent mb-2" />
                <h3 className="font-semibold text-foreground mb-2">Manufacturer</h3>
                <p className="text-muted-foreground mb-4">Full manufacturing access</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Active Projects</span>
                    <span className="font-semibold text-foreground">12</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Team Size</span>
                    <span className="font-semibold text-foreground">45</span>
                  </div>
                </div>
                <Button className="w-full">Access Portal</Button>
              </Card>
              
              <Card className="p-4">
                <Briefcase className="w-8 h-8 text-accent mb-2" />
                <h3 className="font-semibold text-foreground mb-2">Supplier</h3>
                <p className="text-muted-foreground mb-4">Supply chain management</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Active Orders</span>
                    <span className="font-semibold text-foreground">28</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Partners</span>
                    <span className="font-semibold text-foreground">8</span>
                  </div>
                </div>
                <Button className="w-full">Access Portal</Button>
              </Card>
              
              <Card className="p-4">
                <Target className="w-8 h-8 text-accent mb-2" />
                <h3 className="font-semibold text-foreground mb-2">Distributor</h3>
                <p className="text-muted-foreground mb-4">Distribution and logistics</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Delivery Routes</span>
                    <span className="font-semibold text-foreground">15</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Regions</span>
                    <span className="font-semibold text-foreground">6</span>
                  </div>
                </div>
                <Button className="w-full">Access Portal</Button>
              </Card>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Role Management</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Roles</span>
                    <span className="font-semibold text-foreground">8</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Active Users</span>
                    <span className="font-semibold text-foreground">156</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pending Requests</span>
                    <span className="font-semibold text-orange-600">3</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Role Changes</span>
                    <span className="font-semibold text-accent">2 this week</span>
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
