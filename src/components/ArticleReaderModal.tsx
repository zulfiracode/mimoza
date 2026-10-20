import React, { useState, useEffect } from 'react';
import { X, BookOpen, Copy, Check, Printer, Calendar, User, ChevronLeft, ChevronRight, Share2 } from 'lucide-react';
import { ArticleItem, ARTICLES_DATA } from '../data/articlesData';

interface ArticleReaderModalProps {
  article: ArticleItem | null;
  onClose: () => void;
  onSelectArticle: (article: ArticleItem) => void;
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({ 
  article, 
  onClose,
  onSelectArticle 
}) => {
  const [copied, setCopied] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!article) return null;

  const currentIdx = ARTICLES_DATA.findIndex((a) => a.id === article.id);

  const handleCopy = () => {
    navigator.clipboard.writeText(`${article.title}\n\n${article.fullText}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handlePrev = () => {
    const prevIdx = (currentIdx - 1 + ARTICLES_DATA.length) % ARTICLES_DATA.length;
    onSelectArticle(ARTICLES_DATA[prevIdx]);
  };

  const handleNext = () => {
    const nextIdx = (currentIdx + 1) % ARTICLES_DATA.length;
    onSelectArticle(ARTICLES_DATA[nextIdx]);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden border border-slate-200 shadow-2xl flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Sticky Bar */}
        <div className="p-4 sm:p-5 bg-white border-b border-slate-200 flex items-center justify-between gap-4 z-10 shrink-0">
          {/* Article tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar max-w-md sm:max-w-xl">
            {ARTICLES_DATA.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectArticle(item)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  item.id === article.id
                    ? 'bg-slate-900 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                Макала 0{idx + 1}
              </button>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setFontSize(fontSize === 'normal' ? 'large' : 'normal')}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors text-xs font-bold font-mono"
              title="Шрифт өлчөмүн чоңойтуу/кичирейтүү"
            >
              {fontSize === 'normal' ? 'A+' : 'A-'}
            </button>

            <button
              type="button"
              onClick={handleCopy}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors text-xs flex items-center gap-1"
              title="Макаланын текстин көчүрүү"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors text-xs hidden sm:block"
              title="Басып чыгаруу"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Жабуу"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Article Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 md:p-12 space-y-6 text-slate-800">
          
          {/* Header Info */}
          <div className="border-b border-slate-200 pb-6 space-y-3">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-cyan-700">
              <span className="bg-cyan-50 px-2.5 py-1 rounded-md border border-cyan-200/60 font-semibold">
                {article.category}
              </span>
              <span>·</span>
              <span>{article.date}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-cyan-800 font-medium">
              {article.subtitle}
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 font-mono">
              <div className="flex items-center gap-2">
                <User className="w-3.5 h-3.5 text-slate-400" />
                <span className="font-semibold text-slate-700">{article.author}</span>
                <span>·</span>
                <span>{article.role}</span>
              </div>

              {article.publicationUrl && (
                <a
                  href={article.publicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-medium text-xs shadow-xs transition-colors"
                  title="interspp.com порталынан ачуу"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>interspp.com журналынан ачуу</span>
                  <Share2 className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>

          {/* Full Text View */}
          <div className={`leading-relaxed space-y-4 text-slate-700 whitespace-pre-line ${
            fontSize === 'large' ? 'text-base sm:text-lg' : 'text-sm sm:text-base'
          }`}>
            {article.fullText}
          </div>

          {/* Bottom Article Navigation */}
          <div className="pt-8 border-t border-slate-200 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={handlePrev}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Мурунку макала</span>
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 transition-colors cursor-pointer"
            >
              <span>Кийинки макала</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-mono">
          <span>Нурланбекова Мимоза Нурланбековна · Илимий эмгектер</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-900 text-white font-medium hover:bg-cyan-700 transition-colors cursor-pointer"
          >
            Жабуу
          </button>
        </div>

      </div>
    </div>
  );
};
