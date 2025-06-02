
export type Locale = 'pt' | 'en';

export type TranslationKey =
  | 'appName'
  | 'navbarRequestDemo'
  | 'heroTitle1'
  | 'heroTitle2'
  | 'heroSubtitle'
  | 'heroWhatsAppButton'
  | 'heroWhatsAppLink' // Keep this if the number/message varies by lang
  | 'heroLearnMoreButton'
  | 'heroVideoTitle'
  | 'balderSectionTitle'
  | 'balderSectionTitleHighlight'
  | 'balderSectionSubtitle'
  | 'balderCapabilityContinuousLearningTitle'
  | 'balderCapabilityContinuousLearningDesc'
  | 'balderCapabilityFlexibleCustomizationTitle'
  | 'balderCapabilityFlexibleCustomizationDesc'
  | 'balderCapabilityTutorAgentTitle'
  | 'balderCapabilityTutorAgentDesc'
  | 'balderCapabilitySentimentAnalysisTitle'
  | 'balderCapabilitySentimentAnalysisDesc'
  | 'balderCapabilityReportsDashboardTitle'
  | 'balderCapabilityReportsDashboardDesc'
  | 'balderImageAlt'
  | 'upcomingAgentsTitle'
  | 'upcomingAgentsTitleHighlight'
  | 'upcomingAgentsSubtitle'
  | 'agentCardComingSoon'
  | 'agentCygnusName'
  | 'agentCygnusDesc'
  | 'agentLyraName'
  | 'agentLyraDesc'
  | 'agentOrionName'
  | 'agentOrionDesc'
  | 'agentVelaName'
  | 'agentVelaDesc'
  | 'agentDracoName'
  | 'agentDracoDesc'
  | 'agentPavoName'
  | 'agentPavoDesc'
  | 'agentIndusName'
  | 'agentIndusDesc'
  | 'contactCtaTitle'
  | 'contactCtaTitleHighlight'
  | 'contactCtaSubtitle'
  | 'contactRequestDemoButton'
  | 'contactDemoEmailLink'
  | 'contactDemoEmailSubject'
  | 'contactSalesPitch'
  | 'contactSalesEmailLink'
  | 'footerCopyright'
  | 'footerPrivacyPolicy'
  | 'footerTermsOfService'
  | 'langSwitchToEnglish'
  | 'langSwitchToPortuguese';

export const translations: Record<Locale, Record<TranslationKey, string>> = {
  pt: {
    appName: 'Akalli',
    navbarRequestDemo: 'Solicitar Demo',
    heroTitle1: 'Akalli: Pioneirando Agentes de IA',
    heroTitle2: 'para Transformar o Engajamento do Cliente',
    heroSubtitle: 'Nossa visão é capacitar negócios com automação inteligente que não apenas resolve problemas, mas também impulsiona o crescimento e redefine as experiências do cliente.',
    heroWhatsAppButton: 'Converse com Balder no WhatsApp',
    heroWhatsAppLink: '55119XXXXXXXX', // Manter apenas o número aqui
    heroLearnMoreButton: 'Saiba Mais',
    heroVideoTitle: 'Vídeo Introdutório Akalli Agents',
    balderSectionTitle: 'Conheça',
    balderSectionTitleHighlight: 'Balder',
    balderSectionSubtitle: 'Balder, nosso principal agente de IA, automatiza o atendimento e suporte ao cliente com precisão incomparável. Ele lida com consultas, fecha vendas e faz ofertas personalizadas entendendo texto, áudio e imagens. Balder responde de forma inteligente, inclusive por voz quando recebe uma entrada de áudio, adaptando-se dinamicamente à interação.',
    balderCapabilityContinuousLearningTitle: 'Aprendizado Contínuo',
    balderCapabilityContinuousLearningDesc: 'Aprendizado constante com interações de clientes e dados da sua base.',
    balderCapabilityFlexibleCustomizationTitle: 'Customização Flexível',
    balderCapabilityFlexibleCustomizationDesc: 'Respostas personalizadas e gerenciáveis através de planilhas Google Sheets.',
    balderCapabilityTutorAgentTitle: 'Agente Tutor Inteligente',
    balderCapabilityTutorAgentDesc: 'Um tutor integrado que ensina a usar a ferramenta e aplicar as melhores práticas do mercado.',
    balderCapabilitySentimentAnalysisTitle: 'Análise de Sentimento em Tempo Real',
    balderCapabilitySentimentAnalysisDesc: 'Identifique o sentimento do cliente durante a conversa para um atendimento mais eficaz.',
    balderCapabilityReportsDashboardTitle: 'Relatórios e Dashboards Interativos',
    balderCapabilityReportsDashboardDesc: 'Obtenha insights valiosos sobre o comportamento dos clientes com gráficos e dashboards.',
    balderImageAlt: 'Ilustração do Agente de IA Balder',
    upcomingAgentsTitle: 'O Futuro da IA está se',
    upcomingAgentsTitleHighlight: 'Expandindo',
    upcomingAgentsSubtitle: 'A Akalli está continuamente inovando. Prepare-se para uma suíte de novos agentes de IA especializados, projetados para enfrentar diversos desafios de negócios. Fique ligado para mais soluções inteligentes.',
    agentCardComingSoon: 'Em Breve',
    agentCygnusName: 'Agente Cygnus',
    agentCygnusDesc: 'Especializado em análise de dados complexos e insights preditivos.',
    agentLyraName: 'Agente Lyra',
    agentLyraDesc: 'Focado na geração de conteúdo criativo e ideação.',
    agentOrionName: 'Agente Orion',
    agentOrionDesc: 'Capacidades avançadas de resolução de problemas e planejamento estratégico.',
    agentVelaName: 'Agente Vela',
    agentVelaDesc: 'Automação de tarefas de alta velocidade e otimização de processos.',
    agentDracoName: 'Agente Draco',
    agentDracoDesc: 'Dedicado à segurança e detecção de ameaças.',
    agentPavoName: 'Agente Pavo',
    agentPavoDesc: 'Expert em caminhos de aprendizado e desenvolvimento personalizados.',
    agentIndusName: 'Agente Indus',
    agentIndusDesc: 'Facilita a pesquisa e descoberta de conhecimento.',
    contactCtaTitle: 'Pronto para Elevar sua',
    contactCtaTitleHighlight: 'Experiência do Cliente?',
    contactCtaSubtitle: 'Descubra como os agentes de IA da Akalli podem revolucionar suas operações de negócios, aumentar a satisfação do cliente e impulsionar o crescimento.',
    contactRequestDemoButton: 'Solicite uma Demo Personalizada',
    contactDemoEmailLink: 'demo@akalli.com',
    contactDemoEmailSubject: 'Solicitação de Demo dos Agentes Akalli',
    contactSalesPitch: 'Ou, contate nossa equipe de vendas diretamente em',
    contactSalesEmailLink: 'sales@akalli.com',
    footerCopyright: 'Akalli. Todos os direitos reservados.',
    footerPrivacyPolicy: 'Política de Privacidade',
    footerTermsOfService: 'Termos de Serviço',
    langSwitchToEnglish: 'EN',
    langSwitchToPortuguese: 'PT',
  },
  en: {
    appName: 'Akalli',
    navbarRequestDemo: 'Request Demo',
    heroTitle1: 'Akalli: Pioneering AI Agents',
    heroTitle2: 'to Transform Customer Engagement',
    heroSubtitle: 'Our vision is to empower businesses with intelligent automation that not only solves problems but also drives growth and redefines customer experiences.',
    heroWhatsAppButton: 'Chat with Balder on WhatsApp',
    heroWhatsAppLink: '55119XXXXXXXX', // Keep this consistent or provide an international number if different
    heroLearnMoreButton: 'Learn More',
    heroVideoTitle: 'Akalli Agents Introductory Video',
    balderSectionTitle: 'Meet',
    balderSectionTitleHighlight: 'Balder',
    balderSectionSubtitle: "Balder, our flagship AI agent, automates customer service and support with unparalleled precision. It handles queries, closes sales, and makes personalized offers by understanding text, audio, and images. Balder responds intelligently, including via audio when it receives an audio input, dynamically adapting to the interaction.",
    balderCapabilityContinuousLearningTitle: 'Continuous Learning',
    balderCapabilityContinuousLearningDesc: 'Constant learning from customer interactions and your database.',
    balderCapabilityFlexibleCustomizationTitle: 'Flexible Customization',
    balderCapabilityFlexibleCustomizationDesc: 'Customizable and manageable responses via Google Sheets.',
    balderCapabilityTutorAgentTitle: 'Intelligent Tutor Agent',
    balderCapabilityTutorAgentDesc: 'An integrated tutor that teaches how to use the tool and apply market best practices.',
    balderCapabilitySentimentAnalysisTitle: 'Real-time Sentiment Analysis',
    balderCapabilitySentimentAnalysisDesc: 'Identify customer sentiment during conversation for more effective service.',
    balderCapabilityReportsDashboardTitle: 'Interactive Reports & Dashboards',
    balderCapabilityReportsDashboardDesc: 'Gain valuable insights into customer behavior with charts and dashboards.',
    balderImageAlt: 'AI Agent Balder Illustration',
    upcomingAgentsTitle: 'The Future of AI is',
    upcomingAgentsTitleHighlight: 'Expanding',
    upcomingAgentsSubtitle: 'Akalli is continuously innovating. Get ready for a suite of new specialized AI agents designed to tackle diverse business challenges. Stay tuned for more intelligent solutions.',
    agentCardComingSoon: 'Coming Soon',
    agentCygnusName: 'Agent Cygnus',
    agentCygnusDesc: 'Specialized in complex data analysis and predictive insights.',
    agentLyraName: 'Agent Lyra',
    agentLyraDesc: 'Focuses on creative content generation and ideation.',
    agentOrionName: 'Agent Orion',
    agentOrionDesc: 'Advanced problem-solving and strategic planning capabilities.',
    agentVelaName: 'Agent Vela',
    agentVelaDesc: 'High-speed task automation and process optimization.',
    agentDracoName: 'Agent Draco',
    agentDracoDesc: 'Dedicated to security and threat detection.',
    agentPavoName: 'Agent Pavo',
    agentPavoDesc: 'Expert in personalized learning and development paths.',
    agentIndusName: 'Agent Indus',
    agentIndusDesc: 'Facilitates research and knowledge discovery.',
    contactCtaTitle: 'Ready to Elevate Your',
    contactCtaTitleHighlight: 'Customer Experience?',
    contactCtaSubtitle: 'Discover how Akalli\'s AI agents can revolutionize your business operations, enhance customer satisfaction, and drive growth.',
    contactRequestDemoButton: 'Request a Personalized Demo',
    contactDemoEmailLink: 'demo@akalli.com',
    contactDemoEmailSubject: 'Request for Akalli Agents Demo',
    contactSalesPitch: 'Or, contact our sales team directly at',
    contactSalesEmailLink: 'sales@akalli.com',
    footerCopyright: 'Akalli. All rights reserved.',
    footerPrivacyPolicy: 'Privacy Policy',
    footerTermsOfService: 'Terms of Service',
    langSwitchToEnglish: 'EN',
    langSwitchToPortuguese: 'PT',
  },
};

    