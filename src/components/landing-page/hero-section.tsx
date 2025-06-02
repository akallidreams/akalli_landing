
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

// WhatsApp Icon SVG
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.61 15.35 3.48 16.82L2.06 22L7.32 20.55C8.75 21.36 10.36 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 6.45 17.5 2 12.04 2ZM12.04 3.64C16.57 3.64 20.31 7.38 20.31 11.91C20.31 16.44 16.57 20.18 12.04 20.18C10.52 20.18 9.08 19.77 7.84 19.04L7.26 18.71L4.63 19.43L5.38 16.89L5.04 16.29C4.18 14.94 3.77 13.39 3.77 11.91C3.77 7.38 7.51 3.64 12.04 3.64ZM16.97 14.67C16.77 14.57 15.57 13.99 15.37 13.91C15.17 13.84 15.04 13.79 14.9 14.04C14.77 14.29 14.24 14.89 14.07 15.09C13.89 15.29 13.72 15.31 13.52 15.21C13.32 15.12 12.39 14.81 11.26 13.79C10.37 12.99 9.79 12.04 9.64 11.79C9.49 11.54 9.61 11.42 9.74 11.29C9.86 11.17 9.99 11.01 10.12 10.87C10.24 10.73 10.29 10.63 10.39 10.43C10.49 10.23 10.44 10.08 10.37 9.98C10.3 9.88 9.82 8.71 9.62 8.21C9.43 7.72 9.23 7.79 9.09 7.79C8.98 7.79 8.78 7.79 8.58 7.79C8.38 7.79 8.11 7.86 7.89 8.11C7.67 8.36 7.09 8.91 7.09 10.01C7.09 11.11 7.92 12.14 8.04 12.29C8.16 12.44 9.81 14.91 12.2 15.89C12.81 16.16 13.29 16.31 13.68 16.41C14.25 16.56 14.76 16.54 15.18 16.49C15.64 16.43 16.57 15.84 16.74 15.59C16.92 15.34 16.92 15.14 16.97 14.67Z"></path>
  </svg>
);

export default function HeroSection() {
  const { t } = useLanguage();
  // ATENÇÃO: Substitua O_SEU_NUMERO_DO_WHATSAPP pelo número correto, incluindo o código do país, sem o '+' e sem espaços ou traços. Ex: 55119XXXXXXXX
  // Ou use a chave de tradução se o link completo (com mensagem) variar:
  // const whatsAppBaseUrl = "https://wa.me/";
  // const whatsAppLink = `${whatsAppBaseUrl}${t('heroWhatsAppLink')}`; 
  const whatsAppLink = `https://wa.me/${t('heroWhatsAppLink')}`; // Simplificado para número apenas

  return (
    <section id="hero" className="py-20 md:py-28 bg-gradient-to-b from-background via-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block">{t('heroTitle1')}</span>
          <span className="block text-primary">{t('heroTitle2')}</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/80 sm:text-xl md:text-2xl">
          {t('heroSubtitle')}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button asChild size="lg" className="animated-border-button group p-0">
            <Link href={whatsAppLink} target="_blank" rel="noopener noreferrer">
              <span className="button-content-primary px-8 py-3 text-lg">
                <WhatsAppIcon />
                {t('heroWhatsAppButton')}
              </span>
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-8 py-3 text-lg">
            <Link href={`mailto:${t('contactSalesEmailLink')}?subject=${encodeURIComponent(t('contactDemoEmailSubject'))}`}>
              {t('heroLearnMoreButton')}
            </Link>
          </Button>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center mt-16 md:mt-20">
        <div className="aspect-video w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-2xl border border-border/20">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // SUBSTITUA COM SEU VIDEO ID
            title={t('heroVideoTitle')}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            data-ai-hint="technology product showcase"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
