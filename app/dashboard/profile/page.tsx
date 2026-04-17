"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardContent } from "@/components/ui/Card";
import { User, Settings, LogOut, Mail, Bell, MessageCircle, HelpCircle, FileText, Target, TrendingUp, Users, Briefcase, Activity } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardTitle>Profile</CardTitle>
          <CardContent>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center">
                <User className="w-10 h-10 text-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Ganesh</h2>
                <p className="text-muted-foreground">ganesh5006pal@gmail.com</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardTitle>Account Settings</CardTitle>
                <CardContent>
                  <div className="space-y-4">
                    <Button variant="ghost" className="w-full justify-start">
                      <Settings className="w-4 h-4 mr-2" />
                      Edit Profile
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <User className="w-4 h-4 mr-2" />
                      Change Password
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Preferences
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardTitle>Quick Actions</CardTitle>
                <CardContent>
                  <div className="space-y-4">
                    <Button variant="ghost" className="w-full justify-start">
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
