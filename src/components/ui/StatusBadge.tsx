import { Badge } from "@/components/ui/badge";

interface StatusBadgeProps {
  status: "success" | "pending" | "failed";
}

const statusConfig = {
  success: {
    label: "Success",
    className: "bg-success/10 text-success hover:bg-success/20",
  },
  pending: {
    label: "Pending",
    className: "bg-warning/10 text-warning hover:bg-warning/20",
  },
  failed: {
    label: "Failed",
    className: "bg-destructive/10 text-destructive hover:bg-destructive/20",
  },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];
  
  return (
    <Badge variant="secondary" className={config.className}>
      {config.label}
    </Badge>
  );
}
