"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  MessageSquare,
  FileText,
  Video,
  Megaphone,
  Palette,
  BarChart3,
  Settings,
  Sparkles,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Social Studio", href: "/social", icon: MessageSquare },
  { name: "SEO Content", href: "/seo", icon: FileText },
  { name: "Video Maker", href: "/video", icon: Video },
  { name: "Paid Ads", href: "/ads", icon: Megaphone },
  { name: "Brand Assets", href: "/brand", icon: Palette },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-tyme-bg-secondary border-r border-tyme-border flex flex-col z-50">
      {/* Logo */}
      <div className="p-6 border-b border-tyme-border">
        <Link href="/" className="flex flex-col items-center">
          <img
            src="/images/tymebank-logo.png"
            alt="TymeBank"
            className="h-8 w-auto"
          />
          <span className="mt-2 text-xs font-semibold tracking-[0.3em] text-gray-400">STUDIO</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                isActive
                  ? "bg-tyme-cyan/10 text-tyme-cyan border border-tyme-cyan/20"
                  : "text-gray-400 hover:text-white hover:bg-tyme-card"
              }`}
            >
              <Icon
                className={`w-5 h-5 ${
                  isActive ? "text-tyme-cyan" : "group-hover:text-tyme-cyan"
                }`}
              />
              <span className="font-medium">{item.name}</span>
              {isActive && (
                <Sparkles className="w-4 h-4 ml-auto text-tyme-cyan animate-pulse" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className="p-4 border-t border-tyme-border">
        <Link
          href="/settings"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-tyme-card transition-all duration-200"
        >
          <Settings className="w-5 h-5" />
          <span className="font-medium">Settings</span>
        </Link>
        
        {/* User */}
        <div className="mt-4 flex items-center gap-3 px-4 py-3 bg-tyme-card rounded-lg">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-tyme-cyan to-tyme-cyan-dark flex items-center justify-center text-black font-bold text-sm">
            T
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">Tyme Marketing</p>
            <p className="text-xs text-gray-500 truncate">Pro Plan</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
