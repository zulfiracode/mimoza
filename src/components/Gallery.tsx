import React, { useState, useEffect } from 'react';
import { 
  Images, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ExternalLink 
} from 'lucide-react';

const GALLERY_IMAGES: string[] = [
  // Жаңы кошулган сүрөттөр
  "https://i.postimg.cc/RZsbGnTV/photo-2026-10-15-22-15-00.jpg",
  "https://i.postimg.cc/9F1xFqKN/photo-2026-10-15-22-19-57.jpg",
  "https://i.postimg.cc/52YwdYVm/photo-2026-10-15-22-22-14.jpg",
  "https://i.postimg.cc/SKGRwkJR/photo-2026-10-15-17-53-20.jpg",
  "https://i.postimg.cc/fb0n9Khj/photo-2026-10-15-18-03-12.jpg",
  "https://i.postimg.cc/zfYpxSgR/photo-2026-10-15-18-03-14.jpg",
  "https://i.postimg.cc/0yR84kwg/photo-2026-10-15-16-47-12.jpg",
  "https://i.postimg.cc/zBVvrdXX/photo-2026-10-15-10-35-42.jpg",
  "https://i.postimg.cc/RF6S8NX7/photo-2026-10-15-10-36-54.jpg",
  "https://i.postimg.cc/zBgN74GR/photo-2026-10-15-10-37-16.jpg",
  "https://i.postimg.cc/1zg1Rbwh/photo-2026-10-15-10-38-19.jpg",
  "https://i.postimg.cc/TY2SYZvy/photo-2026-10-15-16-55-07.jpg",
  "https://i.postimg.cc/y8ZTVPWq/photo-2026-10-15-16-56-04.jpg",
  "https://i.postimg.cc/vBH96L88/photo-2026-10-15-16-57-26.jpg",
  "https://i.postimg.cc/t4QxzHRD/photo-2026-10-15-16-59-03.jpg",
  "https://i.postimg.cc/VN79gHVY/photo-2026-10-15-16-59-59.jpg",
  // Галереядагы мурунку сүрөттөр
  "https://i.postimg.cc/KzVzpVCY/Whats-App-Image-2026-10-14-at-15-33-48.jpg",
  "https://i.postimg.cc/q7q3v9V4/Whats-App-Image-2026-10-14-at-15-34-37.jpg",
  "https://i.postimg.cc/76pf1tYK/c875663a-f927-4e79-bd98-f8c6f829278b.jpg",
  "https://i.postimg.cc/v8cjSYGX/89ea7655-1915-449b-86ea-004f338ad781.jpg",
  "https://i.postimg.cc/Jh0c4h6T/5cb0bcb7-12ae-4c68-91ed-e4508ca7f20e.jpg",
  "https://i.postimg.cc/qvjS5z65/a2836351-407b-45bd-803f-d643a116c47b.jpg",
  "https://i.postimg.cc/gJ67jstd/827a74d6-1ffc-4a90-b20c-eaa80e23992e.jpg",
  "https://i.postimg.cc/g0xSt4Wn/ecca892f-ecac-4dd9-a64a-39c2300d5df9.jpg",
  "https://i.postimg.cc/zGB03p3w/2df1920a-9df1-43d9-b848-26c82ae9cb0b.jpg",
  "https://i.postimg.cc/ncT3HNF6/4ae26582-0b96-4460-8771-5606bf17ef94.jpg",
  "https://i.postimg.cc/V6yRG8gt/6dcd80a1-83c1-4b98-99cd-d2f49b6b25d8.jpg",
];

export const Gallery: React.FC = () => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex === null) return;
      if (e.key === 'Escape') setActivePhotoIndex(null);
      if (e.key === 'ArrowRight') {
        setActivePhotoIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_IMAGES.length : null));
      }
      if (e.key === 'ArrowLeft') {
        setActivePhotoIndex((prev) => (prev !== null ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex]);

  const activePhoto = activePhotoIndex !== null ? GALLERY_IMAGES[activePhotoIndex] : null;

  return (
    <section id="gallery" className="py-20 lg:py-24 bg-gradient-to-b from-indigo-50/70 via-purple-50/30 to-indigo-50/50 relative overflow-hidden border-b border-indigo-200/50">
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-indigo-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-100/90 border border-indigo-200 text-xs font-semibold text-indigo-900 uppercase tracking-wider mb-3 font-mono shadow-2xs">
            <Images className="w-3.5 h-3.5 text-indigo-700" />
            <span>Фото-галерея</span>
            <span className="inline-flex items-center px-2 py-0.2 rounded-full bg-indigo-600 text-white text-[11px] font-bold">
              {GALLERY_IMAGES.length} сүрөт
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Галерея
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Сүрөттү басып, толук өлчөмдө чоңойтуп көрө аласыз. Жалпы {GALLERY_IMAGES.length} сапаттуу сүрөт жайгаштырылган.
          </p>

          {/* In-Section Creative Divider Accent */}
          <div className="mt-5 flex items-center gap-3">
            <div className="h-1 w-12 bg-indigo-500 rounded-full" />
            <div className="h-1 w-4 bg-purple-400 rounded-full" />
            <div className="h-1 flex-1 max-w-xs bg-indigo-200/70 rounded-full" />
          </div>
        </div>

        {/* Pure Photo Gallery Grid (Тексттери жок, таза сүрөттөр) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-5">
          {GALLERY_IMAGES.map((imgUrl, idx) => (
            <div
              key={idx}
              onClick={() => setActivePhotoIndex(idx)}
              className="group relative bg-white rounded-2xl overflow-hidden border border-indigo-200/80 shadow-xs hover:shadow-xl hover:border-indigo-500 transition-all duration-300 cursor-pointer aspect-square flex items-center justify-center p-1"
            >
              <img
                src={imgUrl}
                alt={`Галерея сүрөтү ${idx + 1}`}
                className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Hover overlay with zoom icon */}
              <div className="absolute inset-0 bg-slate-950/35 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-2xs rounded-2xl">
                <span className="p-3 rounded-full bg-white/95 text-slate-900 shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                  <ZoomIn className="w-5 h-5 text-indigo-700" />
                </span>
              </div>

              {/* Top corner subtle number indicator */}
              <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-slate-900/60 backdrop-blur-xs text-[10px] font-mono text-white/90 opacity-0 group-hover:opacity-100 transition-opacity">
                #{idx + 1}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal (Текстсиз таза сүрөт көрүүчү) */}
      {activePhoto && activePhotoIndex !== null && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6"
          onClick={() => setActivePhotoIndex(null)}
        >
          {/* Top Control Bar */}
          <div 
            className="w-full flex items-center justify-between text-white z-20 pointer-events-none max-w-6xl"
          >
            <div className="pointer-events-auto bg-slate-900/80 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-mono border border-white/10 flex items-center gap-2">
              <span className="font-semibold text-indigo-400">Сүрөт:</span>
              <span className="font-bold text-white">{activePhotoIndex + 1} / {GALLERY_IMAGES.length}</span>
            </div>

            <div className="pointer-events-auto flex items-center gap-2">
              <a
                href={activePhoto}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-slate-900/80 hover:bg-cyan-600 text-white border border-white/10 transition-colors shadow-md"
                title="Түпнусканы жаңы терезеде ачуу"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setActivePhotoIndex(null)}
                className="p-2.5 rounded-full bg-slate-900/80 hover:bg-rose-600 text-white border border-white/10 transition-colors cursor-pointer shadow-md"
                aria-label="Жабуу"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActivePhotoIndex((activePhotoIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-indigo-600 text-white border border-white/10 transition-colors cursor-pointer z-30 shadow-lg"
            aria-label="Мурунку сүрөт"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActivePhotoIndex((activePhotoIndex + 1) % GALLERY_IMAGES.length);
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-indigo-600 text-white border border-white/10 transition-colors cursor-pointer z-30 shadow-lg"
            aria-label="Кийинки сүрөт"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Pure Fullscreen Image */}
          <div 
            className="relative flex-1 w-full max-w-5xl flex items-center justify-center p-2 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activePhoto}
              alt={`Сүрөт ${activePhotoIndex + 1}`}
              className="max-w-full max-h-[72vh] object-contain rounded-2xl shadow-2xl border border-white/10"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Bottom Thumbnail Strip for Fast Navigation */}
          <div 
            className="w-full max-w-4xl py-2 px-3 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/10 overflow-x-auto flex items-center gap-2 z-20 pointer-events-auto scrollbar-thin"
            onClick={(e) => e.stopPropagation()}
          >
            {GALLERY_IMAGES.map((thumbUrl, tIdx) => (
              <button
                key={tIdx}
                type="button"
                onClick={() => setActivePhotoIndex(tIdx)}
                className={`relative shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                  activePhotoIndex === tIdx 
                    ? 'border-indigo-400 scale-105 shadow-md shadow-indigo-500/30' 
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
                aria-label={`Сүрөткө өтүү ${tIdx + 1}`}
              >
                <img
                  src={thumbUrl}
                  alt={`Thumbnail ${tIdx + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
