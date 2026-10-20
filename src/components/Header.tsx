import React, { useState } from 'react';
import { Menu, X, MessageCircle, Terminal } from 'lucide-react';
import { TEACHER_INFO } from '../data/portfolioData';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Башкы бет', href: '#home' },
    { label: 'Мен жөнүндө', href: '#about' },
    { label: 'Үй-бүлөм', href: '#family' },
    { label: 'Макалалар', href: '#articles' },
    { label: 'Видеолор', href: '#videos' },
    { label: 'Галерея', href: '#gallery' },
    { label: 'Байланыш', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          
          {/* Zone 1: Single text element wordmark with clean tech touch */}
          <a 
            href="#home" 
            className="flex items-center gap-2.5 text-slate-900 font-bold tracking-tight hover:text-cyan-700 transition-colors whitespace-nowrap shrink-0 group"
          >
            <span className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white transition-all shadow-sm">
              <Terminal className="w-5 h-5" />
            </span>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold leading-tight">Нурланбекова М. Н.</span>
              <span className="text-[11px] font-medium text-slate-500 font-mono">Информатика мугалими</span>
            </div>
          </a>

          {/* Zone 2: 4–6 concise single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-cyan-600 transition-colors whitespace-nowrap shrink-0 py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-600 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary actions */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-cyan-700 active:scale-98 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Байланышуу</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
              aria-label="Навигация менюсун ачуу"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in fade-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:text-cyan-600 hover:bg-slate-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={TEACHER_INFO.contacts.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-cyan-700 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              WhatsApp: 0701 58 73 73
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
