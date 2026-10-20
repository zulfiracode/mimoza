import React from 'react';
import { BookOpen, Calendar, ArrowRight, Sparkles, FileText } from 'lucide-react';
import { ARTICLES_DATA, ArticleItem } from '../data/articlesData';

interface ArticlesSectionProps {
  onReadArticle: (article: ArticleItem) => void;
}

export const ArticlesSection: React.FC<ArticlesSectionProps> = ({ onReadArticle }) => {
  return (
    <section id="articles" className="py-20 lg:py-24 bg-gradient-to-b from-amber-50/60 via-orange-50/25 to-amber-50/40 relative overflow-hidden border-b border-amber-200/50">
      {/* Decorative warm ambient glow */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-amber-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/90 border border-amber-200 text-xs font-semibold text-amber-900 uppercase tracking-wider mb-3 font-mono">
              <BookOpen className="w-3.5 h-3.5 text-amber-700" />
              <span>Мугалимдин эмгектери</span>
              <span aria-hidden="true">·</span>
              <span>Илимий жана публицистикалык макалалар</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              Макалалар жана Педагогикалык эсселер
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Нурланбекова Мимоза Нурланбековнанын эл аралык жана республикалык деңгээлдеги 
              педагогикалык изденүүсүн чагылдырган 3 негизги эмгеги. Каалаган макаланын баскычын басып, толук окуй аласыз.
            </p>

            {/* In-Section Warm Divider Accent */}
            <div className="mt-5 flex items-center gap-3">
              <div className="h-1 w-12 bg-amber-500 rounded-full" />
              <div className="h-1 w-4 bg-orange-400 rounded-full" />
              <div className="h-1 flex-1 max-w-xs bg-amber-200/70 rounded-full" />
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-900 bg-amber-100/80 px-4 py-2.5 rounded-xl border border-amber-200/80">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>3 автордук макала</span>
            </div>
          </div>
        </div>

        {/* 3 Articles Grid (Кнопкалар болуп көргөзүлөт) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES_DATA.map((article, idx) => (
            <div
              key={article.id}
              className="group bg-white/95 backdrop-blur-xs hover:bg-white rounded-3xl p-7 border border-amber-200/80 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-900/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Meta row with numbered badge */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-4 pb-3 border-b border-amber-100">
                  <span className="font-bold text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-md border border-amber-200">
                    {idx + 1}-МАКАЛА
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Calendar className="w-3.5 h-3.5 text-amber-600" />
                    <span>{article.date}</span>
                  </div>
                </div>

                <div className="text-[11px] font-semibold text-amber-700 mb-2">
                  {article.category}
                </div>

                {/* Article Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2.5 leading-snug group-hover:text-amber-800 transition-colors line-clamp-3">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-amber-900/80 font-medium mb-3 line-clamp-2">
                  {article.subtitle}
                </p>

                {/* Excerpt */}
                <p className="text-xs text-slate-600 leading-relaxed mb-6 line-clamp-4">
                  {article.excerpt}
                </p>
              </div>

              {/* Action Button (Кнопка: басканда макала ачылат) */}
              <div className="pt-4 border-t border-amber-100">
                <button
                  type="button"
                  onClick={() => onReadArticle(article)}
                  className="w-full py-3 px-4 rounded-xl bg-slate-900 group-hover:bg-amber-700 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-sm transition-all duration-200 cursor-pointer active:scale-98"
                >
                  <FileText className="w-4 h-4 text-amber-300" />
                  <span>Макаланы толук окуу</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
