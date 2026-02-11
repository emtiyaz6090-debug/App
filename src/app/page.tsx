"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Droplets, PieChart, User, Plus, Bell, Moon } from 'lucide-react';

export default function PremiumDashboard() {
  const [water, setWater] = useState(1000);
  const goal = 1200;

  return (
    <div className="min-h-screen bg-[#87CEFA] font-sans overflow-x-hidden pb-24">
      
      {/* --- TOP PROFILE SECTION --- */}
      <div className="p-6 pt-10 flex flex-col items-center">
        <div className="relative">
          <motion.div 
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            className="w-24 h-24 rounded-full border-4 border-[#C084FC] overflow-hidden bg-white shadow-xl"
          >
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Emtiyaz" alt="Avatar" />
          </motion.div>
          <div className="absolute bottom-0 right-0 bg-blue-500 p-1.5 rounded-full border-2 border-white shadow-lg">
            <Bell size={12} className="text-white" />
          </div>
        </div>
        <h2 className="mt-3 text-white text-2xl font-black">Emtiyaz 👋</h2>
        <span className="bg-blue-600/30 text-white text-[10px] px-4 py-1 rounded-full font-bold backdrop-blur-md">Premium Member</span>
      </div>

      <main className="px-6 space-y-6">
        
        {/* --- SMART REMINDER CARD (The main blue card) --- */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="bg-white/90 backdrop-blur-xl rounded-[3rem] p-8 shadow-2xl relative border border-white/40"
        >
          <p className="text-[#3B82F6] font-black text-center text-sm tracking-widest uppercase mb-8">Smart Reminder</p>
          
          <div className="relative flex justify-center items-center">
            {/* Animated Mascot */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -top-12 -left-4 w-16 h-16"
            >
              <img src="https://cdn-icons-png.flaticon.com/512/3105/3105807.png" alt="water-drop" />
              <div className="absolute left-12 top-0 bg-white p-2 rounded-2xl rounded-bl-none shadow-md border text-[8px] font-bold w-24">
                let's hydrate some water!
              </div>
            </motion.div>

            {/* Circular Progress */}
            <div className="w-52 h-52 rounded-full border-[14px] border-blue-50 flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-transparent to-blue-50/50">
               <span className="text-3xl font-black text-slate-700">{water}/{goal}ml</span>
               <div className="flex flex-col items-center mt-2">
                  <div className="w-8 h-10 border-2 border-blue-400 rounded-md relative flex items-end p-0.5 overflow-hidden">
                    <motion.div 
                      animate={{ height: `${(water/goal)*100}%` }}
                      className="w-full bg-blue-400 rounded-sm"
                    />
                  </div>
                  <span className="text-[10px] font-bold text-blue-400 mt-1">200 ml</span>
               </div>
            </div>
          </div>

          <motion.button 
            whileTap={{ scale: 0.95 }}
            onClick={() => setWater(prev => Math.min(prev + 200, goal))}
            className="mt-10 w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-2xl font-black shadow-lg shadow-blue-200"
          >
            Add 200ml
          </motion.button>
        </motion.div>

        {/* --- SLEEP GOAL CARD --- */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
          className="bg-[#A5B4FC]/40 backdrop-blur-lg p-6 rounded-[2.5rem] border border-white/20"
        >
          <p className="text-white text-[10px] font-black uppercase mb-4 opacity-80 tracking-widest">Sleep Goal</p>
          <div className="bg-[#A5B4FC]/60 p-5 rounded-[2rem] flex items-center justify-between">
            <div className="flex items-center gap-4 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <Moon size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold opacity-70 italic">Sleep Blast</p>
                <h4 className="text-xl font-black">22:00 - 06:00</h4>
              </div>
            </div>
            <div className="bg-rose-400 p-3 rounded-2xl shadow-lg shadow-rose-200/50 text-white">
               <Bell size={20} />
            </div>
          </div>
        </motion.div>

      </main>

      {/* --- GLASS NAVIGATION BAR --- */}
      <nav className="fixed bottom-6 left-6 right-6 h-20 bg-white/40 backdrop-blur-2xl rounded-[2.5rem] border border-white/30 shadow-2xl flex justify-around items-center px-4">
        <NavIcon icon={<Clock size={24}/>} />
        <NavIcon icon={<Droplets size={24}/>} active />
        <div className="w-14 h-14 bg-gradient-to-tr from-cyan-300 to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-300 border-4 border-white/50">
           <Droplets className="text-white" size={28} />
        </div>
        <NavIcon icon={<PieChart size={24}/>} />
        <NavIcon icon={<User size={24}/>} />
      </nav>
    </div>
  );
}

function NavIcon({ icon, active = false }) {
  return (
    <div className={`p-2 transition-all ${active ? "text-blue-500 scale-110" : "text-white opacity-60"}`}>
      {icon}
    </div>
  );
}
