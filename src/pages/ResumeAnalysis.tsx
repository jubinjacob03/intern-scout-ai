
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FileText, Upload, Search, CheckCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ResumeAnalysis = () => {
  const { toast } = useToast();

  const handleUpload = () => {
    toast({
      title: "Resume Uploaded",
      description: "Your resume has been uploaded and is being analyzed.",
    });
  };

  return (
    <div className="container py-8 animate-fade-up">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Resume Analysis</h1>
          <p className="text-muted-foreground">
            Upload resumes for AI-powered analysis and scoring.
          </p>
        </div>
        <Button variant="outline" className="gap-2">
          <FileText className="w-4 h-4" />
          View History
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-12">
              <Upload className="h-8 w-8 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">Upload Resume</h3>
              <p className="text-sm text-muted-foreground text-center mb-4">
                Drag and drop your resume file here, or click to browse
              </p>
              <Input
                type="file"
                className="max-w-xs"
                accept=".pdf,.doc,.docx"
              />
              <Button className="mt-4" onClick={handleUpload}>
                Analyze Resume
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              Analysis Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">No analysis yet</p>
                  <p className="text-sm text-muted-foreground">
                    Upload a resume to see AI-powered insights
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResumeAnalysis;
