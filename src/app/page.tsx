"use client";

import Link from "next/link";
import {
  MessageSquare,
  FileText,
  Video,
  Megaphone,
  Palette,
  BarChart3,
  Sparkles,
  TrendingUp,
  Users,
  Clock,
  ArrowRight,
  Zap,
} from "lucide-react";

const features = [
  {
    name: "Social Studio",
    description: "AI-powered social media content creation",
    href: "/social",
    icon: MessageSquare,
    stats: "24 posts this week",
  },
  {
    name: "SEO Content",
    description: "Generate optimized blog posts and articles",
    href: "/seo",
    icon: FileText,
    stats: "12 articles drafted",
  },
  {
    name: "Video Maker",
    description: "Create short-form videos in minutes",
    href: "/video",
    icon: Video,
    stats: "8 videos created",
  },
  {
    name: "Paid Ads",
    description: "Generate high-converting ad copy",
    href: "/ads",
    icon: Megaphone,
    stats: "32 ad variants",
  },
  {
    name: "Brand Assets",
    description: "Access logos, colors, and guidelines",
    href: "/brand",
    icon: Palette,
    stats: "156 assets",
  },
  {
    name: "Analytics",
    description: "Track content performance and insights",
    href: "/analytics",
    icon: BarChart3,
    stats: "+28% engagement",
  },
];

const recentActivity = [
  { type: "social", title: "Instagram post created", time: "2 min ago" },
  { type: "seo", title: "Blog article generated", time: "15 min ago" },
  { type: "video", title: "TikTok video exported", time: "1 hour ago" },
  { type: "ads", title: "Google Ads copy approved", time: "3 hours ago" },
];

const stats = [
  { label: "Content Created", value: "1,284", change: "+12%", icon: Zap },
  { label: "Time Saved", value: "48hrs", change: "this month", icon: Clock },
  { label: "Team Members", value: "12", change: "active", icon: Users },
  { label: "Engagement", value: "+28%", change: "vs last month", icon: TrendingUp },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-tyme-bg relative">
      {/* Wavy background */}
      <div className="wavy-lines" />

      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="w-8 h-8 text-tyme-cyan" />
            <h1 className="text-4xl font-bold">
              Welcome to <span className="gradient-text">Tyme Hub</span>
            </h1>
          </div>
          <p className="text-gray-400 text-lg">
            Your marketing agency in your pocket. Create on-brand content in seconds.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-tyme-card border border-tyme-border rounded-xl p-5 card-hover"
            >
              <div className="flex items-center justify-between mb-3">
                <stat.icon className="w-5 h-5 text-tyme-cyan" />
                <span className="text-xs text-tyme-cyan font-medium">{stat.change}</span>
              </div>
              <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-white">Create Content</h2>
          <div className="grid grid-cols-3 gap-4">
            {features.map((feature) => (
              <Link key={feature.name} href={feature.href}>
                <div className="group bg-tyme-card border border-tyme-border rounded-xl p-6 card-hover cursor-pointer h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-full bg-tyme-cyan flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-tyme-cyan group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{feature.description}</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-tyme-cyan animate-pulse" />
                    <span className="text-xs text-gray-500">{feature.stats}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <h2 className="text-xl font-semibold mb-4 text-white">Recent Activity</h2>
            <div className="bg-tyme-card border border-tyme-border rounded-xl divide-y divide-tyme-border">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 hover:bg-tyme-bg-secondary transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-tyme-cyan/10 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-tyme-cyan" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{activity.title}</p>
                      <p className="text-sm text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                  <button className="text-sm text-tyme-cyan hover:text-tyme-cyan-dark">
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">Quick Actions</h2>
            <div className="space-y-3">
              <button className="btn-primary w-full flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" />
                Generate with AI
              </button>
              <button className="btn-secondary w-full flex items-center justify-center gap-2">
                <MessageSquare className="w-5 h-5" />
                New Social Post
              </button>
              <button className="btn-secondary w-full flex items-center justify-center gap-2">
                <Video className="w-5 h-5" />
                Create Video
              </button>
            </div>

            {/* Pro Tip */}
            <div className="mt-6 p-4 bg-gradient-to-br from-tyme-cyan/10 to-transparent border border-tyme-cyan/20 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-tyme-cyan" />
                <span className="text-sm font-medium text-tyme-cyan">Pro Tip</span>
              </div>
              <p className="text-sm text-gray-400">
                Use keyboard shortcut <kbd className="px-2 py-0.5 bg-tyme-bg rounded text-xs">⌘K</kbd> to quickly create content from anywhere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
