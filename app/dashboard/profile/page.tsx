"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle } from "@/components/ui/Card";
import { User, Settings, LogOut, Mail, Bell, MessageCircle, HelpCircle, FileText, Target, TrendingUp, Users, Briefcase, Activity } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Banner */}
      <div className="bg-slate-900 text-white pt-24 pb-12 px-4 md:px-8 lg:px-16 border-b-4 border-accent">
        <div className="max-w-6xl mx-auto flex items-center gap-6">
          <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center border-2 border-accent shrink-0">
            <User className="w-12 h-12 text-accent" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Ganesh</h1>
            <p className="text-slate-300 flex items-center gap-2 mt-2">
              <Briefcase className="w-4 h-4" /> Chief Operations Officer
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <Card className="p-6 border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg mb-4 border-b border-border/50 pb-2">Profile Details</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Email</p>
                  <p className="font-medium">ganesh5006pal@gmail.com</p>
                </div>
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Company</p>
                  <p className="font-medium">Balbird Industries</p>
                </div>
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Location</p>
                  <p className="font-medium">Global Headquarters</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg mb-4 border-b border-border/50 pb-2">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-foreground/80">
                    <FileText className="w-4 h-4" /> Active Quotes
                  </div>
                  <span className="font-bold text-lg">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-foreground/80">
                    <Target className="w-4 h-4" /> In Production
                  </div>
                  <span className="font-bold text-lg text-accent-foreground">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-foreground/80">
                    <Activity className="w-4 h-4" /> Lifetime Orders
                  </div>
                  <span className="font-bold text-lg">47</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="p-6 md:p-8 border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button variant="ghost" className="h-auto p-4 justify-start items-center gap-4 bg-slate-50 hover:bg-slate-100 border border-transparent hover:border-slate-200 transition-all rounded-lg">
                  <div className="p-3 bg-white rounded-md shadow-sm">
                    <Settings className="w-5 h-5 text-foreground" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold">Edit Profile</div>
                    <div className="text-sm text-foreground/60">Update your personal details</div>
                  </div>
                </Button>

                <Button variant="ghost" className="h-auto p-4 justify-start items-center gap-4 bg-slate-50 hover:bg-slate-100 border border-transparent hover:border-slate-200 transition-all rounded-lg">
                  <div className="p-3 bg-white rounded-md shadow-sm">
                    <User className="w-5 h-5 text-foreground" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold">Security</div>
                    <div className="text-sm text-foreground/60">Change password & 2FA</div>
                  </div>
                </Button>

                <Button variant="ghost" className="h-auto p-4 justify-start items-center gap-4 bg-slate-50 hover:bg-slate-100 border border-transparent hover:border-slate-200 transition-all rounded-lg">
                  <div className="p-3 bg-white rounded-md shadow-sm">
                    <Mail className="w-5 h-5 text-foreground" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold">Notifications</div>
                    <div className="text-sm text-foreground/60">Email & alert preferences</div>
                  </div>
                </Button>

                <Button variant="ghost" className="h-auto p-4 justify-start items-center gap-4 bg-slate-50 hover:bg-slate-100 border border-transparent hover:border-slate-200 transition-all rounded-lg">
                  <div className="p-3 bg-white rounded-md shadow-sm">
                    <HelpCircle className="w-5 h-5 text-foreground" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold">Support</div>
                    <div className="text-sm text-foreground/60">Get help with your account</div>
                  </div>
                </Button>
              </div>
            </Card>

            <Card className="p-6 md:p-8 border-slate-200 shadow-sm border-t-4 border-t-red-500/20">
              <h2 className="text-xl font-bold mb-4 text-red-600/80">Danger Zone</h2>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between p-4 bg-red-50/50 rounded-lg border border-red-100">
                <div>
                  <div className="font-bold text-foreground">Sign Out</div>
                  <div className="text-sm text-foreground/60">End your current session</div>
                </div>
                <Button variant="ghost" className="w-full sm:w-auto bg-white border border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 font-bold transition-colors">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
            </Card>
          </div>
          
        </div>
      </div>
    </div>
  );
}
