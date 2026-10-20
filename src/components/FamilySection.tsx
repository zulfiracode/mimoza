import React, { useState } from 'react';
import { Heart, Users, Sparkles, ZoomIn, X, ChevronLeft, ChevronRight, Home, HeartHandshake } from 'lucide-react';
import { TEACHER_INFO } from '../data/portfolioData';

interface FamilySectionProps {
  onOpenPhotoLightbox?: (photoUrl: string) => void;
}

export const FamilySection: React.FC<FamilySectionProps> = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const familyPhotos = TEACHER_INFO.familyPhotos || [
    "https://i.postimg.cc/zXd4FCRn/photo-2026-10-17-10-42-56.jpg",
    "https://i.postimg.cc/Tw6snqRt/Whats-App-Image-2026-10-14-at-20-14-30-(1).jpg",
    "https://i.postimg.cc/KjsQpn2h/Whats-App-Image-2026-10-14-at-20-14-30.jpg"
  ];

  const photoCaptions = [
    {
      title: "Үй-бүлөлүк жылуулук жана бакыт",
      description: "Ар бир ийгиликтин башаты болгон сүйүктүү үй-бүлөм",
    },
    {
      title: "Мээримдүү эне жана ынтымактуу очок",
      description: "3 баланын (1 уул, 2 кыз) сүйүктүү энеси",
    },
    {
      title: "Ишенимдүү тирек жана колдоо",
      description: "2014-жылдан бери кесиптик жолумдагы демөөрчү тирегим",
    },
  ];

  const activePhoto = selectedPhotoIndex !== null ? familyPhotos[selectedPhotoIndex] : null;

  return (
    <section id="family" className="py-20 lg:py-24 bg-gradient-to-b from-rose-50/70 via-orange-50/25 to-rose-50/40 relative overflow-hidden border-b border-rose-200/50">
      {/* Decorative ambient glow orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-rose-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100/90 border border-rose-200 text-xs font-semibold text-rose-900 uppercase tracking-wider mb-3 font-mono">
              <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600" />
              <span>Менин үй-бүлөм</span>
              <span aria-hidden="true">·</span>
              <span>Күч-кубат берүүчү очогум</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              Менин үй-бүлөм
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed italic">
              «Үй-бүлө — бул күч-кубат бере турган ыйык очок, ал эми жолдошум — кесиптик жолумдагы ишенимдүү тирегим. 
              Менин ар бир жетишкендигимде үй-бүлөмдүн ишеними жана колдоосу чоң роль ойнойт».
            </p>

            {/* In-Section Rose/Orange Divider Accent */}
            <div className="mt-5 flex items-center gap-3">
              <div className="h-1 w-12 bg-rose-500 rounded-full" />
              <div className="h-1 w-4 bg-orange-400 rounded-full" />
              <div className="h-1 flex-1 max-w-xs bg-rose-200/70 rounded-full" />
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-2 text-xs font-mono text-rose-900 bg-rose-100/80 px-4 py-2.5 rounded-xl border border-rose-200/80">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span>3 үй-бүлөлүк фото</span>
          </div>
        </div>

        {/* 3 Family Photos Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {familyPhotos.map((imgUrl, idx) => {
            const caption = photoCaptions[idx] || photoCaptions[0];
            return (
              <div
                key={idx}
                onClick={() => setSelectedPhotoIndex(idx)}
                className="group bg-white/95 backdrop-blur-xs rounded-3xl overflow-hidden border border-rose-200/80 hover:border-rose-400 hover:shadow-xl hover:shadow-rose-950/10 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                {/* Image Container with Hover Zoom */}
                <div className="relative aspect-4/3 sm:aspect-square w-full overflow-hidden bg-rose-100/50">
                  <img
                    src={imgUrl}
                    alt={caption.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle hover overlay with zoom button */}
                  <div className="absolute inset-0 bg-slate-950/25 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-2xs">
                    <span className="p-3 rounded-full bg-white/90 text-rose-600 shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                      <ZoomIn className="w-5 h-5" />
                    </span>
                  </div>
                  {/* Badge */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-[11px] font-bold text-rose-800 border border-rose-200 shadow-2xs">
                    Фото #{idx + 1}
                  </div>
                </div>

                {/* Caption and description */}
                <div className="p-5 sm:p-6 bg-white flex-1 flex flex-col justify-between border-t border-rose-100">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-1 group-hover:text-rose-700 transition-colors">
                      {caption.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {caption.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-rose-100 flex items-center justify-between text-[11px] text-rose-600 font-semibold">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                      Чоңойтуп көрүү
                    </span>
                    <span className="text-slate-400 font-mono">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Heartfelt Family Philosophy & Support Banner */}
        <div className="bg-white/95 backdrop-blur-xs rounded-3xl p-6 sm:p-8 border border-rose-200/80 shadow-md shadow-rose-950/5">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <span className="p-3.5 rounded-2xl bg-rose-100 text-rose-700 shrink-0 hidden sm:flex">
                <HeartHandshake className="w-7 h-7" />
              </span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">
                  Үй-бүлөлүк бакыт жана педагогикалык ийгилик
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                  {TEACHER_INFO.familyStatus} Жолдошу анын мугалимдик кесибин, изденүүсүн жана билим берүүгө болгон сүйүүсүн 
                  дайыма терең урматтап, республикалык жана эл аралык сынактарга катышуусуна толук колдоо көрсөтүп келет.
                </p>
              </div>
            </div>

            <div className="shrink-0 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose-50 border border-rose-200 text-xs font-bold text-rose-800 font-mono">
                <Home className="w-4 h-4 text-rose-600" />
                2014-жылдан бери
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox Modal for Family Photos */}
      {activePhoto && selectedPhotoIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          {/* Top Control Bar */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-20 pointer-events-none">
            <div className="pointer-events-auto bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-mono border border-white/10 flex items-center gap-2">
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              <span>Менин үй-бүлөм: {selectedPhotoIndex + 1} / {familyPhotos.length}</span>
            </div>

            <div className="pointer-events-auto flex items-center gap-2">
              <button
                type="button"
                onClick={() => setSelectedPhotoIndex(null)}
                className="p-2 rounded-full bg-slate-900/80 hover:bg-rose-600 text-white border border-white/10 transition-colors cursor-pointer"
                title="Жабуу (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Prev/Next Buttons */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhotoIndex((prev) => (prev !== null ? (prev - 1 + familyPhotos.length) % familyPhotos.length : null));
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-rose-600 text-white border border-white/10 transition-colors z-20 cursor-pointer hidden sm:flex"
            title="Мурунку сүрөт"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhotoIndex((prev) => (prev !== null ? (prev + 1) % familyPhotos.length : null));
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-rose-600 text-white border border-white/10 transition-colors z-20 cursor-pointer hidden sm:flex"
            title="Кийинки сүрөт"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Image Container */}
          <div 
            className="relative max-w-4xl max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activePhoto}
              alt="Үй-бүлөлүк сүрөт"
              className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
      )}
    </section>
  );
};
