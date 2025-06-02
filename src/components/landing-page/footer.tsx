
"use client";

import { Rocket } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row justify-between items-center text-sm text-foreground/70">
        <div className="flex items-center space-x-2 mb-4 sm:mb-0">
          <Rocket className="h-5 w-5 text-primary" />
          <span className="font-semibold">{t('appName')}</span>
        </div>
        <p>&copy; {currentYear} {t('footerCopyright')}</p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          {/* Placeholder for social media links or other footer links */}
          <a href="#" className="hover:text-primary">{t('footerPrivacyPolicy')}</a>
          <a href="#" className="hover:text-primary">{t('footerTermsOfService')}</a>
        </div>
      </div>
    </footer>
  );
}

    