import React from 'react';
import { Play, Youtube, ExternalLink, Video, Sparkles, Film } from 'lucide-react';

interface VideoItem {
  id: string;
  title: string;
  subtitle: string;
  type: 'full' | 'short';
  url: string;
  embedUrl: string;
}

const VIDEOS: VideoItem[] = [
  {
    id: 'nZ_vg1YkI9Y',
    title: 'Информатика сабагы жана педагогикалык тажрыйба',
    subtitle: 'Ачык сабак, окутуу усулдары жана санариптик көндүмдөрдү өнүктүрүү',
    type: 'full',
    url: 'https://youtu.be/nZ_vg1YkI9Y?si=Ux7GURRhGVeZKj8F',
    embedUrl: 'https://www.youtube.com/embed/nZ_vg1YkI9Y',
  },
  {
    id: 'PFRh9sJPIC0',
    title: 'Сабактан көз ирмем #1',
    subtitle: 'Окуучулар менен практикалык иш',
    type: 'short',
    url: 'https://youtube.com/shorts/PFRh9sJPIC0?si=wY57U7B0ny6RX009',
    embedUrl: 'https://www.youtube.com/embed/PFRh9sJPIC0',
  },
  {
    id: 'euZ65nPvisE',
    title: 'Сабактан көз ирмем #2',
    subtitle: 'Интерактивдүү тапшырмалар жана мотивация',
    type: 'short',
    url: 'https://youtube.com/shorts/euZ65nPvisE?si=bh_akYYxysEFCNIY',
    embedUrl: 'https://www.youtube.com/embed/euZ65nPvisE',
  },
  {
    id: 'Uz6vCWDkUKk',
    title: 'Сабактан көз ирмем #3',
    subtitle: 'Санариптик чөйрө жана мектеп турмушу',
    type: 'short',
    url: 'https://youtube.com/shorts/Uz6vCWDkUKk?si=T1ElRLhZ8Afx0evp',
    embedUrl: 'https://www.youtube.com/embed/Uz6vCWDkUKk',
  },
];

export const VideoSection: React.FC = () => {
  const mainVideo = VIDEOS.find(v => v.type === 'full') || VIDEOS[0];
  const shorts = VIDEOS.filter(v => v.type === 'short');

  return (
    <section id="videos" className="py-20 lg:py-24 bg-gradient-to-b from-rose-50/70 via-red-50/25 to-rose-50/40 relative overflow-hidden border-b border-rose-200/50">
      {/* Decorative ambient lights */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-rose-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-red-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100/90 border border-rose-200 text-xs font-semibold text-rose-900 uppercase tracking-wider mb-3 font-mono">
              <Youtube className="w-3.5 h-3.5 text-red-600" />
              <span>Видео сабактар</span>
              <span aria-hidden="true">·</span>
              <span>YouTube материалдар</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              Видео сабактар жана Көз ирмемдер
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Информатика сабагындагы заманбап окутуу ыкмалары, практикалык иштер жана педагогикалык ишмердүүлүктүн 
              кызыктуу видео материалдары. Түздөн-түз ушул жерден көрүп же YouTube аркылуу ача аласыз.
            </p>

            {/* In-Section Creative Red/Rose Divider Accent */}
            <div className="mt-5 flex items-center gap-3">
              <div className="h-1 w-12 bg-red-600 rounded-full" />
              <div className="h-1 w-4 bg-rose-400 rounded-full" />
              <div className="h-1 flex-1 max-w-xs bg-rose-200/70 rounded-full" />
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-2 text-xs font-mono text-rose-900 bg-rose-100/80 px-4 py-2.5 rounded-xl border border-rose-200/80">
            <Sparkles className="w-3.5 h-3.5 text-red-600" />
            <span>1 видеосабак + 3 Shorts</span>
          </div>
        </div>

        {/* 1. Featured Main Video Showcase */}
        <div className="mb-14">
          <div className="bg-white/95 backdrop-blur-xs rounded-3xl p-6 sm:p-8 border border-rose-200/80 shadow-lg shadow-rose-950/5">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              
              {/* Video Player Container */}
              <div className="w-full lg:w-3/5">
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 border-2 border-rose-200 shadow-md">
                  <iframe
                    src={mainVideo.embedUrl}
                    title={mainVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Video Info & Direct Action */}
              <div className="w-full lg:w-2/5 flex flex-col justify-between space-y-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-red-50 text-red-700 text-xs font-bold border border-red-200 mb-3">
                    <Video className="w-3.5 h-3.5" />
                    Негизги видеосабак
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 leading-snug">
                    {mainVideo.title}
                  </h3>
                  <p className="text-sm sm:text-base text-rose-900/80 leading-relaxed mb-4">
                    {mainVideo.subtitle}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Бул видеодо сабактын түзүлүшү, окуучулардын интерактивдүү катышуусу жана маалыматтык технологияларды колдонуунун артыкчылыктары камтылган.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={mainVideo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 active:scale-98 text-white font-bold text-xs shadow-md shadow-red-600/20 transition-all cursor-pointer"
                  >
                    <Youtube className="w-4 h-4 text-white" />
                    <span>YouTube'до көрүү</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 2. YouTube Shorts Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-red-100 text-red-700">
                <Film className="w-4 h-4" />
              </span>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                Кыскача видео көз ирмемдер (YouTube Shorts)
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-500 hidden sm:inline">
              3 кыска видео
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {shorts.map((short, idx) => (
              <div
                key={short.id}
                className="group bg-white/95 backdrop-blur-xs rounded-3xl p-4 sm:p-5 border border-rose-200/80 hover:border-red-400 hover:shadow-xl hover:shadow-rose-950/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Shorts Player Container (Vertical 9:16 Aspect) */}
                  <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 shadow-inner mb-4">
                    <iframe
                      src={short.embedUrl}
                      title={short.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                      loading="lazy"
                    />
                  </div>

                  {/* Short Details */}
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-md border border-red-100">
                      <Play className="w-3 h-3 fill-red-600" />
                      Shorts #{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      YouTube
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 mb-1 leading-snug group-hover:text-red-700 transition-colors">
                    {short.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {short.subtitle}
                  </p>
                </div>

                {/* Direct Link Action */}
                <div className="mt-4 pt-3 border-t border-rose-100">
                  <a
                    href={short.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-red-600 hover:text-white text-slate-700 font-semibold text-xs flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer"
                  >
                    <Youtube className="w-3.5 h-3.5 text-red-600 group-hover:text-white" />
                    <span>YouTube'до ачуу</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
