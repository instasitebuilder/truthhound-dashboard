import { supabase } from "@/integrations/supabase/client";

export async function fetchDashboardStats() {
  console.log("Fetching dashboard stats...");
  
  const [verifiedCount, falseCount, pendingCount] = await Promise.all([
    supabase
      .from("broadcasts")
      .select("*", { count: "exact" })
      .eq("status", "verified"),
    supabase
      .from("broadcasts")
      .select("*", { count: "exact" })
      .eq("status", "false"),
    supabase
      .from("broadcasts")
      .select("*", { count: "exact" })
      .eq("status", "pending"),
  ]);

  const totalBroadcasts = (verifiedCount.count || 0) + (falseCount.count || 0) + (pendingCount.count || 0);

  return {
    totalBroadcasts,
    verifiedCount: verifiedCount.count || 0,
    falseCount: falseCount.count || 0,
    pendingCount: pendingCount.count || 0,
  };
}

export async function fetchRecentBroadcasts() {
  console.log("Fetching recent broadcasts...");
  
  const { data, error } = await supabase
    .from("broadcasts")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(5);

  if (error) {
    console.error("Error fetching broadcasts:", error);
    throw error;
  }

  return data;
}