import React, { useEffect } from 'react';
import { 
  X, 
  Trophy, 
  Medal, 
  Sparkles, 
  Award, 
  CheckCircle2, 
  Calendar, 
  Quote, 
  Users, 
  TrendingUp, 
  BookOpen, 
  Target,
  Flame,
  ArrowRight
} from 'lucide-react';
import { OLYMPIAD_DATA, OLYMPIAD_STUDENTS } from '../data/olympiadData';

interface OlympiadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OlympiadModal: React.FC<OlympiadModalProps> = ({ isOpen, onClose }) => {
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll
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

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-5xl h-[90vh] bg-slate-900 rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-amber-500/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-900 via-amber-950/70 to-slate-900 text-white flex items-center justify-between gap-4 border-b border-amber-800/40 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0 shadow-inner">
              <Trophy className="w-5 h-5 text-amber-300" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-300">
                <span className="inline-flex items-center gap-1 font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" /> {OLYMPIAD_DATA.badge}
                </span>
                <span className="text-slate-500">·</span>
                <span className="text-slate-400">{OLYMPIAD_DATA.year}</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight truncate">
                Олимпиада — Информатика
              </h2>
            </div>
          </div>

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

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 space-y-7 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 text-slate-200">
          
          {/* Main Hero Card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/90 via-amber-950/40 to-slate-900 border border-amber-500/30 p-5 sm:p-7 md:p-8 shadow-xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
            
            <div className="relative z-10 space-y-5">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-mono font-semibold flex items-center gap-1.5">
                  <Trophy className="w-3.5 h-3.5 text-amber-300" />
                  Райондук деңгээл
                </span>
                <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 text-xs font-mono font-semibold">
                  Информатика предмети
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/30 text-xs font-mono font-semibold">
                  {OLYMPIAD_DATA.year}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug">
                  {OLYMPIAD_DATA.title}
                </h3>
                <p className="text-sm sm:text-base text-amber-200/90 font-medium italic">
                  {OLYMPIAD_DATA.quote}
                </p>
              </div>

              {/* Special Achievement Notice */}
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
                <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Өзгөчө сыймык: </strong>
                  Олимпиаданын райондук баскычы негизинен 9-класстын программасы боюнча өткөрүлөт. 8-класстын окуучулары чоңдордун арасында сынашып, район боюнча <strong>4- жана 5-орундарга</strong> ээ болушкан!
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1 border-t border-slate-700/60">
                {OLYMPIAD_DATA.stats.map((st, i) => (
                  <div key={i} className="text-center p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="text-lg sm:text-xl font-bold font-mono text-amber-300">
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

          {/* Student Winners Cards */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                <Medal className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  Олимпиадага катышкан алдыңкы окуучулар
                </h4>
                <p className="text-xs text-slate-400">
                  Зоналык баскычтын жеңүүчүлөрү жана райондук сынактын байгелүү орун ээлери
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {OLYMPIAD_STUDENTS.map((student, idx) => (
                <div 
                  key={idx}
                  className="p-5 sm:p-6 rounded-3xl bg-slate-800/80 border border-slate-700/80 hover:border-amber-500/50 shadow-lg hover:shadow-amber-500/10 transition-all space-y-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 text-slate-950 font-black text-lg flex items-center justify-center shadow-md">
                        {student.scoreRank}
                      </div>
                      <div>
                        <h5 className="text-base sm:text-lg font-bold text-white">
                          {student.name}
                        </h5>
                        <p className="text-xs font-mono text-amber-300">
                          {student.grade} · {student.place}
                        </p>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-mono font-bold">
                      {student.badge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {student.highlight}
                  </p>

                  <div className="pt-2 border-t border-slate-700/60 flex items-center gap-2 text-xs font-mono text-emerald-400">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Зоналык баскычтан тандалып чыккан</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Teacher's Full Reflection & Narrative */}
          <div className="p-5 sm:p-7 rounded-3xl bg-slate-950/70 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-wider font-bold">
              <Quote className="w-4 h-4" />
              <span>Мугалимдин педагогикалык баяндамасы</span>
            </div>

            <div className="space-y-3.5 text-sm sm:text-base text-slate-200 leading-relaxed">
              <p>
                Окуучулардын билим деңгээлин, логикалык ой жүгүртүүсүн жана предметтик компетенттүүлүгүн өнүктүрүү максатында жыл сайын өткөрүлүүчү предметтик олимпиадаларга даярдоо иштерин жүргүзүп келем.
              </p>
              <p>
                <strong>2023-жылы</strong> информатика предмети боюнча 8-класстын окуучулары <strong>Асаналиев Данияр</strong> жана <strong>Айдарбеков Атай</strong> менен максаттуу даярдык иштерин жүргүзүп, зоналык баскычтан ийгиликтүү өтүп, райондук олимпиадага катышууга мүмкүнчүлүк алдык.
              </p>
              <p>
                Негизинен олимпиаданын райондук баскычына 9-класстын окуучулары катышууга тийиш болгондуктан, 8-класстын окуучулары үчүн бул сынакка катышуунун өзү чоң тажрыйба жана жетишкендик болду. Окуучуларым райондук баскычта <strong>4- жана 5-орундарды</strong> ээлешти. Бул жыйынтык алардын аракетинин, изденүүсүнүн жана алган билимин сынап көрүүгө болгон умтулуусунун көрсөткүчү болду.
              </p>
              <p>
                Мен үчүн эң маанилүүсү — окуучуларымдын олимпиадага катышып, өз күчүн сынап көрүшү, жаңы тажрыйба топтошу жана алдыга максат коюуга шыктанышы. Анткени жеңишке жетүү бир күндө жаралбайт; ал үзгүлтүксүз эмгектин, даярдыктын жана ишенимдин натыйжасы.
              </p>
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 font-bold text-center sm:text-left text-sm sm:text-base italic">
                «Буюрса, алдыда дагы окуучуларым менен талыкпай эмгектенип, билимдерин тереңдетип, жаңы ийгиликтерге жетишүүгө аракет кылабыз. Бүгүнкү тажрыйба — эртеңки жеңиштин пайдубалы!»
              </div>
            </div>
          </div>

          {/* 4 Core Pillars of Preparation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-1">
            {OLYMPIAD_DATA.principles.map((pr, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-2xl bg-slate-800/70 border border-slate-700/80 hover:border-amber-500/40 transition-all space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-400">0{idx + 1}</span>
                  <span className="text-[11px] font-semibold text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                    {pr.highlight}
                  </span>
                </div>
                <h5 className="text-sm font-bold text-white">
                  {pr.title}
                </h5>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {pr.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Modal Bottom Status Bar */}
        <div className="p-3 sm:p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="font-medium text-slate-300">
              Информатика олимпиадасы: 2023-жылкы райондук жетишкендиктер
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
