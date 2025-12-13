export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  totalOrders: number;
  totalSpent: number;
  status: "active" | "inactive";
  joinedDate: string;
  lastOrder: string;
  location: string;
}

export const customers: Customer[] = [
  {
    id: "1",
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    phone: "+1 (555) 123-4567",
    avatar: "OM",
    totalOrders: 24,
    totalSpent: 145680,
    status: "active",
    joinedDate: "2023-06-15",
    lastOrder: "2024-01-15",
    location: "New York, NY",
  },
  {
    id: "2",
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    phone: "+1 (555) 234-5678",
    avatar: "JL",
    totalOrders: 18,
    totalSpent: 98450,
    status: "active",
    joinedDate: "2023-08-22",
    lastOrder: "2024-01-14",
    location: "Los Angeles, CA",
  },
  {
    id: "3",
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    phone: "+1 (555) 345-6789",
    avatar: "IN",
    totalOrders: 31,
    totalSpent: 187920,
    status: "active",
    joinedDate: "2023-03-10",
    lastOrder: "2024-01-13",
    location: "Chicago, IL",
  },
  {
    id: "4",
    name: "William Kim",
    email: "will@email.com",
    phone: "+1 (555) 456-7890",
    avatar: "WK",
    totalOrders: 12,
    totalSpent: 67340,
    status: "active",
    joinedDate: "2023-09-05",
    lastOrder: "2024-01-12",
    location: "Houston, TX",
  },
  {
    id: "5",
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    phone: "+1 (555) 567-8901",
    avatar: "SD",
    totalOrders: 8,
    totalSpent: 42150,
    status: "inactive",
    joinedDate: "2023-11-18",
    lastOrder: "2023-12-20",
    location: "Phoenix, AZ",
  },
  {
    id: "6",
    name: "Liam Brown",
    email: "liam.brown@email.com",
    phone: "+1 (555) 678-9012",
    avatar: "LB",
    totalOrders: 42,
    totalSpent: 234560,
    status: "active",
    joinedDate: "2023-01-15",
    lastOrder: "2024-01-10",
    location: "Philadelphia, PA",
  },
  {
    id: "7",
    name: "Emma Wilson",
    email: "emma.w@email.com",
    phone: "+1 (555) 789-0123",
    avatar: "EW",
    totalOrders: 15,
    totalSpent: 89320,
    status: "active",
    joinedDate: "2023-07-28",
    lastOrder: "2024-01-09",
    location: "San Antonio, TX",
  },
  {
    id: "8",
    name: "Noah Garcia",
    email: "noah.garcia@email.com",
    phone: "+1 (555) 890-1234",
    avatar: "NG",
    totalOrders: 6,
    totalSpent: 31200,
    status: "inactive",
    joinedDate: "2023-12-03",
    lastOrder: "2023-12-28",
    location: "San Diego, CA",
  },
];
