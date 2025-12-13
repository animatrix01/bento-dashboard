import { Card } from "@/components/ui/card";
import { ArrowDown, ArrowUp, DollarSign, Users, ShoppingCart, TrendingUp } from "lucide-react";
import { Stat } from "@/types";

interface StatCardProps {
  stat: Stat;
}

const iconMap = {
  DollarSign,
  Users,
  ShoppingCart,
  TrendingUp,
};

export function StatCard({ stat }: StatCardProps) {
  const Icon = iconMap[stat.icon as keyof typeof iconMap] || TrendingUp;
  const TrendIcon = stat.trend === "up" ? ArrowUp : ArrowDown;

  return (
    <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
          <p className="text-3xl font-bold tracking-tight">{stat.value}</p>
          <div className="flex items-center gap-1">
            <TrendIcon 
              className={`h-4 w-4 ${
                stat.trend === "up" ? "text-success" : "text-destructive"
              }`}
            />
            <span
              className={`text-sm font-medium ${
                stat.trend === "up" ? "text-success" : "text-destructive"
              }`}
            >
              {stat.change}
            </span>
            <span className="text-sm text-muted-foreground">from last month</span>
          </div>
        </div>
        <div className="rounded-lg bg-primary/10 p-3">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
    </Card>
  );
}
