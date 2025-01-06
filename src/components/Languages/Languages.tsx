type LanguageData = {
  Validations: Validations;
  Header: HeaderData;
  Intro: IntroData;
  About: AboutData;
  Localization: LocalizationData;
  Especification: EspecificationData;
  Tecnicals: TecnicalsData;
  Contact: ContactData;
  Idealization: IdealizationData;
  Footer: FooterData;
  ModalTerms: ModalTermsData;
};

type Validations = {
  preenchaCampo: string;
  invalidNumber: string;
  invalidEmail: string;
}

type HeaderData = {
  labelBio: string;
  labelSust: string;
  labelLocal: string;
  labelEspecs: string;
  labelConcept: string;
  labelContact: string;
};

type IntroData = {
  verdadeiro: string;
  ulli1: string;
  ulli2: string;
  ulli3: string;
  ulli4: string;
  btnReceba: string;
  btnbacktotop: string;
};

type LocalizationData = {
  textsectionlocalizacao: string;
  textmap: string;
  textmapleft1: string;
  textmapleft2: string;
  textmapleft3: string;
  textmapbtn: string;
  textwalkscore: string;
  textmapright1: string;
  textmapright2: string;
  textmapright3: string;
  textmapright4: string;
  textmapright5: string;
  textpanoramica: string;
  textmapaddress: string;
  textmapaddress1: string;
  textmapaddress1a: string;
  textmapaddress2: string;
};

type AboutData = {
  textsectionsobre: string;
  textintro: string;
  textbodydireito: string;
  textbodyesquerdo: string;
  textintroselos: string;
  textselogold: string;
  textselofitwel: string;
  textseloloop: string;
  textseloesg: string;
  textselobtnexpand: string;
  textselobtncollapse: string;
  textasteriscosobre1: string;
  textasteriscosobre2: string;
};

type EspecificationData = {
  textsectionespecificacoes: string;
  textespecificacoesbanner: string;
  // Especificações Técnicas
  textlajetitle: string;
  textlajeli1: string;
  textlajeli2: string;
  textlajeli3: string;
  textlajeli4: string;
  textlajeli5: string;
  textlajeli6: string;
  textlajeli7: string;
  textlajebtn: string;
  textlajemiudas: string;
  // Especificações Técnicas
  textrooftoptitle: string;
  textrooftopli1: string;
  textrooftopli2: string;
  textrooftopli3: string;
  // Especificações Técnicas
  textesquematicotitle: string;
  textesquematicoup1: string;
  textesquematicoup2: string;
  textesquematicoup3: string;
  // Especificações Técnicas
  textesquematicoli1: string;
  textesquematicoli2: string;
  textesquematicoli3: string;
  textesquematicoli4: string;
  textesquematicoli5: string;
  textesquematicoli6: string;
  textesquematicoli7: string;
  textesquematicoli8: string;
  // Especificações Técnicas
  textimplantacaotitle: string;
  textimplantacaoli1: string;
  textimplantacaoli2: string;
  textimplantacaoli3: string;
  textimplantacaoli4: string;
  textimplantacaoli5: string;

  // Especificações Técnicas
  textdetalhestitle: string;
  textdetalhesimg1: string;
  textdetalhesimg2: string;
  textdetalhesimg3: string;
  // Especificações Carrosel
  /// Tab Labels
  labelplants: string;
  labelimages: string;
  /// Images
  textimages01: string;
  textimages01footnote: string;
  textimages02: string;
  textimages03: string;
  textimages03a1: string;
  textimages04: string;
  textimages05: string;
  textimages06:  string;
  textimages07:  string;
  textimages08:  string;
  textimages09:  string;
  /// Plants
  textplants01title: string;
  textplants01title2: string;
  textplants01title3: string;
  textplants01description: string;
  textplants02titlesugest: string;
  textplants02title: string;
  textplants02title2: string;
  textplants02title3: string;
  textplants02description: string;
  /// Plants Descriptivos
  local1: string;
  local2: string;
  local3: string;
  local4: string;
  local5: string;
  local6: string;
  local7: string;
  local8: string;
  local9: string;

  desc1: string;
  desc2: string;
  desc3: string;
  desc4: string;
  desc5: string;
  desc6: string;
  desc7: string;
};

type TecnicalsData = {
  textsectiontecnicals: string;
  /// Empreendimento
  textempreendimentotitle: string;
  textempreendimentocontent: string;
  /// Pavimentos
  textpavimentotitle:  string;
  textpavimentocontent:  string;
  /// Fachada
  textfachadatitle:  string;
  textfachadacontent:  string[];
  /// Pédireito
  textpeDireitotitle:  string;
  textpeDireitocontent:  string;
  /// Piso a piso
  textpisotitle:  string;
  textpisocontent:  string;
  /// Lease span
  textleasetitle:  string;
  textleasecontent:  string;
  /// Piso elevado
  textpisoElevadotitle:  string;
  textpisoElevadocontent:  string;
  /// Sobrecarga na laje
  textsobrecargatitle:  string;
  textsobrecargacontent:  string;
  /// Flexibilidade
  textflexibilidadetitle:  string;
  textflexibilidadecontent:  string;
  /// Arquitetura & Interior
  textaquitetura: string;
  /// Paisagismo
  textpaisagismo: string;
  /// Luminotécnica
  textluminotecnica: string;
  textelevadorestitle: string;
  textelevadorescontent: string;
  /// Restrooms
  textrestroomstitle: string;
  textrestroomscontent: string;
  /// Energy
  textenergytitle: string;

  textenergycontent: string;
  /// Lighting
  textlightingtitle: string;
  textlightingcontent: string;
  /// Gas
  textgastitle: string;
  textgascontent: string;
  /// Air conditioning
  textairConditioningtitle: string;
  textairConditioningcontent: string;
  /// Garage
  textgaragetitle: string;

  textgaragecontent: string;
  /// Docks/service access Prote
  textdockstitle: string;
  textdockscontent: string;
  /// Bicycle Parking
  textbycicletitle: string;
  textbyciclecontent: string;
  /// Generators
  textgeneratorstitle: string;
  textgeneratorscontent: string;
  /// Security system
  textsecuritytitle: string;
  textsecuritycontent: string;
  /// BMS Automation
  textbmstitle: string;
  textbmscontent: string;
  /// Control and analysis of ai
  textqualitytitle: string;
  textqualitycontent: string;
  /// Ventilation and exhaust sy
  textventilationtitle: string;
  textventilationcontent: string;
  /// Protection and fire fighti
  textfireFightintitle: string;
  textfireFightincontent: string;
  /// Water reuse
  textwaterReusetitle: string;
  textwaterReusecontent: string;
  /// Sustainability
  textsustainabilitytitle: string;
  textsustainabilitycontent: string;
  /// Construction differentials
  textdifferentialstitle: string;
  textdifferentialscontent: string;
  /// Telecommunication
  texttelecommunicationtitle: string;
  texttelecommunicationcontent: string;
};

type IdealizationData = {
  textsectionidealization: string;
  textesquerdatitle: string;
  textdireitatitle: string;
  textesquerdacontentup: string;
  textesquerdacontentbottom: string;
  textdireitacontentup: string;
  textdireitacontentbottom: string;
};


type ContactData = {
  title: string;
  selectmodal: string;
  label: string;
  canal: string;
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
  textarea: string;
  lgpd1: string;
  lgpd2: string;
  linklgpd: string;
  btn: string;
};

type FooterData = {
  realization: string;
  realizationincorporation: string;
  footerlgpd: string;
};

type ModalTermsData = {
  header: string;
  scope: string;
  scopeText1: string;
  scopeText2: string;
  scopeText2Site: string;
  scopeText3: string;
  scopeText4: string;
  // Personal Data
  personalData: string;
  personalDataText1: string;
  personalDataText2: string;
  personalDataText3: string;
  personalDataText4: string;
  personalDataText5: string;
  personalDataLi1Strong: string;
  personalDataLi1: string;
  personalDataLi2Strong: string;
  personalDataLi2: string;
  personalDataLi3Strong: string;
  personalDataLi3: string;
  personalDataLi4Strong: string;
  personalDataLi4: string;
  personalDataLi5: string;
  personalDataLi5Strong: string;
  personalDataLi6Strong: string;
  personalDataLi6: string;
  personalDataText6: string;
  personalDataText7: string;
  personalDataLi7: string;
  personalDataLi8: string;
  personalDataLi9: string;
  personalDataLi10: string;
  personalDataLi11: string;
  personalDataLi12: string;
  personalDataLi12a1: string;
  personalDataLi12a2: string;
  personalDataLi12a3: string;
  personalDataText8: string;
  personalDataLi13: string;
  personalDataLi14: string;
  personalDataLi15: string;
  personalDataLi16: string;
  personalDataLi17: string;
  personalDataLi17a1: string;
  personalDataLi17a2: string;
  personalDataLi17a3: string;
  personalDataLi18: string;
  personalDataText9: string;
  personalDataLi19: string;
  personalDataLi20: string;
  personalDataLi21: string;
  personalDataLi22: string;
  personalDataLi23: string;
  // Personal Data Use
  personalDataUse: string;
  personalDataUseText1: string;
  personalDataUseText2: string;
  // Data Sharing
  personalDataSharing: string;
  personalDataSharingText1: string;
  personalDataSharingLi1Strong: string;
  personalDataSharingLi1: string;
  personalDataSharingLi2Strong: string;
  personalDataSharingLi2: string;
  // Data Storage Period
  personalDataStorage: string;
  personalDataStorageText1: string;
  personalDataStorageText2: string;
  // Data Usage Cookies
  personalDataUsageCookies: string;
  personalDataUsageCookiesText1: string;
  personalDataUsageCookiesText2: string;
  personalDataUsageCookiesText3: string;
  personalDataUsageCookiesLi1Strong: string;
  personalDataUsageCookiesLi1: string;
  personalDataUsageCookiesLi2Strong: string;
  personalDataUsageCookiesLi2: string;
  personalDataUsageCookiesLi3Strong: string;
  personalDataUsageCookiesLi3: string;
  personalDataUsageCookiesLi4Strong: string;
  personalDataUsageCookiesLi4: string;
  personalDataUsageCookiesText4: string;
  personalDataUsageCookiesText4Strong: string;
  personalDataUsageCookiesText4a2: string;
  // Data Rights
  personalDataRights: string;
  personalDataRightsText1: string;
  personalDataRightsLi1: string;
  personalDataRightsLi2: string;
  personalDataRightsLi3: string;
  personalDataRightsLi4: string;
  personalDataRightsLi5: string;
  personalDataRightsLi6: string;
  personalDataRightsLi7: string;
  personalDataRightsText2: string;
  // Data Updates & Protection
  personalDataUpdate: string;
  personalDataUpdateText1: string;
  personalDataUpdateText2: string;
  // Contact
  personalDataContact: string;
  personalDataContactText1: string;
};


export const dataLanguagesPtEn: LanguageData = {

  Validations:
  {
    preenchaCampo: 'Preencha este campo',
    invalidNumber: 'Número Inválido',
    invalidEmail: 'E-mail Inválido',
  },

  Header:
    // Header
    {
      labelBio: 'Biosquare',
      labelSust: 'Sustentabilidade',
      labelLocal: 'Localização',
      labelEspecs: 'Especificações',
      labelConcept: 'Idealização',
      labelContact: 'Contato',
    },

  Intro:
    // Intro
    {
      verdadeiro: 'UM VERDADEIRO ARRANHA-CÉU NO CORAÇÃO DE PINHEIROS',
      ulli1: '• Lajes corporativas com até 2.600 m²',
      ulli2: '• Edifício corporativo AAA',
      ulli3: '• Vista 360°',
      ulli4: '• 130M de altura com rooftop',
      btnReceba: 'Receba mais informações',
      btnbacktotop: 'Voltar ao topo',
    },

  About:
    {
      //Sobre / About
      textsectionsobre: 'Sobre o Biosquare',
      textintro: 'Um empreendimento único, que consagra a localidade de Pinheiros como a melhor região corporativa de São Paulo.',
      textbodydireito: 'O amanhã se faz a partir de agora. Com novas formas, novos caminhos, cores e sensações, Biosquare São Paulo apresenta o futuro além das janelas. O futuro do trabalho, do network, da convivência, principalmente o futuro da vida urbana. É mais que um projeto, é o pensamento em criar um legado para a cidade. Inspirado pelo que as pessoas desejam, sonham, ambicionam.',
      textbodyesquerdo: 'É tecnológico, é verde, é caminhável. Tem sustentabilidade no core e é centrado no bem-estar. Pensado a partir das pessoas para o todo, conectando o indivíduo ao coletivo e ligando o quarteirão à cidade.',
      //Sobre / About / Selos
      textintroselos: 'O Biosquare foi concebido para estar de acordo com as premissas de um empreendimento sustentável e conectado com as grandes pautas.',
      textselogold: 'Pensado para atender às demandas das empresas mais inovadoras, com a Certificação CS Gold, do programa GREEN BUILDING COUNCIL LEED e sua concepção, o projeto buscará um impacto positivo e sustentável para o entorno do bairro. Da incorporação aos materiais construtivos, tudo converge para um objetivo alinhado com o conceito da neoecologia: gerar menos resíduos, menos impacto, economia de energia e baixo consumo de água, entre outros itens. A fachada é concebida para atingir o melhor conforto energético e visual para os usuários.',
      textselofitwel: 'Investir na saúde dos usuários tem múltiplos benefícios. Em edifícios corporativos mais saudáveis, as pessoas são mais produtivas e satisfeitas, o que resulta em um turn over menor e em um ROI maior. Com essa premissa, a Certificação Fitwel® atesta que a infraestrutura do projeto tem potencial para melhorar a saúde e o bem-estar dos colaboradores. Para garantir essa chancela, o Biosquare São Paulo obteve pontuação em todas as categorias avaliadas.',
      textseloloop: 'O Biosquare foi vencedor do prêmio internacional LOOP Design Awards, contemplado em duas categorias: Peoples’s Choice Award e Category Winner (Office Concept). O LOOP Design Awards é uma premiação anual de Design, que conta com projetos nas áreas de Arquitetura, Interiores, Paisagem, Produto, Fotografia de Arquitetura e Vídeo de Arquitetura. O LOOP já recebeu mais de 1000 inscrições de 55 países diferentes, reconhece trabalhos excepcionais de diversas origens em todo o mundo.',
      textseloesg: 'O ESG representa uma mudança clara e crítica para uma maneira sustentável de pensar. É um conjunto de práticas de compromisso social, empresarial e ambiental. Do ponto de vista do mercado, o cumprimento desse indicador representa a capacidade da empresa de interpretar valores efetivos na sociedade e integrá-los ao negócio.',
      textselobtnexpand: 'Expandir',
      textselobtncollapse: 'Recolher',

      textasteriscosobre1: '* Projeto em processo de certificação LEED.',
      textasteriscosobre2: '* Projeto com Certificação Fitwel®.',
    },

  Localization:
    //Localizacao / Localization
    {
      // Panoramica
      textpanoramica: 'Vista panorâmica para os Jardins. Região mais arborizada de São Paulo.',

      // Localizacao Mapa

      textsectionlocalizacao: 'Localização',
      textmap: 'Passe o mouse na imagem para ver detalhes',

      // Localizacao left

      textmapleft1: 'O melhor projeto de São Paulo só poderia estar em uma rua de Pinheiros com status de Walker’s Paradise*.',
      textmapleft2: 'Rua Capitão Antonio Rosa x Rua dos Pinheiros',
      textmapleft3: 'A poucos passos da Estação Fradique Coutinho e do corredor da Av. Rebouças.',
      textmapbtn: 'Como chegar?',
      textwalkscore: '*O Walk Score mede a capacidade de caminhada de qualquer endereço do mundo. https://www.walkscore.com',

      // Localizacao right

      textmapright1: 'Localização estratégica',
      textmapright2: 'A poucos metros da estação Fradique Coutinho e do corredor da Rebouças',
      textmapright3: 'Área Walker’s Paradise ',
      textmapright4: 'Completa infraestrutura de serviços e restaurantes no entorno',
      textmapright5: 'Polo cultural e gastronômico de São Paulo',

      textmapaddress: 'Rua Capitão Antônio Rosa, 422',
      textmapaddress1: 'Clique na imagem ',
      textmapaddress1a: 'para ver o mapa da região.',
      textmapaddress2: 'Toque na imagem ',
    },

  Especification:
    // Especificações Técnicas
    {
      textsectionespecificacoes: 'Especificações Técnicas',
      textespecificacoesbanner: 'O quarteirão verde que está um passo à frente de tudo o que você conhece.',
      // Especificações Técnicas Laje
      textlajetitle: 'Lajes corporativas com até 2.600 m²*',
      textlajeli1: 'Piso a piso de 4,68m, com amplo pé-direito livre de 3m ',
      textlajeli2: 'Piso elevado de 15 cm ',
      textlajeli3: 'Janelas piso-teto',
      textlajeli4: 'Terraços reversíveis em todos os pavimentos',
      textlajeli5: 'Ar-condicionado VRF (maior flexibilidade e economia)',
      textlajeli6: 'Gerador para 100% do prédio, atendendo às áreas privativas, incluindo ar-condicionado',
      textlajeli7: 'Core central com vista 360° e iluminação natural em todo o perímetro',
      textlajebtn: 'Saiba mais',
      textlajemiudas: '* Área BOMA.',
      // Especificações Técnicas Rooftop
      textrooftoptitle: 'Rooftop com vista 360 graus',
      textrooftopli1: 'Rooftop com vista panorâmica para os Jardins. Região mais arborizada de São Paulo.',
      textrooftopli2: 'Pavimento corporativo com infraestrutura para restaurante',
      textrooftopli3: 'Praça suspensa com paisagismo.',
      // Especificações Técnicas Corte Esquematico
      textesquematicotitle: 'Corte esquemático',
      textesquematicoup1: 'Do 7º ao 24º pavimento, lajes corporativas com terraços reversíveis e arborizados.',
      textesquematicoup2: 'No rooftop do 25º, uma vista digna de um arranha-céu. Lajes com vista 360° de São Paulo.',
      textesquematicoup3: 'Quadro de áreas',
      // Especificações Técnicas Corte Esquematico Lista ao pê
      textesquematicoli1: '1. O projeto está em fase de obtenção da Certificação LEED (Leadership in Energy and Environmental Design) Gold, conferido pelo U.S. Green Building Council.',
      textesquematicoli2: '2. O projeto obteve a Certificação Fitwel®.',
      textesquematicoli3: '3. Os equipamentos e os mobiliários constantes no presente material são referenciais, podendo sofrer revisão de modelos, especificações e quantidades, sem prévio aviso. Ilustrações artísticas. Os móveis, os equipamentos e os objetos de decoração não fazem parte do memorial descritivo.',
      textesquematicoli4: '4. Os revestimentos apresentados nas ilustrações artísticas são referenciais e podem apresentar variação dimensional, de cor e de textura.',
      textesquematicoli5: '5. As vegetações apresentadas nas ilustrações artísticas são de porte adulto, que será atingido ao longo do tempo. O porte da vegetação na entrega do empreendimento será de acordo com o projeto paisagístico.',
      textesquematicoli6: '6. As informações contidas no presente material são meramente ilustrativas, não se configurando como parte integrante de qualquer instrumento legal, podendo, inclusive, ser alteradas sem prévio aviso.',
      textesquematicoli7: '7. As plantas dos andares podem apresentar diferenças.',
      textesquematicoli8: '8. Material elaborado em dezembro de 2023.',
      // Especificações Técnicas Implantacao
      textimplantacaotitle: 'Implantação',
      textimplantacaoli1: 'Lobby',
      textimplantacaoli2: 'Porte-cochère',
      textimplantacaoli3: 'Acesso de veículos',
      textimplantacaoli4: 'Lojas',
      textimplantacaoli5: 'Eventos • Multiúso',
      // Especificações Técnicas Detalhes
      textdetalhestitle: 'Conheça todos os detalhes de um projeto único',
      textdetalhesimg1: 'Lobby',
      textdetalhesimg2: 'Eventos  Multiuso',
      textdetalhesimg3: 'Outros',
      // Especificações Carrosel
      /// Tab Label
      labelplants: 'Plantas',
      labelimages: 'Imagens',
      /// Images
      textimages01: 'Perspectiva de Laje Corporativa',
      textimages01footnote: '* A perspectiva retrata uma sugestão da ocupação e mobiliário, não fazendo parte da comercialização da laje Corporativa',
      textimages02: 'Corte de Laje Corporativa com Infraestrutura',
      textimages03: 'Acesso Rua dos Pinheiros: a Walker’s Paradise',
      textimages03a1: 'Acesso para pedestres e veículos, com porte-cochère e valet no térreo',
      textimages04: 'Acesso às lojas, à Rua dos Pinheiros e ao porte-cochère',
      textimages05: 'Hall de Elevadores',
      textimages06: 'Lobby',
      textimages07: 'Salas Multiuso - Eventos',
      textimages08: 'Lobby - Lounge',
      textimages09: 'Rooftop com vista panorâmica do Jardins.',
      /// Plants
      textplants01title: 'Pavimentos-tipo',
      textplants01title2: 'até 2.600 m²',
      //textplants01title3: 'TOTAL ÁREA BOMA 39.229,18 M²',
      textplants01title3: '',
      textplants01description: 'Pavimentos-tipo',
      textplants02titlesugest: 'Sugestão de layout',
      textplants02title: 'Laje-tipo',
      textplants02title2: 'até 2.600 m²',
      //textplants02title3: 'TOTAL ÁREA BOMA 39.229,18 M²',
      textplants02title3: '',
      textplants02description: 'Laje-tipo',

      /// Plants Descriptivos
      local1: 'Laje Corporativa',
      local2: 'Terraços reversíveis',
      local3: 'Elevadores zona alta - 6 m/s com sistema de chamada antecipada',
      local4: 'Elevadores zona baixa - 4m/s com sistema de chamada antecipada',
      local5: '2 escadas de saída de emergência',
      local6: '2 elevadores de serviço, sendo 1 de emergência com dimensão para maca - leito',
      local7: 'Banheiro feminino',
      local8: 'Banheiro acessível',
      local9: 'Banheiro masculino',

      desc1: '• Piso a piso de 4,68 m, com amplo pé-direito livre de 3 m',
      desc2: '• Piso elevado de 15cm',
      desc3: '• Janelas piso-teto',
      desc4: '• Terrações reversíves em todos os pavimentos',
      desc5: '• Ar-condicionado VRF (maior flexibilidade economia)',
      desc6: '• Gerador para 100% do prédio, atendendo às áreas privativas, incluindo ar-condicionado',
      desc7: '• Core central com vista 360° e iluminação natural em todo o perímetro',
    },

  Tecnicals:
    // Informações Técincas
    {
      textsectiontecnicals: 'Informações Técnicas',
      /// Empreendimento
      textempreendimentotitle: 'Empreendimento',
      textempreendimentocontent: 'Torre Triple A com 39.229,18 m² BOMA e boulevard com 2.700 m² de lojas. Laje-tipo de aprox. 2.000 m². Empreendimento verde, alinhado com as práticas ESG e a Certificação LEED CS Gold. Certificação Fitwel®, com o objetivo de garantir a construção de ambientes mais saudáveis, com foco na saúde e no bem-estar do usuário. Foyer e sala multiuso no térreo, com possibilidade de uso de auditório e copa de apoio para eventos.',
      /// Pavimentos
      textpavimentotitle: 'Pavimento',
      textpavimentocontent: 'Torre única, com mais de 130 m de altura e core central, possibilitando uma vista de 360 graus. 18 pavimentos corporativos (sendo um pavimento garden) e rooftop no 25º andar, preparado para receber um restaurante corporativo. 1 subsolo e 5 sobressolos de garagem.',
      /// Fachada
      textfachadatitle: 'Fachada',
      textfachadacontent: ['Fachada concebida para maior desempenho energético e conforto ambiental, garantindo saúde e bem-estar aos usuários. Janelas piso a piso, vidros de alta performance, terraços em todos os pavimentos.'],
      /// Pédireito
      textpeDireitotitle: 'Pé-direito',
      textpeDireitocontent: 'Lobby: 5,35 m, tipo: 3 m e rooftop (25°): 5,30 m.',
      /// Piso a piso
      textpisotitle: 'Piso a piso',
      textpisocontent: 'Tipo: 4,68 m, 24° pav.: 5,16 m e rooftop (25º): 7,07 m.',
      /// Lease span
      textleasetitle: 'Lease span',
      textleasecontent: 'Variando de 9,56 m a 12,20 m nos pavimentos-tipo.',
      /// Piso elevado
      textpisoElevadotitle: 'Piso elevado',
      textpisoElevadocontent: 'Preparado para piso elevado h = 15 cm.',
      /// Sobrecarga na laje
      textsobrecargatitle: 'Sobrecarga na laje',
      textsobrecargacontent: 'Permanente: 50 kgf/m², e sobrecarga: 400 kgf/m².',
      /// Flexibilidade
      textflexibilidadetitle: 'Flexibilidade',
      textflexibilidadecontent: 'Possibilidade de instalação de escadas entre andares, proporcionando maior integração entre lajes. Possibilidade de divisão da laje em até 4 conjuntos por pavimento.',
      /// Elevadores
      textelevadorestitle: 'Elevadores',
      textelevadorescontent: 'Torre com 11 elevadores sociais, de alta velocidade, com sistema de chamada antecipada, sendo 5 elevadores na zona alta (6 m/s) e 6 elevadores na zona baixa (4 m/s). Pavimento intermediário (16º) com parada de todos os elevadores, facilitando a rápida circulação entre andares em zonas diferentes. Dois elevadores VIPs, um para cada zona, com acesso controlado, direto ao pavimento de garagem. Dois elevadores de baldeação dedicados às garagens (velocidade de 1,75 m/s), permitindo maior segurança e controle de acesso à torre corporativa. 1 elevador de serviço (24 passageiros, dimensão de 1,78 m x 2,30 m) e 1 elevador de emergência/maca-leito com parada em todos os pavimentos (24 passageiros, dimensão de 2,18 m x 2,40 m), incluindo acesso de serviços/doca no subsolo (velocidade de 2,50 m/s). Fachadas ativas 1 e 4: elevador 1 m/s e, para lojas 2 e 3, plataforma para promover acessibilidade.',
      /// Restrooms
      textrestroomstitle: 'Sanitários/Copa',
      textrestroomscontent: 'A torre conta com sanitários masculinos (2 mictórios, 4 vasos e 6 cubas), femininos (6 vasos e 6 cubas) e para PcD (1 vaso e 1 cuba) nas áreas comuns de cada pavimento de escritórios. Prumadas adicionais para futura instalação de sanitário/copa nas áreas privativas localizadas no teto da entrada dos conjuntos. Sanitários femininos, masculinos e para PcD internos das lojas e prumadas adicionais para futura instalação de copa/cozinha localizadas atrás dos sanitários.',
      /// Energy
      textenergytitle: 'Energia',
      textenergycontent: 'O fornecimento de energia elétrica é feito por meio de uma derivação da rede de média tensão 13,8 KV da concessionária de energia elétrica Enel. Há uma cabine primária de multimedição em média tensão, onde temos instalados os medidores para os consumidores do corporativo e das fachadas ativas 1, 2 e 4. A distribuição de energia está na tensão 380V – 3F. Para a alimentação dos conjuntos, temos barramentos blindados pelos shafts, que alimentam a caixa de medição no andar, sendo uma para cada dois conjuntos. Essa caixa está localizada na área comum do empreendimento. A medição é feita por meio de rateio interno via BMS. Para a alimentação elétrica dos circuitos de iluminação e das tomadas, foram utilizados cabos flexíveis com tensão de isolamento 750 V. Para os circuitos alimentadores, foram adotados cabos com isolação para 1 KV. Carga de energia por m² disponibilizada por andar: 131 W/m². Para a alimentação do ar-condicionado dos conjuntos, foram previstos dois barramentos blindados nas prumadas. Os painéis estão localizados um no ático e outro no 6o pavimento, que contém medidores individuais por conjunto para o sistema de ar-condicionado.',
      /// Lighting
      textlightingtitle: 'Iluminação',
      textlightingcontent: 'Todo o sistema de iluminação está em 220 V (fase + neutro + terra). todas as luminárias e seus respectivos acessórios, tais como lâmpadas, soquetes, reatores, drivers, plugues e rabichos, são certificadas pelo Procel e pelo Inmetro, de modo a garantir o desempenho energético, a segurança elétrica e a compatibilidade eletromagnética. Carga de energia por m² disponibilizada por andar para iluminação: 10 W/m².',
      /// Gas
      textgastitle: 'Gás',
      textgascontent: 'Previsão (ponto plugado de gás) para futura instalação de cozinhas corporativas no rooftop (25°) e nas fachadas ativas.',
      /// Air conditioning
      textairConditioningtitle: 'Ar-condicionado',
      textairConditioningcontent: 'Sistema VRF a ar, possibilitando maior autonomia para as unidades corporativas. Previsão de áreas técnicas dedicadas à instalação das condensadoras e das evaporadoras. 1.072.000 BTUs disponibilizados por andar.',
      /// Garage
      textgaragetitle: 'Garagem',
      textgaragecontent: '1 subsolo e 5 sobressolos com total de 358 vagas, sendo: 24 vagas com estação de abastecimento elétrico e 24 vagas com infra seca para instalação de carregadores elétricos, 12 vagas para PcD, 25 vagas para motos e 9 vagas para veículos utilitários. Área VIP no 1º sobressolo, com 34 vagas de garagem e acesso controlado direto à torre corporativa por meio de 2 elevadores VIPs, um para cada zona. Porte-cochère e valet no térreo.',
      /// Docks/service access Protection and fire fighting
      textdockstitle: 'Docas/acesso de serviço',
      textdockscontent: 'Acesso de serviço no subsolo, com vaga dedicada para carga e descarga, área de delivery e expedição. Elevadores de serviço dedicados. Pé-direito abaixo das tubulações: 2,30 m. A carga de piso é especificada por área no subsolo: Subsolo estacionamento: veículos leves: 1,0 tf/m². Reservatórios: carga uniformemente distribuída de 2,5 tf/m². Subsolo: veículos tipo VUC: 5,0 tf/eixo.',
      /// Bicycle Parking
      textbycicletitle: 'Bicicletário',
      textbyciclecontent: '75 vagas para bicicletas, sendo 37 vagas disponíveis para bicicletas elétricas (tomadas) e área de apoio com ferramentas e bomba para enchimento de pneus. Vestiários dedicados ao bicicletário com armários, sendo 1 vestiário feminino, 1 vestiário masculino e 1 PcD.',
      /// Generators
      textgeneratorstitle: 'Geradores',
      textgeneratorscontent: 'Gerador full, atendendo a todas as áreas, comum e privativa, incluindo ar-condicionado e tanque com autonomia para 24 horas. O empreendimento conta com três grupos de geradores a diesel, de 600 KW cada, com previsão de expansão para mais uma unidade. Conta, ainda, com espaço previsto para geradores de áreas privativas, caso os ocupantes venham a ter necessidade de um gerador dedicado para sua operação (160 KVA). Para atender aos geradores, temos um tanque enterrado de 15 m³, conforme NRs.',
      /// Security system
      textsecuritytitle: 'Sistema de Segurança',
      textsecuritycontent: 'A sala de segurança tem antecâmara e sanitário exclusivo. Esse ambiente controla a imagem e o acesso de todos os frequentadores do condomínio. Acesso controlado por meio de um sistema de 6 catracas com reconhecimento facial e chamada antecipada para os elevadores, que podem ser identificados no próprio painel da catraca. Câmeras em todos os pisos corporativos e cobertura de imagem para todo o perímetro do condomínio.',
      /// BMS Automation
      textbmstitle: 'Automação BMS',
      textbmscontent: 'Serão instalados no empreendimento: Sistemas digital de CFTV/PoE; Sistema de controle de acesso por biometria digital; Sistema de elevadores com antecipação de chamada interligado ao controle de acesso; Sistema digital de controle de ar-condicionado, de iluminação, de detecção de fumaça e de segurança digital, entre outros. ',
      /// Control and analysis of air quality
      textqualitytitle: 'Controle e análise da qualidade do ar',
      textqualitycontent: 'Controle do nível de monóxido de carbono (CO) nas garagens, o qual controla a renovação necessária de ar. Renovação de ar por controle de dióxido de carbono (CO₂) nos pavimentos corporativos.',
      /// Ventilation and exhaust system
      textventilationtitle: 'Sistema de ventilação e exaustão',
      textventilationcontent: 'Sanitários, DML e lixo comum aos quatro conjuntos de cada pavimento com sistema de ventilação mecânica constituído por: rede de dutos, shaft revestido internamente com chapa galvanizada, ventilador de exaustão, dampers corta-fogo motorizados + dampers de vazão constante e sistema de monitoramento e acionamento pela automação predial. Previsto sistema de exaustão de um sanitário e uma copa, em cada conjunto, em todos os pavimentos.',
      /// Protection and fire fighting
      textfireFightintitle: 'Proteção e combate a incêndios',
      textfireFightincontent: 'Sistema de controle de fumaça para os pavimentos corporativos composto de: reposição de ar e monitoramento, extração de fumaça e comando de todo o sistema de detecção e alarme de incêndio (SDAI). As escadas têm sistema de pressurização com ventiladores do tipo EC e rede de dutos. As antecâmaras de elevadores serão pressurizadas a partir das escadas por meio de grelha, que interligará os ambientes, por conceito de vaso comunicante. O empreendimento conta com 2 escadas de emergência pressurizadas de 1,65 m de largura.',
      /// Water reuse
      textwaterReusetitle: 'Reúso de água',
      textwaterReusecontent: 'Sistema de reuso da água para utilização no sistema de irrigação, proveniente da coleta dos drenos de ar-condicionado e de águas pluviais.',
      /// Sustainability
      textsustainabilitytitle: 'Sustentabilidade',
      textsustainabilitycontent: 'Sistema de reúso da água proveniente da coleta dos drenos de ar-condicionado e de águas pluviais; ESG: presença de medidores individuais para cada conjunto para aferição do consumo de água e energia elétrica; LEED GOLD BD+C for Core and Shell v4.0: qualidade do ambiente interno, preocupação com o meio ambiente; Fitwel®: bem-estar e saúde do ocupante; Grande incidência de luz natural; Pontos de recarga para veículos elétricos; Incentivo ao uso de bicicletas; Controle eletrônico de iluminação; Utilização de vidros de alta performance em eficiência energética; Para se diminuir o uso de água, o paisagismo é composto de plantas nativas, que necessitam de pouca rega.',
      /// Construction differentials
      textdifferentialstitle: 'Diferenciais construtivos',
      textdifferentialscontent: 'Espaço adicional para instalação de mais 2 geradores independentes de até 160 KVA para necessidade de exclusividade do locatário na geração (atendendo às NRs). Sistema de geração a diesel para atender a 100% da carga considerada crítica, como bomba de incêndio, iluminação e sistemas de segurança. Pavimentos com floreiras (garden) com sistema de irrigação automatizado. Elevador de serviço e de emergência/maca-leito. Elevadores de alta velocidade com sistema de antecipação de chamadas. 25° andar: o locatário terá a opção de implantação de uma cozinha. Possibilidade de integração dos terraços e conexão entre os andares por meio de escadas internas. Materiais e acabamentos de alta qualidade, modernos recursos de automação, conforto térmico e acústico, instalações de última geração etc. Vidro eficiente: contribui na solução energética, na alta performance e no melhor conforto ambiental para os usuários.',
      /// Telecommunication
      texttelecommunicationtitle: 'Telecomunicação',
      texttelecommunicationcontent: 'Infraestrutura de rede de cabeamento estruturado com backbone de fibra óptica para suportar: Telefonia digital; Sistema de IPTV; Sistema de Wi-Fi; E todos os sistemas eletrônicos do empreendimento.',
      /// Arquitetura & Interiores
      textaquitetura: 'Arquitetura & Interiores',
      /// Paisagismo
      textpaisagismo: 'Paisagismo',
      /// Luminotécnica
      textluminotecnica: 'Luminotécnica',
    },

    Contact:
  //Contato form
  {
    title: 'Contato',
    selectmodal: 'Seleciona uma opção de contato',
    label: 'Fale conosco e receba mais informações.',
    canal: 'Por qual canal podemos conversar?',
    nome: 'Nome',
    email: 'E-mail',
    telefone: 'Telefone',
    mensagem: 'Mensagem',
    textarea: 'Olá, gostaria de receber mais informações sobre o Biosquare.',
    lgpd1: 'Declaro que li e aceito a',
    lgpd2: 'autorizando o recebimento de comunicações de marketing e o contato de um corretor.',
    linklgpd: 'Política de Privacidade e cookies,',
    btn: 'Solicitar informações',
  },

  Idealization:
    {
      textsectionidealization:'Idealização',
      textesquerdatitle:'Irreplicável',
      textdireitatitle:'e único',
      textesquerdacontentup:'Com cases premiados no Brasil e nos Estados Unidos, a G.D8 atua em projetos guiados pela inovação e pela excelência do design. Acreditamos no poder da mudança por meio da arquitetura, que possibilita cidades que fomentam a mobilidade, a segurança e o bem-estar.',
      textesquerdacontentbottom:'Nesse novo projeto, não foi diferente: são mais de 5 anos estudando e adquirindo lotes para o nascimento de Biosquare São Paulo. Um terreno único, de 5.600 m², com os melhores parceiros engajados em projetar com criatividade, originalidade e persistência, focados no futuro da nossa cidade e dos que aqui habitam, trabalham e se relacionam.',
      textdireitacontentup:'Muitos desafios se colocavam à nossa vista: como criar um ícone para a nossa cidade, aliando tecnologia, design, sustentabilidade, inovação e elegância.',
      textdireitacontentbottom:'Foram muitos croquis, estudos de tendências e reports globais, com um time de profissionais escolhidos rigorosamente e com uma curadoria analítica. A sensação é de que um legado para São Paulo foi desenhado, inspirado nas pessoas, isso é Biosquare São Paulo.',
    },

  Footer:
    {
      realization: 'Realização',
      realizationincorporation: 'Realização e incorporação',
      footerlgpd: 'O projeto encontra-se em desenvolvimento, todas as imagens e perspectivas contidas no site são meramente ilustrativas, incluindo a vegetação que representa seu porte adulto. As unidades serão entregues em Core & Shell, portanto, os móveis e acessórios não fazem parte do contrato de locação do imóvel. Material sujeito a alterações sem aviso prévio.',
    },

  ModalTerms:
  {
    header: 'POLÍTICA DE PRIVACIDADE E PROTEÇÃO DE DADOS',

    scope: 'ESCOPO DESTA POLÍTICA',
    scopeText1: 'Prezado usuário, por favor, leia a presente Política de Privacidade e Proteção de Dados (“Política”) cuidadosamente, a fim de compreender integralmente a coleta e o tratamento conferidos aos seus Dados Pessoais.',
    scopeText2: 'A presente Política se aplica aos usuários do site ',
    scopeText2Site: '("Site"), sites específicos dos nossos produtos (“Landing pages”), bem como a todos os clientes, possíveis cliente e parceiros da G.D8 Incorporadora.',
    scopeText3: 'Assim, é importante que você, usuário, tenha conhecimento de todas as informações necessárias para a tomada de decisão quanto ao fornecimento de seus Dados Pessoais, como atualizá-los, gerenciá-los e, inclusive, como exclui-los de nossa base de dados.',
    scopeText4: 'Esta Política poderá ser alterada periodicamente, conforme informado ao final deste documento.',

    // Personal Data
    personalData: 'COMO E QUAIS DADOS PESSOAIS QUE COLETAMOS A SEU RESPEITO',

    personalDataText1: 'Podemos obter suas informações pessoais nas seguintes hipóteses:',
    personalDataText2: 'Através de suas interações conosco e com nossos serviços, como quando você se inscreve ou se cadastra para receber o material publicitário da G.D8 Incorporadora, solicita informações por meio dos nossos canais de atendimento (site, telefone, e-mail etc), e, visita aos nossos stands, interage com imobiliárias e/ou corretores parceiros da G.D8 Incorporadora, interage por meio do nosso Site ou por meio sites específicos dos nossos produtos (“Landing pages”), ou efetua acordos comerciais; e',
    personalDataText3: 'Por meio de Cookies ou outras tecnologias semelhantes. Mais informações sobre o uso de cookies em nosso site podem ser encontradas na seção "O Que São e Como Utilizamos Cookies" desta Política.',
    personalDataText4: 'Podemos coletar os seguintes tipos de Dados Pessoais:',
    personalDataText5: 'A G.D8 Incorporadora poderá coletar os seguintes Dados Pessoais, de acordo com cada uma das situações abaixo elencadas:',

    personalDataLi1Strong: 'Formulário de Cadastro no nosso Site ou canais der atendimento (“Contato”):',
    personalDataLi1: 'Nome Completo; Endereço de e-mail; e Número de telefone para contato;',

    personalDataLi2Strong: 'Formulário para cadastramento nos Sites específicos dos nossos produtos (“Landing Pages”):',
    personalDataLi2: 'Nome Completo; Endereço de e-mail; e Número de telefone para contato;',

    personalDataLi3Strong: 'Formulários de visitação a stands:',
    personalDataLi3: 'Nome Completo; Endereço de e-mail; e Número de telefone para contato;',

    personalDataLi4Strong: 'Imobiliárias:',
    personalDataLi4: 'Nome, endereço, e-mail, telefone de contato, CPF, RG, informações financeiras, CRECI (caso seja corretor);',

    personalDataLi5: 'Formulário para recebimento de newsletter: Nome Completo e Endereço de email',
    personalDataLi5Strong: '(Para uso futuro)',

    personalDataLi6Strong: 'Formulário para cadastramento de corretores parceiros:',
    personalDataLi6: 'Nome Compelto, email, telefone de contato,  CRECI, informações profissionais;',

    personalDataText6: 'Aos usuários que manifestem interesse em celebrar contrato com a G.D8 Incorporadora poderão ser adicionalmente coletados os seguintes dados:',

    personalDataText7: 'Pessoa Física',

    personalDataLi7: 'Cópia de Documento de Identidade válido (tais como RG, CNH, Carteira de Identidade Profissional etc.);',
    personalDataLi8: 'Comprovante de Estado Civil dos proponentes e, no caso de tratar-se de pessoa casada pelo regime de Comunhão Total de Bens, será igualmente solicitada a Escritura do Pacto Antenupcial e respectivo registro;',
    personalDataLi9: 'Numeração do Cadastro de Pessoa Física (CPF);',
    personalDataLi10: 'Declaração de Imposto de Renda do Exercício Anterior;',
    personalDataLi11: 'Dados bancários; e',
    personalDataLi12: 'Comprovante de renda:',
    personalDataLi12a1: 'Se CLT – três últimos holerites;',
    personalDataLi12a2: 'Se Empresário –extrato bancário pessoa física dos últimos três meses; e',
    personalDataLi12a3: 'Se Aposentado / Pensionista - Últimos extratos do benefício emitido pela DATAPREV  e Carta de concessão do benefício.',

    personalDataText8: 'Pessoa Jurídica',

    personalDataLi13: 'Última alteração Contrato Social;',
    personalDataLi14: 'Cartão CNPJ;',
    personalDataLi15: 'Cópia de Documento de Identidade válido dos sócios (tais como RG, CNH, carteira de Identidade Profissional etc.);',
    personalDataLi16: 'Comprovante de Estado Civil dos sócios;',
    personalDataLi17: 'Comprovante de Faturamento do último exercício:',
    personalDataLi17a1: 'ECF – Escrituração Contábil Fiscal;',
    personalDataLi17a2: 'DEFIS – Declaração de Informações Socioeconômicas e Fiscais;',
    personalDataLi17a3: 'DASN – Declaração Anual do Simples Nacional – SIMEI – Microempreendedor Individual.',
    personalDataLi18: 'Declaração de Receita Fiscal dos últimos 12 meses e regime tributário, assinada pelo contabilista responsável.',

    personalDataText9: 'Ainda, quando você interage com a G.D8 Incorporadora por intermédio do nosso Site ou dos Sites específicos dos nossos produtos (“Landing pages”), poderão ser coletados dados relacionados à navegação, que visam a identificar e resguardar informações dos nossos visitantes digitais, cumprir obrigações legais e prevenir fraudes ou qualquer outro risco associado a navegação na internet, tais como:',

    personalDataLi19: 'Registros de acesso (Logs. de IP);',
    personalDataLi20: 'Dispositivo e Versão do software utilizados para navegação;',
    personalDataLi21: 'Registros de data e horário de acesso e tempo de permanência;',
    personalDataLi22: 'Seções do site acessadas; e',
    personalDataLi23: 'Cookies e dados analíticos.',

    // Personal Data Use
    personalDataUse: 'FINALIDADE DA COLETA E USO DOS SEUS DADOS PESSOAIS',

    personalDataUseText1: 'Mediante a realização da inscrição ou cadastramento, você autoriza a G.D8 Incorporadora a utilizar deus Dados Pessoais para o envio de material publicitário ou informações relacionadas aos nossos projetos, o que poderá ser posteriormente revogado mediante gerenciamento de seus dados, conforme explicado no item “Seus Direitos” abaixo.',
    personalDataUseText2: 'Aos usuários que celebrarem contrato comercial com a G.D8 Incorporadora, os Dados Pessoais coletados têm por finalidade a análise de viabilidade (análise de crédito) e execução deste contrato, no qual você será seja parte, bem como a fim de gerenciar nosso relacionamento, atender às suas solicitações e aprimorar nossos serviços.',

    // Data Sharing
    personalDataSharing: 'COMPARTILHAMENTO DE DADOS',

    personalDataSharingText1: 'A G.D8 Incorporadora poderá compartilhar os Dados Pessoais de seus usuários nas seguintes hipóteses:',

    personalDataSharingLi1Strong: 'Parceiras Comerciais:',
    personalDataSharingLi1: 'A G.D8 Incorporadora poderá compartilhar os seus Dados Pessoais com parceiros comerciais, tais como Sociedades de Propósito Específico (SPEs), constituídas para realização de seus projetos; podemos também compartilhar seus dados com imobiliárias e corretores de imóveis com o objetivo de viabilizar o oferecimento de determinado produto ou serviço ou condição especial para você.',
    personalDataSharingLi2Strong: 'Autoridades Públicas:',
    personalDataSharingLi2: 'A G.D8 Incorporadora cumpre os termos das Leis brasileiras. Isso quer dizer que haverá o compartilhamento dos seus Dados Pessoais com autoridades judiciais, administrativas ou governamentais competentes, caso haja uma determinação legal, requerimento, requisição ou ordem judicial.',

    // Data Storage Period
    personalDataStorage: 'POR QUANTO TEMPO ARMAZENAREMOS SEUS DADOS',

    personalDataStorageText1: 'Seus Dados Pessoais serão coletados, processados e armazenados pela G.D8 Incorporadora durante o tempo necessário para responder aos propósitos legais, contratuais e comerciais, incluindo o tempo de duração do seu relacionamento conosco.',
    personalDataStorageText2: 'Ainda, a G.D8 Incorporadora poderá manter seus Dados Pessoais por período superior ao encerramento do relacionamento, caso restem pendentes quaisquer obrigações legais, contratuais ou comerciais em curso (como para fins de auditoria interna, para atender às exigências regulamentares relacionadas à retenção de informações ou para responder a solicitações de autoridades governamentais) e o tempo necessário para dar suporte a quaisquer ações judiciais.',

    // Data Usage Cookies
    personalDataUsageCookies: 'O QUE SÃO E COMO UTILIZAMOS COOKIES',

    personalDataUsageCookiesText1: 'Cookie é um pequeno arquivo que fica gravado em seu dispositivo ou computador quando do acesso à Sites. Referido arquivo é amplamente utilizado para fazer os sites funcionarem de maneira mais eficiente, bem como para fornecer uma experiência personalizada de acesso ao usuário e enviar algumas informações dos usuários aos proprietários do site.',
    personalDataUsageCookiesText2: 'Em outras palavras, os Cookies possuem o intuito de reconhecer e personalizar sua navegação conforme suas preferências em nosso site, ocupando pouco espaço na memória do seu dispositivo móvel ou no disco rígido do seu computador. São os Cookies que permitirão que a G.D8 Incorporadora reconheça que você já acessou nosso site alguma(s) vez(es) anteriormente e lembrará de informações importantes que tornam a utilização das nossas plataformas cada vez mais ágeis e agradáveis.',
    personalDataUsageCookiesText3: 'Veja a seguir quais categorias de cookies são utilizadas, de acordo com a sua função:',

    personalDataUsageCookiesLi1Strong: 'Cookies Necessários:',
    personalDataUsageCookiesLi1: 'são Cookies estritamente necessários para a operação do site da G.D8 Incorporadora.  Esses Cookies permitem que você usuário navegue pelo nosso site e usufrua dos recursos. Por se tratar de Cookies necessários para navegação em nosso Site, não é possível desabilitar sua utilização;',

    personalDataUsageCookiesLi2Strong: 'Cookies analíticos:',
    personalDataUsageCookiesLi2: 'são Cookies que nos ajudam a entender como os usuários visitantes interagem com os nosso Site, fornecendo informações sobre as áreas visitadas, o tempo de visita ao site e quaisquer problemas eventualmente encontrados;',

    personalDataUsageCookiesLi3Strong: 'Cookies funcionais:',
    personalDataUsageCookiesLi3: 'são cookies que permitem que lembremos das suas escolhas anteriores, como o idioma de navegação. São responsáveis por proporcionar uma experiência personalizada aos usuários; e',

    personalDataUsageCookiesLi4Strong: 'Cookies publicidade:',
    personalDataUsageCookiesLi4: 'são cookies utilizados para fornecer mais conteúdo relevante e específico sobre os interesses dos usuários, como seus hábitos de navegação. Podem, assim, ser utilizados para apresentar publicidade de maneira mais assertiva, isto é, mais condizente com o perfil de cada um dos usuários.',

    personalDataUsageCookiesText4: 'Você pode gerenciar os Cookies do Site (exceto os',
    personalDataUsageCookiesText4Strong: 'Cookies Necessários',
    personalDataUsageCookiesText4a2: ') alterando as configurações diretamente no seu navegador, para aceitar, rejeitar ou desabilitar os Cookies. No entanto, algumas funções e recursos do Site podem não funcionar corretamente por conta desta alteração, prejudicando a sua experiência de navegação.',

    // Data Rights
    personalDataRights: 'SEUS DIREITOS',

    personalDataRightsText1: 'A G.D8 Incorporadora está integralmente em conformidade às Leis de Proteção de Dados. Assim, ressaltamos que você, usuário, possui os seguintes direitos enquanto tratamento e proteção dos seus Dados Pessoais:',

    personalDataRightsLi1: 'Requisição de acesso aos seus Dados Pessoais coletados;',
    personalDataRightsLi2: 'Correção/Alteração de Dados Pessoais incompletos, inexatos ou desatualizados;',
    personalDataRightsLi3: 'Revogação do consentimento e solicitação de exclusão de seus Dados Pessoais da nossa base de dados;',
    personalDataRightsLi4: 'Requerer a anonimização dos seus dados pessoais, de forma que eles não possam mais ser relacionados a você e, portanto, deixem de ser Dados Pessoais;',
    personalDataRightsLi5: 'Requerer maiores informações acerca de quais Dados Pessoais dos nossos usuários são compartilhados e com quais dos nossos parceiros;',
    personalDataRightsLi6: 'Requerer informações sobre a possibilidade e as consequências de não fornecer consentimento para coleta e tratamento dos seus Dados. O seu consentimento, quando necessário, deve ser livre e informado, portanto, sempre que pedirmos seu consentimento, você será livre para negá-lo – destaca-se, no entanto, que nesses casos é possível que alguns serviços não possam ser prestados pela G.D8 Incorporadora; e',
    personalDataRightsLi7: 'Requerer a portabilidade dos seus Dados Pessoais a outro fornecedor de serviço ou produto, mediante requisição expressa, de acordo com a regulamentação da Autoridade Nacional de Proteção de Dados (ANPD), observados os segredos comercial e industrial.',

    personalDataRightsText2: 'Todas as solicitações serão submetidas a uma prévia avaliação da sua identidade e da viabilidade do atendimento, a fim de cumprir com eventuais obrigações que impeçam o completo atendimento das requisições dos titulares de direito.',

    // Data Updates & Protection
    personalDataUpdate: 'ALTERAÇÕES DA NOSSA POLÍTICA DE PRIVACIDADE E PROTEÇÃO DE DADOS',

    personalDataUpdateText1: 'Nos reservamos o direito de fazer alterações às nossas práticas e a esta Política a qualquer tempo. A verificação de eventuais alterações, atualizações e mudanças se dará por meio de novo acesso a ser realizado pelos usuários.',
    personalDataUpdateText2: 'Última atualização: 17 novembro de 2023.',

    // Contact
    personalDataContact: 'CONTATO',

    personalDataContactText1: 'Em caso de dúvidas, comentários, solicitações ou alguma dúvida sobre a forma como utilizamos seus Dados Pessoais e a presente Política, entre em contato conosco por intermédio do e-mail',
  },
}


export const dataLanguagesEnPt: LanguageData = {

  Validations:
  {
    preenchaCampo: 'Please fill out this field',
    invalidNumber: 'Invalid number',
    invalidEmail: 'Invalid e-mail',
  },

  Header:
  // Header
  {
    labelBio: 'Biosquare',
    labelSust: 'Sustainability',
    labelLocal: 'Location',
    labelEspecs: 'Technical Specifications',
    labelConcept: 'Concept',
    labelContact: 'Contact',
  },

  Intro:
    // Intro
       // Intro
    {
      verdadeiro: 'A REAL SKYSCRAPER IN THE HEART OF THE PINHEIROS NEIGHBORHOOD',
      ulli1: '• Floors of up to 2,600 sqm',
      ulli2: '• AAA corporate building',
      ulli3: '• 360° view',
      ulli4: '• 130 meters high with rooftop',
      btnReceba: 'Learn more',
      btnbacktotop: 'Back to the top',
    },

  About:
    //Sobre / About
    {
      textsectionsobre: 'About Biosquare',
      textintro: 'A unique development that establishes Pinheiros as the best corporate region in São Paulo',
      textbodydireito: 'Tomorrow begins today. With new forms, new paths, colors, and sensations, Biosquare São Paulo presents the future beyond its windows.  The future of work and networking, coexistence, and especially, the future of urban life.  It is more than just a project; it is a vision to create a legacy for the city. Inspired by what people desire, dream, and aspire to.',
      textbodyesquerdo: 'It is technological, green, and walkable. With sustainability at its core, and centered on well-being. Designed from the people for the whole, connecting the individuals and linking the block to the city.',
      //Sobre / About / Selos
      textintroselos: 'Biosquare was designed to follow the premises of a sustainable project attuned to the most important issues of our time.',
      textselogold: 'Designed to meet the demands of the most innovative companies, with CS Gold Certification from the GREEN BUILDING COUNCIL LEED program, the development aims to create a positive and sustainable impact on the neighborhood. From development to construction materials, everything converges towards an objective aligned with the concept of neo-ecology: generating less waste, reducing impact, saving energy and minimizing water consumption, among other factors. The facade is designed to provide optimal energy and visual comfort for users.',
      textselofitwel: 'Investing in users’ health has multiple benefits. In healthier corporate buildings, people are more productive and happy, resulting in lower turnover and higher ROI. With this premise, the Fitwel® Certification confirms that the project infrastructure has the potential to improve the health and well-being of employees. To secure this endorsement, Biosquare São Paulo scored in all evaluated categories.',
      textseloloop: 'Biosquare won the international LOOP Design Award, and was awarded in two categories: Peoples’s Choice Award and Category Winner (Office Concept). The LOOP Design Awards is an annual Design award, which features projects in the areas of Architecture, Interiors, Landscape, Product, Architectural Photography, and Architectural Video. LOOP has already received more than 1000 submissions from 55 different countries, regular special works from diverse origins around the world.',
      textseloesg: 'ESG represents a clear and critical shift towards a sustainable way of thinking. It is a set of practices encompassing social, corporate, and environmental commitments. From a market perspective, adhering to this indicator  means a company’s ability to interpret and integrate effective society values into its business.',
      textselobtnexpand: 'Show More',
      textselobtncollapse: 'Show Less',

      textasteriscosobre1: '* Ongoing Project for the LEED Certification',
      textasteriscosobre2: '* Fitwel® Certification Project.',
    },

    Localization:
    //Localizacao / Localization
    {
      // Panoramica
      textpanoramica: 'Panoramic view of Jardins, the most tree-lined area of São Paulo.',

      // Localizacao Mapa
      textsectionlocalizacao: 'Location',
      textmap: 'Hover over the image to see details',

      // Localizacao left
      textmapleft1: 'The best real estate development in São Paulo could only be located on a street in Pinheiros with Walker’s Paradise status.*',
      textmapleft2: 'Pinheiros St. X Capitão Antonio Rosa St.',
      textmapleft3: 'Meters away from the Fradique Coutinho station and the Rebouças corridor.',
      textmapbtn: 'See on the map',
      textwalkscore: '*The Walk Score® assesses the walkability of any place in the world: https://www.walkscore.com',

      // Localizacao right
      textmapright1: 'Strategic Location',
      textmapright2: 'A short distance from the Fradique Coutinho subway station and the Rebouças corridor.',
      textmapright3: 'Walker’s Paradise Area',
      textmapright4: 'Complete infrastructure with services and restaurants in the surrounding area',
      textmapright5: 'Cultural and gastronomic hub in São Paulo',

      textmapaddress: 'Capitão Antônio Rosa St., 422',
      textmapaddress1: 'Click on image ',
      textmapaddress1a: 'to see the map of the region.',
      textmapaddress2: 'Tap image ',
    },

  Especification:
    // Especificações Técnicas
    {
      textsectionespecificacoes: 'Technical Specifications',
      textespecificacoesbanner: 'A green block that is a step ahead of everything you know.',
      // Especificações Técnicas Laje
      textlajetitle: 'Corporate floor with up to about 2,600 SQM',
      textlajeli1: 'Floor to floor - 4.68 m, with a 3 m ceiling high',
      textlajeli2: '15cm raised floor',
      textlajeli3: 'Floor-to-ceiling windows',
      textlajeli4: 'Reversible terraces in all floors',
      textlajeli5: 'VRF air conditioning (greater flexibility and energy-saving)',
      textlajeli6: 'Generator covering 100% of the building, serving the private areas, including air conditioning system',
      textlajeli7: 'Central core with a 360-degree view and natural lighting around the perimeter',
      textlajebtn: 'Learn More',
      textlajemiudas: '* BOMA Area.',
      // Especificações Técnicas Rooftop
      textrooftoptitle: '360° view on the rooftop',
      textrooftopli1: 'Rooftop with a panoramic view of Jardins, the most tree-lined area of Sao Paulo.',
      textrooftopli2: 'Corporate floor with infrastructure for a restaurant.',
      textrooftopli3: 'Elevated plaza with landscaping.',
      // Especificações Técnicas Corte Esquematico
      textesquematicotitle: 'Schematic Section',
      textesquematicoup1: 'From the 7th to the 24th floor, there are corporate floors with reversible and landscaped terraces.',
      textesquematicoup2: 'On the 25th floor (Rooftop), a view worthy of a skyscraper. Floors with a 360-degree view of Sao Paulo',
      textesquematicoup3: 'Area chart',
      // Especificações Técnicas Corte Esquematico Lista ao pê
      textesquematicoli1: '1. The project is in the process of obtaining LEED (Leadership in Energy and Environmental Design) Gold certification, conferred by the U.S. Green Building Council.',
      textesquematicoli2: '2. The project is Fitwel® certified.',
      textesquematicoli3: '3. The equipment and furnishings shown in this material are for reference only and may be subject to model revisions, specification changes, and quantity adjustments without prior notice. Artistic illustrations, furniture, equipment, and decorative objects are not part of the descriptive memorandum.',
      textesquematicoli4: '4. The finishes presented in the artistic illustrations are for reference only and may vary in dimensions, color, and texture.',
      textesquematicoli5: '5. The vegetation shown in the artistic illustrations is depicted in its mature form, which will take time. The actual size of the vegetation upon project delivery will correspond to the landscaping design.',
      textesquematicoli6: '6. The information contained in this material is purely illustrative and does not constitute an integral part of any legal document, and it may be subject to changes without prior notice.',
      textesquematicoli7: '7. Floor plans may vary.',
      textesquematicoli8: '8. Material prepared in September 2023.',
      // Especificações Técnicas Implantacao
      textimplantacaotitle: 'Site Plan',
      textimplantacaoli1: 'Lobby',
      textimplantacaoli2: 'Porte-cochère',
      textimplantacaoli3: 'Vehicles entrance',
      textimplantacaoli4: 'Stores',
      textimplantacaoli5: 'Events • Multipurpose rooms',
      // Especificações Técnicas Detalhes
      textdetalhestitle: 'Get to know all the details of a unique project',
      textdetalhesimg1: 'Lobby',
      textdetalhesimg2: 'Eventos  Multiuso',
      textdetalhesimg3: 'Outros',
      // Especificações Carrosel
      /// Tab Label
      labelplants: 'Plants',
      labelimages: 'Images',
      /// Images
      textimages01: 'Corporate Floor Perspective',
      textimages01footnote: '* The perspective portrays a suggestion of occupation and furniture, and it’s not included in the Corporate Floor commercialization.',
      textimages02: 'Corporate Floor Cutting with Infrastructure',
      textimages03: 'Access through Rua dos Pinheiros: a Walker’s Paradise.',
      textimages03a1: 'Pedestrian and vehicle access, with porte-cochère and valet on the ground floor.',
      textimages04: 'Pedestrian and vehicle access, with porte-cochère and valet on the ground floor.',
      textimages05: 'Elevators Hall',
      textimages06: 'Lobby',
      textimages07: 'Events - Multipurpose Rooms',
      textimages08: 'Lobby - Lounge',
      textimages09: 'Rooftop with a panoramic view of Jardins, the most tree-lined area of Sao Paulo.',
      /// Plants
      textplants01title: 'Standard floor',
      textplants01title2: 'up to 2,600 m²',
      textplants01title3: 'TOTAL BOMA AREA 39,229.18 M²',
      textplants01description: 'Standard flooring',
      textplants02titlesugest: 'Layout suggestion',
      textplants02title: 'Type floor',
      textplants02title2: 'up to 2,600 m²',
      textplants02title3: 'TOTAL BOMA AREA 39,229.18 M²',
      textplants02description: 'Type floor',

      /// Descriptive Plants
      local1: 'Corporate Floor',
      local2: 'Reversible terraces',
      local3: 'High-rise elevators - 6 m/s speed with smart call system',
      local4: 'Lower-zone elevators - 4m/s speed with smart call system',
      local5: 'Emergency exit stairs - 2 emegency stairways',
      local6: '2 service elevators, one being an emergency stretcher-bed elevator',
      local7: 'Women`s restroom',
      local8: 'Accessible restroom',
      local9: 'Men`s restroom',

      desc1: '• Floor to floor - 4.68 m, with a 3 m ceiling high',
      desc2: '• 15 cm raised floor',
      desc3: '• Floor-to-ceiling windows',
      desc4: '• Reversible terraces in all floors',
      desc5: '• VRF air conditioning (greater flexibility and energy-saving)',
      desc6: '• Generator covering 100% of the building, serving the private areas, including air conditioning system',
      desc7: '• Central core with a 360-degree view and natural lighting around the perimeter',
    },

  Tecnicals:
    // Informações Técincas
    {
      textsectiontecnicals: 'Technical Information',
      /// Empreendimento
      textempreendimentotitle: 'Project',
      textempreendimentocontent: 'Triple A tower with 39,229,18 SQM BOMA, and boulevard with 2700 SQM of stores. Standard floor with approx. 2000 SQM. Green project, aligned with ESG practices and LEED CS Gold certification. Fitwel® Certification, aimed at ensuring the development of healthier environments focused on users’ health and wellness. Foyer and multi-purpose room on the ground floor, with potential use for auditorium and supporting scullery for events. ',
      /// Pavimentos
      textpavimentotitle: 'Flooring',
      textpavimentocontent: 'Single tower over 130m high and central core, allowing a 360° view. 18 Corporate floors (one garden floor) and Rooftop on the 25th floor, set up to hold corporate restaurant. 1 underground floor and 5 garage floors above ground level.',
      /// Fachada
      textfachadatitle: 'Facade',
      textfachadacontent: [
        "•	Designed for best energy performance and environmental comfort, ensuring health and well-being to users.",
        " Floor-to-ceiling windows, using high-performance glass and reversible terraces on all floors."
      ],
      /// Pédireito
      textpeDireitotitle: 'Ceiling High',
      textpeDireitocontent: '•	Lobby: 5,35m, Standard: 3,00m and Rooftop (25th): 5,30m.',
      /// Piso a piso
      textpisotitle: 'Floor to floor',
      textpisocontent: '•	Standard: 4,68m, 24th floor: 5,15m and Rooftop (25th): 7,07m',
      /// Lease span
      textleasetitle: 'Lease span',
      textleasecontent: 'Varying from 9,56m to 12,20m on standard floors.',
      /// Piso elevado
      textpisoElevadotitle: 'Raised floor',
      textpisoElevadocontent: '•	Set up for raised floor = 15cm',
      /// Sobrecarga na laje
      textsobrecargatitle: 'Slab overload',
      textsobrecargacontent: '•	Permanent 50kgf/SQM and overload 400 kgf/SQM',
      /// Flexibilidade
      textflexibilidadetitle: 'Flexibility',
      textflexibilidadecontent: '•	Possibility to install staircases between floors, allowing for a greater integration.	Possibility to divide the floor into up to 4 office rooms per floor.',
      /// Elevadores
      textelevadorestitle: 'Elevators',
      textelevadorescontent: '•	Tower with 11 high-speed social elevators with early call system, with 5 elevators in the High Zone (7m/s) and 6 elevators in the Low-rise Zone (4m/s). Intermediate floor (16th) where all elevators may stop, facilitating the fast access between floors in different zones. Two VIP elevators, one for each zone with direct controlled access to the garage floor. Two transfer elevators dedicated to the garages (1,75 m/s speed), allowing greater security and access control to the Corporate Tower. Elevators with energy regeneration system. One service elevator (24 passengers) and 1 emergency elevator stretcher-bed capable (24 passengers, dim. 2,18x2,40). They both may stop on all floors and run at 2.5 m/s speed.	Stores 1 and 4: 1m/s elevator and accessible platform on stores 2 and 3.',
      /// Restrooms
      textrestroomstitle: 'Restrooms',
      textrestroomscontent: '•	Restrooms for Women, Men and people with disabilities are available in the common areas of each office floor. There is an extra plumb infrastructure (water/ sewage) for future installation of restrooms within private areas. Water and sewage supply points are previewed.',
      /// Energy
      textenergytitle: 'Energy',
      textenergycontent: '•	Power supply is provided through a branch from the 13.8 kV medium voltage network of the power supply company ENEL. There is a primary medium voltage multimetration cabin, where the meters for the Corporate consumers and stores 1,2, and 4 are installed. The power distribution is at a voltage of 380V - 3- phase.	For the supply of the units, we have busbars enclosed in the shafts, which feed the meter box on each floor, with one box for every two units. This box is located in the common area of the complex. The measurement is done through internal allocation via BMS.	For the power supply of the lighting and outlet circuits, flexible cables with an insulation voltage of 750 V were used. For the feeder circuits, cables with insulation for 1 kV were adopted.	Energy load per square meter available per floor: 131 W/m².	For the power supply of the air conditioning units, two enclosed busbars are planned in the vertical shafts. The panels are located in the attic and on the 6th floor, each containing individual meters for the air conditioning system of each unit.',
      /// Lighting
      textlightingtitle: 'Lighting',
      textlightingcontent: '•	The entire lighting system is LED, in 220 V (Phase + Neutral + Ground).	All the lighting luminaires and their respective accessories, such as lamps, sockets, ballasts, drivers, plugs, and cords are certified by PROCEL and INMETRO, in order to ensure energy performance, electrical safety, and electromagnetic compatibility.	Energy load per square meter available per floor for lighting: 10 W/m².',
      /// Gas
      textgastitle: 'Gas',
      textgascontent: '•	Provision (natural gas connection point) for the future installation of corporate kitchens on the rooftop (25th floor) and in stores.',
      /// Air conditioning
      textairConditioningtitle: 'Air conditioning',
      textairConditioningcontent: '•	VRF air system providing greater autonomy for the corporate units. Provision for dedicated technical areas for the installation of condensers and evaporators. A total of 1,072,000 BTUs available per floor.',
      /// Garage
      textgaragetitle: 'Garage',
      textgaragecontent: '•	1 underground level and 5 above-ground levels with a total of 358 parking spaces for automobiles, including 24 spaces with electric charging stations and 24 spaces with dry infrastructure for the installation of electric chargers. VIP area on the 1st above-ground level, with controlled access directly to the corporate tower via 2 VIP elevators, one in each zone.	Porte-cochère and valet service on the ground floor.',
      /// Docks/service access Protection and fire fighting
      textdockstitle: 'Loading docks / Backdoor access',
      textdockscontent: '•	Service access in the basement with a dedicated space for loading and unloading, delivery area, and shipping area.',
      /// Bicycle Parking
      textbycicletitle: 'Bike storage room',
      textbyciclecontent: '•	75 bicycle parking spaces, with 37 spaces available for electric bicycles (outlets) and support area with tools and tire filling pump. Dedicated shower room with lockers (women’s, men’s and PWD).',
      /// Generators
      textgeneratorstitle: 'Generators',
      textgeneratorscontent: '•	Full generator, serving all areas, both common and private, including air conditioning, with a tank providing 24-hour autonomy. The development includes four diesel generator sets, each with a capacity of 600KW. Additionally, there is space allocated for private area generators should the occupants require a dedicated generator for their operation (160KVA). To support the generators, there is an underground tank with a capacity of fifteen cubic meters, in accordance with regulatory standards (NRs)',
      /// Security system
      textsecuritytitle: 'Security system',
      textsecuritycontent: '•	The security room has an antechamber and exclusive restroom. This environment controls the image and access of all visitors to the condominium.	Access is controlled by a system of 6 turnstiles with facial recognition and early call system connected to the elevators, which can be identified on the turnstile panel itself.	Cameras are installed on all corporate floors, and around the entire perimetrer of the ground floor, providing image coverage for the entire floor.',
      /// BMS Automation
      textbmstitle: 'BMS Automation',
      textbmscontent: '•	Digital CCTV/PoE systems;	Access control system with digital biometric recognition;	Elevator system with pre-call system integrated with access control;	Digital control system for air conditioning, lighting, smoke detection, digital security, among others.',
      /// Control and analysis of air quality
      textqualitytitle: 'Control and analysis of air quality',
      textqualitycontent: '•	Control of the carbon monoxide (CO) levels in the garages, which regulates the necessary air renewal.	Air renewal controlled by carbon dioxide (CO2) levels on corporate floors.',
      /// Ventilation and exhaust system
      textventilationtitle: 'Ventilation and exhaust system',
      textventilationcontent: '•	At the common area of each floor, the building provides restrooms, janitor rooms for each four units on each floor with a mechanical ventilation system consisting of: duct network, shaft internally lined with galvanized sheet metal, motorized fire dampers, constant air flow dampers, and a monitoring and activation system through building automation.	An exhaust system is planned for one restroom and one sitting area in each unit on all floors.',
      /// Protection and fire fighting
      textfireFightintitle: 'Fire protection and fighting systems',
      textfireFightincontent: '•	Smoke control system for the corporate floors, consisting of air replenishment and monitoring, smoke extraction, and control of the entire fire detection and alarm system (FDPS).	The staircases are equipped with a pressurization system with EC-type fans and a duct network. The elevator lobbies are pressurized from the staircases through a grille connecting the areas, using the communicating vessels concept. The building includes two pressurized five-feet-wide emergency staircases.',
      /// Water reuse
      textwaterReusetitle: 'Water reuse',
      textwaterReusecontent: '•	Water reuse system for irrigation, sourced from the collection of air conditioning condensate and rainwater.',
      /// Sustainability
      textsustainabilitytitle: 'Sustainability',
      textsustainabilitycontent: '•	Water reuse system sourced from the collection of air conditioning condensate and rainwater.	ESG initiative includes the installation of individual meters for each unit to accurately measure water and electricity consumption;	LEED GOLD BD+C for Core and Shell v4.0: quality of the indoor environment and concern for the environment;	FITWEL* : Users’ health and well-being;	High incidence of natural light; LED lighting;	Promotion of bicycle use;	Electronic lighting control;	Use of high-performance energy-efficient glass; To reduce water usage, landscaping is composed of native plants that require minimal watering;	Energy regeneration system for elevators.',
      /// Construction differentials
      textdifferentialstitle: 'Construction differentials',
      textdifferentialscontent: '•	Additional space for the installation of two independent generators of up to 160 KVA each to meet tenants’ exclusive power generation needs (in compliance with regulatory standards - NRs);	Diesel generation system to meet 100% of the critical load, such as the fire pump, lighting, and security systems.	Floors with planters equipped with an automated irrigation system;	Service and emergency/stretcher-bed elevators;	High-speed elevators with early call system;	25th floor - Tenants might be able to set up a kitchen;	Possibility of integrating terraces and connecting floors through internal staircases;	High-quality materials and finishes, modern automation features, thermal and acoustic comfort, and state-of-the-art installations, among others;	Efficient glass: contributes to energy solutions, high performance, and better environmental comfort for users.',
      /// Telecommunication
      texttelecommunicationtitle: 'Telecommunication',
      texttelecommunicationcontent: '•	Structured cabling network infrastructure with fiber-optic backbone (2 points) to support: Digital telephony; IPTV system; Wi-Fi system; And all the electronic systems of the development.',
      /// Arquitetura & Interiores
      textaquitetura: 'Architeture & Interior',
      /// Paisagismo
      textpaisagismo: 'Landscaping',
      /// Luminotécnica
      textluminotecnica: 'Lighting',
    },

  Contact:
  //Contato form
  {
    title: 'Contact',
    selectmodal: 'How can we reach you?',
    label: 'Contact us to learn more about Biosquare São Paulo.',
    canal: '',
    nome: 'Name',
    email: 'E-mail',
    telefone: 'Telephone',
    mensagem: 'Message',
    textarea: 'Hello, I would like to receive more information about Biosquare.',
    lgpd1: 'I declare that I have read and accept',
    lgpd2: 'authorizing the receipt of marketing communications and the contact of a broker.',
    linklgpd: 'the Privacy Policy and cookies,',
    btn: 'More information',
  },

  Idealization:
    {
      textsectionidealization:'Concept',
      textesquerdatitle:'IRREPLICABLE',
      textdireitatitle:'AND UNIQUE',
      textesquerdacontentup:'With award-winning cases in Brazil and in the U.S G.D8 works in projects guided by innovation and excellence. We believe in the power of change through Architecture, enabling cities that foster mobility, safety and well-being.',
      textesquerdacontentbottom:'In this new project it was no different: over five years have been spent studying and acquiring plots for the birth of Biosquare São Paulo. A unique plot of land of 5.600 SQM, with the best partners engaged in designing with creativity, originality, and persistence, focused on the future of our city and on those who live, work and interact here.',
      textdireitacontentup:'There were many challenges to tackle: how to create an icon for our city, combining technology, design, sustainability, innovation and ellegance?',
      textdireitacontentbottom:'After many sketches, trend studies, global reports, with a team of professionals rigorously selected and with analytical curation. The feeling is that a legacy for Sao Paulo has been created, inspired by people: this is Biosquare São Paulo.',
    },

  Footer:
    {
      realization: 'Hosted by',
      realizationincorporation: 'Hosted and incorporated by',
      footerlgpd: 'The project is under development. All images and perspectives presented on the website are merely illustrative, including the vegetation that represents its adult size. The units will be delivered in Core & Shell, so the furniture and accessories are not part of the rental contract of the property. Material subject to change without notice.',
    },

  ModalTerms:
  {
    header: 'PRIVACY AND DATA PROTECTION POLICY',

    scope: 'SCOPE OF THIS POLICY',
    scopeText1: 'Dear User, please carefully read this Privacy and Data Protection Policy ("Policy") to fully understand the collection and processing of your Personal Data.',
    scopeText2: 'This Policy applies to users of the ',
    scopeText2Site: '("Site"), specific websites of our products ("Landing pages"), as well as to all customers, prospective customers and partners of G.D8 Incorporadora.',
    scopeText3: 'Therefore, it is important that you, as a user, to be aware of all the necessary information to make decisions regarding the provision, updating, management, and potential deletion of your Personal Data from our database.',
    scopeText4: 'This Policy may be periodically amended, as indicated at the end of this document.',

    // Personal Data
    personalData: 'HOW AND WHAT PERSONAL DATA WE COLLECT ABOUT YOU',

    personalDataText1: 'We may obtain your personal information in the following circumstances:',
    personalDataText2: 'Through your interactions with us and our services, such as when you sign up or register to receive advertising material from G.D8 Incorporadora, request information through our communication channels (website, telephone, email, etc.), visit our stands, interact with real estate agencies and/or broker partners of G.D8 Incorporadora, interact through our Site or through specific sites of our products ("Landing pages"), or engage in commercial agreements; and',
    personalDataText3: 'Through Cookies or other similar technologies. Further details regarding the use of cookies on our website can be found in the section "What Are Cookies and How We Use Them" of this Policy.',
    personalDataText4: 'We may collect the following types of Personal Data:',
    personalDataText5: 'G.D8 Incorporadora may collect the following Personal Data, according to each of the situations listed below:',

    personalDataLi1Strong: 'Registration Form on our Site or contact channels ("Contact"):  ',
    personalDataLi1: 'Full Name; Email address; and Contact phone number;',

    personalDataLi2Strong: 'Registration Form on specific Sites of our products ("Landing Pages"):  ',
    personalDataLi2: 'Full Name; Email address; and Contact phone number;',

    personalDataLi3Strong: 'Stands visitation forms: ',
    personalDataLi3: 'Full Name; Email address; and Contact phone number;',

    personalDataLi4Strong: 'Real States Agencies:',
    personalDataLi4: 'Name, address, email, contact phone number, CPF (Brazilian Social Security Number), RG (Brazilian ID), financial information, CRECI (real estate broker license, if applicable); ',

    personalDataLi5: 'Newsletter subscription form: Full Name and Email address',
    personalDataLi5Strong: ' (for future use )',

    personalDataLi6Strong: 'Partner broker registration form: ',
    personalDataLi6: 'Full Name, email, contact phone number, CRECI, professional information; ',

    personalDataText6: 'For users expressing interest in entering into a contract with G.D8 Incorporadora, the following additional data may be collected:',

    personalDataText7: 'Individuals',

    personalDataLi7: 'Copy of a valid Identity Document (such as RG, CNH, Professional Identity Card, etc.); ',
    personalDataLi8: 'Proof of marital status of the applicants and, for married individuals under the regime of Total Community Property, the Prenuptial Agreement Deed and respective registration;',
    personalDataLi9: 'Individual Taxpayer Registry (CPF); ',
    personalDataLi10: 'Declaration of Income Tax from the Previous Year; ',
    personalDataLi11: 'Bank details; and',
    personalDataLi12: 'Proof of income',
    personalDataLi12a1: 'If employed (CLT) - last three payslips;',
    personalDataLi12a2: 'If Self-Employed – personal bank statement for the last three months; and',
    personalDataLi12a3: 'If Retired / Pensioner – Last benefit statements issued by DATAPREV and Benefit concession letter. ',

    personalDataText8: 'Legal Entities',

    personalDataLi13: 'Last amendment Social Contract;',
    personalDataLi14: 'CNPJ Card (Brazilian corporate taxpayer registry); ',
    personalDataLi15: 'Copy of valid Identity Documents of partners (such as RG, CNH, Professional Identity Card, etc.); ',
    personalDataLi16: 'Proof of Marital Status of Partners;',
    personalDataLi17: 'Proof of Revenue for the last fiscal year:',
    personalDataLi17a1: 'ECF – Tax Accounting Bookkeeping (Escrituração Contábil Fiscal); ',
    personalDataLi17a2: 'DEFIS – Declaration of Socioeconomic and Fiscal Information;',
    personalDataLi17a3: 'DASN – Annual Declaration of Simplified Tax System ("Simples Nacional") – SIMEI – Individual Micro Entrepreneur.',
    personalDataLi18: 'Declaration of Fiscal Revenue for the last 12 months and tax regime, signed by the responsible accountant.',

    personalDataText9: 'Furthermore, when you interact with G.D8 Incorporadora through our Site or specific Sites of our products ("Landing pages"), data related to navigation may be collected, aimed at identifying and safeguarding information of our digital visitors, complying with legal obligations, and preventing fraud or any other risks associated with internet browsing, such as:',

    personalDataLi19: 'Access logs (IP. logs);',
    personalDataLi20: 'Device and software version used for navigation;',
    personalDataLi21: 'Records of date and time of access and length of stay;',
    personalDataLi22: 'Sections of the website accessed; and',
    personalDataLi23: 'Cookies and analytical data.',

    // Personal Data Use
    personalDataUse: 'PURPOSE OF THE COLLECTION AND USE OF YOUR PERSONAL DATA',

    personalDataUseText1: 'By registering or signing up, you authorize G.D8 Incorporadora to use your Personal Data for sending advertising material or information related to our projects, which may be subsequently revoked through the management of your data, as explained in the "Your Rights" section below.',
    personalDataUseText2: 'For users entering into a commercial contract with G.D8 Incorporadora, the Personal Data collected is intended for feasibility analysis (credit analysis) and execution of this contract, in which you will be a party, as well as for managing our relationship, addressing your requests, and improving our services.',

    // Data Sharing
    personalDataSharing: 'DATA SHARING',

    personalDataSharingText1: 'G.D8 Incorporadora may share users` Personal Data in the following circumstances:',

    personalDataSharingLi1Strong: 'Commercial Partnerships:  ',
    personalDataSharingLi1: 'Incorporadora may share your Personal Data with commercial partners, such as Special Purpose Entities (SPEs), established for the implementation of our projects; we may also share your data with real estate agencies and property brokers to facilitate the offering of certain products or services or special conditions for you. ',
    personalDataSharingLi2Strong: 'Public Authorities: ',
    personalDataSharingLi2: 'G.D8 Incorporadora complies with the terms of the Brazilian Laws. This means that your Personal Data will be shared with competent judicial, administrative or governmental authorities, if there is a legal determination, application, request or court order.',

    // Data Storage Period
    personalDataStorage: 'HOW LONG WE STORE YOUR DATA',

    personalDataStorageText1: 'Your Personal Data will be collected, processed, and stored by G.D8 Incorporadora for the time necessary to fulfill legal, contractual, and commercial purposes, including the duration of your relationship with us. ',
    personalDataStorageText2: 'Furthermore, G.D8 Incorporadora may retain your Personal Data for a period beyond the termination of the relationship if there are any pending legal, contractual, or commercial obligations (such as for internal audit purposes, to meet regulatory requirements related to information retention, or to respond to requests from government authorities), and the time needed to support any legal actions.',

    // Data Usage Cookies
    personalDataUsageCookies: 'WHAT ARE COOKIES AND HOW WE USE THEM',

    personalDataUsageCookiesText1: 'A cookie is a small file stored on your device or computer when accessing websites. This file is widely used to enhance website functionality, provide a personalized user experience, and send some user information to site owners.',
    personalDataUsageCookiesText2: 'In other words, cookies are intended to recognize and tailor your browsing according to your preferences on our website, occupying minimal space in your mobile device`s memory or computer`s hard drive. Cookies allow G.D8 Incorporadora to acknowledge previous visits to our website and retain essential information, thereby facilitating the use of our platforms and making the experience more efficient and enjoyable.',
    personalDataUsageCookiesText3: 'Below are the categories of cookies used, according to their function:',

    personalDataUsageCookiesLi1Strong: 'Essential  Cookies:',
    personalDataUsageCookiesLi1: 'These are strictly necessary cookies for the operation of G.D8 Incorporadora`s website, allowing seamless navigation and utilization of its features. As they are indispensable for browsing our Site, their usage cannot be disabled;',

    personalDataUsageCookiesLi2Strong: 'Analytical Cookies:',
    personalDataUsageCookiesLi2: 'These cookies help us understand how visiting users interact with our website, providing information about the areas visited, the time spent on the site, and any issues encountered;',

    personalDataUsageCookiesLi3Strong: 'Functional Cookies:',
    personalDataUsageCookiesLi3: 'These cookies enable us to remember your past preferences, such as language selection, thereby delivering a personalized user experience; and ',

    personalDataUsageCookiesLi4Strong: 'Advertising Cookies:',
    personalDataUsageCookiesLi4: 'These cookies are employed to deliver more relevant and tailored content based on users` interests, including their browsing habits. They facilitate the presentation of advertisements that align more closely with each user`s profile. ',

    personalDataUsageCookiesText4: 'You can manage Site Cookies ( except ',
    personalDataUsageCookiesText4Strong: 'Essential Cookies',
    personalDataUsageCookiesText4a2: ') by adjusting settings directly within your browser to accept, reject, or disable cookies. However, modifying these settings may result in certain site functions and features not operating as intended, thereby impacting your browsing experience.',

    // Data Rights
    personalDataRights: 'YOUR RIGHTS',

    personalDataRightsText1: 'G.D8 Incorporadora fully complies with Data Protection Laws. Therefore, we emphasize that you, as a user, have the following rights regarding the processing and protection of your Personal Data:',

    personalDataRightsLi1: 'Request access to your collected Personal Data;',
    personalDataRightsLi2: 'Correction/Alteration of incomplete, inaccurate or outdated Personal Data;',
    personalDataRightsLi3: 'Withdrawal of consent and request for deletion of your Personal Data from our database; ',
    personalDataRightsLi4: 'Request anonymization of your personal data so that they can no longer be related to you and, therefore, cease to be Personal Data;',
    personalDataRightsLi5: 'Request more information about which Personal Data of our users is shared and with which of our partners;',
    personalDataRightsLi6: 'Request information about the possibility and consequences of not providing consent for the collection and processing of your Data. Your consent, when required, must be freely given and informed, so whenever we ask for your consent, you will be free to deny it – however, it is worth noting that in these cases, some services may not be provided by G.D8 Incorporadora; and',
    personalDataRightsLi7: 'Request portability of your Personal Data to another service or product provider, upon express request, in accordance with the regulations of the National Data Protection Authority (ANPD), subject to commercial and industrial secrets.',

    personalDataRightsText2: 'All requests will undergo prior assessment of your identity and the feasibility of fulfillment, to ensure compliance with any obligations that may prevent the complete fulfillment of the requests of the data subjects. ',

    // Data Updates & Protection
    personalDataUpdate: 'CHANGES TO OUR PRIVACY AND DATA PROTECTION POLICY',

    personalDataUpdateText1: 'We reserve the right to amend our practices and this Policy at any time. The verification of any changes, updates, and modifications will occur through new access to be carried out by users. ',
    personalDataUpdateText2: 'Last updated: 17 November, 2023.',

    // Contact
    personalDataContact: 'CONTACT',

    personalDataContactText1: 'If you have any questions, comments, requests, or concerns regarding how we handle your Personal Data and this Policy, please contact us via email at ',
  },
}
