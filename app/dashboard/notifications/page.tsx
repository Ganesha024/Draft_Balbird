"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle } from "@/components/ui/Card";
import { Bell, Settings, Check, X } from "lucide-react";

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <Card className="p-5">
          <div className="flex items-center justify-between mb-3">
            <CardTitle>Notifications</CardTitle>
            <Button variant="ghost" size="sm">
              <Settings className="w-3.5 h-3.5 mr-1" />
              Settings
            </Button>
          </div>

          <div className="space-y-2 mb-5">
            {[
              { type: "success", title: "Project Update", message: "Mobility Platform updated to v2.1", time: "2 hours ago", read: false },
              { type: "warning", title: "Deadline Approaching", message: "Supply Chain Portal deadline in 3 days", time: "5 hours ago", read: false },
              { type: "info", title: "New Team Member", message: "John Doe joined the team", time: "1 day ago", read: true },
              { type: "success", title: "Document Approved", message: "Quality Manual approved by QA", time: "2 days ago", read: true },
            ].map((notification, index) => (
              <div key={index} className={`flex items-start gap-2 p-3 border border-border rounded-lg ${notification.read ? 'bg-background' : 'bg-muted'}`}>
                <div className={`w-1.5 h-1.5 rounded-full mt-1.5 ${
                  notification.type === 'success' ? 'bg-green-500' :
                  notification.type === 'warning' ? 'bg-yellow-500' :
                  notification.type === 'info' ? 'bg-blue-500' : 'bg-gray-500'
                }`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <h4 className="font-medium text-sm text-foreground">{notification.title}</h4>
                    <span className="text-xs text-muted-foreground shrink-0">{notification.time}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{notification.message}</p>
                  <div className="flex items-center gap-2 mt-1.5">
                    {!notification.read && (
                      <Button variant="ghost" size="sm">
                        <Check className="w-3 h-3 mr-1" />
                        Mark Read
                      </Button>
                    )}
                    <Button variant="ghost" size="sm">
                      <X className="w-3 h-3 mr-1" />
                      Dismiss
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-sm font-semibold text-foreground mb-3">Preferences</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Card className="p-3">
              <h4 className="font-medium text-sm text-foreground mb-2">Email</h4>
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-sm">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span>Project updates</span>
                </label>
                <label className="flex items-center gap-1.5 text-sm">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span>Deadline reminders</span>
                </label>
                <label className="flex items-center gap-1.5 text-sm">
                  <input type="checkbox" className="rounded" />
                  <span>Team notifications</span>
                </label>
              </div>
            </Card>

            <Card className="p-3">
              <h4 className="font-medium text-sm text-foreground mb-2">In-App</h4>
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-sm">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span>Desktop notifications</span>
                </label>
                <label className="flex items-center gap-1.5 text-sm">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span>Sound alerts</span>
                </label>
              </div>
            </Card>
          </div>
        </Card>
      </div>
    </div>
  );
}
