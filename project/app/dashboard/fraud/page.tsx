"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const fraudData = [
  { month: "Jan", detected: 5, saved: 12000 },
  { month: "Feb", detected: 3, saved: 8000 },
  { month: "Mar", detected: 7, saved: 18000 },
  { month: "Apr", detected: 4, saved: 10000 },
  { month: "May", detected: 6, saved: 15000 },
  { month: "Jun", detected: 8, saved: 20000 },
];

export default function FraudPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Fraud Detection Metrics</CardTitle>
          <CardDescription>Monthly fraud detection and cost savings</CardDescription>
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
    </div>
  );
}