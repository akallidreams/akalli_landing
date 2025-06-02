
"use client";

import AgentCard from "./agent-card";
import { Cpu, Bot, BrainCircuit, Zap, Aperture, Lightbulb, Puzzle } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';
import type { TranslationKey } from "@/lib/translations";

interface UpcomingAgent {
  nameKey: TranslationKey;
  descriptionKey: TranslationKey;
  icon: React.ElementType; // LucideIcon type can be used if more specific
}

const upcomingAgentsData: UpcomingAgent[] = [
  { nameKey: "agentCygnusName", descriptionKey: "agentCygnusDesc", icon: Cpu },
  { nameKey: "agentLyraName", descriptionKey: "agentLyraDesc", icon: Lightbulb },
  { nameKey: "agentOrionName", descriptionKey: "agentOrionDesc", icon: BrainCircuit },
  { nameKey: "agentVelaName", descriptionKey: "agentVelaDesc", icon: Zap },
  { nameKey: "agentDracoName", descriptionKey: "agentDracoDesc", icon: Aperture },
  { nameKey: "agentPavoName", descriptionKey: "agentPavoDesc", icon: Bot },
  { nameKey: "agentIndusName", descriptionKey: "agentIndusDesc", icon: Puzzle },
];

export default function UpcomingAgentsSection() {
  const { t } = useLanguage();
  return (
    <section id="upcoming-agents" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {t('upcomingAgentsTitle')} <span className="text-primary">{t('upcomingAgentsTitleHighlight')}</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
            {t('upcomingAgentsSubtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {upcomingAgentsData.map((agent) => (
            <AgentCard
              key={agent.nameKey}
              name={t(agent.nameKey)}
              description={t(agent.descriptionKey)}
              icon={agent.icon}
              isPlaceholder={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

    