export interface Broadcast {
  id: number;
  content: string;
  source: string;
  speaker: string | null;
  timestamp: string;
  status: "verified" | "false" | "pending";
  confidence: number;
  created_at: string;
  updated_at: string;
}

export interface DashboardStats {
  totalBroadcasts: number;
  verifiedCount: number;
  falseCount: number;
  pendingCount: number;
}

export interface User {
  id: number;
  username: string;
  email: string;
}