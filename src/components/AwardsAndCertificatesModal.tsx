import React, { useState, useEffect } from 'react';
import { 
  X, 
  Award, 
  Trophy, 
  GraduationCap, 
  FileCheck2, 
  ZoomIn, 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  Building2, 
  ExternalLink,
  Search,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { OFFICIAL_DOCUMENTS, OfficialDocumentItem } from '../data/awardsAndCertificatesData';

interface AwardsAndCertificatesModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: 'all' | 'award' | 'gramota';
  onOpenPresentation?: () => void;
}

export const AwardsAndCertificatesModal: React.FC<AwardsAndCertificatesModalProps> = ({
  isOpen,
  onClose,
  initialCategory = 'all',
  onOpenPresentation
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'award' | 'gramota'>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [zoomDocument, setZoomDocument] = useState<OfficialDocumentItem | null>(null);

  // Synchronize initial category
  useEffect(() => {
    if (isOpen) {
      setActiveCategory(initialCategory);
    }
  }, [isOpen, initialCategory]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (zoomDocument) {
          setZoomDocument(null);
        } else if (isOpen) {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, zoomDocument, onClose]);

  // Prevent background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Filter documents
  const filteredDocs = OFFICIAL_DOCUMENTS.filter((doc) => {
    const matchesCat = activeCategory === 'all' || doc.category === activeCategory;
    const matchesSearch = 
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.exactText.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.year.includes(searchQuery);
    return matchesCat && matchesSearch;
  });

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-6xl max-h-[92vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-200/90"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-slate-900 via-slate-800 to-cyan-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-700/60 shrink-0">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 shrink-0 shadow-inner">
              <Trophy className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Расмий сыйлыктар жыйнагы</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                Сыйлыктар жана Ардак грамоталар
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              type="button"
              onClick={onClose}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Жабуу"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="p-4 sm:px-6 bg-slate-50 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-3 shrink-0">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200/70 border border-slate-200'
              }`}
            >
              Бардыгы ({OFFICIAL_DOCUMENTS.length})
            </button>
            <button
              onClick={() => setActiveCategory('award')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === 'award'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200/70 border border-slate-200'
              }`}
            >
              🏆 Сыйлыктар & Медалдар ({OFFICIAL_DOCUMENTS.filter(d => d.category === 'award').length})
            </button>
            <button
              onClick={() => setActiveCategory('gramota')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === 'gramota'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200/70 border border-slate-200'
              }`}
            >
              📜 Ардак грамоталар ({OFFICIAL_DOCUMENTS.filter(d => d.category === 'gramota').length})
            </button>

            {onOpenPresentation ? (
              <button
                type="button"
                onClick={onOpenPresentation}
                className="px-3.5 py-1.5 text-xs font-bold rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 hover:brightness-110 text-white shadow-xs transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5"
                title="Сертификаттар жана презентация (Flip-book)"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Сертификаттар / Презентация 📖</span>
              </button>
            ) : (
              <a
                href="https://heyzine.com/flip-book/0b781bbac0.html"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 text-xs font-bold rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 hover:brightness-110 text-white shadow-xs transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Сертификаттар / Презентация ↗</span>
              </a>
            )}
          </div>

          {/* Quick search input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Документ же текст боюнча издөө..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-1.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-800 placeholder-slate-400"
            />
          </div>
        </div>

        {/* Content Body: Scrollable Cards Grid */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6 bg-slate-100/60">
          {filteredDocs.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
              <p className="text-slate-500 text-sm">Издөө боюнча документтер табылган жок.</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="mt-3 text-xs text-cyan-600 font-semibold hover:underline"
              >
                Чыпкаларды тазалоо
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredDocs.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-cyan-400 transition-all duration-200 flex flex-col justify-between overflow-hidden"
                >
                  <div className="p-5 sm:p-6 flex flex-col gap-4">
                    {/* Header: Badges & Year */}
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <span className="font-mono font-semibold px-2.5 py-1 rounded-lg bg-cyan-50 text-cyan-800 border border-cyan-200/70">
                        {item.badge}
                      </span>
                      <span className="font-mono text-slate-500 flex items-center gap-1 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {item.year}-жыл
                      </span>
                    </div>

                    {/* Document Title */}
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h3>

                    {/* Issuer & Number */}
                    <div className="space-y-1 text-xs text-slate-600 border-l-2 border-slate-200 pl-3">
                      <p className="flex items-start gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                        <span><strong>Ыйгарган:</strong> {item.issuer}</span>
                      </p>
                      {item.docNumber && (
                        <p className="font-mono text-[11px] text-slate-500">
                          <strong>Каттоо №:</strong> {item.docNumber}
                        </p>
                      )}
                      {item.hours && (
                        <p className="font-mono text-[11px] text-slate-500">
                          <strong>Көлөмү:</strong> {item.hours}
                        </p>
                      )}
                    </div>

                    {/* Scanned Document Preview Image */}
                    <div 
                      onClick={() => setZoomDocument(item)}
                      className="group relative rounded-xl overflow-hidden bg-slate-50 border border-slate-200 cursor-pointer aspect-[16/10] flex items-center justify-center shadow-inner"
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 text-slate-900 text-xs font-semibold shadow-md">
                          <ZoomIn className="w-4 h-4 text-cyan-700" />
                          <span>Сүрөттү чоңойтуу</span>
                        </span>
                      </div>
                    </div>

                    {/* EXACT PRINTED TEXT BOX (Тиешелүү тексти) */}
                    <div className="mt-1 bg-amber-50/50 border border-amber-200/70 rounded-xl p-3.5 sm:p-4 text-xs">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-900 uppercase tracking-wider mb-2 font-mono">
                        <FileCheck2 className="w-4 h-4 text-amber-600" />
                        <span>Документтин түп нускасындагы так тексти:</span>
                      </div>
                      <div className="text-slate-800 font-sans leading-relaxed whitespace-pre-line bg-white/80 p-3 rounded-lg border border-amber-100 font-normal">
                        {item.exactText}
                      </div>
                      {item.signatory && (
                        <p className="mt-2 text-[11px] text-slate-600 italic">
                          <strong>Кол койгон:</strong> {item.signatory}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Card bottom bar */}
                  <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-slate-500 font-mono">
                      Түп нуска тастыкталган
                    </span>
                    <button
                      type="button"
                      onClick={() => setZoomDocument(item)}
                      className="inline-flex items-center gap-1 text-cyan-700 hover:text-cyan-800 font-semibold cursor-pointer"
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Сүрөтүн ачуу</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Bottom Footer */}
        <div className="p-4 sm:px-6 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 shrink-0">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Бардык документтер жана тексттер жүктөлгөн расмий сертификаттар менен толук дал келет.</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors cursor-pointer w-full sm:w-auto"
          >
            Жабуу
          </button>
        </div>
      </div>

      {/* Lightbox Modal for Full Resolution Document Inspection */}
      {zoomDocument && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-60 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150"
          onClick={() => setZoomDocument(null)}
        >
          <div 
            className="relative max-w-4xl max-h-[92vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Controls */}
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 flex items-center gap-2">
              <a
                href={zoomDocument.imageUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="p-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
                title="Жүктөп алуу же жаңы өтмөктө ачуу"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
              <button
                type="button"
                onClick={() => setZoomDocument(null)}
                className="p-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
                aria-label="Жабуу"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Image */}
            <div className="rounded-2xl overflow-hidden bg-black/40 border border-white/20 shadow-2xl max-h-[75vh] flex items-center justify-center">
              <img
                src={zoomDocument.imageUrl}
                alt={zoomDocument.title}
                className="max-h-[75vh] max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Caption & exact text snippet */}
            <div className="mt-3 text-center text-white max-w-2xl px-4">
              <h4 className="text-base font-bold">{zoomDocument.title}</h4>
              <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                {zoomDocument.exactText.split('\n')[0]}
              </p>
              <p className="text-[11px] text-cyan-300 font-mono mt-0.5">
                {zoomDocument.issuer} ({zoomDocument.year}-ж.)
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
