"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Signup() {
  const [form, setForm] = useState({ name: "", phone: "", password: "" });

  const handleSignup = async () => {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(form),
    });
    if (res.ok) alert("অ্যাকাউন্ট তৈরি হয়েছে! এখন লগইন করুন।");
    else alert("কিছু ভুল হয়েছে!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full max-w-md space-y-6">
        <h1 className="text-3xl font-black text-center">নতুন অ্যাকাউন্ট ✍️</h1>
        <input 
          type="text" placeholder="আপনার নাম" 
          className="w-full p-4 border rounded-2xl bg-zinc-50"
          onChange={(e) => setForm({...form, name: e.target.value})}
        />
        <input 
          type="tel" placeholder="মোবাইল নাম্বার" 
          className="w-full p-4 border rounded-2xl bg-zinc-50"
          onChange={(e) => setForm({...form, phone: e.target.value})}
        />
        <input 
          type="password" placeholder="পাসওয়ার্ড" 
          className="w-full p-4 border rounded-2xl bg-zinc-50"
          onChange={(e) => setForm({...form, password: e.target.value})}
        />
        <button 
          onClick={handleSignup}
          className="w-full bg-orange-500 text-white font-bold py-4 rounded-2xl shadow-lg active:scale-95 transition-all"
        >
          সাইন-আপ করুন
        </button>
      </motion.div>
    </div>
  );
}