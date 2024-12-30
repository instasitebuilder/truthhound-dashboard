import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Broadcast } from "@/types";
import { CheckCircle, XCircle, Clock } from "lucide-react";

interface BroadcastListProps {
  broadcasts: Broadcast[];
}

export function BroadcastList({ broadcasts }: BroadcastListProps) {
  const getStatusIcon = (status: Broadcast["status"]) => {
    switch (status) {
      case "verified":
        return <CheckCircle className="h-4 w-4 text-fact-true" />;
      case "false":
        return <XCircle className="h-4 w-4 text-fact-false" />;
      default:
        return <Clock className="h-4 w-4 text-fact-pending" />;
    }
  };

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Recent Broadcasts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {broadcasts.map((broadcast) => (
            <div
              key={broadcast.id}
              className="flex items-start space-x-4 p-4 rounded-lg border"
            >
              <div className="mt-1">{getStatusIcon(broadcast.status)}</div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {broadcast.content}
                </p>
                <div className="flex items-center pt-2">
                  <span className="text-xs text-muted-foreground">
                    {broadcast.source} • {broadcast.timestamp}
                  </span>
                </div>
              </div>
              <div className="text-xs font-medium">
                {broadcast.confidence}% confidence
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}