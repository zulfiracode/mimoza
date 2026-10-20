import React from 'react';
import { 
  Award, 
  MessageCircle, 
  ChevronRight, 
  FileText, 
  MapPin, 
  Sparkles, 
  Code2, 
  Cpu, 
  Globe,
  Phone,
  Instagram,
  Mail,
  BookOpen,
  Presentation,
  GraduationCap,
  Laptop,
  Users,
  FileCheck,
  Landmark,
  Trophy
} from 'lucide-react';
import { TEACHER_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenDossier: () => void;
  onOpenAwards?: () => void;
  onOpenPresentation?: () => void;
  onOpenSeminar?: () => void;
  onOpenClassLeadership?: () => void;
  onOpenPisa?: () => void;
  onOpenCollective?: () => void;
  onOpenMethodology?: () => void;
  onOpenParliament?: () => void;
  onOpenOlympiad?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenDossier, 
  onOpenAwards,
  onOpenPresentation,
  onOpenSeminar,
  onOpenClassLeadership,
  onOpenPisa,
  onOpenCollective,
  onOpenMethodology,
  onOpenParliament,
  onOpenOlympiad
}) => {
  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-sky-50/70 via-white to-slate-50/90">
      {/* Abstract Background Tech Elements */}
      <div className="absolute inset-0 bg-tech-grid opacity-75 pointer-events-none" />
      
      {/* Subtle organic light gradient orbs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-200/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />

      {/* Floating abstract tech icons in background */}
      <div className="absolute top-20 left-12 opacity-20 text-cyan-600 hidden xl:block pointer-events-none">
        <Code2 className="w-12 h-12" />
      </div>
      <div className="absolute bottom-24 left-1/4 opacity-15 text-indigo-600 hidden xl:block pointer-events-none">
        <Cpu className="w-14 h-14" />
      </div>
      <div className="absolute top-36 right-16 opacity-20 text-sky-600 hidden xl:block pointer-events-none">
        <Globe className="w-10 h-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Unboxed Kicker metadata with typographic separators */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide text-cyan-700 uppercase">
              <span className="flex items-center gap-1.5 bg-cyan-50 border border-cyan-200/60 text-cyan-800 px-3 py-1 rounded-md">
                <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
                <span>Санариптик билим берүү</span>
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-600">Сокулук району</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-600">Военно-Антоновка жалпы билим берүү мектеби</span>
            </div>

            {/* Display Headline with Blue Gradient */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.15] text-balance bg-gradient-to-r from-blue-700 via-cyan-600 to-indigo-700 bg-clip-text text-transparent">
                Нурланбекова Мимоза Нурланбековна
              </h1>
              <div className="mt-3 text-base sm:text-lg md:text-xl font-medium text-cyan-800 flex flex-wrap items-center gap-2 tracking-wide">
                <span className="font-semibold text-cyan-900">Информатика мугалими</span>
                <span className="text-slate-400 font-normal">|</span>
                <span className="text-slate-600">Санариптик билим берүү жана инновациялык окутуу</span>
              </div>
            </div>

            {/* Pedagogical Description (Кыскартылган маанилүү текст) */}
            <div className="space-y-3 text-slate-600 leading-relaxed text-sm sm:text-base max-w-2xl">
              <p>
                Мен — <strong>Нурланбекова Мимоза Нурланбековна</strong>, Чүй облусунун Сокулук районундагы <strong>Военно-Антоновка жалпы билим берүү мектебинин</strong> информатика мугалимимин. 2015-жылдан бери он жылдан ашуун убакыттан бери окуучуларга МКТны, алгоритмдөөнүн негиздерин жана заманбап программалоо ыкмаларын үйрөтүп келем.
              </p>
              <p className="hidden sm:block text-slate-500 text-sm">
                Менин максатым — окуучуларга компьютерди колдонууну гана үйрөтпөстөн, технология аркылуу ойлонууга, изденүүгө жана жаңы нерселерди жаратууга багыт берүү. Анткени бүгүнкү окуучу — эртеңки санариптик коомдун жаратуучусу!
              </p>
            </div>

            {/* Key Teacher Achievements & Motto Strip */}
            <div className="bg-gradient-to-br from-cyan-50/90 via-sky-50/70 to-indigo-50/70 border border-cyan-200/90 rounded-2xl p-4 sm:p-5 shadow-xs max-w-xl space-y-3">
              {/* Motto */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-cyan-100 text-cyan-800 text-[11px] font-mono font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    Педагогикалык ураан
                  </span>
                  <span className="text-[11px] font-mono text-cyan-700 font-semibold">
                    «Заманбап бол, бирок өзөгүңдү унутпа!»
                  </span>
                </div>
                <div className="text-base sm:text-lg font-extrabold text-slate-900 tracking-wide font-mono">
                  «ОЙЛОН — ИЗДЕН — КОЛДОН — ЖАРАТ!»
                </div>
              </div>

              {/* International Achievements Mini Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-cyan-200/60">
                <div className="bg-white/80 rounded-xl p-2.5 border border-cyan-100 text-xs">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>Борбордук Азиянын мыкты мугалими — 2025</span>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Астана шаары, I даражадагы диплом</div>
                </div>
                <div className="bg-white/80 rounded-xl p-2.5 border border-cyan-100 text-xs">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>«YURT FAXRI» — «Улут сыймыгы»</span>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Ташкент шаары, Эл аралык форум</div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 font-medium italic border-t border-cyan-200/60 pt-2 leading-relaxed">
                «Келечек — технологияда. Анын күчү — билимде, багыты — адамдын аң-сезиминде, ал эми улуттук өзөгү — наркта».
              </p>
            </div>

            {/* School location indicator */}
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 bg-white/80 border border-slate-200/80 rounded-xl p-3 shadow-xs max-w-xl">
              <MapPin className="w-4.5 h-4.5 text-rose-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-800">Иштеген орду: </span>
                <span>Чүй облусунун Сокулук районуна караштуу Военно-Антоновка жалпы билим берүү мектеби</span>
              </div>
            </div>

            {/* Interactive Button Group */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              {/* 1. Сертификаттар (Color A: Purple/Indigo) */}
              <button
                type="button"
                onClick={onOpenPresentation || onOpenAwards}
                className="inline-flex items-center justify-center gap-2.5 h-12 px-5 rounded-2xl bg-gradient-to-r from-indigo-700 via-indigo-600 to-purple-700 text-white text-sm font-bold hover:brightness-110 active:scale-95 shadow-md shadow-indigo-700/25 transition-all duration-200 cursor-pointer min-w-[170px] sm:min-w-[185px]"
                title="Сертификаттар (Flip-book презентациясы)"
              >
                <Sparkles className="w-4.5 h-4.5 text-indigo-200 shrink-0" />
                <span>Сертификаттар 📖</span>
              </button>

              {/* 2. Педагогикалык Резюме (Color B: Emerald/Teal) */}
              <button
                type="button"
                onClick={onOpenDossier}
                className="inline-flex items-center justify-center gap-2.5 h-12 px-5 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-teal-700 text-white text-sm font-bold hover:brightness-110 active:scale-95 shadow-md shadow-emerald-700/25 transition-all duration-200 cursor-pointer min-w-[170px] sm:min-w-[185px]"
                title="Педагогикалык Резюме"
              >
                <FileText className="w-4.5 h-4.5 text-emerald-200 shrink-0" />
                <span>Педагогикалык Резюме</span>
              </button>

              {/* 3. Окуу-методикалык документтер (Color A: Purple/Indigo) */}
              {onOpenMethodology && (
                <button
                  type="button"
                  onClick={onOpenMethodology}
                  className="inline-flex items-center justify-center gap-2.5 h-12 px-5 rounded-2xl bg-gradient-to-r from-indigo-700 via-indigo-600 to-purple-700 text-white text-sm font-bold hover:brightness-110 active:scale-95 shadow-md shadow-indigo-700/25 transition-all duration-200 cursor-pointer min-w-[170px] sm:min-w-[185px]"
                  title="Окуу-методикалык документтер"
                >
                  <FileCheck className="w-4.5 h-4.5 text-indigo-200 shrink-0" />
                  <span>Окуу-методикалык документтер</span>
                </button>
              )}

              {/* 4. Жогорку Кеңешке экскурсия (Color B: Emerald/Teal) */}
              {onOpenParliament && (
                <button
                  type="button"
                  onClick={onOpenParliament}
                  className="inline-flex items-center justify-center gap-2.5 h-12 px-5 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-teal-700 text-white text-sm font-bold hover:brightness-110 active:scale-95 shadow-md shadow-emerald-700/25 transition-all duration-200 cursor-pointer min-w-[170px] sm:min-w-[185px]"
                  title="Жогорку Кеңешке экскурсия"
                >
                  <Landmark className="w-4.5 h-4.5 text-emerald-200 shrink-0" />
                  <span>Жогорку Кеңешке экскурсия</span>
                </button>
              )}

              {/* 5. Олимпиада (Color A: Purple/Indigo) */}
              {onOpenOlympiad && (
                <button
                  type="button"
                  onClick={onOpenOlympiad}
                  className="inline-flex items-center justify-center gap-2.5 h-12 px-5 rounded-2xl bg-gradient-to-r from-indigo-700 via-indigo-600 to-purple-700 text-white text-sm font-bold hover:brightness-110 active:scale-95 shadow-md shadow-indigo-700/25 transition-all duration-200 cursor-pointer min-w-[170px] sm:min-w-[185px]"
                  title="Информатика боюнча предметтик олимпиада"
                >
                  <Trophy className="w-4.5 h-4.5 text-indigo-200 shrink-0" />
                  <span>Олимпиада</span>
                </button>
              )}

              {/* 6. Класс жетекчилик (Color B: Emerald/Teal) */}
              {onOpenClassLeadership && (
                <button
                  type="button"
                  onClick={onOpenClassLeadership}
                  className="inline-flex items-center justify-center gap-2.5 h-12 px-5 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-teal-700 text-white text-sm font-bold hover:brightness-110 active:scale-95 shadow-md shadow-emerald-700/25 transition-all duration-200 cursor-pointer min-w-[170px] sm:min-w-[185px]"
                  title="Класс жетекчилик"
                >
                  <GraduationCap className="w-4.5 h-4.5 text-emerald-200 shrink-0" />
                  <span>Класс жетекчилик</span>
                </button>
              )}

              {/* 7. Семинар (Color A: Purple/Indigo) */}
              {onOpenSeminar && (
                <button
                  type="button"
                  onClick={onOpenSeminar}
                  className="inline-flex items-center justify-center gap-2.5 h-12 px-5 rounded-2xl bg-gradient-to-r from-indigo-700 via-indigo-600 to-purple-700 text-white text-sm font-bold hover:brightness-110 active:scale-95 shadow-md shadow-indigo-700/25 transition-all duration-200 cursor-pointer min-w-[170px] sm:min-w-[185px]"
                  title="Семинар"
                >
                  <Presentation className="w-4.5 h-4.5 text-indigo-200 shrink-0" />
                  <span>Семинар</span>
                </button>
              )}

              {/* 8. PISA-2025 (Color B: Emerald/Teal) */}
              {onOpenPisa && (
                <button
                  type="button"
                  onClick={onOpenPisa}
                  className="inline-flex items-center justify-center gap-2.5 h-12 px-5 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-teal-700 text-white text-sm font-bold hover:brightness-110 active:scale-95 shadow-md shadow-emerald-700/25 transition-all duration-200 cursor-pointer min-w-[170px] sm:min-w-[185px]"
                  title="PISA-2025 Билим берүү долбоору"
                >
                  <Laptop className="w-4.5 h-4.5 text-emerald-200 shrink-0" />
                  <span>PISA-2025</span>
                </button>
              )}

              {/* 9. Коллектив (Color A: Purple/Indigo) */}
              {onOpenCollective && (
                <button
                  type="button"
                  onClick={onOpenCollective}
                  className="inline-flex items-center justify-center gap-2.5 h-12 px-5 rounded-2xl bg-gradient-to-r from-indigo-700 via-indigo-600 to-purple-700 text-white text-sm font-bold hover:brightness-110 active:scale-95 shadow-md shadow-indigo-700/25 transition-all duration-200 cursor-pointer min-w-[170px] sm:min-w-[185px]"
                  title="Мектеп жамааты (Коллектив)"
                >
                  <Users className="w-4.5 h-4.5 text-indigo-200 shrink-0" />
                  <span>Коллектив</span>
                </button>
              )}

              {/* 10. interspp.com (Color B: Emerald/Teal) */}
              <a
                href="https://interspp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 h-12 px-5 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-teal-700 text-white text-sm font-bold hover:brightness-110 active:scale-95 shadow-md shadow-emerald-700/25 transition-all duration-200 cursor-pointer min-w-[170px] sm:min-w-[185px]"
                title="interspp.com эл аралык порталына өтүү"
              >
                <Globe className="w-4.5 h-4.5 text-emerald-200" />
                <span>interspp.com ↗</span>
              </a>

              {/* 11. Макалаларды окуу (Color A: Purple/Indigo) */}
              <a
                href="#articles"
                className="inline-flex items-center justify-center gap-2.5 h-12 px-5 rounded-2xl bg-gradient-to-r from-indigo-700 via-indigo-600 to-purple-700 text-white text-sm font-bold hover:brightness-110 active:scale-95 shadow-md shadow-indigo-700/25 transition-all duration-200 cursor-pointer min-w-[170px] sm:min-w-[185px]"
                title="Макалаларды окуу"
              >
                <BookOpen className="w-4.5 h-4.5 text-indigo-200 shrink-0" />
                <span>Макалаларды окуу</span>
              </a>

              {/* 12. Фото-галерея (Color B: Emerald/Teal) */}
              <a
                href="#gallery"
                className="inline-flex items-center justify-center gap-2.5 h-12 px-5 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-teal-700 text-white text-sm font-bold hover:brightness-110 active:scale-95 shadow-md shadow-emerald-700/25 transition-all duration-200 cursor-pointer min-w-[170px] sm:min-w-[185px]"
                title="Фото-галерея"
              >
                <Sparkles className="w-4.5 h-4.5 text-emerald-200 shrink-0" />
                <span>Фото-галерея</span>
              </a>
            </div>

            {/* Icons Only Row: WhatsApp, Telegram, Instagram, Email (Иконкалары эле, тексти жок) */}
            <div className="pt-3">
              <div className="flex items-center gap-3">
                {/* WhatsApp */}
                <a
                  href={TEACHER_INFO.contacts.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp"
                  aria-label="WhatsApp"
                  className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 text-emerald-600 flex items-center justify-center transition-all shadow-xs hover:scale-110 active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-600" />
                </a>

                {/* Telegram */}
                <a
                  href="https://t.me/+996701587373"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Telegram"
                  aria-label="Telegram"
                  className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-sky-500 hover:bg-sky-50 text-sky-500 flex items-center justify-center transition-all shadow-xs hover:scale-110 active:scale-95 cursor-pointer"
                >
                  <TelegramIcon className="w-5 h-5 text-sky-500" />
                </a>

                {/* Instagram */}
                <a
                  href={TEACHER_INFO.contacts.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-pink-500 hover:bg-pink-50 text-pink-600 flex items-center justify-center transition-all shadow-xs hover:scale-110 active:scale-95 cursor-pointer"
                >
                  <Instagram className="w-5 h-5 text-pink-600" />
                </a>

                {/* Email */}
                <a
                  href={`mailto:${TEACHER_INFO.contacts.email}`}
                  title="Электрондук почта"
                  aria-label="Электрондук почта"
                  className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-blue-500 hover:bg-blue-50 text-blue-600 flex items-center justify-center transition-all shadow-xs hover:scale-110 active:scale-95 cursor-pointer"
                >
                  <Mail className="w-5 h-5 text-blue-600" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Container (Hero Portrait + Tech Badges) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative cyber/tech border rings */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-sky-400/20 to-indigo-500/20 blur-xl opacity-75" />
              
              {/* Image Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-white border-2 border-slate-200 shadow-xl">
                
                {/* Tech Top Accent Bar */}
                <div className="h-2 w-full bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600" />

                <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-100">
                  <img
                    src={TEACHER_INFO.heroImage}
                    alt="Нурланбекова Мимоза Нурланбековна — Информатика мугалими"
                    className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback if image fails
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  {/* Fallback container */}
                  <div className="hidden absolute inset-0 items-center justify-center flex-col bg-slate-100 p-6 text-center">
                    <Award className="w-16 h-16 text-cyan-600 mb-3" />
                    <p className="font-bold text-slate-800 text-lg">Нурланбекова Мимоза</p>
                    <p className="text-xs text-slate-500">Информатика мугалими</p>
                  </div>

                  {/* Gradient Scrim for crisp text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Portrait Overlay Bottom Title */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-semibold">
                      Военно-Антоновка жалпы билим берүү мектеби
                    </p>
                    <p className="text-lg font-bold leading-snug drop-shadow-sm">
                      Мимоза Нурланбекова
                    </p>
                    <p className="text-xs text-slate-200">
                      Информатика жана маалыматтык технологиялар
                    </p>
                  </div>
                </div>

                {/* Bottom Frame Badge */}
                <div className="p-3.5 bg-slate-900 text-white flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono text-slate-300">«Жыл мугалими — 2027» талапкери</span>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 font-semibold">IT-Педагог</span>
                </div>
              </div>

              {/* Floating Badge 1 (Top Left) */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-xl p-3 shadow-lg flex items-center gap-3 hidden sm:flex z-20">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600">
                  <TrophyIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 leading-tight">Борбордук Азиянын</div>
                  <div className="text-[11px] text-slate-600 font-medium">мыкты мугалими — 2025</div>
                </div>
              </div>

              {/* Floating Badge 2 (Bottom Right) */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-xl p-3 shadow-lg flex items-center gap-3 hidden sm:flex">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-600">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 leading-tight">«YURT FAXRI»</div>
                  <div className="text-[11px] text-slate-500">МДХ эл аралык медалы</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const TrophyIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);

const TelegramIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.77-1.16 3.35-1.36 3.73-1.37.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
  </svg>
);
