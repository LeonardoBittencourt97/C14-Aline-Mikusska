export interface OfficeInfo {
  name: string;
  shortName: string;
  lawyer: string;
  role: string;
  tagline: string;
  slogan: string;
  experienceYears: string;
  phone: string;
  whatsapp: string;
  whatsappNumber: string;
  whatsappFormatted: string;
  whatsappUrl: string;
  instagramUrl: string;
  instagramHandle: string;
  linkedinUrl: string;
  address: string;
  addressShort: string;
  city: string;
  state: string;
  schedule: {
    weekdays: string;
    tuesday: string;
    friday: string;
    weekend: string;
  };
}

export const OFFICE_INFO: OfficeInfo = {
  name: "Aline Pacheco Mikusska - Advocacia e Consultoria Jurídica",
  shortName: "Aline Mikusska Advocacia",
  lawyer: "Dra. Aline Pacheco Mikusska",
  role: "Advogada Fundadora & Consultora Jurídica",
  tagline: "Defesa jurídica estratégica, ágil e acolhedora para proteger o que realmente importa.",
  slogan: "Acolhimento na escuta, precisão técnica na estratégia e firmeza na defesa dos seus direitos.",
  experienceYears: "mais de 9 anos",
  phone: "(41) 98494-0372",
  whatsapp: "5541984940372",
  whatsappNumber: "5541984940372",
  whatsappFormatted: "(41) 98494-0372",
  whatsappUrl:
    "https://wa.me/5541984940372?text=Ol%C3%A1%2C%20Dra.%20Aline%20Mikusska!%20Vim%20pelo%20site%20e%20gostaria%20de%20uma%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica.",
  instagramUrl: "https://www.instagram.com/alinepachecomikusska/",
  instagramHandle: "@alinepachecomikusska",
  linkedinUrl: "https://www.linkedin.com/in/aline-pacheco-mikusska-357a77116",
  address: "R. José de Oliveira Franco, 708 - Bairro Alto, Curitiba - PR, 82820-110",
  addressShort: "Bairro Alto, Curitiba - PR",
  city: "Curitiba",
  state: "PR",
  schedule: {
    weekdays: "Seg, Qua e Qui: 09:00 às 12:00 | 13:30 às 18:00",
    tuesday: "Terça-feira: 09:00 às 12:00",
    friday: "Sexta-feira: 09:00 às 12:00 | 13:30 às 18:00",
    weekend: "Sábados e Domingos: Fechado (Plantão sob agendamento)",
  },
};

export interface LawyerProfile {
  name: string;
  role: string;
  graduation: string;
  experience: string;
  bio: string[];
  careerHighlights: string[];
  personalNotes: string[];
  differentials: string[];
}

export const LAWYER_PROFILE: LawyerProfile = {
  name: "Dra. Aline Pacheco Mikusska",
  role: "Advogada e Consultora Jurídica",
  graduation: "Bacharel em Direito pela Universidade Estácio de Sá (2010 – 2015)",
  experience: "Mais de 9 anos de prática jurídica consolidada",
  bio: [
    "Dra. Aline Pacheco Mikusska descobriu sua vocação para o Direito ainda na infância, sonhando em ser advogada desde os 7 anos de idade. Graduou-se pela Universidade Estácio de Sá e construiu uma carreira sólida e multifacetada, unindo rigor normativo a um atendimento genuinamente humanizado.",
    "Atuou por anos em grandes estruturas corporativas e escritórios de destaque, incluindo a Rumo ALL no contencioso trabalhista de grande volume, e como advogada associada na banca Vanzin & Penteado Advogados, com forte atuação em contencioso civil, bancário e de telecomunicações.",
    "Em 2020, fundou seu escritório próprio no Bairro Alto, em Curitiba/PR, oferecendo um espaço acolhedor de escuta ativa e soluções jurídicas estratégicas nas áreas de Direito de Família, Cível, Criminal e Previdenciário.",
  ],
  careerHighlights: [
    "Mais de 9 anos de prática jurídica contínua e estratégica.",
    "Fundadora do escritório próprio no Bairro Alto (Curitiba/PR) desde 2020.",
    "Ampla bagagem no contencioso cível, bancário, regulatório e familiar.",
    "Atuação consolidada como correspondente jurídica para comarcas do PR e outros estados.",
  ],
  personalNotes: [
    "Mãe amorosa da Manu e do Miguel e casada com o Fábio.",
    "Sonhava em ser advogada desde os 7 anos de idade, vivendo hoje sua verdadeira paixão profissional.",
    "Apaixonada por cozinhar, viajar e colecionar momentos especiais junto à sua família.",
  ],
  differentials: [
    "Acolhimento Antes de Tudo: escuta ativa em ambiente seguro e empático.",
    "Resoluções Pacíficas e Práticas: busca por acordos inteligentes e céleres antes do litígio desgastante.",
    "Atendimento Direto com a Titular: sem intermediários ou estagiários na condução técnica.",
    "Transparência Ética e Rigor Técnico: conformidade com o Provimento 205/2021 da OAB.",
  ],
};

export interface PracticeArea {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  featured: boolean;
  highlightText: string;
  coverageList: string[];
  casesSummary: string;
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "familia",
    title: "Direito de Família & Sucessões",
    shortDesc:
      "Proteção sensível e estratégica para você e seus filhos nos momentos mais delicados da vida familiar.",
    iconName: "HeartHandshake",
    featured: true,
    highlightText: "Soluções consensuais e humanizadas para preservar o equilíbrio emocional e o patrimônio.",
    coverageList: [
      "Divórcio Consensual em Cartório e Divórcio Litigioso",
      "Fixação, Revisão e Execução de Pensão Alimentícia",
      "Guarda Compartilhada e Regulamentação de Convivência/Visitas",
      "Partilha de Bens e Dissolução de União Estável",
      "Inventário Judicial, Extrajudicial em Cartório e Testamentos",
      "Reconhecimento de Paternidade e Investigação de Vínculo Genético",
      "Medidas Protetivas de Urgência no âmbito familiar",
    ],
    casesSummary:
      "Atuamos com escuta atenta e mediação preventiva para proteger o bem-estar psicológico dos filhos e resguardar os direitos patrimoniais do casal de forma rápida e justa.",
  },
  {
    id: "civel",
    title: "Direito Cível & Contratos",
    shortDesc:
      "Defesa patrimonial sólida em contratos, litígios imobiliários, indenizações e relações obrigacionais.",
    iconName: "Scale",
    featured: true,
    highlightText: "Segurança jurídica para proteger seu patrimônio, reparar prejuízos e resolver pendências cotidianas.",
    coverageList: [
      "Ações de Indenização por Danos Morais e Materiais",
      "Cobrança e Execução de Títulos Judiciais e Extrajudiciais",
      "Elaboração, Revisão e Rescisão de Contratos Civis",
      "Direito Imobiliário: Usucapião, Ações Possessórias e Despejo",
      "Defesa do Consumidor: Inscrição Indevida em SPC/Serasa e Golpes Bancários",
      "Revisão de Juros Abusivos em Financiamentos e Empréstimos",
      "Interdição e Curatela de Idosos ou Pessoas Incapazes",
    ],
    casesSummary:
      "Estruturamos estratégias preventivas e contenciosas para resguardar contratos e buscar ressarcimento célere contra abusos e inadimplementos.",
  },
  {
    id: "criminal",
    title: "Direito Criminal & Defesa Penal",
    shortDesc:
      "Atuação técnica combativa e imediata para garantir a liberdade, a ampla defesa e o devido processo legal.",
    iconName: "ShieldAlert",
    featured: true,
    highlightText: "Garantia inegociável dos direitos fundamentais em delegacias, audiências e fóruns criminais.",
    coverageList: [
      "Acompanhamento em Flagrante e Delegacias de Polícia",
      "Audiência de Custódia e Pedidos de Liberdade Provisória",
      "Revogação e Relaxamento de Prisão Preventiva",
      "Defesa Técnica em Ações Penais e Inquéritos Policiais",
      "Defesa e Medidas em Casos de Violência Doméstica (Lei Maria da Penha)",
      "Crimes de Trânsito, Crimes Contra a Honra (Calúnia/Difamação) e Virtuais",
      "Execução Penal: Progressão de Regime, Livramento e Remição",
    ],
    casesSummary:
      "Atuação rápida, combativa e discreta desde a fase inquisitorial até as instâncias recursais, zelando pela presunção de inocência e integridade do assistido.",
  },
  {
    id: "previdenciario",
    title: "Direito Previdenciário & INSS",
    shortDesc:
      "Conquista e restabelecimento de aposentadorias, auxílios e benefícios assistenciais com rigor nos cálculos.",
    iconName: "Award",
    featured: true,
    highlightText: "Planejamento e combate judicial à burocracia e negativas arbitrárias do INSS.",
    coverageList: [
      "Concessão e Restabelecimento de Auxílio-Doença (Incapacidade Temporária)",
      "Conversão de Auxílio em Aposentadoria por Invalidez Permanente",
      "Concessão de Benefício Assistencial BPC/LOAS (Idoso e PCD)",
      "Aposentadoria por Idade Urbana, Rural e Híbrida",
      "Planejamento Previdenciário Consultivo pós-Reforma",
      "Pensão por Morte e Salário-Maternidade",
      "Acerto de CNIS e Averbação de Tempo de Contribuição Rural/Especial",
    ],
    casesSummary:
      "Ingressamos com ações na Justiça Federal com perícias médicas imparciais, revertendo indeferimentos ilegais e garantindo a subsistência digna do segurado.",
  },
];

export interface Review {
  author: string;
  rating: number;
  timeAgo: string;
  text: string;
  source: string;
  details?: string;
}

export const REVIEWS: Review[] = [
  {
    author: "Geovani Cardoso",
    rating: 5,
    timeAgo: "4 anos atrás",
    text: "Ótima profissional, resolveu meu problema com competência, dedicação e profissionalismo!",
    source: "Google Reviews",
    details: "11 avaliações • 5 fotos",
  },
  {
    author: "Simone Valeria",
    rating: 5,
    timeAgo: "3 anos atrás",
    text: "Ótima profissional dedicada que resolveu meu problema!",
    source: "Google Reviews",
    details: "1 avaliação",
  },
  {
    author: "Julia Maria",
    rating: 5,
    timeAgo: "1 ano atrás",
    text: "Ótima profissional, atendimento acolhedor e muito ágil.",
    source: "Google Reviews",
    details: "1 avaliação",
  },
  {
    author: "Laura Cardoso",
    rating: 5,
    timeAgo: "4 anos atrás",
    text: "Excelente advogada! Me ajudou a resolver um grande problema!",
    source: "Google Reviews",
    details: "1 avaliação",
  },
  {
    author: "Zabot Ginecologia",
    rating: 5,
    timeAgo: "4 anos atrás",
    text: "Melhor advogada! Excelente atendimento e profissionalismo.",
    source: "Google Reviews",
    details: "2 avaliações",
  },
  {
    author: "VS3 Multimarcas",
    rating: 5,
    timeAgo: "3 anos atrás",
    text: "Melhor profissional da região, super recomendo os serviços.",
    source: "Google Reviews",
    details: "4 avaliações",
  },
  {
    author: "Charles Prestes",
    rating: 5,
    timeAgo: "3 anos atrás",
    text: "Atendimento muito bom, atenciosa e esclareceu todas as dúvidas.",
    source: "Google Reviews",
    details: "Local Guide • 165 avaliações",
  },
  {
    author: "Kauane Almeida",
    rating: 5,
    timeAgo: "4 anos atrás",
    text: "Atendimento nota mil! Profissional competente, atenciosa e muito humana.",
    source: "Google Reviews",
    details: "1 avaliação",
  },
  {
    author: "Gleicy Alves",
    rating: 5,
    timeAgo: "4 anos atrás",
    text: "Profissional extremamente comprometida com o cliente, sempre esclarecendo tudo de forma clara.",
    source: "Google Reviews",
    details: "4 avaliações",
  },
  {
    author: "Fabio Mikusska",
    rating: 5,
    timeAgo: "4 anos atrás",
    text: "Ética, dedicação exemplar e muita competência técnica em cada etapa.",
    source: "Google Reviews",
    details: "6 avaliações • 1 foto",
  },
];

export interface EducationalArticle {
  id: string;
  number: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  content: string[];
  oabDisclaimer: string;
}

export const ARTICLES: EducationalArticle[] = [
  {
    id: "artigo-divorcio-guarda",
    number: "01",
    title: "Divórcio e Guarda Compartilhada: Como Harmonizar os Direitos dos Filhos e a Partilha",
    category: "Direito de Família",
    readTime: "3 min de leitura",
    summary:
      "Entenda como a legislação brasileira equilibra a rotina de convivência dos filhos e a divisão patrimonial sem traumas desnecessários.",
    content: [
      "A dissolução conjugal é um momento de profunda reorganização pessoal e financeira. A lei estabelece a guarda compartilhada como padrão prioritário, assegurando que ambos os pais participem ativamente das decisões da vida dos filhos, com residência fixa garantida para manter a estabilidade emocional da criança.",
      "Quando há consenso entre as partes e não há filhos menores ou incapazes, o divórcio pode ser lavrado em cartório por escritura pública em poucos dias, com extrema celeridade e custos reduzidos.",
      "Nos casos litigiosos, a atuação de uma advogada focada em mediação minimiza o desgaste psicológico das partes, preservando os laços afetivos e assegurando uma partilha patrimonial equilibrada segundo o regime de bens.",
    ],
    oabDisclaimer:
      "Conteúdo puramente educativo com finalidade de esclarecimento público, em estrita observância ao Provimento 205/2021 da OAB.",
  },
  {
    id: "artigo-audiencia-custodia",
    number: "02",
    title: "Prisão em Flagrante e Audiência de Custódia: O Papel da Defesa Técnica Imediata",
    category: "Direito Criminal",
    readTime: "4 min de leitura",
    summary:
      "Conheça os prazos legais, os direitos do cidadão preso e como a assistência jurídica nas primeiras 24 horas é vital para a liberdade provisória.",
    content: [
      "Após a formalização de uma prisão em flagrante, a lei processual penal determina que a pessoa presa seja apresentada perante um juiz de direito no prazo improrrogável de até 24 horas, na chamada Audiência de Custódia.",
      "Nessa oportunidade, a presença da advogada criminalista é indispensável para verificar a legalidade do ato, analisar se houve abuso ou coação física e demonstrar requisitos para que o autuado responda ao processo em liberdade.",
      "A assistência técnica célere evita que prisões desnecessárias se prolonguem, pleiteando medidas cautelares diversas do cárcere sempre que admitidas pelo ordenamento.",
    ],
    oabDisclaimer:
      "Artigo informativo e de interesse social, elaborado nos termos do Provimento 205/2021 do Conselho Federal da OAB.",
  },
  {
    id: "artigo-auxilio-doenca-negado",
    number: "03",
    title: "Benefício Negado pelo INSS: Como Reverter a Decisão na Justiça Federal",
    category: "Direito Previdenciário",
    readTime: "3 min de leitura",
    summary:
      "A perícia administrativa do INSS indeferiu seu pedido? Saiba como a perícia médica judicial assegura imparcialidade e justiça.",
    content: [
      "O indeferimento de auxílio-doença ou aposentadoria por incapacidade temporária pelo INSS é recorrente e muitas vezes fundamentado em avaliações periciais breves e genéricas.",
      "O segurado que se encontra incapacitado não é obrigado a aceitar o laudo negativo administrativo. Pela via judicial perante a Justiça Federal, a perícia médica é realizada por um especialista independente nomeado pelo juiz.",
      "Com a apresentação adequada de laudos, exames clínicos e prontuários atualizados, o benefício pode ser concedido com pagamento retroativo de todos os valores devidos desde a data do primeiro requerimento.",
    ],
    oabDisclaimer:
      "Material didático elaborado em conformidade com as diretrizes do Provimento 205/2021 do Conselho Federal da OAB.",
  },
  {
    id: "artigo-negativacao-indevida",
    number: "04",
    title: "Nome Negativado por Erro ou Fraude: Dano Moral Presumido e Exclusão Imediata",
    category: "Direito Cível & Consumidor",
    readTime: "3 min de leitura",
    summary:
      "Descubra seus direitos quando empresas ou bancos incluem indevidamente seu CPF em cadastros de restrição ao crédito (SPC/Serasa).",
    content: [
      "A inclusão indevida do nome do cidadão nos cadastros de inadimplentes impede o acesso a financiamentos, locação de imóveis e compras a prazo, causando constrangimento e prejuízo imediato.",
      "O Superior Tribunal de Justiça (STJ) pacificou o entendimento de que a negativação indevida gera dano moral presumido ('in re ipsa'), não sendo necessário provar o sofrimento subjetivo em juízo.",
      "Por meio de pedido de tutela provisória de urgência (liminar), a advogada pode solicitar a exclusão do nome dos cadastros restritivos no prazo de 48 a 72 horas, cumulada com indenização financeira proporcional aos danos suportados.",
    ],
    oabDisclaimer:
      "Conteúdo com finalidade estritamente pedagógica e informativa, em cumprimento às regras da OAB.",
  },
  {
    id: "artigo-planejamento-previdenciario",
    number: "05",
    title: "Planejamento Previdenciário: Como Garantir o Melhor Valor de Aposentadoria",
    category: "Direito Previdenciário",
    readTime: "4 min de leitura",
    summary:
      "Após a Reforma da Previdência, simulações prévias e correções no CNIS evitam que o trabalhador perca expressivos valores mensais.",
    content: [
      "A Emenda Constitucional 103/2019 instituiu múltiplas regras de transição com fórmulas distintas de cálculo e aplicação de redutores sobre o salário de benefício.",
      "Muitos trabalhadores solicitam a aposentadoria no primeiro momento possível, desconhecendo que aguardar poucos meses ou optar por outra regra de transição pode resultar em benefício dezenas de pontos percentuais maior.",
      "O planejamento previdenciário analisa todo o histórico contributivo, corrige pendências do extrato CNIS, valida períodos rurais ou especiais e mapeia a data exata e mais rentável para o pedido.",
    ],
    oabDisclaimer:
      "Texto puramente informativo com finalidade de esclarecimento público, em cumprimento ao Provimento 205/2021 da OAB.",
  },
];

export const EDUCATIONAL_TOPICS = ARTICLES;

export interface Step {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export const WORK_PROCESS_STEPS: Step[] = [
  {
    number: "01",
    title: "Escuta Ativa & Acolhimento",
    subtitle: "Ambiente seguro e atendimento direto com a titular",
    description:
      "Você expõe suas dores e objetivos diretamente à Dra. Aline. Aqui não há julgamentos: analisamos seu caso com empatia, sensibilidade e total sigilo profissional.",
  },
  {
    number: "02",
    title: "Diagnóstico Jurídico & Estratégia",
    subtitle: "Rigor técnico e clareza de caminhos",
    description:
      "Avaliamos documentos, contratos e precedentes judiciais com base em mais de 9 anos de prática, apresentando os riscos e as alternativas mais econômicas e seguras.",
  },
  {
    number: "03",
    title: "Soluções Pacíficas ou Ação Judicial",
    subtitle: "Celeridade e firmeza na busca do resultado",
    description:
      "Priorizamos a resolução pacífica e rápida por vias consensuais. Quando o litígio é inevitável, atuamos com postura combativa e diligente perante o Judiciário.",
  },
  {
    number: "04",
    title: "Comunicação Contínua & Transparência",
    subtitle: "Informações claras em cada etapa processual",
    description:
      "Você recebe atualizações constantes em linguagem clara, sabendo exatamente o status do seu processo sem juridiquês ou surpresas.",
  },
];

export const WORK_STEPS = WORK_PROCESS_STEPS;

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: string;
  label: string;
  iconName: string;
  items: FaqItem[];
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "familia",
    label: "Direito de Família",
    iconName: "HeartHandshake",
    items: [
      {
        id: "faq-fam-1",
        question: "Como funciona a guarda compartilhada na prática?",
        answer:
          "A guarda compartilhada não significa que a criança fique alternando de residência toda semana. Ela fixa uma residência de referência para o filho (onde dorme e estuda), garantindo que pai e mãe tenham igual poder de decisão sobre escola, saúde e lazer, mantendo a rotina e estabilidade emocional do menor.",
      },
      {
        id: "faq-fam-2",
        question: "Existe porcentagem fixa de 30% para a pensão alimentícia?",
        answer:
          "Não. A legislação brasileira não prevê uma porcentagem fixa de 30%. O valor da pensão é fixado pelo juiz com base no binômio necessidade (gastos reais da criança) e possibilidade (capacidade financeira de quem paga), respeitando a proporcionalidade entre pai e mãe.",
      },
      {
        id: "faq-fam-3",
        question: "Quando o divórcio pode ser feito rapidamente em cartório?",
        answer:
          "O divórcio extrajudicial em cartório pode ser formalizado em poucos dias se houver consenso sobre a partilha de bens e não houver filhos menores ou incapazes, sendo obrigatória a assistência de advogada para redigir a escritura pública.",
      },
      {
        id: "faq-fam-4",
        question: "Quem sai de casa perde os direitos sobre os bens do casal?",
        answer:
          "Não. Sair temporariamente do imóvel para cessar conflitos não retira o direito à partilha dos bens adquiridos na constância do casamento ou da união estável. A meação patrimonial é resguardada pela lei.",
      },
    ],
  },
  {
    id: "civel",
    label: "Direito Cível",
    iconName: "Scale",
    items: [
      {
        id: "faq-civ-1",
        question: "Meu nome foi negativado indevidamente no SPC/Serasa. O que posso fazer?",
        answer:
          "Se a dívida não existe ou já foi quitada, trata-se de ato ilícito que gera dano moral presumido. É possível ingressar com ação requerendo a retirada do nome do cadastro restritivo em até 48 horas (liminar) e indenização financeira pelos transtornos causados.",
      },
      {
        id: "faq-civ-2",
        question: "Moro em um imóvel há anos sem escritura. Posso pedir usucapião?",
        answer:
          "Sim. Havendo posse mansa, pacífica, contínua e sem oposição pelo prazo legal (que varia de 5 a 15 anos a depender do caso), é possível obter o reconhecimento da propriedade via usucapião judicial ou extrajudicial em cartório.",
      },
      {
        id: "faq-civ-3",
        question: "Como funciona a execução de contratos e cobrança de dívidas?",
        answer:
          "Títulos executivos como contratos assinados por duas testemunhas, notas promissórias e cheques permitem a execução direta na Justiça, com intimação para pagamento em apenas 3 dias sob pena de penhora de bens e bloqueio de valores.",
      },
    ],
  },
  {
    id: "criminal",
    label: "Direito Criminal",
    iconName: "ShieldAlert",
    items: [
      {
        id: "faq-crim-1",
        question: "O que acontece na Audiência de Custódia após a prisão em flagrante?",
        answer:
          "Em até 24 horas após a prisão, o autuado é apresentado ao juiz, na presença de sua advogada e do Ministério Público. A audiência serve para avaliar se a prisão foi legal, averiguar a integridade física do preso e decidir se ele responderá ao processo em liberdade com ou sem medidas cautelares.",
      },
      {
        id: "faq-crim-2",
        question: "Réu primário sempre responde ao processo em liberdade?",
        answer:
          "A primariedade e os bons antecedentes são fatores muito favoráveis à concessão de liberdade provisória. Contudo, o juiz avalia a presença de requisitos da prisão preventiva (como garantia da ordem pública). A atuação da advogada é essencial para demonstrar que não há perigo na soltura.",
      },
      {
        id: "faq-crim-3",
        question: "Como funciona a assistência jurídica em casos de Lei Maria da Penha?",
        answer:
          "Atuamos com discrição e respeito estrito à lei tanto na solicitação ou revogação de medidas protetivas de urgência quanto no acompanhamento do inquérito e processo penal, buscando sempre a preservação da verdade fática e das garantias constitucionais.",
      },
    ],
  },
  {
    id: "previdenciario",
    label: "Direito Previdenciário",
    iconName: "Award",
    items: [
      {
        id: "faq-prev-1",
        question: "Tive meu auxílio-doença negado pelo INSS. Vale a pena ir para a Justiça?",
        answer:
          "Sim. Na Justiça Federal, a perícia é realizada por médico especialista indicado pelo juiz, muito mais imparcial e detalhada do que a avaliação do posto do INSS. Se comprovada a incapacidade, o benefício é concedido com pagamento de todos os retroativos.",
      },
      {
        id: "faq-prev-2",
        question: "Quem tem direito ao benefício BPC/LOAS?",
        answer:
          "Idosos com 65 anos ou mais e pessoas com deficiência de qualquer idade que comprovem baixa renda familiar e situação de vulnerabilidade, não sendo exigido histórico prévio de contribuições ao INSS.",
      },
      {
        id: "faq-prev-3",
        question: "Por que fazer um Planejamento Previdenciário?",
        answer:
          "A Reforma da Previdência criou regras de transição complexas. Dar entrada na aposentadoria sem simular previamente pode fazer com que o segurado perca centenas ou milhares de reais mensais para o resto da vida. O planejamento indica a data e regra mais vantajosa.",
      },
    ],
  },
  {
    id: "atendimento",
    label: "Atendimento & Honorários",
    iconName: "Compass",
    items: [
      {
        id: "faq-atend-1",
        question: "Como funciona o atendimento no escritório?",
        answer:
          "Atendemos de forma presencial em nossa sede no Bairro Alto, em Curitiba/PR, e também em formato 100% online por videochamada para clientes de todo o Brasil e exterior, sempre com horário previamente agendado.",
      },
      {
        id: "faq-atend-2",
        question: "Como são estipulados os honorários advocatícios?",
        answer:
          "Nossos honorários são fixados em contrato formal e transparente, respeitando a Tabela de Honorários da OAB/PR e os princípios de moderação do Código de Ética, com condições adequadas à complexidade da matéria.",
      },
      {
        id: "faq-atend-3",
        question: "Qual o diferencial do atendimento com a Dra. Aline?",
        answer:
          "Mais de 9 anos de prática jurídica, atendimento pessoal direto com a fundadora, foco obstinado em soluções pacíficas e ágeis e acolhimento humano genuíno em cada consulta.",
      },
    ],
  },
];

export const FAQ_DATA = FAQ_CATEGORIES;