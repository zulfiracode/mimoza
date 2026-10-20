import React, { useState, useEffect } from 'react';
import { 
  X, 
  FileText, 
  Download, 
  ExternalLink, 
  Calendar, 
  CheckCircle2, 
  BookOpen, 
  GraduationCap, 
  Sparkles, 
  Layers, 
  Eye, 
  ChevronRight,
  School,
  ArrowLeft,
  FileCheck
} from 'lucide-react';
import { 
  METHODOLOGICAL_DOCUMENTS, 
  METHODOLOGICAL_OVERVIEW, 
  MethodologicalDocument 
} from '../data/methodologicalDocumentsData';

interface MethodologicalDocumentsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MethodologicalDocumentsModal: React.FC<MethodologicalDocumentsModalProps> = ({ 
  isOpen, 
  onClose 
}) => {
  const [selectedDocId, setSelectedDocId] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        if (selectedDocId !== null) {
          setSelectedDocId(null);
        } else {
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedDocId, onClose]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setSelectedDocId(null);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const activeDoc: MethodologicalDocument | undefined = 
    selectedDocId ? METHODOLOGICAL_DOCUMENTS.find(d => d.id === selectedDocId) : undefined;

  const filteredDocs = filterCategory === 'all'
    ? METHODOLOGICAL_DOCUMENTS
    : METHODOLOGICAL_DOCUMENTS.filter(d => d.category.toLowerCase().includes(filterCategory.toLowerCase()));

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
        <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white flex items-center justify-between gap-4 border-b border-indigo-800/40 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 shrink-0 shadow-inner">
              <FileCheck className="w-5 h-5 text-indigo-300" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-xs font-mono text-indigo-300">
                <span className="inline-flex items-center gap-1 font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" /> {METHODOLOGICAL_OVERVIEW.badge}
                </span>
                <span className="text-slate-500">·</span>
                <span className="text-slate-400">{METHODOLOGICAL_DOCUMENTS.length} документ</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight truncate">
                Окуу-методикалык документтер
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {selectedDocId !== null && (
              <button
                type="button"
                onClick={() => setSelectedDocId(null)}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors cursor-pointer"
                title="Бардык документтерге кайтуу"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Тизмеге кайтуу</span>
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

        {/* Top Filter Bar (when in list view) */}
        {!selectedDocId && (
          <div className="px-4 sm:px-6 py-2.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between gap-2 overflow-x-auto shrink-0">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setFilterCategory('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  filterCategory === 'all'
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25'
                    : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Бардыгы ({METHODOLOGICAL_DOCUMENTS.length})</span>
              </button>
              <button
                type="button"
                onClick={() => setFilterCategory('план')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  filterCategory === 'план'
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25'
                    : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Календардык план</span>
              </button>
              <button
                type="button"
                onClick={() => setFilterCategory('стандарт')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  filterCategory === 'стандарт'
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25'
                    : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Предметтик стандарт</span>
              </button>
              <button
                type="button"
                onClick={() => setFilterCategory('ачык')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  filterCategory === 'ачык'
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25'
                    : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Ачык сабак (5-класс)</span>
              </button>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400">
              <School className="w-3.5 h-3.5 text-indigo-400" />
              <span>Военно-Антоновка ЖББМ</span>
            </div>
          </div>
        )}

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 text-slate-200">
          
          {/* VIEW MODE 1: Full Document PDF Reader */}
          {activeDoc ? (
            <div className="h-full flex flex-col space-y-4">
              {/* Document Sub-Header & Controls */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-slate-800/90 border border-slate-700/80">
                <div className="flex items-center gap-3 min-w-0">
                  <button
                    type="button"
                    onClick={() => setSelectedDocId(null)}
                    className="p-2 rounded-xl bg-slate-700 hover:bg-indigo-600 text-white transition-all cursor-pointer shrink-0"
                    title="Тизмеге кайтуу"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 text-xs font-mono text-indigo-300">
                      <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
                        {activeDoc.category}
                      </span>
                      <span>·</span>
                      <span className="text-slate-300">{activeDoc.academicYear}</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-white truncate mt-0.5">
                      {activeDoc.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={activeDoc.filePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
                    title="Жаңы терезеде ачуу"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Толук ачуу</span>
                  </a>
                  <a
                    href={activeDoc.filePath}
                    download
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors cursor-pointer shadow-md shadow-indigo-600/25"
                    title="Файлды жүктөп алуу"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Жүктөө</span>
                  </a>
                </div>
              </div>

              {/* Embedded PDF Viewer */}
              <div className="flex-1 min-h-[500px] w-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative">
                <iframe
                  src={activeDoc.filePath}
                  title={activeDoc.title}
                  className="w-full h-full border-0"
                />
              </div>

              {/* Document Key Points */}
              <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-2">
                <h4 className="text-xs font-bold font-mono uppercase text-indigo-300 tracking-wider">
                  Документтин негизги мазмуну
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeDoc.description}
                </p>
              </div>
            </div>
          ) : (
            /* VIEW MODE 2: Documents Overview Cards */
            <div className="space-y-6">
              
              {/* Introduction Banner */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/90 via-indigo-950/40 to-slate-900 border border-indigo-500/30 p-5 sm:p-7 shadow-xl">
                <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
                <div className="relative z-10 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 text-xs font-mono font-semibold flex items-center gap-1.5">
                      <FileCheck className="w-3.5 h-3.5 text-indigo-300" />
                      Окуу-методикалык база
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/30 text-xs font-mono font-semibold">
                      Информатика предмети
                    </span>
                    <span className="px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-400/30 text-xs font-mono font-semibold">
                      5–9-класстар
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                    {METHODOLOGICAL_OVERVIEW.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-indigo-200/90 font-medium">
                    {METHODOLOGICAL_OVERVIEW.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                    {METHODOLOGICAL_OVERVIEW.summaryText}
                  </p>
                </div>
              </div>

              {/* 4 Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                {filteredDocs.map((doc, index) => (
                  <div
                    key={doc.id}
                    className="p-5 sm:p-6 rounded-3xl bg-slate-800/80 border border-slate-700/80 hover:border-indigo-500/60 shadow-lg hover:shadow-indigo-500/10 transition-all flex flex-col justify-between space-y-4 group"
                  >
                    <div className="space-y-3">
                      {/* Card Badges */}
                      <div className="flex items-center justify-between gap-2">
                        <span className="px-2.5 py-1 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-mono font-semibold">
                          {doc.category}
                        </span>
                        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                          <span className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-700 text-slate-300">
                            {doc.grade}
                          </span>
                          <span className="text-slate-500">·</span>
                          <span className="text-amber-300 font-semibold">{doc.pageCount} бет</span>
                        </div>
                      </div>

                      {/* Clean Official Title */}
                      <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-indigo-200 transition-colors leading-snug">
                        {doc.title}
                      </h4>

                      {/* Description */}
                      <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                        {doc.description}
                      </p>

                      {/* Key Topics List */}
                      <div className="pt-2 border-t border-slate-700/60 space-y-1.5">
                        <div className="text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-wider">
                          Камтылган негизги багыттар:
                        </div>
                        <ul className="space-y-1">
                          {doc.keyTopics.slice(0, 3).map((topic, i) => (
                            <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-3 border-t border-slate-700/60 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedDocId(doc.id)}
                        className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white text-xs font-bold hover:brightness-110 active:scale-95 shadow-md shadow-indigo-600/20 transition-all cursor-pointer"
                      >
                        <Eye className="w-4 h-4 text-indigo-200" />
                        <span>Документти көрүү</span>
                      </button>

                      <a
                        href={doc.filePath}
                        download
                        className="p-2.5 rounded-xl bg-slate-700/80 hover:bg-slate-600 text-slate-200 hover:text-white transition-colors cursor-pointer border border-slate-600"
                        title="PDF жүктөп алуу"
                      >
                        <Download className="w-4 h-4" />
                      </a>

                      <a
                        href={doc.filePath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-slate-700/80 hover:bg-slate-600 text-slate-200 hover:text-white transition-colors cursor-pointer border border-slate-600"
                        title="Жаңы терезеде ачуу"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
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
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            <span className="font-medium text-slate-300">
              Военно-Антоновка ЖББМ — Информатика предметинин окуу-методикалык документтери
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
    </div>
  );
};
