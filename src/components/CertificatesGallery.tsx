import React, { useState, useEffect } from 'react';
import { 
  Award, 
  GraduationCap, 
  ZoomIn, 
  X, 
  ExternalLink, 
  ShieldCheck, 
  Clock, 
  ChevronLeft, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

export interface VerifiedDocument {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: 'qualification' | 'award' | 'honor';
  categoryLabel: string;
  hours?: string;
  docNumber?: string;
  imageUrl: string;
  description: string;
}

export const VERIFIED_DOCUMENTS: VerifiedDocument[] = [
  {
    id: "doc-asia-pedagog",
    title: "«Лучший педагог Центральной Азии» — I даражадагы Диплом жана Медаль",
    issuer: "«Билим-өркениеті» улуттук борбору & «Жаңа Қазақстан» (Астана ш.)",
    year: "2025",
    category: "award",
    categoryLabel: "Эл аралык сыйлык",
    docNumber: "Диплом № 25-12043 / Күбөлүк № 05-096",
    imageUrl: "https://i.postimg.cc/zGB03p3w/2df1920a-9df1-43d9-b848-26c82ae9cb0b.jpg",
    description: "Борбор Азия өлкөлөрүнүн билим берүү системасын өнүктүрүүгө кошкон зор салымы жана жогорку кесипкөйлүгү үчүн I даражадагы диплом жана төш белгиси."
  },
  {
    id: "doc-yurt-faxri",
    title: "«YURT FAXRI» Эл аралык наамы жана төш белгиси (Медаль)",
    issuer: "«Scientific Publication» илимий басма борбору (Ташкент ш.)",
    year: "2025",
    category: "award",
    categoryLabel: "МДХ эл аралык сыйлыгы",
    docNumber: "Күбөлүк № 174",
    imageUrl: "https://i.postimg.cc/v8cjSYGX/89ea7655-1915-449b-86ea-004f338ad781.jpg",
    description: "МДХ (КМШ) масштабындагы кароо-сынактын жеңүүчүсү катары илимий-изилдөө макаласы жана жетекчилик ишмердүүлүгү үчүн ыйгарылган."
  },
  {
    id: "doc-zeen-teacher",
    title: "«Зээндүү мугалим - 2026» Төш белгиси жана Грамотасы",
    issuer: "«Zeen education center» билим берүү борбору (Бишкек ш.)",
    year: "2026",
    category: "award",
    categoryLabel: "Республикалык сыйлык",
    imageUrl: "https://i.postimg.cc/ncT3HNF6/4ae26582-0b96-4460-8771-5606bf17ef94.jpg",
    description: "Педагогика, психология, мугалимдин укуктары жана мамлекеттик стандартты мыкты деңгээлде өздөштүргөндүгү үчүн ыйгарылган."
  },
  {
    id: "doc-mkt-ednet",
    title: "«Маалыматтык-коммуникациялык технологиялар окуу процессинде» Сертификаты",
    issuer: "РПКККЖКДИ жана «EdNet» билим берүү сапатын камсыздоо агенттиги",
    year: "2023",
    category: "qualification",
    categoryLabel: "Квалификация жогорулатуу",
    hours: "72 саат",
    docNumber: "Каттоо № 22606",
    imageUrl: "https://i.postimg.cc/pVf0Spgn/70eef262-e5b1-4de0-85e7-1d7df8e346a3.jpg",
    description: "Заманбап МКТ куралдарын жана санариптик платформаларды сабакта натыйжалуу колдонуу боюнча 72 сааттык мамлекеттик курс."
  },
  {
    id: "doc-coding-prog",
    title: "«Программалоо тилин окутуу методикасы» Сертификаты",
    issuer: "КР Билим берүү жана илим министрлигинин алдындагы РПКККЖКДИ",
    year: "2023",
    category: "qualification",
    categoryLabel: "Квалификация жогорулатуу",
    hours: "72 саат",
    docNumber: "№ LE170000234",
    imageUrl: "https://i.postimg.cc/x83tN4KL/f81b4ba3-11ab-45eb-8e72-84ca6be85070-(1).jpg",
    description: "Окуучуларга алгоритмдөө жана программалоо тилдерин түшүндүрүүнүн жаңы педагогикалык методикалары боюнча 72 сааттык сертификат."
  },
  {
    id: "doc-informatics-method",
    title: "«Информатиканы окутуунун теориясы жана методикасы» Сертификаты",
    issuer: "КР Билим берүү жана илим министрлигинин алдындагы РПКККЖКДИ",
    year: "2022",
    category: "qualification",
    categoryLabel: "Квалификация жогорулатуу",
    hours: "72 саат",
    docNumber: "Каттоо № 3230",
    imageUrl: "https://i.postimg.cc/XJF24Jqs/f18f9ed3-7035-48ba-b36f-39fe25723c63.jpg",
    description: "Информатика предметин окутуунун мамлекеттик стандарты жана компетенциялык мамиле боюнча 72 сааттык курс."
  },
  {
    id: "doc-class-lead",
    title: "«Мыкты класс жетекчи - 2026» Ардак грамотасы жана Тастыктамасы",
    issuer: "«Мугалим» илимий журналы & Ж.Баласагын атындагы КУУ",
    year: "2026",
    category: "qualification",
    categoryLabel: "Квалификация & Сыйлык",
    hours: "72 саат",
    docNumber: "Тастыктама № 087 / Грамота № 2/1370",
    imageUrl: "https://i.postimg.cc/V6yRG8gt/6dcd80a1-83c1-4b98-99cd-d2f49b6b25d8.jpg",
    description: "Билим берүү мекемелеринде тарбия ишин башкарууда класс жетекчинин усулдук иши боюнча 72 сааттык курс жана республикалык Ардак грамота."
  },
  {
    id: "doc-district-seminar",
    title: "Сокулук райондук окуу бөлүмдөрүнүн семинарынын Грамотасы",
    issuer: "Военно-Антоновка жалпы билим берүү мектеби & Сокулук РБББ",
    year: "2025",
    category: "honor",
    categoryLabel: "Райондук грамота",
    imageUrl: "https://i.postimg.cc/Jh0c4h6T/5cb0bcb7-12ae-4c68-91ed-e4508ca7f20e.jpg",
    description: "Мектептердин окуу бөлүм башчыларынын райондук семинарын жогорку педагогикалык чеберчиликте өткөрүүгө активдүү катышкандыгы үчүн."
  },
  {
    id: "doc-va-honor",
    title: "Военно-Антоновка жалпы билим берүү мектебинин Ардак грамотасы",
    issuer: "Военно-Антоновка жалпы билим берүү мектебинин жетекчилиги",
    year: "2025",
    category: "honor",
    categoryLabel: "Мектептик сыйлык",
    imageUrl: "https://i.postimg.cc/qvjS5z65/a2836351-407b-45bd-803f-d643a116c47b.jpg",
    description: "Мугалимдик кесиптеги өзгөчө кесипкөйлүгү, жаш муундарды тарбиялоодогу жана мектептин коомдук иштерине кошкон салымы үчүн."
  },
  {
    id: "doc-blagodarnost",
    title: "Мектеп жетекчилигинин Ыраазычылык каты (Благодарность)",
    issuer: "Военно-Антоновка жалпы билим берүү мектебинин директору Л.Н. Сыдыкова",
    year: "2024",
    category: "honor",
    categoryLabel: "Мектеп жетекчилиги",
    imageUrl: "https://i.postimg.cc/gJ67jstd/827a74d6-1ffc-4a90-b20c-eaa80e23992e.jpg",
    description: "Өсүп келе жаткан жаш муундарды татыктуу тарбиялоодогу жана окутуудагы үзүрлүү эмгеги үчүн директордун расмий каты."
  },
  {
    id: "doc-kozhomkul",
    title: "Кожомкул айыл өкмөтүнүн Ардак грамотасы",
    issuer: "Кожомкул айыл өкмөтү",
    year: "2026",
    category: "honor",
    categoryLabel: "Айыл өкмөтү",
    imageUrl: "https://i.postimg.cc/g0xSt4Wn/ecca892f-ecac-4dd9-a64a-39c2300d5df9.jpg",
    description: "Жаш муундарды тарбиялоодо жана сапаттуу билим берүүдөгү зор салымы үчүн ыйгарылган."
  },
  {
    id: "doc-taza-jazyy",
    title: "И. Арабаев атындагы КМУ — «Таза жазуу» сертификаты",
    issuer: "И. Арабаев атындагы Кыргыз Мамлекеттик Университети",
    year: "2014",
    category: "qualification",
    categoryLabel: "Сабаттуулук сертификаты",
    imageUrl: "https://i.postimg.cc/7YNW5f9k/dbb51dec-09ec-4aad-a619-21184fe97e3e.jpg",
    description: "Кыргыз тили боюнча сабаттуулукту текшерүүчү «Таза жазуу» республикалык билим берүү акциясына катышкандыгы үчүн сертификат."
  }
];

export const CertificatesGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'qualification' | 'award' | 'honor'>('all');
  const [selectedDoc, setSelectedDoc] = useState<VerifiedDocument | null>(null);

  const filteredDocs = activeFilter === 'all'
    ? VERIFIED_DOCUMENTS
    : VERIFIED_DOCUMENTS.filter((doc) => doc.category === activeFilter);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedDoc(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="certificates" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-700 uppercase tracking-wider mb-2 font-mono">
              <GraduationCap className="w-4 h-4 text-cyan-600" />
              <span>Сертификаттар жана Сыйлыктар</span>
              <span aria-hidden="true">·</span>
              <span>Расмий документтердин галереясы</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              Сертификаттар жана Кесиптик Сыйлыктар
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl leading-relaxed">
              Мугалимдин квалификациясын жогорулатуу курстарынын (72 саат), эл аралык дипломдорунун, 
              медалдарынын жана расмий грамоталарынын түп нуска сүрөттөрү. Каалаган документти басып, толук чоңойтуп көрө аласыз.
            </p>
          </div>

          {/* Clean Segmented Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Бардыгы ({VERIFIED_DOCUMENTS.length})
            </button>
            <button
              onClick={() => setActiveFilter('qualification')}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === 'qualification'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Сертификаттар (72 саат)
            </button>
            <button
              onClick={() => setActiveFilter('award')}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === 'award'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Медалдар & Дипломдор
            </button>
            <button
              onClick={() => setActiveFilter('honor')}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === 'honor'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Грамоталар
            </button>
          </div>
        </div>

        {/* Unified Gallery Grid: Exactly 1 visual display per document */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDocs.map((doc, idx) => (
            <div
              key={doc.id}
              onClick={() => setSelectedDoc(doc)}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-cyan-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Visual Image container */}
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden border-b border-slate-100">
                  <img
                    src={doc.imageUrl}
                    alt={doc.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-104 transition-transform duration-500"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-2.5 rounded-full bg-white text-slate-900 shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                      <ZoomIn className="w-5 h-5 text-cyan-700" />
                    </span>
                  </div>

                  {/* Year Tag */}
                  <span className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded-md">
                    {doc.year}
                  </span>

                  {doc.hours && (
                    <span className="absolute top-2.5 right-2.5 bg-cyan-700/90 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded-md">
                      {doc.hours}
                    </span>
                  )}
                </div>

                {/* Card Text Content */}
                <div className="p-4">
                  <div className="flex items-center justify-between text-[11px] font-mono text-cyan-700 mb-1.5">
                    <span>{doc.categoryLabel}</span>
                    {doc.docNumber && (
                      <span className="text-slate-400 truncate max-w-[120px]">{doc.docNumber}</span>
                    )}
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-cyan-700 transition-colors line-clamp-2 mb-1.5">
                    {doc.title}
                  </h3>

                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {doc.description}
                  </p>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="px-4 pb-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-cyan-700 font-medium">
                <span className="flex items-center gap-1 group-hover:underline">
                  <ZoomIn className="w-3.5 h-3.5" />
                  Чоңойтуу
                </span>
                <span className="text-emerald-600 text-[11px] font-mono flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Түп нуска
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* High-Resolution Document Lightbox Modal */}
      {selectedDoc && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedDoc(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedDoc(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white text-white hover:text-slate-950 flex items-center justify-center transition-all z-10 cursor-pointer"
            aria-label="Жабуу"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="max-w-4xl max-h-[92vh] bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Preview Viewport */}
            <div className="flex-1 flex items-center justify-center bg-black/75 p-3 max-h-[72vh] overflow-hidden">
              <img
                src={selectedDoc.imageUrl}
                alt={selectedDoc.title}
                className="max-h-[70vh] max-w-full object-contain rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Bottom Metadata Panel */}
            <div className="p-5 bg-slate-900 text-white border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                  <span>{selectedDoc.year}-жыл</span>
                  <span>·</span>
                  <span>{selectedDoc.categoryLabel}</span>
                  {selectedDoc.hours && (
                    <>
                      <span>·</span>
                      <span>{selectedDoc.hours}</span>
                    </>
                  )}
                  {selectedDoc.docNumber && (
                    <>
                      <span>·</span>
                      <span>{selectedDoc.docNumber}</span>
                    </>
                  )}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {selectedDoc.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1 max-w-2xl">
                  {selectedDoc.issuer} — {selectedDoc.description}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={selectedDoc.imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Оригинал</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
