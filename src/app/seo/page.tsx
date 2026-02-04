"use client";

import { useState } from "react";
import {
  FileText,
  Sparkles,
  Search,
  TrendingUp,
  Target,
  BookOpen,
  Zap,
  CheckCircle,
  ChevronRight,
} from "lucide-react";

const contentTypes = [
  { name: "Blog Post", icon: BookOpen, desc: "Long-form articles" },
  { name: "Landing Page", icon: Target, desc: "Conversion focused" },
  { name: "Product Description", icon: Zap, desc: "E-commerce copy" },
  { name: "Meta Content", icon: Search, desc: "SEO titles & descriptions" },
];

const seoScore = {
  overall: 87,
  readability: 92,
  keywords: 85,
  structure: 84,
};

export default function SEOContent() {
  const [selectedType, setSelectedType] = useState("Blog Post");

  return (
    <div className="min-h-screen bg-tyme-bg relative">
      <div className="wavy-lines" />

      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white">SEO Content Engine</h1>
          </div>
          <p className="text-gray-400">
            Generate optimized content that ranks
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Left - Content Types */}
          <div className="space-y-6">
            <div className="bg-tyme-card border border-tyme-border rounded-xl p-6">
              <h3 className="text-sm font-medium text-gray-400 mb-4">Content Type</h3>
              <div className="space-y-2">
                {contentTypes.map((type) => (
                  <button
                    key={type.name}
                    onClick={() => setSelectedType(type.name)}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all ${
                      selectedType === type.name
                        ? "border-tyme-cyan bg-tyme-cyan/10"
                        : "border-tyme-border hover:border-tyme-cyan/50"
                    }`}
                  >
                    <type.icon className={`w-5 h-5 ${selectedType === type.name ? "text-tyme-cyan" : "text-gray-500"}`} />
                    <div className="text-left">
                      <p className="text-white font-medium">{type.name}</p>
                      <p className="text-sm text-gray-500">{type.desc}</p>
                    </div>
                    {selectedType === type.name && (
                      <CheckCircle className="w-5 h-5 text-tyme-cyan ml-auto" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-tyme-card border border-tyme-border rounded-xl p-6">
              <h3 className="text-sm font-medium text-gray-400 mb-4">Target Keywords</h3>
              <input
                type="text"
                placeholder="Enter keywords..."
                className="w-full bg-tyme-bg border border-tyme-border rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-tyme-cyan"
              />
              <div className="flex flex-wrap gap-2 mt-3">
                {["digital banking", "mobile banking", "savings account"].map((kw) => (
                  <span key={kw} className="px-3 py-1 text-sm bg-tyme-cyan/10 text-tyme-cyan rounded-full">
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            <button className="btn-primary w-full flex items-center justify-center gap-2 py-4">
              <Sparkles className="w-5 h-5" />
              Generate Content
            </button>
          </div>

          {/* Center - Editor Preview */}
          <div className="col-span-2">
            <div className="bg-tyme-card border border-tyme-border rounded-xl p-6 h-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Content Preview</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-tyme-cyan animate-pulse" />
                    <span className="text-sm text-gray-400">AI Generated</span>
                  </div>
                </div>
              </div>

              {/* Preview Content */}
              <div className="bg-tyme-bg border border-tyme-border rounded-xl p-6 mb-6">
                <h2 className="text-2xl font-bold text-white mb-4">
                  The Future of Banking: Why Digital-First is the Only Way Forward
                </h2>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <span>8 min read</span>
                  <span>•</span>
                  <span>1,247 words</span>
                  <span>•</span>
                  <span className="text-tyme-cyan">SEO Optimized</span>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  In an era where convenience is king, traditional banking is rapidly becoming a relic of the past. South Africans are increasingly turning to digital banking solutions that offer speed, accessibility, and transparency...
                </p>
                <p className="text-gray-400 leading-relaxed">
                  The shift isn&apos;t just about technology—it&apos;s about empowerment. When you can open a bank account in under 5 minutes, manage your savings goals with a few taps, and never wait in a queue again, you&apos;re not just banking differently...
                </p>
              </div>

              {/* SEO Score */}
              <div className="bg-tyme-bg border border-tyme-border rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-white font-medium">SEO Score</h4>
                  <div className="text-3xl font-bold text-tyme-cyan">{seoScore.overall}</div>
                </div>
                <div className="space-y-3">
                  {Object.entries(seoScore).filter(([key]) => key !== 'overall').map(([key, value]) => (
                    <div key={key}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400 capitalize">{key}</span>
                        <span className="text-white">{value}%</span>
                      </div>
                      <div className="h-2 bg-tyme-border rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-tyme-cyan to-tyme-cyan-dark rounded-full transition-all"
                          style={{ width: `${value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
