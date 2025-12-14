import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Transaction } from "@/types";

interface TransactionTableProps {
  transactions: Transaction[];
}

export function TransactionTable({ transactions }: TransactionTableProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount / 100);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <Card className="overflow-hidden">
      <div className="p-6 border-b">
        <h3 className="text-lg font-semibold">Recent Transactions</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Latest customer orders and payments
        </p>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead className="hidden md:table-cell">Email</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden lg:table-cell">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id} className="hover:bg-muted/50">
                <TableCell className="font-medium">
                  {transaction.customer}
                </TableCell>
                <TableCell className="hidden md:table-cell text-muted-foreground">
                  {transaction.email}
                </TableCell>
                <TableCell className="font-semibold">
                  {formatCurrency(transaction.amount)}
                </TableCell>
                <TableCell>
                  <StatusBadge status={transaction.status} />
                </TableCell>
                <TableCell className="hidden lg:table-cell text-muted-foreground">
                  {formatDate(transaction.date)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
