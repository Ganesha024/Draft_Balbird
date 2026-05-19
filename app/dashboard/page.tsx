"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import Image from "next/image";
import {
  User,
  LogOut,
  Settings,
  Activity,
  Users,
  Search,
  Bell,
  ChevronDown,
  Home,
  UserCircle,
  ClipboardList,
  FolderOpen,
  Target,
  BarChart3,
  FileText as FileIcon,
  Bell as NotificationIcon,
  Users2,
  MessageCircle,
  Plus,
  HelpCircle,
  Clock,
  CheckCircle,
  AlertCircle,
  Menu,
  Factory,
  Network,
  Shield,
  Workflow,
} from "lucide-react";
import { useEffect, useState } from "react";

interface UserData {
  name: string;
  email: string;
}

export default function DashboardPage() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('userData');
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    } else {
      setUserData({ name: "Ganesh", email: "ganesh5006pal@gmail.com" });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userData');
    window.location.href = '/login';
  };

  if (!userData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
          <p className="text-foreground/75">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const sidebarItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard", active: true },
    { icon: UserCircle, label: "Profile", href: "/dashboard/profile" },
    { icon: ClipboardList, label: "Requirements", href: "/dashboard/requirements" },
    { icon: FolderOpen, label: "Projects", href: "/dashboard/projects" },
    { icon: Target, label: "Programs", href: "/dashboard/programs" },
    { icon: Network, label: "Matchmaking", href: "/dashboard/capabilities" },
    { icon: BarChart3, label: "Performance", href: "/dashboard/performance" },
    { icon: FileIcon, label: "Documents", href: "/dashboard/documents" },
    { icon: NotificationIcon, label: "Notifications", href: "/dashboard/notifications" },
    { icon: Users2, label: "Multi-role / Requests", href: "/dashboard/requests" },
    { icon: MessageCircle, label: "Chatbot / Help", href: "/dashboard/chatbot" },
  ];

  const notifications = [
    { id: 1, icon: CheckCircle, message: "New project scope submitted for review", time: "2 hours ago", read: false },
    { id: 2, icon: AlertCircle, message: "Manufacturer capability match found", time: "5 hours ago", read: false },
    { id: 3, icon: Users, message: "Consortium meeting scheduled for tomorrow", time: "1 day ago", read: true },
  ];

  const quickStats = [
    { title: "Active Projects", value: "4", change: "+1", icon: FolderOpen },
    { title: "Pending Matches", value: "7", change: "+3", icon: Network },
    { title: "Execution Tasks", value: "12", change: "-2", icon: ClipboardList },
    { title: "Notifications", value: "3", change: "0", icon: Bell },
  ];

  const recentActivities = [
    { id: 1, action: "Project scoped", detail: "EV motor housing — cross-border consortium", time: "2 hours ago" },
    { id: 2, action: "Capability matched", detail: "CNC manufacturer verified for rail components", time: "5 hours ago" },
    { id: 3, action: "Traceability updated", detail: "Quality documentation submitted for review", time: "1 day ago" },
    { id: 4, action: "Execution cell assigned", detail: "Student team onboarded for BD outreach", time: "2 days ago" },
  ];

  const operationalVerticals = [
    { icon: MessageCircle, name: "Communication", desc: "Stakeholder interaction & chatbot", status: "Active" },
    { icon: ClipboardList, name: "Task Management", desc: "Execution tracking & milestones", status: "Active" },
    { icon: Network, name: "Matchmaking", desc: "AI-assisted capability matching", status: "Active" },
    { icon: Shield, name: "Engineering", desc: "Technical validation & QA", status: "Active" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card border-b border-border">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="Balbird Industries" width={32} height={32} className="rounded-full" />
              <span className="text-lg font-semibold">Balbird Industries</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Global Search */}
            <div className="hidden md:flex items-center gap-2 bg-muted rounded-lg px-3 py-2">
              <Search className="h-4 w-4 text-foreground/50" />
              <input
                type="text"
                placeholder="Search projects, stakeholders..."
                className="bg-transparent border-none outline-none text-sm w-64"
              />
            </div>

            {/* Notifications */}
            <div className="relative">
              <Button
                variant="ghost"
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="relative"
              >
                <Bell className="h-5 w-5" />
                {notifications.filter(n => !n.read).length > 0 && (
                  <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
                )}
              </Button>

              {notificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-card border border-border rounded-lg shadow-lg">
                  <div className="p-4 border-b border-border">
                    <h3 className="font-semibold">Notifications</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map(notification => (
                      <div key={notification.id} className={`p-4 border-b border-border ${!notification.read ? 'bg-accent/5' : ''}`}>
                        <div className="flex items-start gap-3">
                          <notification.icon className="h-5 w-5 text-accent mt-0.5" />
                          <div className="flex-1">
                            <p className="text-sm">{notification.message}</p>
                            <p className="text-xs text-foreground/50 mt-1">{notification.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* User Profile Dropdown */}
            <div className="relative">
              <Button
                variant="ghost"
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="flex items-center gap-2"
              >
                <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <User className="h-4 w-4" />
                </div>
                <ChevronDown className="h-4 w-4" />
              </Button>

              {profileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg">
                  <div className="p-3 border-b border-border">
                    <p className="font-medium text-sm">{userData.name}</p>
                    <p className="text-xs text-foreground/50">{userData.email}</p>
                  </div>
                  <div className="p-1">
                    <Button variant="ghost" className="w-full justify-start">
                      <UserCircle className="h-4 w-4 mr-2" />
                      Profile
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Settings className="h-4 w-4 mr-2" />
                      Settings
                    </Button>
                    <Button variant="ghost" onClick={handleLogout} className="w-full justify-start">
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="flex pt-16">
        {/* Sidebar */}
        <aside className={`fixed left-0 top-16 bottom-0 bg-card border-r border-border transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-0 overflow-hidden'} lg:w-64`}>
          <nav className="p-4 space-y-1">
            {sidebarItems.map((item, index) => (
              <ButtonLink
                key={index}
                href={item.href}
                variant={item.active ? "secondary" : "ghost"}
                className="w-full justify-start"
              >
                <item.icon className="h-4 w-4 mr-3" />
                {item.label}
              </ButtonLink>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : ''}`}>
          <div className="p-6">
            {/* Welcome Section */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold mb-1">Welcome back, {userData.name}!</h1>
              <p className="text-sm text-foreground/75">
                Here&apos;s your execution overview — projects, matches, and operational status.
              </p>
            </div>

            {/* Quick Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {quickStats.map((stat, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="h-8 w-8 rounded-lg bg-accent/20 flex items-center justify-center">
                      <stat.icon className="h-4 w-4 text-accent" />
                    </div>
                    <span className={`text-xs font-medium ${stat.change.startsWith('+') ? 'text-green-600' : stat.change.startsWith('-') ? 'text-red-600' : 'text-foreground/50'}`}>
                      {stat.change}
                    </span>
                  </div>
                  <div className="text-xl font-bold">{stat.value}</div>
                  <div className="text-xs text-foreground/50">{stat.title}</div>
                </Card>
              ))}
            </div>

            {/* Operational Verticals Status */}
            <Card className="p-4 mb-6">
              <CardTitle>Operational Verticals</CardTitle>
              <CardDescription>Status of core operational systems</CardDescription>
              <div className="mt-3 grid grid-cols-2 lg:grid-cols-4 gap-3">
                {operationalVerticals.map((v, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <v.icon className="h-5 w-5 text-accent" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{v.name}</p>
                      <p className="text-xs text-foreground/50 truncate">{v.desc}</p>
                    </div>
                    <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                      {v.status}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Activity + Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
              <Card className="p-4">
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest execution updates</CardDescription>
                <div className="mt-3 space-y-2">
                  {recentActivities.map(activity => (
                    <div key={activity.id} className="flex items-start gap-2 p-2 rounded-lg bg-muted/50">
                      <Activity className="h-3.5 w-3.5 text-accent mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{activity.action}</p>
                        <p className="text-xs text-foreground/50 truncate">{activity.detail}</p>
                        <p className="text-xs text-foreground/30">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-4">
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Frequently used workflows</CardDescription>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <Button className="h-auto p-3 flex flex-col gap-1">
                    <Plus className="h-4 w-4" />
                    <span className="text-xs">New Project</span>
                  </Button>
                  <Button className="h-auto p-3 flex flex-col gap-1">
                    <Network className="h-4 w-4" />
                    <span className="text-xs">Find Manufacturer</span>
                  </Button>
                  <Button className="h-auto p-3 flex flex-col gap-1">
                    <Workflow className="h-4 w-4" />
                    <span className="text-xs">Track Execution</span>
                  </Button>
                  <Button className="h-auto p-3 flex flex-col gap-1">
                    <HelpCircle className="h-4 w-4" />
                    <span className="text-xs">Get Support</span>
                  </Button>
                </div>
              </Card>
            </div>

            {/* System Updates */}
            <Card className="p-4">
              <CardTitle>Platform Updates</CardTitle>
              <CardDescription>Latest ecosystem updates and announcements</CardDescription>
              <div className="mt-3 space-y-2">
                <div className="p-3 rounded-lg bg-accent/5 border border-accent/20">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Factory className="h-3.5 w-3.5 text-accent" />
                    <span className="font-medium text-sm">Matchmaking Engine Updated</span>
                  </div>
                  <p className="text-xs text-foreground/75">AI-assisted capability matching now considers certification compatibility and geographic proximity.</p>
                  <p className="text-xs text-foreground/50 mt-1">2 days ago</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Shield className="h-3.5 w-3.5 text-foreground/50" />
                    <span className="font-medium text-sm">Traceability Module v2</span>
                  </div>
                  <p className="text-xs text-foreground/75">End-to-end documentation flow now supports IATF 16949 and AS9100 compliance templates.</p>
                  <p className="text-xs text-foreground/50 mt-1">5 days ago</p>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>

      {/* Floating Chatbot Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button className="rounded-full h-14 w-14 shadow-lg">
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}
