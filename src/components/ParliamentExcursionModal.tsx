import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ExternalLink,
  Landmark,
  Sparkles,
  Grid,
  Video,
  CheckCircle2,
  BookOpen,
  Calendar,
  Layers,
  Heart,
  Quote,
  School,
  Play
} from 'lucide-react';
import { 
  PARLIAMENT_PHOTOS, 
  PARLIAMENT_VIDEOS, 
  PARLIAMENT_DATA, 
  ParliamentPhoto,
  ParliamentVideo 
} from '../data/parliamentExcursionData';

interface ParliamentExcursionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ParliamentExcursionModal: React.FC<ParliamentExcursionModalProps> = ({ 
  isOpen, 
  onClose 
}) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'videos' | 'photos' | 'essay'>('all');
  const [activeVideoId, setActiveVideoId] = useState<string>(PARLIAMENT_VIDEOS[0].id);

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
          setActivePhotoIndex((prev) => (prev !== null ? (prev + 1) % PARLIAMENT_PHOTOS.length : null));
        }
        if (e.key === 'ArrowLeft') {
          setActivePhotoIndex((prev) => (prev !== null ? (prev - 1 + PARLIAMENT_PHOTOS.length) % PARLIAMENT_PHOTOS.length : null));
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

  const currentPhoto: ParliamentPhoto | null = 
    activePhotoIndex !== null ? PARLIAMENT_PHOTOS[activePhotoIndex] : null;

  const currentSelectedVideo: ParliamentVideo = 
    PARLIAMENT_VIDEOS.find(v => v.id === activeVideoId) || PARLIAMENT_VIDEOS[0];

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
        <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-900 via-teal-950/70 to-slate-900 text-white flex items-center justify-between gap-4 border-b border-teal-800/40 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-2xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300 shrink-0 shadow-inner">
              <Landmark className="w-5 h-5 text-teal-300" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-xs font-mono text-teal-300">
                <span className="inline-flex items-center gap-1 font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" /> {PARLIAMENT_DATA.badge}
                </span>
                <span className="text-slate-500">·</span>
                <span className="text-slate-400">3 сүрөт & 6 видео</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight truncate">
                Жогорку Кеңешке экскурсия
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
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25'
                  : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Бардыгы</span>
            </button>
            <button
              type="button"
              onClick={() => { setActiveTab('videos'); setActivePhotoIndex(null); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'videos'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25'
                  : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              <span>Видео-хроника ({PARLIAMENT_VIDEOS.length})</span>
            </button>
            <button
              type="button"
              onClick={() => { setActiveTab('photos'); setActivePhotoIndex(null); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'photos'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25'
                  : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>Сүрөттөр ({PARLIAMENT_PHOTOS.length})</span>
            </button>
            <button
              type="button"
              onClick={() => { setActiveTab('essay'); setActivePhotoIndex(null); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'essay'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25'
                  : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Макала & Баяндама</span>
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400">
            <Calendar className="w-3.5 h-3.5 text-teal-400" />
            <span>{PARLIAMENT_DATA.date}</span>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 space-y-8 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 text-slate-200">
          
          {/* Main Info Hero Box (Shown on 'all' and 'essay' tabs) */}
          {(activeTab === 'all' || activeTab === 'essay') && (
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/90 via-teal-950/40 to-slate-900 border border-teal-500/30 p-5 sm:p-7 md:p-8 shadow-xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
              <div className="relative z-10 space-y-6">
                
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-mono font-semibold flex items-center gap-1.5">
                    <Landmark className="w-3.5 h-3.5 text-teal-300" />
                    КР Жогорку Кеңеши
                  </span>
                  <span className="px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-400/30 text-xs font-mono font-semibold">
                    {PARLIAMENT_DATA.date}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/30 text-xs font-mono font-semibold">
                    20+ окуучулар
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug">
                    {PARLIAMENT_DATA.title}
                  </h3>
                  <p className="text-sm sm:text-base text-teal-200/90 font-medium">
                    {PARLIAMENT_DATA.lead}
                  </p>
                </div>

                {/* Primary Narrative Card */}
                <div className="relative p-5 sm:p-6 rounded-2xl bg-slate-950/75 border border-teal-500/30 text-slate-100 text-sm sm:text-base leading-relaxed shadow-inner space-y-4">
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-teal-500/20 pointer-events-none" />
                  
                  <p className="text-slate-200 leading-relaxed">
                    Мен <strong>Нурланбекова Мимоза Нурланбековна</strong> бул сапар 20 дан (жыйырмадан ашык) окуучуларым менен Кыргыз Республикасынын Жогорку Кеңешинин депутаттары менен жолугушууга жана таанып-билүү экскурсиясына баруу мүмкүнчүлүгүнө ээ болдук.
                  </p>

                  <p className="text-slate-300 leading-relaxed">
                    Бул сапар жөн гана экскурсия эмес, жаш муундун жарандык аң-сезимин ойготкон, өлкөнүн башкаруу системасы менен жакындан тааныштырган маанилүү тажрыйба болду.
                  </p>

                  <div className="p-3.5 rounded-xl bg-teal-950/60 border border-teal-800/40 text-xs sm:text-sm text-teal-200 leading-relaxed">
                    <strong>Ыраазычылык:</strong> Бизге бул иш-чараны уюштурууга көмөк көрсөткөн Сокулук райондук администрациясынын уюштуруу жана маалымат бөлүмүнүн башчысынын жардамчысы <strong>Маниясов Мирбек</strong> мырзага терең ыраазычылык билдиребиз.
                  </div>

                  <p className="text-slate-300 leading-relaxed">
                    Окуучуларыбыз Сокулук райондук округунун депутаты <strong>Эдита Тайгараевна</strong> айым менен жолугушуп, коомдогу көйгөйлөр, аларды чечүү жолдору жана келечектеги максаттар тууралуу суроолорун беришти. Ал тургай, келечекте депутат болуу үчүн кандай аракеттерди көрүү керектигине чейин кызыгышты. Сапарда кесиптешим <strong>Жусупахматова Билимгүл Уланбековна</strong> да бирге болду.
                  </p>

                  {/* Inspiring Quotes Highlight */}
                  <div className="pt-3 border-t border-teal-800/40 space-y-2">
                    {PARLIAMENT_DATA.quotes.map((quote, qIdx) => (
                      <div key={qIdx} className="flex items-start gap-2.5 text-amber-300 font-semibold text-xs sm:text-sm italic">
                        <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{quote}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-1">
                  {PARLIAMENT_DATA.highlights.map((item, idx) => (
                    <div 
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-800/70 border border-slate-700/80 hover:border-teal-500/40 transition-all space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-teal-400">0{idx + 1}</span>
                        <span className="text-[11px] font-semibold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20">
                          {item.badge}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Stats Ribbon */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-slate-700/60">
                  {PARLIAMENT_DATA.stats.map((st, i) => (
                    <div key={i} className="text-center p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                      <div className="text-lg sm:text-xl font-bold font-mono text-teal-300">
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

          {/* Videos Section (Shown on 'all' and 'videos' tabs) */}
          {(activeTab === 'all' || activeTab === 'videos') && (
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold">
                    <Video className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                      Видео-хроника: Жогорку Кеңеште
                      <span className="text-xs font-mono font-normal text-teal-300 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                        {PARLIAMENT_VIDEOS.length} Shorts видео
                      </span>
                    </h3>
                    <p className="text-xs text-slate-400">
                      Экскурсиянын, жолугушуулардын жана жыйын залынын жандуу көз ирмемдери
                    </p>
                  </div>
                </div>

                <a
                  href={currentSelectedVideo.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold transition-colors self-start sm:self-center cursor-pointer shadow-md shadow-rose-600/20"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>YouTube аркылуу көрүү</span>
                </a>
              </div>

              {/* Main Featured Video + Playlist Selector */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start bg-slate-950/70 rounded-3xl p-4 sm:p-6 border border-slate-800">
                {/* Active Video Player (9:16 Shorts ratio) */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="w-full max-w-[340px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700 bg-black relative">
                    <iframe
                      key={currentSelectedVideo.videoId}
                      src={currentSelectedVideo.embedUrl}
                      title={currentSelectedVideo.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>

                {/* Playlist of all 6 Shorts */}
                <div className="lg:col-span-7 space-y-3">
                  <div className="flex items-center justify-between pb-1">
                    <span className="text-xs font-mono uppercase text-teal-400 font-bold tracking-wider">
                      Бардык 6 видео-материал:
                    </span>
                    <span className="text-xs text-slate-400">
                      Тандоо үчүн басыңыз
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {PARLIAMENT_VIDEOS.map((video, idx) => {
                      const isSelected = video.id === activeVideoId;
                      return (
                        <div
                          key={video.id}
                          onClick={() => setActiveVideoId(video.id)}
                          className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                            isSelected
                              ? 'bg-teal-950/80 border-teal-500/80 shadow-md shadow-teal-950/50'
                              : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                          }`}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 font-bold text-xs ${
                              isSelected
                                ? 'bg-teal-500 text-white'
                                : 'bg-slate-800 text-slate-400'
                            }`}>
                              {isSelected ? <Play className="w-3.5 h-3.5 fill-current" /> : idx + 1}
                            </div>
                            <div className="min-w-0">
                              <h5 className={`text-xs sm:text-sm font-bold truncate ${
                                isSelected ? 'text-white' : 'text-slate-200'
                              }`}>
                                {video.title}
                              </h5>
                              <p className="text-[11px] text-slate-400 truncate">
                                {video.desc}
                              </p>
                            </div>
                          </div>

                          <a
                            href={video.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-600 text-slate-300 hover:text-white transition-colors shrink-0"
                            title="YouTube'да ачуу"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      );
                    })}
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
                  <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold">
                    <Grid className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                      Экскурсиянын сүрөт галереясы
                      <span className="text-xs font-mono font-normal text-teal-300 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                        {PARLIAMENT_PHOTOS.length} сүрөт
                      </span>
                    </h3>
                    <p className="text-xs text-slate-400">
                      Сүрөттү басып, толук өлчөмдө жана слайд түрүндө көрүңүз
                    </p>
                  </div>
                </div>

                <span className="text-xs font-mono text-slate-400 hidden sm:inline-block">
                  Чоңойтуу үчүн басыңыз
                </span>
              </div>

              {/* 3 Photos Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {PARLIAMENT_PHOTOS.map((photo, index) => (
                  <div
                    key={photo.id}
                    onClick={() => setActivePhotoIndex(index)}
                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 hover:border-teal-500/60 shadow-md hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 cursor-pointer"
                  >
                    <img
                      src={photo.url}
                      alt={photo.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4">
                      <div className="flex items-center justify-between text-white text-xs mb-1">
                        <span className="font-mono text-[10px] text-teal-300 bg-teal-950/80 px-1.5 py-0.5 rounded border border-teal-500/40">
                          {index + 1} / {PARLIAMENT_PHOTOS.length}
                        </span>
                        <ZoomIn className="w-4 h-4 text-teal-300" />
                      </div>
                      <p className="text-xs font-semibold text-white line-clamp-1">
                        {photo.title}
                      </p>
                      <p className="text-[11px] text-slate-300 line-clamp-1">
                        {photo.caption}
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
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="font-medium text-slate-300">
              КР Жогорку Кеңешине экскурсия — 22-май, 2026
            </span>
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
              <span className="px-2.5 py-1 rounded-lg bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-mono font-semibold">
                {activePhotoIndex + 1} / {PARLIAMENT_PHOTOS.length}
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
              onClick={() => setActivePhotoIndex((prev) => (prev !== null ? (prev - 1 + PARLIAMENT_PHOTOS.length) % PARLIAMENT_PHOTOS.length : 0))}
              className="absolute left-2 sm:left-4 z-20 p-2 sm:p-3 rounded-full bg-slate-900/70 hover:bg-teal-600 text-white transition-all shadow-lg border border-slate-700 hover:border-teal-400 cursor-pointer"
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
              onClick={() => setActivePhotoIndex((prev) => (prev !== null ? (prev + 1) % PARLIAMENT_PHOTOS.length : 0))}
              className="absolute right-2 sm:right-4 z-20 p-2 sm:p-3 rounded-full bg-slate-900/70 hover:bg-teal-600 text-white transition-all shadow-lg border border-slate-700 hover:border-teal-400 cursor-pointer"
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
            <div className="flex items-center justify-center gap-2 overflow-x-auto py-1 max-w-4xl mx-auto px-2">
              {PARLIAMENT_PHOTOS.map((ph, idx) => (
                <button
                  key={ph.id}
                  type="button"
                  onClick={() => setActivePhotoIndex(idx)}
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    idx === activePhotoIndex
                      ? 'border-teal-400 scale-105 shadow-md shadow-teal-500/50'
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
