import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";

const languages = [
  { code: "uzb", label: "UZB" },
  { code: "eng", label: "ENG" },
  { code: "rus", label: "RUS" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language || "uzb");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      i18n.changeLanguage(savedLang);
      setCurrentLang(savedLang);
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    setCurrentLang(lang);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="cursor-pointer px-4 py-1 max-[450px]:py-0.5 max-[450px]:px-2 rounded-md bg-[#D5FF3F] text-[#161B22] font-semibold"
      >
        {currentLang.toUpperCase()}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-24 rounded-md bg-[#161B22] shadow-lg border border-[#D5FF3F]">
          {languages.map((lang) => {
            const isActive = currentLang === lang.code;

            return (
              <button
                key={lang.code}
                onClick={() => changeLang(lang.code)}
                className={`w-full px-4 py-2 text-left transition-all duration-300
                  ${
                    isActive
                      ? "bg-[#D5FF3F] text-[#161B22] font-semibold"
                      : "text-white/70 hover:bg-[#D5FF3F] hover:text-[#161B22]"
                  }
                `}
              >
                {lang.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
