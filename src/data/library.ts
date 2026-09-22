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
    entries: [
      { t: 'التاج الأسنى-مقدمة', meta: '٠٤:٣٠', tEn: 'Introduction to the Beautiful Names', metaEn: '04:30', audio: '/audio/Introduction-tajalasna.mp3' },
    ],
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
      { t: 'الباعث', meta: 'فيديو', tEn: 'Al-Baayis', metaEn: 'Video', section: 'animated', lang: 'ar', video: '43f107431a3b59a320f6d9bdf188c768' },
      { t: 'الباقي', meta: 'فيديو', tEn: 'Al-Baaqi', metaEn: 'Video', section: 'animated', lang: 'ar', video: '3c1bb87d825b34bd4412ba710033f3d1' },
      { t: 'البديع', meta: 'فيديو', tEn: 'Al-Badee', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'fac220694c83054a83e3c7cf57210456' },
      { t: 'البر', meta: 'فيديو', tEn: 'Al-Barr', metaEn: 'Video', section: 'animated', lang: 'ar', video: '00ea4d481a0f87b91df34bfa1bc31b45' },
      { t: 'البصير', meta: 'فيديو', tEn: 'Al-Baseer', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'a5ec1633118875daf2818198b2a17681' },
      { t: 'التواب', meta: 'فيديو', tEn: 'Al-Tuwwaab', metaEn: 'Video', section: 'animated', lang: 'ar', video: '7ccb86afa049d461e4bc20db192ee661' },
      { t: 'الجامع', meta: 'فيديو', tEn: 'Al-Jaamey', metaEn: 'Video', section: 'animated', lang: 'ar', video: '6531c9b501d9014bdd26695f05e6a0f9' },
      { t: 'الجبار', meta: 'فيديو', tEn: 'Al-Jabbaar', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'af28ac12049122fc10eff59ce146b326' },
      { t: 'الجليل', meta: 'فيديو', tEn: 'Al-Jaleel', metaEn: 'Video', section: 'animated', lang: 'ar', video: '0b2a5eb2470dfd2e1efa225cd4c0c72b' },
      { t: 'الحسيب', meta: 'فيديو', tEn: 'Al-Haseeb', metaEn: 'Video', section: 'animated', lang: 'ar', video: '3073c5d8ecf1bf823907e54e0d84a386' },
      { t: 'الحفيظ', meta: 'فيديو', tEn: 'Al-Hafeez', metaEn: 'Video', section: 'animated', lang: 'ar', video: '6bc2d1f4e7c5d61ef2b792f36fd32faf' },
      { t: 'الحق', meta: 'فيديو', tEn: 'Al-Haqq', metaEn: 'Video', section: 'animated', lang: 'ar', video: '5534d3ffd607af36b254851f447c17c4' },
      { t: 'الحكم', meta: 'فيديو', tEn: 'Al-Hukam', metaEn: 'Video', section: 'animated', lang: 'ar', video: '9d44f2dcf773268969e807d3be03f273' },
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
      { t: 'الرشيد', meta: 'فيديو', tEn: 'Al-Rasheed', metaEn: 'Video', section: 'animated', lang: 'ar', video: '08053106706fcc0c50ff3f8e3f8bd5fc' },
      { t: 'الرقيب', meta: 'فيديو', tEn: 'Al-Raqeeb', metaEn: 'Video', section: 'animated', lang: 'ar', video: '5ca27cfff91e97f241a6ef58c5d95980' },
      { t: 'السلام', meta: 'فيديو', tEn: 'As-Salaam', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'be5face69d3246ffdffe8dcd91ed5ee6' },
      { t: 'السميع', meta: 'فيديو', tEn: 'Al-Samee', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'd7a8ee2747b4b59bfc64458aa015ad7d' },
      { t: 'الشكور', meta: 'فيديو', tEn: 'Al-Shakoor', metaEn: 'Video', section: 'animated', lang: 'ar', video: '69d7c13497c4ff7e87ad7896720e3786' },
      { t: 'الشهيد', meta: 'فيديو', tEn: 'Al-Shaheed', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'f5a0da11469baad87f39ff9c630cb264' },
      { t: 'الصبور', meta: 'فيديو', tEn: 'Al-Saboor', metaEn: 'Video', section: 'animated', lang: 'ar', video: '90a20038fcee0ad6080b5727057ce99a' },
      { t: 'الصمد', meta: 'فيديو', tEn: 'Al-Samad', metaEn: 'Video', section: 'animated', lang: 'ar', video: '0a2d5e83cd68959b82b835a00a43eedc' },
      { t: 'الضار', meta: 'فيديو', tEn: 'Al-Dhaar', metaEn: 'Video', section: 'animated', lang: 'ar', video: '0d81018f33ff4188acabc67a08abf1aa' },
      { t: 'الظاهر', meta: 'فيديو', tEn: 'Al-Zahir', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'bd44a3737ef5de1ce72ff9e7e8f144d5' },
      { t: 'العدل', meta: 'فيديو', tEn: 'Al-Adl', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'a463c116906e7975941b6840cbf66622' },
      { t: 'العزيز', meta: 'فيديو', tEn: 'Al-Aziz', metaEn: 'Video', section: 'animated', lang: 'ar', video: '7a23e764a9f59ba47c5c5941b6bc5846' },
      { t: 'العظيم', meta: 'فيديو', tEn: 'Al-Azeem', metaEn: 'Video', section: 'animated', lang: 'ar', video: '8c281df64d46b7a2a3bdfa509c73c24d' },
      { t: 'العفو', meta: 'فيديو', tEn: 'Al-Afu', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'e1a3ddec65df84855695378d15c854da' },
      { t: 'العلي', meta: 'فيديو', tEn: 'Al-Ali', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'fe16f15c9236bff693fd51276d38f6a8' },
      { t: 'العليم', meta: 'فيديو', tEn: 'Al-Aleem', metaEn: 'Video', section: 'animated', lang: 'ar', video: '480704b871df51967da670d2f9284679' },
      { t: 'الغفار', meta: 'فيديو', tEn: 'Al-Ghafaar', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'f98afedc27b3f711863d1050adc8f352' },
      { t: 'الغفور', meta: 'فيديو', tEn: 'Al-Ghafur', metaEn: 'Video', section: 'animated', lang: 'ar', video: 'fe1438a607552835534ade900a12cd9e' },
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
     // { t: '', meta: 'فيديو', tEn: '', metaEn: 'Video', section: 'animated', lang: 'ar', video: '' },
     // { t: '', meta: 'فيديو', tEn: '', metaEn: 'Video', section: 'animated', lang: 'ar', video: '' }


     

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
