
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

interface AgentCardProps {
  name: string;
  description: string;
  icon?: LucideIcon; // Or React.ElementType if using different icon types
  imageUrl?: string;
  isPlaceholder?: boolean;
  aiHint?: string;
}

export default function AgentCard({ name, description, icon: Icon, imageUrl, isPlaceholder = false, aiHint }: AgentCardProps) {
  const { t } = useLanguage();
  return (
    <Card className={`h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 ${isPlaceholder ? 'bg-muted/60 border-dashed' : 'bg-card'}`}>
      {imageUrl && !isPlaceholder && (
        <div className="relative w-full h-48">
          <Image 
            src={imageUrl} 
            alt={name} 
            fill // layout="fill" is deprecated, use fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Basic example, adjust as needed
            style={{ objectFit: 'cover' }} // Replaces objectFit prop
            className="rounded-t-lg"
            data-ai-hint={aiHint || "technology abstract"}
          />
        </div>
      )}
      <CardHeader className="pt-6">
        <div className="flex items-center space-x-3 mb-2">
          {Icon && (
            <div className={`p-2 rounded-md ${isPlaceholder ? 'bg-foreground/10 text-muted-foreground' : 'bg-primary/10 text-primary'}`}>
              <Icon className="h-6 w-6" />
            </div>
          )}
          <CardTitle className={`font-headline text-2xl ${isPlaceholder ? 'text-muted-foreground' : ''}`}>{name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className={`${isPlaceholder ? 'text-muted-foreground/80' : 'text-foreground/70'}`}>
          {description}
        </CardDescription>
      </CardContent>
      {isPlaceholder && (
         <CardContent>
            <div className="text-center py-4">
              <p className="text-sm font-medium text-primary">{t('agentCardComingSoon')}</p>
            </div>
         </CardContent>
      )}
    </Card>
  );
}


    