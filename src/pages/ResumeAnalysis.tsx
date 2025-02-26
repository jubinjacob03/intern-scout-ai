
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Upload } from "lucide-react";

const ResumeAnalysis = () => {
  return (
    <div className="container py-8 animate-fade-up">
      <h1 className="text-3xl font-bold mb-2">Resume Analysis</h1>
      <p className="text-muted-foreground mb-8">
        Upload resumes for AI-powered analysis and scoring.
      </p>

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
            <Button className="mt-4">
              Analyze Resume
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResumeAnalysis;
