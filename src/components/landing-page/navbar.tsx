
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react';
import LanguageSwitcher from '@/components/language-switcher';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navbar() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Rocket className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl font-headline">{t('appName')}</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-4">
          {/* Future nav links can go here */}
        </nav>
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <Button asChild variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href={`mailto:${t('contactDemoEmailLink')}?subject=${encodeURIComponent(t('contactDemoEmailSubject'))}`}>
              {t('navbarRequestDemo')}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

    