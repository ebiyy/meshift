"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Users, Settings, Shield, Activity, Menu } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { href: "/dashboard", icon: Users, label: "Team" },
    { href: "/dashboard/general", icon: Settings, label: "General" },
    { href: "/dashboard/activity", icon: Activity, label: "Activity" },
    { href: "/dashboard/security", icon: Shield, label: "Security" },
  ];

  return (
    <div
      className="flex flex-col min-h-[calc(100dvh-68px)] max-w-7xl mx-auto w-full"
      data-oid="2f6o.l:"
    >
      {/* Mobile header */}
      <div
        className="lg:hidden flex items-center justify-between bg-white border-b border-gray-200 p-4"
        data-oid="ol.afnj"
      >
        <div className="flex items-center" data-oid="b9_ht3q">
          <span className="font-medium" data-oid="te9s-hg">
            Settings
          </span>
        </div>
        <Button
          className="-mr-3"
          variant="ghost"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          data-oid="egcs09t"
        >
          <Menu className="h-6 w-6" data-oid="0mh3dch" />
          <span className="sr-only" data-oid="k8qyr:u">
            Toggle sidebar
          </span>
        </Button>
      </div>

      <div className="flex flex-1 overflow-hidden h-full" data-oid="yfhsh94">
        {/* Sidebar */}
        <aside
          className={`w-64 bg-white lg:bg-gray-50 border-r border-gray-200 lg:block ${
            isSidebarOpen ? "block" : "hidden"
          } lg:relative absolute inset-y-0 left-0 z-40 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          data-oid="i6-_xg_"
        >
          <nav className="h-full overflow-y-auto p-4" data-oid="lj.1mxp">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                passHref
                data-oid="vdle4eu"
              >
                <Button
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  className={`shadow-none my-1 w-full justify-start ${
                    pathname === item.href ? "bg-gray-100" : ""
                  }`}
                  onClick={() => setIsSidebarOpen(false)}
                  data-oid="ldf4kop"
                >
                  <item.icon className="mr-2 h-4 w-4" data-oid="xpr2f2:" />
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-0 lg:p-4" data-oid="g1gqv-o">
          {children}
        </main>
      </div>
    </div>
  );
}
