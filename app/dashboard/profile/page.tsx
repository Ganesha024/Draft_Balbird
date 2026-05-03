"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle } from "@/components/ui/Card";
import { User, Settings, LogOut, Mail, Bell, MessageCircle, HelpCircle, FileText, Target, TrendingUp, Users, Briefcase, Activity } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <Card className="p-5">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-foreground" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Ganesh</h2>
              <p className="text-sm text-muted-foreground">ganesh5006pal@gmail.com</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-4">
              <CardTitle className="text-sm mb-3">Account Settings</CardTitle>
              <div className="space-y-2">
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <Settings className="w-3.5 h-3.5 mr-2" />
                  Edit Profile
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <User className="w-3.5 h-3.5 mr-2" />
                  Change Password
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <Mail className="w-3.5 h-3.5 mr-2" />
                  Email Preferences
                </Button>
              </div>
            </Card>

            <Card className="p-4">
              <CardTitle className="text-sm mb-3">Quick Actions</CardTitle>
              <div className="space-y-2">
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <LogOut className="w-3.5 h-3.5 mr-2" />
                  Logout
                </Button>
              </div>
            </Card>
          </div>
        </Card>
      </div>
    </div>
  );
}
