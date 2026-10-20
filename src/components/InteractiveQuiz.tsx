import React, { useState } from 'react';
import { Terminal, CheckCircle2, XCircle, RotateCcw, Award, Sparkles, HelpCircle } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    question: "Алгоритм деген эмне?",
    options: [
      "Компьютердин экранындагы сүрөт",
      "Берилген максатка жетүү үчүн аткарылуучу кадамдардын так жана ырааттуу тизмеги",
      "Интернеттеги издөө системасы",
      "Компьютердик вирус"
    ],
    correct: 1,
    explanation: "Алгоритм — бул коюлган маселени чечүүгө багытталган аракеттердин так ырааттуулугу. Информатиканын негизги фундаменти болуп саналат."
  },
  {
    id: 2,
    question: "1 Байт канча битке барабар?",
    options: [
      "4 бит",
      "8 бит",
      "16 бит",
      "1024 бит"
    ],
    correct: 1,
    explanation: "1 Байт так 8 биттен турат жана ал бир символду (мисалы, бир тамганы же белгини) компьютердин эсинде сактоо үчүн жетиштүү."
  },
  {
    id: 3,
    question: "Интернетте киберкоопсуздукту сактоо үчүн эң ишенимдүү сыр сөз (пароль) кандай болушу керек?",
    options: [
      "Өз атыңыз жана туулган жылыңыз (мисалы, Aliya2010)",
      "12345678",
      "Чоң жана кичине тамгалар, сандар жана атайын белгилер камтылган 10+ символдон турган сыр сөз",
      "Бардык сайттарга бир эле жеңил паролду колдонуу"
    ],
    correct: 2,
    explanation: "Күчтүү сыр сөздөр ар түрдүү регистрдеги тамгаларды, сандарды жана символдорду камтып, эч качан жеке маалыматка байланбашы керек."
  },
  {
    id: 4,
    question: "Балдарга программалоону визуалдык блоктор аркылуу үйрөтүүчү атактуу платформа кайсы?",
    options: [
      "Scratch",
      "Excel",
      "Notepad",
      "Photoshop"
    ],
    correct: 0,
    explanation: "Scratch — MIT лабораториясы тарабынан иштелип чыккан, балдарга логиканы жана анимацияларды оңой үйрөтүүчү визуалдык чөйрө."
  }
];

export const InteractiveQuiz: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentIdx];

  const handleSelectOption = (idx: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(idx);
    setShowExplanation(true);
    if (idx === currentQ.correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < QUIZ_QUESTIONS.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <section className="py-20 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-700 uppercase tracking-wider mb-2">
            <Terminal className="w-4 h-4 text-cyan-600" />
            <span>Интерактивдүү бурч</span>
            <span aria-hidden="true">·</span>
            <span>Санариптик сабаттуулук</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Информатика боюнча кыскача экспресс-тест
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Окуучуларга сабак берүүдө колдонулган интерактивдүү суроолордон өтүп, билимиңизди сынап көрүңүз!
          </p>
        </div>

        {/* Quiz Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          {!isFinished ? (
            <div>
              {/* Progress Bar */}
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-4">
                <span>Суроо {currentIdx + 1} / {QUIZ_QUESTIONS.length}</span>
                <span>Упай: {score}</span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mb-6">
                <div
                  className="bg-cyan-600 h-full transition-all duration-300"
                  style={{ width: `${((currentIdx + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                />
              </div>

              {/* Question Text */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-6 leading-snug">
                {currentQ.question}
              </h3>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {currentQ.options.map((opt, idx) => {
                  let btnStyle = "bg-white text-slate-800 border-slate-200 hover:border-cyan-400";
                  if (selectedOption !== null) {
                    if (idx === currentQ.correct) {
                      btnStyle = "bg-emerald-50 text-emerald-900 border-emerald-400 font-semibold";
                    } else if (idx === selectedOption) {
                      btnStyle = "bg-rose-50 text-rose-900 border-rose-400";
                    } else {
                      btnStyle = "bg-white text-slate-400 border-slate-200 opacity-60";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      disabled={selectedOption !== null}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full p-4 rounded-xl border text-left text-sm transition-all flex items-start justify-between gap-3 cursor-pointer ${btnStyle}`}
                    >
                      <span>{opt}</span>
                      {selectedOption !== null && idx === currentQ.correct && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      )}
                      {selectedOption !== null && idx === selectedOption && idx !== currentQ.correct && (
                        <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation & Next Button */}
              {showExplanation && (
                <div className="pt-4 border-t border-slate-200 space-y-4 animate-in fade-in">
                  <div className="bg-cyan-50/70 border border-cyan-200/80 rounded-xl p-4 text-xs sm:text-sm text-cyan-900 leading-relaxed">
                    <span className="font-bold">Мугалимдин түшүндүрмөсү: </span>
                    {currentQ.explanation}
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-cyan-700 transition-colors cursor-pointer"
                    >
                      {currentIdx + 1 < QUIZ_QUESTIONS.length ? 'Кийинки суроо →' : 'Жыйынтыкты көрүү 🏆'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Finished View */
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 mx-auto flex items-center justify-center">
                <Award className="w-9 h-9" />
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Азаматсыз! Тест аяктады!
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Сиз {QUIZ_QUESTIONS.length} суроодон <span className="font-bold text-cyan-700 font-mono">{score}</span> туура жооп бердиңиз.
                </p>
                <div className="mt-3 text-xs font-mono text-emerald-600">
                  {score === 4 ? "🌟 Эң сонун! Санариптик билим деңгээлиңиз мыкты!" : "👍 Жакшы натыйжа! Информатиканы үйрөнүүнү улантыңыз!"}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleRestart}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Кайрадан баштоо</span>
                </button>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-cyan-700 transition-colors cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Мугалим менен байланышуу</span>
                </a>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
