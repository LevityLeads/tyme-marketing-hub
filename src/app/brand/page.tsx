"use client";

import {
  Palette,
  Download,
  Copy,
  CheckCircle,
  Image as ImageIcon,
  Type,
  Layers,
} from "lucide-react";

const colors = [
  { name: "Tyme Cyan", hex: "#00E5CC", usage: "Primary accent" },
  { name: "Tyme Cyan Dark", hex: "#00B8A3", usage: "Secondary accent" },
  { name: "Background", hex: "#0A0A0A", usage: "Primary background" },
  { name: "Card", hex: "#1F1F1F", usage: "Card surfaces" },
  { name: "White", hex: "#FFFFFF", usage: "Primary text" },
  { name: "Gray", hex: "#9CA3AF", usage: "Secondary text" },
];

const assets = [
  { name: "Logo - Primary", type: "SVG", size: "2KB" },
  { name: "Logo - White", type: "PNG", size: "12KB" },
  { name: "Logo - Cyan", type: "PNG", size: "12KB" },
  { name: "App Icon", type: "PNG", size: "24KB" },
  { name: "Social Banner", type: "PNG", size: "156KB" },
  { name: "Email Header", type: "PNG", size: "89KB" },
];

export default function BrandAssets() {
  return (
    <div className="min-h-screen bg-tyme-bg relative">
      <div className="wavy-lines" />

      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
              <Palette className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white">Brand Assets</h1>
          </div>
          <p className="text-gray-400">
            Access all brand assets and guidelines in one place
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Logo Section */}
          <div className="bg-tyme-card border border-tyme-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-tyme-cyan" />
              Logo
            </h3>
            
            {/* Logo Preview */}
            <div className="bg-tyme-bg rounded-xl p-8 mb-4 flex items-center justify-center">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 flex flex-col justify-center gap-[4px]">
                  <div className="h-[4px] w-full bg-gradient-to-r from-tyme-cyan to-tyme-cyan-dark rounded-full" />
                  <div className="h-[4px] w-full bg-gradient-to-r from-tyme-cyan to-tyme-cyan-dark rounded-full" />
                  <div className="h-[4px] w-full bg-gradient-to-r from-tyme-cyan to-tyme-cyan-dark rounded-full" />
                  <div className="h-[4px] w-full bg-gradient-to-r from-tyme-cyan to-tyme-cyan-dark rounded-full" />
                  <div className="h-[4px] w-full bg-gradient-to-r from-tyme-cyan to-tyme-cyan-dark rounded-full" />
                </div>
                <div>
                  <span className="text-3xl font-bold text-white">Tyme</span>
                  <span className="text-3xl font-light text-gray-400">Bank</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              {assets.slice(0, 4).map((asset) => (
                <div
                  key={asset.name}
                  className="flex items-center justify-between p-3 bg-tyme-bg rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <ImageIcon className="w-4 h-4 text-gray-500" />
                    <div>
                      <p className="text-sm text-white">{asset.name}</p>
                      <p className="text-xs text-gray-500">{asset.type} • {asset.size}</p>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-tyme-card rounded-lg transition-colors">
                    <Download className="w-4 h-4 text-tyme-cyan" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Colors Section */}
          <div className="bg-tyme-card border border-tyme-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Palette className="w-5 h-5 text-tyme-cyan" />
              Colors
            </h3>
            
            <div className="space-y-3">
              {colors.map((color) => (
                <div
                  key={color.name}
                  className="flex items-center gap-3 p-3 bg-tyme-bg rounded-lg"
                >
                  <div
                    className="w-10 h-10 rounded-lg border border-tyme-border"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div className="flex-1">
                    <p className="text-sm text-white">{color.name}</p>
                    <p className="text-xs text-gray-500">{color.usage}</p>
                  </div>
                  <button
                    className="flex items-center gap-1 px-2 py-1 text-xs bg-tyme-card rounded hover:bg-tyme-border transition-colors"
                    title="Copy hex code"
                  >
                    <Copy className="w-3 h-3" />
                    {color.hex}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Typography Section */}
          <div className="bg-tyme-card border border-tyme-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Type className="w-5 h-5 text-tyme-cyan" />
              Typography
            </h3>

            <div className="space-y-6">
              <div className="bg-tyme-bg rounded-xl p-4">
                <p className="text-xs text-gray-500 mb-2">Headings</p>
                <p className="text-4xl font-bold text-white mb-1">Inter Bold</p>
                <p className="text-sm text-gray-400">Font weight: 700</p>
              </div>

              <div className="bg-tyme-bg rounded-xl p-4">
                <p className="text-xs text-gray-500 mb-2">Body</p>
                <p className="text-lg text-white mb-1">Inter Regular</p>
                <p className="text-sm text-gray-400">Font weight: 400</p>
              </div>

              <div className="bg-tyme-bg rounded-xl p-4">
                <p className="text-xs text-gray-500 mb-2">Accent</p>
                <p className="text-lg font-light text-gray-400 mb-1">Inter Light</p>
                <p className="text-sm text-gray-400">Font weight: 300</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-tyme-cyan/10 border border-tyme-cyan/20 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-tyme-cyan" />
                <span className="text-sm font-medium text-white">Brand Compliant</span>
              </div>
              <p className="text-xs text-gray-400">
                All generated content uses approved brand fonts and styles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
