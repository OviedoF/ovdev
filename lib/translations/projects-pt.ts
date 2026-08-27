import type { ProjectI18n } from './types'

export const pt: Record<string, ProjectI18n> = {
  'cap-medical': {
    subtitle: 'App mobile para gerenciar serviços médicos e cirurgias',
    categories: 'App Movel • React Native • Multi-Modulo',
    description:
      'App mobile para uma empresa que administra serviços cirúrgicos. Pelo celular se criam serviços em três etapas, se acompanha o status, se registram movimentações com localização GPS e anexos, e se lançam pagamentos e contra recibos. Também tem diretório de técnicos, hospitais e centros médicos, prontuários de pacientes e notificações. As permissões dependem da função de cada usuário.',
    features: [
      {
        title: 'Gestao de Servicos',
        items: [
          'Listagem com filtro por status e busca',
          'Criacao em 3 etapas com catalogos dinamicos',
          'Movimentacoes com geolocalizacao GPS e anexos',
          'Pagamentos, contra recibos e historico de alteracoes',
        ],
      },
      {
        title: 'Diretorio de Tecnicos',
        items: [
          'Diretorio pesquisavel com agrupamento alfabetico',
          'Filtro por funcao (auxiliar, titular)',
          'Perfil detalhado com dados profissionais',
        ],
      },
      {
        title: 'Gestao de Localizacoes',
        items: [
          'Hospitais e centros medicos com busca',
          'Detalhes completos com endereco e contato',
          'Filtro por status ativo/inativo',
        ],
      },
    ],
    integrationUses: [
      'Mapas interativos para localizacoes de hospitais e servicos',
      'Coordenadas GPS ao registrar movimentacoes',
      'Captura de fotos e video para anexar a prontuarios',
      'Geracao de codigos QR',
      'Graficos e visualizacao de dados',
    ],
    highlights: [
      'Permissões por função',
      'Cadastro de serviços em 3 etapas com catálogos dinâmicos',
      '10 telas para cada serviço',
      'Movimentações com localização GPS automática',
      'Histórico de todas as alterações',
      'Todo o app em TypeScript',
    ],
  },
  'petnder': {
    subtitle: 'App para donos de pets, com adoção e serviços por perto',
    categories: 'App Movel • React Native • Marketplace Pet',
    description:
      'É um app mobile para quem tem pet. Dá para buscar serviços pet-friendly por categoria, adotar animais com filtros e chat, e reportar pets perdidos com localização. As empresas entram com outro perfil, com navegação própria, para cadastrar serviços com mapa e horários, criar cupons com QR e ver estatísticas. Tem chat em tempo real, notificações push e comunidades com funções e moderação.',
    features: [
      {
        title: 'Para Usuarios',
        items: [
          'Explorar servicos pet-friendly por categorias',
          'Adocao de animais com filtros e chat',
          'Relatos de animais perdidos com localizacao',
          'Beneficios, cupons e fundacoes',
        ],
      },
      {
        title: 'Para Empresas',
        items: [
          'Gestao de servicos com mapas e horarios',
          'Cupons com QR e estatisticas de uso',
          'Carteira digital com saldo e historico',
          'Comunidades com funcoes e moderacao',
        ],
      },
      {
        title: 'Geral',
        items: [
          'Onboarding animado com Reanimated',
          'Chat em tempo real',
          'Notificacoes push',
          'Mapas integrados com Google Maps',
        ],
      },
    ],
    integrationUses: [
      'Localizacao de servicos e seletor de posicao',
      'Alertas push sobre adocoes e mensagens',
      'Codigos QR para cupons e descontos',
      'Estatisticas de negocio e desempenho',
    ],
    highlights: [
      'Dois perfis separados, um para usuários e outro para empresas',
      'Adoção com filtros e chat entre as partes',
      'Comunidades com funções e moderação de conteúdo',
      'Carteira digital com saldo e histórico para empresas',
      'Conquistas para gamificar o uso',
      'Onboarding animado com Reanimated',
    ],
  },
  'controla2': {
    subtitle: 'ERP para empresas de construção e engenharia no Chile',
    categories: 'SaaS • ERP • Faturamento Eletronico',
    description:
      'É um ERP web pensado para construtoras e empresas de engenharia que querem ter tudo num lugar só. Cobre projetos com orçamentos e Gantt, RH com cálculo de folha, faturamento eletrônico, compras, estoque e prevenção de riscos. Está adaptado à legislação chilena (AFP, ISAPRE, DTE, RUT) e tem oito funções com fluxos de aprovação.',
    features: [
      {
        title: 'Projetos e Planejamento',
        items: [
          'Orcamentos e cronogramas Gantt interativos',
          'Acompanhamento de avanco e controle de desvios',
          'Escritorio tecnico com horas-homem e producao',
        ],
      },
      {
        title: 'RH e Folha de Pagamento',
        items: [
          'Ciclo completo do colaborador',
          'Calculo automatico de folha (AFP, ISAPRE)',
          'Ferias, adiantamentos e rescisoes',
        ],
      },
      {
        title: 'Faturamento e Compras',
        items: [
          'Documentos tributarios eletronicos',
          'Fluxo completo de compras e cotacoes',
          'Controle de estoque com rastreabilidade',
        ],
      },
    ],
    integrationUses: [
      'Infraestrutura e hospedagem do sistema',
      'Faturamento eletronico com legislacao chilena',
      'Alertas em fluxos de aprovacao',
    ],
    highlights: [
      'Dashboard com métricas em tempo real',
      'Gera PDF, Excel e CSV automaticamente',
      '8 funções predefinidas com fluxos de aprovação',
      'Adaptado à legislação chilena (AFP, ISAPRE, DTE, RUT)',
      'Módulo SSOMA para prevenção de riscos',
      'Aviso na hora quando tem algo para aprovar',
    ],
  },
  'alhambra': {
    subtitle: 'Site para guias turísticos da Alhambra, em 7 idiomas',
    categories: 'Web App • Turismo • Painel Admin • Multilingue',
    description:
      'Site para uma empresa de guias turísticos de Granada, Espanha, que faz visitas à Alhambra. Cada circuito tem sua página, as reservas chegam por e-mail a partir de um formulário e tem contato direto por WhatsApp. É traduzido automaticamente para 7 idiomas. O dono gerencia circuitos e blog pelo painel, e edita os textos clicando neles na própria página.',
    features: [
      {
        title: 'Para o Visitante',
        items: [
          'Exploracao de circuitos turisticos com paginas dedicadas',
          'Sistema de reservas integrado com formulario completo',
          'Blog de noticias com conteudo enriquecido',
          'Traducao automatica para 7 idiomas',
          'Contato direto por WhatsApp',
        ],
      },
      {
        title: 'Painel de Administracao',
        items: [
          'Gestao de circuitos com editor enriquecido',
          'Gestao do blog com imagens e formatacao avancada',
          'Edicao de textos ao vivo clicando sobre eles',
          'Sistema de acesso seguro',
        ],
      },
    ],
    integrationUses: [
      'Contato direto com um clique',
      'Recepcao de reservas por e-mail',
      'Traducao automatica para multiplos idiomas',
      'Link e banner para o perfil da empresa',
      'Integracao com o perfil do guia',
    ],
    highlights: [
      'Todo o conteúdo é administrado sem ajuda técnica',
      'Textos editáveis clicando na página',
      'Renderização no servidor para SEO',
      '7 idiomas para turismo internacional',
      'Reservas por e-mail e contato por WhatsApp',
      'JWT, senhas criptografadas e funções',
    ],
  },
  'biznes-empresa': {
    subtitle: 'Cartões digitais para todos os funcionários de uma empresa',
    categories: 'Web App • SaaS • Cartoes Digitais • Funcoes',
    description:
      'Versão corporativa do Biznes. Uma empresa se cadastra com seu logo e branding, convida os funcionários por e-mail ou com um Excel, e monta cartões digitais para eles a partir de templates com a identidade da marca. Cada cartão tem seu QR, vCard e link próprio. As funções definem quem pode editar o quê, e as estatísticas de visitas, cliques e downloads aparecem todas juntas em gráficos.',
    features: [
      {
        title: 'Gestao Corporativa',
        items: [
          'Registro e perfil de empresa com logo e branding',
          'Convite de funcionarios por e-mail ou Excel em massa',
          'Funcoes personalizadas com permissoes granulares',
          'Assinaturas empresariais com limites configuraveis',
        ],
      },
      {
        title: 'Cartoes Digitais',
        items: [
          'Templates corporativos com design de marca',
          'Editor visual completo com pre-visualizacao em tempo real',
          'Codigo QR automatico e vCard para download',
          'Link personalizado para cada cartao',
        ],
      },
      {
        title: 'Estatisticas',
        items: [
          'Visitas por cartao com detalhamento por dispositivo',
          'Cliques em redes sociais e e-mail',
          'Downloads de vCard e contatos adicionados',
          'Graficos interativos (barras, linhas, pizza)',
        ],
      },
    ],
    integrationUses: [
      'Convites por e-mail e notificacoes',
      'Geracao automatica de codigos QR',
      'Arquivos de contato para download',
      'Comunicacao em tempo real',
      'Graficos interativos para estatisticas',
      'Otimizacao de imagens para WebP',
    ],
    highlights: [
      'Toda a gestão corporativa a partir de um único painel',
      'Templates com a marca aplicados sozinhos',
      'Funções e permissões por funcionário',
      'Cadastro em massa de funcionários a partir de Excel',
      'Estatísticas de todos os cartões em gráficos',
      'Atualizações em tempo real com WebSockets',
    ],
  },
  'blackphone': {
    subtitle: 'Site para uma assistência técnica de celulares na Espanha',
    categories: 'Web App • E-commerce • WhatsApp Bot • Painel Admin',
    description:
      'Site e sistema de gestão para uma assistência técnica de celulares na Espanha. O cliente escolhe modelo e defeitos, vê o preço na hora e depois acompanha o conserto com um código de 5 dígitos. Cada mudança de status chega por e-mail e WhatsApp. Tem um fluxo separado para atacadistas, com aprovação e pedidos em volume, e um painel para gerenciar preços, modelos, defeitos, status e o blog.',
    features: [
      {
        title: 'Para o Cliente',
        items: [
          'Cotador automatico de reparos por modelo e defeito',
          'Selecao multipla de defeitos com preco em tempo real',
          'Acompanhamento de reparo com codigo de 5 digitos',
          'Notificacoes automaticas por e-mail e WhatsApp',
        ],
      },
      {
        title: 'Sistema de Atacadistas',
        items: [
          'Registro e aprovacao de empresas atacadistas',
          'Solicitacoes de reparo em volume',
          'Acompanhamento independente com codigo proprio',
          'Precos diferenciados por zona',
        ],
      },
      {
        title: 'Painel de Administracao',
        items: [
          'Tabela de precos dinamica com drag & drop',
          'Gestao de categorias, marcas, modelos e defeitos',
          'Status de reparo personalizados com notificacoes',
          'Blog com editor enriquecido e conteudo editavel',
          'Exportacao para PDF de tabelas de precos',
        ],
      },
    ],
    integrationUses: [
      'Mensagens automaticas ao criar pedido ou alterar status',
      'E-mails com templates HTML para cliente e admin',
      'PDFs para download com tabelas de precos',
      'Avaliacoes reais de clientes na home',
      'Drag & drop para reordenar modelos',
    ],
    highlights: [
      'Cotação por modelo, defeito e zona',
      'Avisos por e-mail e WhatsApp em cada mudança de status',
      'Bot de WhatsApp próprio, sem serviços pagos',
      'Atacadistas com fluxo de pedidos próprio',
      'Tabela de preços editável e exportável para PDF',
      'Províncias e cidades reais da Espanha',
    ],
  },
  'casepe': {
    subtitle: 'Site institucional de uma câmara petrolífera, editável ao vivo',
    categories: 'Web Institucional • CMS ao Vivo • Blog • Next.js 14',
    description:
      'Site para a CASEPE, a câmara que reúne empresas de operações petrolíferas especiais na Argentina. O diferente é que não tem um painel separado para o conteúdo. Quando o administrador está logado, ele clica em qualquer texto ou imagem da página e muda ali mesmo, e também pode adicionar ou tirar itens de cada seção. Tem blog de notícias com artigos relacionados e formulário de contato que chega por e-mail.',
    features: [
      {
        title: 'Para o Visitante',
        items: [
          'Hero com imagem de fundo e secao institucional com galeria',
          'Servicos interativos com navegacao por itens',
          'Historia, visao, compromisso ambiental e localidades',
          'Blog de noticias com artigos relacionados',
          'Formulario de contato com envio automatico de e-mail',
        ],
      },
      {
        title: 'Edicao ao Vivo',
        items: [
          'Textos editaveis clicando diretamente na pagina',
          'Imagens substituiveis sem sair da pagina',
          'Adicionar e remover itens em qualquer secao',
          'Editor de texto enriquecido integrado',
        ],
      },
      {
        title: 'Painel de Administracao',
        items: [
          'Gestao do blog com editor enriquecido',
          'Tags e artigos relacionados',
          'Login seguro',
        ],
      },
    ],
    integrationUses: [
      'Mensagens de contato com template HTML profissional',
      'Animacoes de aparicao ao rolar a pagina',
      'Navegacao suave ate as secoes',
      'Editor de texto enriquecido para conteudo inline',
    ],
    highlights: [
      'Edição ao vivo, sem painel separado',
      'Propriedades aninhadas atualizáveis com Lodash',
      'Seções onde se adicionam e removem itens pelo site',
      'Blog com tags e artigos relacionados',
      'E-mails de contato com template HTML',
      'Animações ao rolar em todas as seções',
    ],
  },
  'dental-digital': {
    subtitle: 'Sistema de gestão para clínicas odontológicas, com faturamento AFIP',
    categories: 'SaaS • Faturamento AFIP • Odontograma • Mercado Pago',
    description:
      'É um SaaS para dentistas e clínicas da Argentina. Tem fichas de pacientes com convênio, consultas num calendário, odontograma por dente, orçamentos que viram fatura e consentimentos com assinatura digital. Emite fatura eletrônica com ARCA/AFIP (A, B e C, com notas de crédito e débito) e manda o PDF por e-mail ou WhatsApp. As assinaturas são cobradas com Mercado Pago e cada clínica pode ter vários profissionais com funções.',
    features: [
      {
        title: 'Gestao Clinica',
        items: [
          'Ficha completa de pacientes com convenio',
          'Calendario interativo com visualizacoes mensal, semanal e diaria',
          'Odontograma visual com registro por dente e exportacao PDF',
          'Orcamentos detalhados conversiveis em fatura',
          'Documentos de consentimento com assinatura digital',
        ],
      },
      {
        title: 'Faturamento Eletronico',
        items: [
          'Emissao de Faturas, NC e ND tipo A, B e C com ARCA/AFIP',
          'CAE automatico e calculo de IVA (0%, 10,5%, 21%, 27%)',
          'Geracao de certificados RSA e CSR para AFIP',
          'PDF de fatura com envio por e-mail e WhatsApp',
        ],
      },
      {
        title: 'SaaS e Administracao',
        items: [
          'Assinaturas mensais/anuais com Mercado Pago',
          'Multiplas clinicas e profissionais com funcoes',
          'Dashboard com graficos Chart.js',
          'Backup completo e restauracao inteligente',
        ],
      },
    ],
    integrationUses: [
      'Faturamento eletronico com CAE valido',
      'Assinaturas recorrentes com webhooks automaticos',
      'Envio de faturas e notificacoes por WhatsApp',
      'E-mails com faturas PDF e verificacao de senha',
      'Graficos de tratamentos, orcamentos e consultas',
      'Calendario interativo de consultas',
      'Exportacao de odontograma para PDF',
    ],
    highlights: [
      'Fatura eletrônica com ARCA/AFIP e CAE',
      'Gera os certificados RSA e CSR para vincular com a AFIP',
      'Odontograma por dente com exportação para PDF',
      'Assinaturas com Mercado Pago e webhooks',
      'Vários usuários por clínica com funções de dono, profissional e administrador',
      'Backup completo em JSON com restauração',
    ],
  },
  'sunchales-pos': {
    subtitle: 'Gestão comercial e ponto de venda com faturamento AFIP',
    categories: 'SaaS • POS • Faturamento AFIP • Codigo de Barras',
    description:
      'Sistema web de gestão comercial para negócios da Argentina. Você cadastra produtos com código de barras, registra vendas e compras, e controla o estoque e as matérias-primas. Emite fatura eletrônica com ARCA/AFIP, converte orçamentos em vendas e cuida de garantias e devoluções. O acesso é cobrado por assinatura com Mercado Pago.',
    features: [
      {
        title: 'Vendas e Faturamento',
        items: [
          'Registro de vendas com calculo automatico de IVA',
          'Venda rapida sem cliente cadastrado',
          'Faturamento eletronico com ARCA/AFIP e CAE',
          'Conversao de orcamento em venda diretamente',
          'PDF de fatura com envio por e-mail',
        ],
      },
      {
        title: 'Produtos e Estoque',
        items: [
          'Catalogo com codigo de barras por produto',
          'Controle de estoque atualizado em tempo real',
          'Materias-primas com inventario independente',
          'Produtos fisicos e servicos diferenciados',
        ],
      },
      {
        title: 'Gestao Comercial',
        items: [
          'Fichas completas de clientes e fornecedores',
          'Orcamentos com status e validade configuravel',
          'Sistema de garantias e devolucoes (RMA)',
          'Dashboard com graficos de vendas e compras',
        ],
      },
    ],
    integrationUses: [
      'Faturamento eletronico com CAE valido',
      'Assinaturas recorrentes para acesso ao sistema',
      'E-mails com faturas PDF e notificacoes de envio',
      'Graficos de vendas, compras e relatorios',
      'Geracao e visualizacao de codigos de barras',
      'Impressao direta de faturas e etiquetas',
      'Geracao de PDFs de faturas e orcamentos',
    ],
    highlights: [
      'Compras, estoque, vendas, faturamento e relatórios num lugar só',
      'Fatura eletrônica com ARCA/AFIP e CAE',
      'Códigos de barras gerados e lidos pelo sistema',
      'Garantias e devoluções (RMA) com acompanhamento',
      'Orçamentos que viram vendas',
      'SMTP configurável por usuário para enviar faturas',
    ],
  },
  'fuku-shop': {
    subtitle: 'Loja online de roupas anime e urbanas, de Rafaela',
    categories: 'E-commerce • Next.js • Mercado Pago • Cloudinary',
    description:
      'Loja online para uma marca de roupas de Rafaela, Santa Fe, com estilo anime, asiático e de videogames. Cada produto tem variantes por cor com fotos próprias, tabela de tamanhos com medidas reais e zoom na galeria. Dá para filtrar por categoria, tipo, cor, tamanho e preço, pagar com Mercado Pago, e o usuário tem histórico, endereços e avaliações. O painel permite cadastrar todo o catálogo.',
    features: [
      {
        title: 'Loja Online',
        items: [
          'Catalogo com filtros combinados (categoria, tipo, cor, tamanho, preco)',
          'Variantes por cor com imagens proprias (frente, verso, corpo)',
          'Zoom de imagem ao passar o cursor',
          'Tabela de tamanhos com medidas reais',
          'Carrinho de compras e checkout com Mercado Pago',
        ],
      },
      {
        title: 'Conta de Usuario',
        items: [
          'Cadastro e login com e-mail ou Google',
          'Historico de compras',
          'Multiplos enderecos de entrega',
          'Avaliacoes e classificacoes de produtos',
          'Notificacoes internas',
        ],
      },
      {
        title: 'Painel de Administracao',
        items: [
          'CRUD de produtos com variantes de cor e imagens',
          'Gestao de cores com codigo hexadecimal',
          'Categorias, subcategorias, tipos e subtipos de peca',
          'Tamanhos com medidas configuraveis',
        ],
      },
    ],
    integrationUses: [
      'Processamento de pagamentos para compras',
      'Armazenamento e otimizacao de imagens na nuvem',
      'Comunicacao em tempo real',
      'Mensagens de contato por e-mail',
      'Estado global (carrinho, autenticacao, filtros)',
      'Cache inteligente de dados do servidor',
      'Geracao automatica de sitemap XML para SEO',
    ],
    highlights: [
      'Variantes por cor com fotos independentes',
      'Filtros combinados por categoria, tipo, cor, tamanho e preço',
      'Geração estática com revalidação incremental para SEO',
      'Sitemap XML gerado automaticamente',
      'Imagens no Cloudinary',
      'Categorias com subcategorias, tipos e subtipos',
    ],
  },
  'julian-winners': {
    subtitle: 'Rifas online com tickets digitais e pagamento pelo Mercado Pago',
    categories: 'Web App • Rifas • Mercado Pago • Indicacoes',
    description:
      'Plataforma para vender tickets de rifas online na Colômbia. O usuário compra pacotes de tickets com Mercado Pago, recebe números aleatórios sem repetição e a fatura em PDF chega por e-mail. Tem carrinho para várias rifas, indicações com pontos, moderadores que atribuem tickets manualmente para vendas presenciais e uma ferramenta para escolher o ganhador pelo número. Os textos, imagens e até as credenciais do Mercado Pago e do SMTP são configurados pelo painel.',
    features: [
      {
        title: 'Para o Usuario',
        items: [
          'Catalogo de rifas com pacotes de tickets e precos',
          'Carrinho de compras com pacotes de multiplas rifas',
          'Numeros de ticket gerados aleatoriamente sem repeticoes',
          'Fatura PDF por e-mail com detalhes dos tickets',
          'Sistema de indicacoes com link e acumulo de pontos',
        ],
      },
      {
        title: 'Painel de Administracao',
        items: [
          'Gestao de rifas com pacotes, imagens e destaques',
          'Atribuicao manual de tickets (vendas presenciais)',
          'Selecao de ganhador buscando numero do ticket',
          'Historico de compras com exportacao para Excel',
          'Moderadores para vendas presenciais',
        ],
      },
      {
        title: 'Conteudo Editavel',
        items: [
          'Textos, imagens e dados do negocio editaveis',
          'Configuracao de Mercado Pago e SMTP pelo painel',
          'Termos e condicoes editaveis',
        ],
      },
    ],
    integrationUses: [
      'Pagamentos com webhooks para atribuicao automatica de tickets',
      'Faturas por e-mail com template HTML e link para PDF',
      'Geracao de faturas PDF para download',
      'Exportacao de usuarios e historico para Excel',
      'Estado global (carrinho, usuario, rifas)',
    ],
    highlights: [
      'Tickets aleatórios sem repetição, com formato conforme o total da rifa',
      'Webhooks do Mercado Pago com controle de duplicados',
      'Atribuição manual por moderadores para vendas presenciais',
      'Ganhador escolhido pelo número do ticket',
      'Exportação para Excel de usuários, compras e faturas',
      'Três funções: usuário, moderador e administrador',
    ],
  },
  'limcal': {
    subtitle: 'Loja online atacadista de produtos de limpeza',
    categories: 'E-commerce • Mercado Pago • Revendedores • CMS',
    description:
      'Loja online para a LIMCAL, uma empresa argentina de produtos de limpeza que vende para comércios. As contas são cadastradas com CUIT e alguém da equipe aprova antes de poder comprar. Cada produto tem uma compra mínima, o pagamento vai por Mercado Pago e o pedido é registrado sozinho com o webhook. Tem um mapa de revendedores com Google Maps filtrável por província e cidade, e o conteúdo do site é editado pelo painel.',
    features: [
      {
        title: 'Loja Online',
        items: [
          'Catalogo paginado com filtros por categoria e busca',
          'Compra minima configuravel por produto',
          'Carrinho com multiplos enderecos de entrega',
          'Pagamento com Mercado Pago e registro automatico via webhook',
          'Acompanhamento de pedidos com notificacao por e-mail',
        ],
      },
      {
        title: 'Revendedores',
        items: [
          'Mapa de revendedores com Google Maps integrado',
          'Filtro por estado, cidade e nome',
          'Pagina informativa para novos revendedores',
        ],
      },
      {
        title: 'Painel de Administracao',
        items: [
          'Gestao de produtos, categorias e pedidos',
          'Aprovacao manual de contas de usuarios',
          'Mensagens de contato com resposta direta por e-mail',
          'Conteudo editavel com Lodash para propriedades aninhadas',
          'Moderadores com permissoes diferenciadas',
        ],
      },
    ],
    integrationUses: [
      'Pagamentos do carrinho com webhooks automaticos (ARS)',
      'Contato, respostas ao cliente e notificacoes de pedidos',
      'Mapa integrado em cada revendedor',
      'Acompanhamento de visitas e comportamento',
      'Editor enriquecido para politicas e secoes',
      'Animacoes de aparicao ao rolar a pagina',
    ],
    highlights: [
      'Contas aprovadas manualmente antes de poder comprar',
      'Compra mínima por produto, pensada para venda no atacado',
      'Mapa de revendedores com Google Maps, filtrável por zona',
      'Resposta às mensagens de contato pelo painel',
      'Conteúdo editável com propriedades aninhadas',
      'Pedidos registrados automaticamente com webhooks do Mercado Pago',
    ],
  },
  'limcal-pos': {
    subtitle: 'Sistema desktop de vendas e faturamento, com Electron',
    categories: 'Desktop App • Electron • Faturamento AFIP • IndexedDB',
    description:
      'Programa desktop para a gestão comercial da LIMCAL, que substituiu um sistema antigo em FoxPro. Gerencia produtos, vendas, compras, estoque, matérias-primas e revendedores com comissão ou desconto. Emite fatura A e B com ARCA/AFIP, notas de crédito, guias de remessa em PDF e livro IVA. O banco de dados é local com IndexedDB, então funciona sem servidor nem conexão.',
    features: [
      {
        title: 'Vendas e Faturamento',
        items: [
          'Faturamento eletronico Fatura A e B com ARCA/AFIP',
          'Notas de Credito tipo A e B associadas a faturas',
          'Geracao de guias de remessa em PDF para download',
          'Livro IVA de vendas e compras',
          'Descontos automaticos por revendedor e por cliente',
        ],
      },
      {
        title: 'Gestao Comercial',
        items: [
          'Importacao em massa de produtos a partir de Excel',
          'Alteracao de precos em massa',
          'Controle de estoque e materias-primas',
          'Revendedores com desconto ou comissao configuravel',
          'Estatisticas por dia, cliente, produto e cruzamento',
        ],
      },
      {
        title: 'Sistema',
        items: [
          'Banco de dados local com IndexedDB (sem servidor)',
          'Usuarios com funcoes e permissoes configuraveis',
          'Backup completo em JSON e restauracao',
          'Migracao a partir de FoxPro (Husky POS)',
        ],
      },
    ],
    integrationUses: [
      'Faturamento eletronico com CAE (Fatura A/B, NC A/B)',
      'Banco de dados local sem servidor externo',
      'Importacao e exportacao de produtos e dados',
      'Faturas, notas de credito e guias de remessa em PDF',
      'Download de backups, PDFs e arquivos Excel',
    ],
    highlights: [
      'App desktop com Electron, funciona sem conexão',
      'Banco de dados local com IndexedDB',
      'Fatura A e B e notas de crédito com AFIP',
      'Desconto ou comissão por revendedor aplicados ao faturar',
      'Importação de produtos e alteração de preços em massa a partir de Excel',
      'Migração de dados do FoxPro (Husky POS)',
    ],
  },
  'movilprint': {
    subtitle: 'Editor online de designs para mandar imprimir',
    categories: 'Web App • Editor Visual • Drag & Drop • Login Social',
    description:
      'Site para montar designs personalizados e mandar imprimir. O usuário escolhe um template e entra num editor onde arrasta textos com mais de 15 fontes, imagens e elementos decorativos, redimensiona, gira e organiza em camadas. Quando termina, envia o design e ele fica salvo na conta. Tem login com Google e Facebook, pontos de fidelidade e um painel para gerenciar templates e revisar os designs que chegam.',
    features: [
      {
        title: 'Editor Visual',
        items: [
          'Tela interativa com arrastar e soltar',
          'Textos com +15 fontes, tamanho, cor, negrito, italico',
          'Imagens e elementos decorativos por template',
          'Redimensionar, rotacionar, copiar e colar elementos',
          'Sistema de camadas (z-index) para profundidade',
          'Pre-visualizacao e impressao direta pelo navegador',
        ],
      },
      {
        title: 'Para o Usuario',
        items: [
          'Cadastro com e-mail, Google ou Facebook',
          'Selecao de template com pre-visualizacao',
          'Meus designs salvos com historico',
          'Sistema de pontos de fidelizacao',
          'Recuperacao de senha por e-mail',
        ],
      },
      {
        title: 'Painel de Administracao',
        items: [
          'Gestao de templates com dimensoes em cm',
          'Recursos por template (formas e imagens)',
          'Gestao de designs recebidos',
          'Moderadores para revisao de designs',
        ],
      },
    ],
    integrationUses: [
      'Login com conta Google',
      'Login com conta Facebook via Graph API',
      'Processamento de pagamentos',
      'Codigos de verificacao para recuperacao de senha',
      'Arrastar e soltar elementos no editor',
    ],
    highlights: [
      'Editor com tela interativa e drag and drop',
      'Templates com dimensões em cm e recursos próprios',
      'Mais de 15 fontes com controle de estilos',
      'Camadas para organizar a profundidade dos elementos',
      'Login com Google e Facebook',
      'Designs salvos no banco de dados com todos os elementos',
    ],
  },
  'padel': {
    subtitle: 'Torneios, resultados e ranking de padel',
    categories: 'Web App • Esportes • Ranking • Next.js 15',
    description:
      'Site para organizar e acompanhar torneios de padel. O público vê o calendário de torneios, o circuito por categoria, os resultados partida por partida com sets e o ranking por gênero e categoria. Também pode buscar um jogador e ver a posição dele. Um moderador cadastra as partidas e os resultados, e o administrador gerencia torneios, jogadores, clubes e categorias.',
    features: [
      {
        title: 'Para o Publico',
        items: [
          'Calendario de torneios com localizacao e contato',
          'Circuito organizado por categoria com todas as datas',
          'Resultados de torneios com partidas e sets',
          'Ranking de jogadores por categoria e genero',
          'Busca de jogador com posicao e top 5',
        ],
      },
      {
        title: 'Painel de Administracao',
        items: [
          'Gestao de torneios com data, genero e categoria',
          'Gestao de jogadores com clube, categoria e pontos',
          'Gestao de categorias e clubes',
          'Administracao de usuarios com funcoes',
        ],
      },
      {
        title: 'Painel de Moderador',
        items: [
          'Insercao de partidas com equipes e resultados por sets',
          'Edicao de partidas existentes',
          'Criacao de jogadores e torneios',
        ],
      },
    ],
    integrationUses: [],
    highlights: [
      'Circuito montado automaticamente por categoria',
      'Ranking por categoria e gênero que se atualiza sozinho',
      'Partidas individuais e por equipes com resultado por sets',
      'O status do torneio muda conforme as partidas cadastradas',
      'Três níveis de acesso: público, moderador e administrador',
      'Categorias com exclusão lógica para poder restaurar',
    ],
  },
  '4me': {
    subtitle: 'Escaneamento 3D de pés e calçados ortopédicos sob medida',
    categories: 'App Movel • Web Admin • Escaneamento 3D • Stripe',
    description:
      'Sistema para podólogos que fazem calçados ortopédicos sob medida. Pelo app mobile eles tiram fotos do pé de vários ângulos, que sobem para o Google Drive com progresso em tempo real, e um processo com Metashape transforma tudo num modelo 3D. Com esse modelo se monta um projeto escolhendo modelo, cor, sola e palmilha, que passa por 12 status com aviso por e-mail a cada mudança. O painel web mostra os pés em 3D e os pagamentos vão por Stripe em dólares.',
    features: [
      {
        title: 'App Movel (Podologo)',
        items: [
          'Escaneamento de pes com camera (multiplos angulos)',
          'Upload em massa com progresso em tempo real via WebSocket',
          'Visualizacao do modelo 3D do pe',
          'Criar projeto escolhendo modelo, cor, sola e palmilha',
          'Acompanhamento de 12 status do projeto',
        ],
      },
      {
        title: 'Painel Web (Admin)',
        items: [
          'Gestao de clinicas, podologos, pacientes e projetos',
          'Visualizacao 3D com Google Model Viewer',
          'Gestao de modelos de calcados com cores',
          'Atualizacao de status com notificacao por e-mail',
        ],
      },
      {
        title: 'Processamento 3D',
        items: [
          'Fotos processadas com Agisoft Metashape (Python)',
          'Imagens armazenadas no Google Drive por paciente',
          'Cron job para verificar status de processamento',
          'Limpeza automatica de escaneamentos anteriores',
        ],
      },
    ],
    integrationUses: [
      'Links de pagamento automaticos para projetos em USD',
      'Armazenamento de fotos organizado por paciente',
      'Processamento fotogrametrico para modelos 3D',
      'Visualizacao 3D de pes no navegador',
      'Progresso em tempo real de upload de imagens',
      'E-mails de status e links de pagamento',
      'Captura de fotos pelo app movel',
    ],
    highlights: [
      'Escaneamento 3D do pé pelo celular, processado com Metashape',
      'Upload em massa para o Google Drive com progresso em tempo real',
      'Modelos 3D (GLB) que abrem no navegador',
      '12 status de projeto com e-mail a cada mudança',
      'Link de pagamento do Stripe em USD por projeto',
      'Três partes coordenadas: app mobile, painel web e servidor',
    ],
  },
  'trewa-club': {
    subtitle: 'Venda de ingressos para festas, com QR e faturamento AFIP',
    categories: 'Web App • Eventos • Faturamento AFIP • QR • Mercado Pago',
    description:
      'Plataforma para vender ingressos de eventos noturnos. O usuário paga com Mercado Pago, recebe um ticket com QR e a fatura eletrônica da AFIP sai sozinha a cada compra. Tem tipos de ingresso com vagas e lotes, códigos de desconto, pontos trocáveis por produtos e login com Google ou Facebook. Na porta os QR são escaneados com controle de leitura dupla, e os revendedores têm seu link e suas estatísticas.',
    features: [
      {
        title: 'Para o Usuario',
        items: [
          'Catalogo de eventos com tipos de ingresso (Geral, VIP, Early Bird)',
          'Codigos de desconto (fixo ou porcentagem) com limite e vencimento',
          'Tickets com codigo QR unico para leitura na entrada',
          'Fatura eletronica automatica com AFIP em cada compra',
          'Sistema de pontos (R$1000 = 1 ponto) resgatavel por produtos',
          'Login com Google, Facebook ou e-mail',
        ],
      },
      {
        title: 'Painel de Administracao',
        items: [
          'Analise por evento: vendas, genero, idade, horarios de pico, lotes',
          'Leitura de ingressos QR com validacao anti-dupla-leitura',
          'Geracao em massa de ingressos (cortesias)',
          'Gestao de revendedores com estatisticas detalhadas',
          'Busca de usuarios com historico de compras',
        ],
      },
      {
        title: 'Sistema de Revendedores',
        items: [
          'Link proprio para vendas associadas',
          'Estatisticas por revendedor e por evento',
          'Revendedor top e evento mais vendido',
        ],
      },
    ],
    integrationUses: [
      'Pagamentos com webhooks automaticos (ARS)',
      'Fatura B automatica com CAE em cada compra',
      'Login com conta Google',
      'Login com conta Facebook',
      'Codigos QR para tickets e leitura na entrada',
      'Confirmacao de compra, pontos e recuperacao',
    ],
    highlights: [
      'Fatura eletrônica da AFIP a cada compra',
      'Tipos de ingresso com lotes, vagas e horários de venda próprios',
      'Leitura de QR com controle de leitura dupla e margem de 6 horas',
      'Pontos trocáveis por produtos do catálogo',
      'Análise por evento: gênero, idade, horários de pico e lotes',
      'Cinco funções: usuário, caixa, operador, revendedor e administrador',
    ],
  },
  'nodominium': {
    subtitle: 'Site estático para um centro cultural em El Salvador',
    categories: 'Site Estatico • HTML/CSS/JS • Bitcoin • Google Maps',
    description:
      'Site para a Casa de Nodominium, um centro de educação e cultura em Playa Las Tunas, El Salvador. Mostra os eventos num slider com swipe e lightboxes com detalhes e patrocinadores, a história do centro, um mapa do Google Maps e um formulário de contato que funciona com FormSubmit. Aceita doações em Bitcoin com um QR. É HTML, CSS e JavaScript puro, sem backend.',
    features: [
      {
        title: 'Conteudo do Site',
        items: [
          'Slider de eventos com suporte tatil (swipe)',
          'Lightboxes com descricao, caracteristicas e patrocinadores',
          'Apresentacao do centro com visao e atividades',
          'Mapa interativo do Google Maps com localizacao',
          'Formulario de contato funcional com FormSubmit',
          'Doacoes em Bitcoin com codigo QR escaneavel',
        ],
      },
      {
        title: 'Design e UX',
        items: [
          'Animacoes CSS (fadeInUp, zoomIn, float, slide-in)',
          'Navegacao fixa inferior em todas as paginas',
          'Responsivo com breakpoints em 480px, 768px e 1024px',
          'Gradientes escuros com acentos laranja/dourado',
        ],
      },
    ],
    integrationUses: [
      'Mapa interativo com localizacao do centro',
      'Formulario de contato sem backend',
      'Doacoes em criptomoeda com codigo QR',
      'Iconografia em toda a interface',
    ],
    highlights: [
      'Site estático, sem servidor nem banco de dados',
      'Slider de eventos com swipe no celular',
      'Lightboxes com os detalhes de cada evento',
      'Doações em Bitcoin com QR',
      'Animações em CSS puro, sem bibliotecas',
      'Formulário de contato com FormSubmit',
    ],
  },
  'mdt-ingenieros': {
    subtitle: 'Controle de horas e projetos para uma empresa de topografia',
    categories: 'Web App • RH • Faturamento • Assinaturas Digitais',
    description:
      'Sistema web para uma empresa de topografia que precisava controlar as horas da equipe por projeto. O colaborador registra a jornada com atividades, assinatura digital e, se precisar, pede horas extras que o supervisor aprova. Do lado administrativo tem calendário por projeto, relatórios de folha em PDF e faturamento mensal com IVA e retenção. Os resumos diários saem por e-mail e tudo é em dólares.',
    features: [
      {
        title: 'Para o Colaborador',
        items: [
          'Registro de jornada com atividades, horarios e assinaturas digitais',
          'Solicitacao de horas extras com motivo e aprovacao',
          'Historico de entradas e status de solicitacoes',
          'Notificacoes internas de aprovacoes e atribuicoes',
        ],
      },
      {
        title: 'Painel de Administracao',
        items: [
          'Projetos com cronograma semanal e tarifas por hora',
          'Calendario visual com status diarios por projeto',
          'Aprovacao de horas extras com atualizacao automatica',
          'Faturamento mensal com IVA (13%) e retencao (1%)',
          'Relatorios de folha e salarios detalhados por projeto',
          'Rotacao de pessoal e monitoramento de horas nao registradas',
        ],
      },
      {
        title: 'Relatorios e PDFs',
        items: [
          'Resumo diario em PDF enviado por e-mail ao supervisor',
          'Relatorio mensal de folha para download',
          'Fatura mensal por projeto com detalhamento de custos',
          'Calendario de horas extras em PDF',
        ],
      },
    ],
    integrationUses: [
      'Resumos diarios, horas extras e faturas por e-mail com PDF anexo',
      'PDFs profissionais A4 para resumos, folha e faturas',
      'Calculo de horas trabalhadas, extras e deducao de almoco',
      'Upload de assinaturas digitais',
    ],
    highlights: [
      'Cálculo de horas extras conforme dia, feriado e desconto de almoço',
      'Assinatura digital do topógrafo e do supervisor em cada relatório',
      'Fatura mensal por projeto com IVA de 13% e retenção de 1%',
      'Calendário com status diário por projeto',
      'Aviso de horas sem registro nos últimos 7 dias',
      'Rotação de pessoal entre projetos com detalhamento mensal',
    ],
  },
  'storybox': {
    subtitle: 'Editor de histórias com blocos de programação visual',
    categories: 'Web App • Educacao • Programacao Visual • Blockly',
    description:
      'É um app web para montar histórias e apresentações com cenas. Você coloca fundos, objetos que se arrastam e redimensionam, textos com fontes diferentes e música por cena, e depois programa o que cada objeto faz com blocos visuais do Blockly. Tem modo apresentação em tela cheia, exportação para PDF, desfazer e refazer, copiar e colar, e a interface está em espanhol e inglês. Tudo fica salvo no servidor com uma miniatura automática.',
    features: [
      {
        title: 'Editor de Cenas',
        items: [
          'Cenas ilimitadas com painel lateral de miniaturas',
          'Cena de capa com carrossel de fundos e titulo automatico',
          'Reordenar cenas com drag & drop',
          'Fundos de cor (HSL) ou imagem da biblioteca/upload proprio',
        ],
      },
      {
        title: 'Objetos e Textos',
        items: [
          'Biblioteca de objetos por categorias + upload personalizado',
          'Drag & drop, redimensionamento (8 pontos), rotacao e camadas (z-index)',
          '5 fontes, 6 tamanhos, negrito/italico/sublinhado e cor HSL',
          'Modo narracao fixo na parte inferior da cena',
        ],
      },
      {
        title: 'Programacao Visual (Blockly)',
        items: [
          '5 blocos de movimento: direita, esquerda, cima, baixo, seguir',
          '7 blocos de aparencia: aumentar, diminuir, rotacionar, comentario, som, mostrar, ocultar',
          '2 blocos de controle: repetir e parar',
          'Execucao sequencial automatica durante a apresentacao',
        ],
      },
      {
        title: 'Multimidia e Exportacao',
        items: [
          'Musica de fundo por cena com biblioteca e upload de MP3',
          '8 direcoes de transicao com 3 velocidades',
          'Apresentacao em tela cheia com navegacao',
          'Exportacao para PDF (html2canvas + jsPDF) e impressao direta',
        ],
      },
    ],
    integrationUses: [
      'Motor de programacao visual por blocos para comportamento de objetos',
      'Captura de cenas como imagem para PDFs e miniaturas',
      'Geracao de documentos PDF exportaveis',
      'Reordenar cenas e blocos com drag & drop',
      'Posicionamento livre de objetos na cena',
      'Seletor de cor HSL para fundos e textos',
      'Animacoes de paineis e interface',
      'Notificacoes visuais de acoes',
    ],
    highlights: [
      '17 tipos de blocos de movimento, aparência e controle',
      'Tela com drag and drop, 8 pontos de ancoragem, rotação e camadas',
      'Transições em 8 direções com 3 velocidades',
      'Música de fundo por cena, em loop',
      'Desfazer e refazer baseado em pilhas',
      'Exportação para PDF com html2canvas e jsPDF',
      'Interface em espanhol e inglês',
      'Salvamento no servidor com miniatura gerada automaticamente',
    ],
  },
  'konecta': {
    subtitle: 'App de ponto de funcionários por QR ou GPS',
    categories: 'App Movel • RH • QR • Geolocalizacao • Google Maps',
    description:
      'App mobile para os funcionários baterem ponto de entrada e saída escaneando um QR ou pela localização GPS. Cada registro fica num histórico com busca e aparece num mapa do Google Maps. Também dá para pedir permissões e registrar ocorrências com anexos, que o supervisor aprova ou rejeita pelo painel dele. Um mesmo usuário pode pertencer a várias empresas e a navegação muda conforme a função.',
    features: [
      {
        title: 'Para o Funcionario',
        items: [
          'Registro de presenca por QR ou geolocalizacao GPS',
          'Status em tempo real (pendente, entrada, saida)',
          'Historico de presenca paginado com busca e filtros',
          'Visualizacao de mapa com marcadores de localizacao dos registros',
          'Solicitacao de permissoes com motivo, datas e anexos',
          'Selfie para foto de perfil com camera frontal',
        ],
      },
      {
        title: 'Para o Supervisor',
        items: [
          'Painel de operacoes com gestao de permissoes',
          'Aprovacao ou rejeicao de solicitacoes de funcionarios',
          'Configuracao avancada de associacao funcionario/empresa',
        ],
      },
      {
        title: 'Autenticacao e Seguranca',
        items: [
          'Login com documento e codigo de verificacao por empresa',
          'Suporte para multiplas empresas por usuario',
          'Tokens de sessao com deteccao de expiracao',
          'Recuperacao de senha por e-mail',
        ],
      },
    ],
    integrationUses: [
      'Mapa interativo com localizacoes de registros de presenca',
      'Captura de selfies para foto de perfil',
      'Leitura de codigos QR para registro de presenca',
      'Geolocalizacao GPS para registro de presenca',
      'Anexar documentacao a solicitacoes de permissoes',
      'Geracao de QR de confirmacao apos o registro',
    ],
    highlights: [
      'Registro por QR ou por localização GPS',
      'Mapa do Google Maps com o histórico de localizações',
      'Várias empresas por usuário, com seleção por sessão',
      'Navegação diferente para funcionário e supervisor',
      'Permissões e ocorrências com anexos e aprovação',
      'Selfie de perfil com a câmera frontal, salva em Base64',
    ],
  },
  'el-lobito-4pe': {
    subtitle: 'Calculadora de apostas de golfe para 4 jogadores',
    categories: 'App Movel • Esportes • Calculo • React Native',
    description:
      'App mobile para fazer as contas de um jogo de apostas de golfe entre quatro amigos. É uma grade de 18 buracos por 4 jogadores. Você marca quem ganhou cada buraco e o app calcula os pontos com as regras do jogo, incluindo os empates que acumulam para o buraco seguinte. Dá para configurar o preço por unidade e os resultados saem em pesos colombianos. Não tem backend nem banco de dados.',
    features: [
      {
        title: 'Mecanica do Jogo',
        items: [
          'Grade interativa de 18 buracos x 4 jogadores (A, B, C, D)',
          'Marcacao de celulas com feedback visual em verde',
          'Calculo automatico de pontos com regras condicionais',
          'Empates acumulativos que multiplicam o buraco seguinte',
        ],
      },
      {
        title: 'Resultados e Configuracao',
        items: [
          'Preco por unidade configuravel como multiplicador',
          'Resultados em pesos colombianos (COP)',
          'Resultados negativos destacados em vermelho',
          'Botao de limpar para reiniciar o jogo',
        ],
      },
    ],
    integrationUses: [],
    highlights: [
      'Regras de pontuação para partidas de 4 jogadores',
      'Multiplicadores por empates acumulados',
      'Um único componente, sem backend',
      'Formato de pesos colombianos com locale es-CO',
      'APK compilado pronto para instalar',
      'Grade com scroll horizontal',
    ],
  },
  'casino-online': {
    subtitle: 'Cassino online com 5 jogos e apostas em tempo real',
    categories: 'Web App • Gaming • WebSocket • Redux • Firebase',
    description:
      'Plataforma de cassino online com cinco jogos: caça-níqueis, Aviator, blackjack, roleta e Hunt the Ace. As apostas e os resultados vão por WebSocket, então o saldo atualiza na hora. Tem depósitos, saques com aprovação, histórico de transações, indicações com bônus e um programa de staking. O painel de administração mostra gráficos, sessões ativas e permite bloquear contas.',
    features: [
      {
        title: 'Jogos Disponiveis',
        items: [
          'Caca-niqueis com multiplas linhas de pagamento e jackpots',
          'Aviator com multiplicador crescente e saque em tempo real',
          'Blackjack classico contra a casa',
          'Roleta europeia com apostas em numeros, cores e secoes',
          'Hunt the Ace: encontrar o as entre cartas embaralhadas',
        ],
      },
      {
        title: 'Sistema Financeiro',
        items: [
          'Apostas em tempo real com WebSocket (Socket.io)',
          'Saldo com atualizacao instantanea',
          'Depositos com processamento automatico',
          'Saques com fluxo de aprovacao',
          'Historico completo de transacoes',
        ],
      },
      {
        title: 'Indicacoes e Staking',
        items: [
          'Codigo de indicacao unico com $10 de bonificacao',
          'Painel de indicacoes com estatisticas de conversao',
          'Programa BFG Staking com rendimentos calculados',
          'Visualizacao de capital investido e ganhos',
        ],
      },
      {
        title: 'Painel de Administracao',
        items: [
          'Dashboard com Chart.js e ApexCharts',
          'Gestao de usuarios com bloqueio de contas',
          'Monitoramento de jogos e sessoes ativas',
          'Controle de transacoes e aprovacao de saques',
          'Relatorios de receitas e desempenho',
        ],
      },
    ],
    integrationUses: [
      'CDN de imagens para assets do cassino e recursos graficos',
      'Apostas, resultados e atualizacoes de saldo em tempo real',
      'E-mails transacionais e notificacoes',
      'Autenticacao e notificacoes push',
      'Graficos estatisticos no dashboard de administracao',
    ],
    highlights: [
      '5 jogos com a lógica de cassino programada do zero',
      'Apostas e resultados em tempo real com Socket.io',
      'Stack MERN com MUI, Ant Design e Bootstrap',
      'Indicações com bônus automático de $10',
      'Programa BFG Staking com rendimentos calculados',
      'Imagens servidas pelo ImageKit',
      'Estado global com Redux Toolkit compartilhado entre os jogos',
      'Painel de administração com gráficos em tempo real',
    ],
  },
  'saucedo-abogados': {
    subtitle: 'Gestão para um escritório de advocacia, com assinatura eletrônica e IA',
    categories: 'Web App • App Movel • Juridico • IA • Assinatura Eletronica • Laravel',
    description:
      'Sistema de gestão para um escritório de advocacia. Cada caso tem suas partes, documentos, movimentações processuais, notas e tarefas, e pode ser atribuído a um ou mais advogados. Os orçamentos passam por um fluxo de aprovação com três funções e viram caso, e as cobranças têm lembretes de vencimento. Os PDFs são indexados com OCR e resumo automático com OpenAI, os documentos são assinados com SignNow e o calendário sincroniza nos dois sentidos com o Google Calendar. O backend é Laravel, com 48 modelos e 88 endpoints, e tem um app mobile que acompanha.',
    features: [
      {
        title: 'Gestao de Casos',
        items: [
          'Casos com 6 abas: info, partes, documentos, movimentacoes, notas, tarefas',
          'Status do caso: novo, em andamento, em espera, encerrado, arquivado',
          'Atribuicao a um ou mais advogados',
          'Movimentacoes processuais cronologicas e notas internas',
          'Tarefas pendentes com prazo e responsavel',
        ],
      },
      {
        title: 'Orcamentos e Cobrancas',
        items: [
          'Orcamentos com fluxo de aprovacao (3 funcoes)',
          'Status: rascunho, pendente, aprovado, enviado, aceito, rejeitado',
          'Conversao automatica de orcamento em caso',
          'Acompanhamento de pagamentos parciais e totais',
          'Lembretes de cobrancas proximas ao vencimento',
        ],
      },
      {
        title: 'IA e Assinatura Eletronica',
        items: [
          'OCR de documentos PDF com extracao de dados',
          'Resumo automatico com IA (OpenAI)',
          'Busca inteligente em documentos indexados',
          'Assinatura eletronica com SignNow com acompanhamento de status',
          'Download de documentos assinados com validade juridica',
        ],
      },
      {
        title: 'Calendario e Relatorios',
        items: [
          'FullCalendar com sincronizacao bidirecional com Google Calendar',
          'Eventos: audiencias, reunioes, vencimentos e tarefas',
          '6 relatorios: casos, faturamento, cobrancas, produtividade, clientes, orcamentos',
          'Painel Filament com dashboard e auditoria',
        ],
      },
    ],
    integrationUses: [
      'Assinatura eletronica de documentos legais com validade juridica',
      'Armazenamento e sincronizacao de documentos do caso',
      'Sincronizacao bidirecional de eventos e audiencias',
      'OCR, resumo automatico e extracao de dados de documentos',
      'Calendario visual interativo com multiplas visualizacoes',
      'Painel de administracao com dashboard e gestao de recursos',
      'Geracao de PDFs para orcamentos e relatorios',
      'Testes end-to-end automatizados',
    ],
    highlights: [
      'OCR e resumo automático de documentos com OpenAI',
      'Assinatura eletrônica com SignNow, com validade jurídica',
      'Integração com Google Drive, Calendar e OAuth',
      '48 modelos e 88 endpoints em Laravel',
      'Orçamentos com aprovação em três funções',
      '6 relatórios: casos, faturamento, cobranças, produtividade, clientes e orçamentos',
      'Casos organizados em 6 abas',
      'Testes end-to-end com Playwright e app mobile complementar',
    ],
  },
  'grupo-sdg': {
    subtitle: 'ERP para o México com faturamento CFDI 4.0',
    categories: 'Web App • ERP • Faturamento CFDI • Laravel 12 • SAT',
    description:
      'Sistema de gestão para uma empresa mexicana, com faturamento eletrônico CFDI 4.0. O fluxo de vendas vai de cotação a pedido, fatura, pagamento e cobrança, levando os dados de uma etapa para a seguinte. Os comprovantes são assinados com certificados CSD, timbrados com um PAC e o RFC é validado contra a lista negra do SAT. Tem módulo de tesouraria com conciliação bancária, políticas de senha com expiração e quatro tabelas de auditoria. O backend é Laravel 12, com mais de 40 modelos e 80 endpoints documentados no Swagger.',
    features: [
      {
        title: 'Pipeline de Vendas',
        items: [
          'Fluxo completo: cotacao - pedido - fatura - pagamento - cobranca',
          'Conversao automatica entre etapas com transferencia de dados',
          'Complementos de pagamento conforme normativa SAT',
          'Acompanhamento de contas a receber com vencimentos',
        ],
      },
      {
        title: 'Faturamento CFDI 4.0',
        items: [
          'Comprovantes fiscais digitais conforme normativa SAT',
          'Assinatura digital com Certificado de Selo Digital (CSD)',
          'Timbrado fiscal com PAC (Provedor Autorizado)',
          'Validacao de RFC contra lista negra do SAT',
          'Geracao de XML fiscal e representacao impressa em PDF',
          'Cancelamento de CFDI com motivo conforme normativa',
        ],
      },
      {
        title: 'Tesouraria e Seguranca',
        items: [
          'Contas bancarias, movimentacoes e conciliacao',
          'Fluxo de caixa com projecao de receitas e despesas',
          'Politicas de senha com expiracao e bloqueio',
          '4 tabelas de auditoria: acessos, dados, fiscal, admin',
        ],
      },
      {
        title: 'Administracao',
        items: [
          'Dashboard com metricas de vendas e faturamento',
          'Catalogos oficiais do SAT integrados',
          'Impostos configuraveis: IVA, ISR, IEPS',
          'Gestao de usuarios com funcoes e permissoes',
        ],
      },
    ],
    integrationUses: [
      'Timbrado fiscal de comprovantes CFDI 4.0',
      'Catalogos oficiais e validacao de RFC contra lista negra',
      'Assinatura digital de comprovantes fiscais',
      'Representacoes impressas de CFDI em PDF',
      'Documentacao interativa de 80+ endpoints',
    ],
    highlights: [
      'Faturamento CFDI 4.0 com timbrado PAC e certificados CSD',
      'Fluxo de vendas de cotação a cobrança',
      'Validação de RFC contra a lista negra do SAT',
      '4 tabelas de auditoria: acessos, dados, fiscal e admin',
      'Senhas com expiração e bloqueio',
      'Mais de 40 modelos e 80 endpoints documentados com Swagger',
      'Tesouraria com conciliação bancária',
      'Catálogos oficiais do SAT: uso CFDI, regime e forma de pagamento',
    ],
  },
  'goodbye-friend': {
    subtitle: 'Cemitério virtual em 3D para lembrar dos pets',
    categories: 'Web 3D • App Movel • Three.js • React Three Fiber • Stripe • Laravel',
    description:
      'Memorial virtual para pets com um cemitério em 3D que se percorre em primeira pessoa. Tem mais de 1.075 parcelas, três estilos de túmulo, 57 objetos de tributo, nichos e mausoléus. No desktop se navega com pointer lock e no celular com joysticks de toque, com minimapa e colisões. Cada pet tem seu perfil com biografia e fotos, onde outras pessoas deixam tributos e condolências. Os planos e tributos são pagos com Stripe, tem um marketplace de artistas, app mobile em React Native e backend em Laravel.',
    features: [
      {
        title: 'Cemiterio 3D',
        items: [
          'Mundo 3D com terreno, grama, caminhos, arvores e decoracao',
          '1.075+ parcelas em 25+ fileiras com 3 estilos de tumulo',
          '57 objetos 3D de tributo: flores, velas, coroas, brinquedos',
          '10 nichos circulares e mausoleus premium',
          'Iluminacao dinamica e renderizacao por distancia',
        ],
      },
      {
        title: 'Navegacao e Camera',
        items: [
          'Primeira pessoa com pointer lock no desktop',
          'Joysticks virtuais tateis no celular',
          'Minimapa com posicao atual e tumulos ocupados',
          'Navegacao direta para tumulo especifico',
          'Sistema de colisoes com objetos do cemiterio',
        ],
      },
      {
        title: 'Memoriais e Comunidade',
        items: [
          'Perfil do animal com biografia e galeria de fotos',
          'Tributos virtuais de outros visitantes',
          'Mensagens de condolencias em cada memorial',
          'Memorial publico ou privado conforme preferencia',
          'Marketplace de artistas para personalizacao',
        ],
      },
      {
        title: 'Pagamentos e App Movel',
        items: [
          'Planos de memorial: basico, premium, mausoleu (Stripe)',
          'Compra de tributos 3D adicionais',
          'App movel com percurso 3D e joysticks tateis',
          'Gestao de perfil e galeria pelo celular',
        ],
      },
    ],
    integrationUses: [
      'Motor 3D para o cemiterio com tumulos, objetos e ambiente',
      'Helpers e componentes para Three.js (camera, controles, loaders)',
      'Pagamentos para planos de memorial, tributos e marketplace',
      'Captura e selecao de fotos pelo app movel',
    ],
    highlights: [
      'Cemitério 3D com mais de 1.075 parcelas, 3 estilos de túmulo e 57 objetos de tributo',
      'Pointer lock no desktop e joysticks de toque no celular',
      'Renderização por distância para manter 60 fps',
      'Minimapa com a posição em tempo real',
      'Marketplace de artistas para personalizar memoriais',
      'Web 3D com Three.js e R3F, app mobile em React Native e backend em Laravel',
      'Colisões com os objetos do cemitério',
      'Pagamentos com Stripe: planos, tributos e pagamentos a colaboradores',
    ],
  },
  'safetrade': {
    subtitle: 'App para vender e seguir sinais de trading',
    categories: 'App Movel • Fintech • Trading • Stripe • Zustand • React Query',
    description:
      'App mobile onde traders publicam sinais de trading e outros usuários assinam para receber. O trader cadastra ativo, direção, take profit e stop loss, e tem um dashboard com percentual de acertos, retorno acumulado e sequência. O cliente explora traders, assina por mês com Stripe e pode pausar ou cancelar quando quiser. Feito com React Native, Expo, TypeScript, Zustand e React Query.',
    features: [
      {
        title: 'Para Traders',
        items: [
          'Publicar sinais com ativo, direcao, take profit e stop loss',
          'Dashboard com % de acertos, retorno acumulado e sequencia vencedora',
          'Gestao de assinantes e status de assinaturas',
          'Historico de sinais com resultado (vencedor/perdedor)',
          'Graficos de performance com linhas e barras',
        ],
      },
      {
        title: 'Para Clientes',
        items: [
          'Diretorio de traders com metricas e preco de assinatura',
          'Assinatura mensal de um ou mais traders',
          'Sinais em tempo real com detalhe e analise',
          'Gestao de assinaturas: ver, pausar ou cancelar',
        ],
      },
      {
        title: 'Pagamentos e Conta',
        items: [
          'Assinaturas recorrentes mensais com Stripe SDK nativo',
          'Historico de cobrancos, faturas e status de pagamentos',
          'Configuracao de notificacoes e perfil',
        ],
      },
    ],
    integrationUses: [
      'Assinaturas recorrentes com cartao de credito/debito',
      'Configuracao de servicos e notificacoes',
      'Graficos de desempenho e estatisticas de traders',
    ],
    highlights: [
      'Duas funções com navegação e interface diferentes',
      'Zustand, React Query e Zod para estado, cache e validação',
      'Stripe nativo em React Native, sem sair do app',
      'Métricas calculadas: percentual de acertos, retorno acumulado e sequência',
      'Todo o app em TypeScript',
      'Tabs do Expo Router que mudam conforme a função',
      'React Query com cache e atualizações otimistas',
      'Assinaturas com cobrança mensal automática',
    ],
  },
  'biznes': {
    subtitle: 'Cartões de visita digitais, com QR e assinaturas',
    categories: 'Web App • SaaS • E-commerce • QR • Mercado Pago • Redux',
    description:
      'É um SaaS para montar cartões de visita digitais e compartilhar por link ou QR. O usuário sobe foto, logo, bio, redes e botões, muda cores e fontes, e vê o resultado em tempo real num formato de celular. Cada cartão gera seu QR e um vCard para salvar o contato. As assinaturas e a loja são cobradas com Mercado Pago, e o painel mostra visitas, cliques, downloads e tempo em tela.',
    features: [
      {
        title: 'Editor de Cartoes',
        items: [
          'Design passo a passo: foto, capa, logo, bio, cargo, empresa',
          'Redes sociais com favoritas em destaque (Instagram, LinkedIn, TikTok, etc.)',
          'Personalizacao visual: cores, tipografias, bordas, alinhamento, fundos',
          'Pre-visualizacao em tempo real em formato celular',
          'QR automatico para download e vCard para salvar contato',
        ],
      },
      {
        title: 'Assinaturas e Loja',
        items: [
          'Planos com permissoes configuraveis a nivel granular',
          'Pagamentos e assinaturas com Mercado Pago',
          'Loja de produtos com categorias, variacoes e carrinho',
          'Cupons de desconto e descontos por assinatura',
        ],
      },
      {
        title: 'Estatisticas',
        items: [
          'Visitas ao cartao com data e dispositivo',
          'Cliques em redes sociais, e-mail e botoes',
          'Downloads de vCard e tempo de visualizacao',
          'Contatos recebidos por formulario integrado',
        ],
      },
      {
        title: 'Painel de Administracao',
        items: [
          'Gestao de produtos, categorias, assinaturas e pedidos',
          'Blog, FAQs, marcas, Hero Cards e anuncios',
          'Gestao de cupons, tickets e usuarios',
          'Importacao em massa a partir de arquivos Excel',
        ],
      },
    ],
    integrationUses: [
      'Pagamentos de assinaturas, mensalidades e compras na loja',
      'Login rapido com conta Google',
      'E-mails transacionais (compra, login, assinaturas)',
      'Geracao automatica de codigos QR por cartao',
      'Arquivos de contato (.vcf) para download',
      'Comunicacao em tempo real',
      'Otimizacao e conversao de imagens para WebP',
      'Documentacao interativa da API',
    ],
    highlights: [
      'Assinaturas com permissões configuráveis por plano',
      'Editor com prévia em tempo real em formato de celular',
      'Estatísticas de visitas, cliques, downloads e tempo em tela',
      'QR e vCard gerados para cada cartão',
      'Loja com carrinho e checkout com Mercado Pago',
      'Imagens convertidas para WebP com Sharp',
      'Importação em massa de usuários e cartões a partir de Excel',
      'Tarefas agendadas com Agenda.js para vencer assinaturas',
    ],
  },
  'citamovil': {
    subtitle: 'Site para uma assistência técnica de celulares e tablets na Espanha',
    categories: 'Web App • Servico Tecnico • WhatsApp Bot • Next.js 14 • Atacadistas',
    description:
      'Site para uma assistência técnica que conserta celulares, tablets e outros dispositivos na Espanha. O cliente faz a cotação escolhendo categoria, marca, modelo e defeitos, e o preço muda conforme a zona. Depois acompanha o conserto com um código de 5 dígitos e recebe cada mudança por e-mail e WhatsApp. Os atacadistas se cadastram, o administrador aprova e eles fazem pedidos em volume com endereço de coleta. O conteúdo do site é editado pelo painel sem mexer em código.',
    features: [
      {
        title: 'Para o Cliente',
        items: [
          'Cotador automatico por categoria, marca, modelo e defeitos',
          'Selecao multipla de defeitos com preco em tempo real',
          'Acompanhamento de reparo com codigo de 5 digitos',
          'Notificacoes por e-mail e WhatsApp em cada mudanca de status',
          'Dados reais de provincias e cidades da Espanha',
        ],
      },
      {
        title: 'Sistema de Atacadistas',
        items: [
          'Cadastro com aprovacao manual do administrador',
          'Pedidos de reparo em volume com endereco de coleta',
          'Acompanhamento independente com codigo e status proprios',
          'Notificacoes por e-mail para o atacadista e para o admin',
        ],
      },
      {
        title: 'Painel de Administracao',
        items: [
          'Tabela de precos por modelo, defeito e zona (local/fora/atacadista)',
          'Gestao de categorias, marcas, modelos e defeitos',
          'Ordens com alteracao de status e notificacao automatica',
          'Blog com editor enriquecido, tags e artigos relacionados',
          'Conteudo 100% editavel sem mexer no codigo',
          'Exportacao de tabela de precos para PDF',
        ],
      },
    ],
    integrationUses: [
      'Mensagens automaticas ao criar pedidos ou alterar status (conexao QR)',
      'E-mails com templates HTML para pedidos, status e atacadistas',
      'Geracao de PDFs com tabela de precos',
      'Avaliacoes do Google na pagina inicial',
    ],
    highlights: [
      'Preços por modelo, defeito e zona',
      'Bot de WhatsApp com whatsapp-web.js, sem serviços pagos',
      'Avisos automáticos por e-mail e WhatsApp',
      'Atacadistas com cadastro, aprovação e acompanhamento próprio',
      'Tabela de preços com drag and drop e exportação para PDF',
      'Todo o conteúdo editável pelo painel',
    ],
  },
}
