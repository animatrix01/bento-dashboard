import { Transaction, Stat, Activity, ChartDataPoint } from "@/types";

export const stats: Stat[] = [
  {
    id: "1",
    label: "Total Revenue",
    value: "$45,231",
    change: "+20.1%",
    trend: "up",
    icon: "DollarSign",
  },
  {
    id: "2",
    label: "Active Users",
    value: "2,345",
    change: "+15.3%",
    trend: "up",
    icon: "Users",
  },
  {
    id: "3",
    label: "New Orders",
    value: "567",
    change: "-5.2%",
    trend: "down",
    icon: "ShoppingCart",
  },
  {
    id: "4",
    label: "Conversion Rate",
    value: "3.24%",
    change: "+12.5%",
    trend: "up",
    icon: "TrendingUp",
  },
];

export const transactions: Transaction[] = [
  {
    id: "1",
    customer: "Olivia Martin",
    email: "olivia.martin@email.com",
    amount: 1999,
    status: "success",
    date: "2024-01-15",
  },
  {
    id: "2",
    customer: "Jackson Lee",
    email: "jackson.lee@email.com",
    amount: 3999,
    status: "pending",
    date: "2024-01-14",
  },
  {
    id: "3",
    customer: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    amount: 2499,
    status: "success",
    date: "2024-01-13",
  },
  {
    id: "4",
    customer: "William Kim",
    email: "will@email.com",
    amount: 1299,
    status: "failed",
    date: "2024-01-12",
  },
  {
    id: "5",
    customer: "Sofia Davis",
    email: "sofia.davis@email.com",
    amount: 4999,
    status: "success",
    date: "2024-01-11",
  },
];

export const activities: Activity[] = [
  {
    id: "1",
    user: "John Doe",
    action: "Created new project 'Dashboard UI'",
    timestamp: "2 hours ago",
    avatar: "JD",
  },
  {
    id: "2",
    user: "Jane Smith",
    action: "Updated customer records",
    timestamp: "4 hours ago",
    avatar: "JS",
  },
  {
    id: "3",
    user: "Mike Johnson",
    action: "Completed order #3421",
    timestamp: "6 hours ago",
    avatar: "MJ",
  },
  {
    id: "4",
    user: "Sarah Williams",
    action: "Added new team member",
    timestamp: "8 hours ago",
    avatar: "SW",
  },
];

export const chartData: ChartDataPoint[] = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 19000 },
  { month: "Mar", revenue: 15000 },
  { month: "Apr", revenue: 22000 },
  { month: "May", revenue: 28000 },
  { month: "Jun", revenue: 25000 },
];
