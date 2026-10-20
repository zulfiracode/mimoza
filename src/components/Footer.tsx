import React from 'react';
import { Terminal, MessageCircle, Instagram, Mail, Phone, ChevronUp, Sparkles } from 'lucide-react';
import { TEACHER_INFO } from '../data/portfolioData';

interface FooterProps {
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

export const Footer: React.FC<FooterProps> = ({ 
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
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Wordmark & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-cyan-600 flex items-center justify-center text-white">
                <Terminal className="w-4 h-4" />
              </span>
              <span className="text-base font-bold tracking-tight text-white">
                {TEACHER_INFO.shortName}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Информатика мугалими. Военно-Антоновка жалпы билим берүү мектеби. 
              Педагогикалык эмгек стажы: 10 жыл 1 ай.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>«Жыл мугалими — 2027»</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider font-mono">
              Бөлүмдөр
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#home" className="hover:text-cyan-400 transition-colors">Башкы бет</a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">Мен жөнүндө</a>
              </li>
              <li>
                <a href="#family" className="hover:text-cyan-400 transition-colors">Үй-бүлөм</a>
              </li>
              {(onOpenPresentation || onOpenAwards) && (
                <li>
                  <button 
                    type="button"
                    onClick={onOpenPresentation || onOpenAwards} 
                    className="hover:text-cyan-400 transition-colors text-left cursor-pointer text-cyan-300 font-bold flex items-center gap-1.5"
                  >
                    <span>Сертификаттар 📖</span>
                  </button>
                </li>
              )}
              {onOpenMethodology && (
                <li>
                  <button 
                    type="button"
                    onClick={onOpenMethodology} 
                    className="hover:text-indigo-300 transition-colors text-left cursor-pointer text-indigo-300 font-bold flex items-center gap-1.5"
                  >
                    <span>Окуу-методикалык документтер 📑</span>
                  </button>
                </li>
              )}
              {onOpenParliament && (
                <li>
                  <button 
                    type="button"
                    onClick={onOpenParliament} 
                    className="hover:text-teal-300 transition-colors text-left cursor-pointer text-teal-300 font-bold flex items-center gap-1.5"
                  >
                    <span>Жогорку Кеңешке экскурсия 🏛️</span>
                  </button>
                </li>
              )}
              {onOpenOlympiad && (
                <li>
                  <button 
                    type="button"
                    onClick={onOpenOlympiad} 
                    className="hover:text-amber-300 transition-colors text-left cursor-pointer text-amber-300 font-bold flex items-center gap-1.5"
                  >
                    <span>Олимпиада — Информатика 🏆</span>
                  </button>
                </li>
              )}
              {onOpenSeminar && (
                <li>
                  <button 
                    type="button"
                    onClick={onOpenSeminar} 
                    className="hover:text-teal-300 transition-colors text-left cursor-pointer text-teal-300 font-bold flex items-center gap-1.5"
                  >
                    <span>Семинар 📸</span>
                  </button>
                </li>
              )}
              {onOpenClassLeadership && (
                <li>
                  <button 
                    type="button"
                    onClick={onOpenClassLeadership} 
                    className="hover:text-indigo-300 transition-colors text-left cursor-pointer text-indigo-300 font-bold flex items-center gap-1.5"
                  >
                    <span>Класс жетекчилик 🎓</span>
                  </button>
                </li>
              )}
              {onOpenPisa && (
                <li>
                  <button 
                    type="button"
                    onClick={onOpenPisa} 
                    className="hover:text-sky-300 transition-colors text-left cursor-pointer text-sky-300 font-bold flex items-center gap-1.5"
                  >
                    <span>PISA-2025 💻</span>
                  </button>
                </li>
              )}
              {onOpenCollective && (
                <li>
                  <button 
                    type="button"
                    onClick={onOpenCollective} 
                    className="hover:text-rose-300 transition-colors text-left cursor-pointer text-rose-300 font-bold flex items-center gap-1.5"
                  >
                    <span>Коллектив 👥</span>
                  </button>
                </li>
              )}
              <li>
                <a href="#articles" className="hover:text-cyan-400 transition-colors">Макалалар & Эсселер</a>
              </li>
              <li>
                <a href="#videos" className="hover:text-cyan-400 transition-colors">Видео сабактар</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-cyan-400 transition-colors">Фото-галерея</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">Байланышуу</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contacts */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider font-mono">
              Байланыш
            </h4>
            <div className="flex items-center gap-3 pt-1">
              <a 
                href={TEACHER_INFO.contacts.whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                title="WhatsApp"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-emerald-600 text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <a 
                href="https://t.me/+996701587373" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Telegram"
                aria-label="Telegram"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-sky-500 text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.77-1.16 3.35-1.36 3.73-1.37.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
              </a>

              <a 
                href={TEACHER_INFO.contacts.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Instagram"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-pink-600 text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a 
                href={`mailto:${TEACHER_INFO.contacts.email}`} 
                title="Email"
                aria-label="Email"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-blue-600 text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <div className="pt-2 text-xs text-slate-400 font-mono space-y-1">
              <p>Тел: 0557 58 73 73</p>
              <p>Тел: 0701 58 73 73</p>
            </div>
          </div>

          {/* Col 4: Location & Auto info */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider font-mono">
              Мектеп жана Регион
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Чүй облусу, Сокулук району, Военно-Антоновка айылы, Военно-Антоновка жалпы билим берүү мектеби.
            </p>
            <div className="pt-2">
              <span className="text-[11px] font-mono text-slate-400">Авто: </span>
              <span className="text-xs font-mono font-bold text-cyan-300 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                {TEACHER_INFO.contacts.carNumber}
              </span>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Нурланбекова Мимоза Нурланбековна. Бардык укуктар корголгон.
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
          >
            <span>Жогору чыгуу</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
