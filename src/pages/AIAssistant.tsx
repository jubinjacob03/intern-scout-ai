
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessagesSquare } from "lucide-react";

const AIAssistant = () => {
  return (
    <div className="container py-8 animate-fade-up">
      <h1 className="text-3xl font-bold mb-2">AI Tech Interview Assistant</h1>
      <p className="text-muted-foreground mb-8">
        Get AI-powered assistance for technical interviews.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Interview Session</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <MessagesSquare className="h-8 w-8 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Start a new session</p>
                  <p className="text-sm text-muted-foreground">
                    Begin an AI-assisted interview
                  </p>
                </div>
              </div>
              <Button>New Session</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Question Bank</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input
                type="search"
                placeholder="Search questions..."
                className="w-full"
              />
              <div className="text-sm text-muted-foreground">
                No questions generated yet
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AIAssistant;
