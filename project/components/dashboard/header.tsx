"use client";

import { useState } from "react";
import Link from "next/link";
import { Bell, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "@/components/dashboard/sidebar";
import { ModeToggle } from "@/components/mode-toggle";

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <Sidebar />
        </SheetContent>
      </Sheet>

      <div className="flex-1 flex items-center gap-4 md:gap-6">
        {isSearchOpen ? (
          <div className="flex items-center flex-1 gap-2">
            <Input
              placeholder="Search..."
              className="flex-1"
              autoFocus
              onBlur={() => setIsSearchOpen(false)}
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(false)}
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close search</span>
            </Button>
          </div>
        ) : (
          <Button
            variant="outline"
            size="icon"
            className="hidden md:flex"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
        )}
      </div>

      <div className="flex items-center gap-4">
        <ModeToggle />
        <Button variant="outline" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-destructive" />
        </Button>
        <Link href="/dashboard/profile">
          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </header>
  );
}