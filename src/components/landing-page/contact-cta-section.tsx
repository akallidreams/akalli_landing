
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactCtaSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-secondary/20 via-background to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {t('contactCtaTitle')} <span className="text-accent">{t('contactCtaTitleHighlight')}</span>
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-lg text-foreground/80">
          {t('contactCtaSubtitle')}
        </p>
        <div className="mt-10">
          <Button asChild size="lg" className="animated-border-button group p-0">
            <Link href={`mailto:${t('contactDemoEmailLink')}?subject=${encodeURIComponent(t('contactDemoEmailSubject'))}`}>
              <span className="button-content-accent px-10 py-4 text-xl shadow-lg">
                <Mail className="mr-2 h-6 w-6" /> {t('contactRequestDemoButton')}
              </span>
            </Link>
          </Button>
          <p className="mt-6 text-sm text-foreground/70">
            {t('contactSalesPitch')} <a href={`mailto:${t('contactSalesEmailLink')}`} className="text-primary hover:underline font-medium">{t('contactSalesEmailLink')}</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
