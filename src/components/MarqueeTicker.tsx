import React from 'react';
import { Sparkles, Trophy, Award, Laptop, Star } from 'lucide-react';

export const MarqueeTicker: React.FC = () => {
  const items = [
    { text: "ЖЫЛ МУГАЛИМИ — 2027", icon: Sparkles, accent: true },
    { text: "ИНФОРМАТИКА МУГАЛИМИ", icon: Laptop },
    { text: "ЛУЧШИЙ ПЕДАГОГ ЦЕНТРАЛЬНОЙ АЗИИ (2025)", icon: Trophy },
    { text: "«YURT FAXRI» ЭЛ АРАЛЫК СЫЙЛЫГЫ (2025)", icon: Award },
    { text: "ЖЫЛ МУГАЛИМИ — 2027", icon: Star, accent: true },
    { text: "«ЗЭЭНДҮҮ МУГАЛИМ - 2026» ТӨШ БЕЛГИСИ", icon: Award },
    { text: "«МЫКТЫ КЛАСС ЖЕТЕКЧИ - 2026»", icon: Trophy },
    { text: "ВОЕННО-АНТОНОВКА МЕКТЕП-ГИМНАЗИЯСЫ", icon: Laptop },
  ];

  return (
    <div className="relative overflow-hidden bg-slate-900 border-y border-cyan-500/30 py-3 text-white select-none">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/40 via-slate-900 to-indigo-950/40 pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex animate-marquee items-center whitespace-nowrap">
        {/* Render twice for seamless loop */}
        {[...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="inline-flex items-center gap-3 mx-6 font-mono text-xs sm:text-sm tracking-wider uppercase font-semibold"
            >
              <Icon
                className={`w-4 h-4 ${
                  item.accent ? 'text-amber-400 animate-pulse' : 'text-cyan-400'
                }`}
              />
              <span
                className={
                  item.accent
                    ? 'text-amber-300 font-extrabold tracking-widest drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]'
                    : 'text-slate-200'
                }
              >
                {item.text}
              </span>
              <span className="text-cyan-600/60 text-base" aria-hidden="true">
                ✦
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
