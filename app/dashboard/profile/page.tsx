"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import {
  User, Settings, LogOut, Mail, HelpCircle,
  Briefcase, Activity, FolderOpen, Network, ClipboardList,
} from "lucide-react";

export default function ProfilePage() {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">My Profile</h1>
        <p className="text-sm text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>

      {/* Top Banner inside a Card */}
      <Card className="mb-6 overflow-hidden border-0 shadow-md">
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 border-b-4 border-accent">
          <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center border-2 border-accent shrink-0">
            <User className="w-12 h-12 text-accent" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-extrabold tracking-tight">Ganesh</h2>
            <p className="text-muted-foreground flex items-center justify-center md:justify-start gap-2 mt-2">
              <Briefcase className="w-4 h-4" /> Execution Architect
            </p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="p-5">
            <h3 className="font-bold text-lg mb-4 border-b border-white/10/50 pb-2">Profile Details</h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider font-semibold">Email</p>
                <p className="font-medium text-sm">ganesh5006pal@gmail.com</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider font-semibold">Company</p>
                <p className="font-medium text-sm">Balbird Industries</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider font-semibold">Role</p>
                <p className="font-medium text-sm">Execution Architect</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider font-semibold">Location</p>
                <p className="font-medium text-sm">Cross-Border Operations</p>
              </div>
            </div>
          </Card>

          <Card className="p-5">
            <h3 className="font-bold text-lg mb-4 border-b border-white/10/50 pb-2">Quick Stats</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <FolderOpen className="w-4 h-4 text-accent" /> Active Projects
                </div>
                <span className="font-bold">4</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Network className="w-4 h-4 text-accent" /> Pending Matches
                </div>
                <span className="font-bold">7</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <ClipboardList className="w-4 h-4 text-accent" /> Execution Tasks
                </div>
                <span className="font-bold">12</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Activity className="w-4 h-4 text-accent" /> Completed
                </div>
                <span className="font-bold">23</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Content Area */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6 md:p-8">
            <h2 className="text-xl font-bold mb-6">Account Settings</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Settings, title: "Edit Profile", desc: "Update your personal details" },
                { icon: User, title: "Security", desc: "Change password & 2FA" },
                { icon: Mail, title: "Notifications", desc: "Email & alert preferences" },
                { icon: HelpCircle, title: "Support", desc: "Get help with your account" },
              ].map((item, idx) => (
                <Button key={idx} variant="ghost" className="h-auto p-4 justify-start items-center gap-4 bg-background/5/5 hover:bg-background/5/10 border border-white/10 hover:border-accent/30 transition-all rounded-xl">
                  <div className="p-3 bg-background/5 rounded-lg shadow-sm">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-sm">{item.title}</div>
                    <div className="text-xs text-muted-foreground">{item.desc}</div>
                  </div>
                </Button>
              ))}
            </div>
          </Card>

          <Card className="p-6 md:p-8 border-l-4 border-l-red-500">
            <h2 className="text-xl font-bold mb-4 text-red-600/90">Danger Zone</h2>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between p-5 bg-red-50/50 rounded-xl border border-red-100">
              <div>
                <div className="font-bold text-sm text-white">Sign Out</div>
                <div className="text-xs text-muted-foreground mt-1">End your current session securely</div>
              </div>
              <Button variant="ghost" className="w-full sm:w-auto bg-background/5 border border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 font-bold transition-colors shadow-sm">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
