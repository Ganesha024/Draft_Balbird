"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { MessageCircle, HelpCircle, Book, FileText, Mail, ArrowRight } from "lucide-react";

export default function ChatbotPage() {
  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">Chatbot & Help Center</h1>
          <p className="text-sm text-muted-foreground">
            Get instant assistance or browse support documentation.
          </p>
        </div>
        <Button className="shrink-0 bg-accent text-accent-foreground hover:bg-accent/90">
          <MessageCircle className="w-4 h-4 mr-2" /> Start Chat
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="p-6 border-l-4 border-l-accent flex flex-col items-start bg-background/5/5">
          <div className="h-12 w-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
            <MessageCircle className="w-6 h-6 text-accent" />
          </div>
          <h3 className="font-bold text-xl text-white mb-2">AI Assistant</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Our AI-powered assistant can help you find manufacturers, track projects, and navigate the platform instantly.
          </p>
          <Button className="mt-auto w-full sm:w-auto font-medium">Start Chat <ArrowRight className="w-4 h-4 ml-2" /></Button>
        </Card>

        <Card className="p-6 border-l-4 border-l-blue-500 flex flex-col items-start bg-background/5/5">
          <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
            <HelpCircle className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-bold text-xl text-white mb-2">Help Center</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Browse our comprehensive documentation, FAQs, and step-by-step guides for all platform features.
          </p>
          <Button variant="outline" className="mt-auto w-full sm:w-auto font-medium bg-background/5">Browse Help <ArrowRight className="w-4 h-4 ml-2" /></Button>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-bold text-white mb-6 border-b border-white/10/50 pb-2">Quick Actions & Resources</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button variant="ghost" className="h-auto p-4 flex flex-col items-start gap-3 border border-white/10 bg-background/5/5 hover:bg-background/5/10 hover:border-accent/30 rounded-xl transition-all">
            <div className="p-2 bg-background/5 rounded-lg shadow-sm">
              <Book className="w-5 h-5 text-accent" />
            </div>
            <div className="text-left">
              <span className="text-sm font-bold block mb-1">User Guide</span>
              <span className="text-xs text-muted-foreground font-normal">Learn the basics</span>
            </div>
          </Button>
          
          <Button variant="ghost" className="h-auto p-4 flex flex-col items-start gap-3 border border-white/10 bg-background/5/5 hover:bg-background/5/10 hover:border-accent/30 rounded-xl transition-all">
            <div className="p-2 bg-background/5 rounded-lg shadow-sm">
              <FileText className="w-5 h-5 text-accent" />
            </div>
            <div className="text-left">
              <span className="text-sm font-bold block mb-1">API Docs</span>
              <span className="text-xs text-muted-foreground font-normal">Technical integration</span>
            </div>
          </Button>

          <Button variant="ghost" className="h-auto p-4 flex flex-col items-start gap-3 border border-white/10 bg-background/5/5 hover:bg-background/5/10 hover:border-accent/30 rounded-xl transition-all">
            <div className="p-2 bg-background/5 rounded-lg shadow-sm">
              <Mail className="w-5 h-5 text-accent" />
            </div>
            <div className="text-left">
              <span className="text-sm font-bold block mb-1">Contact Support</span>
              <span className="text-xs text-muted-foreground font-normal">Talk to a human</span>
            </div>
          </Button>

          <Button variant="ghost" className="h-auto p-4 flex flex-col items-start gap-3 border border-white/10 bg-background/5/5 hover:bg-background/5/10 hover:border-red-300 rounded-xl transition-all">
            <div className="p-2 bg-background/5 rounded-lg shadow-sm">
              <HelpCircle className="w-5 h-5 text-red-500" />
            </div>
            <div className="text-left">
              <span className="text-sm font-bold block mb-1 text-red-600">Report Issue</span>
              <span className="text-xs text-muted-foreground font-normal">File a bug report</span>
            </div>
          </Button>
        </div>
      </Card>
    </>
  );
}
