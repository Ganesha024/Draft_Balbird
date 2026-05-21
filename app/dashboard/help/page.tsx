"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle } from "@/components/ui/Card";
import { HelpCircle, Book, FileText, MessageCircle, Mail } from "lucide-react";

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <Card className="p-5">
          <CardTitle className="mb-4">Help</CardTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
            <Card className="p-3">
              <Book className="w-6 h-6 text-accent mb-1" />
              <h3 className="font-semibold text-sm text-foreground mb-0.5">User Guide</h3>
              <p className="text-xs text-foreground/70 mb-3">Complete user documentation</p>
              <Button size="sm" className="w-full">View Guide</Button>
            </Card>

            <Card className="p-3">
              <FileText className="w-6 h-6 text-accent mb-1" />
              <h3 className="font-semibold text-sm text-foreground mb-0.5">API Docs</h3>
              <p className="text-xs text-foreground/70 mb-3">Technical API references</p>
              <Button size="sm" className="w-full">View Docs</Button>
            </Card>

            <Card className="p-3">
              <MessageCircle className="w-6 h-6 text-accent mb-1" />
              <h3 className="font-semibold text-sm text-foreground mb-0.5">FAQ</h3>
              <p className="text-xs text-foreground/70 mb-3">Frequently asked questions</p>
              <Button size="sm" className="w-full">View FAQ</Button>
            </Card>
          </div>

          <h3 className="text-sm font-semibold text-foreground mb-3">Support Resources</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-foreground/70" />
              <span className="text-sm text-foreground">support@balbird.com</span>
            </div>
            <div className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-foreground/70" />
              <span className="text-sm text-foreground">Help Center</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-foreground/70">Response Time</span>
              <span className="font-semibold text-accent">&lt; 2 hours</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-foreground/70">24/7</span>
              <span className="font-semibold text-green-600">Yes</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
