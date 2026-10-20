import React, { useState } from 'react';
import { GraduationCap, Clock, ShieldCheck, CheckCircle2, ZoomIn, X, ExternalLink } from 'lucide-react';
import { QUALIFICATIONS_DATA } from '../data/portfolioData';
import { QualificationItem } from '../types';

export const Qualifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<QualificationItem | null>(null);

  return (
    <section id="qualifications" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-700 uppercase tracking-wider mb-2">
            <GraduationCap className="w-4 h-4 text-cyan-600" />
            <span>Кесиптик өнүгүү жана Сертификаттар галереясы</span>
            <span aria-hidden="true">·</span>
            <span>72 сааттык курстар</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Квалификацияны жогорулатуу сертификаттары
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Мугалимдин заманбап билим берүү стандарттарына, программалоо тилдерине жана 
            санариптик методикаларга ээ экендигин тастыктаган мамлекеттик үлгүдөгү расмий сертификаттар.
            Сүрөттү басып, толук көлөмдө чоңойтуп көрө аласыз.
          </p>
        </div>

        {/* Certificate Gallery Grid with Real Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {QUALIFICATIONS_DATA.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedCert(item)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-cyan-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Visual Certificate Image Container */}
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden border-b border-slate-100">
                  {item.imageUrl ? (
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-cyan-50 text-cyan-700">
                      <GraduationCap className="w-12 h-12" />
                    </div>
                  )}

                  {/* Hover Overlay with Zoom Icon */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-2.5 rounded-full bg-white/95 text-slate-900 shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                      <ZoomIn className="w-5 h-5 text-cyan-700" />
                    </span>
                  </div>

                  {/* Hours badge */}
                  <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-mono px-2.5 py-1 rounded-md shadow-xs">
                    {item.hours} саат
                  </span>

                  {item.certificateNo && (
                    <span className="absolute top-3 right-3 bg-cyan-700/90 backdrop-blur-xs text-white text-[11px] font-mono px-2 py-0.5 rounded-md shadow-xs">
                      {item.certificateNo}
                    </span>
                  )}
                </div>

                {/* Content info */}
                <div className="p-5">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2 font-mono">
                    <span className="text-cyan-700 font-semibold">Сертификат № 0{idx + 1}</span>
                    <span>{item.period}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug group-hover:text-cyan-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-3">
                    {item.description}
                  </p>

                  <p className="text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                    <span className="font-semibold text-slate-700">Уюштуруучу: </span>
                    {item.organization}
                  </p>
                </div>
              </div>

              {/* Card Bottom CTA */}
              <div className="px-5 pb-4 pt-2 flex items-center justify-between text-xs text-cyan-700 font-medium">
                <span className="group-hover:underline flex items-center gap-1">
                  <ZoomIn className="w-3.5 h-3.5" />
                  Чоңойтуп көрүү
                </span>
                <span className="text-emerald-600 font-mono text-[11px] flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Тастыкталган
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Үзгүлтүксүз кесиптик өсүү (Lifelong Learning)
              </h4>
              <p className="text-xs text-slate-500">
                Ар 3 жылда квалификацияны жогорулатуу мамлекеттик талаптарга толук ылайык келет.
              </p>
            </div>
          </div>
          <div className="shrink-0 text-xs font-mono font-semibold text-cyan-700 bg-cyan-50 px-3.5 py-2 rounded-lg border border-cyan-200/60">
            Жалпы саат: 360+ саат
          </div>
        </div>

      </div>

      {/* Lightbox Zoom Modal for Certificate */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedCert(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedCert(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white text-white hover:text-slate-950 flex items-center justify-center transition-all z-10 cursor-pointer"
            aria-label="Жабуу"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="max-w-4xl max-h-[92vh] bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Preview */}
            <div className="flex-1 flex items-center justify-center bg-black/70 p-3 max-h-[72vh] overflow-hidden">
              {selectedCert.imageUrl && (
                <img
                  src={selectedCert.imageUrl}
                  alt={selectedCert.title}
                  className="max-h-[70vh] max-w-full object-contain rounded-xl"
                  referrerPolicy="no-referrer"
                />
              )}
            </div>

            {/* Info Panel */}
            <div className="p-5 bg-slate-900 text-white border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                  <span>{selectedCert.hours} саат</span>
                  <span>·</span>
                  <span>{selectedCert.certificateNo || 'Мамлекеттик үлгү'}</span>
                  <span>·</span>
                  <span>{selectedCert.period}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {selectedCert.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1 max-w-2xl">
                  {selectedCert.organization} — {selectedCert.description}
                </p>
              </div>

              {selectedCert.imageUrl && (
                <a
                  href={selectedCert.imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl transition-colors shrink-0 flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Оригинал сүрөт</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
