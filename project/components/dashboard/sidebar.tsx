"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  FileText,
  BarChart3,
  MessageSquare,
  AlertTriangle,
  Settings,
  LogOut,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const sidebarLinks = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Employees",
    href: "/dashboard/employees",
    icon: Users,
  },
  {
    title: "Policies",
    href: "/dashboard/policies",
    icon: Shield,
  },
  {
    title: "Claims",
    href: "/dashboard/claims",
    icon: FileText,
  },
  {
    title: "Fraud Detection",
    href: "/dashboard/fraud",
    icon: AlertTriangle,
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    title: "Messages",
    href: "/dashboard/messages",
    icon: MessageSquare,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full bg-card border-r">
      <div className="p-6">
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold text-lg">
          <Shield className="h-6 w-6" />
          <span>InsuraFlow</span>
        </Link>
      </div>
      <div className="flex-1 px-4 space-y-1">
        {sidebarLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
              pathname === link.href
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            )}
          >
            <link.icon className="h-4 w-4" />
            <span>{link.title}</span>
          </Link>
        ))}
      </div>
      <div className="p-4 mt-auto">
        <Link href="/">
          <Button variant="outline" className="w-full justify-start gap-2">
            <LogOut className="h-4 w-4" />
            <span>Log out</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}