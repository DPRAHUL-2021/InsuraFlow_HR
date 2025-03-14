"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  FileText, 
  AlertTriangle, 
  TrendingUp, 
  DollarSign, 
  Shield,
  ArrowUpRight,
  ArrowDownRight,
  Plus
} from "lucide-react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend
} from "recharts";

// Sample data for charts
const claimsData = [
  { month: "Jan", pending: 40, approved: 24, rejected: 10 },
  { month: "Feb", pending: 30, approved: 28, rejected: 8 },
  { month: "Mar", pending: 20, approved: 26, rejected: 12 },
  { month: "Apr", pending: 27, approved: 30, rejected: 11 },
  { month: "May", pending: 18, approved: 32, rejected: 9 },
  { month: "Jun", pending: 23, approved: 34, rejected: 7 },
];

const fraudData = [
  { month: "Jan", detected: 5, saved: 12000 },
  { month: "Feb", detected: 3, saved: 8000 },
  { month: "Mar", detected: 7, saved: 18000 },
  { month: "Apr", detected: 4, saved: 10000 },
  { month: "May", detected: 6, saved: 15000 },
  { month: "Jun", detected: 8, saved: 20000 },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, John! Here's an overview of your insurance management system.
          </p>
        </div>
        <div className="flex gap-2">
          <Link href="/dashboard/policies/new">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              <span>New Policy</span>
            </Button>
          </Link>
          <Link href="/dashboard/claims/new">
            <Button variant="outline" className="gap-2">
              <FileText className="h-4 w-4" />
              <span>New Claim</span>
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <span className="text-emerald-500 flex items-center">
                <ArrowUpRight className="h-3 w-3" />
                12%
              </span>
              from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Policies</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <span className="text-emerald-500 flex items-center">
                <ArrowUpRight className="h-3 w-3" />
                4%
              </span>
              from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Claims</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <span className="text-rose-500 flex items-center">
                <ArrowDownRight className="h-3 w-3" />
                6%
              </span>
              from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Fraud Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <span className="text-emerald-500 flex items-center">
                <ArrowUpRight className="h-3 w-3" />
                2
              </span>
              requiring attention
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="claims" className="space-y-4">
        <TabsList>
          <TabsTrigger value="claims">Claims Overview</TabsTrigger>
          <TabsTrigger value="fraud">Fraud Detection</TabsTrigger>
        </TabsList>
        <TabsContent value="claims" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Claims Trends</CardTitle>
              <CardDescription>
                Monthly breakdown of claims by status
              </CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={claimsData}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="pending"
                    stackId="1"
                    stroke="hsl(var(--chart-1))"
                    fill="hsl(var(--chart-1))"
                  />
                  <Area
                    type="monotone"
                    dataKey="approved"
                    stackId="1"
                    stroke="hsl(var(--chart-2))"
                    fill="hsl(var(--chart-2))"
                  />
                  <Area
                    type="monotone"
                    dataKey="rejected"
                    stackId="1"
                    stroke="hsl(var(--chart-3))"
                    fill="hsl(var(--chart-3))"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Claims</CardTitle>
                <CardDescription>
                  Latest claims submitted by employees
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: "CLM-1234",
                      employee: "Sarah Johnson",
                      amount: "$1,200",
                      date: "2025-06-10",
                      status: "pending",
                    },
                    {
                      id: "CLM-1233",
                      employee: "Michael Chen",
                      amount: "$850",
                      date: "2025-06-09",
                      status: "approved",
                    },
                    {
                      id: "CLM-1232",
                      employee: "Emily Rodriguez",
                      amount: "$3,500",
                      date: "2025-06-08",
                      status: "flagged",
                    },
                    {
                      id: "CLM-1231",
                      employee: "David Kim",
                      amount: "$650",
                      date: "2025-06-07",
                      status: "approved",
                    },
                  ].map((claim) => (
                    <div
                      key={claim.id}
                      className="flex items-center justify-between space-x-4"
                    >
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {claim.employee}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {claim.id} • {claim.date}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="font-medium">{claim.amount}</div>
                        <Badge
                          variant={
                            claim.status === "approved"
                              ? "default"
                              : claim.status === "pending"
                              ? "outline"
                              : "destructive"
                          }
                        >
                          {claim.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Claims by Policy Type</CardTitle>
                <CardDescription>
                  Distribution of claims across different policy types
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={[
                      { name: "Health", value: 65 },
                      { name: "Dental", value: 40 },
                      { name: "Vision", value: 30 },
                      { name: "Life", value: 15 },
                      { name: "Disability", value: 20 },
                    ]}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Bar dataKey="value" fill="hsl(var(--chart-2))" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="fraud" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Fraud Detection Metrics</CardTitle>
              <CardDescription>
                Monthly fraud detection and cost savings
              </CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={fraudData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" orientation="left" />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    tickFormatter={(value) => `$${value / 1000}k`}
                  />
                  <Tooltip />
                  <Legend />
                  <Bar
                    yAxisId="left"
                    dataKey="detected"
                    name="Fraud Cases"
                    fill="hsl(var(--chart-1))"
                  />
                  <Bar
                    yAxisId="right"
                    dataKey="saved"
                    name="Cost Savings ($)"
                    fill="hsl(var(--chart-4))"
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Flagged Claims</CardTitle>
                <CardDescription>
                  Claims flagged by the AI fraud detection system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: "CLM-1232",
                      employee: "Emily Rodriguez",
                      amount: "$3,500",
                      date: "2025-06-08",
                      confidence: "High",
                    },
                    {
                      id: "CLM-1228",
                      employee: "Robert Wilson",
                      amount: "$2,800",
                      date: "2025-06-05",
                      confidence: "Medium",
                    },
                    {
                      id: "CLM-1225",
                      employee: "Jennifer Lee",
                      amount: "$4,200",
                      date: "2025-06-03",
                      confidence: "High",
                    },
                    {
                      id: "CLM-1220",
                      employee: "Thomas Brown",
                      amount: "$1,900",
                      date: "2025-05-29",
                      confidence: "Low",
                    },
                  ].map((claim) => (
                    <div
                      key={claim.id}
                      className="flex items-center justify-between space-x-4"
                    >
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {claim.employee}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {claim.id} • {claim.date}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="font-medium">{claim.amount}</div>
                        <Badge
                          variant={
                            claim.confidence === "High"
                              ? "destructive"
                              : claim.confidence === "Medium"
                              ? "default"
                              : "outline"
                          }
                        >
                          {claim.confidence}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Fraud Detection Performance</CardTitle>
                <CardDescription>
                  AI system performance metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Accuracy</p>
                      <p className="text-sm text-muted-foreground">
                        Overall detection accuracy
                      </p>
                    </div>
                    <div className="font-bold text-lg">94.2%</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">False Positives</p>
                      <p className="text-sm text-muted-foreground">
                        Legitimate claims flagged as fraud
                      </p>
                    </div>
                    <div className="font-bold text-lg">3.8%</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">False Negatives</p>
                      <p className="text-sm text-muted-foreground">
                        Fraudulent claims not detected
                      </p>
                    </div>
                    <div className="font-bold text-lg">2.0%</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Cost Savings</p>
                      <p className="text-sm text-muted-foreground">
                        Total savings this quarter
                      </p>
                    </div>
                    <div className="font-bold text-lg">$83,000</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}