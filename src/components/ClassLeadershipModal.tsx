import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ExternalLink,
  GraduationCap,
  Users,
  Sparkles,
  Grid,
  BookOpen,
  Heart,
  Video,
  CheckCircle2,
  Calendar,
  Layers,
  Award
} from 'lucide-react';
import { CLASS_LEADERSHIP_PHOTOS, CLASS_LEADERSHIP_DATA, ClassLeadershipPhoto } from '../data/classLeadershipData';

interface ClassLeadershipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClassLeadershipModal: React.FC<ClassLeadershipModalProps> = ({ isOpen, onClose }) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'directions' | 'photos' | 'video'>('all');

  // Keyboard navigation for lightbox
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
          setActivePhotoIndex((prev) => (prev !== null ? (prev + 1) % CLASS_LEADERSHIP_PHOTOS.length : null));
        }
        if (e.key === 'ArrowLeft') {
          setActivePhotoIndex((prev) => (prev !== null ? (prev - 1 + CLASS_LEADERSHIP_PHOTOS.length) % CLASS_LEADERSHIP_PHOTOS.length : null));
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

  const currentPhoto: ClassLeadershipPhoto | null = 
    activePhotoIndex !== null ? CLASS_LEADERSHIP_PHOTOS[activePhotoIndex] : null;

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
        <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white flex items-center justify-between gap-4 border-b border-indigo-800/40 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 shrink-0 shadow-inner">
              <GraduationCap className="w-5 h-5 text-indigo-300" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-xs font-mono text-indigo-300">
                <span className="inline-flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" /> {CLASS_LEADERSHIP_DATA.badge}
                </span>
                <span className="text-slate-500">·</span>
                <span className="text-slate-400">24 сүрөт & видео</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight truncate">
                Класс жетекчилик
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {activePhotoIndex !== null && (
              <button
                type="button"
                onClick={() => setActivePhotoIndex(null)}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors cursor-pointer"
                title="Бардык маалыматтарга кайтуу"
              >
                <Grid className="w-3.5 h-3.5" />
                <span>Торчо көрүнүшү</span>
              </button>
            )}

            <button
              type="button"
              onClick={onClose}
              className="p-2 sm:p-2.5 rounded-2xl bg-slate-800/80 hover:bg-rose-500 text-slate-300 hover:text-white transition-all border border-slate-700 hover:border-rose-400 cursor-pointer"
              aria-label="Жабуу"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Filter Sub-tabs */}
        {activePhotoIndex === null && (
          <div className="px-4 sm:px-6 py-2.5 bg-slate-950/60 border-b border-slate-800 flex items-center gap-2 overflow-x-auto text-xs shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-xl font-medium transition-all shrink-0 cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              Баары биригип
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('directions')}
              className={`px-3.5 py-1.5 rounded-xl font-medium transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'directions'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>6 Тарбиялык багыт</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('photos')}
              className={`px-3.5 py-1.5 rounded-xl font-medium transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'photos'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>Сүрөттөр (24)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('video')}
              className={`px-3.5 py-1.5 rounded-xl font-medium transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'video'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <Video className="w-3.5 h-3.5 text-rose-400" />
              <span>Видео-материал</span>
            </button>
          </div>
        )}

        {/* Modal Body */}
        {activePhotoIndex === null ? (
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-slate-900/95 space-y-8 scrollbar-thin scrollbar-thumb-indigo-700">
            
            {/* 1. Header Banner & Introduction Card */}
            {(activeTab === 'all' || activeTab === 'directions') && (
              <div className="p-5 sm:p-7 rounded-3xl bg-gradient-to-br from-indigo-950/90 via-slate-900/90 to-purple-950/70 border border-indigo-600/40 shadow-xl shadow-indigo-950/40 text-slate-200">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 shrink-0 shadow-sm mt-1">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="space-y-4 flex-1 min-w-0">
                    <div>
                      <span className="text-xs font-mono font-bold text-indigo-300 tracking-wider uppercase">
                        Педагогикалык концепция жана практика
                      </span>
                      <h3 className="text-lg sm:text-2xl font-bold tracking-tight text-white mt-1">
                        {CLASS_LEADERSHIP_DATA.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-indigo-200/90 mt-1 font-medium">
                        {CLASS_LEADERSHIP_DATA.subtitle}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-indigo-950/60 border border-indigo-800/40 text-sm text-slate-200 leading-relaxed">
                      <p>{CLASS_LEADERSHIP_DATA.intro}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. Six Key Activity Directions */}
            {(activeTab === 'all' || activeTab === 'directions') && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                    <Layers className="w-5 h-5 text-indigo-400" />
                    <span>Тарбиялык ишмердүүлүктүн 6 негизги багыты</span>
                  </h4>
                  <span className="text-xs font-mono text-indigo-300 bg-indigo-950 px-3 py-1 rounded-full border border-indigo-800">
                    1-6 багыттар
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {CLASS_LEADERSHIP_DATA.directions.map((dir) => (
                    <div 
                      key={dir.number}
                      className="p-5 rounded-2xl bg-slate-800/90 border border-slate-700/80 hover:border-indigo-500/60 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-sm">
                            {dir.number}
                          </span>
                          <h5 className="text-sm sm:text-base font-bold text-white leading-snug">
                            {dir.title}
                          </h5>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {dir.desc}
                        </p>

                        {/* If topics list exists (Direction 2) */}
                        {dir.topics && (
                          <div className="mt-3.5 pt-3.5 border-t border-slate-700/80 space-y-1.5">
                            <span className="text-[11px] font-bold text-indigo-300 uppercase tracking-wider block">
                              Тарбиялык сааттардын темалары:
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                              {dir.topics.map((t, idx) => (
                                <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-300 bg-slate-900/60 px-2.5 py-1 rounded-lg border border-slate-700/50">
                                  <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
                                  <span className="truncate">{t}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. Expected Results & Mission Cards */}
            {(activeTab === 'all' || activeTab === 'directions') && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-950/60 to-slate-900 border border-emerald-700/40 text-slate-200">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <h5 className="font-bold text-white text-sm sm:text-base">Күтүлгөн натыйжалар</h5>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                    {CLASS_LEADERSHIP_DATA.expectedResults}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-950/60 to-slate-900 border border-amber-700/40 text-slate-200">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <Heart className="w-5 h-5 text-amber-400 shrink-0" />
                    <h5 className="font-bold text-white text-sm sm:text-base">Кесиптик максатым жана принциптер</h5>
                  </div>
                  <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed">
                    {CLASS_LEADERSHIP_DATA.mission}
                  </p>
                </div>
              </div>
            )}

            {/* 4. YouTube Video Section */}
            {(activeTab === 'all' || activeTab === 'video') && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                    <Video className="w-5 h-5 text-rose-400" />
                    <span>Класс жетекчилик иш-чарасынын видеосу</span>
                  </h4>
                  <a
                    href={CLASS_LEADERSHIP_DATA.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 text-xs font-semibold border border-rose-500/30 transition-colors"
                  >
                    <span>YouTube'дан ачуу</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-slate-950 border border-slate-700 shadow-2xl">
                  <iframe
                    src={CLASS_LEADERSHIP_DATA.youtubeEmbedUrl}
                    title="Класс жетекчинин тарбиялык ишмердүүлүгү видео"
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}

            {/* 5. 24 Photos Grid Section */}
            {(activeTab === 'all' || activeTab === 'photos') && (
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Grid className="w-5 h-5 text-indigo-400" />
                    <h4 className="text-base sm:text-lg font-bold text-white">
                      Класс жетекчилик фото-отчет
                    </h4>
                    <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-0.5 rounded-full border border-slate-700">
                      24 сүрөт
                    </span>
                  </div>
                  <span className="text-xs text-indigo-300 hidden sm:inline">
                    Чоңойтуп көрүү үчүн каалаган сүрөттү басыңыз
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4">
                  {CLASS_LEADERSHIP_PHOTOS.map((photo, idx) => (
                    <div
                      key={photo.id}
                      onClick={() => setActivePhotoIndex(idx)}
                      className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700/70 hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-900/30 transition-all duration-300 cursor-pointer aspect-[4/3]"
                    >
                      <img
                        src={photo.url}
                        alt={`Класс жетекчилик иш-чарасы #${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-2xs">
                        <span className="p-2.5 rounded-full bg-indigo-500 text-white font-bold shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                          <ZoomIn className="w-5 h-5" />
                        </span>
                      </div>
                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-slate-950/70 text-[10px] font-mono text-white backdrop-blur-xs">
                        #{idx + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        ) : (
          /* Lightbox / Full-screen View Mode */
          <div className="flex-1 flex flex-col overflow-hidden bg-slate-950">
            {/* Top Lightbox Subbar */}
            <div className="px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-xs text-slate-300 shrink-0">
              <button
                type="button"
                onClick={() => setActivePhotoIndex(null)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-indigo-300 font-medium transition-colors cursor-pointer"
              >
                <Grid className="w-3.5 h-3.5" />
                <span>Торчого кайтуу</span>
              </button>

              <div className="font-mono text-slate-400">
                Сүрөт <span className="font-bold text-white">{activePhotoIndex + 1}</span> / {CLASS_LEADERSHIP_PHOTOS.length}
              </div>

              {currentPhoto && (
                <a
                  href={currentPhoto.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                  title="Оригинал өлчөмүндө ачуу"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Оригинал</span>
                </a>
              )}
            </div>

            {/* Main Image Stage */}
            <div className="flex-1 relative flex items-center justify-center p-3 sm:p-6 overflow-hidden select-none">
              {currentPhoto && (
                <img
                  src={currentPhoto.url}
                  alt={`Класс жетекчилик сүрөтү #${activePhotoIndex + 1}`}
                  className="max-h-full max-w-full object-contain rounded-xl shadow-2xl animate-in zoom-in-95 duration-200"
                  referrerPolicy="no-referrer"
                />
              )}

              {/* Prev Button */}
              <button
                type="button"
                onClick={() => setActivePhotoIndex((prev) => (prev !== null ? (prev - 1 + CLASS_LEADERSHIP_PHOTOS.length) % CLASS_LEADERSHIP_PHOTOS.length : 0))}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-slate-900/80 hover:bg-indigo-600 text-white border border-slate-700/80 transition-all shadow-xl backdrop-blur-xs cursor-pointer active:scale-90"
                aria-label="Мурунку сүрөт"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={() => setActivePhotoIndex((prev) => (prev !== null ? (prev + 1) % CLASS_LEADERSHIP_PHOTOS.length : 0))}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-slate-900/80 hover:bg-indigo-600 text-white border border-slate-700/80 transition-all shadow-xl backdrop-blur-xs cursor-pointer active:scale-90"
                aria-label="Кийинки сүрөт"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Thumbnail Strip */}
            <div className="px-3 py-2 bg-slate-900/90 border-t border-slate-800 flex items-center gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-indigo-700 shrink-0">
              {CLASS_LEADERSHIP_PHOTOS.map((p, idx) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActivePhotoIndex(idx)}
                  className={`relative w-12 h-10 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    activePhotoIndex === idx
                      ? 'border-indigo-400 scale-105 shadow-md'
                      : 'border-transparent opacity-50 hover:opacity-100'
                  }`}
                >
                  <img
                    src={p.url}
                    alt={`Кичине сүрөт #${idx + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
