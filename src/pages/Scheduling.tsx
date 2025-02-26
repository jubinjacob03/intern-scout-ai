
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar as CalendarIcon, Users, Clock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Scheduling = () => {
  const { toast } = useToast();

  const handleSchedule = () => {
    toast({
      title: "Interview Scheduled",
      description: "The interview has been scheduled successfully.",
    });
  };

  return (
    <div className="container py-8 animate-fade-up">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Interview Scheduling</h1>
          <p className="text-muted-foreground">
            Manage and schedule your recruitment interviews.
          </p>
        </div>
        <Button variant="outline" className="gap-2">
          <Clock className="w-4 h-4" />
          View All Events
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarIcon className="w-5 h-5" />
              Calendar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar mode="single" className="rounded-md border" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Upcoming Interviews
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-secondary/50 rounded-lg text-center">
                <p className="text-sm text-muted-foreground">
                  No upcoming interviews scheduled
                </p>
                <Button className="mt-4" onClick={handleSchedule}>
                  Schedule Interview
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Scheduling;
