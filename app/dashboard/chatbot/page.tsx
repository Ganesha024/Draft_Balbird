"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle } from "@/components/ui/Card";
import { MessageCircle, HelpCircle, Book, FileText, Mail } from "lucide-react";

export default function ChatbotPage() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardTitle>Chatbot / Help</CardTitle>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-4">
                <MessageCircle className="w-8 h-8 text-accent mb-2" />
                <h3 className="font-semibold text-foreground mb-2">AI Assistant</h3>
                <p className="text-muted-foreground mb-4">Get instant help with your questions</p>
                <Button className="w-full">Start Chat</Button>
              </Card>
              
              <Card className="p-4">
                <HelpCircle className="w-8 h-8 text-accent mb-2" />
                <h3 className="font-semibold text-foreground mb-2">Help Center</h3>
                <p className="text-muted-foreground mb-4">Browse documentation and FAQs</p>
                <Button variant="ghost" className="w-full">Browse Help</Button>
              </Card>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Book className="w-5 h-5 text-muted-foreground" />
                    <span className="text-foreground">User Guide</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-muted-foreground" />
                    <span className="text-foreground">Documentation</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-5 h-5 text-muted-foreground" />
                    <span className="text-foreground">Contact Support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <HelpCircle className="w-5 h-5 text-muted-foreground" />
                    <span className="text-foreground">Report Issue</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
