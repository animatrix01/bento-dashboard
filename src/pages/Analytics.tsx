import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { AreaChart } from "@/components/ui/AreaChart";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, Users, ShoppingCart, DollarSign, Eye } from "lucide-react";

const Analytics = () => {
  const metrics = [
    {
      name: "Page Views",
      value: "1.2M",
      change: "+12.5%",
      trend: "up",
      icon: Eye,
      color: "text-chart-1",
    },
    {
      name: "Total Sales",
      value: "$89,432",
      change: "+23.1%",
      trend: "up",
      icon: DollarSign,
      color: "text-chart-3",
    },
    {
      name: "Active Users",
      value: "8,234",
      change: "-3.2%",
      trend: "down",
      icon: Users,
      color: "text-chart-2",
    },
    {
      name: "Orders",
      value: "1,834",
      change: "+8.4%",
      trend: "up",
      icon: ShoppingCart,
      color: "text-chart-4",
    },
  ];

  const topProducts = [
    { name: "Premium Wireless Headphones", sales: 1243, revenue: 37290, growth: 85 },
    { name: "Smart Watch Pro", sales: 891, revenue: 35640, growth: 72 },
    { name: "USB-C Hub Pro", sales: 756, revenue: 18900, growth: 68 },
    { name: "4K Webcam", sales: 634, revenue: 12680, growth: 55 },
    { name: "Mechanical Keyboard RGB", sales: 523, revenue: 10460, growth: 45 },
  ];

  const trafficSources = [
    { source: "Direct", visitors: 45234, percentage: 38 },
    { source: "Organic Search", visitors: 32145, percentage: 27 },
    { source: "Social Media", visitors: 23456, percentage: 20 },
    { source: "Referral", visitors: 12890, percentage: 11 },
    { source: "Email", visitors: 5678, percentage: 4 },
  ];

  const revenueData = [
    { month: "Jan", revenue: 45000 },
    { month: "Feb", revenue: 52000 },
    { month: "Mar", revenue: 48000 },
    { month: "Apr", revenue: 61000 },
    { month: "May", revenue: 55000 },
    { month: "Jun", revenue: 67000 },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-in fade-in duration-500">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground mt-1">
            Deep dive into your performance metrics and insights
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            const TrendIcon = metric.trend === "up" ? TrendingUp : TrendingDown;
            return (
              <Card key={metric.name} className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">
                      {metric.name}
                    </p>
                    <p className="text-2xl font-bold">{metric.value}</p>
                    <div className="flex items-center gap-1">
                      <TrendIcon
                        className={`h-3 w-3 ${
                          metric.trend === "up" ? "text-success" : "text-destructive"
                        }`}
                      />
                      <span
                        className={`text-xs font-medium ${
                          metric.trend === "up" ? "text-success" : "text-destructive"
                        }`}
                      >
                        {metric.change}
                      </span>
                    </div>
                  </div>
                  <div className="rounded-full bg-primary/10 p-3">
                    <Icon className={`h-5 w-5 ${metric.color}`} />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Revenue Chart */}
        <Card className="p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Revenue Trend</h3>
              <p className="text-sm text-muted-foreground mt-1">
                6-month revenue performance analysis
              </p>
            </div>
            <div className="h-[250px]">
              <AreaChart data={revenueData} />
            </div>
          </div>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Top Products */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Top Performing Products</h3>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={product.name} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-muted-foreground">
                        #{index + 1}
                      </span>
                      <span className="font-medium">{product.name}</span>
                    </div>
                    <span className="font-semibold text-primary">
                      ${(product.revenue / 100).toLocaleString()}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{product.sales} sales</span>
                      <span>{product.growth}% of target</span>
                    </div>
                    <Progress value={product.growth} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Traffic Sources */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Traffic Sources</h3>
            <div className="space-y-4">
              {trafficSources.map((source) => (
                <div key={source.source} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{source.source}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-muted-foreground">
                        {source.visitors.toLocaleString()}
                      </span>
                      <span className="font-semibold text-primary w-12 text-right">
                        {source.percentage}%
                      </span>
                    </div>
                  </div>
                  <Progress value={source.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Conversion Funnel */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Conversion Funnel</h3>
          <div className="space-y-3">
            {[
              { stage: "Visitors", count: 120345, percentage: 100 },
              { stage: "Product Views", count: 45678, percentage: 38 },
              { stage: "Add to Cart", count: 12890, percentage: 28 },
              { stage: "Checkout Started", count: 8934, percentage: 69 },
              { stage: "Purchase Complete", count: 6723, percentage: 75 },
            ].map((stage, index) => (
              <div
                key={stage.stage}
                className="relative"
                style={{ paddingLeft: `${index * 20}px` }}
              >
                <div className="flex items-center justify-between bg-muted/50 rounded-lg p-4 hover:bg-muted transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-medium">{stage.stage}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-muted-foreground">
                      {stage.count.toLocaleString()}
                    </span>
                    <span className="font-semibold text-primary min-w-[60px] text-right">
                      {stage.percentage}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
