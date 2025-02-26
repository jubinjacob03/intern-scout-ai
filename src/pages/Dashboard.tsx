
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart3,
  Calendar,
  FileText,
  UsersRound,
} from "lucide-react";

const stats = [
  {
    title: "Total Applicants",
    value: "124",
    description: "12% increase from last month",
    icon: UsersRound,
  },
  {
    title: "Pending Reviews",
    value: "45",
    description: "8 new applications today",
    icon: FileText,
  },
  {
    title: "Scheduled Interviews",
    value: "28",
    description: "Next interview in 2 hours",
    icon: Calendar,
  },
  {
    title: "Success Rate",
    value: "67%",
    description: "Based on last 30 days",
    icon: BarChart3,
  },
];

const Dashboard = () => {
  return (
    <div className="container py-8 animate-fade-up">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Welcome back, Admin</h1>
          <p className="text-muted-foreground">
            Here's what's happening with your recruitment pipeline today.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index} className="animate-scale-in">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
