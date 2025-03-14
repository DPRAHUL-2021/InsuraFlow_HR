import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Shield, Users, FileText, BarChart3, MessageSquare } from 'lucide-react';
import { Navbar } from '@/components/navbar';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-primary/90 to-primary/70 text-primary-foreground">
        <div className="container mx-auto px-6 py-16 max-w-7xl mb-18">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-14">
                HR Insurance Dashboard
              </h1>
              <p className="text-xl mb-8">
                Secure, scalable, and interactive platform for managing employee insurance policies
                with integrated fraud detection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/auth/login">
                  <Button size="lg" className="w-full sm:w-auto hover:bg-primary-foreground hover:text-primary">
                    Get Started
                  </Button>
                </Link>
                {/* <Link href="/auth/login">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Login
                  </Button>
                </Link> */}
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center mt-14">
              <div className="bg-background p-6 rounded-lg shadow-lg w-full max-w-md">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-muted rounded-md">
                    <Shield className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-medium text-foreground">Secure Access</h3>
                      <p className="text-muted-foreground text-sm">Role-based authentication system</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-muted rounded-md">
                    <FileText className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-medium text-foreground">Policy Management</h3>
                      <p className="text-muted-foreground text-sm">Create and manage insurance policies</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-muted rounded-md">
                    <BarChart3 className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-medium text-foreground">Analytics & Reports</h3>
                      <p className="text-muted-foreground text-sm">Track claims and policy effectiveness</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Shield className="h-10 w-10" />}
              title="Authentication & RBAC"
              description="Secure login for HR managers, employees, and admins with role-based access control."
            />
            <FeatureCard 
              icon={<Users className="h-10 w-10" />}
              title="Employee Management"
              description="Assign policies to employees and manage their insurance details efficiently."
            />
            <FeatureCard 
              icon={<FileText className="h-10 w-10" />}
              title="Claims Processing"
              description="Track, approve, reject, or flag claims with integrated fraud detection."
            />
            <FeatureCard 
              icon={<BarChart3 className="h-10 w-10" />}
              title="Analytics & Reports"
              description="Gain insights with comprehensive reports on claims trends and policy effectiveness."
            />
            <FeatureCard 
              icon={<MessageSquare className="h-10 w-10" />}
              title="Communication System"
              description="Built-in chat system for HR and employees to discuss policy queries."
            />
            <FeatureCard 
              icon={<Shield className="h-10 w-10" />}
              title="Fraud Detection"
              description="AI-powered system to identify potentially fraudulent claims automatically."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-10 mt-auto">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-bold">HR Insurance Dashboard</h3>
              <p className="text-muted-foreground">© 2025 All rights reserved</p>
            </div>
            <div className="flex gap-6">
              <Link href="/dashboard" className="text-muted-foreground hover:text-foreground">
                Dashboard
              </Link>
              <Link href="/auth/login" className="text-muted-foreground hover:text-foreground">
                Login
              </Link>
              <Link href="/auth/register" className="text-muted-foreground hover:text-foreground">
                Register
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string 
}) {
  return (
    <div className="bg-card p-6 rounded-lg shadow-sm border">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}