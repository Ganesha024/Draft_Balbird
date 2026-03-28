"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import Image from "next/image";
import { 
  Instagram, 
  Facebook, 
  Mail, 
  User, 
  LogOut, 
  Settings, 
  Activity, 
  FileText, 
  Users, 
  TrendingUp,
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
  Upload,
  HelpCircle,
  Clock,
  CheckCircle,
  AlertCircle,
  Folder,
  Download,
  Trash2,
  Menu
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
    { icon: UserCircle, label: "Profile", href: "/profile" },
    { icon: ClipboardList, label: "Requirements / Capabilities", href: "/requirements" },
    { icon: FolderOpen, label: "Projects", href: "/projects" },
    { icon: Target, label: "Programs", href: "/programs" },
    { icon: BarChart3, label: "Performance", href: "/performance" },
    { icon: FileIcon, label: "Documents", href: "/documents" },
    { icon: NotificationIcon, label: "Notifications", href: "/notifications" },
    { icon: Users2, label: "Multi-role / Requests", href: "/requests" },
    { icon: MessageCircle, label: "Chatbot / Help", href: "/help" },
  ];

  const notifications = [
    { id: 1, icon: CheckCircle, message: "Requirement submitted successfully", time: "2 hours ago", read: false },
    { id: 2, icon: AlertCircle, message: "New project assignment available", time: "5 hours ago", read: false },
    { id: 3, icon: Users, message: "Team meeting scheduled for tomorrow", time: "1 day ago", read: true },
  ];

  const quickStats = [
    { title: "Active Projects", value: "12", change: "+2", icon: FolderOpen },
    { title: "New Requirements", value: "8", change: "+3", icon: ClipboardList },
    { title: "Pending Tasks", value: "5", change: "-1", icon: Clock },
    { title: "Notifications", value: "3", change: "0", icon: Bell },
  ];

  const recentActivities = [
    { id: 1, action: "Submitted requirement", detail: "EV motor housing production", time: "2 hours ago" },
    { id: 2, action: "Updated profile", detail: "Company information modified", time: "5 hours ago" },
    { id: 3, action: "Joined program", detail: "IATF 16949 readiness", time: "1 day ago" },
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
                placeholder="Search..."
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
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Welcome back, {userData.name}!</h1>
              <p className="text-foreground/75">Here's what's happening with your account today.</p>
            </div>

            {/* Quick Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {quickStats.map((stat, index) => (
                <Card key={index}>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center">
                        <stat.icon className="h-5 w-5 text-accent" />
                      </div>
                      <span className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-600' : stat.change.startsWith('-') ? 'text-red-600' : 'text-foreground/50'}`}>
                        {stat.change}
                      </span>
                    </div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-foreground/50">{stat.title}</div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Activity Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <Card>
                <div className="p-6">
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your latest actions and updates</CardDescription>
                  <div className="mt-4 space-y-3">
                    {recentActivities.map(activity => (
                      <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                        <Activity className="h-4 w-4 text-accent mt-0.5" />
                        <div className="flex-1">
                          <p className="text-sm font-medium">{activity.action}</p>
                          <p className="text-xs text-foreground/50">{activity.detail}</p>
                          <p className="text-xs text-foreground/30 mt-1">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              <Card>
                <div className="p-6">
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Frequently used features</CardDescription>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <Button className="h-auto p-4 flex flex-col gap-2">
                      <Plus className="h-5 w-5" />
                      <span className="text-sm">Create Requirement</span>
                    </Button>
                    <Button className="h-auto p-4 flex flex-col gap-2">
                      <UserCircle className="h-5 w-5" />
                      <span className="text-sm">Update Profile</span>
                    </Button>
                    <Button className="h-auto p-4 flex flex-col gap-2">
                      <Upload className="h-5 w-5" />
                      <span className="text-sm">Upload Document</span>
                    </Button>
                    <Button className="h-auto p-4 flex flex-col gap-2">
                      <HelpCircle className="h-5 w-5" />
                      <span className="text-sm">Request Support</span>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Recent Updates */}
            <Card>
              <div className="p-6">
                <CardTitle>System Updates</CardTitle>
                <CardDescription>Latest platform updates and announcements</CardDescription>
                <div className="mt-4 space-y-3">
                  <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Bell className="h-4 w-4 text-accent" />
                      <span className="font-medium text-sm">New Feature Released</span>
                    </div>
                    <p className="text-sm text-foreground/75">Advanced filtering system now available in Requirements module</p>
                    <p className="text-xs text-foreground/50 mt-2">2 days ago</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-2 mb-2">
                      <Settings className="h-4 w-4 text-foreground/50" />
                      <span className="font-medium text-sm">System Maintenance</span>
                    </div>
                    <p className="text-sm text-foreground/75">Scheduled maintenance this weekend - expect brief downtime</p>
                    <p className="text-xs text-foreground/50 mt-2">3 days ago</p>
                  </div>
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
