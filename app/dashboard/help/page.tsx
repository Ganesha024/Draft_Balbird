"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle } from "@/components/ui/Card";
import { HelpCircle, Book, FileText, Mail, MessageCircle } from "lucide-react";

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardTitle>Help</CardTitle>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-4">
                <Book className="w-8 h-8 text-accent mb-2" />
                <h3 className="font-semibold text-foreground mb-2">User Guide</h3>
                <p className="text-muted-foreground mb-4">Complete user documentation</p>
                <Button className="w-full">View Guide</Button>
              </Card>
              
              <Card className="p-4">
                <FileText className="w-8 h-8 text-accent mb-2" />
                <h3 className="font-semibold text-foreground mb-2">API Documentation</h3>
                <p className="text-muted-foreground mb-4">Technical API references</p>
                <Button className="w-full">View Docs</Button>
              </Card>
              
              <Card className="p-4">
                <MessageCircle className="w-8 h-8 text-accent mb-2" />
                <h3 className="font-semibold text-foreground mb-2">FAQ</h3>
                <p className="text-muted-foreground mb-4">Frequently asked questions</p>
                <Button className="w-full">View FAQ</Button>
              </Card>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Support Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-5 h-5 text-muted-foreground" />
                    <span className="text-foreground">support@balbird.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <HelpCircle className="w-5 h-5 text-muted-foreground" />
                    <span className="text-foreground">Help Center</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Response Time</span>
                    <span className="font-semibold text-accent">&lt; 2 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Available 24/7</span>
                    <span className="font-semibold text-green-600">Yes</span>
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
