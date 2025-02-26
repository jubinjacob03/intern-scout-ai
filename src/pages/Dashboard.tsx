
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
  Users,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

const stats = [
  {
    title: "Total Applicants",
    value: "124",
    change: "+12%",
    trend: "up",
    description: "vs. last month",
    icon: Users,
  },
  {
    title: "Pending Reviews",
    value: "45",
    change: "-5%",
    trend: "down",
    description: "vs. last week",
    icon: FileText,
  },
  {
    title: "Scheduled Interviews",
    value: "28",
    change: "+15%",
    trend: "up",
    description: "vs. last week",
    icon: Calendar,
  },
  {
    title: "Success Rate",
    value: "67%",
    change: "+3%",
    trend: "up",
    description: "vs. last month",
    icon: BarChart3,
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-8 animate-fade-up">
      <div>
        <h1 className="text-4xl font-bold tracking-tight mb-2">Welcome back</h1>
        <p className="text-muted-foreground text-lg">
          Here's what's happening with your recruitment pipeline today.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="animate-scale-in hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center gap-1 mt-1">
                <span className={`flex items-center text-xs ${
                  stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                }`}>
                  {stat.trend === 'up' ? (
                    <ArrowUp className="h-3 w-3" />
                  ) : (
                    <ArrowDown className="h-3 w-3" />
                  )}
                  {stat.change}
                </span>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Applications Overview</CardTitle>
            <CardDescription>
              Monthly application submissions and success rate
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center text-muted-foreground">
              Chart placeholder
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest updates from your recruitment pipeline
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-3 rounded-lg bg-muted/50"
                >
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">New application received</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
