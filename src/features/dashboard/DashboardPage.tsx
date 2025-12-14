import { StatCard } from "@/components/ui/StatCard";
import { AreaChart } from "@/components/ui/AreaChart";
import { TransactionTable } from "./TransactionTable";
import { ActivityFeed } from "./ActivityFeed";
import { Card } from "@/components/ui/card";
import { stats, transactions, activities, chartData } from "@/data/mockData";

export function DashboardPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Welcome back! Here's what's happening with your business today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>

      {/* Chart Section */}
      <div className="grid gap-6 lg:grid-cols-7">
        <Card className="lg:col-span-4 p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Revenue Overview</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Monthly revenue trend for the current year
              </p>
            </div>
            <div className="h-[200px]">
              <AreaChart data={chartData} />
            </div>
            <div className="flex justify-between pt-4 border-t">
              {chartData.map((point, index) => (
                <div key={index} className="text-center">
                  <p className="text-xs text-muted-foreground">{point.month}</p>
                  <p className="text-sm font-semibold mt-1">
                    ${(point.revenue / 1000).toFixed(0)}k
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <div className="lg:col-span-3">
          <ActivityFeed activities={activities} />
        </div>
      </div>

      {/* Transactions Table */}
      <TransactionTable transactions={transactions} />
    </div>
  );
}
