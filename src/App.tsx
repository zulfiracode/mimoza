import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { About } from './components/About';
import { FamilySection } from './components/FamilySection';
import { ArticlesSection } from './components/ArticlesSection';
import { VideoSection } from './components/VideoSection';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ArticleReaderModal } from './components/ArticleReaderModal';
import { TeacherDossierModal } from './components/TeacherDossierModal';
import { PresentationModal } from './components/PresentationModal';
import { SeminarModal } from './components/SeminarModal';
import { ClassLeadershipModal } from './components/ClassLeadershipModal';
import { PisaModal } from './components/PisaModal';
import { CollectiveModal } from './components/CollectiveModal';
import { MethodologicalDocumentsModal } from './components/MethodologicalDocumentsModal';
import { ParliamentExcursionModal } from './components/ParliamentExcursionModal';
import { OlympiadModal } from './components/OlympiadModal';
import { TeacherChatbot } from './components/TeacherChatbot';
import { SectionDivider } from './components/SectionDivider';
import { ArticleItem } from './data/articlesData';

export default function App() {
  const [isDossierOpen, setIsDossierOpen] = useState(false);
  const [isPresentationOpen, setIsPresentationOpen] = useState(false);
  const [isSeminarOpen, setIsSeminarOpen] = useState(false);
  const [isClassLeadershipOpen, setIsClassLeadershipOpen] = useState(false);
  const [isPisaOpen, setIsPisaOpen] = useState(false);
  const [isCollectiveOpen, setIsCollectiveOpen] = useState(false);
  const [isMethodologyOpen, setIsMethodologyOpen] = useState(false);
  const [isParliamentOpen, setIsParliamentOpen] = useState(false);
  const [isOlympiadOpen, setIsOlympiadOpen] = useState(false);
  const [readingArticle, setReadingArticle] = useState<ArticleItem | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-cyan-500 selection:text-white">
      {/* 1. Header with Top Navigation Bar */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. Hero Section with Portrait, Blue Gradient Title, Presentation Flipbook & interspp.com Button */}
        <Hero 
          onOpenDossier={() => setIsDossierOpen(true)} 
          onOpenPresentation={() => setIsPresentationOpen(true)}
          onOpenSeminar={() => setIsSeminarOpen(true)}
          onOpenClassLeadership={() => setIsClassLeadershipOpen(true)}
          onOpenPisa={() => setIsPisaOpen(true)}
          onOpenCollective={() => setIsCollectiveOpen(true)}
          onOpenMethodology={() => setIsMethodologyOpen(true)}
          onOpenParliament={() => setIsParliamentOpen(true)}
          onOpenOlympiad={() => setIsOlympiadOpen(true)}
        />

        {/* 3. Full-width Key Metrics / Experience Strip */}
        <StatsBar />

        {/* Divider 1: Transition from StatsBar (navy) to About (teal/sage) */}
        <SectionDivider 
          variant="wave" 
          fillColor="text-teal-50" 
          className="bg-slate-900" 
        />

        {/* 4. Pedagogical Philosophy & Concept Overview */}
        <About />

        {/* Divider 2: Transition from About (teal/emerald) to FamilySection (rose/peach) */}
        <SectionDivider 
          variant="layered-wave" 
          fillColor="text-rose-50" 
          className="bg-teal-50/40" 
        />

        {/* 5. My Family Section (Менин үй-бүлөм) with 3 photos & warm philosophy */}
        <FamilySection />

        {/* Divider 3: Transition from FamilySection (rose/peach) to ArticlesSection (amber) */}
        <SectionDivider 
          variant="slant" 
          fillColor="text-amber-50" 
          className="bg-rose-50/40" 
        />

        {/* 6. 3 Articles & Essays: Interactive Cards/Buttons opening full text */}
        <ArticlesSection onReadArticle={(article) => setReadingArticle(article)} />

        {/* Divider 4: Transition from ArticlesSection (amber) to VideoSection (rose/red) */}
        <SectionDivider 
          variant="wave" 
          fillColor="text-rose-50" 
          className="bg-amber-50/40" 
        />

        {/* 6. YouTube Videos Block: Full Lesson Video & 3 Shorts */}
        <VideoSection />

        {/* Divider 4: Transition from VideoSection (rose/red) to Gallery (indigo/violet) */}
        <SectionDivider 
          variant="wave" 
          fillColor="text-indigo-50" 
          className="bg-rose-50/40" 
        />

        {/* 7. Pure Photo Gallery (сүрөттөрдү жөн эле галерея кылып чыгаруу) */}
        <Gallery />

        {/* Divider 5: Transition from Gallery (indigo) to Contact (sky/cyan) */}
        <SectionDivider 
          variant="wave" 
          fillColor="text-sky-50" 
          className="bg-indigo-50/50" 
          flip={true}
        />

        {/* 7. Contacts with Icons-Only: WhatsApp, Telegram, Instagram, Email */}
        <Contact />

        {/* Divider 5: Transition from Contact (sky/cyan) to Footer (slate-900) */}
        <SectionDivider 
          variant="curve" 
          fillColor="text-slate-900" 
          className="bg-slate-50" 
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenPresentation={() => setIsPresentationOpen(true)}
        onOpenSeminar={() => setIsSeminarOpen(true)}
        onOpenClassLeadership={() => setIsClassLeadershipOpen(true)}
        onOpenPisa={() => setIsPisaOpen(true)}
        onOpenCollective={() => setIsCollectiveOpen(true)}
        onOpenMethodology={() => setIsMethodologyOpen(true)}
        onOpenParliament={() => setIsParliamentOpen(true)}
        onOpenOlympiad={() => setIsOlympiadOpen(true)}
      />

      {/* Virtual AI Chatbot Assistant for the Teacher */}
      <TeacherChatbot />

      {/* Modals */}
      <ArticleReaderModal
        article={readingArticle}
        onClose={() => setReadingArticle(null)}
        onSelectArticle={(article) => setReadingArticle(article)}
      />

      <TeacherDossierModal
        isOpen={isDossierOpen}
        onClose={() => setIsDossierOpen(false)}
      />

      {/* Heyzine Flipbook Presentation Modal */}
      <PresentationModal
        isOpen={isPresentationOpen}
        onClose={() => setIsPresentationOpen(false)}
        url="https://heyzine.com/flip-book/0b781bbac0.html"
      />

      {/* Dedicated Seminar Photos Modal (Семинар баскычы) */}
      <SeminarModal
        isOpen={isSeminarOpen}
        onClose={() => setIsSeminarOpen(false)}
      />

      {/* Dedicated Class Leadership Modal (Класс жетекчилик баскычы) */}
      <ClassLeadershipModal
        isOpen={isClassLeadershipOpen}
        onClose={() => setIsClassLeadershipOpen(false)}
      />

      {/* Dedicated PISA-2025 Modal (PISA-2025 баскычы) */}
      <PisaModal
        isOpen={isPisaOpen}
        onClose={() => setIsPisaOpen(false)}
      />

      {/* Dedicated Collective Modal (Коллектив баскычы) */}
      <CollectiveModal
        isOpen={isCollectiveOpen}
        onClose={() => setIsCollectiveOpen(false)}
      />

      {/* Dedicated Methodological Documents Modal (Окуу-методикалык документтер) */}
      <MethodologicalDocumentsModal
        isOpen={isMethodologyOpen}
        onClose={() => setIsMethodologyOpen(false)}
      />

      {/* Dedicated Parliament Excursion Modal (Жогорку Кеңешке экскурсия) */}
      <ParliamentExcursionModal
        isOpen={isParliamentOpen}
        onClose={() => setIsParliamentOpen(false)}
      />

      {/* Dedicated Olympiad Modal (Информатика олимпиадасы) */}
      <OlympiadModal
        isOpen={isOlympiadOpen}
        onClose={() => setIsOlympiadOpen(false)}
      />
    </div>
  );
}


