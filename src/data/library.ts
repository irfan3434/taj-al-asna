export interface LibraryEntry {
  t: string;
  meta: string;
  tEn: string;
  metaEn: string;
  /** Cloudflare Stream video UID. Leave '' until you have it; entries play once it's set. */
  video?: string;
}

export interface LibraryItem {
  id: string;
  ar: string;
  en: string;
  icon: string;
  kind: string;
  kindEn: string;
  meta: string;
  metaEn: string;
  entryIcon: string;
  desc: string;
  descEn: string;
  about: string;
  aboutEn: string;
  stat1: string; stat1En: string;
  stat2: string; stat2En: string;
  stat3: string; stat3En: string;
  entries: LibraryEntry[];
}

export const libraryData: LibraryItem[] = [
  {
    id: 'series', ar: 'سلسلة شرح الأسماء الحسنى', en: 'The Beautiful Names Series', icon: '▷',
    kind: 'فيديو', kindEn: 'Video', meta: '٩٩ حلقة', metaEn: '99 episodes', entryIcon: '▷',
    desc: 'دروس مرئية تشرح معاني الأسماء وأثرها في حياة المسلم.',
    descEn: "Video lessons explaining the meanings of the Names and their impact on a Muslim's life.",
    about: 'سلسلة تعليمية مرئية تتناول كل اسمٍ من أسماء الله الحسنى بالشرح والتدبّر، وتربط المعنى بحياة المسلم اليومية. مقدّمة من نخبةٍ من العلماء والمتخصصين، ومدقّقة شرعياً قبل النشر.',
    aboutEn: "An educational video series covering each of Allah's Beautiful Names with explanation and reflection, connecting meaning to daily Muslim life. Presented by a select group of scholars and specialists, and religiously verified before publishing.",
    stat1: '٩٩ حلقة', stat1En: '99 episodes', stat2: '١٠+ لغات', stat2En: '10+ languages', stat3: 'محدّثة أسبوعياً', stat3En: 'Updated weekly',
    // 👇 Beautiful Names Series — paste each episode's Cloudflare Stream UID into `video`.
    entries: [
      { t: 'الحلقة ١ — الرحمن الرحيم', meta: '١٤:٢٠', tEn: 'Episode 1 — Ar-Rahman, Ar-Raheem', metaEn: '14:20', video: '' },
      { t: 'الحلقة ٢ — الملك القدوس السلام', meta: '١٢:٤٥', tEn: 'Episode 2 — Al-Malik, Al-Quddus, As-Salam', metaEn: '12:45', video: '' },
      { t: 'الحلقة ٣ — العزيز الجبار المتكبر', meta: '١٥:١٠', tEn: 'Episode 3 — Al-Aziz, Al-Jabbar, Al-Mutakabbir', metaEn: '15:10', video: '' },
      { t: 'الحلقة ٤ — الخالق البارئ المصوّر', meta: '١٦:٣٠', tEn: 'Episode 4 — Al-Khaliq, Al-Bari, Al-Musawwir', metaEn: '16:30', video: '' },
      { t: 'الحلقة ٥ — الغفّار الغفور التوّاب', meta: '١٣:٠٥', tEn: 'Episode 5 — Al-Ghaffar, Al-Ghafur, At-Tawwab', metaEn: '13:05', video: '' },
    ],
  },
  {
    id: 'encyclopedia', ar: 'موسوعة المعاني والدلالات', en: 'Encyclopedia of Meanings', icon: '❑',
    kind: 'مقالات', kindEn: 'Articles', meta: '٢٤٠ مقالاً', metaEn: '240 articles', entryIcon: '❑',
    desc: 'مرجع نصّي موثّق لمعاني كل اسمٍ وشواهده القرآنية.',
    descEn: "A documented text reference for the meaning of each Name and its Qur'anic evidence.",
    about: 'موسوعةٌ نصّية شاملة تجمع لكل اسمٍ معناه اللغوي ودلالته الشرعية وشواهده من القرآن والسنّة، مع تخريج الأدلة وأقوال أهل العلم. مصدرٌ موثّق للباحثين والدارسين.',
    aboutEn: "A comprehensive text encyclopedia gathering for each Name its linguistic meaning, religious significance, and evidence from the Qur'an and Sunnah, with sourcing and scholars' statements. A trusted reference for researchers and students.",
    stat1: '٢٤٠ مقالاً', stat1En: '240 articles', stat2: 'مصادر موثّقة', stat2En: 'Documented sources', stat3: 'تخريج كامل', stat3En: 'Full sourcing',
    entries: [
      { t: 'مدخل: معنى «الإحصاء» في حديث الأسماء', meta: 'مقال', tEn: 'Intro: the meaning of “ihsa” in the hadith of the Names', metaEn: 'Article' },
      { t: 'الفرق بين الرحمن والرحيم', meta: 'مقال', tEn: 'The difference between Ar-Rahman and Ar-Raheem', metaEn: 'Article' },
      { t: 'أسماء الله في آية الكرسي', meta: 'مقال', tEn: "Allah's Names in Ayat al-Kursi", metaEn: 'Article' },
      { t: 'الأسماء المقترنة: العزيز الحكيم', meta: 'مقال', tEn: 'Paired Names: Al-Aziz, Al-Hakim', metaEn: 'Article' },
      { t: 'الأسماء الواردة في خواتيم السور', meta: 'مقال', tEn: 'Names appearing at the ends of surahs', metaEn: 'Article' },
    ],
  },
  {
    id: 'audio', ar: 'تلاوات وتأمّلات صوتية', en: 'Audio & Reflections', icon: '♪',
    kind: 'صوتيات', kindEn: 'Audio', meta: '١٢٠ مقطعاً', metaEn: '120 tracks', entryIcon: '♪',
    desc: 'مكتبة صوتية للذكر والتأمّل في أسماء الله الحسنى.',
    descEn: "An audio library for remembrance and reflection on Allah's Beautiful Names.",
    about: 'مكتبةٌ صوتية تجمع تلاوات الآيات المتضمّنة للأسماء الحسنى، وتأمّلاتٍ هادئة تعين على الحضور والخشوع. مناسبة للاستماع في كل وقت.',
    aboutEn: 'An audio library gathering recitations of verses that contain the Beautiful Names, along with calm reflections that aid presence and humility. Suitable for listening at any time.',
    stat1: '١٢٠ مقطعاً', stat1En: '120 tracks', stat2: 'جودة عالية', stat2En: 'High quality', stat3: 'تحميل متاح', stat3En: 'Download available',
    entries: [
      { t: 'ترتيل سورة الحشر (الأسماء الحسنى)', meta: '٠٤:٣٠', tEn: 'Recitation of Surah Al-Hashr (the Beautiful Names)', metaEn: '04:30' },
      { t: 'تأمّل في اسم «الرحمن»', meta: '٠٦:١٥', tEn: 'Reflection on the name “Ar-Rahman”', metaEn: '06:15' },
      { t: 'تأمّل في اسم «الحيّ القيّوم»', meta: '٠٥:٤٠', tEn: 'Reflection on “Al-Hayy, Al-Qayyum”', metaEn: '05:40' },
      { t: 'ذكر «يا لطيف» — جلسة هدوء', meta: '١٠:٠٠', tEn: 'Dhikr “Ya Latif” — a calm session', metaEn: '10:00' },
      { t: 'تأمّل في اسم «النور»', meta: '٠٧:٢٠', tEn: 'Reflection on the name “An-Nur”', metaEn: '07:20' },
    ],
  },
  {
    id: 'kids', ar: 'ركن الأطفال', en: "Children's Corner", icon: '✿',
    kind: 'تفاعلي', kindEn: 'Interactive', meta: 'للأعمار ٦+', metaEn: 'Ages 6+', entryIcon: '✦',
    desc: 'محتوى آمن وتفاعلي يحبّب الأطفال في أسماء ربّهم.',
    descEn: "Safe, interactive content that endears children to their Lord's Names.",
    about: 'ركنٌ مصمّم خصّيصاً للأطفال يقدّم أسماء الله الحسنى بأسلوبٍ قصصي تفاعلي محبّب وآمن، مع رسوم وألعاب تعليمية تغرس المعنى في القلوب الصغيرة.',
    aboutEn: "A corner designed specially for children, presenting Allah's Beautiful Names in a beloved, safe, interactive storytelling style, with illustrations and educational games that plant meaning in young hearts.",
    stat1: 'للأعمار ٦+', stat1En: 'Ages 6+', stat2: 'محتوى آمن', stat2En: 'Safe content', stat3: 'ألعاب تعليمية', stat3En: 'Educational games',
    // 👇 Children's Corner — paste the Cloudflare Stream UID for each video entry.
    entries: [
      { t: 'المنشئ للخلق على غير مثال سابق، المبدع لصور الموجودات', meta: 'البارئ', tEn: 'The Creator who brings into being without precedent, the Originator of the forms of all that exists.', metaEn: 'Creator', video: '4055ff668512c7eda505e5b28f21bf38' },
      { t: 'لعبة: طابِق الاسم بمعناه', meta: 'لعبة', tEn: 'Game: match the Name to its meaning', metaEn: 'Game' },
      { t: 'نشيد: أسماء ربي الحسنى', meta: 'نشيد', tEn: "Nasheed: my Lord's Beautiful Names", metaEn: 'Nasheed', video: '' },
      { t: 'تلوين: حديقة الأسماء', meta: 'نشاط', tEn: 'Coloring: the garden of Names', metaEn: 'Activity' },
      { t: 'قصة: الله الحفيظ يحرسنا', meta: 'قصة', tEn: 'Story: Al-Hafiz watches over us', metaEn: 'Story', video: '' },
    ],
  },
  {
    id: 'research', ar: 'أدوات الباحثين', en: 'Researcher Tools', icon: '⚲',
    kind: 'بحث', kindEn: 'Research', meta: 'مصادر معتمدة', metaEn: 'Accredited sources', entryIcon: '⚲',
    desc: 'مصادر أكاديمية وأدوات بحث متقدّمة وموثّقة.',
    descEn: 'Academic sources and advanced, documented research tools.',
    about: 'منصةٌ للباحثين توفّر أدوات بحثٍ متقدّمة في النصوص والمصادر، وفهرسةً دقيقة للآيات والأحاديث المتعلّقة بالأسماء الحسنى، مع إمكانية التصدير والاستشهاد.',
    aboutEn: 'A platform for researchers offering advanced search tools across texts and sources, precise indexing of verses and hadiths related to the Beautiful Names, with export and citation.',
    stat1: 'مصادر معتمدة', stat1En: 'Accredited sources', stat2: 'بحث متقدّم', stat2En: 'Advanced search', stat3: 'تصدير واستشهاد', stat3En: 'Export & citation',
    entries: [
      { t: 'محرّك البحث في شواهد الأسماء', meta: 'أداة', tEn: "Search engine for the Names' evidence", metaEn: 'Tool' },
      { t: 'فهرس الآيات حسب الاسم', meta: 'فهرس', tEn: 'Index of verses by Name', metaEn: 'Index' },
      { t: 'مكتبة المخطوطات والمراجع', meta: 'مكتبة', tEn: 'Library of manuscripts and references', metaEn: 'Library' },
      { t: 'أداة المقارنة بين أقوال المفسّرين', meta: 'أداة', tEn: "Tool to compare exegetes' statements", metaEn: 'Tool' },
      { t: 'مولّد الاستشهادات الأكاديمية', meta: 'أداة', tEn: 'Academic citation generator', metaEn: 'Tool' },
    ],
  },
  {
    id: 'newmuslims', ar: 'مدخل المسلمين الجدد', en: 'New Muslims Gateway', icon: '❀',
    kind: 'مسار', kindEn: 'Pathway', meta: '١٠+ لغات', metaEn: '10+ languages', entryIcon: '❀',
    desc: 'تعريفٌ ميسّر بلغةٍ بسيطة ورحلة ترحيب دافئة.',
    descEn: 'A simplified introduction in plain language and a warm welcoming journey.',
    about: 'مسارٌ ترحيبي يقدّم أسماء الله الحسنى للمسلمين الجدد بلغةٍ بسيطة وأسلوبٍ دافئ، ويبني معرفةً متدرّجة تعينهم على التعرّف إلى ربّهم والقرب منه.',
    aboutEn: "A welcoming pathway presenting Allah's Beautiful Names to new Muslims in simple language and a warm style, building gradual knowledge that helps them know their Lord and draw near to Him.",
    stat1: '١٠+ لغات', stat1En: '10+ languages', stat2: 'لغة ميسّرة', stat2En: 'Simple language', stat3: 'مسار متدرّج', stat3En: 'Gradual path',
    entries: [
      { t: 'من هو الله؟ — البداية', meta: 'الخطوة ١', tEn: 'Who is Allah? — the beginning', metaEn: 'Step 1' },
      { t: 'الرحمن الرحيم: رحمةٌ تسبق كل شيء', meta: 'الخطوة ٢', tEn: 'Ar-Rahman, Ar-Raheem: mercy that precedes all', metaEn: 'Step 2' },
      { t: 'كيف أدعو الله بأسمائه؟', meta: 'الخطوة ٣', tEn: 'How do I call upon Allah by His Names?', metaEn: 'Step 3' },
      { t: 'الأسماء الحسنى في الصلاة', meta: 'الخطوة ٤', tEn: 'The Beautiful Names in prayer', metaEn: 'Step 4' },
      { t: 'رحلتك تستمر — ماذا بعد؟', meta: 'الخطوة ٥', tEn: "Your journey continues — what's next?", metaEn: 'Step 5' },
    ],
  },
];
