import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardStats } from "@/types";
import { CheckCircle, XCircle, Clock } from "lucide-react";

interface StatsOverviewProps {
  stats: DashboardStats;
}

export function StatsOverview({ stats }: StatsOverviewProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Verified Claims</CardTitle>
          <CheckCircle className="h-4 w-4 text-fact-true" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.verifiedCount}</div>
          <p className="text-xs text-muted-foreground">
            {((stats.verifiedCount / stats.totalBroadcasts) * 100).toFixed(1)}% of total
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">False Claims</CardTitle>
          <XCircle className="h-4 w-4 text-fact-false" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.falseCount}</div>
          <p className="text-xs text-muted-foreground">
            {((stats.falseCount / stats.totalBroadcasts) * 100).toFixed(1)}% of total
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
          <Clock className="h-4 w-4 text-fact-pending" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.pendingCount}</div>
          <p className="text-xs text-muted-foreground">
            {((stats.pendingCount / stats.totalBroadcasts) * 100).toFixed(1)}% of total
          </p>
        </CardContent>
      </Card>
    </div>
  );
}