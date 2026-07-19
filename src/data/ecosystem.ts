export interface EcoNode {
  ar: string;
  tr: string;
  desc: string;
}

export const ecoData: EcoNode[] = [
  {ar:'المعرفة الشرعية',tr:'Islamic Knowledge',desc:'إنتاج المعرفة الأصيلة المعتمدة من مصادرها الموثوقة.'},
  {ar:'البحث والتحقيق',tr:'Research & Verification',desc:'التدقيق العلمي والتحقق الشرعي لكل ما يُنشر.'},
  {ar:'العلماء والخبراء',tr:'Scholars & Experts',desc:'إثراء المحتوى بخبرات العلماء والمتخصصين.'},
  {ar:'الذكاء الاصطناعي',tr:'Artificial Intelligence',desc:'تحويل المعرفة إلى تجربة ذكية تفاعلية مخصّصة.'},
  {ar:'المنصات والتطبيقات',tr:'Platforms & Apps',desc:'الوصول الرقمي متعدد القنوات في كل مكان.'},
  {ar:'المستفيدون',tr:'Beneficiaries',desc:'الأفراد والمؤسسات والمجتمعات حول العالم.'},
  {ar:'الشراكات العالمية',tr:'Global Partnerships',desc:'توسيع نطاق الوصول والتأثير عبر تحالفات استراتيجية.'},
  {ar:'الأثر والاستدامة',tr:'Impact & Sustainability',desc:'تعظيم الأثر الوقفي والمعرفي عبر الأجيال.'}
];

/* Node CENTER positions as percentages of the orbital container,
   so the diagram scales fluidly from mobile to desktop.
   8 points on the orbit ring at 45° steps. */
export const ecoPositions = [
  { l: '50%',    t: '9.4%'  },
  { l: '76.5%',  t: '20.2%' },
  { l: '87.3%',  t: '50%'   },
  { l: '76.5%',  t: '79.8%' },
  { l: '50%',    t: '90.6%' },
  { l: '23.5%',  t: '79.8%' },
  { l: '12.7%',  t: '50%'   },
  { l: '23.5%',  t: '20.2%' },
];
