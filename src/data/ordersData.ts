export interface Order {
  id: string;
  orderNumber: string;
  customer: string;
  email: string;
  product: string;
  quantity: number;
  amount: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  date: string;
  shippingAddress: string;
}

export const orders: Order[] = [
  {
    id: "1",
    orderNumber: "ORD-2024-001",
    customer: "Olivia Martin",
    email: "olivia.martin@email.com",
    product: "Premium Wireless Headphones",
    quantity: 2,
    amount: 29999,
    status: "delivered",
    date: "2024-01-15",
    shippingAddress: "123 Main St, New York, NY 10001",
  },
  {
    id: "2",
    orderNumber: "ORD-2024-002",
    customer: "Jackson Lee",
    email: "jackson.lee@email.com",
    product: "Smart Watch Pro",
    quantity: 1,
    amount: 39999,
    status: "shipped",
    date: "2024-01-14",
    shippingAddress: "456 Oak Ave, Los Angeles, CA 90001",
  },
  {
    id: "3",
    orderNumber: "ORD-2024-003",
    customer: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    product: "Laptop Stand Deluxe",
    quantity: 3,
    amount: 14999,
    status: "processing",
    date: "2024-01-13",
    shippingAddress: "789 Pine Rd, Chicago, IL 60601",
  },
  {
    id: "4",
    orderNumber: "ORD-2024-004",
    customer: "William Kim",
    email: "will@email.com",
    product: "Mechanical Keyboard RGB",
    quantity: 1,
    amount: 12999,
    status: "pending",
    date: "2024-01-12",
    shippingAddress: "321 Elm St, Houston, TX 77001",
  },
  {
    id: "5",
    orderNumber: "ORD-2024-005",
    customer: "Sofia Davis",
    email: "sofia.davis@email.com",
    product: "4K Webcam",
    quantity: 2,
    amount: 19999,
    status: "cancelled",
    date: "2024-01-11",
    shippingAddress: "654 Maple Dr, Phoenix, AZ 85001",
  },
  {
    id: "6",
    orderNumber: "ORD-2024-006",
    customer: "Liam Brown",
    email: "liam.brown@email.com",
    product: "USB-C Hub Pro",
    quantity: 5,
    amount: 24999,
    status: "delivered",
    date: "2024-01-10",
    shippingAddress: "987 Cedar Ln, Philadelphia, PA 19101",
  },
  {
    id: "7",
    orderNumber: "ORD-2024-007",
    customer: "Emma Wilson",
    email: "emma.w@email.com",
    product: "Ergonomic Mouse",
    quantity: 2,
    amount: 7999,
    status: "shipped",
    date: "2024-01-09",
    shippingAddress: "147 Birch Ave, San Antonio, TX 78201",
  },
  {
    id: "8",
    orderNumber: "ORD-2024-008",
    customer: "Noah Garcia",
    email: "noah.garcia@email.com",
    product: "Monitor Arm Dual",
    quantity: 1,
    amount: 15999,
    status: "processing",
    date: "2024-01-08",
    shippingAddress: "258 Spruce St, San Diego, CA 92101",
  },
];
