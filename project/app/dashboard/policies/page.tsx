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
import { Plus, Search, MoreHorizontal, FileText, Users, Edit, Trash } from "lucide-react";

// Sample policy data
const policies = [
  {
    id: "POL-001",
    name: "Standard Health Insurance",
    type: "Health",
    coverage: "$1,000,000",
    premium: "$250/month",
    enrolledEmployees: 450,
    status: "active",
    createdAt: "2025-01-15",
  },
  {
    id: "POL-002",
    name: "Premium Dental Coverage",
    type: "Dental",
    coverage: "$50,000",
    premium: "$50/month",
    enrolledEmployees: 380,
    status: "active",
    createdAt: "2025-02-10",
  },
  {
    id: "POL-003",
    name: "Vision Care Plus",
    type: "Vision",
    coverage: "$25,000",
    premium: "$30/month",
    enrolledEmployees: 310,
    status: "active",
    createdAt: "2025-02-22",
  },
  {
    id: "POL-004",
    name: "Life Insurance Basic",
    type: "Life",
    coverage: "$500,000",
    premium: "$100/month",
    enrolledEmployees: 280,
    status: "active",
    createdAt: "2025-03-05",
  },
  {
    id: "POL-005",
    name: "Short-term Disability",
    type: "Disability",
    coverage: "$200,000",
    premium: "$75/month",
    enrolledEmployees: 180,
    status: "active",
    createdAt: "2025-03-18",
  },
  {
    id: "POL-006",
    name: "Long-term Disability",
    type: "Disability",
    coverage: "$400,000",
    premium: "$120/month",
    enrolledEmployees: 150,
    status: "active",
    createdAt: "2025-04-02",
  },
  {
    id: "POL-007",
    name: "Executive Health Plan",
    type: "Health",
    coverage: "$2,000,000",
    premium: "$500/month",
    enrolledEmployees: 25,
    status: "active",
    createdAt: "2025-04-15",
  },
  {
    id: "POL-008",
    name: "Mental Health Coverage",
    type: "Health",
    coverage: "$100,000",
    premium: "$60/month",
    enrolledEmployees: 420,
    status: "active",
    createdAt: "2025-05-01",
  },
  {
    id: "POL-009",
    name: "Accident Insurance",
    type: "Accident",
    coverage: "$150,000",
    premium: "$40/month",
    enrolledEmployees: 350,
    status: "active",
    createdAt: "2025-05-20",
  },
  {
    id: "POL-010",
    name: "Critical Illness Coverage",
    type: "Health",
    coverage: "$300,000",
    premium: "$85/month",
    enrolledEmployees: 290,
    status: "draft",
    createdAt: "2025-06-05",
  },
];

export default function PoliciesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPolicies = policies.filter(
    (policy) =>
      policy.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      policy.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      policy.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Insurance Policies</h1>
          <p className="text-muted-foreground">
            Manage and track all insurance policies for your employees.
          </p>
        </div>
        <Link href="/dashboard/policies/new">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            <span>New Policy</span>
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
              <CardTitle>All Policies</CardTitle>
              <CardDescription>
                A list of all insurance policies in your organization.
              </CardDescription>
            </div>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search policies..."
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
                <TableHead>Policy</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Coverage</TableHead>
                <TableHead>Premium</TableHead>
                <TableHead>Employees</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPolicies.map((policy) => (
                <TableRow key={policy.id}>
                  <TableCell className="font-medium">
                    <div>
                      <div>{policy.name}</div>
                      <div className="text-xs text-muted-foreground">{policy.id}</div>
                    </div>
                  </TableCell>
                  <TableCell>{policy.type}</TableCell>
                  <TableCell>{policy.coverage}</TableCell>
                  <TableCell>{policy.premium}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{policy.enrolledEmployees}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={policy.status === "active" ? "default" : "outline"}
                    >
                      {policy.status}
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
                          <Link href={`/dashboard/policies/${policy.id}`} className="flex items-center gap-2">
                            <FileText className="h-4 w-4" />
                            <span>View details</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link href={`/dashboard/policies/${policy.id}/employees`} className="flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            <span>View enrolled employees</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Link href={`/dashboard/policies/${policy.id}/edit`} className="flex items-center gap-2">
                            <Edit className="h-4 w-4" />
                            <span>Edit policy</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <Trash className="h-4 w-4 mr-2" />
                          <span>Delete policy</span>
                        </DropdownMenuItem>
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