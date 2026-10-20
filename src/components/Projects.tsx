import React, { useState } from 'react';
import { FolderGit2, Check, ExternalLink, Code2, Users, Layers, Sparkles } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(PROJECTS_DATA[0].id);
  const activeProject = PROJECTS_DATA.find((p) => p.id === activeTab) || PROJECTS_DATA[0];

  return (
    <section id="projects" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-700 uppercase tracking-wider mb-2">
            <FolderGit2 className="w-4 h-4 text-cyan-600" />
            <span>Педагогикалык долбоорлор</span>
            <span aria-hidden="true">·</span>
            <span>Иш тажрыйба</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Ишке ашырылган долбоорлор жана усулдук иштелмелер
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Информатика сабагын практика менен айкалыштырган, окуучулардын логикасын жана 
            санариптик көндүмдөрүн өстүргөн автордук жана мектептик демилгелер.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Projects Navigation List */}
          <div className="lg:col-span-5 space-y-3">
            {PROJECTS_DATA.map((proj) => {
              const isSelected = proj.id === activeTab;
              return (
                <button
                  key={proj.id}
                  onClick={() => setActiveTab(proj.id)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-200 border cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md translate-x-1'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200/80'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                    <span className={isSelected ? 'text-cyan-300' : 'text-cyan-700'}>
                      {proj.category}
                    </span>
                    <span className={isSelected ? 'text-slate-400' : 'text-slate-500'}>
                      {proj.duration}
                    </span>
                  </div>
                  <h3 className={`text-base font-bold leading-snug ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                    {proj.title}
                  </h3>
                  <p className={`text-xs mt-1.5 line-clamp-2 ${isSelected ? 'text-slate-300' : 'text-slate-600'}`}>
                    {proj.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Project Spotlight Panel */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200/90 rounded-3xl p-8 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/80 pb-5 mb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-700 font-semibold">
                  {activeProject.category} · {activeProject.duration}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                  {activeProject.title}
                </h3>
              </div>
              <div className="text-xs font-mono text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
                Катышуучулар: {activeProject.audience}
              </div>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              {activeProject.description}
            </p>

            {/* Key Outcomes / Results */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-3">
                Жеткен натыйжалар жана жыйынтыктар:
              </h4>
              <div className="space-y-2.5">
                {activeProject.outcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-200/60 text-xs sm:text-sm text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools Used (Clean unboxed tags) */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-3">
                Колдонулган санариптик куралдар:
              </h4>
              <div className="flex flex-wrap items-center gap-2">
                {activeProject.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3 py-1 bg-white border border-slate-200 rounded-lg text-slate-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
