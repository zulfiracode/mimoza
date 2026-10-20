import React from 'react';
import { 
  Binary, 
  Sparkles, 
  CheckCircle2, 
  Compass, 
  Laptop,
  Award,
  BookOpen,
  Globe,
  HeartHandshake
} from 'lucide-react';
import { TEACHER_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const competenceAreas = [
    {
      title: "Санариптик технологиялар жана алгоритмдөө",
      description: "Окуучуларды даяр маалыматты кабыл алууга гана эмес, изденүүгө, логикалык маселелерди чечүүгө, алгоритм түзүүгө жана практикалык программалоого багыттоо.",
      icon: Binary,
      color: "text-cyan-700",
      bg: "bg-cyan-50",
      border: "border-cyan-200/80",
    },
    {
      title: "Интерактивдүү жана инновациялык окутуу",
      description: "Квесттерди, интеллектуалдык оюндарды, топтук иштерди жана заманбап санариптик платформаларды колдонуу менен сабакты кызыктуу жана натыйжалуу өткөрүү.",
      icon: Laptop,
      color: "text-indigo-700",
      bg: "bg-indigo-50",
      border: "border-indigo-200/80",
    },
    {
      title: "Улуттук нарк жана маданият",
      description: "«Заманбап бол, бирок өзөгүңдү унутпа!» — Окуучулар технологиянын тилин үйрөнүү менен бирге өз элинин тилин, маданиятын жана наркын сыймык менен алып жүрүүсү.",
      icon: HeartHandshake,
      color: "text-emerald-700",
      bg: "bg-emerald-50",
      border: "border-emerald-200/80",
    },
    {
      title: "Эл аралык изденүү жана тажрыйба",
      description: "Борбор Азиянын мыкты мугалими (Астана, I даража) жана «YURT FAXRI» — «Улут сыймыгы» (Ташкент) сыйлыктарынын деми менен кесиптик чеберчиликти өркүндөтүү.",
      icon: Globe,
      color: "text-amber-700",
      bg: "bg-amber-50",
      border: "border-amber-200/80",
    },
  ];

  const teacherPrinciples = [
    "Санариптик технологияларды, чыгармачылыкты жана улуттук баалуулуктарды бир бүтүн багытта айкалыштыруу",
    "Даяр маалыматты кабыл алууга гана эмес, логикалык алгоритм түзүүгө жана өз идеяларын ишке ашырууга шыктандыруу",
    "Квесттер, интеллектуалдык оюндар, топтук иштер жана заманбап интерактивдүү платформаларды колдонуу",
    "Бүгүнкү окуучу — эртеңки санариптик коомдун жаратуучусу экенин эске алып, келечекке ишенимдүү кадам таштоого жол ачуу",
  ];

  return (
    <section id="about" className="py-20 lg:py-24 bg-gradient-to-b from-teal-50/70 via-emerald-50/30 to-teal-50/40 relative overflow-hidden border-b border-teal-200/40">
      {/* Subtle abstract grid background */}
      <div className="absolute inset-0 bg-dot-matrix opacity-40 pointer-events-none" />

      {/* Decorative ambient color orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-teal-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Section Badge & Divider */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/80 border border-teal-200 text-xs font-semibold text-teal-800 uppercase tracking-wider mb-3 font-mono">
            <Compass className="w-3.5 h-3.5 text-teal-700" />
            <span>Педагогикалык миссия жана концепция</span>
            <span aria-hidden="true">·</span>
            <span>Санариптик билим берүү</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            «ОЙЛОН — ИЗДЕН — КОЛДОН — ЖАРАТ!»
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
            Келечек — технологияда. Анын күчү — билимде, багыты — адамдын аң-сезиминде, ал эми улуттук өзөгү — наркта.
          </p>
          
          {/* Subtle In-Section Divider */}
          <div className="mt-6 flex items-center gap-3">
            <div className="h-1 w-12 bg-teal-500 rounded-full" />
            <div className="h-1 w-4 bg-emerald-400 rounded-full" />
            <div className="h-1 flex-1 max-w-xs bg-teal-200/70 rounded-full" />
          </div>
        </div>

        {/* 1. Philosophy & Mission Card */}
        <div className="bg-white/95 backdrop-blur-xs rounded-3xl p-8 sm:p-10 border border-teal-200/80 shadow-md shadow-teal-900/5 mb-14">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <span className="p-2.5 rounded-xl bg-teal-100 text-teal-700">
                  <Compass className="w-6 h-6" />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Мугалимдин педагогикалык миссиясы</h3>
                  <p className="text-xs text-teal-700 font-mono font-semibold">«Заманбап бол, бирок өзөгүңдү унутпа!»</p>
                </div>
              </div>

              {/* Core Mission Quote */}
              <blockquote className="text-base sm:text-lg font-medium text-slate-800 italic border-l-4 border-teal-500 pl-4 py-3 mb-6 bg-teal-50/50 rounded-r-2xl leading-relaxed">
                «Мен үчүн мугалимдик — жөн гана билим берүү эмес, ар бир окуучунун мүмкүнчүлүгүн ачуу, өз алдынча ой жүгүртүүгө үйрөтүү жана келечекке ишенимдүү кадам таштоосуна багыт берүүчү жооптуу миссия. Окуучуларга компьютерди колдонууну гана үйрөтпөстөн, технология аркылуу ойлонууга, изденүүгө, маселелерди чечүүгө жана жаңы нерселерди жаратууга үйрөтүүнү максат кылам. Анткени бүгүнкү окуучу — эртеңки санариптик коомдун жаратуучусу».
              </blockquote>

              {/* Principles */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Ишмердүүлүгүмдүн негизги принциптери:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {teacherPrinciples.map((principle, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-teal-50/30 p-3.5 rounded-xl border border-teal-100">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{principle}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
            <span className="font-mono font-medium">Педагогикалык стаж: {TEACHER_INFO.pedagogicalExperience}</span>
            <span className="font-mono font-medium">Жалпы эмгек стажы: {TEACHER_INFO.totalExperience}</span>
            <span className="font-mono text-teal-700 font-bold">{TEACHER_INFO.schoolShort}</span>
          </div>
        </div>

        {/* 2. Key 4 Competence Pillars */}
        <div className="mb-14">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              Педагогикалык ишмердүүлүктүн 4 негизги багыты
            </h3>
            <p className="text-sm sm:text-base text-slate-600">
              Информатика сабагында, чыгармачылыкта жана окуучуларды тарбиялоодо колдонулган багыттар
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competenceAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl p-6 border ${area.border} hover:shadow-lg transition-all duration-200 flex flex-col justify-between group`}
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl ${area.bg} ${area.color} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                      {area.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span>Багыт 0{idx + 1}</span>
                    <span className="text-teal-600 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. International Achievements Highlights Box (Эл аралык деңгээлдеги жетишкендиктери) */}
        <div className="bg-gradient-to-r from-amber-50/80 via-white to-teal-50/80 rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-md">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-800 uppercase tracking-wider mb-4">
            <Award className="w-4 h-4 text-amber-600" />
            <span>Эл аралык деңгээлдеги жетишкендиктерим</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Kazakhstan Award */}
            <div className="bg-white/90 rounded-2xl p-5 border border-amber-200/60 shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                    Казакстан (Астана) · 2025
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-1">
                  Борбор Азиянын мыкты мугалими — I даража
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Борбор Азиянын мыкты мугалимдерин аныктоо сынагында I даражадагы дипломго жана алтын медалга татыктуу болгон. Көп жылдык эмгектин жана тынымсыз изденүүнүн жыйынтыгы.
                </p>
              </div>
            </div>

            {/* Uzbekistan Award */}
            <div className="bg-white/90 rounded-2xl p-5 border border-teal-200/60 shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                    Өзбекстан (Ташкент) · 2025
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-1">
                  «YURT FAXRI» — «Улут сыймыгы» сыйлыгы
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Эл аралык макалалар форумунда билим берүү тармагындагы ойлору жана жасалма интеллекттин мүмкүнчүлүктөрү боюнча эмгектери үчүн «Гордость нации» сыйлыгына татыган.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
