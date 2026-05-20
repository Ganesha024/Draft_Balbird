"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle } from "@/components/ui/Card";
import { FileText, Download, Upload, Search, Filter } from "lucide-react";

export default function DocumentsPage() {
  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">Documents</h1>
          <p className="text-sm text-slate-400">
            Access, upload, and manage traceability and compliance documents.
          </p>
        </div>
        <Button className="shrink-0">
          <Upload className="w-4 h-4 mr-2" /> Upload Document
        </Button>
      </div>

      <Card className="p-5 mb-6">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="flex-1 w-full flex items-center gap-2 bg-white/5/5 rounded-lg px-3 py-2 border border-white/10 focus-within:border-accent/30 focus-within:ring-2 focus-within:ring-accent/20 transition-all">
            <Search className="h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by filename, project, or tag..."
              className="bg-transparent border-none outline-none text-sm w-full"
            />
          </div>
          <Button variant="outline" className="w-full sm:w-auto shrink-0">
            <Filter className="w-4 h-4 mr-2" /> Filter
          </Button>
        </div>
      </Card>

      <h3 className="font-bold text-lg mb-4">Important Documents</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { title: "Manufacturing Specs", desc: "Technical specifications", updated: "2 days ago" },
          { title: "Quality Manual", desc: "Quality assurance procedures", updated: "1 week ago" },
          { title: "Compliance Report", desc: "Regulatory documentation", updated: "3 days ago" },
        ].map((doc) => (
          <Card key={doc.title} className="p-5 hover:shadow-md transition-all">
            <FileText className="w-8 h-8 text-accent/80 mb-3" />
            <h3 className="font-bold text-sm text-white mb-1">{doc.title}</h3>
            <p className="text-xs text-muted-foreground mb-4">{doc.desc}</p>
            <div className="flex justify-between items-center text-xs mb-4 pt-4 border-t border-white/10/50">
              <span className="text-muted-foreground">Updated</span>
              <span className="font-medium">{doc.updated}</span>
            </div>
            <Button size="sm" variant="secondary" className="w-full">View Document</Button>
          </Card>
        ))}
      </div>

      <h3 className="font-bold text-lg mb-4">Recent Files</h3>
      <Card className="overflow-hidden">
        <div className="divide-y divide-border">
          {[1, 2, 3, 4, 5].map((doc) => (
            <div key={doc} className="flex items-center justify-between p-4 hover:bg-white/5/5 transition-colors">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Traceability_Report_v{doc}.pdf</div>
                  <div className="text-xs text-muted-foreground mt-0.5">PDF Document • 2.4 MB • Uploaded by Ganesh</div>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="h-9 w-9 p-0 rounded-full hover:bg-accent/10 hover:text-accent">
                <Download className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}
