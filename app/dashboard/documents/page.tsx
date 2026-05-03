"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle } from "@/components/ui/Card";
import { FileText, Download, Upload, Search } from "lucide-react";

export default function DocumentsPage() {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <Card className="p-5">
          <CardTitle className="mb-3">Documents</CardTitle>

          <div className="flex items-center gap-2 mb-4">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search documents..."
              className="flex-1 h-9 px-3 border border-border rounded-lg bg-background text-sm text-foreground outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
            {[
              { title: "Manufacturing Specs", desc: "Technical specifications", updated: "2 days ago" },
              { title: "Quality Manual", desc: "Quality assurance procedures", updated: "1 week ago" },
              { title: "Compliance Report", desc: "Regulatory documentation", updated: "3 days ago" },
            ].map((doc) => (
              <Card key={doc.title} className="p-3">
                <FileText className="w-5 h-5 text-accent mb-1" />
                <h3 className="font-semibold text-sm text-foreground mb-0.5">{doc.title}</h3>
                <p className="text-xs text-muted-foreground mb-2">{doc.desc}</p>
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-muted-foreground">Updated</span>
                  <span className="text-foreground">{doc.updated}</span>
                </div>
                <Button size="sm" className="w-full">View</Button>
              </Card>
            ))}
          </div>

          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-foreground">Recent</h3>
            <Button variant="ghost" size="sm">
              <Upload className="w-3.5 h-3.5 mr-1" />
              Upload
            </Button>
          </div>

          <div className="space-y-1.5">
            {[1, 2, 3, 4, 5].map((doc) => (
              <div key={doc} className="flex items-center justify-between p-2 border border-border rounded-lg">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-accent" />
                  <div>
                    <div className="text-sm font-medium text-foreground">Document {doc}</div>
                    <div className="text-xs text-muted-foreground">PDF • 2.4 MB</div>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Download className="w-3.5 h-3.5" />
                </Button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
