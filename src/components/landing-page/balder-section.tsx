
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Bot, Brain, Sheet, GraduationCap, Smile, BarChartBig, type LucideIcon } from "lucide-react";
import Image from "next/image";
import { useLanguage } from '@/contexts/LanguageContext';
import type { TranslationKey } from "@/lib/translations";
import { useState } from "react";

interface Capability {
  icon: LucideIcon;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  gifUrl: string;
  gifAiHint: string;
}

export default function BalderSection() {
  const { t } = useLanguage();

  const capabilities: Capability[] = [
    {
      icon: Brain,
      titleKey: "balderCapabilityContinuousLearningTitle" as const,
      descriptionKey: "balderCapabilityContinuousLearningDesc" as const,
      gifUrl: "https://placehold.co/600x600.gif?text=Learning+AI",
      gifAiHint: "machine learning",
    },
    {
      icon: Sheet,
      titleKey: "balderCapabilityFlexibleCustomizationTitle" as const,
      descriptionKey: "balderCapabilityFlexibleCustomizationDesc" as const,
      gifUrl: "https://placehold.co/600x600.gif?text=Spreadsheet+Data",
      gifAiHint: "spreadsheet data",
    },
    {
      icon: GraduationCap,
      titleKey: "balderCapabilityTutorAgentTitle" as const,
      descriptionKey: "balderCapabilityTutorAgentDesc" as const,
      gifUrl: "https://placehold.co/600x600.gif?text=AI+Teaching",
      gifAiHint: "ai teaching",
    },
    {
      icon: Smile,
      titleKey: "balderCapabilitySentimentAnalysisTitle" as const,
      descriptionKey: "balderCapabilitySentimentAnalysisDesc" as const,
      gifUrl: "https://placehold.co/600x600.gif?text=Sentiment+Graph",
      gifAiHint: "sentiment graph",
    },
    {
      icon: BarChartBig,
      titleKey: "balderCapabilityReportsDashboardTitle" as const,
      descriptionKey: "balderCapabilityReportsDashboardDesc" as const,
      gifUrl: "https://placehold.co/600x600.gif?text=Data+Dashboard",
      gifAiHint: "data dashboard",
    },
  ];

  const defaultRobotImageUrl = "https://placehold.co/600x600.png";
  const defaultRobotImageAiHint = "robot futuristic";

  const [activeImageUrl, setActiveImageUrl] = useState<string>(defaultRobotImageUrl);
  const [activeImageAlt, setActiveImageAlt] = useState<string>(t('balderImageAlt'));
  const [activeImageAiHint, setActiveImageAiHint] = useState<string>(defaultRobotImageAiHint);

  const handleCapabilityClick = (capability: Capability) => {
    setActiveImageUrl(capability.gifUrl);
    setActiveImageAlt(t(capability.titleKey));
    setActiveImageAiHint(capability.gifAiHint);
  };

  return (
    <section id="balder" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {t('balderSectionTitle')} <span className="text-primary">{t('balderSectionTitleHighlight')}</span>: {t('language') === 'pt' ? 'Seu Especialista de Suporte Automatizado' : 'Your Automated Support Specialist'}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            {t('balderSectionSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-square max-w-md mx-auto">
            <Image 
              src={activeImageUrl} 
              alt={activeImageAlt} 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              className="rounded-lg shadow-xl"
              key={activeImageUrl} // Important for GIF re-rendering
              data-ai-hint={activeImageAiHint}
            />
             <div className="absolute -top-4 -left-4 bg-primary p-3 rounded-full shadow-lg">
              <Bot className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          
          <div className="space-y-6">
            {capabilities.map((cap, index) => (
              <Card 
                key={index} 
                className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => handleCapabilityClick(cap)}
              >
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-lg">
                    <cap.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-headline mb-1">{t(cap.titleKey)}</h3>
                    <p className="text-foreground/70">{t(cap.descriptionKey)}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
