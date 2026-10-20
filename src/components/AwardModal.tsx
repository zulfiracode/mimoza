import React from 'react';
import { X, Award, CheckCircle2, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { AwardItem } from '../types';

interface AwardModalProps {
  award: AwardItem | null;
  onClose: () => void;
}

export const AwardModal: React.FC<AwardModalProps> = ({ award, onClose }) => {
  if (!award) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-amber-50 text-amber-600">
              <Award className="w-5 h-5" />
            </span>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-700 font-semibold">
                {award.badge} · {award.year}-жыл
              </span>
              <h3 className="text-lg font-bold text-slate-900 leading-snug">
                {award.title}
              </h3>
              {award.subtitle && (
                <p className="text-xs text-slate-500 mt-0.5">
                  {award.subtitle}
                </p>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Жабуу"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          
          {/* Certificate / Medal image */}
          {award.imageUrl && (
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 aspect-video max-h-72 flex items-center justify-center">
              <img
                src={award.imageUrl}
                alt={award.title}
                className="max-h-full max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          )}

          {/* Description */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2">
              Сыйлык тууралуу маалымат:
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {award.description}
            </p>
          </div>

          {/* Organization */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 text-xs">
            <span className="font-semibold text-slate-800 block mb-1">Ыйгаруучу орган / Уюм:</span>
            <span className="text-slate-600">{award.issuer}</span>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2.5">
              Негизги өзгөчөлүктөрү:
            </h4>
            <div className="space-y-2">
              {award.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-500">
            Военно-Антоновка жалпы билим берүү мектеби
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold rounded-lg bg-slate-900 text-white hover:bg-cyan-700 transition-colors cursor-pointer"
          >
            Түшүнүктүү
          </button>
        </div>

      </div>
    </div>
  );
};
