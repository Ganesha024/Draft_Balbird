"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle } from "@/components/ui/Card";
import { FileText, Download, Upload, Search } from "lucide-react";

export default function DocumentsPage() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardTitle>Documents</CardTitle>
          <div className="p-6">
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <Search className="w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search documents..."
                  className="flex-1 px-4 py-2 border border-border rounded-lg bg-background text-foreground"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="p-4">
                <FileText className="w-8 h-8 text-accent mb-2" />
                <h3 className="font-semibold text-foreground mb-2">Manufacturing Specs</h3>
                <p className="text-muted-foreground mb-4">Technical specifications and requirements</p>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Updated</span>
                  <span className="text-foreground">2 days ago</span>
                </div>
                <Button className="w-full">View Document</Button>
              </Card>
              
              <Card className="p-4">
                <FileText className="w-8 h-8 text-accent mb-2" />
                <h3 className="font-semibold text-foreground mb-2">Quality Manual</h3>
                <p className="text-muted-foreground mb-4">Quality assurance procedures</p>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Updated</span>
                  <span className="text-foreground">1 week ago</span>
                </div>
                <Button className="w-full">View Document</Button>
              </Card>
              
              <Card className="p-4">
                <FileText className="w-8 h-8 text-accent mb-2" />
                <h3 className="font-semibold text-foreground mb-2">Compliance Report</h3>
                <p className="text-muted-foreground mb-4">Regulatory compliance documentation</p>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Updated</span>
                  <span className="text-foreground">3 days ago</span>
                </div>
                <Button className="w-full">View Document</Button>
              </Card>
            </div>
            
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-foreground">Recent Documents</h3>
                <Button variant="ghost">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload New
                </Button>
              </div>
              
              <div className="space-y-2">
                {[1, 2, 3, 4, 5].map((doc) => (
                  <div key={doc} className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-accent" />
                      <div>
                        <div className="font-medium text-foreground">Document {doc}</div>
                        <div className="text-sm text-muted-foreground">PDF • 2.4 MB</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
