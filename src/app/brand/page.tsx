"use client";

import {
  Palette,
  Download,
  Copy,
  CheckCircle,
  XCircle,
  Image as ImageIcon,
  Type,
  Layers,
  MessageSquare,
  Heart,
  Zap,
  Target,
  Users,
  Sparkles,
} from "lucide-react";

const colors = [
  { name: "Tyme Cyan", hex: "#00E5CC", usage: "Primary accent, CTAs" },
  { name: "Tyme Cyan Dark", hex: "#00B8A3", usage: "Secondary accent, hovers" },
  { name: "Tyme Yellow", hex: "#FFE500", usage: "Highlights, warnings" },
  { name: "Tyme Magenta", hex: "#E6007E", usage: "Accent, promotions" },
  { name: "Background", hex: "#0A0A0A", usage: "Primary background" },
  { name: "White", hex: "#FFFFFF", usage: "Primary text" },
];

const brandValues = [
  {
    icon: Zap,
    title: "Simplicity",
    description: "Banking doesn't have to be complicated. Strip away the nonsense.",
  },
  {
    icon: Target,
    title: "Transparency",
    description: "No hidden costs. Customers know exactly what they pay for.",
  },
  {
    icon: Heart,
    title: "Potential",
    description: "We believe in people's aspirations, not their current situation.",
  },
  {
    icon: Users,
    title: "Humanness",
    description: "Authentic stories, real people. Accessible and relatable.",
  },
];

const toneDoList = [
  "Use everyday language South Africans understand",
  "Be encouraging and empowering - \"You've got this\"",
  "Focus on aspirations and potential, not limitations",
  "Be warm, authentic, and human",
  "Keep it simple and jargon-free",
  "Show real people and authentic stories",
  "Highlight how easy and quick our services are",
  "Use active voice and direct communication",
];

const toneDontList = [
  "Use \"larney\" (fancy) banking jargon",
  "Be condescending or talk down to customers",
  "Focus on what people can't do",
  "Use complicated financial terminology",
  "Sound corporate, cold, or robotic",
  "Make promises we can't keep",
  "Use fear-based messaging",
  "Hide fees or important information",
];

const assets = [
  { name: "Logo - Primary (White)", type: "PNG", size: "45KB" },
  { name: "Logo - Cyan Variant", type: "PNG", size: "45KB" },
  { name: "App Icon", type: "PNG", size: "24KB" },
  { name: "Social Banner", type: "PNG", size: "156KB" },
];

export default function Brand() {
  return (
    <div className="min-h-screen bg-tyme-bg relative">
      <div className="wavy-lines" />

      <div className="relative z-10 p-8 pt-20">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
              <Palette className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white">Brand</h1>
          </div>
          <p className="text-gray-400">
            Brand guidelines, tone of voice, and assets for consistent content creation
          </p>
        </div>

        {/* Tagline & Mission */}
        <div className="bg-gradient-to-r from-tyme-cyan/10 to-tyme-magenta/10 border border-tyme-cyan/20 rounded-xl p-8 mb-8">
          <div className="flex items-center gap-2 text-tyme-cyan text-sm font-medium mb-3">
            <Sparkles className="w-4 h-4" />
            Brand Tagline
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">"You've got this"</h2>
          <p className="text-gray-400 max-w-2xl">
            It's what you say to someone before they're about to do something important, to give them support and show them that you believe in them. We have an unfaltering belief in the potential of the people of South Africa.
          </p>
          <div className="mt-4 pt-4 border-t border-tyme-border/50">
            <p className="text-sm text-gray-500">
              <span className="text-tyme-cyan font-medium">TYME</span> = Take Your Money Everywhere
            </p>
          </div>
        </div>

        {/* Brand Values */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-white mb-4">Brand Values</h3>
          <div className="grid grid-cols-4 gap-4">
            {brandValues.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-tyme-card border border-tyme-border rounded-xl p-5 hover:border-tyme-cyan/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-tyme-cyan/10 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-tyme-cyan" />
                  </div>
                  <h4 className="font-semibold text-white mb-1">{value.title}</h4>
                  <p className="text-sm text-gray-400">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tone of Voice */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-tyme-card border border-tyme-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-tyme-cyan" />
              Tone of Voice
            </h3>
            <div className="bg-tyme-bg rounded-xl p-4 mb-4">
              <p className="text-gray-300 italic">
                "One of the core pillars of our brand is stripping away all the nonsense and actually focusing on humanness. We've got to completely reinvent a voice and visual identity that will stand out."
              </p>
              <p className="text-sm text-gray-500 mt-2">— TymeBank CMO</p>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-tyme-cyan mt-2" />
                <p className="text-sm text-gray-400">
                  <span className="text-white font-medium">Empowering:</span> We believe in our customers' potential
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-tyme-cyan mt-2" />
                <p className="text-sm text-gray-400">
                  <span className="text-white font-medium">Simple:</span> No jargon, no "larney words"
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-tyme-cyan mt-2" />
                <p className="text-sm text-gray-400">
                  <span className="text-white font-medium">Authentic:</span> Real people, real stories
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-tyme-cyan mt-2" />
                <p className="text-sm text-gray-400">
                  <span className="text-white font-medium">Transparent:</span> What you see is what you get
                </p>
              </div>
            </div>
          </div>

          {/* Do's and Don'ts */}
          <div className="grid grid-rows-2 gap-4">
            <div className="bg-tyme-card border border-green-500/20 rounded-xl p-5">
              <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Do's
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {toneDoList.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-xs text-gray-400">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-tyme-card border border-red-500/20 rounded-xl p-5">
              <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-500" />
                Don'ts
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {toneDontList.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <XCircle className="w-3 h-3 text-red-500 mt-1 flex-shrink-0" />
                    <p className="text-xs text-gray-400">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Logo Section */}
          <div className="bg-tyme-card border border-tyme-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-tyme-cyan" />
              Logo
            </h3>

            {/* Logo Preview */}
            <div className="bg-tyme-bg rounded-xl p-6 mb-4 flex items-center justify-center">
              <img
                src="/images/tymelogo.png"
                alt="TymeBank Logo"
                className="h-12 w-auto"
              />
            </div>

            <div className="space-y-2">
              {assets.map((asset) => (
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
                    className="w-10 h-10 rounded-lg border border-tyme-border flex-shrink-0"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white">{color.name}</p>
                    <p className="text-xs text-gray-500 truncate">{color.usage}</p>
                  </div>
                  <button
                    className="flex items-center gap-1 px-2 py-1 text-xs bg-tyme-card rounded hover:bg-tyme-border transition-colors flex-shrink-0"
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

            <div className="space-y-4">
              <div className="bg-tyme-bg rounded-xl p-4">
                <p className="text-xs text-gray-500 mb-2">Headings</p>
                <p className="text-2xl font-bold text-white mb-1">Inter Bold</p>
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

            <div className="mt-4 p-4 bg-tyme-cyan/10 border border-tyme-cyan/20 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-tyme-cyan" />
                <span className="text-sm font-medium text-white">AI-Enforced</span>
              </div>
              <p className="text-xs text-gray-400">
                All generated content follows these brand guidelines automatically.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
