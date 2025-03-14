"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  PieChart,
  Pie,
  Cell,
  Legend,
  LineChart,
  Line
} from "recharts";

// Sample data for charts
const claimsMonthlyData = [
  { month: "Jan", pending: 40, approved: 24, rejected: 10, total: 74 },
  { month: "Feb", pending: 30, approved: 28, rejected: 8, total: 66 },
  { month: "Mar", pending: 20, approved: 26, rejected: 12, total: 58 },
  { month: "Apr", pending: 27, approved: 30, rejected: 11, total: 68 },
  { month: "May", pending: 18, approved: 32, rejected: 9, total: 59 },
  { month: "Jun", pending: 23, approved: 34, rejected: 7, total: 64 },
];

const policyDistributionData = [
  { name: "Health", value: 45 },
  { name: "Dental", value: 20 },
  { name: "Vision", value: 15 },
  { name: "Life", value: 10 },
  { name: "Disability", value: 10 },
];

const employeeCoverageData = [
  { department: "Engineering", covered: 95, total: 100 },
  { department: "Marketing", covered: 48, total: 50 },
  { department: "Sales", covered: 75, total: 80 },
  { department: "Finance", covered: 30, total: 30 },
  { department: "HR", covered: 15, total: 15 },
  { department: "Operations", covered: 40, total: 45 },
];

const financialImpactData = [
  { month: "Jan", premiums: 125000, claims: 85000, savings: 15000 },
  { month: "Feb", premiums: 128000, claims: 78000, savings: 8000 },
  { month: "Mar", premiums: 130000, claims: 92000, savings: 18000 },
  { month: "Apr", premiums: 132000, claims: 88000, savings: 10000 },
  { month: "May", premiums: 135000, claims: 90000, savings: 15000 },
  { month: "Jun", premiums: 138000, claims: 95000, savings: 20000 },
];

const COLORS = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))", "hsl(var(--chart-4))", "hsl(var(--chart-5))"];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics & Reports</h1>
        <p className="text-muted-foreground">
          Comprehensive analytics and reports for insurance management.
        </p>
      </div>

      <Tabs defaultValue="claims" className="space-y-4">
        <TabsList>
          <TabsTrigger value="claims">Claims Analytics</TabsTrigger>
          <TabsTrigger value="policies">Policy Analytics</TabsTrigger>
          <TabsTrigger value="financial">Financial Impact</TabsTrigger>
        </TabsList>
        
        <TabsContent value="claims" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Claims</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">389</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Last 6 months
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Approval Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78.4%</div>
                <p className="text-xs text-muted-foreground mt-1">
                  +2.3% from previous period
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Average Processing Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.2 days</div>
                <p className="text-xs text-muted-foreground mt-1">
                  -0.5 days from previous period
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Claims Trend</CardTitle>
              <CardDescription>
                Monthly breakdown of claims by status
              </CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={claimsMonthlyData}
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
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="approved"
                    stackId="1"
                    stroke="hsl(var(--chart-2))"
                    fill="hsl(var(--chart-2))"
                    name="Approved"
                  />
                  <Area
                    type="monotone"
                    dataKey="pending"
                    stackId="1"
                    stroke="hsl(var(--chart-1))"
                    fill="hsl(var(--chart-1))"
                    name="Pending"
                  />
                  <Area
                    type="monotone"
                    dataKey="rejected"
                    stackId="1"
                    stroke="hsl(var(--chart-3))"
                    fill="hsl(var(--chart-3))"
                    name="Rejected"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Claims by Department</CardTitle>
                <CardDescription>
                  Distribution of claims across departments
                </CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={[
                      { name: "Engineering", value: 120 },
                      { name: "Marketing", value: 80 },
                      { name: "Sales", value: 95 },
                      { name: "Finance", value: 45 },
                      { name: "HR", value: 25 },
                      { name: "Operations", value: 60 },
                    ]}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Bar dataKey="value" fill="hsl(var(--chart-2))" name="Claims" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Claims by Policy Type</CardTitle>
                <CardDescription>
                  Distribution of claims across policy types
                </CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: "Health", value: 210 },
                        { name: "Dental", value: 85 },
                        { name: "Vision", value: 45 },
                        { name: "Life", value: 20 },
                        { name: "Disability", value: 29 },
                      ]}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {policyDistributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="policies" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Active Policies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Across all categories
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Employee Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">96.2%</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Of eligible employees
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Average Premium</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$285</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Per employee per month
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Policy Distribution</CardTitle>
              <CardDescription>
                Breakdown of policies by type
              </CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={policyDistributionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {policyDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Employee Coverage by Department</CardTitle>
                <CardDescription>
                  Percentage of employees covered in each department
                </CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={employeeCoverageData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="department" />
                    <YAxis tickFormatter={(value) => `${value}%`} />
                    <Tooltip formatter={(value) => [`${value}%`, "Coverage"]} />
                    <Bar
                      dataKey="covered"
                      fill="hsl(var(--chart-2))"
                      name="Covered Employees"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Policy Effectiveness</CardTitle>
                <CardDescription>
                  Claims to premium ratio by policy type
                </CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={[
                      { name: "Health", value: 68 },
                      { name: "Dental", value: 72 },
                      { name: "Vision", value: 65 },
                      { name: "Life", value: 45 },
                      { name: "Disability", value: 52 },
                    ]}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis tickFormatter={(value) => `${value}%`} />
                    <Tooltip formatter={(value) => [`${value}%`, "Claims/Premium Ratio"]} />
                    <Bar
                      dataKey="value"
                      fill="hsl(var(--chart-4))"
                      name="Claims/Premium Ratio"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="financial" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Premiums</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$788,000</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Last 6 months
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Claims Paid</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$528,000</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Last 6 months
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Fraud Prevention Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$86,000</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Last 6 months
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Financial Overview</CardTitle>
              <CardDescription>
                Monthly premiums, claims, and savings
              </CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={financialImpactData}
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
                  <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, ""]} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="premiums"
                    stroke="hsl(var(--chart-1))"
                    name="Premiums"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="claims"
                    stroke="hsl(var(--chart-2))"
                    name="Claims Paid"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="savings"
                    stroke="hsl(var(--chart-4))"
                    name="Fraud Savings"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Cost per Employee</CardTitle>
                <CardDescription>
                  Average monthly cost per employee by department
                </CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={[
                      { name: "Engineering", value: 320 },
                      { name: "Marketing", value: 290 },
                      { name: "Sales", value: 310 },
                      { name: "Finance", value: 340 },
                      { name: "HR", value: 280 },
                      { name: "Operations", value: 300 },
                    ]}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`$${value}`, "Monthly Cost"]} />
                    <Bar
                      dataKey="value"
                      fill="hsl(var(--chart-3))"
                      name="Monthly Cost"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>ROI Analysis</CardTitle>
                <CardDescription>
                  Return on investment for fraud detection system
                </CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={[
                      { month: "Jan", investment: 5000, return: 15000, roi: 300 },
                      { month: "Feb", investment: 5000, return: 8000, roi: 160 },
                      { month: "Mar", investment: 5000, return: 18000, roi: 360 },
                      { month: "Apr", investment: 5000, return: 10000, roi: 200 },
                      { month: "May", investment: 5000, return: 15000, roi: 300 },
                      { month: "Jun", investment: 5000, return: 20000, roi: 400 },
                    ]}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" tickFormatter={(value) => `${value}%`} />
                    <Tooltip />
                    <Legend />
                    <Area
                      yAxisId="left"
                      type="monotone"
                      dataKey="investment"
                      stroke="hsl(var(--chart-5))"
                      fill="hsl(var(--chart-5))"
                      name="Investment"
                    />
                    <Area
                      yAxisId="left"
                      type="monotone"
                      dataKey="return"
                      stroke="hsl(var(--chart-4))"
                      fill="hsl(var(--chart-4))"
                      name="Return"
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="roi"
                      stroke="hsl(var(--chart-1))"
                      name="ROI %"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}