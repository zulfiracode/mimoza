import React, { useState } from 'react';
import { Trophy, Award, Medal, Check, ExternalLink, Calendar, MapPin, Sparkles } from 'lucide-react';
import { AWARDS_DATA } from '../data/portfolioData';
import { AwardItem } from '../types';

interface AchievementsProps {
  onSelectAward: (award: AwardItem) => void;
}

export const Achievements: React.FC<AchievementsProps> = ({ onSelectAward }) => {
  const [filter, setFilter] = useState<'all' | 'international' | 'republican' | 'district' | 'school'>('all');

  const filteredAwards = filter === 'all' 
    ? AWARDS_DATA 
    : AWARDS_DATA.filter(item => {
        if (filter === 'district') return item.type === 'district' || item.type === 'school';
        return item.type === filter;
      });

  return (
    <section id="awards" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-700 uppercase tracking-wider mb-2">
              <Trophy className="w-4 h-4 text-amber-500" />
              <span>Сыйлыктар жана Жетишкендиктер</span>
              <span aria-hidden="true">·</span>
              <span>2024–2026</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              Педагогикалык сыйлыктар жана медалдар
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl">
              Эл аралык, республикалык жана райондук деңгээлде таанылган кесиптик ийгиликтер, 
              мамлекеттик дипломдор жана жеке төш белгилери.
            </p>
          </div>

          {/* Interactive Filter Tabs (functional segmented control) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 rounded-xl border border-slate-200/80 overflow-x-auto max-w-full">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                filter === 'all'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Бардыгы ({AWARDS_DATA.length})
            </button>
            <button
              onClick={() => setFilter('international')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                filter === 'international'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Эл аралык
            </button>
            <button
              onClick={() => setFilter('republican')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                filter === 'republican'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Республикалык
            </button>
            <button
              onClick={() => setFilter('district')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                filter === 'district'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Райондук & Мектептик
            </button>
          </div>
        </div>

        {/* Featured Top 2 International Awards Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {AWARDS_DATA.slice(0, 2).map((award) => (
            <div
              key={award.id}
              onClick={() => onSelectAward(award)}
              className="group relative bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-950 text-white rounded-3xl p-8 border border-slate-700/60 shadow-lg hover:shadow-cyan-900/20 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle cyber background line accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all" />

              <div>
                {/* Clean unboxed metadata */}
                <div className="flex items-center gap-2 text-xs text-cyan-300 font-mono mb-4">
                  <span className="flex items-center gap-1">
                    <Trophy className="w-3.5 h-3.5 text-amber-400" />
                    <span>{award.badge}</span>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{award.year}-жыл</span>
                  <span aria-hidden="true">·</span>
                  <span>{award.issuer.split('(')[1]?.replace(')', '') || 'Эл аралык'}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors leading-snug">
                  {award.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {award.description}
                </p>

                {/* Key Highlights list */}
                <div className="space-y-2 mb-6">
                  {award.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer with Image thumbnail & CTA */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {award.imageUrl && (
                    <img 
                      src={award.imageUrl} 
                      alt={award.title} 
                      className="w-12 h-12 rounded-lg object-cover border border-white/20 group-hover:scale-105 transition-transform" 
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div>
                    <p className="text-xs font-semibold text-white">Расмий документ & Медаль</p>
                    <p className="text-[11px] text-slate-400">Чоңойтуп көрүү үчүн басыңыз</p>
                  </div>
                </div>

                <div className="w-9 h-9 rounded-xl bg-white/10 group-hover:bg-cyan-500 text-white flex items-center justify-center transition-all">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Regular Awards Grid (3-in-a-row layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAwards.slice(2).map((award) => (
            <div
              key={award.id}
              onClick={() => onSelectAward(award)}
              className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-cyan-400/80 hover:shadow-md transition-all duration-200 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Unboxed metadata */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3 font-mono">
                  <span className="font-semibold text-cyan-700">{award.badge}</span>
                  <span>{award.year}-жыл</span>
                </div>

                <h4 className="text-base font-bold text-slate-900 mb-2 group-hover:text-cyan-700 transition-colors leading-snug">
                  {award.title}
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                  {award.description}
                </p>

                <div className="text-[11px] text-slate-500 border-t border-slate-200/60 pt-3 mb-4">
                  <span className="font-semibold text-slate-700">Ыйгарган: </span>
                  <span>{award.issuer}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between">
                <span className="text-xs font-medium text-cyan-700 group-hover:underline">
                  Толук кароо
                </span>
                <span className="text-slate-400 group-hover:text-cyan-600 transition-colors">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
