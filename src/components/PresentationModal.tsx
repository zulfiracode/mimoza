import React, { useEffect, useState } from 'react';
import { 
  X, 
  ExternalLink, 
  Maximize2, 
  Sparkles, 
  BookOpen, 
  RotateCw,
  Award
} from 'lucide-react';

interface PresentationModalProps {
  isOpen: boolean;
  onClose: () => void;
  url?: string;
  title?: string;
}

export const PresentationModal: React.FC<PresentationModalProps> = ({
  isOpen,
  onClose,
  url = 'https://heyzine.com/flip-book/0b781bbac0.html',
  title = 'Педагогикалык презентация / Сертификаттар & Иштелмелер'
}) => {
  const [isLoading, setIsLoading] = useState(true);

  // ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsLoading(true);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

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
        {/* Top Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-900 via-slate-800 to-cyan-950 text-white flex items-center justify-between gap-4 border-b border-slate-700/80 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 shrink-0 shadow-inner">
              <BookOpen className="w-5 h-5 text-cyan-300" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="truncate">Интерактивдүү Heyzine Flipbook презентациясы</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold tracking-tight text-white truncate">
                {title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Direct External Link */}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/30 text-cyan-200 transition-colors cursor-pointer"
              title="Өзүнчө жаңы өтмөктө ачуу"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Өзүнчө ачуу</span>
            </a>

            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Жабуу"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Presentation Iframe Container */}
        <div className="relative flex-1 w-full bg-slate-950 overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-950/90 text-white gap-3">
              <div className="w-10 h-10 border-3 border-cyan-500 border-t-transparent rounded-full animate-spin" />
              <p className="text-xs sm:text-sm text-slate-300 font-mono">Презентация жүктөлүүдө...</p>
            </div>
          )}

          <iframe
            src={url}
            title="Heyzine Flipbook Presentation"
            className="w-full h-full border-0"
            allow="fullscreen; clipboard-read; clipboard-write"
            allowFullScreen
            onLoad={() => setIsLoading(false)}
          />
        </div>

        {/* Bottom Status / Navigation bar */}
        <div className="px-4 py-2.5 bg-slate-900 border-t border-slate-800 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-2 shrink-0">
          <div className="flex items-center gap-2 font-mono text-[11px] text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Интерактивдүү барактоо (Flip-book) жеткиликтүү</span>
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <a 
              href={url}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline flex items-center gap-1"
            >
              <span>{url}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
