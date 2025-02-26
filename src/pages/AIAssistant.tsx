
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessagesSquare, Play, Brain, Search } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const AIAssistant = () => {
  const { toast } = useToast();

  const handleNewSession = () => {
    toast({
      title: "New Session Started",
      description: "Your AI interview session is ready to begin.",
    });
  };

  return (
    <div className="container py-8 animate-fade-up">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">AI Tech Interview Assistant</h1>
          <p className="text-muted-foreground">
            Get AI-powered assistance for technical interviews.
          </p>
        </div>
        <Button variant="outline" className="gap-2">
          <Brain className="w-4 h-4" />
          Interview History
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessagesSquare className="w-5 h-5" />
              Interview Session
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-col gap-4 p-4 bg-secondary/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Play className="w-6 h-6 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Start a new session</p>
                    <p className="text-sm text-muted-foreground">
                      Begin an AI-assisted interview
                    </p>
                  </div>
                </div>
                <Button onClick={handleNewSession}>New Session</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              Question Bank
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input
                type="search"
                placeholder="Search questions..."
                className="w-full"
              />
              <div className="p-4 bg-secondary/50 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  No questions generated yet. Start a new session to populate the question bank.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AIAssistant;
