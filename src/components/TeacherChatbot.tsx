import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  Award,
  BookOpen,
  Phone,
  School,
  GraduationCap,
  Briefcase,
  Heart,
  FileText
} from 'lucide-react';
import { TEACHER_INFO, EDUCATION_DATA, CAREER_DATA, AWARDS_DATA, QUALIFICATIONS_DATA, PROJECTS_DATA } from '../data/portfolioData';
import { ARTICLES_DATA } from '../data/articlesData';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
}

export const TeacherChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialMessage: Message = {
    id: 'welcome',
    sender: 'bot',
    text: `Саламатсызбы! Мен Нурланбекова Мимоза Нурланбековнанын санариптик жеке жардамчысымын. 

Мугалимдин өмүр баяны, билими, кыргыз-кытай ишканасындагы менеджерлик тажрыйбасы, мектептеги 10 жылдык стажы, райондук жетекчилиги, үй-бүлөсү, эл аралык сыйлыктары («Лучший педагог Центральной Азии», «YURT FAXRI» ж.б.), 3 автордук макаласы, долбоорлору же байланыштары боюнча каалаган сурооңузду бериңиз!`,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };

  const [messages, setMessages] = useState<Message[]>([initialMessage]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const quickQuestions = [
    { label: 'Өмүр баяны жана жери?', query: 'Мимоза Нурланбековна качан жана кайда төрөлгөн?' },
    { label: 'Стажы канча жыл?', query: 'Педагогикалык жана жалпы эмгек стажы канча жыл?' },
    { label: 'Билими жана ЖОЖдору?', query: 'Кайсы университеттерде жана мектепте окуган?' },
    { label: 'Менеджерлик тажрыйбасы?', query: 'Кыргыз-кытай ишканасында кандай кызматта иштеген?' },
    { label: 'Үй-бүлөсү жана балдары?', query: 'Үй-бүлөсү, жолдошу жана балдары жөнүндө айтып бериңиз?' },
    { label: 'Райондук жетекчилиги?', query: 'Сокулук району боюнча кандай жетекчилик милдетти аткарат?' },
    { label: 'Сыйлыктары жана медалдары?', query: 'Кандай эл аралык жана республикалык сыйлыктары бар?' },
    { label: '3 автордук макаласы?', query: 'Жарыяланган 3 автордук макаласы кайсылар?' },
    { label: 'Мектептик долбоорлору?', query: 'Кандай автордук жана IT долбоорлорду ишке ашырган?' },
    { label: 'Квалификациялык курстары?', query: 'Квалификациясын жогорулатуу курстары кайсылар?' },
    { label: 'Байланыш жана унаасы?', query: 'Мугалим менен кантип байланышса болот жана унаасынын номуру кандай?' },
  ];

  // Deep domain response engine built directly from the uploaded resume and documents
  const generateTeacherAnswer = (questionText: string): string => {
    const q = questionText.toLowerCase().trim();

    // 1. Birth, Biography, Hometown, Age
    if (
      q.includes('төрөлгөн') || q.includes('туулган') || q.includes('кайдан') || 
      q.includes('казарман') || q.includes('тогуз-торо') || q.includes('жалал-абад') || 
      q.includes('өмүр баян') || q.includes('биография') || q.includes('жашы') || 
      q.includes('родил') || q.includes('биография') || q.includes('возраст')
    ) {
      return `📌 Нурланбекова Мимоза Нурланбековнанын өмүр таржымалы:
• Туулган күнү: 1990-жылдын 19-апрели (19.04.1990).
• Туулган жери: Жалал-Абад облусунун Тогуз-Торо районуна караштуу Казарман айылы.
• Улуту: Кыргыз. Жарандыгы: Кыргыз Республикасы.
• Бала кезинен билимге өзгөчө дилгир болуп өсүп, 1997–2008-жылдары Казарман айылындагы орто мектепте билим алган. Бүгүнкү күндө Чүй облусунун Сокулук районуна караштуу Военно-Антоновка айылында жашап, Военно-Антоновка жалпы билим берүү мектебинде эмгектенет.`;
    }

    // 2. Education, Universities, Degrees
    if (
      q.includes('билим') || q.includes('университет') || q.includes('окуган') || 
      q.includes('мук') || q.includes('арабаев') || q.includes('кму') || 
      q.includes('магистр') || q.includes('бюджет') || q.includes('факультет') || 
      q.includes('диплом') || q.includes('образовани') || q.includes('вуз')
    ) {
      return `🎓 Мимоза Нурланбековнанын билим алуу баскычтары:
1. 1997 – 2008-жж.: Казарман айылындагы орто мектеп (Жалпы орто билим).
2. 2008 – 2012-жж.: Бишкек шаарындагы Эл аралык университет (МУК), Менеджмент факультети — БЮДЖЕТТИК негизде аяктаган (Адистиги: Менеджер, жогорку билим). Бул жерде уюштуруучулук, көпчүлүк менен иштөө жана иш башкаруу көндүмдөрүн өздөштүргөн.
3. 2013 – 2016-жж.: И. Арабаев атындагы Кыргыз мамлекеттик университети (КМУ), Педагогикалык факультет (Адистиги: Информатика мугалими, жогорку педагогикалык билим).
4. 2024 – 2026-жж.: Магистратура / илимий-изилдөөчүлүк ишмердүүлүк (Санариптик билим берүү жана окутууда жасалма интеллектти колдонуу багытында изилдөө жүргүзүүдө).`;
    }

    // 3. Managerial Experience / Chinese Enterprise (2008-2014)
    if (
      q.includes('кытай') || q.includes('менеджер') || q.includes('кыргыз-кытай') || 
      q.includes('ишкана') || q.includes('компания') || q.includes('6 жыл') || 
      q.includes('бизнес') || q.includes('башкаруу')
    ) {
      return `💼 Менеджерлик иш тажрыйбасы:
Мимоза Нурланбековна МУКту аяктагандан кийин 2008–2014-жылдар аралыгында (толук 6 жыл) Кыргыз-кытай биргелешкен эл аралык ишканасында менеджер болуп үзүрлүү эмгектенген.
Бул жылдар аралыгында:
• Эмгек тартибин жана команда менен биргелешип иштөөнү;
• Ишти так пландоону жана уюштурууну;
• Жоопкерчиликтүү чечимдерди кабыл алууну жана ар бир ишке чыгармачылык менен мамиле кылууну мыкты өздөштүргөн. Кийин дал ушул уюштуруучулук жөндөмү анын педагогикалык ишмердүүлүгүндө чоң артыкчылык болуп берди.`;
    }

    // 4. Experience & Teaching Stazh
    if (
      q.includes('стаж') || q.includes('тажрыйба') || q.includes('канча жыл') || 
      q.includes('опыт') || q.includes('стаж работы') || q.includes('педагогический')
    ) {
      return `⏱️ Нурланбекова Мимоза Нурланбековнанын эмгек стажы:
• Педагогикалык эмгек стажы: 10 жыл 1 ай (2015-жылдан бери үзгүлтүксүз мектепте).
• Жалпы эмгек стажы: 18 жыл 1 ай (анын ичинде 6 жыл кыргыз-кытай биргелешкен ишканасындагы менеджерлик тажрыйбасы бар).
Билим берүү тармагында жогорку категориядагы педагог катары окуучуларга сапаттуу билим берип келет.`;
    }

    // 5. School, Location, Current Position
    if (
      q.includes('мектеп') || q.includes('кайда иштейт') || q.includes('военно-антоновка') || 
      q.includes('гимназия') || q.includes('сокулук') || q.includes('кожомкул') || 
      q.includes('класс жетекчи') || q.includes('школа') || q.includes('где работает')
    ) {
      return `🏫 Негизги жумуш орду жана кызматы:
• Чүй облусунун Сокулук районуна караштуу Военно-Антоновка жалпы билим берүү мектебинде 2015-жылдын 1-сентябрынан бери Информатика мугалими жана класс жетекчи болуп эмгектенет.
• Ошондой эле Сокулук району боюнча информатика мугалимдеринин усулдук бирикмесинин жетекчиси кызматын аркалайт.`;
    }

    // 6. District Methodological Leadership
    if (
      q.includes('район') || q.includes('усулдук') || q.includes('бирикме') || 
      q.includes('жетекчи') || q.includes('рббб') || q.includes('семинар') || 
      q.includes('руководитель метод')
    ) {
      return `🏛️ Райондук деңгээлдеги жетекчилик ишмердүүлүгү:
Мимоза Нурланбековна — Сокулук району боюнча информатика мугалимдеринин усулдук бирикмесинин жетекчиси.
Бул багыттагы негизги иштери:
• Райондук мектептердин информатика сабагы боюнча жылдык иш пландарын түзүү жана координациялоо;
• Мугалимдер арасында заманбап санариптик усулдар жана жаңы технологиялар боюнча тажрыйба бөлүшүү;
• Райондук деңгээлдеги усулдук семинарларды жана ачык мастер-класстарды жогорку деңгээлде уюштуруп өткөрүү.`;
    }

    // 7. Family, Husband, Children
    if (
      q.includes('үй-бүлө') || q.includes('жолдош') || q.includes('күйөө') || 
      q.includes('бала') || q.includes('кыз') || q.includes('уул') || 
      q.includes('турмуш') || q.includes('семья') || q.includes('муж') || 
      q.includes('дети') || q.includes('үй бүлө')
    ) {
      return `👨‍👩‍👧‍👦 Үй-бүлөлүк абалы жана тиреги:
• Мимоза Нурланбековна үй-бүлөлүү. 2014-жылы Чүй жергесинен болгон жолдошу менен турмуш курган.
• Үч баланын мээримдүү энеси: 1 уул, 2 кызды тарбиялап келишет.
• Жолдошунун колдоосу: Жолдошу анын мугалимдик кесибин, изденүүсүн жана билим берүүгө болгон сүйүүсүн дайыма терең урматтап келет. Чет өлкөлөргө (Астана, Ташкент) жана республикалык сынактарга чакырылган учурларда моралдык жактан гана эмес, үй-бүлөлүк шарттарды уюштуруп, «сенин колуңдан келет» деп чоң колдоо көрсөтөт. Мимоза эжей өзүнүн эссесинде: «Үй-бүлөм — күч-кубат берүүчү очогум, жолдошум — кесиптик жолумдагы ишенимдүү тирегим» деп сыймыктануу менен белгилейт.`;
    }

    // 8. Awards, Medals, Diplomas
    if (
      q.includes('сыйлык') || q.includes('медал') || q.includes('диплом') || 
      q.includes('жетишкендик') || q.includes('грамота') || q.includes('наам') || 
      q.includes('астана') || q.includes('ташкент') || q.includes('yurt faxri') || 
      q.includes('борбор азия') || q.includes('зээндүү') || q.includes('награды')
    ) {
      return `🏆 Мимоза Нурланбековнанын сыйлыктары жана жетишкендиктери:
1. 🥇 «Лучший педагог Центральной Азии - 2025» — I даражадагы Диплом (№25-12043), алтын чачылган медаль жана №05-096 күбөлүгү (Астана ш., Казакстан). «Билим-өркениеті» улуттук борбору.
2. 🎖️ «YURT FAXRI» («Улут сыймыгы») — МДХ (КМШ) масштабындагы кароо-сынактын эл аралык төш белгиси жана күбөлүк №174 (Ташкент ш., Өзбекстан, 2025). Илимий макаласы эл аралык журналга басылып чыккан.
3. 🌟 «Зээндүү мугалим - 2026» — Төш белгиси жана грамотасы («Zeen» билим берүү борбору, Бишкек ш.). Педагогика, психология жана стандарттар боюнча мыкты көрсөткүч.
4. 📜 «Мыкты класс жетекчи - 2026» — Республикалык кароо-сынагынын Ардак грамотасы (каттоо №2/1370) жана 72 сааттык тастыктамасы (№087), «Мугалим» журналы & КУУ.
5. 🏛️ Сокулук районунун окуу бөлүм башчыларынын семинарынын Грамотасы (2025).
6. 🏫 Военно-Антоновка жалпы билим берүү мектебинин жетекчилигинин Ардак грамотасы (2025).
7. 🌸 Кожомкул айыл өкмөтүнүн Ардак грамотасы (2026).
8. 💌 Военно-Антоновка мектебинин директору Л.Н. Сыдыкованын Ыраазычылык каты (2024).
9. ✨ «Жыл мугалими — 2027» сынагынын алдыңкы талапкери.`;
    }

    // 9. Articles & Publications
    if (
      q.includes('макала') || q.includes('эссе') || q.includes('жасалма интеллект') || 
      q.includes('акылды машинага') || q.includes('инновация') || q.includes('чыгарма') || 
      q.includes('статья') || q.includes('публикация') || q.includes('interspp')
    ) {
      return `📖 Мугалимдин 3 негизги автордук макаласы жана илимий эмгектери:
1. 📝 «Изденген мугалим — өнүккөн окуучу, өнүккөн окуучу — өлкөнүн жаркын келечеги» — Педагогикалык эссе: балалыгы, Казарман айылы, МУКтагы билими, 6 жыл менеджерлик тажрыйбасы, мугалимдикке келиши, үй-бүлөсү жана жолдошунун колдоосу, педагогикалык философиясы баяндалган.
2. 🤖 «АКЫЛДЫ МАШИНАГА ТАПШЫРСАК...» — Жасалма интеллект менен адам акылынын орду тууралуу философиялык-публицистикалык макала («YURT FAXRI» журналы, interspp.com, Ташкент 2025).
3. 💡 «БИЛИМ БЕРҮҮДӨ ИННОВАЦИЯ: ПЕДАГОГИКАЛЫК ӨЗГӨРҮҮНҮН ЗАМАНБАП МОДЕЛДЕРИ ЖАНА КЫРГЫЗСТАНДЫН БИЛИМ БЕРҮҮ СИСТЕМАСЫ ҮЧҮН МҮМКҮНЧҮЛҮКТӨРҮ» — Инновацияны мектепке киргизүүнүн 7 этаптуу модели, UNESCO жана OECD методологиясын камтыган фундаменталдуу илимий макала (2026).

🌐 Ошондой эле сайтта «interspp.com ↗» кнопкасы орнотулган, аны басып эл аралык илимий порталга (https://interspp.com/) түздөн-түз өтө аласыз!`;
    }

    // 10. Projects & Extracurriculars
    if (
      q.includes('долбоор') || q.includes('проект') || q.includes('ийрим') || 
      q.includes('санариптик сабак') || q.includes('жаш программист') || 
      q.includes('scratch') || q.includes('python') || q.includes('киберкоопсуздук') || 
      q.includes('папка')
    ) {
      return `🚀 Мугалимдин 4 автордук инновациялык долбоору:
1. «Санариптик Сабак» — Интерактивдүү симуляторлор, санариптик лаборатория жана онлайн тесттер (предметке болгон кызыгууну 40%га арттырган).
2. «Жаш Программист» — 6–9-класстын окуучулары үчүн Scratch 3.0 жана Python негиздеринде код жазуу ийрими (35тен ашык окуучу өз оюндарын түзгөн).
3. «КиберКоопсуздук жана Санариптик Этикет» — Интернеттеги жеке маалыматты коргоо, фишинг жана кибербуллингдин алдын алуу боюнча окуучуларга жана ата-энелерге тренингдер (200дөн ашык окуучу тестирлөөдөн өткөн).
4. «Класс жетекчинин санариптик папкасы» — Тарбиялык пландарды жана иш кагаздарды электрондоштуруу боюнча республикалык деңгээлде таанылган иштелме (кагаз иштерин 50%га кыскарткан).`;
    }

    // 11. Qualifications & Professional Development / Certificates presentation
    if (
      q.includes('квалификаци') || q.includes('курс') || q.includes('сертификат') ||
      q.includes('презентаци') || q.includes('flip') || q.includes('heyzine') ||
      q.includes('мкт') || q.includes('методика')
    ) {
      return `📜 Сертификаттар жана Квалификациялык иштелмелер:
• Педагогикалык сертификаттары жана материалдары интерактивдүү Heyzine презентациясында жеткиликтүү: https://heyzine.com/flip-book/0b781bbac0.html
• Негизги 72 сааттык курстары: «МКТ окуу процессинде», «Программалоо тилин окутуу методикасы», «Информатиканы окутуу теориясы» жана «Класс жетекчинин усулдук иши».
Сайттагы «Сертификаттар / Презентация» баскычын басып, интерактивдүү түрдө барактап көрө аласыз!`;
    }

    // 11.5 Seminar & Open lessons photo archive
    if (q.includes('семинар') || q.includes('ачык сабак') || q.includes('мастер-класс') || q.includes('scratch') || q.includes('python')) {
      return `📸 «САНАРИПТИК БИЛИМ БЕРҮҮ — ИННОВАЦИЯЛЫК КЕЛЕЧЕККЕ КАДАМ!»:
📅 2026-жылдын 24-февралында Военно-Антоновка жалпы билим берүү мектебинде Сокулук районунун информатика мугалимдери үчүн райондук усулдук семинар өткөрүлдү.
• Катышуучулар: Райондогу 47 мектептин информатика мугалимдери.
• Ачык сабактар: 5-класстарда Scratch, 7-класстарда Python программалоо тилдери боюнча инновациялык окутуу ыкмалары (жаңы 12 жылдык билим берүү талаптарына ылайык).
✨ «Санариптик доордо жаңыланган мугалим — келечекке жол ачкан мугалим!»
• Сүрөттөрдү көрүү үчүн сайттагы «Семинар» баскычын басыңыз!`;
    }

    // 11.6 Class Leadership & Educational Activity
    if (q.includes('класс жетекчи') || q.includes('тарбиялык') || q.includes('тарбия') || q.includes('класс жетекчилик') || q.includes('ынтымак') || q.includes('ата-эне')) {
      return `🎓 «КЛАСС ЖЕТЕКЧИНИН ТАРБИЯЛЫК ИШМЕРДҮҮЛҮГҮ»:
2023-жылдан тартып окуучулардын билим алуусуна, инсандык өнүгүүсүнө жана адеп-ахлактык тарбиясына багытталган иштер системалуу жүргүзүлөт:
1. Окуучулар менен жекече иш алып баруу;
2. Тарбиялык сааттарды өткөрүү («Мекеним — Кыргызстаным», «Достук жана ынтымак», «Интернетти коопсуз пайдалануу» ж.б.);
3. Класстан тышкаркы иш-чараларды уюштуруу;
4. Окуучулар арасында ынтымакты жана биримдикти бекемдөө;
5. Ата-энелер менен кызматташуу;
6. Окуучулардын жетишкендиктерин колдоо.
🎥 Видео жана 24 сүрөттөн турган фото-отчет сайттагы «Класс жетекчилик» кнопкасында жеткиликтүү!`;
    }

    // 11.7 Methodological Documents
    if (q.includes('документ') || q.includes('методика') || q.includes('план') || q.includes('стандарт') || q.includes('программа')) {
      return `📑 «ОКУУ-МЕТОДИКАЛЫК ДОКУМЕНТТЕР»:
Сайтта төмөнкү расмий документтер толук жайгаштырылган:
1. 📘 Информатика предмети боюнча 7-класс үчүн календардык-тематикалык план (2026–2027-окуу жылы);
2. 📗 Информатика боюнча мамлекеттик предметтик стандарт (5–9-класстар, 2025-жыл);
3. 📙 5-класс үчүн ачык сабактын иштелмеси (план-конспект, 5E модели, Scratch);
4. 💻 5-класс үчүн ачык сабактын көрсөтмөлүү слайд-презентациясы (Scratch, 22 слайд).
Бардык документтерди «Окуу-методикалык документтер» баскычынан көрүп же PDF форматында жүктөп алсаңыз болот!`;
    }

    // 11.8 Jogorku Kenesh Excursion
    if (q.includes('жогорку кеңеш') || q.includes('парламент') || q.includes('экскурсия') || q.includes('депутат') || q.includes('тайгараевна')) {
      return `🏛️ «КЕЛЕЧЕККЕ КАДАМ: ОКУУЧУЛАРДЫН ҮНҮ — ӨЛКӨНҮН ҮМҮТҮ!» (2026-жылдын 22-майы):
Нурланбекова Мимоза Нурланбековна жана кесиптеши Жусупахматова Билимгүл Уланбековна 20дан ашык алдыңкы окуучулары менен КР Жогорку Кеңешине таанып-билүү экскурсиясына барышкан.
• Окуучулар Сокулук райондук округунун депутаты Эдита Тайгараевна менен жолугушуп, коомдук көйгөйлөр жана келечек тууралуу маектешишкен.
• Уюштурууга Сокулук райондук администрациясынан Маниясов Мирбек мырза көмөк көрсөткөн.
• Сайттагы «Жогорку Кеңешке экскурсия» баскычы аркылуу 3 сүрөттү жана 6 Shorts видео-отчетту көрө аласыз!`;
    }

    // 12. Motto & Pedagogical Philosophy
    if (
      q.includes('девиз') || q.includes('ураан') || q.includes('философия') || 
      q.includes('кредо') || q.includes('принцип') || q.includes('формула')
    ) {
      return `✨ Мимоза Нурланбековнанын педагогикалык девизи:
«Өзүң изденсең — окуучуңду изденүүгө үйрөтөсүң. Өзүң өнүксөң — окуучуңдун келечегине жол ачасың».
Негизги педагогикалык формуласы:
«Билим — Изденүү — Өнүгүү». Билим мүмкүнчүлүк берет, изденүү жаңы нерсеге жетелейт, ал эми өнүгүү жаркын келечекке жол ачат!`;
    }

    // 13. Contacts, Phone numbers, WhatsApp, Car
    if (
      q.includes('байланыш') || q.includes('номер') || q.includes('телефон') || 
      q.includes('вотсап') || q.includes('whatsapp') || q.includes('почта') || 
      q.includes('инстаграм') || q.includes('авто') || q.includes('машина') || 
      q.includes('унаа') || q.includes('контакт') || q.includes('номер авто')
    ) {
      return `📞 Байланыш маалыматтары жана унаасы:
• Телефондор: 0557 58 73 73 же 0701 58 73 73
• WhatsApp: 0701 58 73 73
• Instagram: @nur.mimulya (https://www.instagram.com/nur.mimulya?dlrf=dHNuY2J2Zm50NzI0)
• Электрондук почта: mimo.miss@mail.ru
• Telegram: +996701587373
• Автоунаа номуру: 08KG 088NMN
• Иштеген жери: Чүй облусу, Сокулук району, Военно-Антоновка жалпы билим берүү мектеби.`;
    }

    // 14. Year Teacher 2027
    if (q.includes('жыл мугалими') || q.includes('2027') || q.includes('учитель года')) {
      return `🌟 «Жыл мугалими — 2027»:
Ооба, Нурланбекова Мимоза Нурланбековна өзүнүн 10 жыл 1 айлык педагогикалык үзүрлүү эмгеги, Борбордук Азиянын «Мыкты педагогу — 2025», «YURT FAXRI» жана «Зээндүү мугалим — 2026» сыйлыктары, автордук долбоорлору менен «Жыл мугалими — 2027» сынагынын башкы талапкери болуп саналат!`;
    }

    // 15. Greetings
    if (
      q.includes('саламат') || q.includes('кандай') || q.includes('ассалому') || 
      q.includes('привет') || q.includes('здравствуй') || q.includes('жакшысызбы')
    ) {
      return `Саламатсызбы! Мен информатика мугалими Нурланбекова Мимоза Нурланбековнанын санариптик жардамчысымын. Мугалимдин өмүр баяны, билими, стажы, сыйлыктары, макалалары, долбоорлору же байланыштары боюнча суроолоруңузга толук жооп берүүгө даярмын!`;
    }

    // General complete overview response
    return `Нурланбекова Мимоза Нурланбековна — Чүй облусунун Сокулук районуна караштуу Военно-Антоновка жалпы билим берүү мектебинин жогорку категориядагы информатика мугалими жана Сокулук району боюнча информатика мугалимдеринин усулдук бирикмесинин жетекчиси. 
• Туулган жери: Жалал-Абад облусу, Тогуз-Торо району, Казарман айылы (19.04.1990).
• Педагогикалык стажы: 10 жыл 1 ай, Жалпы иш тажрыйбасы: 18 жыл 1 ай (6 жыл кыргыз-кытай ишканасында менеджер).
• Билими: МУК Менеджмент (бюджет), И. Арабаев атындагы КМУ Информатика мугалими, Магистратура.
• Үй-бүлөсү: Үй-бүлөлүү (1 уул, 2 кыз). Жолдошу Чүй жергесинен.
• Негизги сыйлыктары: «Лучший педагог Центральной Азии - 2025» (Астана), «YURT FAXRI» (Ташкент), «Зээндүү мугалим - 2026», «Мыкты класс жетекчи - 2026».
• Байланышуу үчүн: 0701 58 73 73 же 0557 58 73 73.`;
  };

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      // First attempt: Call the backend Gemini 2.5 Flash /api/chat endpoint
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6000);

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        if (data && data.reply && typeof data.reply === 'string' && data.reply.trim().length > 0) {
          const botMsg: Message = {
            id: (Date.now() + 1).toString(),
            sender: 'bot',
            text: data.reply,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          };
          setMessages((prev) => [...prev, botMsg]);
          setIsTyping(false);
          return;
        }
      }
    } catch {
      // Network, timeout, or server unavailable: seamless fallback below
    }

    // High-fidelity fallback knowledge engine guaranteed to give exact, deep answers
    setTimeout(() => {
      const fallbackReply = generateTeacherAnswer(text);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: fallbackReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 350);
  };

  return (
    <>
      {/* Floating Toggle Button at bottom right */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-blue-700 via-cyan-600 to-indigo-700 text-white shadow-xl hover:shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer border border-white/20"
            aria-label="Чат ботту ачуу"
          >
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Bot className="w-5 h-5 text-white animate-pulse" />
            </div>
            <div className="text-left hidden sm:block">
              <p className="text-xs font-bold leading-tight">Мугалим тууралуу суроо</p>
              <p className="text-[10px] text-cyan-200">Виртуалдык AI жардамчы</p>
            </div>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping ml-1" />
          </button>
        </div>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[94vw] sm:w-[440px] max-h-[88vh] h-[600px] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-blue-700 via-cyan-600 to-indigo-700 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center border border-white/30">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-bold leading-tight">Мимоза эжейдин жардамчысы</h3>
                <div className="flex items-center gap-1.5 text-[11px] text-cyan-100">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                  <span>Резюме жана жеке маалыматтар гиди</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Жабуу"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Suggestion Chips */}
          <div className="p-2.5 bg-slate-50 border-b border-slate-100 flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs">
            {quickQuestions.map((chip, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSendMessage(chip.query)}
                className="px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-cyan-400 hover:text-cyan-700 whitespace-nowrap shrink-0 transition-colors text-[11px] font-medium cursor-pointer shadow-2xs"
              >
                {chip.label}
              </button>
            ))}
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-slate-50/50">
            {messages.map((msg) => {
              const isBot = msg.sender === 'bot';
              return (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${isBot ? 'justify-start' : 'justify-end'}`}
                >
                  {isBot && (
                    <div className="w-7 h-7 rounded-full bg-cyan-700 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div
                    className={`max-w-[84%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed whitespace-pre-line ${
                      isBot
                        ? 'bg-white text-slate-800 border border-slate-200 shadow-2xs'
                        : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-2xs'
                    }`}
                  >
                    {msg.text}
                    <div
                      className={`text-[9px] mt-1 text-right font-mono ${
                        isBot ? 'text-slate-400' : 'text-cyan-100'
                      }`}
                    >
                      {msg.timestamp}
                    </div>
                  </div>

                  {!isBot && (
                    <div className="w-7 h-7 rounded-full bg-slate-800 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}

            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-slate-500 italic pl-9">
                <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full animate-bounce" />
                <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full animate-bounce [animation-delay:0.4s]" />
                <span>Маалымат текшерилип, жооп даярдалууда...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Резюме жана мугалим тууралуу суроо..."
              className="flex-1 px-3.5 py-2 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2.5 rounded-xl bg-gradient-to-r from-blue-700 to-cyan-600 text-white hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-xs"
              aria-label="Жөнөтүү"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
};
