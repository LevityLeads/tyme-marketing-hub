"use client";

import { useState } from "react";
import {
  Megaphone,
  Sparkles,
  Copy,
  RefreshCw,
  CheckCircle,
  ExternalLink,
} from "lucide-react";

const platforms = [
  { name: "Google Ads", icon: "G", color: "from-blue-500 to-green-500" },
  { name: "Meta Ads", icon: "f", color: "from-blue-600 to-purple-600" },
  { name: "LinkedIn", icon: "in", color: "from-blue-700 to-blue-800" },
  { name: "TikTok", icon: "♪", color: "from-pink-500 to-cyan-500" },
];

const generatedAds = [
  {
    headline: "Open a Bank Account in 5 Minutes",
    description: "No paperwork. No queues. Just download the app and start banking smarter with TymeBank. Join 8 million South Africans.",
    cta: "Download Now",
  },
  {
    headline: "Save Smarter with GoalSave",
    description: "Set your savings goals and watch your money grow automatically. Earn up to 10% interest. Start with just R10.",
    cta: "Start Saving",
  },
  {
    headline: "Banking That Works For You",
    description: "24/7 access to your money. Zero monthly fees. Real-time notifications. TymeBank - digitally smart banking.",
    cta: "Learn More",
  },
];

export default function PaidAds() {
  const [selectedPlatform, setSelectedPlatform] = useState("Google Ads");
  const [showGenerated, setShowGenerated] = useState(true);

  return (
    <div className="min-h-screen bg-tyme-bg relative">
      <div className="wavy-lines" />

      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
              <Megaphone className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white">Paid Ads Creator</h1>
          </div>
          <p className="text-gray-400">
            Generate high-converting ad copy for any platform
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Left - Configuration */}
          <div className="space-y-6">
            <div className="bg-tyme-card border border-tyme-border rounded-xl p-6">
              <h3 className="text-sm font-medium text-gray-400 mb-4">Platform</h3>
              <div className="grid grid-cols-2 gap-3">
                {platforms.map((platform) => (
                  <button
                    key={platform.name}
                    onClick={() => setSelectedPlatform(platform.name)}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all ${
                      selectedPlatform === platform.name
                        ? "border-tyme-cyan bg-tyme-cyan/10"
                        : "border-tyme-border hover:border-tyme-cyan/50"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${platform.color} flex items-center justify-center text-white font-bold`}>
                      {platform.icon}
                    </div>
                    <span className="text-xs text-white">{platform.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-tyme-card border border-tyme-border rounded-xl p-6">
              <h3 className="text-sm font-medium text-gray-400 mb-4">Campaign Goal</h3>
              <select className="w-full bg-tyme-bg border border-tyme-border rounded-lg p-3 text-white focus:outline-none focus:border-tyme-cyan">
                <option>App Downloads</option>
                <option>Website Traffic</option>
                <option>Lead Generation</option>
                <option>Brand Awareness</option>
              </select>
            </div>

            <div className="bg-tyme-card border border-tyme-border rounded-xl p-6">
              <h3 className="text-sm font-medium text-gray-400 mb-4">Product/Service</h3>
              <textarea
                placeholder="Describe what you're advertising..."
                defaultValue="TymeBank digital banking app with GoalSave feature for automated savings"
                className="w-full h-24 bg-tyme-bg border border-tyme-border rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-tyme-cyan resize-none"
              />
            </div>

            <button className="btn-primary w-full flex items-center justify-center gap-2 py-4">
              <Sparkles className="w-5 h-5" />
              Generate Ads
            </button>
          </div>

          {/* Right - Generated Ads */}
          <div className="col-span-2 space-y-6">
            <div className="bg-tyme-card border border-tyme-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Generated Ad Variants</h3>
                <div className="flex items-center gap-2 text-tyme-cyan text-sm">
                  <CheckCircle className="w-4 h-4" />
                  3 variants generated
                </div>
              </div>

              <div className="space-y-4">
                {generatedAds.map((ad, index) => (
                  <div
                    key={index}
                    className="bg-tyme-bg border border-tyme-border rounded-xl p-5 hover:border-tyme-cyan/30 transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="px-2 py-1 text-xs bg-tyme-cyan/10 text-tyme-cyan rounded-full">
                        Variant {index + 1}
                      </span>
                      <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-tyme-card rounded-lg transition-colors" title="Copy">
                          <Copy className="w-4 h-4 text-gray-400" />
                        </button>
                        <button className="p-2 hover:bg-tyme-card rounded-lg transition-colors" title="Regenerate">
                          <RefreshCw className="w-4 h-4 text-gray-400" />
                        </button>
                      </div>
                    </div>

                    {/* Ad Preview */}
                    <div className="bg-white rounded-lg p-4 mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-gray-500">Ad</span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-green-600">tymebank.co.za</span>
                      </div>
                      <h4 className="text-blue-700 text-lg font-medium mb-1 hover:underline cursor-pointer">
                        {ad.headline}
                      </h4>
                      <p className="text-gray-600 text-sm mb-2">{ad.description}</p>
                      <button className="text-blue-600 text-sm font-medium flex items-center gap-1">
                        {ad.cta}
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Metrics prediction */}
                    <div className="flex items-center gap-6 text-sm">
                      <div>
                        <span className="text-gray-500">Est. CTR:</span>
                        <span className="text-tyme-cyan ml-2">3.2%</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Quality Score:</span>
                        <span className="text-tyme-cyan ml-2">8/10</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* A/B Test suggestion */}
            <div className="bg-gradient-to-r from-tyme-cyan/10 to-transparent border border-tyme-cyan/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="w-5 h-5 text-tyme-cyan" />
                <span className="font-medium text-white">AI Recommendation</span>
              </div>
              <p className="text-gray-400 text-sm">
                Variant 1 has the strongest headline for app download campaigns. Consider A/B testing Variant 2 for audiences interested in savings products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
