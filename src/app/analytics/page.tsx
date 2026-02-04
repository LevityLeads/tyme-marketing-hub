"use client";

import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Eye,
  Heart,
  Share2,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

const stats = [
  { label: "Total Impressions", value: "2.4M", change: "+12.5%", up: true },
  { label: "Engagement Rate", value: "4.8%", change: "+0.8%", up: true },
  { label: "Click-through Rate", value: "2.3%", change: "-0.2%", up: false },
  { label: "Conversions", value: "12,847", change: "+18.2%", up: true },
];

const topContent = [
  { title: "GoalSave Launch Video", type: "Video", views: "245K", engagement: "8.2%" },
  { title: "Banking Made Simple", type: "Social", views: "189K", engagement: "6.4%" },
  { title: "5 Minute Account Opening", type: "Blog", views: "156K", engagement: "5.1%" },
  { title: "Savings Calculator Tool", type: "Interactive", views: "134K", engagement: "12.3%" },
];

const channelData = [
  { channel: "Instagram", percentage: 35, color: "from-pink-500 to-purple-500" },
  { channel: "Facebook", percentage: 28, color: "from-blue-500 to-blue-600" },
  { channel: "Google Ads", percentage: 22, color: "from-green-500 to-blue-500" },
  { channel: "LinkedIn", percentage: 15, color: "from-blue-600 to-blue-700" },
];

export default function Analytics() {
  return (
    <div className="min-h-screen bg-tyme-bg relative">
      <div className="wavy-lines" />

      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white">Analytics</h1>
          </div>
          <p className="text-gray-400">
            Track your content performance and insights
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-tyme-card border border-tyme-border rounded-xl p-5 card-hover"
            >
              <p className="text-sm text-gray-500 mb-2">{stat.label}</p>
              <div className="flex items-end justify-between">
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <div className={`flex items-center gap-1 text-sm ${stat.up ? "text-green-500" : "text-red-500"}`}>
                  {stat.up ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  {stat.change}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Chart Area */}
          <div className="col-span-2 bg-tyme-card border border-tyme-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Performance Overview</h3>
              <select className="bg-tyme-bg border border-tyme-border rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-tyme-cyan">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            </div>

            {/* Mock Chart */}
            <div className="h-64 flex items-end justify-between gap-2 px-4">
              {[40, 65, 45, 80, 55, 90, 70].map((height, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <div
                    className="w-full bg-gradient-to-t from-tyme-cyan to-tyme-cyan-dark rounded-t-lg transition-all hover:opacity-80"
                    style={{ height: `${height}%` }}
                  />
                  <span className="text-xs text-gray-500">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]}
                  </span>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-8 mt-6 pt-6 border-t border-tyme-border">
              {[
                { icon: Eye, label: "Impressions", value: "2.4M" },
                { icon: Heart, label: "Engagement", value: "115K" },
                { icon: Share2, label: "Shares", value: "8.2K" },
                { icon: MessageCircle, label: "Comments", value: "3.1K" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <item.icon className="w-4 h-4 text-tyme-cyan" />
                  <span className="text-sm text-gray-400">{item.label}:</span>
                  <span className="text-sm font-medium text-white">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Channel Breakdown */}
          <div className="bg-tyme-card border border-tyme-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Channel Breakdown</h3>
            <div className="space-y-4">
              {channelData.map((channel) => (
                <div key={channel.channel}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white">{channel.channel}</span>
                    <span className="text-gray-400">{channel.percentage}%</span>
                  </div>
                  <div className="h-3 bg-tyme-bg rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${channel.color} rounded-full transition-all`}
                      style={{ width: `${channel.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Content */}
        <div className="mt-8 bg-tyme-card border border-tyme-border rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Top Performing Content</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-500 border-b border-tyme-border">
                  <th className="pb-3 font-medium">Content</th>
                  <th className="pb-3 font-medium">Type</th>
                  <th className="pb-3 font-medium">Views</th>
                  <th className="pb-3 font-medium">Engagement</th>
                  <th className="pb-3 font-medium"></th>
                </tr>
              </thead>
              <tbody>
                {topContent.map((content, index) => (
                  <tr key={index} className="border-b border-tyme-border last:border-0">
                    <td className="py-4">
                      <span className="text-white font-medium">{content.title}</span>
                    </td>
                    <td className="py-4">
                      <span className="px-2 py-1 text-xs bg-tyme-bg rounded-full text-gray-400">
                        {content.type}
                      </span>
                    </td>
                    <td className="py-4 text-white">{content.views}</td>
                    <td className="py-4">
                      <span className="text-tyme-cyan">{content.engagement}</span>
                    </td>
                    <td className="py-4">
                      <button className="p-2 hover:bg-tyme-bg rounded-lg transition-colors">
                        <ArrowUpRight className="w-4 h-4 text-gray-500" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
