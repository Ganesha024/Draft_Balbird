"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Bell, Settings, Check, X } from "lucide-react";

export default function NotificationsPage() {
  const notifications = [
    { type: "success", title: "Project Update", message: "Mobility Platform updated to v2.1", time: "2 hours ago", read: false },
    { type: "warning", title: "Deadline Approaching", message: "Supply Chain Portal deadline in 3 days", time: "5 hours ago", read: false },
    { type: "info", title: "New Team Member", message: "John Doe joined the team", time: "1 day ago", read: true },
    { type: "success", title: "Document Approved", message: "Quality Manual approved by QA", time: "2 days ago", read: true },
  ];

  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">Notifications</h1>
          <p className="text-sm text-slate-400">
            Stay updated on project milestones and team activity.
          </p>
        </div>
        <Button variant="outline" className="shrink-0 bg-white/5">
          <Settings className="w-4 h-4 mr-2" /> Notification Settings
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <Card className="p-0 overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5/5">
              <h3 className="font-bold text-white flex items-center gap-2">
                <Bell className="w-4 h-4 text-accent" /> Recent Alerts
              </h3>
              <Button variant="ghost" size="sm" className="h-8 text-xs font-medium">Mark all as read</Button>
            </div>
            <div className="divide-y divide-border">
              {notifications.map((notification, index) => (
                <div key={index} className={`flex items-start gap-4 p-4 ${notification.read ? 'bg-white/5' : 'bg-accent/5'}`}>
                  <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                    notification.type === 'success' ? 'bg-green-500' :
                    notification.type === 'warning' ? 'bg-orange-500' :
                    notification.type === 'info' ? 'bg-blue-500' : 'bg-gray-500'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <h4 className="font-bold text-sm text-white">{notification.title}</h4>
                      <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">{notification.time}</span>
                    </div>
                    <p className="text-sm text-slate-400 mb-3">{notification.message}</p>
                    
                    {!notification.read && (
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="h-7 text-xs bg-white/5">
                          <Check className="w-3 h-3 mr-1" /> Mark Read
                        </Button>
                        <Button variant="ghost" size="sm" className="h-7 text-xs">
                          <X className="w-3 h-3 mr-1" /> Dismiss
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="lg:col-span-1 space-y-6">
          <Card className="p-5">
            <h3 className="font-bold text-lg mb-4 border-b border-white/10/50 pb-2">Email Preferences</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-white/10 text-accent focus:ring-accent" />
                <span className="text-sm font-medium">Project updates</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-white/10 text-accent focus:ring-accent" />
                <span className="text-sm font-medium">Deadline reminders</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-white/10 text-accent focus:ring-accent" />
                <span className="text-sm font-medium">Team notifications</span>
              </label>
            </div>
          </Card>

          <Card className="p-5">
            <h3 className="font-bold text-lg mb-4 border-b border-white/10/50 pb-2">In-App Preferences</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-white/10 text-accent focus:ring-accent" />
                <span className="text-sm font-medium">Desktop notifications</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-white/10 text-accent focus:ring-accent" />
                <span className="text-sm font-medium">Sound alerts</span>
              </label>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
