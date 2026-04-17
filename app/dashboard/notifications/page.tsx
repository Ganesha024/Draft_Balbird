"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle } from "@/components/ui/Card";
import { Bell, Settings, Check, X, MessageCircle, HelpCircle } from "lucide-react";

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardTitle>Notifications</CardTitle>
          <div className="p-6">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground">Recent Notifications</h3>
                <Button variant="ghost" size="sm">
                  <Settings className="w-4 h-4 mr-1" />
                  Settings
                </Button>
              </div>
              
              <div className="space-y-3">
                {[
                  { type: "success", title: "Project Update", message: "Mobility Platform updated to v2.1", time: "2 hours ago", read: false },
                  { type: "warning", title: "Deadline Approaching", message: "Supply Chain Portal deadline in 3 days", time: "5 hours ago", read: false },
                  { type: "info", title: "New Team Member", message: "John Doe joined the team", time: "1 day ago", read: true },
                  { type: "success", title: "Document Approved", message: "Quality Manual approved by QA", time: "2 days ago", read: true },
                ].map((notification, index) => (
                  <div key={index} className={`flex items-start space-x-3 p-4 border border-border rounded-lg ${notification.read ? 'bg-background' : 'bg-muted'}`}>
                    <div className={`w-2 h-2 rounded-full mt-1 ${
                      notification.type === 'success' ? 'bg-green-500' :
                      notification.type === 'warning' ? 'bg-yellow-500' :
                      notification.type === 'info' ? 'bg-blue-500' : 'bg-gray-500'
                    }`} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium text-foreground">{notification.title}</h4>
                        <span className="text-sm text-muted-foreground">{notification.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{notification.message}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        {!notification.read && (
                          <Button variant="ghost" size="sm">
                            <Check className="w-4 h-4 mr-1" />
                            Mark as Read
                          </Button>
                        )}
                        <Button variant="ghost" size="sm">
                          <X className="w-4 h-4 mr-1" />
                          Dismiss
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">Notification Preferences</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-4">
                  <h4 className="font-medium text-foreground mb-2">Email Notifications</h4>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm text-foreground">Project updates</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm text-foreground">Deadline reminders</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm text-foreground">Team notifications</span>
                    </label>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <h4 className="font-medium text-foreground mb-2">In-App Notifications</h4>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm text-foreground">Desktop notifications</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm text-foreground">Sound alerts</span>
                    </label>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
