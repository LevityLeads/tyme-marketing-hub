"use client";

import {
  TrendingUp,
  Users,
  DollarSign,
  Target,
  ArrowUpRight,
  ArrowDownRight,
  Wallet,
  CreditCard,
  PiggyBank,
  Smartphone,
  BarChart3,
  Zap,
} from "lucide-react";

const kpiCards = [
  {
    title: "Marketing-Attributed Signups",
    value: "47,832",
    change: "+18.4%",
    trend: "up",
    period: "vs last month",
    icon: Users,
    color: "cyan",
  },
  {
    title: "Customer Acquisition Cost",
    value: "R42.50",
    change: "-23.1%",
    trend: "up",
    period: "vs last month",
    icon: Target,
    color: "green",
  },
  {
    title: "Marketing ROI",
    value: "847%",
    change: "+156%",
    trend: "up",
    period: "vs last quarter",
    icon: TrendingUp,
    color: "yellow",
  },
  {
    title: "Customer Lifetime Value",
    value: "R4,280",
    change: "+8.2%",
    trend: "up",
    period: "vs last quarter",
    icon: DollarSign,
    color: "magenta",
  },
];

const channelROI = [
  {
    channel: "Social Media",
    spend: "R285,000",
    revenue: "R2,847,500",
    roi: "899%",
    conversions: 12847,
    color: "bg-tyme-cyan",
  },
  {
    channel: "Google Ads",
    spend: "R425,000",
    revenue: "R3,612,500",
    roi: "750%",
    conversions: 18234,
    color: "bg-tyme-yellow",
  },
  {
    channel: "SEO Content",
    spend: "R95,000",
    revenue: "R1,425,000",
    roi: "1400%",
    conversions: 8932,
    color: "bg-green-500",
  },
  {
    channel: "Video Marketing",
    spend: "R180,000",
    revenue: "R1,260,000",
    roi: "600%",
    conversions: 6478,
    color: "bg-tyme-magenta",
  },
];

const productROI = [
  {
    product: "EveryDay Account",
    icon: Wallet,
    signups: 28432,
    ltv: "R3,850",
    totalValue: "R109.5M",
    conversionRate: "4.2%",
  },
  {
    product: "GoalSave Account",
    icon: PiggyBank,
    signups: 12847,
    ltv: "R5,200",
    totalValue: "R66.8M",
    conversionRate: "3.8%",
  },
  {
    product: "TymeBank Card",
    icon: CreditCard,
    signups: 8934,
    ltv: "R4,100",
    totalValue: "R36.6M",
    conversionRate: "2.9%",
  },
  {
    product: "Mobile App Installs",
    icon: Smartphone,
    signups: 156782,
    ltv: "R680",
    totalValue: "R106.6M",
    conversionRate: "12.4%",
  },
];

const monthlyTrend = [
  { month: "Aug", signups: 32450, spend: 680000, revenue: 4850000 },
  { month: "Sep", signups: 35820, spend: 720000, revenue: 5420000 },
  { month: "Oct", signups: 38940, spend: 785000, revenue: 6180000 },
  { month: "Nov", signups: 42180, spend: 845000, revenue: 7250000 },
  { month: "Dec", signups: 45620, spend: 920000, revenue: 8340000 },
  { month: "Jan", signups: 47832, spend: 985000, revenue: 9145000 },
];

export default function ROIDashboard() {
  const maxRevenue = Math.max(...monthlyTrend.map((m) => m.revenue));

  return (
    <div className="min-h-screen bg-tyme-bg relative">
      <div className="wavy-lines" />
      <div className="relative z-10 p-8 pt-20">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">ROI Dashboard</h1>
        <p className="text-gray-400">
          Track the return on your marketing investment in real-time
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {kpiCards.map((kpi) => {
          const Icon = kpi.icon;
          const colorClasses = {
            cyan: "text-tyme-cyan bg-tyme-cyan/10",
            green: "text-green-500 bg-green-500/10",
            yellow: "text-tyme-yellow bg-tyme-yellow/10",
            magenta: "text-tyme-magenta bg-tyme-magenta/10",
          };

          return (
            <div
              key={kpi.title}
              className="bg-tyme-card border border-tyme-border rounded-xl p-6 hover:border-tyme-cyan/30 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`p-3 rounded-lg ${colorClasses[kpi.color as keyof typeof colorClasses]}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div
                  className={`flex items-center gap-1 text-sm ${kpi.trend === "up" ? "text-green-500" : "text-red-500"}`}
                >
                  {kpi.trend === "up" ? (
                    <ArrowUpRight className="w-4 h-4" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4" />
                  )}
                  {kpi.change}
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-1">{kpi.title}</p>
              <p className="text-2xl font-bold text-white">{kpi.value}</p>
              <p className="text-xs text-gray-500 mt-1">{kpi.period}</p>
            </div>
          );
        })}
      </div>

      {/* Revenue Attribution Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-tyme-card border border-tyme-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-white">
              Monthly Revenue Attribution
            </h2>
            <select className="bg-tyme-bg-secondary border border-tyme-border rounded-lg px-3 py-1.5 text-sm text-gray-300">
              <option>Last 6 months</option>
              <option>Last 12 months</option>
              <option>Year to date</option>
            </select>
          </div>
          <div className="space-y-4">
            {monthlyTrend.map((month) => (
              <div key={month.month} className="flex items-center gap-4">
                <div className="w-12 text-sm text-gray-400">{month.month}</div>
                <div className="flex-1">
                  <div className="h-8 bg-tyme-bg-secondary rounded-lg overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-tyme-cyan to-tyme-cyan-dark rounded-lg flex items-center justify-end pr-3"
                      style={{
                        width: `${(month.revenue / maxRevenue) * 100}%`,
                      }}
                    >
                      <span className="text-xs font-medium text-black">
                        R{(month.revenue / 1000000).toFixed(1)}M
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-20 text-right text-sm text-gray-400">
                  {month.signups.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-end gap-6 mt-4 text-xs text-gray-500">
            <span className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-tyme-cyan"></div>
              Revenue
            </span>
            <span>Signups (right)</span>
          </div>
        </div>

        {/* Channel ROI Breakdown */}
        <div className="bg-tyme-card border border-tyme-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-white">
              Channel ROI Breakdown
            </h2>
            <div className="flex items-center gap-2 text-sm text-tyme-cyan">
              <Zap className="w-4 h-4" />
              <span>Real-time</span>
            </div>
          </div>
          <div className="space-y-4">
            {channelROI.map((channel) => (
              <div
                key={channel.channel}
                className="bg-tyme-bg-secondary rounded-lg p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${channel.color}`} />
                    <span className="font-medium text-white">
                      {channel.channel}
                    </span>
                  </div>
                  <span className="text-green-500 font-semibold">
                    {channel.roi} ROI
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Spend</p>
                    <p className="text-gray-300">{channel.spend}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Revenue</p>
                    <p className="text-tyme-cyan">{channel.revenue}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Conversions</p>
                    <p className="text-gray-300">
                      {channel.conversions.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Performance */}
      <div className="bg-tyme-card border border-tyme-border rounded-xl p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-white">
            Product Performance Attribution
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">Total Portfolio Value:</span>
            <span className="text-xl font-bold text-tyme-cyan">R319.5M</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {productROI.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.product}
                className="bg-tyme-bg-secondary rounded-lg p-5 hover:bg-tyme-bg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-tyme-cyan/10">
                    <Icon className="w-5 h-5 text-tyme-cyan" />
                  </div>
                  <span className="font-medium text-white text-sm">
                    {product.product}
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-500 text-sm">Signups</span>
                    <span className="text-white font-medium">
                      {product.signups.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 text-sm">Avg LTV</span>
                    <span className="text-white font-medium">{product.ltv}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 text-sm">Total Value</span>
                    <span className="text-tyme-cyan font-medium">
                      {product.totalValue}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 text-sm">Conv. Rate</span>
                    <span className="text-green-500 font-medium">
                      {product.conversionRate}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Cost Savings Summary */}
      <div className="bg-gradient-to-r from-tyme-cyan/10 to-tyme-magenta/10 border border-tyme-cyan/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <BarChart3 className="w-6 h-6 text-tyme-cyan" />
          <h2 className="text-lg font-semibold text-white">
            Marketing Cost Savings Summary
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <p className="text-gray-400 text-sm mb-1">Previous Agency Cost</p>
            <p className="text-2xl font-bold text-gray-500 line-through">
              R2.4M/month
            </p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-1">Current Platform Cost</p>
            <p className="text-2xl font-bold text-white">R185K/month</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-1">Monthly Savings</p>
            <p className="text-2xl font-bold text-green-500">R2.215M</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-1">Annual Savings</p>
            <p className="text-2xl font-bold text-tyme-cyan">R26.58M</p>
          </div>
        </div>
        <p className="text-gray-500 text-sm mt-4">
          * Compared to equivalent agency services for content creation, campaign
          management, and analytics
        </p>
      </div>
      </div>
    </div>
  );
}
