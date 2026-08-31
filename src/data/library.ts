export interface LibraryEntry {
  t: string;
  meta: string;
  tEn: string;
  metaEn: string;
  /** Cloudflare Stream video UID. Leave '' until you have it; entries play once it's set. */
  video?: string;
  /** Video language — groups the entry into the Arabic / English / Urdu tabs (kids corner). */
  lang?: 'ar' | 'en' | 'ur';
  /** Main section (kids corner, two-level): Animated / Real / Complete video. */
  section?: 'animated' | 'real' | 'complete';
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
    // 👇 Children's Corner — two levels: main `section` ('animated' | 'real' | 'complete') × `lang`
    //    ('ar' | 'en' | 'ur'). Copy a line and set section + lang + the Cloudflare `video` UID.
    //    Real & Complete start empty — add lines with section: 'real' or section: 'complete'.
    entries: [
      // ── Animated Videos ──
      // Arabic
      { t: 'البارئ', meta: 'فيديو', tEn: 'Al-Bari', metaEn: 'Video', section: 'animated', lang: 'ar', video: '4055ff668512c7eda505e5b28f21bf38' },
      { t: 'الجبار', meta: 'فيديو', tEn: 'Al-Jabbar', metaEn: 'Video', section: 'animated', lang: 'ar', video: '8ba07c529fb68c95765d03f1ba9f84b3' },
      { t: 'الباسط', meta: 'فيديو', tEn: 'Al-Basit', metaEn: 'Video', section: 'animated', lang: 'ar', video: '34eb9c5cedc8955cdb2e5a2b0b8e3613' },
      { t: 'البصير', meta: 'فيديو', tEn: 'Al-Basir', metaEn: 'Video', section: 'animated', lang: 'ar', video: '0a9a206f109d658fecdd5bca050e33e0' },
      { t: 'القدوس', meta: 'فيديو', tEn: 'Al-Qudus', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'fbecad8e394bb4effbfa793d7715fee3' },
      { t: 'القهار', meta: 'فيديو', tEn: 'Al-Qahar', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'd3f3b6ad64f2abc65b1fa1765e2246ff' },
      { t: 'السلام', meta: 'فيديو', tEn: 'Al-Salam', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'dd4da6d240acd4261094f545487ec971' },
      { t: 'العليم', meta: 'فيديو', tEn: 'Al-Aleem', metaEn: 'Video', section: 'animated', lang: 'ar', video: '0174f5eb51c17c905fcd5cb4980a0a55' },
      { t: 'العدل', meta: 'فيديو', tEn: 'Al-Adl', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'cbbea06e96cf1bb1492449d6bf734ef9' },

      // English
      { t: 'الكبير', meta: 'فيديو', tEn: 'Al-Kabir', metaEn: 'Video', section: 'animated', lang: 'en', video: 'af28e4b16b4cc6134bd719d90b9ced4e' },
      { t: 'البصير', meta: 'فيديو', tEn: 'Al-Basir', metaEn: 'Video', section: 'animated', lang: 'en', video: 'c92c4c1257eb85a615255de7a7bb3fd9' },
      { t: 'الباسط', meta: 'فيديو', tEn: 'Al-Basit', metaEn: 'Video', section: 'animated', lang: 'en', video: '82d8e23325d05a21bd16b00cdc61db38' },
      { t: 'الجبار', meta: 'فيديو', tEn: 'Al-Jabbar', metaEn: 'Video', section: 'animated', lang: 'en', video: '2b8c2348a3a319ca04d00db61d1cc6f7' },
      { t: 'البارئ', meta: 'فيديو', tEn: 'Al-Bari', metaEn: 'Video', section: 'animated', lang: 'en', video: 'ae73160691431a6a9c81eef3e98d8d3e' },
      // Urdu
      { t: 'الغفور', meta: 'فيديو', tEn: 'Al-Ghafur', metaEn: 'Video', section: 'animated', lang: 'ur', video: '57ceb90dd54124f4fd19851e115295b5' },
      { t: 'البارئ', meta: 'فيديو', tEn: 'Al-Bari', metaEn: 'Video', section: 'animated', lang: 'ur', video: '49e32d2d4d6f6df292cf779026073a94' },
      { t: 'الباسط', meta: 'فيديو', tEn: 'Al-Basit', metaEn: 'Video', section: 'animated', lang: 'ur', video: '4892b86164ac773d705a0b7fad57f35e' },
      { t: 'البصير', meta: 'فيديو', tEn: 'Al-Basir', metaEn: 'Video', section: 'animated', lang: 'ur', video: '0f8c5765d142e1d47fb42895a260fbb7' },
      { t: 'الجبار', meta: 'فيديو', tEn: 'Al-Jabbar', metaEn: 'Video', section: 'animated', lang: 'ur', video: '756a9e2eafa788fab0097c7988461162' },

      // ── Real Videos ──

      { t: 'الشكور', meta: 'فيديو', tEn: 'Al-Shakoor', metaEn: 'Video', section: 'real', lang: 'ar', video: 'fd4b128a8ed2659546cbb100c77834f5' },
      { t: 'العلي', meta: 'فيديو', tEn: 'Al-Alee', metaEn: 'Video', section: 'real', lang: 'ar', video: '85c1fb8062edf5706c3d67675c5b2c63' },
      { t: 'الحفيظ', meta: 'فيديو', tEn: 'Al-Hafiz', metaEn: 'Video', section: 'real', lang: 'ar', video: '2ee8f8569f8349ff41c61e2aac575fff' },

      // English
       { t: 'الكبير', meta: 'فيديو', tEn: 'Al-Kabeer', metaEn: 'Video', section: 'real', lang: 'en', video: 'a66740739b741ee76d586f9723789f21' },

       // Urdu
       { t: 'الغفور', meta: 'فيديو', tEn: 'Al-Ghafur', metaEn: 'Video', section: 'real', lang: 'ur', video: '4ceae82068703a87a3408422639dd80f' },


      // ── Complete Videos ──

      { t: 'كامل', meta: 'فيديو', tEn: 'Complete', metaEn: 'Video', section: 'complete', lang: 'ar', video: 'a2bd6344ed08c300a77419067ee1481f' }

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
