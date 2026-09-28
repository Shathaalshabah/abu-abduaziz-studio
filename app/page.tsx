"use client";

import { useState } from "react";

type Language = "ar" | "en";

const content = {
  ar: {
    nav: {
      story: "قصتنا",
      services: "خدماتنا",
      branches: "فروعنا",
      contact: "تواصل معنا",
    },

    heroEyebrow: "ABU ABDULAZIZ STUDIO & LABS",

    heroTitle: "نصنع الصورة. نحفظ اللحظة.",

    heroText:
      "منذ عام 1989، نقدم خدمات التصوير والطباعة ومعالجة الصور وتغطية المناسبات بخبرة تمتد لعقود في المنطقة الشرقية.",

    heroButton: "اكتشف خدماتنا",

    heroSecondary: "تعرف على قصتنا",

    introBanner:
      "نحن محترفون ذوو إبداع وخبرة عالية نقدم مجموعة كاملة من خدمات الاستوديو، التصوير الفوتوغرافي، الطباعة، وتغطية الفيديو.",

    storyLabel: "قصتنا",

    storyTitle: "خبرة بدأت عام 1989.",

    storyIntro:
      "تأسس استوديو ومعامل أبو عبدالعزيز في أوائل عام 1989 كمختبر ألوان تحت اسم Abu Abdulaziz Studio & Labs، ومنذ ذلك الوقت توسعت خدماته لتشمل استوديو التصوير، وتصوير الفيديو الخارجي، والتصوير الفوتوغرافي الثابت.",

    storyDetails:
      "كما شملت خدماتنا معالجة وتحميض أفلام الأبيض والأسود، والسيبيا، والأفلام الملونة، وأفلام الشرائح، بالإضافة إلى تنقيح الصور وترميمها بواسطة كوادر مؤهلة وذات خبرة.",

    storyToday:
      "اليوم، يقدم أبو عبدالعزيز ستوديو ومعامل مجموعة متكاملة من خدمات الاستوديو والتصوير والطباعة وتغطية الفيديو، ويُعد من الاستوديوهات ذات الخبرة والتنوع في المنطقة الشرقية بالمملكة العربية السعودية.",

    storyClients:
      "نعمل مع مختلف أنواع العملاء، من الأفراد والمنشآت الصغيرة والمدارس، إلى الشركات والمؤسسات الكبيرة.",

    clientsTitle: "عملاؤنا",

    clients: [
      "المصانع",
      "المنشآت الصغيرة والمتوسطة",
      "الشركات الصناعية",
      "الأفراد",
      "الجمهور العام",
    ],

    managementTitle: "الإدارة",

    management: [
      {
        name: "Mr. Khaja Mohidheen",
        role: "مدير الفرع العام",
      },
      {
        name: "Mr. Zaid Atheeq Al-Bugami",
        role: "الرئيس التنفيذي / المالك",
      },
    ],

    profileTitle: "ملف الشركة",

    profile: [
      "بداية النشاط: 1989",
      "اسم المجموعة: Abu Abdulaziz Studio Group of Company",
      "رقم الترخيص: 5027/S",
      "عضوية الغرفة: 14770",
      "الفروع: 8 في الدمام، 4 في الخبر، 1 في النعيرية، 2 في الخفجي",
    ],

    servicesLabel: "خدماتنا",

    servicesTitle: "كل ما تحتاجه للصورة، في مكان واحد.",

    servicesIntro:
      "نقدم مجموعة متكاملة من خدمات الاستوديو والتصوير والطباعة وتغطية الفيديو. بخبرة تمتد لعقود في المنطقة الشرقية بالمملكة العربية السعودية، نخدم الأفراد والمنشآت الصغيرة والمدارس والشركات والمؤسسات الكبيرة.",

    services: [
      {
        title: "معالجة وإنهاء الصور",
        englishTitle: "Photo Finishing",
        text:
          "نقدم خدمات معالجة وإنهاء الصور باستخدام أحدث الحلول الرقمية، وننتج صورًا جميلة بجودة عالية باستخدام تقنيات صديقة للبيئة.",
        image: "/services/photo-finishing.jfif",
      },
      {
        title: "طباعة الكانفس",
        englishTitle: "Canvas Printing",
        text:
          "نقدم خدمات طباعة الكانفس بجودة عالية وأسعار مناسبة، مع التركيز على الدقة وتوازن التباين للحصول على أفضل نتيجة ممكنة.",
        image: "/services/canvas-printing.jfif",
      },
      {
        title: "تكبير الصور الرقمية",
        englishTitle: "Digital Photo Enlargement",
        text:
          "نقوم بتكبير الصور رقميًا مع الحفاظ على تفاصيلها ووضوحها، وتحسين مظهرها باستخدام تقنيات تحسين الصور الرقمية.",
        image: "/services/digital-enlargement.jfif",
      },
      {
        title: "إطارات الصور",
        englishTitle: "Picture Framing",
        text:
          "نوفر إطارات مخصصة تضيف لمسة فنية مميزة لصورك، مع مجموعة متنوعة من التصاميم التي تناسب مختلف الأذواق.",
        image: "/services/picture-framing.jfif",
      },
      {
        title: "تعديل الصور والفيديو",
        englishTitle: "Photo & Video Editing",
        text:
          "نقدم مختلف خدمات تعديل الصور والفيديو، باستخدام تقنيات وأدوات متقدمة لإخراج العمل بصورة عصرية واحترافية.",
        image: "/services/photo-video-editing.jfif",
      },
      {
        title: "التصوير الفوتوغرافي",
        englishTitle: "Still Photography",
        text:
          "نقدم تصويرًا فوتوغرافيًا مميزًا لمجموعة واسعة من المجالات، من التصوير الصناعي إلى التصوير الفردي، مع اهتمام خاص بالضوء والظلال والتفاصيل.",
        image: "/services/still-photography.jfif",
      },
      {
        title: "تغطية المناسبات بالصور والفيديو",
        englishTitle: "Photo & Video Coverage",
        text:
          "يضم فريقنا خبرات متخصصة في تصوير وتغطية المناسبات، لالتقاط أجمل اللحظات والتفاصيل التي تستحق أن تبقى.",
        image: "/services/event-coverage.jfif",
      },
    ],

    branchesLabel: "فروعنا",

    branchesTitle: "أين نوجد",

    branchesIntro:
      "نحن مجموعة شركات تضم 15 استوديو ومختبرًا متكاملاً تنتشر في جميع أنحاء المنطقة الشرقية بالمملكة العربية السعودية. نحن دائمًا بالقرب منك لنخدمك بأسرع وقت ممكن.",

    branchesList: [
      {
        id: "الفرع 1",
        name: "استوديو ومعامل أبو عبدالعزيز",
        address:
          "2963 شارع الخوارزمي، حي بدر، الدمام 32266، المنطقة الشرقية، السعودية. 7447",
      },
      {
        id: "الفرع 2",
        name: "استوديو ومعامل أبو عبدالعزيز",
        address:
          "6775 شارع أبو بكر الصديق، حي أحد، الدمام 32263، المنطقة الشرقية، السعودية. 3228",
      },
      {
        id: "الفرع 3",
        name: "استوديو ومعامل أبو عبدالعزيز",
        address:
          "8164 شارع أبو بكر الصديق، حي بدر، الدمام 32265، المنطقة الشرقية، السعودية. 4098",
      },
      {
        id: "الفرع 4",
        name: "استوديو ومعامل أبو عبدالعزيز",
        address:
          "8156 شارع عمر بن الخطاب، حي أحد، الدمام 32263، المنطقة الشرقية، السعودية. 4478",
      },
      {
        id: "الفرع 5",
        name: "استوديو ومعامل أبو عبدالعزيز",
        address:
          "7786 طريق الأمير نايف، حي الروضة، الدمام 32257، المنطقة الشرقية، السعودية. 3405",
      },
      {
        id: "الفرع 6",
        name: "استوديو ومعامل أبو عبدالعزيز",
        address:
          "8743 الشارع الرابع، حي الثقبة، الخبر 34623، المنطقة الشرقية، السعودية. 3531",
      },
      {
        id: "الفرع 7",
        name: "فرع الدمام",
        address:
          "7808 طريق الأمير نايف، حي الروضة، الدمام 32257، المنطقة الشرقية، السعودية. 3393",
      },
      {
        id: "الفرع 8",
        name: "استوديو ومعامل أبو عبدالعزيز",
        address:
          "5328 شارع الملك خالد، حي الربيع، الدمام 32241، المنطقة الشرقية، السعودية. 8163",
      },
      {
        id: "الفرع 9",
        name: "استوديو ومعامل أبو عبدالعزيز",
        address:
          "4831 شارع الملك عبد العزيز، حي التعاون، الخفجي 39255، المنطقة الشرقية، السعودية. 9333",
      },
      {
        id: "الفرع 11",
        name: "استوديو ومعامل أبو عبدالعزيز",
        address:
          "الشارع العشرين، حي التعاون، الخبر 34624، المنطقة الشرقية، السعودية. 9333",
      },
      {
        id: "الفرع 12",
        name: "استوديو ومعامل أبو عبدالعزيز",
        address:
          "9079 طريق الملك عبد العزيز، حي الخالدية الجنوبية، الدمام 32221، السعودية. 2841",
      },
      {
        id: "الفرع 13",
        name: "استوديو ومعامل أبو عبدالعزيز",
        address:
          "النعيرية، المنطقة الشرقية، المملكة العربية السعودية. 2841",
      },
      {
        id: "الفرع 14",
        name: "استوديو ومعامل أبو عبدالعزيز",
        address:
          "3866 الشارع العشرين، حي الثقبة، الخبر 34624، المنطقة الشرقية، السعودية. 7365",
      },
      {
        id: "الفرع 15",
        name: "استوديو ومعامل أبو عبدالعزيز",
        address:
          "4436 شارع خالد بن الوليد، حي الراكة الشمالية، الدمام 34224، السعودية. 7969",
      },
    ],

    contactLabel: "تواصل معنا",

    contactTitle: "لديك مشروع أو مناسبة؟",

    contactText:
      "تواصل معنا لمعرفة المزيد عن خدمات التصوير والطباعة وتغطية المناسبات عبر قنواتنا الرسمية.",

    phoneLabel: "رقم الهاتف",

    emailLabel: "البريد الإلكتروني",

    footerText: "ABU ABDULAZIZ STUDIO & LABS",

    footerSince: "SINCE 1989",
  },

  en: {
    nav: {
      story: "Our Story",
      services: "Services",
      branches: "Branches",
      contact: "Contact",
    },

    heroEyebrow: "ABU ABDULAZIZ STUDIO & LABS",

    heroTitle: "We create the image. We preserve the moment.",

    heroText:
      "Since 1989, we have provided photography, printing, photo finishing and event coverage services with decades of experience in the Eastern Province.",

    heroButton: "Explore Our Services",

    heroSecondary: "Our Story",

    introBanner:
      "We are highly creative and experienced professionals offering a full range of studio, Photography services, printing and video coverage.",

    storyLabel: "OUR STORY",

    storyTitle: "Experience that began in 1989.",

    storyIntro:
      "Abu Abdulaziz Studio & Labs was established in early 1989 as a color laboratory. Since then, our services have expanded to include studio photography, outdoor video production and still photography.",

    storyDetails:
      "Our services also included the processing and developing of black-and-white, sepia, color and slide films, in addition to photo retouching and restoration performed by qualified and experienced professionals.",

    storyToday:
      "Today, Abu Abdulaziz Studio & Labs provides a comprehensive range of studio, photography, printing and video coverage services. We are one of the experienced and versatile studios in the Eastern Province of the Kingdom of Saudi Arabia.",

    storyClients:
      "We work with all types of clients, from individuals, small businesses and schools to large corporations and institutions.",

    clientsTitle: "Our Clients",

    clients: [
      "Factories",
      "Small & Medium Enterprises",
      "Industrial Companies",
      "Individuals",
      "General Public",
    ],

    managementTitle: "Management",

    management: [
      {
        name: "Mr. Khaja Mohidheen",
        role: "General Branch Manager",
      },
      {
        name: "Mr. Zaid Atheeq Al-Bugami",
        role: "CEO / Owner",
      },
    ],

    profileTitle: "Company Profile",

    profile: [
      "Established: 1989",
      "Group Name: Abu Abdulaziz Studio Group of Company",
      "License No.: 5027/S",
      "Chamber Membership: 14770",
      "Branches: 8 in Dammam, 4 in Al Khobar, 1 in Nairiyah, 2 in Al Khafji",
    ],

    servicesLabel: "OUR SERVICES",

    servicesTitle: "Everything you need for the image, in one place.",

    servicesIntro:
      "We offer a full range of studio, photography, printing and video coverage services. With decades of experience in the Eastern Province of the Kingdom of Saudi Arabia, we work with individuals, small businesses, schools, large corporations and institutions.",

    services: [
      {
        title: "Photo Finishing",
        englishTitle: "PHOTO FINISHING",
        text:
          "We provide professional photo finishing services using the latest digital photo solutions. We create beautiful prints using environmentally friendly technology.",
        image: "/services/photo-finishing.jfif",
      },
      {
        title: "Canvas Printing",
        englishTitle: "CANVAS PRINTING",
        text:
          "We offer high-quality canvas printing at affordable prices, with a strong focus on precision and accurate contrast levels.",
        image: "/services/canvas-printing.jfif",
      },
      {
        title: "Digital Photo Enlargement",
        englishTitle: "DIGITAL PHOTO ENLARGEMENT",
        text:
          "We enlarge your photos digitally while preserving detail and sharpness, enhancing their appearance through advanced digital photo enhancement technologies.",
        image: "/services/digital-enlargement.jfif",
      },
      {
        title: "Picture Framing",
        englishTitle: "PICTURE FRAMING",
        text:
          "We offer custom frames that give your photos a distinctive artistic touch, with a wide range of styles to suit different tastes.",
        image: "/services/picture-framing.jfif",
      },
      {
        title: "Photo & Video Editing",
        englishTitle: "PHOTO & VIDEO EDITING",
        text:
          "We provide a wide range of photo and video editing services using advanced technologies and professional tools to create modern, high-quality results.",
        image: "/services/photo-video-editing.jfif",
      },
      {
        title: "Still Photography",
        englishTitle: "STILL PHOTOGRAPHY",
        text:
          "We produce outstanding photographs across a wide range of categories, from industrial photography to individual photography, with careful attention to light, shadows and detail.",
        image: "/services/still-photography.jfif",
      },
      {
        title: "Photo & Video Coverage",
        englishTitle: "PHOTO & VIDEO COVERAGE",
        text:
          "Our experienced team provides professional event photography and videography, capturing the beautiful moments and details you will want to remember.",
        image: "/services/event-coverage.jfif",
      },
    ],

    branchesLabel: "BRANCHES",

    branchesTitle: "Where we are",

    branchesIntro:
      "We are a group of companies with 15 full featured studio and labs spread across Eastern Province of Saudi Arabia. We are always near by you so we can serve you quickly as possible.",

    branchesList: [
      {
        id: "Branch 1",
        name: "Abu Abdulaziz Studio & Labs",
        address:
          "2963 Khawazami St., Bad, Ad Dammam 32266, Eastern province, Saudi Arabia. 7447",
      },
      {
        id: "Branch 2",
        name: "Abu Abdulaziz Studio & Labs",
        address:
          "6775 Abu Bakr Al-Siddiq, Uhud Ad Dammam 32263, Eastern province, Saudi Arabia. 3228",
      },
      {
        id: "Branch 3",
        name: "Abu Abdulaziz Studio & Labs",
        address:
          "8164 Abu Bakr Al-Siddiq, Badr Ad Dammam 32265, Eastern province, Saudi Arabia. 4098",
      },
      {
        id: "Branch 4",
        name: "Abu Abdulaziz Studio & Labs",
        address:
          "8156 Omar Ibn Al-Khattab, Uhud Ad Dammam 32263, Eastern province, Saudi Arabia. 4478",
      },
      {
        id: "Branch 5",
        name: "Abu Abdulaziz Studio & Labs",
        address:
          "7786 Al Amir Naif Ibn Abdul Aziz Rd, Al Rawdah Ad Dammam 32257, Eastern province, Saudi Arabia. 3405",
      },
      {
        id: "Branch 6",
        name: "Abu Abdulaziz Studio & Labs",
        address:
          "8743 4th, Thuqbah Al Khobar 34623, Eastern province, Saudi Arabia. 3531",
      },
      {
        id: "Branch 7",
        name: "Dammam - Saudi Arabia",
        address:
          "7808 Al Amir Naif Ibn Abdul Aziz Rd, Al Rawdah Ad Dammam 32257, Eastern province, Saudi Arabia. 3393",
      },
      {
        id: "Branch 8",
        name: "Abu Abdulaziz Studio & Labs",
        address:
          "5328 King Khalid ST, Al-Rabi Ad Dammam 32241, Eastern province, Saudi Arabia. 8163",
      },
      {
        id: "Branch 9",
        name: "Abu Abdulaziz Studio & Labs",
        address:
          "4831 King Abdul-Aziz, Al-Taawun Ras al Khafji 39255, Eastern province, Saudi Arabia. 9333",
      },
      {
        id: "Branch 11",
        name: "Abu Abdulaziz Studio & Labs",
        address:
          "20th St, Al-Taawun, Al Khobar 34624, Eastern province, Saudi Arabia. 9333",
      },
      {
        id: "Branch 12",
        name: "Abu Abdulaziz Studio & Labs",
        address:
          "9079 King Abdul-Aziz Rd, Al Khalidiyah Al Janubiyah Ad Dammam 32221, Saudi Arabia. 2841",
      },
      {
        id: "Branch 13",
        name: "Abu Abdulaziz Studio & Labs",
        address:
          "Nairyah, Eastern province, Saudi Arabia. 2841",
      },
      {
        id: "Branch 14",
        name: "Abu Abdulaziz Studio & Labs",
        address:
          "3866 20th St, Thuqbah Al Khobar 34624, Eastern province, Saudi Arabia. 7365",
      },
      {
        id: "Branch 15",
        name: "Abu Abdulaziz Studio & Labs",
        address:
          "4436 Khalid Bin Al-Waleed, Al-Rakah Ash Shamaliyah Ad Dammam 34224, Saudi Arabia. 7969",
      },
    ],

    contactLabel: "CONTACT",

    contactTitle: "Have a project or an occasion?",

    contactText:
      "Get in touch with us to learn more about our photography, printing and event coverage services through our official channels.",

    phoneLabel: "Phone Number",

    emailLabel: "Email Address",

    footerText: "ABU ABDULAZIZ STUDIO & LABS",

    footerSince: "SINCE 1989",
  },
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("ar");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isArabic = language === "ar";
  const t = isArabic ? content.ar : content.en;

  const toggleLanguage = () => {
    setLanguage((currentLanguage) =>
      currentLanguage === "ar" ? "en" : "ar"
    );

    setMobileMenuOpen(false);
  };

  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen bg-[#F7F4EE] text-[#252321] selection:bg-[#7A3E48] selection:text-white"
    >
      <header className="sticky top-0 z-50 border-b border-[#D4CCC0]/60 bg-[#F7F4EE]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 md:px-12">
          <a href="#top" className="flex items-center">
            <span className="text-xs font-bold tracking-[0.15em] text-[#252321] sm:text-sm sm:tracking-[0.2em]">
              ABU ABDULAZIZ STUDIO & LABS
            </span>
          </a>

          <nav className="hidden items-center gap-6 text-sm md:flex lg:gap-8">
            <a
              href="#story"
              className="transition hover:text-[#7A3E48]"
            >
              {t.nav.story}
            </a>

            <a
              href="#services"
              className="transition hover:text-[#7A3E48]"
            >
              {t.nav.services}
            </a>

            <a
              href="#branches"
              className="transition hover:text-[#7A3E48]"
            >
              {t.nav.branches}
            </a>

            <a
              href="#contact"
              className="transition hover:text-[#7A3E48]"
            >
              {t.nav.contact}
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleLanguage}
              className="relative z-[9999] cursor-pointer touch-manipulation select-none rounded-full border border-[#B5ADA0] bg-[#F7F4EE] px-4 py-2 text-xs font-semibold active:scale-95"
              aria-label={
                isArabic
                  ? "Switch to English"
                  : "التبديل إلى العربية"
              }
            >
              {isArabic ? "EN" : "عربي"}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-[#B5ADA0] md:hidden"
              aria-label="Toggle Menu"
            >
              <span
                className={`h-0.5 w-5 bg-[#252321] transition ${
                  mobileMenuOpen
                    ? "translate-y-2 rotate-45"
                    : ""
                }`}
              />

              <span
                className={`h-0.5 w-5 bg-[#252321] transition ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`h-0.5 w-5 bg-[#252321] transition ${
                  mobileMenuOpen
                    ? "-translate-y-2 -rotate-45"
                    : ""
                }`}
              />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-b border-[#D4CCC0] bg-[#F7F4EE] px-6 py-6 shadow-lg md:hidden">
            <nav className="flex flex-col gap-4 text-base font-medium">
              <a
                href="#story"
                onClick={() => setMobileMenuOpen(false)}
                className="transition hover:text-[#7A3E48]"
              >
                {t.nav.story}
              </a>

              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="transition hover:text-[#7A3E48]"
              >
                {t.nav.services}
              </a>

              <a
                href="#branches"
                onClick={() => setMobileMenuOpen(false)}
                className="transition hover:text-[#7A3E48]"
              >
                {t.nav.branches}
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="transition hover:text-[#7A3E48]"
              >
                {t.nav.contact}
              </a>
            </nav>
          </div>
        )}
      </header>

      <section
        id="top"
        className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24 md:px-12 md:py-28"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p
              className={`mb-4 text-xs font-semibold text-[#7B8770] sm:mb-6 ${
                !isArabic
                  ? "tracking-[0.25em] sm:tracking-[0.3em]"
                  : ""
              }`}
            >
              {t.heroEyebrow}
            </p>

            <h1 className="max-w-5xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              {t.heroTitle}
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#625D57] sm:mt-8 sm:text-base sm:leading-8 md:text-lg">
              {t.heroText}
            </p>

            <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
              <a
                href="#services"
                className="rounded-full bg-[#7A3E48] px-6 py-3 text-xs font-semibold text-white transition hover:bg-[#64313A] sm:px-7 sm:py-4 sm:text-sm"
              >
                {t.heroButton}
              </a>

              <a
                href="#story"
                className="rounded-full border border-[#B5ADA0] px-6 py-3 text-xs font-semibold transition hover:border-[#7A3E48] hover:text-[#7A3E48] sm:px-7 sm:py-4 sm:text-sm"
              >
                {t.heroSecondary}
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="h-px w-12 bg-[#7A3E48]" />

              <p className="text-xs tracking-[0.2em] text-[#7B8770] sm:text-sm">
                SINCE 1989
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="absolute -inset-3 rotate-2 rounded-[2rem] border border-[#7A3E48]/20" />

            <div className="relative overflow-hidden rounded-[2rem] bg-[#DDD6CA] shadow-2xl">
              <img
                src="/the_main-phote.jfif"
                alt="Abu Abdulaziz Studio & Labs"
                className="h-auto w-full object-contain transition duration-700 hover:scale-105 lg:h-[560px] lg:object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="story"
        className="bg-[#252321] px-4 py-16 text-[#F7F4EE] sm:px-6 sm:py-20 md:px-12 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p
              className={`mb-3 text-base font-bold text-[#A5AF99] sm:mb-4 sm:text-lg ${
                !isArabic ? "tracking-[0.3em]" : ""
              }`}
            >
              {t.storyLabel}
            </p>

            <p className="mb-6 rounded-2xl border border-white/15 bg-white/10 p-5 text-base font-medium leading-relaxed text-[#F7F4EE] sm:mb-8 sm:text-lg md:text-xl">
              {t.introBanner}
            </p>

            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-6xl">
              {t.storyTitle}
            </h2>

            <p className="mt-6 text-sm leading-7 text-[#D8D1C7] sm:mt-8 sm:text-base sm:leading-8 md:text-lg">
              {t.storyIntro}
            </p>

            <p className="mt-4 text-sm leading-7 text-[#D8D1C7] sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
              {t.storyDetails}
            </p>

            <p className="mt-4 text-sm leading-7 text-[#D8D1C7] sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
              {t.storyToday}
            </p>

            <p className="mt-4 text-sm leading-7 text-[#D8D1C7] sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
              {t.storyClients}
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:mt-20 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-7">
              <p
                className={`text-base font-bold text-[#A5AF99] sm:text-lg ${
                  !isArabic ? "tracking-[0.2em]" : ""
                }`}
              >
                {t.clientsTitle}
              </p>

              <ul className="mt-4 space-y-3 sm:mt-6 sm:space-y-4">
                {t.clients.map((client) => (
                  <li
                    key={client}
                    className="border-b border-white/10 pb-3 text-xs text-[#E6DED3] sm:text-sm"
                  >
                    {client}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-7">
              <p
                className={`text-base font-bold text-[#A5AF99] sm:text-lg ${
                  !isArabic ? "tracking-[0.2em]" : ""
                }`}
              >
                {t.managementTitle}
              </p>

              <div className="mt-4 space-y-5 sm:mt-6 sm:space-y-7">
                {t.management.map((person) => (
                  <div key={person.name}>
                    <p className="text-sm font-semibold text-[#F7F4EE] sm:text-base">
                      {person.name}
                    </p>

                    <p className="mt-1 text-xs text-[#BEB6AC] sm:mt-2 sm:text-sm">
                      {person.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-7">
              <p
                className={`text-base font-bold text-[#A5AF99] sm:text-lg ${
                  !isArabic ? "tracking-[0.2em]" : ""
                }`}
              >
                {t.profileTitle}
              </p>

              <ul className="mt-4 space-y-3 sm:mt-6 sm:space-y-4">
                {t.profile.map((item) => (
                  <li
                    key={item}
                    className="border-b border-white/10 pb-3 text-xs leading-5 text-[#E6DED3] sm:text-sm sm:leading-6"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-4xl sm:mb-12">
            <p
              className={`mb-3 text-base font-bold text-[#7B8770] sm:mb-4 sm:text-lg ${
                !isArabic ? "tracking-[0.3em]" : ""
              }`}
            >
              {t.servicesLabel}
            </p>

            <h2 className="text-3xl font-semibold sm:text-4xl md:text-6xl">
              {t.servicesTitle}
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#625D57] sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
              {t.servicesIntro}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {t.services.map((service, index) => (
              <div
                key={service.title}
                className="group overflow-hidden rounded-3xl border border-[#D4CCC0] bg-[#F7F4EE] transition hover:-translate-y-1 hover:border-[#7A3E48]"
              >
                <div className="relative h-56 overflow-hidden bg-[#DDD6CA] sm:h-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute end-0 top-4 pe-4 ps-4 sm:top-5 sm:pe-5 sm:ps-5">
                    <span className="rounded-full bg-[#F7F4EE]/90 px-3 py-1.5 text-xs font-semibold text-[#7A3E48] sm:px-4 sm:py-2">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-semibold sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-[#756E66] sm:mt-4 sm:text-sm sm:leading-7">
                    {service.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="branches"
        className="bg-[#EDE7DD] px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-4xl sm:mb-12">
            <p
              className={`mb-3 text-base font-bold text-[#7B8770] sm:mb-4 sm:text-lg ${
                !isArabic ? "tracking-[0.3em]" : ""
              }`}
            >
              {t.branchesLabel}
            </p>

            <h2 className="text-3xl font-semibold sm:text-4xl md:text-6xl">
              {t.branchesTitle}
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#625D57] sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
              {t.branchesIntro}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.branchesList.map((branch) => (
              <div
                key={branch.id}
                className="rounded-2xl border border-[#D4CCC0] bg-[#F7F4EE] p-5 transition hover:-translate-y-1 hover:border-[#7A3E48] sm:p-6"
              >
                <div className="flex items-center justify-between border-b border-[#D4CCC0]/60 pb-2.5 sm:pb-3">
                  <span className="rounded-full bg-[#7A3E48] px-3 py-1 text-xs font-semibold text-white">
                    {branch.id}
                  </span>

                  <span className="text-xs font-medium tracking-wider text-[#7B8770]">
                    KSA
                  </span>
                </div>

                <h3 className="mt-3 text-base font-bold text-[#252321] sm:mt-4 sm:text-lg">
                  {branch.name}
                </h3>

                <p className="mt-2 text-xs leading-5 text-[#625D57] sm:mt-2.5 sm:text-sm sm:leading-6">
                  {branch.address}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-28"
      >
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#7A3E48] p-6 text-white sm:p-10 md:p-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p
                className={`mb-3 text-base font-bold text-[#EDE7DD] sm:mb-4 sm:text-lg ${
                  !isArabic ? "tracking-[0.3em]" : ""
                }`}
              >
                {t.contactLabel}
              </p>

              <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
                {t.contactTitle}
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#EDE7DD] sm:mt-6 sm:text-base sm:leading-8">
                {t.contactText}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="tel:+966138348000"
                className="group rounded-2xl bg-white/10 p-5 backdrop-blur transition hover:bg-white/20 sm:p-6"
              >
                <p className="text-xs tracking-wider text-[#EDE7DD]">
                  {t.phoneLabel}
                </p>

                <p
                  className="mt-2 text-base font-bold text-white sm:text-lg"
                  dir="ltr"
                >
                  {isArabic
                    ? "+٩٦٦ ١٣ ٨٣٤ ٨٠٠٠"
                    : "+966 13 834 8000"}
                </p>
              </a>

              <a
                href="mailto:studio_aaa@hotmail.com"
                className="group rounded-2xl bg-white/10 p-5 backdrop-blur transition hover:bg-white/20 sm:p-6"
              >
                <p className="text-xs tracking-wider text-[#EDE7DD]">
                  {t.emailLabel}
                </p>

                <p
                  className="mt-2 break-all text-xs font-bold text-white sm:text-sm"
                  dir="ltr"
                >
                  studio_aaa@hotmail.com
                </p>
              </a>

              <a
                href="https://www.facebook.com/people/Studio-Abu-ABDUL-AZIZ/100079802080234/?ref=br_rs#"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl bg-white/10 p-5 backdrop-blur transition hover:bg-white/20 sm:col-span-2 sm:p-6"
              >
                <div>
                  <p className="text-xs tracking-wider text-[#EDE7DD]">
                    Facebook
                  </p>

                  <p className="mt-2 text-xs font-bold text-white sm:text-sm">
                    Studio Abu Abdul Aziz
                  </p>
                </div>

                <span className="text-lg font-bold text-[#EDE7DD] transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#D4CCC0]/60 bg-[#F7F4EE] px-4 py-8 sm:px-6 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-start">
          <p className="text-xs font-bold tracking-widest text-[#252321]">
            {t.footerText}
          </p>

          <p className="text-xs font-semibold tracking-widest text-[#7B8770]">
            {t.footerSince}
          </p>
        </div>
      </footer>
    </main>
  );
}