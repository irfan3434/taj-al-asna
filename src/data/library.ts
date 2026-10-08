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
  /** Public path to an audio file (e.g. '/audio/foo.mp3') — renders an inline audio player. */
  audio?: string;
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
  /** When true, this section lists audio tracks live from R2 (via /api/audio) instead of `entries`. */
  r2Audio?: boolean;
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
    kind: 'صوتيات', kindEn: 'Audio', meta: 'مسارات صوتية أصلية', metaEn: 'Genuine tracks', entryIcon: '♪',
    desc: 'مكتبة صوتية للذكر والتأمّل في أسماء الله الحسنى.',
    descEn: "An audio library for remembrance and reflection on Allah's Beautiful Names.",
    about: 'مكتبةٌ صوتية تجمع تلاوات الآيات المتضمّنة للأسماء الحسنى، وتأمّلاتٍ هادئة تعين على الحضور والخشوع. مناسبة للاستماع في كل وقت.',
    aboutEn: 'An audio library gathering recitations of verses that contain the Beautiful Names, along with calm reflections that aid presence and humility. Suitable for listening at any time.',
    stat1: '١٢٠ مقطعاً', stat1En: '120 tracks', stat2: 'جودة عالية', stat2En: 'High quality', stat3: 'تحميل متاح', stat3En: 'Download available',
    // Audio & Reflections lists tracks live from the R2 bucket (see src/app/api/audio/route.ts).
    r2Audio: true,
    entries: [],
  },
  {
    id: 'kids', ar: 'ركن الأطفال', en: "Children's Corner", icon: '✿',
    kind: 'تفاعلي', kindEn: 'Interactive', meta: 'للأعمار ٦+', metaEn: 'Ages 6+', entryIcon: '✦',
    desc: 'محتوى آمن وتفاعلي يحبّب الأطفال في أسماء ربّهم.',
    descEn: "Safe, interactive content that endears children to their Lord's Names.",
    about: 'ركنٌ مصمّم خصّيصاً للأطفال يقدّم أسماء الله الحسنى بأسلوبٍ قصصي تفاعلي محبّب وآمن، مع رسوم وألعاب تعليمية تغرس المعنى في القلوب الصغيرة.',
    aboutEn: "A corner designed specially for children, presenting Allah's Beautiful Names in a beloved, safe, interactive storytelling style, with illustrations and educational games that plant meaning in young hearts.",
    stat1: 'للأعمار ٦+', stat1En: 'Ages 6+', stat2: 'محتوى آمن', stat2En: 'Safe content', stat3: 'مقاطع فيديو تعليمية', stat3En: 'Educational Videos',
    // 👇 Children's Corner — two levels: main `section` ('animated' | 'real' | 'complete') × `lang`
    //    ('ar' | 'en' | 'ur'). Copy a line and set section + lang + the Cloudflare `video` UID.
    //    Real & Complete start empty — add lines with section: 'real' or section: 'complete'.
    entries: [
      // ── Animated Videos ──
      // Arabic
      { t: 'الاحد', meta: 'فيديو', tEn: 'Al-Ahad', metaEn: 'Video', section: 'animated', lang: 'ar', video: '1c36ef6c862f31836833c02571ce4ed4' },
      { t: 'الاخر', meta: 'فيديو', tEn: 'Al-Aakhir', metaEn: 'Video', section: 'animated', lang: 'ar', video: '21cbffe16666a8a2ae136823e7d26223' },
      { t: 'الاول', meta: 'فيديو', tEn: 'Al-Awwal', metaEn: 'Video', section: 'animated', lang: 'ar', video: '3748f84603d48c2ad6514b493a8c288e' },
      { t: 'البارئ', meta: 'فيديو', tEn: 'Al-Bari', metaEn: 'Video', section: 'animated', lang: 'ar', video: '3c31eb2f4c6b48675c5a2a08e984a41e' },
      { t: 'الباسط', meta: 'فيديو', tEn: 'Al-Basit', metaEn: 'Video', section: 'animated', lang: 'ar', video: '9444ecda6763eaf5e55515305299cd5f' },
      { t: 'الباطن', meta: 'فيديو', tEn: 'Al-Batin', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'c861c135f6f2147e6c0760e80da52211' },
    //  { t: 'الباعث', meta: 'فيديو', tEn: 'Al-Baayis', metaEn: 'Video', section: 'animated', lang: 'ar', video: '43f107431a3b59a320f6d9bdf188c768' },
    //  { t: 'الباقي', meta: 'فيديو', tEn: 'Al-Baaqi', metaEn: 'Video', section: 'animated', lang: 'ar', video: '3c1bb87d825b34bd4412ba710033f3d1' },
    //  { t: 'البديع', meta: 'فيديو', tEn: 'Al-Badee', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'fac220694c83054a83e3c7cf57210456' },
      { t: 'البر', meta: 'فيديو', tEn: 'Al-Barr', metaEn: 'Video', section: 'animated', lang: 'ar', video: '00ea4d481a0f87b91df34bfa1bc31b45' },
      { t: 'البصير', meta: 'فيديو', tEn: 'Al-Baseer', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'a5ec1633118875daf2818198b2a17681' },
      { t: 'التواب', meta: 'فيديو', tEn: 'Al-Tuwwaab', metaEn: 'Video', section: 'animated', lang: 'ar', video: '7ccb86afa049d461e4bc20db192ee661' },
    //  { t: 'الجامع', meta: 'فيديو', tEn: 'Al-Jaamey', metaEn: 'Video', section: 'animated', lang: 'ar', video: '6531c9b501d9014bdd26695f05e6a0f9' },
      { t: 'الجبار', meta: 'فيديو', tEn: 'Al-Jabbaar', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'af28ac12049122fc10eff59ce146b326' },
    //  { t: 'الجليل', meta: 'فيديو', tEn: 'Al-Jaleel', metaEn: 'Video', section: 'animated', lang: 'ar', video: '0b2a5eb2470dfd2e1efa225cd4c0c72b' },
      { t: 'الحسيب', meta: 'فيديو', tEn: 'Al-Haseeb', metaEn: 'Video', section: 'animated', lang: 'ar', video: '3073c5d8ecf1bf823907e54e0d84a386' },
      { t: 'الحفيظ', meta: 'فيديو', tEn: 'Al-Hafeez', metaEn: 'Video', section: 'animated', lang: 'ar', video: '6bc2d1f4e7c5d61ef2b792f36fd32faf' },
      { t: 'الحق', meta: 'فيديو', tEn: 'Al-Haqq', metaEn: 'Video', section: 'animated', lang: 'ar', video: '5534d3ffd607af36b254851f447c17c4' },
    //  { t: 'الحكم', meta: 'فيديو', tEn: 'Al-Hukam', metaEn: 'Video', section: 'animated', lang: 'ar', video: '9d44f2dcf773268969e807d3be03f273' },
      { t: 'الحكيم', meta: 'فيديو', tEn: 'Al-Hakeem', metaEn: 'Video', section: 'animated', lang: 'ar', video: '75c2bea44baed81c9b70e0a7736e4cdf' },
      { t: 'الحليم', meta: 'فيديو', tEn: 'Al-Haleem', metaEn: 'Video', section: 'animated', lang: 'ar', video: '7e441e0679e99d084cc6874e5c496c31' },
      { t: 'الحميد', meta: 'فيديو', tEn: 'Al-Hameed', metaEn: 'Video', section: 'animated', lang: 'ar', video: '7dd3303d8d1ace73c7d970d3907a78b0' },
      { t: 'الحي', meta: 'فيديو', tEn: 'Al-Hayee', metaEn: 'Video', section: 'animated', lang: 'ar', video: '4164c4dc8dfe2c200aa85644c23a4440' },
      { t: 'الخافض', meta: 'فيديو', tEn: 'Al-Khafidh', metaEn: 'Video', section: 'animated', lang: 'ar', video: '3005b03b657974bb73251ccd4b177c4c' },
      { t: 'الخالق', meta: 'فيديو', tEn: 'Al-Khaliq', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'e65ad656365362bbdc89563da4c50018' },
      { t: 'الخبير', meta: 'فيديو', tEn: 'Al-Khabeer', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'a99b440bb22b5a0602a7062b5d70542f' },
      { t: 'الرؤوف', meta: 'فيديو', tEn: 'Al-Rouf', metaEn: 'Video', section: 'animated', lang: 'ar', video: '8c77bd09f73174f9f9990792235b3d62' },
      { t: 'الرافع', meta: 'فيديو', tEn: 'Al-Raafi', metaEn: 'Video', section: 'animated', lang: 'ar', video: '5c9b483b03e1142e313926a1aa9da28d' },
      { t: 'الرحمن', meta: 'فيديو', tEn: 'Al-Rahman', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'c0d0a1ab182ba5f5e8506ed1d539c117' },
      { t: 'الرحيم', meta: 'فيديو', tEn: 'Al-Raheem', metaEn: 'Video', section: 'animated', lang: 'ar', video: '01657c4f4ab035d1aa0840e7e815d8ec' },
      { t: 'الرزاق', meta: 'فيديو', tEn: 'Al-Razzaq', metaEn: 'Video', section: 'animated', lang: 'ar', video: '5ad1173231517b89df8ee433e86050a3' },
    //  { t: 'الرشيد', meta: 'فيديو', tEn: 'Al-Rasheed', metaEn: 'Video', section: 'animated', lang: 'ar', video: '08053106706fcc0c50ff3f8e3f8bd5fc' },
      { t: 'الرقيب', meta: 'فيديو', tEn: 'Al-Raqeeb', metaEn: 'Video', section: 'animated', lang: 'ar', video: '5ca27cfff91e97f241a6ef58c5d95980' },
      { t: 'السلام', meta: 'فيديو', tEn: 'As-Salaam', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'be5face69d3246ffdffe8dcd91ed5ee6' },
      { t: 'السميع', meta: 'فيديو', tEn: 'Al-Samee', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'd7a8ee2747b4b59bfc64458aa015ad7d' },
      { t: 'الشكور', meta: 'فيديو', tEn: 'Al-Shakoor', metaEn: 'Video', section: 'animated', lang: 'ar', video: '69d7c13497c4ff7e87ad7896720e3786' },
      { t: 'الشهيد', meta: 'فيديو', tEn: 'Al-Shaheed', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'f5a0da11469baad87f39ff9c630cb264' },
    //  { t: 'الصبور', meta: 'فيديو', tEn: 'Al-Saboor', metaEn: 'Video', section: 'animated', lang: 'ar', video: '90a20038fcee0ad6080b5727057ce99a' },
      { t: 'الصمد', meta: 'فيديو', tEn: 'Al-Samad', metaEn: 'Video', section: 'animated', lang: 'ar', video: '0a2d5e83cd68959b82b835a00a43eedc' },
      { t: 'الضار', meta: 'فيديو', tEn: 'Al-Dhaar', metaEn: 'Video', section: 'animated', lang: 'ar', video: '0d81018f33ff4188acabc67a08abf1aa' },
      { t: 'الظاهر', meta: 'فيديو', tEn: 'Al-Zahir', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'bd44a3737ef5de1ce72ff9e7e8f144d5' },
    //  { t: 'العدل', meta: 'فيديو', tEn: 'Al-Adl', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'a463c116906e7975941b6840cbf66622' },
      { t: 'العزيز', meta: 'فيديو', tEn: 'Al-Aziz', metaEn: 'Video', section: 'animated', lang: 'ar', video: '7a23e764a9f59ba47c5c5941b6bc5846' },
      { t: 'العظيم', meta: 'فيديو', tEn: 'Al-Azeem', metaEn: 'Video', section: 'animated', lang: 'ar', video: '8c281df64d46b7a2a3bdfa509c73c24d' },
      { t: 'العفو', meta: 'فيديو', tEn: 'Al-Afu', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'e1a3ddec65df84855695378d15c854da' },
      { t: 'العلي', meta: 'فيديو', tEn: 'Al-Ali', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'fe16f15c9236bff693fd51276d38f6a8' },
      { t: 'العليم', meta: 'فيديو', tEn: 'Al-Aleem', metaEn: 'Video', section: 'animated', lang: 'ar', video: '480704b871df51967da670d2f9284679' },
      { t: 'الغفار', meta: 'فيديو', tEn: 'Al-Ghafaar', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'f98afedc27b3f711863d1050adc8f352' },
    //  { t: 'الغفور', meta: 'فيديو', tEn: 'Al-Ghafur', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'fe1438a607552835534ade900a12cd9e' },
      { t: 'الغني', meta: 'فيديو', tEn: 'Al-Ghani', metaEn: 'Video', section: 'animated', lang: 'ar', video: '77a1d02e62ecce2c77bf19695ea670e6' },
      { t: 'الفتاح', meta: 'فيديو', tEn: 'Al-Fathah', metaEn: 'Video', section: 'animated', lang: 'ar', video: '8e60348a47b2f2065b4034c8afe1f6ca' },
      { t: 'القابض', meta: 'فيديو', tEn: 'Al-Qabid', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'd57e1399a171ef69c14349a438cfb0c1' },
      { t: 'القادر', meta: 'فيديو', tEn: 'Al-Qadir', metaEn: 'Video', section: 'animated', lang: 'ar', video: '7ee0299ef357ae5adb3712da74766d17' },
      { t: 'القدوس', meta: 'فيديو', tEn: 'Al-Quddus', metaEn: 'Video', section: 'animated', lang: 'ar', video: '3adb814f295506c0eefdcad242a77e7e' },
      { t: 'القهار', meta: 'فيديو', tEn: 'Al-Qahhar', metaEn: 'Video', section: 'animated', lang: 'ar', video: '123d83b28830998b51b58f3ac824de22' },
      { t: 'القوي', meta: 'فيديو', tEn: 'Al-Quwwi', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'e967b56692d6686f1fb7193055a3147e' },
      { t: 'القيوم', meta: 'فيديو', tEn: 'Al-Qayyum', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'a31adad2f3fa01b920618d711d379f6c' },
      { t: 'الكبير', meta: 'فيديو', tEn: 'Al-Kabeer', metaEn: 'Video', section: 'animated', lang: 'ar', video: '356d392deab97ebffcfe4732b984bfcd' },
      { t: 'الكريم', meta: 'فيديو', tEn: 'Al-Kareem', metaEn: 'Video', section: 'animated', lang: 'ar', video: '740c85864f4db71d139d6d015bfaa88f' },
      { t: 'اللطيف', meta: 'فيديو', tEn: 'Al-Latif', metaEn: 'Video', section: 'animated', lang: 'ar', video: '3b0398e774887a1ce713e5bc2954a2f1' },
      { t: 'الله', meta: 'فيديو', tEn: 'Allah', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'dfc8d3a80ec70804fa19df18ac8088f2' },
      { t: 'المؤخر', meta: 'فيديو', tEn: 'Al-Muakhir', metaEn: 'Video', section: 'animated', lang: 'ar', video: '5ee1af8be008aa1a6c966259fe50e9db' },
      { t: 'المؤمن', meta: 'فيديو', tEn: 'Al-Mumin', metaEn: 'Video', section: 'animated', lang: 'ar', video: '751f5628671f296b8863592e77a12e70' },
    //  { t: 'الماجد', meta: 'فيديو', tEn: 'Al-Majid', metaEn: 'Video', section: 'animated', lang: 'ar', video: '5fbfdcf191c038413859434874272042' },
      { t: 'المانع', meta: 'فيديو', tEn: 'Al-Maanay', metaEn: 'Video', section: 'animated', lang: 'ar', video: '2778326ea288077f78b6f02fe5ca8bf7' },
    //  { t: 'المبدئ', meta: 'فيديو', tEn: 'Al-Mubdi', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'a52e774e570c8e155fd8e23d70c48888' },
    //  { t: 'المتعال', meta: 'فيديو', tEn: 'Al-Mutaal', metaEn: 'Video', section: 'animated', lang: 'ar', video: '80f17bc1f227b6ff07824fa6197d23d4' },
      { t: 'المتكبر', meta: 'فيديو', tEn: 'Al-Mutakabbir', metaEn: 'Video', section: 'animated', lang: 'ar', video: '8462d687a53c36e7f5b522c7269f01d9' },
      { t: 'المتين', meta: 'فيديو', tEn: 'Al-Mateen', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'bf5602941ea435331f492c606885c214' },
      { t: 'المجيب', meta: 'فيديو', tEn: 'Al-Mujeeb', metaEn: 'Video', section: 'animated', lang: 'ar', video: '3bd1f849feb8d127c13ac7a345698d3c' },
      { t: 'المجيد', meta: 'فيديو', tEn: 'Al-Majeed', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'c010f80dc0a3dcc2cae1acfed53cba8e' },
    //  { t: 'المحصي', meta: 'فيديو', tEn: 'Al-Muhassi', metaEn: 'Video', section: 'animated', lang: 'ar', video: '4202d6c7d3dff4029c23c7d516298e5a' },
      { t: 'المذل', meta: 'فيديو', tEn: 'Al-Muzill', metaEn: 'Video', section: 'animated', lang: 'ar', video: '97256ec6162d3187df6b1f8159e7d28c' },
      { t: 'المصور', meta: 'فيديو', tEn: 'Al-Musawwir', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'cf9cfd8b7f3c0f53d93c98964fb0d751' },
      { t: 'المعز', meta: 'فيديو', tEn: 'Al-Muizz', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'fe1cb3aa9ef723436151b625b2689049' },
    //  { t: 'المعيد', meta: 'فيديو', tEn: 'Al-Mueed', metaEn: 'Video', section: 'animated', lang: 'ar', video: '310a6ff5f0fa0083d4e23f6624d0c3af' },
    //  { t: 'المغني', meta: 'فيديو', tEn: 'Al-Mughni', metaEn: 'Video', section: 'animated', lang: 'ar', video: '1f5896d0482a1c21bc5490ac16087f22' },
    //  { t: 'المقتدر', meta: 'فيديو', tEn: 'Al-Muqtadir', metaEn: 'Video', section: 'animated', lang: 'ar', video: '6ee1d45f4468cca65efb96a61f221c54' },
      { t: 'المقدم', meta: 'فيديو', tEn: 'Al-Muqdim', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'a8cd1d9e0014a0bb5562f56597a3f437' },
    //  { t: 'المقسط', meta: 'فيديو', tEn: 'Al-Muqasat', metaEn: 'Video', section: 'animated', lang: 'ar', video: '21266e37298d83eb6c6042c90ae8162c' },
      { t: 'المقيت', meta: 'فيديو', tEn: 'Al-Muqit', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'e5ce72ef376aee6183da88806ca8b356' },
      { t: 'الملك', meta: 'فيديو', tEn: 'Al-Mulk', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'a3e86d3ae4d66252f63996bd30a74ed8' },
    //  { t: 'المميت', meta: 'فيديو', tEn: 'Al-Mumeet', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'b48be0f2346696b357a7aad2274790bf' },
    //  { t: 'المنتقم', meta: 'فيديو', tEn: 'Al-Muntaqim', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'c4bcdc447de7ad5ac878b407a07670c7' },
      { t: 'المهيمن', meta: 'فيديو', tEn: 'Al-Muhaimin', metaEn: 'Video', section: 'animated', lang: 'ar', video: '24288e81230771da99534c890dc847f3' },
      { t: 'النافع', meta: 'فيديو', tEn: 'Al-Nafay', metaEn: 'Video', section: 'animated', lang: 'ar', video: '17b9a7f639888ae007540a13a66397c3' },
      { t: 'النور', meta: 'فيديو', tEn: 'Al-Noor', metaEn: 'Video', section: 'animated', lang: 'ar', video: '55251723e3967ae3fde7e8ba9ff30f5d' },
      { t: 'الهادي', meta: 'فيديو', tEn: 'Al-Haadi', metaEn: 'Video', section: 'animated', lang: 'ar', video: '047afaf3cf8bb64e2c560458cdf1d8bb' },
      { t: 'الواجد', meta: 'فيديو', tEn: 'Al-Waajid', metaEn: 'Video', section: 'animated', lang: 'ar', video: '10243ce3dc4706806e5aa17e4f69dc22' },
      { t: 'الواحد', meta: 'فيديو', tEn: 'Al-Waahid', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'bba4b1cab470469ce60a3301903d9bfb' },
      { t: 'الوارث', meta: 'فيديو', tEn: 'Al-Waaris', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'b7a20ebcdbee4595ad745f8783e40040' },
      { t: 'الواسع', meta: 'فيديو', tEn: 'Al-Waasay', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'f3d1562eab35f78fb50e170a642a12e5' },
    //  { t: 'الوالي', meta: 'فيديو', tEn: 'Al-Waali', metaEn: 'Video', section: 'animated', lang: 'ar', video: '93f63ef580a2822562d9d3efc6c9058a' },
      { t: 'الودود', meta: 'فيديو', tEn: 'Al-Wadud', metaEn: 'Video', section: 'animated', lang: 'ar', video: '890b60b6bc36355f1766ec5bdf2ab6ee' },
      { t: 'الوكيل', meta: 'فيديو', tEn: 'Al-Wakeel', metaEn: 'Video', section: 'animated', lang: 'ar', video: '75e049cb07c35710108f0ae0de24515c' },
      { t: 'الولي', meta: 'فيديو', tEn: 'Al-Wali', metaEn: 'Video', section: 'animated', lang: 'ar', video: '3aac2aef12651cf09490765b8cbf3537' },
      { t: 'الوهاب', meta: 'فيديو', tEn: 'Al-Wahhab', metaEn: 'Video', section: 'animated', lang: 'ar', video: '74afdc2e39a836f0c36339db61b49f71' },
      { t: 'الجميل', meta: 'فيديو', tEn: 'Al-Jameel', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'ee5fc6c079a432fd5e1d6db7be477410' },
      { t: 'الجواد', meta: 'فيديو', tEn: 'Al-Jawaad', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'c3a0713f83fdadde5e6d3b3b10a9ad94' },
      { t: 'الحيي', meta: 'فيديو', tEn: 'Al-Hayyi', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'caa4585bfe46bf75f73e4ce2716f3240' },
    //  { t: 'مالك الملك', meta: 'فيديو', tEn: 'Malik al-Mulk', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'b42123896a7e80e52085e014d2fdfde5' },
      { t: 'الديان', meta: 'فيديو', tEn: 'Al-Diyaan', metaEn: 'Video', section: 'animated', lang: 'ar', video: '5a1a31e98bc0b2b1c2579561fcf4ec35' },
      { t: 'الرب', meta: 'فيديو', tEn: 'Al-Rabb', metaEn: 'Video', section: 'animated', lang: 'ar', video: '46e0bea88b6052205355c0f90f56cc94' },
      { t: 'الرفيق', meta: 'فيديو', tEn: 'Al-Rafiq', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'e9b9207aae1ef1726374d4e17bb0ef23' },
      { t: 'السبوح', meta: 'فيديو', tEn: 'Al-Sabooh', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'aede0fe5656e9537e2046d614ebc6a90' },
      { t: 'الستير', meta: 'فيديو', tEn: 'Al-Satir', metaEn: 'Video', section: 'animated', lang: 'ar', video: '9b7f8cd9d9dc2b35acd2fe8a89c9d3a4' },
      { t: 'الشافي', meta: 'فيديو', tEn: 'Al-Shafi', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'cb7446cbb88930f3621623307d231e38' },
      { t: 'الطبيب', meta: 'فيديو', tEn: 'Al-Tabib', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'ce074f8af0a95b309df2b780e263725c' },
      { t: 'الطيب', meta: 'فيديو', tEn: 'Al-Tayyib', metaEn: 'Video', section: 'animated', lang: 'ar', video: '9d6f66cfc3ab3f818ffddd27ce017b04' },
      { t: 'الفاطر', meta: 'فيديو', tEn: 'Al-Faatar', metaEn: 'Video', section: 'animated', lang: 'ar', video: '3d7a1372b9494a35302883fbae299151' },
      { t: 'القريب', meta: 'فيديو', tEn: 'Al-Qareeb', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'aeb98f9804a45003537fcae96a905166' },
      { t: 'الكفيل', meta: 'فيديو', tEn: 'Al-Kafeel', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'cc65e76f7ba2f217d5d69873baf34ce7' },
      { t: 'المبين', meta: 'فيديو', tEn: 'Al-Mubeen', metaEn: 'Video', section: 'animated', lang: 'ar', video: '67851c6960a1e0092329dc0b6f2f332a' },
      { t: 'المحسن', meta: 'فيديو', tEn: 'Al-Muhsin', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'aab911b0903c57814d048f6354f2769d' },
      { t: 'المحيط', meta: 'فيديو', tEn: 'Al-Muheet', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'b8ff1d4b670aee503f2df497f20aa51d' },
      { t: 'المعطي', meta: 'فيديو', tEn: 'Al-Muattali', metaEn: 'Video', section: 'animated', lang: 'ar', video: '23314c7428e3ebdf94df8b7ee19d1331' },
      { t: 'المغيث', meta: 'فيديو', tEn: 'Al-Mughees', metaEn: 'Video', section: 'animated', lang: 'ar', video: '46f7b2dc292511977d48ba9b522e17aa' },
      { t: 'المنان', meta: 'فيديو', tEn: 'Al-Manaan', metaEn: 'Video', section: 'animated', lang: 'ar', video: '833a157a20cfb608cc0073076d5061dd' },
      { t: 'المولى', meta: 'فيديو', tEn: 'Al-Maoli', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'e0682e8e8d93772839da0dc8346ef356' },
      { t: 'النصير', meta: 'فيديو', tEn: 'Al-Naseer', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'e68d3d10dd07da70a7798749e2e601e0' },
      { t: 'الوتر', meta: 'فيديو', tEn: 'Al-Watr', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'de19528853da171252e54d0a6716137a' },

      
      


     

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

      { t: 'اسم الله القوي', meta: 'فيديو', tEn: 'Name of Allah Al-Qawi', metaEn: 'Video', section: 'real', lang: 'ar', video: '2d4760cbcd6c3e3cc93566300688a0a7' },
      { t: 'الاخر', meta: 'فيديو', tEn: 'Al-Akhir', metaEn: 'Video', section: 'real', lang: 'ar', video: '7b9d566b1121345b77343d42044bde3a' },
      { t: 'الاول', meta: 'فيديو', tEn: 'Al-Awwal', metaEn: 'Video', section: 'real', lang: 'ar', video: 'dd977c0dc253aee20e9cd794ab9a5a52' },
      { t: 'البارئ', meta: 'فيديو', tEn: 'Al-Baari', metaEn: 'Video', section: 'real', lang: 'ar', video: '6f76377a942ca2c4e0d87166d7d0e387' },
      { t: 'الباسط', meta: 'فيديو', tEn: 'Al-Baasit', metaEn: 'Video', section: 'real', lang: 'ar', video: 'd2d35202f76c014536cd904cde891bf7' },
      { t: 'الباطن', meta: 'فيديو', tEn: 'Al-Batin', metaEn: 'Video', section: 'real', lang: 'ar', video: '94e305a7329f7fd3c7294ccd99f2b02f' },
      { t: 'البر', meta: 'فيديو', tEn: 'Al-Burr', metaEn: 'Video', section: 'real', lang: 'ar', video: 'b25e80066888b9d4d055fcb307198bba' },
      { t: 'البصير', meta: 'فيديو', tEn: 'Al-Baseer', metaEn: 'Video', section: 'real', lang: 'ar', video: 'b2b585fdfcc8d9aa1e2e396bf8c9b7c5' },
      { t: 'التواب', meta: 'فيديو', tEn: 'Al-Tawab', metaEn: 'Video', section: 'real', lang: 'ar', video: '682824ca3e9d3df8eea09c94003bec7a' },
      { t: 'الجبار', meta: 'فيديو', tEn: 'Al-Jabbar', metaEn: 'Video', section: 'real', lang: 'ar', video: 'f18bd6cfdb4699a26a127258cf917c3d' },
      { t: 'الجميل', meta: 'فيديو', tEn: 'Al-Jameel', metaEn: 'Video', section: 'real', lang: 'ar', video: 'd4596cbe428dbfe76c65a07be7ee42ce' },
      { t: 'الجواد', meta: 'فيديو', tEn: 'Al-Jawaad', metaEn: 'Video', section: 'real', lang: 'ar', video: 'ca6999eb73fcfc4f3b2318a67aa3a744' },
      { t: 'الحسيب', meta: 'فيديو', tEn: 'Al-Haseeb', metaEn: 'Video', section: 'real', lang: 'ar', video: 'c1fad1433b806f0e2abf470113da760b' },
      { t: 'الحفيض', meta: 'فيديو', tEn: 'Al-Hafeez', metaEn: 'Video', section: 'real', lang: 'ar', video: '19745ab162b59afa1bc55989ff814c9b' },
      { t: 'الحق', meta: 'فيديو', tEn: 'Al-Haqq', metaEn: 'Video', section: 'real', lang: 'ar', video: '6767b1ad461990cccc78a46f5d9a1a9d' },
      { t: 'الحكيم', meta: 'فيديو', tEn: 'Al-Hakeem', metaEn: 'Video', section: 'real', lang: 'ar', video: '3268a9cb377049fbd7561f81bb3468dc' },
      { t: 'الحليم', meta: 'فيديو', tEn: 'Al-Haleem', metaEn: 'Video', section: 'real', lang: 'ar', video: '31f4c28a76937e7ac57c68f9608554d9' },
      { t: 'الحميد', meta: 'فيديو', tEn: 'Al-Hameed', metaEn: 'Video', section: 'real', lang: 'ar', video: 'f4fe19a8d436967aeb2488360b16a71e' },
      { t: 'الحي', meta: 'فيديو', tEn: 'Al-Hayy', metaEn: 'Video', section: 'real', lang: 'ar', video: '52622a1c1de80352d1af1996ec22d901' },
      { t: 'الحيي', meta: 'فيديو', tEn: 'Al-Hayyi', metaEn: 'Video', section: 'real', lang: 'ar', video: '3cbdce1a41845ba48f42e30f390fd1be' },
      { t: 'الخافض', meta: 'فيديو', tEn: 'Al-Khaafidh', metaEn: 'Video', section: 'real', lang: 'ar', video: '6e4457565c593fcad06172f3819b44a7' },
      { t: 'الخالق', meta: 'فيديو', tEn: 'Al-Khaaliq', metaEn: 'Video', section: 'real', lang: 'ar', video: 'f6013bb210520dd85b25e9544683a835' },
      { t: 'الخبير', meta: 'فيديو', tEn: 'Al-Khabeer', metaEn: 'Video', section: 'real', lang: 'ar', video: '5100090401ed9380be0086c50d2859c0' },
      { t: 'الديان', meta: 'فيديو', tEn: 'Al-Diyaan', metaEn: 'Video', section: 'real', lang: 'ar', video: 'f42e42cb4adaee3148c27626b69c47d1' },
      { t: 'الرؤوف', meta: 'فيديو', tEn: 'Al-Rouf', metaEn: 'Video', section: 'real', lang: 'ar', video: 'd387d56da06d175c35ff0115ca7db56c' },
      { t: 'الرافع', meta: 'فيديو', tEn: 'Al-Raafay', metaEn: 'Video', section: 'real', lang: 'ar', video: '051f5688ed015751f42453436661ac5f' },
      { t: 'الرب', meta: 'فيديو', tEn: 'Al-Rabb', metaEn: 'Video', section: 'real', lang: 'ar', video: 'd8925c26251e7d49ead64dda19f59b93' },
      { t: 'الرحمن', meta: 'فيديو', tEn: 'Al-Rahman', metaEn: 'Video', section: 'real', lang: 'ar', video: 'c72f2021bcdbc087d891a9ef8481a623' },
      { t: 'الرحيم', meta: 'فيديو', tEn: 'Al-Raheem', metaEn: 'Video', section: 'real', lang: 'ar', video: '928d87453200fcfe856b94794d9760d9' },
      { t: 'الرزاق', meta: 'فيديو', tEn: 'Al-Razzaq', metaEn: 'Video', section: 'real', lang: 'ar', video: '535945558791f502f6c1840ce4aa3591' },
      { t: 'الرفيق', meta: 'فيديو', tEn: 'Al-Rafeeq', metaEn: 'Video', section: 'real', lang: 'ar', video: '7a93cc6f229580577e2e89123408a466' },
      { t: 'الرقيب', meta: 'فيديو', tEn: 'Al-Raqeeb', metaEn: 'Video', section: 'real', lang: 'ar', video: '88ac1764f7630a4c9e15f316b33e0471' },
      { t: 'السبوح', meta: 'فيديو', tEn: 'Al-Sabooh', metaEn: 'Video', section: 'real', lang: 'ar', video: '2c5f7aa79fd8e326833641e99f6d42d0' },
      { t: 'الستير', meta: 'فيديو', tEn: 'Al-Sateer', metaEn: 'Video', section: 'real', lang: 'ar', video: '044ea480fafab4fa58504ff813e036b6' },
      { t: 'السلام', meta: 'فيديو', tEn: 'Al-Salaam', metaEn: 'Video', section: 'real', lang: 'ar', video: 'f8e283428a411a269a23a1f2c0377791' },
      { t: 'السميع', meta: 'فيديو', tEn: 'Al-Samee', metaEn: 'Video', section: 'real', lang: 'ar', video: 'b5a7f082c6b28084d0a8b3dc39aeb74b' },
      { t: 'الشافي', meta: 'فيديو', tEn: 'Al-Shaafi', metaEn: 'Video', section: 'real', lang: 'ar', video: 'd1f96151afe0c19810549356c1b72752' },
      { t: 'الشكور', meta: 'فيديو', tEn: 'Al-Shakur', metaEn: 'Video', section: 'real', lang: 'ar', video: '14293a83bcd679a1cd9550e4e9b8e4b1' },
      { t: 'الشهيد', meta: 'فيديو', tEn: 'Al-Shaheed', metaEn: 'Video', section: 'real', lang: 'ar', video: '724781d0228be2e3c95248cb50c7adb3' },
      { t: 'الصمد', meta: 'فيديو', tEn: 'Al-Samad', metaEn: 'Video', section: 'real', lang: 'ar', video: '363005b0f012604547f75b2cce988e6b' },
      { t: 'الضار', meta: 'فيديو', tEn: 'Al-Dhaar', metaEn: 'Video', section: 'real', lang: 'ar', video: '37c6bdfa9456b7099ed3d3ade4f99910' },
      { t: 'الطبيب', meta: 'فيديو', tEn: 'Al-Tabib', metaEn: 'Video', section: 'real', lang: 'ar', video: 'd39a69fdb2ffecc8632081e9286b8165' },
      { t: 'الطيب', meta: 'فيديو', tEn: 'Al-Tayyib', metaEn: 'Video', section: 'real', lang: 'ar', video: '5cb0546737e76b377a64356e78af86cd' },
      { t: 'الظاهر', meta: 'فيديو', tEn: 'Al-Zaahir', metaEn: 'Video', section: 'real', lang: 'ar', video: 'ed79c6c0aab01d9485a3c6b4abbe08c1' },
      { t: 'العزيز', meta: 'فيديو', tEn: 'Al-Aziz', metaEn: 'Video', section: 'real', lang: 'ar', video: '04b6ee14e8a0dc77d46c5b5a59a9dd7a' },
      { t: 'العظيم', meta: 'فيديو', tEn: 'Al-Azeem', metaEn: 'Video', section: 'real', lang: 'ar', video: 'd02925f0a6414a79ada25655f967f1e5' },
      { t: 'العفو', meta: 'فيديو', tEn: 'Al-Afuu', metaEn: 'Video', section: 'real', lang: 'ar', video: 'eaf67765765eeb5a148824009193fdd4' },
      { t: 'العلي', meta: 'فيديو', tEn: 'Al-Ali', metaEn: 'Video', section: 'real', lang: 'ar', video: '3c56f3997d35199cbb07bd416dbdd253' },
      { t: 'العليم', meta: 'فيديو', tEn: 'Al-Aleem', metaEn: 'Video', section: 'real', lang: 'ar', video: 'c576dc85ace112dd46b82c3be08b657b' },
      { t: 'الغفار', meta: 'فيديو', tEn: 'Al-Ghafaar', metaEn: 'Video', section: 'real', lang: 'ar', video: '1ad4bec01d95129d3d75d97a6aa64073' },
      { t: 'الغني', meta: 'فيديو', tEn: 'Al-Ghani', metaEn: 'Video', section: 'real', lang: 'ar', video: '54810193171c91837252a985b1fd87f8' },
      { t: 'الفاطر', meta: 'فيديو', tEn: 'Al-Faatir', metaEn: 'Video', section: 'real', lang: 'ar', video: '012613b9d77a30dfc722de41274634a1' },
      { t: 'الفتاح', meta: 'فيديو', tEn: 'Al-Fataah', metaEn: 'Video', section: 'real', lang: 'ar', video: '60087268486a968e383324040993d567' },
      { t: 'القابض', meta: 'فيديو', tEn: 'Al-Qaabid', metaEn: 'Video', section: 'real', lang: 'ar', video: '9dcf08365a94858d4de4690754cb4874' },
      { t: 'القادر', meta: 'فيديو', tEn: 'Al-Qaadir', metaEn: 'Video', section: 'real', lang: 'ar', video: '31bd27b3c0644bf31c4bbdb64c626fc1' },
      { t: 'القدوس', meta: 'فيديو', tEn: 'Al-Qaddus', metaEn: 'Video', section: 'real', lang: 'ar', video: 'cec71fd026930b97564263ada67ae0b3' },
      { t: 'القريب', meta: 'فيديو', tEn: 'Al-Qareeb', metaEn: 'Video', section: 'real', lang: 'ar', video: '23c21cb9d7f83e861b8ad0486682dd8d' },
      { t: 'القهار', meta: 'فيديو', tEn: 'Al-Qahhaar', metaEn: 'Video', section: 'real', lang: 'ar', video: '69e8ed456b3c323cdf166c704d1fb2a6' },
      { t: 'القوي', meta: 'فيديو', tEn: 'Al-Qawi', metaEn: 'Video', section: 'real', lang: 'ar', video: 'b696bb1d5d6f75cca3be0215f20ca902' },
      { t: 'القيوم', meta: 'فيديو', tEn: 'Al-Qayyum', metaEn: 'Video', section: 'real', lang: 'ar', video: '9c4f1fc55f7650dc3bff061c8e09ce6a' },
      { t: 'الكافي', meta: 'فيديو', tEn: 'Al-Kaafee', metaEn: 'Video', section: 'real', lang: 'ar', video: 'c93de278f4315b0bc1ee2147ec3d6eff' },
      { t: 'الكبير', meta: 'فيديو', tEn: 'Al-Kabeer', metaEn: 'Video', section: 'real', lang: 'ar', video: '2a15642af9928051c90e4779bdaa6315' },
      { t: 'الكريم', meta: 'فيديو', tEn: 'Al-Kareem', metaEn: 'Video', section: 'real', lang: 'ar', video: 'd8b8e88d519bd6cf253b8d6377c5bb76' },
      { t: 'الكفيل', meta: 'فيديو', tEn: 'Al-Kafeel', metaEn: 'Video', section: 'real', lang: 'ar', video: 'd3f01c24839246afca52f1b7d6e341cd' },
      { t: 'اللطيف', meta: 'فيديو', tEn: 'Al-Latif', metaEn: 'Video', section: 'real', lang: 'ar', video: 'd4186e66684990ff2d9b1faed2fc5155' },
      { t: 'الله', meta: 'فيديو', tEn: 'Allah', metaEn: 'Video', section: 'real', lang: 'ar', video: 'e59ba459f4c92bc5604dbb511d913c69' },
      { t: 'المؤخر', meta: 'فيديو', tEn: 'Al-Muakhir', metaEn: 'Video', section: 'real', lang: 'ar', video: '4f82e9823e0c8677da7c1261f8dc98fb' },
      { t: 'المؤمن', meta: 'فيديو', tEn: 'Al-Momin', metaEn: 'Video', section: 'real', lang: 'ar', video: 'fc309bd80a84fcc9fda05c42ce3036ad' },
      { t: 'المانع', meta: 'فيديو', tEn: 'Al-Maane', metaEn: 'Video', section: 'real', lang: 'ar', video: 'c506cdfb5e6a0c237b030170fd5316d1' },
      { t: 'المبين', meta: 'فيديو', tEn: 'Al-Mubeen', metaEn: 'Video', section: 'real', lang: 'ar', video: '25dd6803beaa28f835aa9841b10b81e4' },
      { t: 'المتكبر', meta: 'فيديو', tEn: 'Al-Mutakabbir', metaEn: 'Video', section: 'real', lang: 'ar', video: '22e57b2fc5450a70fd1583898df2635f' },
      { t: 'المتين', meta: 'فيديو', tEn: 'Al-Mateen', metaEn: 'Video', section: 'real', lang: 'ar', video: 'e4f137e33b460f41f09aa81bd06d7fa8' },
      { t: 'المجيب', meta: 'فيديو', tEn: 'Al-Mujeeb', metaEn: 'Video', section: 'real', lang: 'ar', video: '8e8be4db91c2fd3b382178dc04f8128f' },
      { t: 'المجيد', meta: 'فيديو', tEn: 'Al-Majeed', metaEn: 'Video', section: 'real', lang: 'ar', video: 'e1ccca7ad49193f72a8e88e1197ec593' },
      { t: 'المحسن', meta: 'فيديو', tEn: 'Al-Mohsin', metaEn: 'Video', section: 'real', lang: 'ar', video: '2fe7b10aa27354d93e1110a4fc31611f' },
      { t: 'المحيط', meta: 'فيديو', tEn: 'Al-Muheet', metaEn: 'Video', section: 'real', lang: 'ar', video: '0b67eb6cd195f1caf5d5d10e4fef3c69' },
      { t: 'المذل', meta: 'فيديو', tEn: 'Al-Muzil', metaEn: 'Video', section: 'real', lang: 'ar', video: 'd16bd6a6709abc778a4eb6ebbf28d850' },
      { t: 'المصور', meta: 'فيديو', tEn: 'Al-Musawwar', metaEn: 'Video', section: 'real', lang: 'ar', video: '72bd482b99d43da6703d6261787cc788' },
      { t: 'المعز', meta: 'فيديو', tEn: 'Al-Muizz', metaEn: 'Video', section: 'real', lang: 'ar', video: '6adf18a2b6864e9a4c11886e11900151' },
      { t: 'المعطي', meta: 'فيديو', tEn: 'Al-Muattali', metaEn: 'Video', section: 'real', lang: 'ar', video: '6475e28c03aa77926dc716339f39a39c' },
      { t: 'المغيث', meta: 'فيديو', tEn: 'Al-Mughees', metaEn: 'Video', section: 'real', lang: 'ar', video: 'a1aeafdc34e270685eb5ccda8c6dcdad' },
      { t: 'المقدم', meta: 'فيديو', tEn: 'Al-Muqaddim', metaEn: 'Video', section: 'real', lang: 'ar', video: '378e2a206a43f69a789bebf3efffd92d' },
      { t: 'المقيت', meta: 'فيديو', tEn: 'Al-Muqeet', metaEn: 'Video', section: 'real', lang: 'ar', video: '3ac10d2b652786fda8f52f2511d8ebb9' },
      { t: 'الملك', meta: 'فيديو', tEn: 'Al-Mulk', metaEn: 'Video', section: 'real', lang: 'ar', video: '1785f784da529cc168e6b5a455adc7b4' },
      { t: 'المنان', meta: 'فيديو', tEn: 'Al-Manaan', metaEn: 'Video', section: 'real', lang: 'ar', video: 'd842aab53a5b96b9bca0f1aa1ab17fb2' },
      { t: 'المهيمن', meta: 'فيديو', tEn: 'Al-Muhaimmin', metaEn: 'Video', section: 'real', lang: 'ar', video: '65070a718ca46b108c9e7a793b0260d4' },
      { t: 'المولي', meta: 'فيديو', tEn: 'Al-Mawli', metaEn: 'Video', section: 'real', lang: 'ar', video: '7c7b70bf771f906746dce0d67df62dc1' },
      { t: 'النافع', meta: 'فيديو', tEn: 'Al-Nafay', metaEn: 'Video', section: 'real', lang: 'ar', video: '0fa5a07503f05a21c5941bfe0b78786a' },
      { t: 'النصير', meta: 'فيديو', tEn: 'Al-Naseer', metaEn: 'Video', section: 'real', lang: 'ar', video: '5d6f1c6b4ee9f58d797bd90e87f2ca3b' },
      { t: 'النور', meta: 'فيديو', tEn: 'Al-Noor', metaEn: 'Video', section: 'real', lang: 'ar', video: '4585c0b88b7bc7a4664e97a660d62e34' },
      { t: 'الهادي', meta: 'فيديو', tEn: 'Al-Haadi', metaEn: 'Video', section: 'real', lang: 'ar', video: 'db568e78f867b34d2994bed0cfe15df2' },
      { t: 'الواحد الاحد', meta: 'فيديو', tEn: 'Al-Wahid Al Ahad', metaEn: 'Video', section: 'real', lang: 'ar', video: '5e97722091cf7bd1ca2563f60b2267e0' },
      { t: 'الوارث', meta: 'فيديو', tEn: 'Al-Waaris', metaEn: 'Video', section: 'real', lang: 'ar', video: '715aa17e2ceaa0636bee30b76574d459' },
      { t: 'الواسع', meta: 'فيديو', tEn: 'Al-Waasay', metaEn: 'Video', section: 'real', lang: 'ar', video: '9adde4bf03398f8ad8fd9b61a1a0f437' },
      { t: 'الوتر', meta: 'فيديو', tEn: 'Al-Watr', metaEn: 'Video', section: 'real', lang: 'ar', video: 'b02dea980fba1f214c65fd12786f9271' },
      { t: 'الودود', meta: 'فيديو', tEn: 'Al-Wadud', metaEn: 'Video', section: 'real', lang: 'ar', video: 'bc4e3fcbf19743275286ad864a140824' },
      { t: 'الوكيل', meta: 'فيديو', tEn: 'Al-Wakeel', metaEn: 'Video', section: 'real', lang: 'ar', video: 'e57d3fd62378ae160900d50be35d5340' },
      { t: 'الولي', meta: 'فيديو', tEn: 'Al-Wali', metaEn: 'Video', section: 'real', lang: 'ar', video: 'a934491468b9d7c032b8272662e27eed' },
      { t: 'الوهاب', meta: 'فيديو', tEn: 'Al-Wahhab', metaEn: 'Video', section: 'real', lang: 'ar', video: '9269b74bd2ae673c779c0e3d942ac68a' },
      { t: 'ذو الجلال والإكرام', meta: 'فيديو', tEn: 'Zul-Jalal Wal-Ikram', metaEn: 'Video', section: 'real', lang: 'ar', video: '62f31ea9b742e4f8d888e1d4aa1f27f2' },
      { t: 'الوتر الي الطبيب حقيقي مجموع', meta: 'فيديو', tEn: 'Combined Video 1', metaEn: 'Video', section: 'real', lang: 'ar', video: 'b9e854ec403cfacf2c0fb0e1080626ce' },
      { t: 'المعطي الي ذوالجلال والاكرام حقيقي مجموع', meta: 'فيديو', tEn: 'Combined Video 2', metaEn: 'Video', section: 'real', lang: 'ar', video: 'ef3e0fc6e2c8e00577d872237a31ea0b' },
      { t: 'الله الي المهيمن حقيقي مجموع', meta: 'فيديو', tEn: 'Combined Video 3', metaEn: 'Video', section: 'real', lang: 'ar', video: '026c90a7512ba4533fdfa64d6ac34345' },
      { t: 'الغني الي المذل حقيقي مجموع', meta: 'فيديو', tEn: 'Combined Video 4', metaEn: 'Video', section: 'real', lang: 'ar', video: '576026b7c945f6778fe1f9a3ed54cb0f' },
      { t: 'العزيز الي الوهاب حقيقي مجموع', meta: 'فيديو', tEn: 'Combined Video 5', metaEn: 'Video', section: 'real', lang: 'ar', video: '5f90f9aeb9d127d175dbe62c579abfeb' },
      { t: 'الظاهر الي القيوم حقيقي مجموع', meta: 'فيديو', tEn: 'Combined Video 6', metaEn: 'Video', section: 'real', lang: 'ar', video: 'cf24238f6f74245fd5844437b73e5a87' },
      



      

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
