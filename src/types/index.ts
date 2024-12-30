export interface Broadcast {
  id: number;
  content: string;
  source: string;
  timestamp: string;
  status: "verified" | "false" | "pending";
  confidence: number;
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