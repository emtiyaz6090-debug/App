"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, BookOpen, Flame, Footprints, Plus, Bell, User as UserIcon, ChevronRight } from 'lucide-react';

export default function CleanDashboard() {
  const [loading, setLoading] = useState(true);
  const [steps, setSteps] = useState(6240);

  // পেজ লোড অ্যানিমেশন
  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-white">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] font-sans pb-28">
      
      {/* --- TOP BAR --- */}
      <nav className="p-6 flex justify-between items-center bg-white/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
            <Activity size={20} />
          </div>
          <span className="font-bold text-lg tracking-tight">VigorMind</span>
        </div>
        <div className="flex gap-3">
          <button className="p-2 bg-white rounded-full shadow-sm border border-slate-100"><Bell size={20} /></button>
          <button className="p-2 bg-white rounded-full shadow-sm border border-slate-100"><UserIcon size={20} /></button>
        </div>
      </nav>

      <main className="p-6">
        {/* --- WELCOME SECTION --- */}
        <motion.section 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-black text-slate-900">শুভ সকাল! ✨</h2>
          <p className="text-slate-500 mt-1">আজ আপনার প্রোডাক্টিভিটি দারুণ পর্যায়ে আছে।</p>
        </motion.section>

        {/* --- MAIN CARD (STUDY TIME) --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-indigo-600 p-8 rounded-[2.5rem] text-white shadow-2xl shadow-indigo-200 relative overflow-hidden mb-8"
        >
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-6">
              <span className="bg-white/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">Mind Focus</span>
              <BookOpen size={20} className="opacity-60" />
            </div>
            <h3 className="text-4xl font-black mb-2">০২ঘ ৩০মি</h3>
            <p className="text-indigo-100 text-sm opacity-80">আজকের পড়ার লক্ষ্য: ৮৫% পূর্ণ</p>
            
            <div className="mt-6 w-full bg-white/20 h-2.5 rounded-full">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "85%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-white rounded-full shadow-[0_0_15px_white]"
              />
            </div>
          </div>
          {/* Decorative shapes */}
          <div className="absolute top-[-20%] right-[-10%] w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        </motion.div>

        {/* --- STATS GRID --- */}
        <div className="grid grid-cols-2 gap-5">
          <StatCard 
            icon={<Footprints size={22} />} 
            label="Steps" 
            value={steps.toLocaleString()} 
            unit="কদম" 
            color="orange"
            delay={0.3}
          />
          <StatCard 
            icon={<Flame size={22} />} 
            label="Burned" 
            value="৪২০" 
            unit="kcal" 
            color="rose"
            delay={0.4}
          />
        </div>

        {/* --- RECENT ACTIVITY SECTION --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10"
        >
          <div className="flex justify-between items-center mb-5">
            <h4 className="font-bold text-lg">সাম্প্রতিক কাজ</h4>
            <button className="text-indigo-600 text-sm font-bold flex items-center">সবগুলো <ChevronRight size={16}/></button>
          </div>
          
          <div className="space-y-4">
            {['মর্নিং ওয়াক', 'গণিত প্র্যাকটিস', 'মেডিটেশন'].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 10 }}
                className="bg-white p-4 rounded-2xl flex items-center justify-between border border-slate-50 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-xl"></div>
                  <span className="font-semibold text-slate-700">{item}</span>
                </div>
                <span className="text-slate-400 text-xs">সকাল ৮:৩০</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>

      {/* --- FLOATING ACTION BUTTON --- */}
      <motion.button 
        whileTap={{ scale: 0.9 }}
        whileHover={{ rotate: 90 }}
        onClick={() => setSteps(s => s + 500)}
        className="fixed bottom-10 right-8 bg-slate-900 text-white w-16 h-16 rounded-2xl shadow-xl flex items-center justify-center z-50"
      >
        <Plus size={28} />
      </motion.button>

      {/* --- MINIMALIST NAV BAR --- */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/70 backdrop-blur-2xl border-t border-slate-100 p-6 flex justify-around items-center z-40">
        <NavIcon icon={<Activity size={24}/>} active />
        <NavIcon icon={<BookOpen size={24}/>} />
        <div className="w-10 h-10 rounded-full bg-slate-200 animate-pulse"></div>
      </nav>
    </div>
  );
}

// Helper Components
function StatCard({ icon, label, value, unit, color, delay }) {
  const colors = {
    orange: "bg-orange-50 text-orange-600 shadow-orange-100",
    rose: "bg-rose-50 text-rose-600 shadow-rose-100"
  };
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm"
    >
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${colors[color]}`}>
        {icon}
      </div>
      <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{label}</p>
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-black">{value}</span>
        <span className="text-[10px] font-bold text-slate-400">{unit}</span>
      </div>
    </motion.div>
  );
}

function NavIcon({ icon, active = false }) {
  return (
    <motion.div whileTap={{ y: -5 }} className={active ? "text-indigo-600" : "text-slate-300"}>
      {icon}
    </motion.div>
  );
            }
