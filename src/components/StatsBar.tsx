import React from 'react';
import { Calendar, Briefcase, Award, GraduationCap, School } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const stats = [
    {
      label: 'Педагогикалык стажы',
      value: '10 жыл 1 ай',
      subtext: 'Үзгүлтүксүз билим берүү',
      icon: Calendar,
      color: 'text-cyan-600',
    },
    {
      label: 'Жалпы эмгек стажы',
      value: '18 жыл 1 ай',
      subtext: 'Кесиптик тажрыйба',
      icon: Briefcase,
      color: 'text-indigo-600',
    },
    {
      label: 'Сыйлыктары',
      value: '12+ наам',
      subtext: 'Медалдар, грамоталар',
      icon: Award,
      color: 'text-amber-600',
    },
    {
      label: 'Квалификация',
      value: '72+ саат',
      subtext: 'Кесиптик курстар',
      icon: GraduationCap,
      color: 'text-emerald-600',
    },
    {
      label: 'Билим берүү мекемеси',
      value: 'Военно-Антоновка',
      subtext: 'Жалпы билим берүү мектеби',
      icon: School,
      color: 'text-slate-800',
    },
  ];

  return (
    <section className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border-y border-indigo-900/60 shadow-md relative z-10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:divide-x divide-slate-800/80">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx} 
                className={`flex flex-col items-center text-center justify-center py-1 sm:py-1.5 ${
                  idx !== 0 ? 'lg:pl-4' : ''
                } ${idx === 4 ? 'col-span-2 md:col-span-1' : ''}`}
              >
                <div className="flex items-center justify-center gap-1.5 mb-1.5">
                  <span className="p-1 rounded-md bg-white/10 backdrop-blur-xs">
                    <Icon className={`w-3.5 h-3.5 shrink-0 ${stat.color}`} />
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-slate-300 uppercase tracking-wider line-clamp-1">
                    {stat.label}
                  </span>
                </div>
                <div className="text-base sm:text-lg font-extrabold text-white tracking-tight font-mono">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 font-medium line-clamp-1">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

