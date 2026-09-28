"use client";

import { useState } from "react";

export default function LanguageToggle() {
  const [language, setLanguage] = useState<"ar" | "en">("ar");

  const toggleLanguage = () => {
    setLanguage(language === "ar" ? "en" : "ar");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="rounded-full border border-[#6E1B3B] px-4 py-2 text-xs font-semibold text-[#6E1B3B] transition hover:bg-[#6E1B3B] hover:text-white"
    >
      {language === "ar" ? "EN" : "AR"}
    </button>
  );
}