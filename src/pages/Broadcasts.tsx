import { DashboardLayout } from "@/components/DashboardLayout";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";
import { BroadcastList } from "@/components/BroadcastList";

const Broadcasts = () => {
  const { data: broadcasts, isLoading } = useQuery({
    queryKey: ["allBroadcasts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("broadcasts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">All Broadcasts</h2>
          <p className="text-muted-foreground">
            View and manage all fact-checking broadcasts
          </p>
        </div>
        
        {isLoading ? (
          <Skeleton className="h-[600px]" />
        ) : broadcasts ? (
          <BroadcastList broadcasts={broadcasts} />
        ) : null}
      </div>
    </DashboardLayout>
  );
};

export default Broadcasts;