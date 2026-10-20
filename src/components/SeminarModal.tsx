import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ExternalLink,
  Presentation,
  Users,
  Sparkles,
  Grid
} from 'lucide-react';
import { SEMINAR_PHOTOS, SeminarPhoto } from '../data/seminarData';

interface SeminarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SeminarModal: React.FC<SeminarModalProps> = ({ isOpen, onClose }) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        if (activePhotoIndex !== null) {
          setActivePhotoIndex(null);
        } else {
          onClose();
        }
      }
      if (activePhotoIndex !== null) {
        if (e.key === 'ArrowRight') {
          setActivePhotoIndex((prev) => (prev !== null ? (prev + 1) % SEMINAR_PHOTOS.length : null));
        }
        if (e.key === 'ArrowLeft') {
          setActivePhotoIndex((prev) => (prev !== null ? (prev - 1 + SEMINAR_PHOTOS.length) % SEMINAR_PHOTOS.length : null));
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activePhotoIndex, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setActivePhotoIndex(null);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const currentPhoto: SeminarPhoto | null = activePhotoIndex !== null ? SEMINAR_PHOTOS[activePhotoIndex] : null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-6xl h-[92vh] bg-slate-900 rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-700/80"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white flex items-center justify-between gap-4 border-b border-teal-800/40 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-2xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300 shrink-0 shadow-inner">
              <Presentation className="w-5 h-5 text-teal-300" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-xs font-mono text-teal-300">
                <span className="inline-flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" /> Усулдук иш-чаралар
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight truncate">
                Семинар
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {activePhotoIndex !== null && (
              <button
                type="button"
                onClick={() => setActivePhotoIndex(null)}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
                title="Бардык сүрөттөргө кайтуу"
              >
                <Grid className="w-3.5 h-3.5" />
                <span>Торчо көрүнүшү</span>
              </button>
            )}

            <button
              type="button"
              onClick={onClose}
              className="p-2 sm:p-2.5 rounded-2xl bg-slate-800/80 hover:bg-rose-500 text-slate-300 hover:text-white transition-all border border-slate-700 hover:border-rose-400"
              aria-label="Жабуу"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        {activePhotoIndex === null ? (
          /* Grid View Mode */
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-900/95 scrollbar-thin scrollbar-thumb-teal-700">
            {/* Informative Description Card */}
            <div className="mb-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-teal-950/80 via-slate-900/90 to-cyan-950/60 border border-teal-600/40 shadow-xl shadow-teal-950/30 text-slate-200">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-teal-500/20 text-teal-300 border border-teal-500/30 shrink-0 mt-0.5 shadow-sm">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="space-y-3 min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-bold tracking-wide text-white uppercase text-teal-100">
                    САНАРИПТИК БИЛИМ БЕРҮҮ — ИННОВАЦИЯЛЫК КЕЛЕЧЕККЕ КАДАМ!
                  </h3>

                  <div className="space-y-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p className="flex items-start gap-2 text-teal-200/95 font-medium bg-teal-950/50 p-2.5 rounded-xl border border-teal-800/40">
                      <span className="shrink-0 text-base">📅</span>
                      <span>
                        <strong className="text-teal-100">2026-жылдын 24-февралында</strong> Чүй облусунун Сокулук районундагы Военно-Антоновка жалпы билим берүү мектебинде информатика мугалимдери үчүн райондук усулдук семинар өткөрүлдү.
                      </span>
                    </p>

                    <p>
                      Семинарга райондогу 47 мектептин информатика мугалимдери катышып, тажрыйба алмашуу жана жаңы билим берүү технологияларын өздөштүрүү мүмкүнчүлүгүнө ээ болушту.
                    </p>

                    <p>
                      Иш-чаранын алкагында 5-класстарда Scratch, 7-класстарда Python программалоо тилдери боюнча ачык сабактар өтүлүп, жаңы 12 жылдык билим берүү системасынын талаптарына ылайык инновациялык окутуу ыкмалары көрсөтүлдү.
                    </p>

                    <p>
                      Семинар мугалимдердин санариптик компетенттүүлүгүн өнүктүрүүгө, кесиптик тажрыйбасын байытууга жана заманбап билим берүү багыттарын жайылтууга өбөлгө түздү.
                    </p>
                  </div>

                  <div className="pt-2 border-t border-teal-800/40">
                    <p className="text-xs sm:text-sm italic font-semibold text-amber-300 flex items-center gap-2">
                      <span>✨</span>
                      <span>Санариптик доордо жаңыланган мугалим — келечекке жол ачкан мугалим!</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Photos Grid - Pure Photos Without Text Underneath */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3.5 sm:gap-4">
              {SEMINAR_PHOTOS.map((photo, idx) => (
                <div
                  key={photo.id}
                  onClick={() => setActivePhotoIndex(idx)}
                  className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700/70 hover:border-teal-400 hover:shadow-xl hover:shadow-teal-900/20 transition-all duration-300 cursor-pointer aspect-[4/3]"
                >
                  <img
                    src={photo.url}
                    alt="Семинар сүрөтү"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-2xs">
                    <span className="p-2.5 rounded-full bg-teal-500 text-slate-950 font-bold shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                      <ZoomIn className="w-5 h-5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Lightbox / Full-screen View Mode */
          <div className="flex-1 flex flex-col overflow-hidden bg-slate-950">
            {/* Top Lightbox Subbar */}
            <div className="px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-xs text-slate-300 shrink-0">
              <button
                type="button"
                onClick={() => setActivePhotoIndex(null)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-teal-300 font-medium transition-colors"
              >
                <Grid className="w-3.5 h-3.5" />
                <span>Торчого кайтуу</span>
              </button>

              <div className="text-xs text-teal-300/80 font-medium">
                Семинар
              </div>

              {currentPhoto && (
                <a
                  href={currentPhoto.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors"
                >
                  <span>Толук ачуу</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            {/* Main Stage Image with Navigation */}
            <div className="relative flex-1 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
              {/* Prev Button */}
              <button
                type="button"
                onClick={() => setActivePhotoIndex((prev) => (prev !== null ? (prev - 1 + SEMINAR_PHOTOS.length) % SEMINAR_PHOTOS.length : 0))}
                className="absolute left-2 sm:left-4 z-20 p-2 sm:p-3 rounded-2xl bg-slate-900/80 hover:bg-teal-600 text-white transition-all backdrop-blur-md border border-slate-700 hover:border-teal-400 shadow-xl"
                aria-label="Мурунку сүрөт"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Main Image */}
              {currentPhoto && (
                <div className="relative max-w-full max-h-full flex items-center justify-center">
                  <img
                    src={currentPhoto.url}
                    alt="Семинар сүрөтү"
                    className="max-h-[60vh] sm:max-h-[65vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl border border-slate-800"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}

              {/* Next Button */}
              <button
                type="button"
                onClick={() => setActivePhotoIndex((prev) => (prev !== null ? (prev + 1) % SEMINAR_PHOTOS.length : 0))}
                className="absolute right-2 sm:right-4 z-20 p-2 sm:p-3 rounded-2xl bg-slate-900/80 hover:bg-teal-600 text-white transition-all backdrop-blur-md border border-slate-700 hover:border-teal-400 shadow-xl"
                aria-label="Кийинки сүрөт"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Thumbnail Bar - No text under image */}
            <div className="p-4 bg-slate-900/90 border-t border-slate-800 shrink-0">
              {/* Thumbnail Strip */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-4xl mx-auto scrollbar-thin scrollbar-thumb-teal-700 justify-start sm:justify-center">
                {SEMINAR_PHOTOS.map((photo, idx) => (
                  <button
                    key={photo.id}
                    type="button"
                    onClick={() => setActivePhotoIndex(idx)}
                    className={`relative shrink-0 w-12 h-12 rounded-xl overflow-hidden border-2 transition-all ${
                      activePhotoIndex === idx 
                        ? 'border-teal-400 scale-105 shadow-md shadow-teal-500/20' 
                        : 'border-slate-700 opacity-60 hover:opacity-100 hover:border-slate-500'
                    }`}
                  >
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
