"use client";
import { motion } from "framer-motion";
import { Activity, Flame, Book, TrendingUp } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] dark:bg-[#0D0D0D] p-6">
      <header className="mb-8">
        <h1 className="text-2xl font-bold">স্বাগতম, User! 👋</h1>
        <p className="text-zinc-500">আজকের প্রগ্রেস চেক করুন।</p>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Steps", val: "6,240", icon: <Activity />, color: "bg-blue-500" },
          { label: "Calories", val: "320 kcal", icon: <Flame />, color: "bg-orange-500" },
          { label: "Study", val: "2.5 hrs", icon: <Book />, color: "bg-purple-500" },
          { label: "Focus", val: "92%", icon: <TrendingUp />, color: "bg-green-500" },
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="p-5 bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-zinc-100 dark:border-zinc-800"
          >
            <div className={`w-10 h-10 ${item.color} text-white rounded-xl flex items-center justify-center mb-3`}>
              {item.icon}
            </div>
            <p className="text-xs text-zinc-400 uppercase font-bold tracking-wider">{item.label}</p>
            <h2 className="text-xl font-black mt-1">{item.val}</h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
