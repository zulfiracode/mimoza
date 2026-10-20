import React from 'react';
import { X, Printer, Download, Award, CheckCircle2, Calendar, MapPin, School, GraduationCap, Briefcase, Heart, Phone, Mail } from 'lucide-react';
import { TEACHER_INFO, AWARDS_DATA, PROJECTS_DATA, EDUCATION_DATA, CAREER_DATA } from '../data/portfolioData';

interface TeacherDossierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TeacherDossierModal: React.FC<TeacherDossierModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-slate-200 shadow-2xl relative my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar (Hidden when printed) */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-700">
            <span className="w-2 h-2 rounded-full bg-cyan-600" />
            <span>ПЕДАГОГИКАЛЫК ДОСЬЕ / ОБЪЕКТИВКА ЖАНА РЕЗЮМЕ</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 text-white hover:bg-cyan-700 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Басып чыгаруу (Print)</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Жабуу"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dossier Document Content */}
        <div className="p-8 sm:p-12 space-y-8 text-slate-800">
          
          {/* Header row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b border-slate-200 pb-8">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-700 font-bold">
                Кыргыз Республикасынын Билим берүү жана илим системасы
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {TEACHER_INFO.fullName}
              </h1>
              <p className="text-base sm:text-lg text-cyan-900 font-medium">
                {TEACHER_INFO.role} · {TEACHER_INFO.category}
              </p>
              <p className="text-xs text-slate-600 max-w-xl">
                {TEACHER_INFO.school}
              </p>
              <p className="text-xs text-slate-500 font-medium">
                {TEACHER_INFO.districtLeadership}
              </p>
            </div>

            <div className="shrink-0 w-28 h-36 rounded-xl overflow-hidden border-2 border-slate-200 bg-slate-100 shadow-sm">
              <img
                src={TEACHER_INFO.heroImage}
                alt={TEACHER_INFO.fullName}
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Key Metrics Table */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-200/80 text-xs font-mono">
            <div>
              <span className="text-slate-500 block">Педагогикалык стаж:</span>
              <span className="text-slate-900 font-bold text-sm">{TEACHER_INFO.pedagogicalExperience}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Жалпы иш тажрыйба:</span>
              <span className="text-slate-900 font-bold text-sm">{TEACHER_INFO.totalExperience}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Сыйлыктары:</span>
              <span className="text-slate-900 font-bold text-sm">12+ медаль & диплом</span>
            </div>
            <div>
              <span className="text-slate-500 block">Автоунаа:</span>
              <span className="text-slate-900 font-bold text-sm">{TEACHER_INFO.contacts.carNumber}</span>
            </div>
          </div>

          {/* Section: Personal Info (Резюмеден өздүк маалыматтар) */}
          <div>
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
              1. Өздүк маалыматтар (Анкеталык маалымат)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60">
                <span className="text-slate-500 block mb-0.5">Туулган жылы, күнү:</span>
                <span className="font-semibold text-slate-900">{TEACHER_INFO.birthDate} (19.04.1990)</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60">
                <span className="text-slate-500 block mb-0.5">Туулган жери:</span>
                <span className="font-semibold text-slate-900">{TEACHER_INFO.birthPlace}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60">
                <span className="text-slate-500 block mb-0.5">Улуту жана жарандыгы:</span>
                <span className="font-semibold text-slate-900">{TEACHER_INFO.nationality}, {TEACHER_INFO.citizenship}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60 sm:col-span-2">
                <span className="text-slate-500 block mb-0.5">Үй-бүлөлүк абалы:</span>
                <span className="font-semibold text-slate-900 block">{TEACHER_INFO.familyStatus}</span>
                {TEACHER_INFO.familyPhotos && TEACHER_INFO.familyPhotos.length > 0 && (
                  <div className="mt-3 pt-2.5 border-t border-slate-200/80">
                    <span className="text-[11px] font-semibold text-rose-700 block mb-2">
                      ❤️ Үй-бүлөлүк фото-альбом:
                    </span>
                    <div className="grid grid-cols-3 gap-2">
                      {TEACHER_INFO.familyPhotos.map((photo, pIdx) => (
                        <a
                          key={pIdx}
                          href={photo}
                          target="_blank"
                          rel="noreferrer"
                          className="aspect-4/3 rounded-lg overflow-hidden border border-slate-200 shadow-2xs hover:opacity-90 transition-opacity block"
                          title="Толук өлчөмдө ачуу"
                        >
                          <img
                            src={photo}
                            alt={`Үй-бүлө ${pIdx + 1}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Section: Education Stages (Билими) */}
          <div>
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
              2. Билими (Жогорку жана Орто)
            </h2>
            <div className="space-y-3">
              {EDUCATION_DATA.map((edu, i) => (
                <div key={edu.id} className="text-xs border-b border-slate-100 pb-2.5">
                  <div className="flex justify-between font-semibold text-slate-900">
                    <span>{i + 1}. {edu.institution}</span>
                    <span className="font-mono text-cyan-700">{edu.period}</span>
                  </div>
                  <div className="text-cyan-800 font-medium mt-0.5">
                    {edu.degree} {edu.specialty ? `— Адистиги: ${edu.specialty}` : ''}
                  </div>
                  <div className="text-slate-500 mt-0.5">
                    {edu.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Career History (Эмгек жолу) */}
          <div>
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
              3. Эмгек ишмердүүлүгү жана тажрыйбасы
            </h2>
            <div className="space-y-3">
              {CAREER_DATA.map((car, i) => (
                <div key={car.id} className="text-xs border-b border-slate-100 pb-2.5">
                  <div className="flex justify-between font-semibold text-slate-900">
                    <span>{i + 1}. {car.role} — {car.organization}</span>
                    <span className="font-mono text-slate-600">{car.period}</span>
                  </div>
                  <div className="text-slate-500 mt-0.5">
                    {car.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Awards & Honors */}
          <div>
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
              4. Негизги сыйлыктары жана эл аралык наамдары
            </h2>
            <div className="space-y-3">
              {AWARDS_DATA.map((award, i) => (
                <div key={award.id} className="text-xs border-b border-slate-100 pb-2.5">
                  <div className="flex justify-between font-semibold text-slate-900">
                    <span>{i + 1}. {award.title}</span>
                    <span className="font-mono text-cyan-700">{award.year}-жыл</span>
                  </div>
                  <div className="text-slate-500 mt-0.5">
                    {award.issuer} · {award.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Projects */}
          <div>
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
              5. Педагогикалык жана инновациялык долбоорлор
            </h2>
            <div className="space-y-3">
              {PROJECTS_DATA.map((proj, i) => (
                <div key={proj.id} className="text-xs border-b border-slate-100 pb-2.5">
                  <div className="font-semibold text-slate-900">
                    {i + 1}. {proj.title} ({proj.duration})
                  </div>
                  <div className="text-slate-600 mt-0.5">
                    {proj.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Publications */}
          <div>
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
              6. Автордук илимий жана педагогикалык макалалары
            </h2>
            <div className="space-y-3 text-xs">
              <div className="border-b border-slate-100 pb-2.5">
                <span className="font-semibold text-slate-900">1. «Изденген мугалим — өнүккөн окуучу, өнүккөн окуучу — өлкөнүн жаркын келечеги»</span>
                <p className="text-slate-500 mt-0.5">Педагогикалык эссе, кесиптик тажрыйба жана философия (2025–2026-ж.)</p>
              </div>
              <div className="border-b border-slate-100 pb-2.5">
                <span className="font-semibold text-slate-900">2. «АКЫЛДЫ МАШИНАГА ТАПШЫРСАК...»</span>
                <p className="text-slate-500 mt-0.5">Жасалма интеллект жана адам акылы, «YURT FAXRI» эл аралык илимий журналы (interspp.com), Ташкент 2025-ж.</p>
              </div>
              <div className="border-b border-slate-100 pb-2.5">
                <span className="font-semibold text-slate-900">3. «БИЛИМ БЕРҮҮДӨ ИННОВАЦИЯ: ПЕДАГОГИКАЛЫК ӨЗГӨРҮҮНҮН ЗАМАНБАП МОДЕЛДЕРИ ЖАНА КЫРГЫЗСТАНДЫН БИЛИМ БЕРҮҮ СИСТЕМАСЫ ҮЧҮН МҮМКҮНЧҮЛҮКТӨРҮ»</span>
                <p className="text-slate-500 mt-0.5">Илимий изилдөө макаласы, UNESCO & OECD методологиясы боюнча (2026-ж.)</p>
              </div>
            </div>
          </div>

          {/* Footer Contacts */}
          <div className="pt-6 border-t-2 border-slate-300 flex flex-col sm:flex-row justify-between text-xs font-mono text-slate-600 gap-4">
            <div>
              <p><span className="font-semibold">Байланыш:</span> 0701 58 73 73 / 0557 58 73 73</p>
              <p><span className="font-semibold">Email:</span> {TEACHER_INFO.contacts.email}</p>
            </div>
            <div className="sm:text-right">
              <p className="font-bold text-slate-900">Нурланбекова Мимоза Нурланбековна</p>
              <p className="text-slate-500">Военно-Антоновка жалпы билим берүү мектеби</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
