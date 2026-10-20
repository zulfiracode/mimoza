import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ExternalLink,
  Laptop,
  Sparkles,
  Grid,
  Video,
  CheckCircle2,
  BookOpen,
  Award,
  Layers,
  School,
  Share2
} from 'lucide-react';
import { PISA_PHOTOS, PISA_DATA, PisaPhoto } from '../data/pisaData';

interface PisaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PisaModal: React.FC<PisaModalProps> = ({ isOpen, onClose }) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'photos' | 'video' | 'info'>('all');

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
          setActivePhotoIndex((prev) => (prev !== null ? (prev + 1) % PISA_PHOTOS.length : null));
        }
        if (e.key === 'ArrowLeft') {
          setActivePhotoIndex((prev) => (prev !== null ? (prev - 1 + PISA_PHOTOS.length) % PISA_PHOTOS.length : null));
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

  const currentPhoto: PisaPhoto | null = 
    activePhotoIndex !== null ? PISA_PHOTOS[activePhotoIndex] : null;

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
        <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white flex items-center justify-between gap-4 border-b border-sky-800/40 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-2xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-300 shrink-0 shadow-inner">
              <Laptop className="w-5 h-5 text-sky-300" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-xs font-mono text-sky-300">
                <span className="inline-flex items-center gap-1 font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" /> {PISA_DATA.badge}
                </span>
                <span className="text-slate-500">·</span>
                <span className="text-slate-400">16 сүрөт & видео</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight truncate">
                PISA–2025 Билим берүү долбоору
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
              title="Жабуу (Esc)"
              aria-label="Жабуу"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="px-4 sm:px-6 py-2.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between gap-2 overflow-x-auto shrink-0">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => { setActiveTab('all'); setActivePhotoIndex(null); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'all'
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25'
                  : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Бардыгы</span>
            </button>
            <button
              type="button"
              onClick={() => { setActiveTab('photos'); setActivePhotoIndex(null); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'photos'
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25'
                  : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>Сүрөттөр ({PISA_PHOTOS.length})</span>
            </button>
            <button
              type="button"
              onClick={() => { setActiveTab('video'); setActivePhotoIndex(null); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'video'
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25'
                  : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              <span>Видео (Shorts)</span>
            </button>
            <button
              type="button"
              onClick={() => { setActiveTab('info'); setActivePhotoIndex(null); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'info'
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25'
                  : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Маалымат & Негиздер</span>
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400">
            <School className="w-3.5 h-3.5 text-sky-400" />
            <span className="truncate max-w-[280px]">Военно-Антоновка ЖББМ</span>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 space-y-8 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 text-slate-200">
          
          {/* Main Info Hero Box (Shown on 'all' and 'info' tabs) */}
          {(activeTab === 'all' || activeTab === 'info') && (
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/90 via-sky-950/60 to-slate-900 border border-sky-500/30 p-5 sm:p-7 md:p-8 shadow-xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
              <div className="relative z-10 space-y-5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 text-xs font-mono font-semibold flex items-center gap-1.5">
                    <Laptop className="w-3.5 h-3.5 text-sky-300" />
                    PISA–2025
                  </span>
                  <span className="px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-400/30 text-xs font-mono font-semibold">
                    Санариптик сабаттуулук
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/30 text-xs font-mono font-semibold">
                    Военно-Антоновка ЖББМ
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug">
                    {PISA_DATA.title}
                  </h3>
                  <p className="text-sm sm:text-base text-sky-200/90 font-medium">
                    {PISA_DATA.subtitle}
                  </p>
                </div>

                {/* Primary User Quoted Paragraph in prominent card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/70 border border-sky-500/30 text-slate-100 text-sm sm:text-base leading-relaxed shadow-inner">
                  <p className="font-sans font-medium text-slate-100">
                    {PISA_DATA.mainDescription}
                  </p>
                </div>

                {/* 4 Pillars Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-2">
                  {PISA_DATA.pillars.map((pillar, idx) => (
                    <div 
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-800/70 border border-slate-700/80 hover:border-sky-500/40 transition-all space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-sky-400">0{idx + 1}</span>
                        <span className="text-[11px] font-semibold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20">
                          {pillar.highlight}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Metrics ribbon */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-slate-700/60">
                  {PISA_DATA.stats.map((st, i) => (
                    <div key={i} className="text-center p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                      <div className="text-lg sm:text-xl font-bold font-mono text-sky-300">
                        {st.value}
                      </div>
                      <div className="text-[11px] text-slate-400 uppercase tracking-wider font-mono mt-0.5">
                        {st.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* YouTube Video Section (Shown on 'all' and 'video' tabs) */}
          {(activeTab === 'all' || activeTab === 'video') && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold">
                    <Video className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                      PISA–2025 Даярдык видеосу
                      <span className="text-xs font-mono font-normal text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                        YouTube Shorts
                      </span>
                    </h3>
                    <p className="text-xs text-slate-400">
                      Информатика сабагындагы электрондук тапшырмаларды аткаруу процесси
                    </p>
                  </div>
                </div>

                <a
                  href={PISA_DATA.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold transition-colors self-start sm:self-center cursor-pointer shadow-md shadow-rose-600/20"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>YouTube аркылуу көрүү</span>
                </a>
              </div>

              {/* Responsive Video Container - optimized for Shorts / vertical ratio with centered player */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-slate-950/60 rounded-3xl p-4 sm:p-6 border border-slate-800">
                <div className="md:col-span-5 flex justify-center">
                  <div className="w-full max-w-[340px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700 bg-black relative">
                    <iframe
                      src={PISA_DATA.youtubeEmbedUrl}
                      title="PISA-2025 Военно-Антоновка ЖББМ"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>

                <div className="md:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                    <span>Практикалык видео отчет</span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
                    Компьютердик сабаттуулук — PISA тапшырмаларын ийгиликтүү аткаруунун пайдубалы
                  </h4>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    Бул видеодо Военно-Антоновка ЖББМдин окуучуларынын компьютердик сабаттуулугун арттыруу жана эл аралык PISA–2025 стандартындагы электрондук тапшырмаларды өз алдынча аткаруу учурлары чагылдырылган.
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-start gap-2.5 text-xs text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                      <span>Окуучулар тесттик системанын электрондук куралдары менен иштөөнү өздөштүрүшөт.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                      <span>Информатика мугалимдери ар бир окуучуга жекече багыт берип, кеңеш беришет.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                      <span>Логикалык, математикалык жана табигый-илимий маселелерди санарип чөйрөдө талдоо көндүмдөрү калыптанат.</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href={PISA_DATA.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-rose-400" />
                      <span>Түз шилтеме: youtube.com/shorts/PFRh9sJPIC0</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Photo Gallery Grid (Shown on 'all' and 'photos' tabs) */}
          {(activeTab === 'all' || activeTab === 'photos') && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
                    <Grid className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                      PISA–2025 Сүрөт галереясы
                      <span className="text-xs font-mono font-normal text-sky-300 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
                        {PISA_PHOTOS.length} сүрөт
                      </span>
                    </h3>
                    <p className="text-xs text-slate-400">
                      Сүрөттү басып, чоңойтуп жана слайд катары көрүңүз
                    </p>
                  </div>
                </div>

                <span className="text-xs font-mono text-slate-400 hidden sm:inline-block">
                  Толук экрандуу кароо үчүн басыңыз
                </span>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                {PISA_PHOTOS.map((photo, index) => (
                  <div
                    key={photo.id}
                    onClick={() => setActivePhotoIndex(index)}
                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 hover:border-sky-500/60 shadow-md hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 cursor-pointer"
                  >
                    <img
                      src={photo.url}
                      alt={photo.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-3">
                      <div className="flex items-center justify-between text-white text-xs mb-1">
                        <span className="font-mono text-[10px] text-sky-300 bg-sky-950/80 px-1.5 py-0.5 rounded border border-sky-500/40">
                          {index + 1} / {PISA_PHOTOS.length}
                        </span>
                        <ZoomIn className="w-4 h-4 text-sky-300" />
                      </div>
                      <p className="text-xs font-semibold text-white line-clamp-1">
                        {photo.title}
                      </p>
                    </div>

                    {/* Corner index badge */}
                    <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded-md bg-slate-900/80 backdrop-blur-xs text-[10px] font-mono text-slate-300 border border-slate-700/60 group-hover:opacity-0 transition-opacity">
                      {index + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Status Bar */}
        <div className="p-3 sm:p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            <span className="font-medium text-slate-300">PISA–2025: Военно-Антоновка ЖББМ</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-slate-500 font-mono">
              ESC — жабуу
            </span>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
            >
              Терезени жабуу
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal when a photo is selected */}
      {currentPhoto && activePhotoIndex !== null && (
        <div 
          className="fixed inset-0 z-60 bg-black/95 backdrop-blur-lg flex flex-col animate-in fade-in duration-150"
          onClick={() => setActivePhotoIndex(null)}
        >
          {/* Lightbox Header */}
          <div 
            className="p-4 bg-gradient-to-b from-black/80 to-transparent text-white flex items-center justify-between gap-4 z-10 shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 min-w-0">
              <span className="px-2.5 py-1 rounded-lg bg-sky-500/20 text-sky-300 border border-sky-400/30 text-xs font-mono font-semibold">
                {activePhotoIndex + 1} / {PISA_PHOTOS.length}
              </span>
              <div className="min-w-0">
                <h4 className="text-sm sm:text-base font-bold text-white truncate">
                  {currentPhoto.title}
                </h4>
                <p className="text-xs text-slate-400 truncate hidden sm:block">
                  {currentPhoto.caption}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={currentPhoto.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                title="Түпнуска сүрөттү ачуу"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setActivePhotoIndex(null)}
                className="p-2 rounded-xl bg-slate-800/80 hover:bg-rose-500 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Жабуу (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Lightbox Main Image Area */}
          <div 
            className="flex-1 relative flex items-center justify-center p-2 sm:p-6 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Button */}
            <button
              type="button"
              onClick={() => setActivePhotoIndex((prev) => (prev !== null ? (prev - 1 + PISA_PHOTOS.length) % PISA_PHOTOS.length : 0))}
              className="absolute left-2 sm:left-4 z-20 p-2 sm:p-3 rounded-full bg-slate-900/70 hover:bg-sky-600 text-white transition-all shadow-lg border border-slate-700 hover:border-sky-400 cursor-pointer"
              title="Мурунку сүрөт (Сол жебе)"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image display */}
            <div className="relative max-w-full max-h-full flex items-center justify-center">
              <img
                src={currentPhoto.url}
                alt={currentPhoto.title}
                className="max-h-[75vh] max-w-[92vw] sm:max-w-[85vw] object-contain rounded-xl shadow-2xl animate-in zoom-in-95 duration-200"
              />
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={() => setActivePhotoIndex((prev) => (prev !== null ? (prev + 1) % PISA_PHOTOS.length : 0))}
              className="absolute right-2 sm:right-4 z-20 p-2 sm:p-3 rounded-full bg-slate-900/70 hover:bg-sky-600 text-white transition-all shadow-lg border border-slate-700 hover:border-sky-400 cursor-pointer"
              title="Кийинки сүрөт (Оң жебе)"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Caption & Thumbnails Strip */}
          <div 
            className="p-3 sm:p-4 bg-gradient-to-t from-black via-black/90 to-transparent text-white space-y-3 z-10 shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-center text-xs sm:text-sm text-slate-300 font-medium max-w-2xl mx-auto px-4">
              {currentPhoto.caption}
            </p>

            {/* Thumbnails strip */}
            <div className="flex items-center justify-center gap-1.5 overflow-x-auto py-1 max-w-4xl mx-auto px-2">
              {PISA_PHOTOS.map((ph, idx) => (
                <button
                  key={ph.id}
                  type="button"
                  onClick={() => setActivePhotoIndex(idx)}
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    idx === activePhotoIndex
                      ? 'border-sky-400 scale-105 shadow-md shadow-sky-500/50'
                      : 'border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-600'
                  }`}
                >
                  <img src={ph.url} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
