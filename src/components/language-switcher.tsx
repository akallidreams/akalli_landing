
"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import type { Locale } from '@/lib/translations';

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = (lang: Locale) => {
    setLanguage(lang);
  };

  return (
    <div className="flex space-x-1">
      <Button
        variant={language === 'pt' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => toggleLanguage('pt')}
        className="px-2 py-1 text-xs"
        aria-label="Mudar para Português"
      >
        PT
      </Button>
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => toggleLanguage('en')}
        className="px-2 py-1 text-xs"
        aria-label="Switch to English"
      >
        EN
      </Button>
    </div>
  );
}

    