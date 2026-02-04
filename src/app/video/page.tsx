"use client";

import {
  Video,
  Play,
  Pause,
  Volume2,
  Maximize,
  Download,
  Sparkles,
  Clock,
  Music,
  Type,
  Image as ImageIcon,
} from "lucide-react";

const templates = [
  { name: "Product Showcase", duration: "15s", thumbnail: "📱" },
  { name: "Testimonial", duration: "30s", thumbnail: "💬" },
  { name: "Behind the Scenes", duration: "60s", thumbnail: "🎬" },
  { name: "Tutorial", duration: "45s", thumbnail: "📚" },
  { name: "Announcement", duration: "15s", thumbnail: "📢" },
  { name: "Story Format", duration: "15s", thumbnail: "📖" },
];

export default function VideoMaker() {
  return (
    <div className="min-h-screen bg-tyme-bg relative">
      <div className="wavy-lines" />

      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Video className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white">Video Maker</h1>
          </div>
          <p className="text-gray-400">
            Create scroll-stopping videos in minutes
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Left - Templates */}
          <div className="space-y-6">
            <div className="bg-tyme-card border border-tyme-border rounded-xl p-6">
              <h3 className="text-sm font-medium text-gray-400 mb-4">Templates</h3>
              <div className="grid grid-cols-2 gap-3">
                {templates.map((template) => (
                  <button
                    key={template.name}
                    className="p-4 bg-tyme-bg border border-tyme-border rounded-xl hover:border-tyme-cyan/50 transition-all text-center group"
                  >
                    <div className="text-3xl mb-2">{template.thumbnail}</div>
                    <p className="text-sm text-white font-medium">{template.name}</p>
                    <p className="text-xs text-gray-500">{template.duration}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-tyme-card border border-tyme-border rounded-xl p-6">
              <h3 className="text-sm font-medium text-gray-400 mb-4">Quick Tools</h3>
              <div className="space-y-2">
                {[
                  { icon: Type, label: "Add Text" },
                  { icon: Music, label: "Add Music" },
                  { icon: ImageIcon, label: "Add Media" },
                  { icon: Sparkles, label: "AI Generate" },
                ].map((tool) => (
                  <button
                    key={tool.label}
                    className="w-full flex items-center gap-3 p-3 bg-tyme-bg border border-tyme-border rounded-lg hover:border-tyme-cyan/50 transition-all"
                  >
                    <tool.icon className="w-5 h-5 text-gray-500" />
                    <span className="text-white">{tool.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Center - Video Preview */}
          <div className="col-span-2">
            <div className="bg-tyme-card border border-tyme-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Preview</h3>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-400">0:15 / 0:30</span>
                </div>
              </div>

              {/* Video Player Mock */}
              <div className="relative aspect-[9/16] max-w-sm mx-auto bg-gradient-to-br from-tyme-bg-secondary to-tyme-bg rounded-2xl overflow-hidden border border-tyme-border">
                {/* Video Content Mock */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-tyme-cyan to-tyme-cyan-dark flex items-center justify-center mb-6 shadow-cyan-glow">
                    <Play className="w-8 h-8 text-black ml-1" />
                  </div>
                  <h4 className="text-2xl font-bold text-white text-center mb-2">
                    Banking Made Simple
                  </h4>
                  <p className="text-tyme-cyan text-center">
                    Open your account in 5 minutes
                  </p>
                </div>

                {/* TymeBank watermark */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div className="w-6 h-6 flex flex-col justify-center gap-[2px]">
                    <div className="h-[2px] w-full bg-tyme-cyan rounded-full" />
                    <div className="h-[2px] w-full bg-tyme-cyan rounded-full" />
                    <div className="h-[2px] w-full bg-tyme-cyan rounded-full" />
                  </div>
                  <span className="text-sm text-white font-medium">TymeBank</span>
                </div>

                {/* Controls overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  {/* Progress bar */}
                  <div className="h-1 bg-white/20 rounded-full mb-3 overflow-hidden">
                    <div className="h-full w-1/2 bg-tyme-cyan rounded-full" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                        <Pause className="w-5 h-5 text-white" />
                      </button>
                      <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                        <Volume2 className="w-5 h-5 text-white" />
                      </button>
                    </div>
                    <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                      <Maximize className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-6 justify-center">
                <button className="btn-secondary flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Regenerate
                </button>
                <button className="btn-primary flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Export Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
