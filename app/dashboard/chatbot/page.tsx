"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle } from "@/components/ui/Card";
import { MessageCircle, HelpCircle, Book, FileText, Mail } from "lucide-react";

export default function ChatbotPage() {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <Card className="p-5">
          <CardTitle className="mb-4">Chatbot / Help</CardTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
            <Card className="p-3">
              <MessageCircle className="w-6 h-6 text-accent mb-1" />
              <h3 className="font-semibold text-sm text-foreground mb-0.5">AI Assistant</h3>
              <p className="text-xs text-muted-foreground mb-3">Get instant help with your questions</p>
              <Button size="sm" className="w-full">Start Chat</Button>
            </Card>

            <Card className="p-3">
              <HelpCircle className="w-6 h-6 text-accent mb-1" />
              <h3 className="font-semibold text-sm text-foreground mb-0.5">Help Center</h3>
              <p className="text-xs text-muted-foreground mb-3">Browse documentation and FAQs</p>
              <Button variant="ghost" size="sm" className="w-full">Browse Help</Button>
            </Card>
          </div>

          <h3 className="text-sm font-semibold text-foreground mb-3">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2">
              <Book className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-foreground">User Guide</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-foreground">Documentation</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-foreground">Contact Support</span>
            </div>
            <div className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-foreground">Report Issue</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
