
"use client";

import type { ReactNode } from 'react';
import { createContext, useCallback, useContext, useState, useMemo, useEffect } from 'react';
import { translations, type Locale, type TranslationKey } from '@/lib/translations';

interface LanguageContextType {
  language: Locale;
  setLanguage: (language: Locale) => void;
  t: (key: TranslationKey, replacements?: Record<string, string>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Locale>('pt'); // Default to Portuguese

  useEffect(() => {
    // Optionally, detect browser language or load from localStorage
    const storedLang = localStorage.getItem('akalli-lang') as Locale | null;
    if (storedLang && (storedLang === 'pt' || storedLang === 'en')) {
      setLanguageState(storedLang);
    } else {
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'en') {
        setLanguageState('en');
      } else {
        setLanguageState('pt'); // Default to Portuguese for other browser languages
      }
    }
  }, []);

  const setLanguage = useCallback((lang: Locale) => {
    setLanguageState(lang);
    localStorage.setItem('akalli-lang', lang);
  }, []);

  const t = useCallback((key: TranslationKey, replacements?: Record<string, string>): string => {
    let translation = translations[language]?.[key] || translations.en[key] || key; // Fallback to English, then key itself
    if (replacements) {
      Object.entries(replacements).forEach(([placeholder, value]) => {
        translation = translation.replace(new RegExp(`{{${placeholder}}}`, 'g'), value);
      });
    }
    return translation;
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

    