export interface Transaction {
  id: string;
  customer: string;
  email: string;
  amount: number;
  status: "success" | "pending" | "failed";
  date: string;
}

export interface Stat {
  id: string;
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: string;
}

export interface Activity {
  id: string;
  user: string;
  action: string;
  timestamp: string;
  avatar: string;
}

export interface ChartDataPoint {
  month: string;
  revenue: number;
}
