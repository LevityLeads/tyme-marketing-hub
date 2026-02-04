"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Video,
  FileText,
  Megaphone,
  Plus,
  Filter,
} from "lucide-react";

type ContentItem = {
  id: string;
  title: string;
  type: "social" | "video" | "blog" | "ad";
  platform?: string;
  time: string;
  status: "scheduled" | "draft" | "published";
};

type CalendarDay = {
  date: number;
  isCurrentMonth: boolean;
  isToday?: boolean;
  content: ContentItem[];
};

const contentTypeConfig = {
  social: {
    color: "bg-tyme-cyan",
    lightColor: "bg-tyme-cyan/20",
    textColor: "text-tyme-cyan",
    label: "Social",
  },
  video: {
    color: "bg-tyme-magenta",
    lightColor: "bg-tyme-magenta/20",
    textColor: "text-tyme-magenta",
    label: "Video",
  },
  blog: {
    color: "bg-green-500",
    lightColor: "bg-green-500/20",
    textColor: "text-green-500",
    label: "Blog",
  },
  ad: {
    color: "bg-tyme-yellow",
    lightColor: "bg-tyme-yellow/20",
    textColor: "text-tyme-yellow",
    label: "Ad",
  },
};

const platformIcons: Record<string, typeof Instagram> = {
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
  twitter: Twitter,
};

// Generate calendar data for February 2026
const generateCalendarData = (): CalendarDay[] => {
  const days: CalendarDay[] = [];

  // Previous month days (January ends on Saturday, so we need some padding)
  for (let i = 26; i <= 31; i++) {
    days.push({ date: i, isCurrentMonth: false, content: [] });
  }

  // Content schedule for February
  const contentSchedule: Record<number, ContentItem[]> = {
    2: [
      {
        id: "1",
        title: "GoalSave Launch Post",
        type: "social",
        platform: "instagram",
        time: "09:00",
        status: "scheduled",
      },
      {
        id: "2",
        title: "Savings Tips Reel",
        type: "video",
        time: "14:00",
        status: "scheduled",
      },
    ],
    3: [
      {
        id: "3",
        title: "Financial Literacy Blog",
        type: "blog",
        time: "10:00",
        status: "scheduled",
      },
    ],
    4: [
      {
        id: "4",
        title: "App Download Campaign",
        type: "ad",
        time: "00:00",
        status: "published",
      },
      {
        id: "5",
        title: "Customer Story",
        type: "social",
        platform: "facebook",
        time: "12:00",
        status: "scheduled",
      },
      {
        id: "6",
        title: "Behind the Scenes",
        type: "video",
        time: "16:00",
        status: "draft",
      },
    ],
    5: [
      {
        id: "7",
        title: "Zero Fees Post",
        type: "social",
        platform: "twitter",
        time: "11:00",
        status: "scheduled",
      },
    ],
    6: [
      {
        id: "8",
        title: "Weekend Tips Carousel",
        type: "social",
        platform: "instagram",
        time: "09:00",
        status: "scheduled",
      },
      {
        id: "9",
        title: "Product Showcase",
        type: "video",
        time: "15:00",
        status: "scheduled",
      },
    ],
    8: [
      {
        id: "10",
        title: "Mobile Banking Guide",
        type: "blog",
        time: "08:00",
        status: "scheduled",
      },
    ],
    9: [
      {
        id: "11",
        title: "LinkedIn Thought Leadership",
        type: "social",
        platform: "linkedin",
        time: "10:00",
        status: "scheduled",
      },
      {
        id: "12",
        title: "Brand Awareness Ads",
        type: "ad",
        time: "00:00",
        status: "scheduled",
      },
    ],
    10: [
      {
        id: "13",
        title: "Customer Testimonial",
        type: "video",
        time: "13:00",
        status: "draft",
      },
    ],
    11: [
      {
        id: "14",
        title: "EveryDay Account Post",
        type: "social",
        platform: "instagram",
        time: "09:00",
        status: "scheduled",
      },
      {
        id: "15",
        title: "Budgeting Tips",
        type: "social",
        platform: "facebook",
        time: "14:00",
        status: "scheduled",
      },
    ],
    12: [
      {
        id: "16",
        title: "How to Open Account",
        type: "blog",
        time: "10:00",
        status: "scheduled",
      },
      {
        id: "17",
        title: "Tutorial: Send Money",
        type: "video",
        time: "16:00",
        status: "scheduled",
      },
    ],
    13: [
      {
        id: "18",
        title: "Weekend Promo",
        type: "social",
        platform: "instagram",
        time: "11:00",
        status: "scheduled",
      },
    ],
    14: [
      {
        id: "19",
        title: "Valentine's Day Special",
        type: "social",
        platform: "instagram",
        time: "08:00",
        status: "scheduled",
      },
      {
        id: "20",
        title: "Love Your Savings",
        type: "ad",
        time: "00:00",
        status: "scheduled",
      },
      {
        id: "21",
        title: "Couples Finance Tips",
        type: "blog",
        time: "12:00",
        status: "scheduled",
      },
    ],
    16: [
      {
        id: "22",
        title: "Security Tips Post",
        type: "social",
        platform: "twitter",
        time: "10:00",
        status: "scheduled",
      },
    ],
    17: [
      {
        id: "23",
        title: "App Feature Highlight",
        type: "video",
        time: "14:00",
        status: "scheduled",
      },
    ],
    18: [
      {
        id: "24",
        title: "Customer Success Story",
        type: "social",
        platform: "linkedin",
        time: "09:00",
        status: "scheduled",
      },
      {
        id: "25",
        title: "Financial Goals Blog",
        type: "blog",
        time: "11:00",
        status: "draft",
      },
    ],
    19: [
      {
        id: "26",
        title: "Throwback Thursday",
        type: "social",
        platform: "instagram",
        time: "12:00",
        status: "scheduled",
      },
    ],
    20: [
      {
        id: "27",
        title: "Weekend Plans Post",
        type: "social",
        platform: "facebook",
        time: "15:00",
        status: "scheduled",
      },
      {
        id: "28",
        title: "Sign-Up Campaign",
        type: "ad",
        time: "00:00",
        status: "scheduled",
      },
    ],
    23: [
      {
        id: "29",
        title: "Monday Motivation",
        type: "social",
        platform: "instagram",
        time: "07:00",
        status: "scheduled",
      },
      {
        id: "30",
        title: "Savings Calculator Blog",
        type: "blog",
        time: "10:00",
        status: "scheduled",
      },
    ],
    24: [
      {
        id: "31",
        title: "Product Update Video",
        type: "video",
        time: "14:00",
        status: "scheduled",
      },
    ],
    25: [
      {
        id: "32",
        title: "Mid-week Tips",
        type: "social",
        platform: "twitter",
        time: "11:00",
        status: "scheduled",
      },
      {
        id: "33",
        title: "Retargeting Campaign",
        type: "ad",
        time: "00:00",
        status: "scheduled",
      },
    ],
    26: [
      {
        id: "34",
        title: "Employee Spotlight",
        type: "social",
        platform: "linkedin",
        time: "09:00",
        status: "scheduled",
      },
    ],
    27: [
      {
        id: "35",
        title: "Month-End Savings Tips",
        type: "social",
        platform: "instagram",
        time: "10:00",
        status: "scheduled",
      },
      {
        id: "36",
        title: "February Wrap-up",
        type: "video",
        time: "16:00",
        status: "draft",
      },
    ],
    28: [
      {
        id: "37",
        title: "Weekend Deals Post",
        type: "social",
        platform: "facebook",
        time: "12:00",
        status: "scheduled",
      },
    ],
  };

  // February 2026 days
  for (let i = 1; i <= 28; i++) {
    days.push({
      date: i,
      isCurrentMonth: true,
      isToday: i === 4,
      content: contentSchedule[i] || [],
    });
  }

  // Next month padding
  for (let i = 1; i <= 7; i++) {
    days.push({ date: i, isCurrentMonth: false, content: [] });
  }

  return days;
};

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const stats = [
  { label: "Social Posts", count: 24, type: "social" as const },
  { label: "Videos", count: 8, type: "video" as const },
  { label: "Blog Articles", count: 7, type: "blog" as const },
  { label: "Ad Campaigns", count: 5, type: "ad" as const },
];

export default function CalendarView() {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const calendarData = generateCalendarData();

  const filteredCalendarData = calendarData.map((day) => ({
    ...day,
    content: selectedFilter
      ? day.content.filter((item) => item.type === selectedFilter)
      : day.content,
  }));

  return (
    <div className="min-h-screen p-8 pt-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Content Calendar
          </h1>
          <p className="text-gray-400">
            Plan and visualize your marketing content schedule
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-tyme-cyan text-black font-medium rounded-lg hover:bg-tyme-cyan-dark transition-colors">
          <Plus className="w-5 h-5" />
          Schedule Content
        </button>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {stats.map((stat) => {
          const config = contentTypeConfig[stat.type];
          return (
            <button
              key={stat.label}
              onClick={() =>
                setSelectedFilter(
                  selectedFilter === stat.type ? null : stat.type
                )
              }
              className={`p-4 rounded-xl border transition-all ${
                selectedFilter === stat.type
                  ? `${config.lightColor} border-current ${config.textColor}`
                  : "bg-tyme-card border-tyme-border hover:border-tyme-cyan/30"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${config.color}`} />
                <span className="text-gray-400 text-sm">{stat.label}</span>
              </div>
              <p className="text-2xl font-bold text-white mt-2">{stat.count}</p>
              <p className="text-xs text-gray-500">this month</p>
            </button>
          );
        })}
      </div>

      {/* Calendar Navigation */}
      <div className="bg-tyme-card border border-tyme-border rounded-xl overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-tyme-border">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-tyme-bg-secondary rounded-lg transition-colors">
              <ChevronLeft className="w-5 h-5 text-gray-400" />
            </button>
            <h2 className="text-xl font-semibold text-white">February 2026</h2>
            <button className="p-2 hover:bg-tyme-bg-secondary rounded-lg transition-colors">
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSelectedFilter(null)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-colors ${
                !selectedFilter
                  ? "bg-tyme-cyan/10 text-tyme-cyan"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Filter className="w-4 h-4" />
              All Content
            </button>
          </div>
        </div>

        {/* Week Headers */}
        <div className="grid grid-cols-7 border-b border-tyme-border">
          {weekDays.map((day) => (
            <div
              key={day}
              className="p-3 text-center text-sm font-medium text-gray-500"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7">
          {filteredCalendarData.map((day, index) => (
            <div
              key={index}
              className={`min-h-[140px] p-2 border-b border-r border-tyme-border ${
                !day.isCurrentMonth ? "bg-tyme-bg-secondary/50" : ""
              } ${day.isToday ? "bg-tyme-cyan/5" : ""}`}
            >
              <div
                className={`text-sm mb-2 ${
                  day.isToday
                    ? "w-7 h-7 rounded-full bg-tyme-cyan text-black flex items-center justify-center font-bold"
                    : day.isCurrentMonth
                      ? "text-gray-300"
                      : "text-gray-600"
                }`}
              >
                {day.date}
              </div>
              <div className="space-y-1">
                {day.content.slice(0, 3).map((item) => {
                  const config = contentTypeConfig[item.type];
                  const PlatformIcon = item.platform
                    ? platformIcons[item.platform]
                    : null;

                  return (
                    <div
                      key={item.id}
                      className={`${config.lightColor} ${config.textColor} rounded px-2 py-1 text-xs cursor-pointer hover:opacity-80 transition-opacity`}
                    >
                      <div className="flex items-center gap-1">
                        {PlatformIcon && <PlatformIcon className="w-3 h-3" />}
                        {item.type === "video" && <Video className="w-3 h-3" />}
                        {item.type === "blog" && (
                          <FileText className="w-3 h-3" />
                        )}
                        {item.type === "ad" && <Megaphone className="w-3 h-3" />}
                        <span className="truncate flex-1">{item.title}</span>
                      </div>
                      {item.status === "draft" && (
                        <span className="text-[10px] opacity-70">Draft</span>
                      )}
                    </div>
                  );
                })}
                {day.content.length > 3 && (
                  <div className="text-xs text-gray-500 pl-2">
                    +{day.content.length - 3} more
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-8 mt-6">
        {Object.entries(contentTypeConfig).map(([key, config]) => (
          <div key={key} className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${config.color}`} />
            <span className="text-sm text-gray-400">{config.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
