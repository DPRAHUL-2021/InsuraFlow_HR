"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Search, Send, PaperclipIcon, ChevronRight } from "lucide-react";

// Sample messages data
const conversations = [
  {
    id: "conv-1",
    employee: {
      id: "EMP-001",
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    lastMessage: "I have a question about my health insurance coverage",
    timestamp: "10:30 AM",
    unread: true,
  },
  {
    id: "conv-2",
    employee: {
      id: "EMP-002",
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    lastMessage: "Thanks for the information about the new dental plan",
    timestamp: "Yesterday",
    unread: false,
  },
  {
    id: "conv-3",
    employee: {
      id: "EMP-003",
      name: "Emily Rodriguez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    lastMessage: "When will my claim be processed?",
    timestamp: "Yesterday",
    unread: true,
  },
  {
    id: "conv-4",
    employee: {
      id: "EMP-004",
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    lastMessage: "Can you help me with my policy details?",
    timestamp: "2 days ago",
    unread: false,
  },
];

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState<typeof conversations[0] | null>(null);

  return (
    <div className="flex h-full">
      <div className="w-1/3 border-r">
        <div className="p-4">
          <div className="relative">
            <Input placeholder="Search..." />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>
        <ScrollArea className="h-full">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              className={`p-4 flex items-center justify-between cursor-pointer ${
                conversation.unread ? "bg-gray-100" : ""
              }`}
              onClick={() => setSelectedConversation(conversation)}
            >
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={conversation.employee.avatar} />
                  <AvatarFallback>{conversation.employee.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{conversation.employee.name}</p>
                  <p className="text-sm text-muted-foreground">{conversation.lastMessage}</p>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">{conversation.timestamp}</div>
            </div>
          ))}
        </ScrollArea>
      </div>
      <div className="w-2/3 p-4">
        {selectedConversation ? (
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between border-b pb-4 mb-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={selectedConversation.employee.avatar} />
                  <AvatarFallback>{selectedConversation.employee.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{selectedConversation.employee.name}</p>
                  <p className="text-sm text-muted-foreground">{selectedConversation.employee.id}</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                View Profile <ChevronRight className="ml-2" />
              </Button>
            </div>
            <ScrollArea className="flex-1">
              {/* Messages will be displayed here */}
            </ScrollArea>
            <Separator className="my-4" />
            <div className="flex items-center space-x-4">
              <Textarea placeholder="Type a message..." className="flex-1" />
              <Button variant="outline" size="sm">
                <PaperclipIcon />
              </Button>
              <Button size="sm">
                <Send className="mr-2" />
                Send
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-muted-foreground">Select a conversation to start messaging</p>
          </div>
        )}
      </div>
    </div>
  );
}