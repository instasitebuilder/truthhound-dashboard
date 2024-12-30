import { DashboardLayout } from "@/components/DashboardLayout";
import { StatsOverview } from "@/components/StatsOverview";
import { BroadcastList } from "@/components/BroadcastList";
import type { DashboardStats, Broadcast } from "@/types";

const mockStats: DashboardStats = {
  totalBroadcasts: 150,
  verifiedCount: 85,
  falseCount: 45,
  pendingCount: 20,
};

const mockBroadcasts: Broadcast[] = [
  {
    id: 1,
    content: "New study shows significant climate change impact in coastal regions",
    source: "Climate Research Institute",
    timestamp: "2 hours ago",
    status: "verified",
    confidence: 95,
  },
  {
    id: 2,
    content: "Government announces major policy shift in healthcare",
    source: "National News Network",
    timestamp: "4 hours ago",
    status: "pending",
    confidence: 65,
  },
  {
    id: 3,
    content: "Viral social media post claims breakthrough in renewable energy",
    source: "Tech Daily",
    timestamp: "6 hours ago",
    status: "false",
    confidence: 89,
  },
];

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">
            Overview of fact-checking activities and recent broadcasts
          </p>
        </div>
        <StatsOverview stats={mockStats} />
        <BroadcastList broadcasts={mockBroadcasts} />
      </div>
    </DashboardLayout>
  );
};

export default Index;