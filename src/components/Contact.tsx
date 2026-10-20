import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Instagram, 
  MapPin, 
  Car, 
  Send, 
  Check, 
  Copy, 
  School,
  ExternalLink 
} from 'lucide-react';
import { TEACHER_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [senderName, setSenderName] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [senderRole, setSenderRole] = useState('Ата-эне');
  const [messageText, setMessageText] = useState('');

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const handleSendViaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedMessage = encodeURIComponent(
      `Саламатсызбы, Мимоза Нурланбековна!\nМенин атым: ${senderName || 'Конок'}\nБайланыш номерим: ${senderPhone || 'көрсөтүлгөн жок'}\nСтатус: ${senderRole}\n\nБилдирүү:\n${messageText || 'Сиздин портфолиоңуз боюнча байланышып жатам.'}`
    );
    window.open(`https://wa.me/996701587373?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-gradient-to-b from-sky-50/70 via-cyan-50/30 to-slate-50 relative overflow-hidden border-b border-cyan-200/40">
      {/* Decorative ambient lights */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 text-center mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100/90 border border-cyan-200 text-xs font-semibold text-cyan-900 uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5 text-cyan-700" />
            <span>Байланышуу</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Байланышуу
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-xl mx-auto">
            Суроолор, кызматташуу же тажрыйба алмашуу боюнча байланышууга ар дайым кубанычтамын.
          </p>

          {/* In-Section Centered Divider Accent */}
          <div className="mt-5 flex items-center justify-center gap-2">
            <div className="h-1 w-8 bg-cyan-200 rounded-full" />
            <div className="h-1 w-12 bg-cyan-500 rounded-full" />
            <div className="h-1 w-8 bg-cyan-200 rounded-full" />
          </div>
        </div>

        {/* Icons Only Row: WhatsApp, Telegram, Instagram, Email (Иконкалары эле, тексти жок) */}
        <div className="max-w-md mx-auto mb-12">
          <div className="bg-white/95 backdrop-blur-xs border border-cyan-200/80 rounded-2xl p-4 sm:p-5 flex items-center justify-center gap-5 sm:gap-6 shadow-sm">
            
            {/* WhatsApp */}
            <a
              href={TEACHER_INFO.contacts.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp: 0701 58 73 73"
              aria-label="WhatsApp"
              className="w-13 h-13 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 text-emerald-600 flex items-center justify-center transition-all shadow-xs hover:scale-110 active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-6 h-6 text-emerald-600" />
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/+996701587373"
              target="_blank"
              rel="noopener noreferrer"
              title="Telegram: 0701 58 73 73"
              aria-label="Telegram"
              className="w-13 h-13 rounded-2xl bg-white border border-slate-200 hover:border-sky-500 hover:bg-sky-50 text-sky-500 flex items-center justify-center transition-all shadow-xs hover:scale-110 active:scale-95 cursor-pointer"
            >
              <TelegramIcon className="w-6 h-6 text-sky-500" />
            </a>

            {/* Instagram */}
            <a
              href={TEACHER_INFO.contacts.instagram}
              target="_blank"
              rel="noopener noreferrer"
              title={`Instagram: ${TEACHER_INFO.contacts.instagramHandle}`}
              aria-label="Instagram"
              className="w-13 h-13 rounded-2xl bg-white border border-slate-200 hover:border-pink-500 hover:bg-pink-50 text-pink-600 flex items-center justify-center transition-all shadow-xs hover:scale-110 active:scale-95 cursor-pointer"
            >
              <Instagram className="w-6 h-6 text-pink-600" />
            </a>

            {/* Email / Почта */}
            <a
              href={`mailto:${TEACHER_INFO.contacts.email}`}
              title={`Email: ${TEACHER_INFO.contacts.email}`}
              aria-label="Электрондук почта"
              className="w-13 h-13 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 hover:bg-blue-50 text-blue-600 flex items-center justify-center transition-all shadow-xs hover:scale-110 active:scale-95 cursor-pointer"
            >
              <Mail className="w-6 h-6 text-blue-600" />
            </a>

          </div>
        </div>

        {/* Feedback / Quick Message Form Container */}
        <div className="max-w-xl mx-auto bg-white/95 backdrop-blur-xs border border-cyan-200/80 rounded-3xl p-6 sm:p-8 shadow-md shadow-cyan-900/5">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900">
                Түздөн-түз билдирүү же суроо жөнөтүү
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Форманы толтургандан кийин текст дароо WhatsApp аркылуу мугалимге жөнөтүлөт.
              </p>
            </div>

            <form onSubmit={handleSendViaWhatsApp} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Сиздин аты-жөнүңүз
                </label>
                <input
                  type="text"
                  required
                  placeholder="Мисалы: Асанбеков Айбек"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Байланыш телефонуңуз
                  </label>
                  <input
                    type="tel"
                    placeholder="0700 00 00 00"
                    value={senderPhone}
                    onChange={(e) => setSenderPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Ким катары кайрыласыз?
                  </label>
                  <select
                    value={senderRole}
                    onChange={(e) => setSenderRole(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                  >
                    <option value="Ата-эне">Ата-эне</option>
                    <option value="Окуучу">Окуучу</option>
                    <option value="Кесиптеш мугалим">Кесиптеш мугалим</option>
                    <option value="Мектеп жетекчилиги">Мектеп жетекчилиги</option>
                    <option value="Башка">Башка</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Суроо же билдирүүнүн мазмуну
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Билдирүүңүздү бул жерге жазыңыз..."
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-cyan-700 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-cyan-500/20 active:scale-98 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp аркылуу дароо жөнөтүү</span>
              </button>
            </form>
          </div>

        </div>
      </section>
    );
  };

const TelegramIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.77-1.16 3.35-1.36 3.73-1.37.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
  </svg>
);

