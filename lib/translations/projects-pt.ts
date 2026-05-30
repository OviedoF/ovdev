import type { ProjectI18n } from './types'

export const pt: Record<string, ProjectI18n> = {
  'cap-medical': {
    subtitle: 'Aplicativo Movel de Gestao de Servicos Medicos e Cirurgias',
    categories: 'App Movel • React Native • Multi-Modulo',
    description:
      'Aplicativo movel multiplataforma para a gestao integral de servicos medicos e cirurgias. Permite administrar servicos cirurgicos com acompanhamento de status, gerenciar tecnicos, controlar localizacoes e hospitais, registrar pagamentos, administrar prontuarios de pacientes e receber notificacoes. Inclui sistema de permissoes por funcao, geolocalizacao GPS, camera integrada e geracao de codigos QR.',
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
      'Sistema de permissoes granular por funcao',
      'Criacao de servicos em 3 etapas com catalogos dinamicos',
      '10 telas especializadas por servico',
      'Movimentacoes com geolocalizacao GPS automatica',
      'Auditoria completa de todas as alteracoes',
      'TypeScript completo em toda a aplicacao',
    ],
  },
  'petnder': {
    subtitle: 'Plataforma Movel Pet-Friendly com Adocao e Comunidade',
    categories: 'App Movel • React Native • Marketplace Pet',
    description:
      'Plataforma movel que conecta donos de animais de estimacao com servicos pet-friendly, adocao responsavel e uma comunidade comprometida com o bem-estar animal. Oferece dois perfis diferenciados — usuario e empresa — cada um com seu proprio fluxo, navegacao e funcionalidades.',
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
      'Dois perfis diferenciados (usuario e empresa)',
      'Sistema de adocao com chat integrado',
      'Comunidades com funcoes e moderacao de conteudo',
      'Carteira digital e estatisticas financeiras',
      'Gamificacao com sistema de conquistas',
      'Onboarding animado interativo',
    ],
  },
  'controla2': {
    subtitle: 'Sistema de Gestao Empresarial (ERP)',
    categories: 'SaaS • ERP • Faturamento Eletronico',
    description:
      'Plataforma web integral projetada para empresas de construcao e engenharia que precisam centralizar e automatizar suas operacoes diarias. ERP completo com gestao de projetos, RH, faturamento eletronico, aquisicoes, estoque e prevencao de riscos, adaptado a legislacao chilena.',
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
      'Dashboard em tempo real com metricas e KPIs',
      'Geracao automatica de documentos (PDF, Excel, CSV)',
      '8 funcoes predefinidas com fluxos de aprovacao',
      'Adaptado a legislacao chilena (AFP, ISAPRE, DTE, RUT)',
      'Modulo SSOMA de prevencao de riscos',
      'Notificacoes instantaneas para aprovacoes',
    ],
  },
  'alhambra': {
    subtitle: 'Site de Turismo para Granada, Espanha',
    categories: 'Web App • Turismo • Painel Admin • Multilingue',
    description:
      'Site profissional para uma empresa de guias turisticos em Granada, Espanha, especializada em visitas guiadas a Alhambra. Plataforma completa com exploracao de circuitos, reservas, blog e traducao automatica para 7 idiomas, com painel de administracao para gestao autonoma do conteudo.',
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
      'Conteudo 100% administravel sem ajuda tecnica',
      'Edicao de textos inline diretamente na pagina',
      'Renderizacao do lado do servidor (SSR) para SEO',
      'Suporte para 7 idiomas voltado ao turismo internacional',
      'Integracao com WhatsApp e e-mail para maximizar reservas',
      'Seguranca com JWT, senhas criptografadas e funcoes',
    ],
  },
  'biznes-empresa': {
    subtitle: 'Plataforma de Gestao de Cartoes Digitais Corporativos',
    categories: 'Web App • SaaS • Cartoes Digitais • Funcoes',
    description:
      'Aplicacao web para que empresas gerenciem de forma centralizada os cartoes digitais de apresentacao de todos os seus funcionarios, com controle de funcoes, permissoes, templates corporativos e estatisticas de uso.',
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
      'Gestao corporativa completa a partir de um unico painel',
      'Templates com branding aplicados automaticamente',
      'Funcoes e permissoes granulares por funcionario',
      'Cadastro em massa de funcionarios por arquivo Excel',
      'Estatisticas centralizadas com graficos interativos',
      'Comunicacao em tempo real com WebSockets',
    ],
  },
  'blackphone': {
    subtitle: 'Sistema de Gestao de Reparos de Dispositivos Moveis',
    categories: 'Web App • E-commerce • WhatsApp Bot • Painel Admin',
    description:
      'Plataforma web completa para um servico tecnico de reparo de celulares na Espanha. Inclui cotador automatico, sistema de ordens com acompanhamento, notificacoes por e-mail e WhatsApp, gestao de atacadistas e painel de administracao integral.',
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
      'Cotador inteligente por modelo, defeito e zona geografica',
      'Notificacoes multicanal (e-mail + WhatsApp automatico)',
      'Bot de WhatsApp integrado sem servicos externos pagos',
      'Sistema de atacadistas com fluxo independente',
      'Tabela de precos dinamica exportavel para PDF',
      'Dados reais de provincias e cidades da Espanha',
    ],
  },
  'casepe': {
    subtitle: 'Site Institucional da Camara de Operacoes Petroliferas',
    categories: 'Web Institucional • CMS ao Vivo • Blog • Next.js 14',
    description:
      'Site institucional para CASEPE (Camara de Empresas de Operacoes Petroliferas Especiais), uma associacao civil que reune empresas de servicos petroliferos na Argentina. Todo o conteudo e editado diretamente no site sem painel separado: textos, imagens e secoes sao modificados clicando sobre eles quando o administrador esta conectado.',
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
      'Edicao ao vivo sem painel separado — tudo na mesma pagina',
      'Propriedades aninhadas atualizaveis dinamicamente com Lodash',
      'Secoes expansiveis: adicionar e remover itens direto no site',
      'Blog com artigos relacionados e tags',
      'E-mails de contato com template HTML profissional',
      'Animacoes profissionais em todas as secoes',
    ],
  },
  'dental-digital': {
    subtitle: 'Sistema de Gestao para Clinicas Odontologicas (SaaS)',
    categories: 'SaaS • Faturamento AFIP • Odontograma • Mercado Pago',
    description:
      'Plataforma web tipo SaaS para dentistas e clinicas odontologicas na Argentina. Gestao integral de pacientes, consultas com calendario interativo, odontograma visual, orcamentos, faturamento eletronico com ARCA/AFIP, convenios, documentos de consentimento, assinaturas com Mercado Pago, notificacoes por e-mail e WhatsApp, e backup de dados.',
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
      'Faturamento eletronico real com ARCA/AFIP e CAE valido',
      'Geracao de certificados RSA/CSR para vincular com AFIP',
      'Odontograma interativo com registro por dente e exportacao PDF',
      'Assinaturas com Mercado Pago e webhooks automaticos',
      'Multiusuario com funcoes (proprietario, profissional, administrador)',
      'Backup completo em JSON com restauracao inteligente',
    ],
  },
  'sunchales-pos': {
    subtitle: 'Sistema de Gestao Comercial e Ponto de Venda',
    categories: 'SaaS • POS • Faturamento AFIP • Codigo de Barras',
    description:
      'Plataforma web completa de gestao comercial para negocios e comercios na Argentina. Administracao de produtos com codigo de barras, registro de vendas e compras, clientes e fornecedores, faturamento eletronico com ARCA/AFIP, orcamentos, controle de estoque e materias-primas, garantias e devolucoes (RMA), e estatisticas com graficos interativos. Inclui assinaturas com Mercado Pago.',
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
      'Ciclo comercial completo: compras, estoque, vendas, faturamento e relatorios',
      'Faturamento eletronico real com ARCA/AFIP e CAE valido',
      'Codigo de barras com geracao visual e leitura rapida',
      'Sistema de RMA para garantias e devolucoes com acompanhamento',
      'Orcamentos conversiveis diretamente em vendas',
      'SMTP personalizavel por usuario para envio de faturas',
    ],
  },
  'fuku-shop': {
    subtitle: 'Loja Online de Roupas Urbanas e Anime',
    categories: 'E-commerce • Next.js • Mercado Pago • Cloudinary',
    description:
      'Loja online completa para venda de roupas com estilo anime, asiatico e de videogames. Catalogo com variantes por cor e tamanho, filtros avancados combinados, galeria com zoom, tabela de tamanhos, carrinho de compras, historico, avaliacoes, SEO com sitemap automatico e painel de administracao para gerenciar todo o catalogo. Originaria de Rafaela, Santa Fe, Argentina.',
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
      'Variantes de produto com imagens independentes por cor',
      'Filtros combinados para buscas precisas no catalogo',
      'Geracao estatica (SSG) com revalidacao incremental para SEO',
      'Sitemap XML gerado automaticamente com prioridades por secao',
      'Imagens no Cloudinary para otimizacao e carregamento rapido',
      'Categorias hierarquicas com subcategorias e subtipos',
    ],
  },
  'julian-winners': {
    subtitle: 'Plataforma de Rifas Online com Tickets Digitais',
    categories: 'Web App • Rifas • Mercado Pago • Indicacoes',
    description:
      'Plataforma web completa para a venda de tickets de rifas online. Os usuarios compram pacotes de tickets mediante Mercado Pago e recebem numeros atribuidos aleatoriamente com fatura por e-mail. Inclui sistema de indicacoes com pontos, carrinho de compras, atribuicao manual de tickets, selecao de ganhador, moderadores, exportacao para Excel e conteudo 100% editavel. Moeda: pesos colombianos (COP).',
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
      'Tickets aleatorios sem repeticoes com formato segundo total da rifa',
      'Webhooks de Mercado Pago com verificacao anti-duplicados',
      'Atribuicao manual por moderadores para vendas presenciais',
      'Selecao de ganhador por numero de ticket',
      'Exportacao completa para Excel (usuarios, compras, faturas)',
      'Tres funcoes diferenciadas (usuario, moderador, administrador)',
    ],
  },
  'limcal': {
    subtitle: 'Loja Online de Produtos de Limpeza',
    categories: 'E-commerce • Mercado Pago • Revendedores • CMS',
    description:
      'Loja online completa para LIMCAL, empresa de produtos de limpeza na Argentina. Cadastro com CUIT e aprovacao manual de contas, catalogo com filtros, carrinho com compra minima por produto, pagamento com Mercado Pago, mapa de revendedores com Google Maps, acompanhamento de pedidos com e-mail, formulario de contato com resposta pelo painel e conteudo 100% editavel.',
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
      'Aprovacao manual de contas para controle de acesso',
      'Compra minima por produto ideal para venda no atacado',
      'Mapa de revendedores com Google Maps filtravel por zona',
      'Resposta a mensagens de contato diretamente pelo painel',
      'Conteudo editavel com propriedades aninhadas dinamicas',
      'Webhooks de Mercado Pago com registro automatico de pedidos',
    ],
  },
  'limcal-pos': {
    subtitle: 'Aplicativo Desktop de Gestao Comercial e Ponto de Venda',
    categories: 'Desktop App • Electron • Faturamento AFIP • IndexedDB',
    description:
      'Aplicativo desktop com Electron para a gestao comercial completa da LIMCAL. Produtos com importacao em massa a partir de Excel, vendas e compras, faturamento eletronico com ARCA/AFIP (Fatura A/B, Notas de Credito), guias de remessa, estoque, materias-primas, revendedores com comissoes e descontos, livro IVA, estatisticas e backup. Banco de dados local com IndexedDB. Substitui o antigo sistema baseado em FoxPro.',
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
      'App desktop com Electron — funciona offline sem servidor',
      'Banco de dados local com IndexedDB no navegador do Electron',
      'Faturamento eletronico real com AFIP (Fatura A/B, NC A/B)',
      'Revendedores com desconto ou comissao aplicados ao faturar',
      'Importacao em massa de produtos e alteracao de precos em massa a partir de Excel',
      'Migracao completa de FoxPro (Husky POS) para tecnologia moderna',
    ],
  },
  'movilprint': {
    subtitle: 'Plataforma de Design e Impressao Personalizada',
    categories: 'Web App • Editor Visual • Drag & Drop • Login Social',
    description:
      'Plataforma web para criar designs personalizados de impressao. O usuario escolhe um template, acessa o editor visual com drag & drop onde adiciona textos com +15 fontes, imagens e elementos decorativos, posiciona cada elemento livremente e envia o design para impressao. Login com Google e Facebook, sistema de pontos, e painel de administracao para gerenciar templates e designs recebidos.',
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
      'Editor visual completo com tela interativa e drag & drop',
      'Templates dinamicos com dimensoes em cm e recursos proprios',
      '+15 fontes tipograficas com controle completo de estilos',
      'Sistema de camadas para controlar profundidade dos elementos',
      'Login social com Google e Facebook',
      'Designs persistentes com todos os elementos salvos no banco',
    ],
  },
  'padel': {
    subtitle: 'Plataforma de Gestao de Torneios de Padel',
    categories: 'Web App • Esportes • Ranking • Next.js 15',
    description:
      'Plataforma web para a organizacao e acompanhamento de torneios de padel. Gestao de torneios com categorias, jogadores com clubes e pontos, partidas com resultados por sets, calendario de eventos, circuito por categoria, ranking filtrado por genero e categoria, e busca de jogadores. Painel de administracao e painel de moderador para insercao de resultados.',
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
      'Circuito de torneios organizado automaticamente por categoria',
      'Ranking dinamico em tempo real por categoria e genero',
      'Partidas individuais e por equipes com resultados por sets',
      'Status automatico do torneio conforme partidas inseridas',
      'Tres niveis de acesso (publico, moderador, administrador)',
      'Exclusao logica em categorias para restauracao',
    ],
  },
  '4me': {
    subtitle: 'Plataforma de Podologia com Escaneamento 3D e Calcados Ortopedicos',
    categories: 'App Movel • Web Admin • Escaneamento 3D • Stripe',
    description:
      'Sistema integral de podologia com escaneamento 3D de pes. Os podologos escaneiam pes pelo app movel, as fotos sao processadas em modelos 3D com Metashape, e sao criados projetos de calcados ortopedicos sob medida. Pagamentos com Stripe em USD, armazenamento no Google Drive, visualizacao 3D no painel web, notificacoes por e-mail e comunicacao em tempo real.',
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
      'Escaneamento 3D de pes pelo celular com processamento Metashape',
      'Upload em massa para Google Drive com progresso em tempo real',
      'Visualizacao de modelos 3D (GLB) no navegador',
      'Pipeline de 12 status com notificacao por e-mail em cada alteracao',
      'Pagamentos com Stripe em USD com link automatico por projeto',
      'Tres sistemas coordenados: app movel + painel web + servidor',
    ],
  },
  'trewa-club': {
    subtitle: 'Plataforma de Venda de Ingressos para Eventos com Sistema de Pontos',
    categories: 'Web App • Eventos • Faturamento AFIP • QR • Mercado Pago',
    description:
      'Plataforma web para a venda de ingressos para eventos noturnos e festas. Compra com Mercado Pago, tickets com codigo QR, faturamento eletronico automatico com AFIP, sistema de pontos resgatavel, codigos de desconto, tipos de ingresso com vagas, revendedores com estatisticas, leitura de QR na entrada e login com Google/Facebook. Cinco funcoes diferenciadas.',
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
      'Faturamento eletronico automatico com AFIP em cada compra',
      'Tipos de ingresso com lotes, vagas e horarios de venda independentes',
      'Leitura QR com validacao anti-dupla-leitura e margem de 6 horas',
      'Sistema de pontos resgatavel por produtos do catalogo',
      'Analise detalhada por evento (genero, idade, horarios de pico, lotes)',
      'Cinco funcoes: usuario, caixa, operador, revendedor, administrador',
    ],
  },
  'nodominium': {
    subtitle: 'Site de Centro Cultural e Educativo em El Salvador',
    categories: 'Site Estatico • HTML/CSS/JS • Bitcoin • Google Maps',
    description:
      'Site para Casa de Nodominium, centro independente de educacao e cultura em Playa Las Tunas, La Union, El Salvador. Eventos com slider tatil e lightboxes, informacoes institucionais, mapa interativo do Google Maps, formulario de contato com FormSubmit e doacoes em Bitcoin com codigo QR. Site completamente estatico sem backend.',
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
      'Site completamente estatico sem servidor nem banco de dados',
      'Slider de eventos com suporte tatil para dispositivos moveis',
      'Lightboxes com informacoes completas de cada evento',
      'Doacoes em Bitcoin com QR escaneavel',
      'Animacoes CSS puras sem bibliotecas externas',
      'Formulario funcional com FormSubmit sem backend proprio',
    ],
  },
  'mdt-ingenieros': {
    subtitle: 'Controle de Horas e Gestao de Projetos de Topografia',
    categories: 'Web App • RH • Faturamento • Assinaturas Digitais',
    description:
      'Plataforma web para registro e controle de horas trabalhadas, gestao de projetos e geracao de relatorios para uma empresa de topografia. Jornadas com atividades, assinaturas digitais, aprovacao de horas extras, relatorios de folha em PDF, faturamento mensal com IVA e retencoes, calendario visual com status, rotacao de pessoal e monitoramento de horas nao registradas. Moeda: USD.',
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
      'Calculo inteligente de horas extras por dia, feriado e almoco',
      'Assinaturas digitais do topografo e supervisor nos relatorios',
      'Faturamento mensal automatico com IVA (13%) e retencao (1%)',
      'Calendario visual com status diarios por projeto',
      'Monitoramento de horas nao registradas nos ultimos 7 dias',
      'Rotacao de pessoal entre projetos com detalhamento mensal',
    ],
  },
  'storybox': {
    subtitle: 'Editor Interativo de Historias e Apresentacoes com Programacao Visual',
    categories: 'Web App • Educacao • Programacao Visual • Blockly',
    description:
      'Aplicacao web interativa para criar historias e apresentacoes multimidia com programacao visual. O usuario cria cenas com fundos, objetos arrastaveis e redimensionaveis, textos com multiplas fontes e estilos, musica de fundo por cena, transicoes animadas e programa o comportamento dos objetos usando blocos visuais (Blockly). Modo apresentacao em tela cheia, exportacao para PDF, salvamento no servidor com miniatura automatica, sistema de desfazer/refazer, copiar e colar, e interface bilingue espanhol/ingles.',
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
      'Programacao visual com 17 tipos de blocos (movimento, aparencia, controle)',
      'Editor de tela com drag & drop, 8 pontos de ancoragem, rotacao e camadas',
      'Transicoes animadas em 8 direcoes com 3 velocidades',
      'Musica de fundo por cena com reproducao automatica em loop',
      'Sistema completo de desfazer/refazer baseado em pilhas',
      'Exportacao para PDF de alta qualidade com html2canvas + jsPDF',
      'Interface bilingue espanhol/ingles com textos dinamicos',
      'Salvamento no servidor com miniatura gerada automaticamente',
    ],
  },
  'konecta': {
    subtitle: 'Aplicativo Movel de Controle de Presenca e Permissoes de Trabalho',
    categories: 'App Movel • RH • QR • Geolocalizacao • Google Maps',
    description:
      'Aplicativo movel multiplataforma para o controle de presenca de funcionarios. Registro de entrada e saida mediante codigo QR ou geolocalizacao GPS, historico de presenca com visualizacao de mapa no Google Maps, solicitacao de permissoes e incidencias com anexos, suporte multiempresa, selfie para foto de perfil, funcoes diferenciadas (funcionario e supervisor) e navegacao adaptavel conforme a funcao do usuario.',
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
      'Duplo metodo de registro: codigo QR e geolocalizacao GPS',
      'Mapa interativo do Google Maps com historico de localizacoes',
      'Suporte multiempresa com selecao por sessao',
      'Funcoes diferenciadas com navegacao adaptavel (funcionario/supervisor)',
      'Permissoes e incidencias com anexos e fluxo de aprovacao',
      'Selfie para perfil com camera frontal codificada em Base64',
    ],
  },
  'el-lobito-4pe': {
    subtitle: 'Calculadora de Pontuacoes de Golfe para 4 Jogadores',
    categories: 'App Movel • Esportes • Calculo • React Native',
    description:
      'Aplicativo movel para calcular as pontuacoes de um jogo de apostas de golfe entre 4 jogadores. Grade interativa de 18 buracos x 4 jogadores com calculo automatico de pontos segundo regras condicionais (empates anteriores, quantidade de marcados por buraco). Preco por unidade configuravel e resultados em pesos colombianos. Aplicativo autocontido sem backend nem banco de dados.',
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
      'Regras de pontuacao ajustadas para partidas de 4 jogadores',
      'Motor de calculo com multiplicadores por empates anteriores',
      'Aplicativo autocontido: um unico componente, sem backend',
      'Formato de moeda colombiana (COP) com locale es-CO',
      'APK compilado incluido pronto para instalar',
      'Grade com scroll horizontal para visualizacao confortavel',
    ],
  },
  'casino-online': {
    subtitle: 'Plataforma de Jogos de Azar com Apostas em Tempo Real',
    categories: 'Web App • Gaming • WebSocket • Redux • Firebase',
    description:
      'Plataforma de cassino online com 5 jogos interativos (Caca-niqueis, Aviator, Blackjack, Roleta e Hunt the Ace), apostas em tempo real com WebSocket, painel de administracao com graficos estatisticos, sistema de indicacoes com bonificacao, programa de staking BFG, gestao de depositos e saques, CDN de imagens com ImageKit, e autenticacao segura com JWT e funcoes diferenciadas.',
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
      '5 jogos completos com logica de cassino implementada do zero',
      'Apostas e resultados em tempo real com WebSocket (Socket.io)',
      'Stack MERN completo com tripla biblioteca de UI (MUI + Ant Design + Bootstrap)',
      'Sistema de indicacoes com bonificacao automatica de $10',
      'Programa BFG Staking com rendimentos calculados',
      'CDN de imagens com ImageKit para carregamento otimizado',
      'Estado global com Redux Toolkit para experiencia fluida entre jogos',
      'Painel de administracao com graficos em tempo real',
    ],
  },
  'giordota': {
    subtitle: 'Marketplace de Itens de Dota 2 com Apostas e Loja Gaming',
    categories: 'Web App • Gaming • Microsservicos • Steam API • Astro + Svelte',
    description:
      'Plataforma de comercio de itens de Dota 2 com marketplace, sistema de apostas com moedas virtuais, 5 tipos de caixas de loot, bots de Steam automatizados para troca de itens, chat em tempo real multicanal, sistema de tripla carteira, rede social integrada, sistema VIP com niveis, bot de Discord, e gateways de pagamento para o Peru (Mercado Pago, PayPal, PagoEfectivo). Arquitetura de microsservicos com Java Spring Boot, 4 servicos Node.js e frontend Astro/Svelte.',
    features: [
      {
        title: 'Marketplace e Bots',
        items: [
          'Catalogo de itens de Dota 2 com precos da Steam',
          'Compra e venda de itens com carteira interna',
          'Bots de Steam automatizados com trade offers',
          'Gestao de multiplos bots com Steam Guard integrado',
          'Verificacao de inventario em tempo real',
        ],
      },
      {
        title: 'Caixas de Loot e Apostas',
        items: [
          '5 tipos de caixas: normais, gratis, sociais, fa e formulario',
          'Animacao de abertura com revelacao do item ganho',
          'Apostas com moedas virtuais em eventos e partidas',
          'Probabilidades configuraveis pelo administrador',
        ],
      },
      {
        title: 'Tripla Carteira e Pagamentos',
        items: [
          'Carteira de compras, carteira de saques e carteira gratis',
          'Depositos com Mercado Pago, PayPal e PagoEfectivo',
          'Saques com solicitacao e processamento',
          'Historico completo de transacoes',
        ],
      },
      {
        title: 'Comunidade e Chat',
        items: [
          'Chat em tempo real: suporte, grupal, admin e chaves',
          'Rede social com publicacoes e sistema de amigos',
          'Bot de Discord com comandos e notificacoes',
          'Sistema VIP com niveis e beneficios exclusivos',
        ],
      },
    ],
    integrationUses: [
      'Autenticacao, inventarios e dados de itens de Dota 2',
      'Troca automatizada de itens com trade offers',
      'Gateway de pagamento para o mercado peruano',
      'Gateway de pagamento internacional',
      'Pagamentos em dinheiro em pontos de pagamento no Peru',
      'Comunidade estendida com comandos e notificacoes',
      'Chat, apostas e atualizacoes em tempo real',
    ],
    highlights: [
      'Arquitetura de microsservicos: Spring Boot + 4 servicos Node.js',
      'Bots de Steam automatizados com trade offers e Steam Guard',
      '5 tipos de loot boxes com probabilidades configuraveis',
      'Tripla carteira (compras, saques, gratis) para controle financeiro granular',
      'Frontend moderno com Astro + Svelte para SSG + interatividade',
      '3 gateways de pagamento para o Peru: Mercado Pago, PayPal e PagoEfectivo',
      'Chat multicanal em tempo real com WebSocket',
      'Bot de Discord integrado com a plataforma',
    ],
  },
  'saucedo-abogados': {
    subtitle: 'Sistema de Gestao Juridica com Assinatura Eletronica e Inteligencia Artificial',
    categories: 'Web App • App Movel • Juridico • IA • Assinatura Eletronica • Laravel',
    description:
      'Sistema integral de gestao para escritorio juridico com casos legais em 6 abas especializadas, gestao de clientes, orcamentos com fluxo de aprovacao, cobrancas, calendario integrado, 6 tipos de relatorios, indexacao de documentos com IA (OCR e resumo automatico), assinatura eletronica com SignNow, integracao com Google Drive e Google Calendar, painel Filament, app movel e 3 funcoes diferenciadas. Backend Laravel com 48 modelos e 88 endpoints.',
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
      'Indexacao de documentos com IA: OCR + resumo automatico com OpenAI',
      'Assinatura eletronica com SignNow com validade juridica',
      'Tripla integracao Google: Drive, Calendar e OAuth',
      '48 modelos e 88 endpoints em Laravel para gestao juridica completa',
      'Fluxo de aprovacao de orcamentos com 3 funcoes diferenciadas',
      '6 tipos de relatorios para tomada de decisoes do escritorio',
      'Casos com 6 abas especializadas para gestao integral',
      'Testes E2E com Playwright e app movel complementar',
    ],
  },
  'grupo-sdg': {
    subtitle: 'Sistema de Gestao Empresarial com Faturamento Eletronico CFDI 4.0 (Mexico)',
    categories: 'Web App • ERP • Faturamento CFDI • Laravel 12 • SAT',
    description:
      'Sistema de gestao empresarial para o mercado mexicano com faturamento eletronico CFDI 4.0. Pipeline de vendas completo (cotacao - pedido - fatura - pagamento - cobranca), emissao de comprovantes fiscais com certificados CSD, timbrado com PAC, validacao de RFC contra lista negra do SAT, modulo de tesouraria, politicas de senha com expiracao e 4 tabelas de auditoria. Backend Laravel 12 com 40+ modelos e 80+ endpoints documentados com Swagger.',
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
      'Faturamento CFDI 4.0 completo com timbrado PAC e certificados CSD',
      'Pipeline de vendas end-to-end: cotacao ate cobranca',
      'Validacao de RFC contra lista negra do SAT',
      '4 tabelas de auditoria para rastreabilidade completa',
      'Politicas de senha empresariais com expiracao periodica',
      '40+ modelos e 80+ endpoints documentados com Swagger',
      'Modulo de tesouraria com conciliacao bancaria',
      'Catalogos oficiais do SAT integrados (uso CFDI, regime, forma de pagamento)',
    ],
  },
  'goodbye-friend': {
    subtitle: 'Cemiterio Virtual 3D para Animais de Estimacao com Tumulos Interativos',
    categories: 'Web 3D • App Movel • Three.js • React Three Fiber • Stripe • Laravel',
    description:
      'Plataforma de memorial virtual para animais de estimacao com um cemiterio 3D completo. Mais de 1.075 parcelas em 25+ fileiras, 3 estilos de tumulo, 57 objetos 3D de tributo, nichos circulares e mausoleus. Camera em primeira pessoa com pointer lock no desktop e joysticks tateis no celular, minimapa, renderizacao por distancia, perfis de animais com galerias, memoriais colaborativos, marketplace de colaboradores e pagamentos com Stripe. App movel com React Native e backend Laravel.',
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
      'Cemiterio 3D com 1.075+ parcelas, 3 estilos de tumulo e 57 objetos de tributo',
      'Camera hibrida: pointer lock no desktop, joysticks tateis no celular',
      'Renderizacao otimizada por distancia para manter 60fps',
      'Minimapa de navegacao com posicao em tempo real',
      'Marketplace de colaboradores para personalizacao de memoriais',
      'Tres plataformas: web 3D (Three.js/R3F), app movel (React Native), backend (Laravel)',
      'Sistema de colisoes para percurso realista',
      'Monetizacao com Stripe: planos, tributos e pagamentos a colaboradores',
    ],
  },
  'safetrade': {
    subtitle: 'Marketplace de Sinais de Trading com Assinaturas',
    categories: 'App Movel • Fintech • Trading • Stripe • Zustand • React Query',
    description:
      'Aplicativo movel para compra e venda de sinais de trading. Os traders publicam sinais com analise tecnica e os clientes assinam para recebe-los. Duas funcoes diferenciadas, assinaturas recorrentes com Stripe, dashboard de desempenho, exploracao de traders com metricas de performance, graficos estatisticos, navegacao por abas conforme funcao, e validacao com Zod. Stack moderno: React Native, Expo, TypeScript, Zustand e React Query.',
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
      'Duas funcoes com interfaces e navegacao completamente diferenciadas',
      'Stack moderno: Zustand + React Query + Zod para estado, cache e validacao',
      'Stripe nativo em React Native para pagamentos sem sair do app',
      'Metricas automaticas: % acertos, retorno acumulado, sequencia vencedora',
      'TypeScript completo em toda a aplicacao',
      'Expo Router com abas condicionais conforme funcao do usuario',
      'React Query com cache e sincronizacao otimista',
      'Assinaturas recorrentes com cobranca mensal automatica',
    ],
  },
  'talenthunt': {
    subtitle: 'Chatbot de Recrutamento com IA e Parsing de CVs',
    categories: 'Web App • RH • IA • GPT-4 • Chatbot • Laravel 12 • Filament',
    description:
      'Plataforma de recrutamento automatizado com chatbot conversacional com IA. Recebe candidatos atraves de um chatbot configuravel, faz parsing de CVs com GPT-4 (extracao automatica de dados pessoais, experiencia e formacao a partir de PDFs), gerencia candidaturas com fluxo Kanban, integra-se com TalentTalent API para publicacao de vagas, construtor de fluxos de chatbot, dashboard de analitica (funil, time-to-hire, desempenho por recrutador) e 3 funcoes. Painel Filament.',
    features: [
      {
        title: 'Chatbot Conversacional',
        items: [
          'Fluxo de conversa configuravel por vaga',
          'Construtor de fluxos com etapas: perguntas abertas, multipla escolha, arquivos',
          'Respostas dinamicas conforme as respostas do candidato',
          'Upload de CV diretamente na conversa',
          'Interface tipo chat amigavel para o candidato',
        ],
      },
      {
        title: 'Parsing de CVs com GPT-4',
        items: [
          'Leitura automatica de texto em PDFs com OCR',
          'Extracao de dados pessoais: nome, e-mail, telefone, localizacao',
          'Extracao de experiencia profissional: empresas, cargos, datas',
          'Identificacao de habilidades tecnicas e comportamentais',
          'Campos automaticos salvos no perfil do candidato',
        ],
      },
      {
        title: 'Gestao de Candidaturas',
        items: [
          'Kanban: novo - triagem - entrevista - teste - proposta - contratado',
          'Detalhe do candidato com CV parseado e respostas do chatbot',
          'Notas internas do recrutador e timeline completo',
          'Atribuicao de candidaturas a recrutadores',
        ],
      },
      {
        title: 'Analitica e Administracao',
        items: [
          'Funil de conversao: visitas - candidaturas - contratacoes',
          'Time-to-hire e desempenho por recrutador',
          'Publicacao de vagas em portais via TalentTalent API',
          '3 funcoes: administrador, recrutador, visualizador (Filament)',
        ],
      },
    ],
    integrationUses: [
      'Parsing inteligente de CVs: dados, experiencia, formacao e habilidades',
      'Publicacao de vagas em multiplos portais de emprego',
      'Painel de administracao com dashboard e gestao de recursos',
      'Interatividade do chatbot e componentes dinamicos',
      'Geracao de relatorios em PDF',
    ],
    highlights: [
      'Parsing de CVs com GPT-4: extracao automatica de dados, experiencia e habilidades',
      'Construtor visual de fluxos de chatbot sem necessidade de programar',
      'Dashboard de analitica: funil de conversao, time-to-hire, desempenho por recrutador',
      'Integracao com TalentTalent API para publicar em multiplos portais',
      '3 funcoes diferenciadas: administrador, recrutador e visualizador',
      'Filament v3.3 como painel principal com dashboard profissional',
      'Fluxo Kanban completo para gestao visual de candidatos',
      'Laravel 12 com Alpine.js, Livewire e Tailwind CSS v4',
    ],
  },
  'biznes': {
    subtitle: 'Plataforma SaaS de Cartoes Digitais de Apresentacao',
    categories: 'Web App • SaaS • E-commerce • QR • Mercado Pago • Redux',
    description:
      'Plataforma SaaS para criar cartoes de apresentacao digitais personalizaveis e compartilhaveis por link ou QR. Editor visual com pre-visualizacao em tempo real, redes sociais integradas, botoes personalizados, vCard para download, sistema de assinaturas com Mercado Pago, loja de produtos com carrinho, painel de administracao completo, estatisticas detalhadas de interacoes (visitas, cliques, downloads, tempo em tela) e comunicacao em tempo real com Socket.IO.',
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
      'SaaS completo com assinaturas e permissoes granulares por plano',
      'Editor visual avancado com pre-visualizacao em tempo real em formato celular',
      'Estatisticas detalhadas: visitas, cliques, downloads, tempo em tela',
      'QR + vCard automaticos para cada cartao digital',
      'Loja de produtos com carrinho e checkout com Mercado Pago',
      'Otimizacao de imagens automatica para WebP com Sharp',
      'Importacao em massa de usuarios/cartoes a partir de Excel',
      'Tarefas agendadas com Agenda.js para vencimento de assinaturas',
    ],
  },
  'citamovil': {
    subtitle: 'Sistema de Gestao de Reparos de Dispositivos Moveis',
    categories: 'Web App • Servico Tecnico • WhatsApp Bot • Next.js 14 • Atacadistas',
    description:
      'Plataforma web para um servico tecnico de reparo de celulares, tablets e dispositivos eletronicos na Espanha. Cotador automatico com tabela de precos por modelo, defeito e zona, sistema de ordens com acompanhamento por codigo de 5 digitos, notificacoes automaticas por e-mail e WhatsApp, gestao de atacadistas com aprovacao e acompanhamento, blog com editor enriquecido, e painel de administracao com conteudo 100% editavel.',
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
      'Cotador inteligente com precos por modelo, defeito e zona geografica',
      'Bot de WhatsApp integrado com whatsapp-web.js (sem servicos pagos)',
      'Notificacoes multicanal: e-mail + WhatsApp automaticos',
      'Sistema de atacadistas com cadastro, aprovacao e acompanhamento',
      'Tabela de precos dinamica com drag & drop e exportacao para PDF',
      'Conteudo 100% editavel pelo painel de administracao',
    ],
  },
}
