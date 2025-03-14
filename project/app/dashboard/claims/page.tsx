"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Plus,
  Search,
  MoreHorizontal,
  FileText,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Eye,
} from "lucide-react";

// Sample claims data
const claims = [
  {
    id: "CLM-1234",
    employee: "Sarah Johnson",
    policyId: "POL-001",
    policyType: "Health",
    amount: "$1,200",
    submittedDate: "2025-06-10",
    status: "pending",
    flagged: false,
  },
  {
    id: "CLM-1233",
    employee: "Michael Chen",
    policyId: "POL-002",
    policyType: "Dental",
    amount: "$850",
    submittedDate: "2025-06-09",
    status: "approved",
    flagged: false,
  },
  {
    id: "CLM-1232",
    employee: "Emily Rodriguez",
    policyId: "POL-001",
    policyType: "Health",
    amount: "$3,500",
    submittedDate: "2025-06-08",
    status: "pending",
    flagged: true,
  },
  {
    id: "CLM-1231",
    employee: "David Kim",
    policyId: "POL-003",
    policyType: "Vision",
    amount: "$650",
    submittedDate: "2025-06-07",
    status: "approved",
    flagged: false,
  },
  {
    id: "CLM-1230",
    employee: "Jessica Martinez",
    policyId: "POL-001",
    policyType: "Health",
    amount: "$2,300",
    submittedDate: "2025-06-06",
    status: "rejected",
    flagged: false,
  },
  {
    id: "CLM-1229",
    employee: "Andrew Taylor",
    policyId: "POL-002",
    policyType: "Dental",
    amount: "$920",
    submittedDate: "2025-06-06",
    status: "pending",
    flagged: false,
  },
  {
    id: "CLM-1228",
    employee: "Robert Wilson",
    policyId: "POL-001",
    policyType: "Health",
    amount: "$2,800",
    submittedDate: "2025-06-05",
    status: "pending",
    flagged: true,
  },
  {
    id: "CLM-1227",
    employee: "Sophia Garcia",
    policyId: "POL-004",
    policyType: "Life",
    amount: "$5,000",
    submittedDate: "2025-06-04",
    status: "approved",
    flagged: false,
  },
  {
    id: "CLM-1226",
    employee: "Daniel Johnson",
    policyId: "POL-003",
    policyType: "Vision",
    amount: "$480",
    submittedDate: "2025-06-04",
    status: "approved",
    flagged: false,
  },
  {
    id: "CLM-1225",
    employee: "Jennifer Lee",
    policyId: "POL-001",
    policyType: "Health",
    amount: "$4,200",
    submittedDate: "2025-06-03",
    status: "pending",
    flagged: true,
  },
];

export default function ClaimsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | null>(null);

  const filteredClaims = claims.filter(
    (claim) =>
      (claim.employee.toLowerCase().includes(searchQuery.toLowerCase()) ||
        claim.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        claim.policyType.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (statusFilter === null || claim.status === statusFilter)
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Claims Management</h1>
          <p className="text-muted-foreground">
            Process and track insurance claims from employees.
          </p>
        </div>
        <Link href="/dashboard/claims/new">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            <span>New Claim</span>
          </Button>
        </Link>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button
          variant={statusFilter === null ? "default" : "outline"}
          size="sm"
          onClick={() => setStatusFilter(null)}
        >
          All
        </Button>
        <Button
          variant={statusFilter === "pending" ? "default" : "outline"}
          size="sm"
          onClick={() => setStatusFilter("pending")}
        >
          Pending
        </Button>
        <Button
          variant={statusFilter === "approved" ? "default" : "outline"}
          size="sm"
          onClick={() => setStatusFilter("approved")}
        >
          Approved
        </Button>
        <Button
          variant={statusFilter === "rejected" ? "default" : "outline"}
          size="sm"
          onClick={() => setStatusFilter("rejected")}
        >
          Rejected
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
              <CardTitle>All Claims</CardTitle>
              <CardDescription>
                A list of all insurance claims submitted by employees.
              </CardDescription>
            </div>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search claims..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Claim ID</TableHead>
                <TableHead>Employee</TableHead>
                <TableHead>Policy Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Submitted</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredClaims.map((claim) => (
                <TableRow key={claim.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      {claim.flagged && (
                        <AlertTriangle className="h-4 w-4 text-destructive" />
                      )}
                      <span>{claim.id}</span>
                    </div>
                  </TableCell>
                  <TableCell>{claim.employee}</TableCell>
                  <TableCell>
                    <div>
                      <div>{claim.policyType}</div>
                      <div className="text-xs text-muted-foreground">{claim.policyId}</div>
                    </div>
                  </TableCell>
                  <TableCell>{claim.amount}</TableCell>
                  <TableCell>{claim.submittedDate}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        claim.status === "approved"
                          ? "default"
                          : claim.status === "rejected"
                          ? "destructive"
                          : "outline"
                      }
                    >
                      {claim.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>
                          <Link href={`/dashboard/claims/${claim.id}`} className="flex items-center gap-2">
                            <Eye className="h-4 w-4" />
                            <span>View details</span>
                          </Link>
                        </DropdownMenuItem>
                        {claim.status === "pending" && (
                          <>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <div className="flex items-center gap-2 text-emerald-600">
                                <CheckCircle className="h-4 w-4" />
                                <span>Approve claim</span>
                              </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <div className="flex items-center gap-2 text-destructive">
                                <XCircle className="h-4 w-4" />
                                <span>Reject claim</span>
                              </div>
                            </DropdownMenuItem>
                            {!claim.flagged && (
                              <DropdownMenuItem>
                                <div className="flex items-center gap-2 text-amber-500">
                                  <AlertTriangle className="h-4 w-4" />
                                  <span>Flag for review</span>
                                </div>
                              </DropdownMenuItem>
                            )}
                          </>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}