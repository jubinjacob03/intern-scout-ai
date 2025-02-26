
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Scheduling = () => {
  return (
    <div className="container py-8 animate-fade-up">
      <h1 className="text-3xl font-bold mb-2">Interview Scheduling</h1>
      <p className="text-muted-foreground mb-8">
        Manage and schedule your recruitment interviews.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar mode="single" className="rounded-md border" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Interviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <Button variant="outline" className="justify-start">
                No interviews scheduled
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Scheduling;
