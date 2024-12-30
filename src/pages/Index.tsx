import { DashboardLayout } from "@/components/DashboardLayout";
import { StatsOverview } from "@/components/StatsOverview";
import { BroadcastList } from "@/components/BroadcastList";
import { useQuery } from "@tanstack/react-query";
import { fetchDashboardStats, fetchRecentBroadcasts } from "@/lib/api";
import { Skeleton } from "@/components/ui/skeleton";

const Index = () => {
  const { data: stats, isLoading: isLoadingStats } = useQuery({
    queryKey: ["dashboardStats"],
    queryFn: fetchDashboardStats,
  });

  const { data: broadcasts, isLoading: isLoadingBroadcasts } = useQuery({
    queryKey: ["recentBroadcasts"],
    queryFn: fetchRecentBroadcasts,
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">
            Overview of fact-checking activities and recent broadcasts
          </p>
        </div>
        
        {isLoadingStats ? (
          <div className="grid gap-4 md:grid-cols-3">
            <Skeleton className="h-32" />
            <Skeleton className="h-32" />
            <Skeleton className="h-32" />
          </div>
        ) : stats ? (
          <StatsOverview stats={stats} />
        ) : null}
        
        {isLoadingBroadcasts ? (
          <Skeleton className="h-[400px]" />
        ) : broadcasts ? (
          <BroadcastList broadcasts={broadcasts} />
        ) : null}
      </div>
    </DashboardLayout>
  );
};

export default Index;