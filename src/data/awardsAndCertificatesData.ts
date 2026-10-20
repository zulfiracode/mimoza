export interface OfficialDocumentItem {
  id: string;
  title: string;
  category: 'award' | 'gramota';
  categoryLabel: string;
  badge: string;
  year: string;
  issuer: string;
  docNumber?: string;
  hours?: string;
  imageUrl: string;
  exactText: string;
  signatory: string;
}

export const OFFICIAL_DOCUMENTS: OfficialDocumentItem[] = [
  {
    id: "doc-asia-pedagog-2025",
    title: "«Лучший педагог Центральной Азии» — I даражадагы Диплом жана Медаль",
    category: "award",
    categoryLabel: "Эл аралык сыйлык",
    badge: "Эл аралык Диплом & Медаль",
    year: "2025",
    issuer: "«Bilim-orkenieti» Улуттук инновациялык борбору & «Жаңа Қазақстан» (Астана ш.)",
    docNumber: "Диплом № 25-12043 / Удостоверение № 05-096",
    imageUrl: "https://i.postimg.cc/zGB03p3w/2df1920a-9df1-43d9-b848-26c82ae9cb0b.jpg",
    signatory: "Директор «Жаңа Қазақстан»: Сәлімгерей Б.Н., Директор «Bilim-orkenieti»: Сатылганов А.Б.",
    exactText: `«ДИПЛОМ I степени.
Награждается Нурланбекова Мимоза Нурланбековна за победу в международном конкурсе «ЛУЧШИЙ ПЕДАГОГ ЦЕНТРАЛЬНОЙ АЗИИ», организованном в целях укрепления связей и сотрудничества между педагогами стран Центральной Азии, а также за многолетний труд, высокий профессионализм и весомый личный вклад в развитие системы образования и науки.

УДОСТОВЕРЕНИЕ № 05-096:
За выдающийся профессиональный вклад в развитие системы образования и науки стран Центральной Азии награждается нагрудным знаком «ЛУЧШИЙ ПЕДАГОГ ЦЕНТРАЛЬНОЙ АЗИИ».
город Астана – 2025 год.»`
  },
  {
    id: "doc-yurt-faxri-2025",
    title: "«YURT FAXRI» Эл аралык наамы жана Төш белгиси (Медаль)",
    category: "award",
    categoryLabel: "Эл аралык сыйлык",
    badge: "МДХ (КМШ) Медалы",
    year: "2025",
    issuer: "«SCIENTIFIC PUBLICATION» илимий басма борбору (Ташкент ш.), Ohangaron shahar hokimligi, O'zbekiston Yoshlar Ittifoqi",
    docNumber: "Guvohnoma № 174",
    imageUrl: "https://i.postimg.cc/v8cjSYGX/89ea7655-1915-449b-86ea-004f338ad781.jpg",
    signatory: "Qo'mita raisi / Direktor: Maraimov A.",
    exactText: `«TABRIKLAYMIZ! Hurmatli Nurlanbekova Mimoza Nurlanbekovna.
Sizning taqdim etgan hujjatlaringiz xalqaro ilmiy-amaliy konferensiya doirasida "YURT FAXRI" Mustaqil Davlatlar Hamdo'stligi (MDH) miqyosida tashkil etilgan xalqaro ilmiy-amaliy ko'rik tanloviga qabul qilinib, ilmiy kengash tomonidan ko'rib chiqildi va bir ovozdan ma'qullandi.
Tanlov ishtirokchilariga "YURT FAXRI" esdalik nishoni hamda esdalik nishon belgisi, maxsus ID raqamli guvohnoma, ilmiy maqolalar to'plami (elektron shaklda) tantanali ravishda Toshkent shahrida taqdim etiladi.

GUVOHNOMA № 174:
"YURT FAXRI" nominatsiyasi doirasida ko'krak nishoni bilan taqdirlanadi. Nurlanbekova Mimoza xalqaro tanlov g'olibi sifatida ilm-fan hamda jamiyat taraqqiyotiga qo'shgan hissasi uchun esdalik ko'krak nishoni bilan taqdirlandi.
Toshkent shahar, 2025-yil.»`
  },
  {
    id: "doc-zeen-teacher-2026",
    title: "«Зээндүү мугалим - 2026» Төш белгиси жана Грамотасы",
    category: "award",
    categoryLabel: "Республикалык сыйлык",
    badge: "Республикалык Төш белги & Грамота",
    year: "2026",
    issuer: "«Zeen education center» билим берүү борбору (Бишкек ш.)",
    imageUrl: "https://i.postimg.cc/ncT3HNF6/4ae26582-0b96-4460-8771-5606bf17ef94.jpg",
    signatory: "Ген. директор: Айнура Мамашарип кызы",
    exactText: `«ГРАМОТА.
2026-жылдын 7-мартында болуп өткөн "ЗЭЭНДҮҮ МУГАЛИМ-2026" конкурсуна активдүү катышып, педагогика, психология, мугалимдин укуктары жана мамлекеттик стандартты мыкты деңгээлде өздөштүрүп, жогорку натыйжаны көрсөткөндүгү үчүн Нурланбекова Мимоза Нурланбековна сыйланат!

КҮБӨЛҮК:
"Зээндүү мугалим" төш белгиси менен Нурланбекова Мимоза Нурланбековна сыйланат. Төш белги «Zeen» билим берүү борбору тарабынан 2026-жылдын 7-мартындагы буйругунун негизинде тапшырылды.
Бишкек шаары, 2026-жыл.»`
  },
  {
    id: "doc-class-lead-2026",
    title: "«Мыкты класс жетекчи - 2026» Ардак Грамотасы жана Тастыктамасы",
    category: "gramota",
    categoryLabel: "Республикалык сыйлык",
    badge: "Ардак Грамота",
    year: "2026",
    issuer: "«Мугалим» илимий-педагогикалык журналы & Ж. Баласагын атындагы КУУнун ПКМДИ",
    docNumber: "Каттоо № 2/1370, Буйрук № 5/7, Тастыктама № 087",
    imageUrl: "https://i.postimg.cc/V6yRG8gt/6dcd80a1-83c1-4b98-99cd-d2f49b6b25d8.jpg",
    signatory: "Башкы редактор, ПКМДИнин директору, п.и.д., профессор Р.Т. Сулайманова",
    exactText: `«АРДАК ГРАМОТА.
"Мугалим" илимий-педагогикалык журналынын 12 жылдыгына карата өткөрүлгөн "МЫКТЫ КЛАСС ЖЕТЕКЧИ - 2026" республикалык онлайн кароо-сынагына активдүү катышкандыгы үчүн Сокулук районундагы Военно-Антоновка жалпы билим берүү мектебинин информатика мугалими Нурланбекова Мимоза Нурланбековна АРДАК ГРАМОТА менен сыйланат.

ТАСТЫКТАМА № 087:
"Билим берүү мекемелеринде тарбия ишин башкарууда класс жетекчинин усулдук ишти жүргүзүүсү" программасы боюнча кыска мөөнөттүк дасыгуу курсун өткөндүгү ырасталат.
Бишкек-2026.`
  },
  {
    id: "doc-district-seminar-2025",
    title: "Сокулук райондук окуу бөлүм башчыларынын семинарынын Грамотасы",
    category: "gramota",
    categoryLabel: "Райондук грамота",
    badge: "Райондук деңгээл",
    year: "2025",
    issuer: "Военно-Антоновка жалпы билим берүү мектеби & Сокулук РБББ",
    imageUrl: "https://i.postimg.cc/Jh0c4h6T/5cb0bcb7-12ae-4c68-91ed-e4508ca7f20e.jpg",
    signatory: "Директор: Чүкүрова Т.Т., Орун басары: Жусупбекова А.Ж.",
    exactText: `«ГРАМОТА.
Военно-Антоновка жалпы билим берүү мектебинде Сокулук райондук мектептердин окуу бөлүмдөрүнүн башчыларынын райондук семинарын өткөрүүгө активдүү катышкандыгы, жогорку педагогикалык чеберчилиги, жоопкерчилүктүүлүгү жана жаш муундарга тарбия берүүдөгү жигердүү эмгеги үчүн информатика мугалими НУРЛАНБЕКОВА МИМОЗА НУРЛАНБЕКОВНА сыйланат.`
  },
  {
    id: "doc-va-honor-2025",
    title: "Военно-Антоновка жалпы билим берүү мектебинин Ардак Грамотасы",
    category: "gramota",
    categoryLabel: "Мектептик грамота",
    badge: "Мектептин Ардак Грамотасы",
    year: "2024–2025",
    issuer: "Военно-Антоновка жалпы билим берүү мектебинин жетекчилиги",
    imageUrl: "https://i.postimg.cc/qvjS5z65/a2836351-407b-45bd-803f-d643a116c47b.jpg",
    signatory: "Мектеп директору: Чүкүрова Т.Т.",
    exactText: `«АРДАК ГРАМОТА.
Военно-Антоновка жалпы билим берүү мектебинин информатика мугалими НУРЛАНБЕКОВА МИМОЗА НУРЛАНБЕКОВНА:
СЫЙМЫКТУУ ЖАНА ТҮЙШҮКТҮҮ МУГАЛИМДИК КЕСИПТЕ ЭМГЕКТЕНИП, АНЫ МЕНЕН КАТАР КЕЛЕЧЕК МУУНДАРДЫ ОКУТУП ТАРБИЯЛООДО, АДАМДЫК ЖОГОРКУ САПАТТАРДЫ КАЛЫПТАНДЫРУУДАГЫ ӨЗГӨЧӨ КЕСИПКӨЙЛҮГҮ, ЖАНА МЕКТЕПТИН КООМДУК ИШТЕРИНЕ КОШКОН ОЛУТТУУ САЛЫМЫ ҮЧҮН СЫЙЛАНАТ.»`
  },
  {
    id: "doc-kozhomkul-2026",
    title: "Кожомкул айыл өкмөтүнүн Ардак Грамотасы",
    category: "gramota",
    categoryLabel: "Айыл өкмөтү",
    badge: "Муниципалдык сыйлык",
    year: "2026",
    issuer: "Кожомкул айыл өкмөтү (Сокулук району, Чүй облусу)",
    imageUrl: "https://i.postimg.cc/g0xSt4Wn/ecca892f-ecac-4dd9-a64a-39c2300d5df9.jpg",
    signatory: "Башчысы: Э.О. Сартпаев",
    exactText: `«АРДАК ГРАМОТА.
Нурланбекова Мимоза Нурланбековна:
Жаш муундарды тарбиялоодо жана сапаттуу билим берүүдөгү зор салымы үчүн, 8-март - Эл аралык айымдардын күнүнө карата сыйланат.
Башчы: Э.О. Сартпаев, Кожомкул айыл өкмөтү, 2026-жыл.»`
  },
  {
    id: "doc-blagodarnost-2024",
    title: "Мектеп директорунун Ыраазычылык каты (Благодарность)",
    category: "gramota",
    categoryLabel: "Ыраазычылык каты",
    badge: "Директордун алкышы",
    year: "2024",
    issuer: "Военно-Антоновская Школа-Гимназия",
    imageUrl: "https://i.postimg.cc/gJ67jstd/827a74d6-1ffc-4a90-b20c-eaa80e23992e.jpg",
    signatory: "Директор: Сыдыкова Л.Н.",
    exactText: `«БЛАГОДАРНОСТЬ.
Выражается Нурланбек кызы Мимозе за достойное воспитание подрастающего поколения.
Директор Военно-Антоновской ШГ: Сыдыкова Л.Н. 8 Марта.»`
  }
];
