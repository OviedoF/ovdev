import type { ProjectI18n } from './types'

export const fr: Record<string, ProjectI18n> = {
  'cap-medical': {
    subtitle: 'Application Mobile de Gestion de Services Médicaux et Chirurgies',
    categories: 'App Mobile • React Native • Multi-Module',
    description:
      'Application mobile multiplateforme pour la gestion intégrale de services médicaux et chirurgies. Permet d\'administrer des services chirurgicaux avec suivi des états, gérer des techniciens, contrôler les localisations et hôpitaux, enregistrer des paiements, administrer les dossiers patients et recevoir des notifications. Inclut un système de permissions par rôle, géolocalisation GPS, caméra intégrée et génération de codes QR.',
    features: [
      {
        title: 'Gestion des Services',
        items: [
          'Liste avec filtre par état et recherche',
          'Création en 3 étapes avec catalogues dynamiques',
          'Mouvements avec géolocalisation GPS et pièces jointes',
          'Paiements, contre-reçus et historique des modifications',
        ],
      },
      {
        title: 'Répertoire des Techniciens',
        items: [
          'Répertoire consultable avec regroupement alphabétique',
          'Filtre par rôle (auxiliaire, titulaire)',
          'Profil détaillé avec données professionnelles',
        ],
      },
      {
        title: 'Gestion des Localisations',
        items: [
          'Hôpitaux et centres médicaux avec recherche',
          'Détail complet avec adresse et contact',
          'Filtre par état actif/inactif',
        ],
      },
    ],
    integrationUses: [
      'Cartes interactives pour localisation des hôpitaux et services',
      'Coordonnées GPS lors de l\'enregistrement des mouvements',
      'Capture de photos et vidéos à joindre aux dossiers',
      'Génération de codes QR',
      'Graphiques et visualisation de données',
    ],
    highlights: [
      'Système de permissions granulaire par rôle',
      'Création de services en 3 étapes avec catalogues dynamiques',
      '10 écrans spécialisés par service',
      'Mouvements avec géolocalisation GPS automatique',
      'Audit complet de toutes les modifications',
      'TypeScript complet dans toute l\'application',
    ],
  },
  'petnder': {
    subtitle: 'Plateforme Mobile Pet-Friendly avec Adoption et Communauté',
    categories: 'App Mobile • React Native • Marketplace Pet',
    description:
      'Plateforme mobile qui connecte les propriétaires d\'animaux avec des services pet-friendly, l\'adoption responsable et une communauté engagée pour le bien-être animal. Offre deux profils différenciés — utilisateur et entreprise — chacun avec son propre flux, navigation et fonctionnalités.',
    features: [
      {
        title: 'Pour les Utilisateurs',
        items: [
          'Explorer des services pet-friendly par catégories',
          'Adoption d\'animaux avec filtres et chat',
          'Signalements d\'animaux perdus avec localisation',
          'Avantages, coupons et fondations',
        ],
      },
      {
        title: 'Pour les Entreprises',
        items: [
          'Gestion de services avec cartes et horaires',
          'Coupons avec QR et statistiques d\'utilisation',
          'Portefeuille numérique avec solde et historique',
          'Communautés avec rôles et modération',
        ],
      },
      {
        title: 'Général',
        items: [
          'Onboarding animé avec Reanimated',
          'Chat en temps réel',
          'Notifications push',
          'Cartes intégrées avec Google Maps',
        ],
      },
    ],
    integrationUses: [
      'Localisation des services et sélecteur de position',
      'Alertes push sur les adoptions et messages',
      'Codes QR pour coupons et réductions',
      'Statistiques commerciales et de performance',
    ],
    highlights: [
      'Deux profils différenciés (utilisateur et entreprise)',
      'Système d\'adoption avec chat intégré',
      'Communautés avec rôles et modération de contenu',
      'Portefeuille numérique et statistiques financières',
      'Gamification avec système de succès',
      'Onboarding animé interactif',
    ],
  },
  'controla2': {
    subtitle: 'Système de Gestion d\'Entreprise (ERP)',
    categories: 'SaaS • ERP • Facturation Électronique',
    description:
      'Plateforme web intégrale conçue pour les entreprises de construction et d\'ingénierie qui ont besoin de centraliser et automatiser leurs opérations quotidiennes. ERP complet avec gestion de projets, RH, facturation électronique, approvisionnements, inventaire et prévention des risques, adapté à la réglementation chilienne.',
    features: [
      {
        title: 'Projets et Planification',
        items: [
          'Budgets et chronogrammes Gantt interactifs',
          'Suivi de l\'avancement et contrôle des écarts',
          'Bureau technique avec heures-homme et production',
        ],
      },
      {
        title: 'RH et Paie',
        items: [
          'Cycle complet du collaborateur',
          'Calcul automatique de la paie (AFP, ISAPRE)',
          'Congés, avances et soldes de tout compte',
        ],
      },
      {
        title: 'Facturation et Achats',
        items: [
          'Documents fiscaux électroniques',
          'Flux complet d\'achats et devis',
          'Contrôle de stock avec traçabilité',
        ],
      },
    ],
    integrationUses: [
      'Infrastructure et hébergement du système',
      'Facturation électronique conforme à la réglementation chilienne',
      'Alertes dans les flux d\'approbation',
    ],
    highlights: [
      'Tableau de bord en temps réel avec métriques et KPIs',
      'Génération automatique de documents (PDF, Excel, CSV)',
      '8 rôles prédéfinis avec flux d\'approbation',
      'Adapté à la réglementation chilienne (AFP, ISAPRE, DTE, RUT)',
      'Module SSOMA de prévention des risques',
      'Notifications instantanées pour les approbations',
    ],
  },
  'alhambra': {
    subtitle: 'Site Web de Tourisme pour Grenade, Espagne',
    categories: 'Web App • Tourisme • Panel Admin • Multilingue',
    description:
      'Site web professionnel pour une entreprise de guides touristiques à Grenade, Espagne, spécialisée dans les visites guidées de l\'Alhambra. Plateforme complète avec exploration de circuits, réservations, blog et traduction automatique en 7 langues, avec panel d\'administration pour la gestion autonome du contenu.',
    features: [
      {
        title: 'Pour le Visiteur',
        items: [
          'Exploration de circuits touristiques avec pages dédiées',
          'Système de réservations intégré avec formulaire complet',
          'Blog d\'actualités avec contenu enrichi',
          'Traduction automatique en 7 langues',
          'Contact direct par WhatsApp',
        ],
      },
      {
        title: 'Panel d\'Administration',
        items: [
          'Gestion des circuits avec éditeur enrichi',
          'Gestion du blog avec images et mise en forme avancée',
          'Édition de textes en direct en cliquant dessus',
          'Système d\'accès sécurisé',
        ],
      },
    ],
    integrationUses: [
      'Contact direct en un clic',
      'Réception de réservations par e-mail',
      'Traduction automatique en plusieurs langues',
      'Lien et bannière vers le profil de l\'entreprise',
      'Intégration avec le profil du guide',
    ],
    highlights: [
      'Contenu 100% administrable sans aide technique',
      'Édition de textes en ligne directement sur la page',
      'Rendu côté serveur (SSR) pour le SEO',
      'Support de 7 langues orienté tourisme international',
      'Intégration avec WhatsApp et e-mail pour maximiser les réservations',
      'Sécurité avec JWT, mots de passe chiffrés et rôles',
    ],
  },
  'biznes-empresa': {
    subtitle: 'Plateforme de Gestion de Cartes de Visite Numériques d\'Entreprise',
    categories: 'Web App • SaaS • Cartes Numériques • Rôles',
    description:
      'Application web permettant aux entreprises de gérer de manière centralisée les cartes de visite numériques de tous leurs employés, avec contrôle des rôles, permissions, modèles d\'entreprise et statistiques d\'utilisation.',
    features: [
      {
        title: 'Gestion d\'Entreprise',
        items: [
          'Inscription et profil d\'entreprise avec logo et branding',
          'Invitation d\'employés par e-mail ou import Excel en masse',
          'Rôles personnalisés avec permissions granulaires',
          'Abonnements entreprise avec limites configurables',
        ],
      },
      {
        title: 'Cartes Numériques',
        items: [
          'Modèles d\'entreprise avec design de marque',
          'Éditeur visuel complet avec aperçu en temps réel',
          'Code QR automatique et vCard téléchargeable',
          'Lien personnalisé pour chaque carte',
        ],
      },
      {
        title: 'Statistiques',
        items: [
          'Visites par carte avec détail par appareil',
          'Clics sur les réseaux sociaux et e-mail',
          'Téléchargements de vCard et contacts ajoutés',
          'Graphiques interactifs (barres, lignes, camemberts)',
        ],
      },
    ],
    integrationUses: [
      'Invitations par e-mail et notifications',
      'Génération automatique de codes QR',
      'Fichiers de contact téléchargeables',
      'Communication en temps réel',
      'Graphiques interactifs pour les statistiques',
      'Optimisation d\'images en WebP',
    ],
    highlights: [
      'Gestion d\'entreprise complète depuis un seul panel',
      'Modèles avec branding appliqués automatiquement',
      'Rôles et permissions granulaires par employé',
      'Import en masse d\'employés par fichier Excel',
      'Statistiques centralisées avec graphiques interactifs',
      'Communication en temps réel avec WebSockets',
    ],
  },
  'blackphone': {
    subtitle: 'Système de Gestion de Réparations de Dispositifs Mobiles',
    categories: 'Web App • E-commerce • WhatsApp Bot • Panel Admin',
    description:
      'Plateforme web complète pour un service technique de réparation de téléphones en Espagne. Comprend un deviseur automatique, un système d\'ordres avec suivi, des notifications par e-mail et WhatsApp, la gestion de grossistes et un panel d\'administration intégral.',
    features: [
      {
        title: 'Pour le Client',
        items: [
          'Deviseur automatique de réparations par modèle et panne',
          'Sélection multiple de pannes avec prix en temps réel',
          'Suivi de réparation avec code à 5 chiffres',
          'Notifications automatiques par e-mail et WhatsApp',
        ],
      },
      {
        title: 'Système de Grossistes',
        items: [
          'Inscription et approbation d\'entreprises grossistes',
          'Demandes de réparation en volume',
          'Suivi indépendant avec code propre',
          'Prix différenciés par zone',
        ],
      },
      {
        title: 'Panel d\'Administration',
        items: [
          'Tableau de prix dynamique avec drag & drop',
          'Gestion des catégories, marques, modèles et pannes',
          'États de réparation personnalisés avec notifications',
          'Blog avec éditeur enrichi et contenu modifiable',
          'Export PDF des tableaux de prix',
        ],
      },
    ],
    integrationUses: [
      'Messages automatiques à la création de commande ou au changement d\'état',
      'E-mails avec modèles HTML au client et à l\'admin',
      'PDFs téléchargeables avec tableaux de prix',
      'Avis réels de clients sur la page d\'accueil',
      'Drag & drop pour réordonner les modèles',
    ],
    highlights: [
      'Deviseur intelligent par modèle, panne et zone géographique',
      'Notifications multicanal (e-mail + WhatsApp automatique)',
      'Bot WhatsApp intégré sans services externes payants',
      'Système de grossistes avec flux indépendant',
      'Tableau de prix dynamique exportable en PDF',
      'Données réelles des provinces et communes d\'Espagne',
    ],
  },
  'casepe': {
    subtitle: 'Site Web Institutionnel de la Chambre d\'Opérations Pétrolières',
    categories: 'Web Institutionnel • CMS en Direct • Blog • Next.js 14',
    description:
      'Site web institutionnel pour CASEPE (Chambre des Entreprises d\'Opérations Pétrolières Spéciales), une association civile regroupant des entreprises de services pétroliers en Argentine. Tout le contenu est éditable directement depuis le web sans panel séparé : textes, images et sections se modifient en cliquant dessus lorsque l\'administrateur est connecté.',
    features: [
      {
        title: 'Pour le Visiteur',
        items: [
          'Hero avec image de fond et section institutionnelle avec galerie',
          'Services interactifs avec navigation par éléments',
          'Histoire, vision, engagement environnemental et localités',
          'Blog d\'actualités avec articles associés',
          'Formulaire de contact avec envoi automatique d\'e-mail',
        ],
      },
      {
        title: 'Édition en Direct',
        items: [
          'Textes éditables en cliquant directement sur la page',
          'Images remplaçables sans quitter la page',
          'Ajouter et supprimer des éléments dans n\'importe quelle section',
          'Éditeur de texte enrichi intégré',
        ],
      },
      {
        title: 'Panel d\'Administration',
        items: [
          'Gestion du blog avec éditeur enrichi',
          'Tags et articles associés',
          'Connexion sécurisée',
        ],
      },
    ],
    integrationUses: [
      'Messages de contact avec modèle HTML professionnel',
      'Animations d\'apparition au défilement',
      'Navigation fluide vers les sections',
      'Éditeur de texte enrichi pour le contenu en ligne',
    ],
    highlights: [
      'Édition en direct sans panel séparé — tout depuis la même page',
      'Propriétés imbriquées actualisables dynamiquement avec Lodash',
      'Sections extensibles : ajouter et supprimer des éléments depuis le web',
      'Blog avec articles associés et étiquettes',
      'E-mails de contact avec modèle HTML professionnel',
      'Animations professionnelles dans toutes les sections',
    ],
  },
  'dental-digital': {
    subtitle: 'Système de Gestion pour Cliniques Dentaires (SaaS)',
    categories: 'SaaS • Facturation AFIP • Odontogramme • Mercado Pago',
    description:
      'Plateforme web de type SaaS pour dentistes et cliniques dentaires en Argentine. Gestion intégrale des patients, rendez-vous avec calendrier interactif, odontogramme visuel, devis, facturation électronique avec ARCA/AFIP, mutuelles, documents de consentement, abonnements avec Mercado Pago, notifications par e-mail et WhatsApp, et sauvegarde de données.',
    features: [
      {
        title: 'Gestion Clinique',
        items: [
          'Fiche complète des patients avec mutuelle',
          'Calendrier interactif avec vues mensuelle, hebdomadaire et quotidienne',
          'Odontogramme visuel avec enregistrement par dent et export PDF',
          'Devis détaillés convertibles en facture',
          'Documents de consentement avec signature numérique',
        ],
      },
      {
        title: 'Facturation Électronique',
        items: [
          'Émission de Factures, NC et ND type A, B et C avec ARCA/AFIP',
          'CAE automatique et calcul de TVA (0%, 10,5%, 21%, 27%)',
          'Génération de certificats RSA et CSR pour AFIP',
          'PDF de facture avec envoi par e-mail et WhatsApp',
        ],
      },
      {
        title: 'SaaS et Administration',
        items: [
          'Abonnements mensuels/annuels avec Mercado Pago',
          'Multiples cliniques et professionnels avec rôles',
          'Tableau de bord avec graphiques Chart.js',
          'Sauvegarde complète et restauration intelligente',
        ],
      },
    ],
    integrationUses: [
      'Facturation électronique avec CAE valide',
      'Abonnements récurrents avec webhooks automatiques',
      'Envoi de factures et notifications par WhatsApp',
      'E-mails avec factures PDF et vérification de mot de passe',
      'Graphiques de traitements, devis et rendez-vous',
      'Calendrier interactif de rendez-vous',
      'Export de l\'odontogramme en PDF',
    ],
    highlights: [
      'Facturation électronique réelle avec ARCA/AFIP et CAE valide',
      'Génération de certificats RSA/CSR pour lier avec AFIP',
      'Odontogramme interactif avec enregistrement par dent et export PDF',
      'Abonnements avec Mercado Pago et webhooks automatiques',
      'Multi-utilisateur avec rôles (propriétaire, professionnel, administrateur)',
      'Sauvegarde complète en JSON avec restauration intelligente',
    ],
  },
  'sunchales-pos': {
    subtitle: 'Système de Gestion Commerciale et Point de Vente',
    categories: 'SaaS • POS • Facturation AFIP • Code-barres',
    description:
      'Plateforme web complète de gestion commerciale pour commerces en Argentine. Administration de produits avec code-barres, enregistrement des ventes et achats, clients et fournisseurs, facturation électronique avec ARCA/AFIP, devis, contrôle de stock et matières premières, garanties et retours (RMA), et statistiques avec graphiques interactifs. Inclut des abonnements avec Mercado Pago.',
    features: [
      {
        title: 'Ventes et Facturation',
        items: [
          'Enregistrement des ventes avec calcul automatique de TVA',
          'Vente rapide sans client enregistré',
          'Facturation électronique avec ARCA/AFIP et CAE',
          'Conversion de devis en vente directement',
          'PDF de facture avec envoi par e-mail',
        ],
      },
      {
        title: 'Produits et Stock',
        items: [
          'Catalogue avec code-barres par produit',
          'Contrôle de stock mis à jour en temps réel',
          'Matières premières avec inventaire indépendant',
          'Produits physiques et services différenciés',
        ],
      },
      {
        title: 'Gestion Commerciale',
        items: [
          'Fiches complètes de clients et fournisseurs',
          'Devis avec états et validité configurable',
          'Système de garanties et retours (RMA)',
          'Tableau de bord avec graphiques de ventes et achats',
        ],
      },
    ],
    integrationUses: [
      'Facturation électronique avec CAE valide',
      'Abonnements récurrents pour l\'accès au système',
      'E-mails avec factures PDF et notifications d\'envoi',
      'Graphiques de ventes, achats et rapports',
      'Génération et affichage de codes-barres',
      'Impression directe de factures et étiquettes',
      'Génération de PDFs de factures et devis',
    ],
    highlights: [
      'Cycle commercial complet : achats, stock, ventes, facturation et rapports',
      'Facturation électronique réelle avec ARCA/AFIP et CAE valide',
      'Code-barres avec génération visuelle et lecture rapide',
      'Système RMA pour garanties et retours avec suivi',
      'Devis convertibles directement en ventes',
      'SMTP personnalisable par utilisateur pour l\'envoi de factures',
    ],
  },
  'fuku-shop': {
    subtitle: 'Boutique en Ligne de Vêtements Urbains et Anime',
    categories: 'E-commerce • Next.js • Mercado Pago • Cloudinary',
    description:
      'Boutique en ligne complète pour la vente de vêtements style anime, asiatique et jeux vidéo. Catalogue avec variantes par couleur et taille, filtres avancés combinés, galerie avec zoom, guide des tailles, panier d\'achat, historique, avis, SEO avec sitemap automatique et panel d\'administration pour gérer tout le catalogue. Originaire de Rafaela, Santa Fe, Argentine.',
    features: [
      {
        title: 'Boutique en Ligne',
        items: [
          'Catalogue avec filtres combinés (catégorie, type, couleur, taille, prix)',
          'Variantes par couleur avec images propres (face, dos, porté)',
          'Zoom de l\'image au survol du curseur',
          'Guide des tailles avec mesures réelles',
          'Panier d\'achat et checkout avec Mercado Pago',
        ],
      },
      {
        title: 'Compte Utilisateur',
        items: [
          'Inscription et connexion par e-mail ou Google',
          'Historique d\'achats',
          'Multiples adresses de livraison',
          'Avis et évaluations de produits',
          'Notifications internes',
        ],
      },
      {
        title: 'Panel d\'Administration',
        items: [
          'CRUD de produits avec variantes de couleur et images',
          'Gestion des couleurs avec code hexadécimal',
          'Catégories, sous-catégories, types et sous-types de vêtement',
          'Tailles avec mesures configurables',
        ],
      },
    ],
    integrationUses: [
      'Traitement des paiements pour les achats',
      'Stockage et optimisation d\'images dans le cloud',
      'Communication en temps réel',
      'Messages de contact par e-mail',
      'État global (panier, authentification, filtres)',
      'Cache intelligent des données serveur',
      'Génération automatique de sitemap XML pour le SEO',
    ],
    highlights: [
      'Variantes de produit avec images indépendantes par couleur',
      'Filtres combinés pour des recherches précises dans le catalogue',
      'Génération statique (SSG) avec revalidation incrémentale pour le SEO',
      'Sitemap XML généré automatiquement avec priorités par section',
      'Images sur Cloudinary pour optimisation et chargement rapide',
      'Catégories hiérarchiques avec sous-catégories et sous-types',
    ],
  },
  'julian-winners': {
    subtitle: 'Plateforme de Tombolas en Ligne avec Tickets Numériques',
    categories: 'Web App • Tombolas • Mercado Pago • Parrainage',
    description:
      'Plateforme web complète pour la vente de tickets de tombolas en ligne. Les utilisateurs achètent des packs de tickets via Mercado Pago et reçoivent des numéros attribués aléatoirement avec facture par e-mail. Comprend un système de parrainage avec points, panier d\'achat, attribution manuelle de tickets, sélection du gagnant, modérateurs, export vers Excel et contenu 100% éditable. Devise : pesos colombiens (COP).',
    features: [
      {
        title: 'Pour l\'Utilisateur',
        items: [
          'Catalogue de tombolas avec packs de tickets et prix',
          'Panier d\'achat avec packs de plusieurs tombolas',
          'Numéros de ticket générés aléatoirement sans doublons',
          'Facture PDF par e-mail avec détail des tickets',
          'Système de parrainage avec lien et accumulation de points',
        ],
      },
      {
        title: 'Panel d\'Administration',
        items: [
          'Gestion des tombolas avec packs, images et mise en avant',
          'Attribution manuelle de tickets (ventes en personne)',
          'Sélection du gagnant par recherche de numéro de ticket',
          'Historique d\'achats avec export vers Excel',
          'Modérateurs pour les ventes en personne',
        ],
      },
      {
        title: 'Contenu Éditable',
        items: [
          'Textes, images et données de l\'entreprise éditables',
          'Configuration de Mercado Pago et SMTP depuis le panel',
          'Conditions générales éditables',
        ],
      },
    ],
    integrationUses: [
      'Paiements avec webhooks pour attribution automatique de tickets',
      'Factures par e-mail avec modèle HTML et lien vers PDF',
      'Génération de factures PDF téléchargeables',
      'Export des utilisateurs et de l\'historique vers Excel',
      'État global (panier, utilisateur, tombolas)',
    ],
    highlights: [
      'Tickets aléatoires sans doublons avec format selon le total de la tombola',
      'Webhooks Mercado Pago avec vérification anti-doublons',
      'Attribution manuelle par modérateurs pour les ventes en personne',
      'Sélection du gagnant par numéro de ticket',
      'Export complet vers Excel (utilisateurs, achats, factures)',
      'Trois rôles différenciés (utilisateur, modérateur, administrateur)',
    ],
  },
  'limcal': {
    subtitle: 'Boutique en Ligne de Produits d\'Entretien',
    categories: 'E-commerce • Mercado Pago • Revendeurs • CMS',
    description:
      'Boutique en ligne complète pour LIMCAL, entreprise de produits d\'entretien en Argentine. Inscription avec CUIT et approbation manuelle des comptes, catalogue avec filtres, panier avec achat minimum par produit, paiement avec Mercado Pago, carte des revendeurs avec Google Maps, suivi de commandes par e-mail, formulaire de contact avec réponse depuis le panel et contenu 100% éditable.',
    features: [
      {
        title: 'Boutique en Ligne',
        items: [
          'Catalogue paginé avec filtres par catégorie et recherche',
          'Achat minimum configurable par produit',
          'Panier avec multiples adresses de livraison',
          'Paiement avec Mercado Pago et enregistrement automatique via webhook',
          'Suivi de commandes avec notification par e-mail',
        ],
      },
      {
        title: 'Revendeurs',
        items: [
          'Carte des revendeurs avec Google Maps intégré',
          'Filtre par province, ville et nom',
          'Page informative pour les nouveaux revendeurs',
        ],
      },
      {
        title: 'Panel d\'Administration',
        items: [
          'Gestion des produits, catégories et commandes',
          'Approbation manuelle des comptes utilisateurs',
          'Messages de contact avec réponse directe par e-mail',
          'Contenu éditable avec Lodash pour les propriétés imbriquées',
          'Modérateurs avec permissions différenciées',
        ],
      },
    ],
    integrationUses: [
      'Paiements du panier avec webhooks automatiques (ARS)',
      'Contact, réponses au client et notifications de commandes',
      'Carte intégrée pour chaque revendeur',
      'Suivi des visites et du comportement',
      'Éditeur enrichi pour les politiques et sections',
      'Animations d\'apparition au défilement',
    ],
    highlights: [
      'Approbation manuelle des comptes pour contrôle d\'accès',
      'Achat minimum par produit idéal pour la vente en gros',
      'Carte des revendeurs avec Google Maps filtrable par zone',
      'Réponse aux messages de contact directement depuis le panel',
      'Contenu éditable avec propriétés imbriquées dynamiques',
      'Webhooks Mercado Pago avec enregistrement automatique des commandes',
    ],
  },
  'limcal-pos': {
    subtitle: 'Application de Bureau de Gestion Commerciale et Point de Vente',
    categories: 'App Bureau • Electron • Facturation AFIP • IndexedDB',
    description:
      'Application de bureau avec Electron pour la gestion commerciale complète de LIMCAL. Produits avec import en masse depuis Excel, ventes et achats, facturation électronique avec ARCA/AFIP (Facture A/B, Notes de Crédit), bons de livraison, stock, matières premières, revendeurs avec commissions et remises, livre de TVA, statistiques et sauvegarde. Base de données locale avec IndexedDB. Remplace l\'ancien système basé sur FoxPro.',
    features: [
      {
        title: 'Ventes et Facturation',
        items: [
          'Facturation électronique Facture A et B avec ARCA/AFIP',
          'Notes de Crédit type A et B associées aux factures',
          'Génération de bons de livraison téléchargeables en PDF',
          'Livre de TVA ventes et achats',
          'Remises automatiques par revendeur et par client',
        ],
      },
      {
        title: 'Gestion Commerciale',
        items: [
          'Import en masse de produits depuis Excel',
          'Modification en masse des prix',
          'Contrôle de stock et matières premières',
          'Revendeurs avec remise ou commission configurable',
          'Statistiques par jour, client, produit et croisement',
        ],
      },
      {
        title: 'Système',
        items: [
          'Base de données locale avec IndexedDB (sans serveur)',
          'Utilisateurs avec rôles et permissions configurables',
          'Sauvegarde complète en JSON et restauration',
          'Migration depuis FoxPro (Husky POS)',
        ],
      },
    ],
    integrationUses: [
      'Facturation électronique avec CAE (Facture A/B, NC A/B)',
      'Base de données locale sans serveur externe',
      'Import et export de produits et données',
      'Factures, notes de crédit et bons de livraison en PDF',
      'Téléchargement de sauvegardes, PDFs et fichiers Excel',
    ],
    highlights: [
      'App de bureau avec Electron — fonctionne hors ligne sans serveur',
      'Base de données locale avec IndexedDB dans le navigateur d\'Electron',
      'Facturation électronique réelle avec AFIP (Facture A/B, NC A/B)',
      'Revendeurs avec remise ou commission appliqués à la facturation',
      'Import en masse de produits et modification en masse des prix depuis Excel',
      'Migration complète depuis FoxPro (Husky POS) vers une technologie moderne',
    ],
  },
  'movilprint': {
    subtitle: 'Plateforme de Design et d\'Impression Personnalisée',
    categories: 'Web App • Éditeur Visuel • Drag & Drop • Connexion Sociale',
    description:
      'Plateforme web pour créer des designs personnalisés d\'impression. L\'utilisateur choisit un modèle, accède à l\'éditeur visuel avec drag & drop où il ajoute des textes avec +15 polices, des images et des éléments décoratifs, positionne chaque élément librement et envoie le design pour impression. Connexion avec Google et Facebook, système de points, et panel d\'administration pour gérer les modèles et designs reçus.',
    features: [
      {
        title: 'Éditeur Visuel',
        items: [
          'Canevas interactif avec glisser-déposer',
          'Textes avec +15 polices, taille, couleur, gras, italique',
          'Images et éléments décoratifs par modèle',
          'Redimensionner, pivoter, copier et coller des éléments',
          'Système de calques (z-index) pour la profondeur',
          'Aperçu et impression directe depuis le navigateur',
        ],
      },
      {
        title: 'Pour l\'Utilisateur',
        items: [
          'Inscription par e-mail, Google ou Facebook',
          'Sélection de modèle avec aperçu',
          'Mes designs sauvegardés avec historique',
          'Système de points de fidélité',
          'Récupération de mot de passe par e-mail',
        ],
      },
      {
        title: 'Panel d\'Administration',
        items: [
          'Gestion des modèles avec dimensions en cm',
          'Ressources par modèle (formes et images)',
          'Gestion des designs reçus',
          'Modérateurs pour la révision des designs',
        ],
      },
    ],
    integrationUses: [
      'Connexion avec compte Google',
      'Connexion avec compte Facebook via Graph API',
      'Traitement des paiements',
      'Codes de vérification pour la récupération de mot de passe',
      'Glisser-déposer des éléments dans l\'éditeur',
    ],
    highlights: [
      'Éditeur visuel complet avec canevas interactif et drag & drop',
      'Modèles dynamiques avec dimensions en cm et ressources propres',
      '+15 polices typographiques avec contrôle complet des styles',
      'Système de calques pour contrôler la profondeur des éléments',
      'Connexion sociale avec Google et Facebook',
      'Designs persistants avec tous les éléments sauvegardés en BD',
    ],
  },
  'padel': {
    subtitle: 'Plateforme de Gestion de Tournois de Padel',
    categories: 'Web App • Sports • Classement • Next.js 15',
    description:
      'Plateforme web pour l\'organisation et le suivi de tournois de padel. Gestion de tournois avec catégories, joueurs avec clubs et points, matchs avec résultats par sets, calendrier d\'événements, circuit par catégorie, classement filtré par genre et catégorie, et recherche de joueurs. Panel d\'administration et panel de modérateur pour la saisie des résultats.',
    features: [
      {
        title: 'Pour le Public',
        items: [
          'Calendrier des tournois avec localisation et contact',
          'Circuit organisé par catégorie avec toutes les dates',
          'Résultats des tournois avec matchs et sets',
          'Classement des joueurs par catégorie et genre',
          'Recherche de joueur avec position et top 5',
        ],
      },
      {
        title: 'Panel d\'Administration',
        items: [
          'Gestion des tournois avec date, genre et catégorie',
          'Gestion des joueurs avec club, catégorie et points',
          'Gestion des catégories et clubs',
          'Administration des utilisateurs avec rôles',
        ],
      },
      {
        title: 'Panel de Modérateur',
        items: [
          'Saisie des matchs avec équipes et résultats par sets',
          'Modification des matchs existants',
          'Création de joueurs et tournois',
        ],
      },
    ],
    integrationUses: [],
    highlights: [
      'Circuit de tournois organisé automatiquement par catégorie',
      'Classement dynamique en temps réel par catégorie et genre',
      'Matchs individuels et par équipes avec résultats par sets',
      'État automatique du tournoi selon les matchs saisis',
      'Trois niveaux d\'accès (public, modérateur, administrateur)',
      'Suppression logique des catégories pour restauration',
    ],
  },
  '4me': {
    subtitle: 'Plateforme de Podologie avec Scan 3D et Chaussures Orthopédiques',
    categories: 'App Mobile • Web Admin • Scan 3D • Stripe',
    description:
      'Système intégral de podologie avec scan 3D des pieds. Les podologues scannent les pieds depuis l\'app mobile, les photos sont traitées en modèles 3D avec Metashape, et des projets de chaussures orthopédiques sur mesure sont créés. Paiements avec Stripe en USD, stockage sur Google Drive, visualisation 3D dans le panel web, notifications par e-mail et communication en temps réel.',
    features: [
      {
        title: 'App Mobile (Podologue)',
        items: [
          'Scan des pieds avec caméra (multiples angles)',
          'Téléversement en masse avec progression en temps réel via WebSocket',
          'Visualisation du modèle 3D du pied',
          'Créer un projet en choisissant modèle, couleur, semelle et semelle intérieure',
          'Suivi de 12 états du projet',
        ],
      },
      {
        title: 'Panel Web (Admin)',
        items: [
          'Gestion des cliniques, podologues, patients et projets',
          'Visualisation 3D avec Google Model Viewer',
          'Gestion des modèles de chaussures avec couleurs',
          'Mise à jour des états avec notification par e-mail',
        ],
      },
      {
        title: 'Traitement 3D',
        items: [
          'Photos traitées avec Agisoft Metashape (Python)',
          'Images stockées sur Google Drive par patient',
          'Tâche cron pour vérifier l\'état du traitement',
          'Nettoyage automatique des scans précédents',
        ],
      },
    ],
    integrationUses: [
      'Liens de paiement automatiques pour les projets en USD',
      'Stockage de photos organisé par patient',
      'Traitement photogrammétrique pour les modèles 3D',
      'Visualisation 3D des pieds dans le navigateur',
      'Progression en temps réel du téléversement d\'images',
      'E-mails d\'état et liens de paiement',
      'Capture de photos depuis l\'app mobile',
    ],
    highlights: [
      'Scan 3D des pieds depuis le téléphone avec traitement Metashape',
      'Téléversement en masse sur Google Drive avec progression en temps réel',
      'Visualisation de modèles 3D (GLB) dans le navigateur',
      'Pipeline de 12 états avec notification par e-mail à chaque changement',
      'Paiements avec Stripe en USD avec lien automatique par projet',
      'Trois systèmes coordonnés : app mobile + panel web + serveur',
    ],
  },
  'trewa-club': {
    subtitle: 'Plateforme de Vente de Billets pour Événements avec Système de Points',
    categories: 'Web App • Événements • Facturation AFIP • QR • Mercado Pago',
    description:
      'Plateforme web pour la vente de billets pour événements nocturnes et soirées. Achat avec Mercado Pago, tickets avec code QR, facturation électronique automatique avec AFIP, système de points échangeables, codes de réduction, types de billets avec quotas, revendeurs avec statistiques, scan QR à l\'entrée et connexion avec Google/Facebook. Cinq rôles différenciés.',
    features: [
      {
        title: 'Pour l\'Utilisateur',
        items: [
          'Catalogue d\'événements avec types de billets (Général, VIP, Early Bird)',
          'Codes de réduction (fixe ou pourcentage) avec quota et expiration',
          'Tickets avec code QR unique pour scan à l\'entrée',
          'Facture électronique automatique avec AFIP à chaque achat',
          'Système de points (1000 $ = 1 point) échangeables contre des produits',
          'Connexion avec Google, Facebook ou e-mail',
        ],
      },
      {
        title: 'Panel d\'Administration',
        items: [
          'Analyse par événement : ventes, genre, âge, heures de pointe, tranches',
          'Scan de billets QR avec validation anti-double-scan',
          'Génération en masse de billets (invitations)',
          'Gestion des revendeurs avec statistiques détaillées',
          'Recherche d\'utilisateurs avec historique d\'achats',
        ],
      },
      {
        title: 'Système de Revendeurs',
        items: [
          'Lien propre pour les ventes associées',
          'Statistiques par revendeur et par événement',
          'Meilleur revendeur et événement le plus vendu',
        ],
      },
    ],
    integrationUses: [
      'Paiements avec webhooks automatiques (ARS)',
      'Facture B automatique avec CAE à chaque achat',
      'Connexion avec compte Google',
      'Connexion avec compte Facebook',
      'Codes QR pour tickets et scan à l\'entrée',
      'Confirmation d\'achat, points et récupération',
    ],
    highlights: [
      'Facturation électronique automatique avec AFIP à chaque achat',
      'Types de billets avec tranches, quotas et horaires de vente indépendants',
      'Scan QR avec validation anti-double-scan et marge de 6 heures',
      'Système de points échangeables contre des produits du catalogue',
      'Analyse détaillée par événement (genre, âge, heures de pointe, tranches)',
      'Cinq rôles : utilisateur, caisse, opérateur, revendeur, administrateur',
    ],
  },
  'nodominium': {
    subtitle: 'Site Web de Centre Culturel et Éducatif au Salvador',
    categories: 'Site Statique • HTML/CSS/JS • Bitcoin • Google Maps',
    description:
      'Site web pour Casa de Nodominium, centre indépendant d\'éducation et de culture à Playa Las Tunas, La Unión, El Salvador. Événements avec slider tactile et lightboxes, information institutionnelle, carte interactive Google Maps, formulaire de contact avec FormSubmit et dons en Bitcoin avec code QR. Site entièrement statique sans backend.',
    features: [
      {
        title: 'Contenu du Site',
        items: [
          'Slider d\'événements avec support tactile (swipe)',
          'Lightboxes avec description, caractéristiques et sponsors',
          'Présentation du centre avec vision et activités',
          'Carte interactive Google Maps avec localisation',
          'Formulaire de contact fonctionnel avec FormSubmit',
          'Dons en Bitcoin avec code QR scannable',
        ],
      },
      {
        title: 'Design et UX',
        items: [
          'Animations CSS (fadeInUp, zoomIn, float, slide-in)',
          'Navigation fixe inférieure sur toutes les pages',
          'Responsive avec breakpoints à 480px, 768px et 1024px',
          'Dégradés sombres avec accents orange/doré',
        ],
      },
    ],
    integrationUses: [
      'Carte interactive avec localisation du centre',
      'Formulaire de contact sans backend',
      'Dons en cryptomonnaie avec code QR',
      'Iconographie dans toute l\'interface',
    ],
    highlights: [
      'Site entièrement statique sans serveur ni base de données',
      'Slider d\'événements avec support tactile pour mobiles',
      'Lightboxes avec information complète de chaque événement',
      'Dons en Bitcoin avec QR scannable',
      'Animations CSS pures sans librairies externes',
      'Formulaire fonctionnel avec FormSubmit sans backend propre',
    ],
  },
  'mdt-ingenieros': {
    subtitle: 'Contrôle des Heures et Gestion de Projets de Topographie',
    categories: 'Web App • RH • Facturation • Signatures Numériques',
    description:
      'Plateforme web pour l\'enregistrement et le contrôle des heures travaillées, la gestion de projets et la génération de rapports pour une entreprise de topographie. Journées avec activités, signatures numériques, approbation des heures supplémentaires, rapports de paie en PDF, facturation mensuelle avec TVA et retenues, calendrier visuel avec états, rotation du personnel et surveillance des heures non enregistrées. Devise : USD.',
    features: [
      {
        title: 'Pour le Collaborateur',
        items: [
          'Enregistrement de journée avec activités, horaires et signatures numériques',
          'Demande d\'heures supplémentaires avec motif et approbation',
          'Historique des entrées et état des demandes',
          'Notifications internes d\'approbations et affectations',
        ],
      },
      {
        title: 'Panel d\'Administration',
        items: [
          'Projets avec planning hebdomadaire et tarifs horaires',
          'Calendrier visuel avec états quotidiens par projet',
          'Approbation des heures supplémentaires avec mise à jour automatique',
          'Facturation mensuelle avec TVA (13%) et retenue (1%)',
          'Rapports de paie et salaires ventilés par projet',
          'Rotation du personnel et surveillance des heures non enregistrées',
        ],
      },
      {
        title: 'Rapports et PDFs',
        items: [
          'Résumé quotidien en PDF envoyé par e-mail au superviseur',
          'Rapport de paie mensuel téléchargeable',
          'Facture mensuelle par projet avec ventilation des coûts',
          'Calendrier des heures supplémentaires en PDF',
        ],
      },
    ],
    integrationUses: [
      'Résumés quotidiens, heures supplémentaires et factures par e-mail avec PDF joint',
      'PDFs professionnels A4 pour résumés, paie et factures',
      'Calcul des heures travaillées, supplémentaires et déduction du déjeuner',
      'Téléversement de signatures numériques',
    ],
    highlights: [
      'Calcul intelligent des heures supplémentaires par jour, jour férié et déjeuner',
      'Signatures numériques du topographe et du superviseur sur les rapports',
      'Facturation mensuelle automatique avec TVA (13%) et retenue (1%)',
      'Calendrier visuel avec états quotidiens par projet',
      'Surveillance des heures non enregistrées dans les 7 derniers jours',
      'Rotation du personnel entre projets avec ventilation mensuelle',
    ],
  },
  'storybox': {
    subtitle: 'Éditeur Interactif d\'Histoires et Présentations avec Programmation Visuelle',
    categories: 'Web App • Éducation • Programmation Visuelle • Blockly',
    description:
      'Application web interactive pour créer des histoires et présentations multimédias avec programmation visuelle. L\'utilisateur crée des scènes avec des arrière-plans, des objets déplaçables et redimensionnables, des textes avec plusieurs polices et styles, de la musique de fond par scène, des transitions animées et programme le comportement des objets à l\'aide de blocs visuels (Blockly). Mode présentation en plein écran, export PDF, sauvegarde serveur avec miniature automatique, système annuler/rétablir, copier-coller, et interface bilingue espagnol/anglais.',
    features: [
      {
        title: 'Éditeur de Scènes',
        items: [
          'Scènes illimitées avec panneau latéral de miniatures',
          'Scène de couverture avec carrousel d\'arrière-plans et titre automatique',
          'Réordonner les scènes avec drag & drop',
          'Arrière-plans de couleur (HSL) ou image de bibliothèque/téléversement personnel',
        ],
      },
      {
        title: 'Objets et Textes',
        items: [
          'Bibliothèque d\'objets par catégories + téléversement personnalisé',
          'Drag & drop, redimensionnement (8 points), rotation et calques (z-index)',
          '5 polices, 6 tailles, gras/italique/souligné et couleur HSL',
          'Mode narration fixe en bas de la scène',
        ],
      },
      {
        title: 'Programmation Visuelle (Blockly)',
        items: [
          '5 blocs de mouvement : droite, gauche, haut, bas, suivre',
          '7 blocs d\'apparence : agrandir, réduire, pivoter, commentaire, son, afficher, masquer',
          '2 blocs de contrôle : répéter et arrêter',
          'Exécution séquentielle automatique pendant la présentation',
        ],
      },
      {
        title: 'Multimédia et Export',
        items: [
          'Musique de fond par scène avec bibliothèque et téléversement de MP3',
          '8 directions de transition avec 3 vitesses',
          'Présentation en plein écran avec navigation',
          'Export PDF (html2canvas + jsPDF) et impression directe',
        ],
      },
    ],
    integrationUses: [
      'Moteur de programmation visuelle par blocs pour le comportement des objets',
      'Capture de scènes en image pour PDFs et miniatures',
      'Génération de documents PDF exportables',
      'Réordonner scènes et blocs avec drag & drop',
      'Positionnement libre des objets dans la scène',
      'Sélecteur de couleur HSL pour arrière-plans et textes',
      'Animations de panneaux et interface',
      'Notifications visuelles d\'actions',
    ],
    highlights: [
      'Programmation visuelle avec 17 types de blocs (mouvement, apparence, contrôle)',
      'Éditeur de canevas avec drag & drop, 8 points de prise, rotation et calques',
      'Transitions animées dans 8 directions avec 3 vitesses',
      'Musique de fond par scène avec lecture automatique en boucle',
      'Système complet annuler/rétablir basé sur des piles',
      'Export PDF haute qualité avec html2canvas + jsPDF',
      'Interface bilingue espagnol/anglais avec textes dynamiques',
      'Sauvegarde serveur avec miniature automatique générée',
    ],
  },
  'konecta': {
    subtitle: 'Application Mobile de Contrôle de Présence et Permissions de Travail',
    categories: 'App Mobile • RH • QR • Géolocalisation • Google Maps',
    description:
      'Application mobile multiplateforme pour le contrôle de présence des employés. Enregistrement d\'entrée et sortie par code QR ou géolocalisation GPS, historique de présence avec vue cartographique sur Google Maps, demande de permissions et incidents avec pièces jointes, support multi-entreprise, selfie pour photo de profil, rôles différenciés (employé et superviseur) et navigation adaptable selon le rôle de l\'utilisateur.',
    features: [
      {
        title: 'Pour l\'Employé',
        items: [
          'Enregistrement de présence par QR ou géolocalisation GPS',
          'État en temps réel (en attente, entrée, sortie)',
          'Historique de présence paginé avec recherche et filtres',
          'Vue cartographique avec marqueurs de localisation des enregistrements',
          'Demande de permissions avec motif, dates et pièces jointes',
          'Selfie pour photo de profil avec caméra frontale',
        ],
      },
      {
        title: 'Pour le Superviseur',
        items: [
          'Panel d\'opérations avec gestion des permissions',
          'Approbation ou rejet des demandes des employés',
          'Configuration avancée d\'association employé/entreprise',
        ],
      },
      {
        title: 'Authentification et Sécurité',
        items: [
          'Connexion avec document et code de vérification par entreprise',
          'Support pour plusieurs entreprises par utilisateur',
          'Tokens de session avec détection d\'expiration',
          'Récupération de mot de passe par e-mail',
        ],
      },
    ],
    integrationUses: [
      'Carte interactive avec localisations des enregistrements de présence',
      'Capture de selfies pour photo de profil',
      'Scan de codes QR pour enregistrement de présence',
      'Géolocalisation GPS pour enregistrement de présence',
      'Joindre des documents aux demandes de permissions',
      'Génération de QR de confirmation après l\'enregistrement',
    ],
    highlights: [
      'Double méthode d\'enregistrement : code QR et géolocalisation GPS',
      'Carte interactive Google Maps avec historique de localisations',
      'Support multi-entreprise avec sélection par session',
      'Rôles différenciés avec navigation adaptable (employé/superviseur)',
      'Permissions et incidents avec pièces jointes et flux d\'approbation',
      'Selfie pour profil avec caméra frontale encodé en Base64',
    ],
  },
  'el-lobito-4pe': {
    subtitle: 'Calculatrice de Scores de Golf pour 4 Joueurs',
    categories: 'App Mobile • Sports • Calcul • React Native',
    description:
      'Application mobile pour calculer les scores d\'un jeu de paris de golf entre 4 joueurs. Grille interactive de 18 trous x 4 joueurs avec calcul automatique des points selon des règles conditionnelles (égalités précédentes, nombre de marqués par trou). Prix par unité configurable et résultats en pesos colombiens. Application autonome sans backend ni base de données.',
    features: [
      {
        title: 'Mécanique du Jeu',
        items: [
          'Grille interactive de 18 trous x 4 joueurs (A, B, C, D)',
          'Marquage de cellules avec retour visuel en vert',
          'Calcul automatique des points avec règles conditionnelles',
          'Égalités cumulatives qui multiplient le trou suivant',
        ],
      },
      {
        title: 'Résultats et Configuration',
        items: [
          'Prix par unité configurable comme multiplicateur',
          'Résultats en pesos colombiens (COP)',
          'Résultats négatifs mis en évidence en rouge',
          'Bouton de réinitialisation pour recommencer le jeu',
        ],
      },
    ],
    integrationUses: [],
    highlights: [
      'Règles de score ajustées pour les parties à 4 joueurs',
      'Moteur de calcul avec multiplicateurs par égalités précédentes',
      'Application autonome : un seul composant, sans backend',
      'Format de devise colombienne (COP) avec locale es-CO',
      'APK compilé inclus prêt à installer',
      'Grille avec défilement horizontal pour un affichage confortable',
    ],
  },
  'casino-online': {
    subtitle: 'Plateforme de Jeux de Hasard avec Paris en Temps Réel',
    categories: 'Web App • Gaming • WebSocket • Redux • Firebase',
    description:
      'Plateforme de casino en ligne avec 5 jeux interactifs (Machine à sous, Aviator, Blackjack, Roulette et Hunt the Ace), paris en temps réel avec WebSocket, panel d\'administration avec graphiques statistiques, système de parrainage avec bonus, programme de staking BFG, gestion des dépôts et retraits, CDN d\'images avec ImageKit, et authentification sécurisée avec JWT et rôles différenciés.',
    features: [
      {
        title: 'Jeux Disponibles',
        items: [
          'Machine à sous avec multiples lignes de gain et jackpots',
          'Aviator avec multiplicateur croissant et encaissement en temps réel',
          'Blackjack classique contre la maison',
          'Roulette européenne avec paris sur numéros, couleurs et sections',
          'Hunt the Ace : trouver l\'as parmi les cartes mélangées',
        ],
      },
      {
        title: 'Système Financier',
        items: [
          'Paris en temps réel avec WebSocket (Socket.io)',
          'Solde avec mise à jour instantanée',
          'Dépôts avec traitement automatique',
          'Retraits avec flux d\'approbation',
          'Historique complet des transactions',
        ],
      },
      {
        title: 'Parrainage et Staking',
        items: [
          'Code de parrainage unique avec 10 $ de bonus',
          'Panel de parrainages avec statistiques de conversion',
          'Programme BFG Staking avec rendements calculés',
          'Visualisation du capital investi et des gains',
        ],
      },
      {
        title: 'Panel d\'Administration',
        items: [
          'Tableau de bord avec Chart.js et ApexCharts',
          'Gestion des utilisateurs avec blocage de comptes',
          'Surveillance des jeux et sessions actives',
          'Contrôle des transactions et approbation des retraits',
          'Rapports de revenus et performance',
        ],
      },
    ],
    integrationUses: [
      'CDN d\'images pour les assets du casino et ressources graphiques',
      'Paris, résultats et mises à jour de solde en temps réel',
      'E-mails transactionnels et notifications',
      'Authentification et notifications push',
      'Graphiques statistiques dans le tableau de bord d\'administration',
    ],
    highlights: [
      '5 jeux complets avec logique de casino implémentée de zéro',
      'Paris et résultats en temps réel avec WebSocket (Socket.io)',
      'Stack MERN complet avec triple librairie UI (MUI + Ant Design + Bootstrap)',
      'Système de parrainage avec bonus automatique de 10 $',
      'Programme BFG Staking avec rendements calculés',
      'CDN d\'images avec ImageKit pour un chargement optimisé',
      'État global avec Redux Toolkit pour une expérience fluide entre les jeux',
      'Panel d\'administration avec graphiques en temps réel',
    ],
  },
  'giordota': {
    subtitle: 'Marketplace d\'Items Dota 2 avec Paris et Boutique Gaming',
    categories: 'Web App • Gaming • Microservices • Steam API • Astro + Svelte',
    description:
      'Plateforme de commerce d\'items Dota 2 avec marketplace, système de paris avec monnaies virtuelles, 5 types de caisses de loot, bots Steam automatisés pour l\'échange d\'items, chat en temps réel multicanal, système de triple portefeuille, réseau social intégré, système VIP avec niveaux, bot Discord, et passerelles de paiement pour le Pérou (Mercado Pago, PayPal, PagoEfectivo). Architecture de microservices avec Java Spring Boot, 4 services Node.js et frontend Astro/Svelte.',
    features: [
      {
        title: 'Marketplace et Bots',
        items: [
          'Catalogue d\'items Dota 2 avec prix Steam',
          'Achat et vente d\'items avec portefeuille interne',
          'Bots Steam automatisés avec trade offers',
          'Gestion de multiples bots avec Steam Guard intégré',
          'Vérification d\'inventaire en temps réel',
        ],
      },
      {
        title: 'Caisses de Loot et Paris',
        items: [
          '5 types de caisses : normales, gratuites, sociales, fan et formulaire',
          'Animation d\'ouverture avec révélation de l\'item gagné',
          'Paris avec monnaies virtuelles sur événements et matchs',
          'Probabilités configurables par l\'administrateur',
        ],
      },
      {
        title: 'Triple Portefeuille et Paiements',
        items: [
          'Portefeuille achats, portefeuille retraits et portefeuille gratuit',
          'Dépôts avec Mercado Pago, PayPal et PagoEfectivo',
          'Retraits avec demande et traitement',
          'Historique complet des transactions',
        ],
      },
      {
        title: 'Communauté et Chat',
        items: [
          'Chat en temps réel : support, groupe, admin et privé',
          'Réseau social avec publications et système d\'amis',
          'Bot Discord avec commandes et notifications',
          'Système VIP avec niveaux et avantages exclusifs',
        ],
      },
    ],
    integrationUses: [
      'Authentification, inventaires et données d\'items Dota 2',
      'Échange automatisé d\'items avec trade offers',
      'Passerelle de paiement pour le marché péruvien',
      'Passerelle de paiement internationale',
      'Paiements en espèces dans les points de paiement au Pérou',
      'Communauté étendue avec commandes et notifications',
      'Chat, paris et mises à jour en temps réel',
    ],
    highlights: [
      'Architecture de microservices : Spring Boot + 4 services Node.js',
      'Bots Steam automatisés avec trade offers et Steam Guard',
      '5 types de loot boxes avec probabilités configurables',
      'Triple portefeuille (achats, retraits, gratuit) pour contrôle financier granulaire',
      'Frontend moderne avec Astro + Svelte pour SSG + interactivité',
      '3 passerelles de paiement pour le Pérou : Mercado Pago, PayPal et PagoEfectivo',
      'Chat multicanal en temps réel avec WebSocket',
      'Bot Discord intégré à la plateforme',
    ],
  },
  'saucedo-abogados': {
    subtitle: 'Système de Gestion Juridique avec Signature Électronique et Intelligence Artificielle',
    categories: 'Web App • App Mobile • Juridique • IA • Signature Électronique • Laravel',
    description:
      'Système intégral de gestion pour cabinet juridique avec dossiers légaux en 6 onglets spécialisés, gestion de clients, devis avec flux d\'approbation, recouvrements, calendrier intégré, 6 types de rapports, indexation de documents avec IA (OCR et résumé automatique), signature électronique avec SignNow, intégration avec Google Drive et Google Calendar, panel Filament, app mobile et 3 rôles différenciés. Backend Laravel avec 48 modèles et 88 endpoints.',
    features: [
      {
        title: 'Gestion des Dossiers',
        items: [
          'Dossiers avec 6 onglets : info, parties, documents, mouvements, notes, tâches',
          'États du dossier : nouveau, en cours, en attente, clôturé, archivé',
          'Affectation à un ou plusieurs avocats',
          'Mouvements procéduraux chronologiques et notes internes',
          'Tâches en attente avec date limite et responsable',
        ],
      },
      {
        title: 'Devis et Recouvrements',
        items: [
          'Devis avec flux d\'approbation (3 rôles)',
          'États : brouillon, en attente, approuvé, envoyé, accepté, rejeté',
          'Conversion automatique du devis en dossier',
          'Suivi des paiements partiels et totaux',
          'Rappels de recouvrements proches de l\'échéance',
        ],
      },
      {
        title: 'IA et Signature Électronique',
        items: [
          'OCR de documents PDF avec extraction de données',
          'Résumé automatique avec IA (OpenAI)',
          'Recherche intelligente dans les documents indexés',
          'Signature électronique avec SignNow avec suivi d\'état',
          'Téléchargement de documents signés avec validité juridique',
        ],
      },
      {
        title: 'Calendrier et Rapports',
        items: [
          'FullCalendar avec synchronisation bidirectionnelle vers Google Calendar',
          'Événements : audiences, réunions, échéances et tâches',
          '6 rapports : dossiers, facturation, recouvrements, productivité, clients, devis',
          'Panel Filament avec tableau de bord et audit',
        ],
      },
    ],
    integrationUses: [
      'Signature électronique de documents juridiques avec validité légale',
      'Stockage et synchronisation de documents du dossier',
      'Synchronisation bidirectionnelle d\'événements et audiences',
      'OCR, résumé automatique et extraction de données des documents',
      'Calendrier visuel interactif avec multiples vues',
      'Panel d\'administration avec tableau de bord et gestion des ressources',
      'Génération de PDFs pour devis et rapports',
      'Tests end-to-end automatisés',
    ],
    highlights: [
      'Indexation de documents avec IA : OCR + résumé automatique avec OpenAI',
      'Signature électronique avec SignNow avec validité juridique',
      'Triple intégration Google : Drive, Calendar et OAuth',
      '48 modèles et 88 endpoints en Laravel pour une gestion juridique complète',
      'Flux d\'approbation de devis avec 3 rôles différenciés',
      '6 types de rapports pour la prise de décision du cabinet',
      'Dossiers avec 6 onglets spécialisés pour une gestion intégrale',
      'Tests E2E avec Playwright et app mobile complémentaire',
    ],
  },
  'grupo-sdg': {
    subtitle: 'Système de Gestion d\'Entreprise avec Facturation Électronique CFDI 4.0 (Mexique)',
    categories: 'Web App • ERP • Facturation CFDI • Laravel 12 • SAT',
    description:
      'Système de gestion d\'entreprise pour le marché mexicain avec facturation électronique CFDI 4.0. Pipeline de ventes complet (devis → commande → facture → paiement → recouvrement), émission de justificatifs fiscaux avec certificats CSD, timbrage avec PAC, validation du RFC contre la liste noire du SAT, module de trésorerie, politiques de mots de passe avec expiration et 4 tables d\'audit. Backend Laravel 12 avec 40+ modèles et 80+ endpoints documentés avec Swagger.',
    features: [
      {
        title: 'Pipeline de Ventes',
        items: [
          'Flux complet : devis → commande → facture → paiement → recouvrement',
          'Conversion automatique entre étapes avec transfert de données',
          'Compléments de paiement selon la réglementation SAT',
          'Suivi des comptes clients avec échéances',
        ],
      },
      {
        title: 'Facturation CFDI 4.0',
        items: [
          'Justificatifs fiscaux numériques selon la réglementation SAT',
          'Signature numérique avec Certificat de Sceau Digital (CSD)',
          'Timbrage fiscal avec PAC (Fournisseur Autorisé)',
          'Validation du RFC contre la liste noire du SAT',
          'Génération de XML fiscal et représentation imprimée en PDF',
          'Annulation de CFDI avec motif selon la réglementation',
        ],
      },
      {
        title: 'Trésorerie et Sécurité',
        items: [
          'Comptes bancaires, mouvements et rapprochement',
          'Flux de trésorerie avec projection de recettes et dépenses',
          'Politiques de mots de passe avec expiration et blocage',
          '4 tables d\'audit : accès, données, fiscal, admin',
        ],
      },
      {
        title: 'Administration',
        items: [
          'Tableau de bord avec métriques de ventes et facturation',
          'Catalogues officiels du SAT intégrés',
          'Impôts configurables : IVA, ISR, IEPS',
          'Gestion des utilisateurs avec rôles et permissions',
        ],
      },
    ],
    integrationUses: [
      'Timbrage fiscal des justificatifs CFDI 4.0',
      'Catalogues officiels et validation du RFC contre la liste noire',
      'Signature numérique des justificatifs fiscaux',
      'Représentations imprimées de CFDI en PDF',
      'Documentation interactive de 80+ endpoints',
    ],
    highlights: [
      'Facturation CFDI 4.0 complète avec timbrage PAC et certificats CSD',
      'Pipeline de ventes de bout en bout : du devis au recouvrement',
      'Validation du RFC contre la liste noire du SAT',
      '4 tables d\'audit pour une traçabilité complète',
      'Politiques de mots de passe d\'entreprise avec expiration périodique',
      '40+ modèles et 80+ endpoints documentés avec Swagger',
      'Module de trésorerie avec rapprochement bancaire',
      'Catalogues officiels du SAT intégrés (usage CFDI, régime, forme de paiement)',
    ],
  },
  'goodbye-friend': {
    subtitle: 'Cimetière Virtuel 3D pour Animaux avec Tombes Interactives',
    categories: 'Web 3D • App Mobile • Three.js • React Three Fiber • Stripe • Laravel',
    description:
      'Plateforme de mémorial virtuel pour animaux avec un cimetière 3D complet. Plus de 1 075 parcelles en 25+ rangées, 3 styles de tombe, 57 objets 3D de tribut, niches circulaires et mausolées. Caméra en première personne avec pointer lock sur bureau et joysticks tactiles sur mobile, minimap, rendu par distance, profils d\'animaux avec galeries, mémoriaux collaboratifs, marketplace de collaborateurs et paiements avec Stripe. App mobile avec React Native et backend Laravel.',
    features: [
      {
        title: 'Cimetière 3D',
        items: [
          'Monde 3D avec terrain, pelouse, chemins, arbres et décoration',
          '1 075+ parcelles en 25+ rangées avec 3 styles de tombe',
          '57 objets 3D de tribut : fleurs, bougies, couronnes, jouets',
          '10 niches circulaires et mausolées premium',
          'Éclairage dynamique et rendu par distance',
        ],
      },
      {
        title: 'Navigation et Caméra',
        items: [
          'Première personne avec pointer lock sur bureau',
          'Joysticks virtuels tactiles sur mobile',
          'Minimap avec position actuelle et tombes occupées',
          'Navigation directe vers une tombe spécifique',
          'Système de collisions avec les objets du cimetière',
        ],
      },
      {
        title: 'Mémoriaux et Communauté',
        items: [
          'Profil d\'animal avec biographie et galerie photos',
          'Tributs virtuels d\'autres visiteurs',
          'Messages de condoléances sur chaque mémorial',
          'Mémorial public ou privé selon la préférence',
          'Marketplace d\'artistes pour la personnalisation',
        ],
      },
      {
        title: 'Paiements et App Mobile',
        items: [
          'Plans de mémorial : basique, premium, mausolée (Stripe)',
          'Achat de tributs 3D supplémentaires',
          'App mobile avec visite 3D et joysticks tactiles',
          'Gestion du profil et de la galerie depuis le téléphone',
        ],
      },
    ],
    integrationUses: [
      'Moteur 3D pour le cimetière avec tombes, objets et ambiance',
      'Helpers et composants pour Three.js (caméra, contrôles, loaders)',
      'Paiements pour plans de mémorial, tributs et marketplace',
      'Capture et sélection de photos depuis l\'app mobile',
    ],
    highlights: [
      'Cimetière 3D avec 1 075+ parcelles, 3 styles de tombe et 57 objets de tribut',
      'Caméra hybride : pointer lock sur desktop, joysticks tactiles sur mobile',
      'Rendu optimisé par distance pour maintenir 60fps',
      'Minimap de navigation avec position en temps réel',
      'Marketplace de collaborateurs pour personnalisation des mémoriaux',
      'Trois plateformes : web 3D (Three.js/R3F), app mobile (React Native), backend (Laravel)',
      'Système de collisions pour un parcours réaliste',
      'Monétisation avec Stripe : plans, tributs et paiements aux collaborateurs',
    ],
  },
  'safetrade': {
    subtitle: 'Marketplace de Signaux de Trading avec Abonnements',
    categories: 'App Mobile • Fintech • Trading • Stripe • Zustand • React Query',
    description:
      'Application mobile pour l\'achat et la vente de signaux de trading. Les traders publient des signaux avec analyse technique et les clients s\'abonnent pour les recevoir. Deux rôles différenciés, abonnements récurrents avec Stripe, tableau de bord de performance, exploration de traders avec métriques de performance, graphiques statistiques, navigation par onglets selon le rôle, et validation avec Zod. Stack moderne : React Native, Expo, TypeScript, Zustand et React Query.',
    features: [
      {
        title: 'Pour les Traders',
        items: [
          'Publier des signaux avec actif, direction, take profit et stop loss',
          'Tableau de bord avec % de réussite, retour cumulé et série gagnante',
          'Gestion des abonnés et état des abonnements',
          'Historique des signaux avec résultat (gagnant/perdant)',
          'Graphiques de performance avec lignes et barres',
        ],
      },
      {
        title: 'Pour les Clients',
        items: [
          'Répertoire de traders avec métriques et prix d\'abonnement',
          'Abonnement mensuel à un ou plusieurs traders',
          'Signaux en temps réel avec détail et analyse',
          'Gestion des abonnements : voir, suspendre ou annuler',
        ],
      },
      {
        title: 'Paiements et Compte',
        items: [
          'Abonnements récurrents mensuels avec Stripe SDK natif',
          'Historique des prélèvements, factures et état des paiements',
          'Configuration des notifications et profil',
        ],
      },
    ],
    integrationUses: [
      'Abonnements récurrents par carte de crédit/débit',
      'Configuration de services et notifications',
      'Graphiques de rendement et statistiques des traders',
    ],
    highlights: [
      'Deux rôles avec interfaces et navigation complètement différenciées',
      'Stack moderne : Zustand + React Query + Zod pour état, cache et validation',
      'Stripe natif dans React Native pour paiements sans quitter l\'app',
      'Métriques automatiques : % de réussite, retour cumulé, série gagnante',
      'TypeScript complet dans toute l\'application',
      'Expo Router avec onglets conditionnels selon le rôle de l\'utilisateur',
      'React Query avec cache et synchronisation optimiste',
      'Abonnements récurrents avec prélèvement mensuel automatique',
    ],
  },
  'talenthunt': {
    subtitle: 'Chatbot de Recrutement avec IA et Analyse de CVs',
    categories: 'Web App • RH • IA • GPT-4 • Chatbot • Laravel 12 • Filament',
    description:
      'Plateforme de recrutement automatisé avec chatbot conversationnel IA. Reçoit les candidats via un chatbot configurable, analyse les CVs avec GPT-4 (extraction automatique des données personnelles, expérience et formation depuis les PDFs), gère les candidatures avec flux Kanban, s\'intègre avec TalentTalent API pour la publication d\'offres, constructeur de flux de chatbot, tableau de bord analytique (funnel, time-to-hire, performance par recruteur) et 3 rôles. Panel Filament.',
    features: [
      {
        title: 'Chatbot Conversationnel',
        items: [
          'Flux de conversation configurable par offre d\'emploi',
          'Constructeur de flux avec étapes : questions ouvertes, choix multiples, fichiers',
          'Réponses dynamiques selon les réponses du candidat',
          'Téléversement de CV directement dans la conversation',
          'Interface type chat conviviale pour le candidat',
        ],
      },
      {
        title: 'Analyse de CVs avec GPT-4',
        items: [
          'Lecture automatique du texte dans les PDFs avec OCR',
          'Extraction de données personnelles : nom, e-mail, téléphone, localisation',
          'Extraction de l\'expérience professionnelle : entreprises, postes, dates',
          'Identification des compétences techniques et relationnelles',
          'Champs automatiques enregistrés dans le profil du candidat',
        ],
      },
      {
        title: 'Gestion des Candidatures',
        items: [
          'Kanban : nouveau → examen → entretien → test → offre → embauché',
          'Détail du candidat avec CV analysé et réponses du chatbot',
          'Notes internes du recruteur et timeline complet',
          'Affectation des candidatures aux recruteurs',
        ],
      },
      {
        title: 'Analytique et Administration',
        items: [
          'Funnel de conversion : visites → candidatures → embauches',
          'Time-to-hire et performance par recruteur',
          'Publication d\'offres sur des portails via TalentTalent API',
          '3 rôles : administrateur, recruteur, lecteur (Filament)',
        ],
      },
    ],
    integrationUses: [
      'Analyse intelligente de CVs : données, expérience, formation et compétences',
      'Publication d\'offres sur de multiples portails d\'emploi',
      'Panel d\'administration avec tableau de bord et gestion des ressources',
      'Interactivité du chatbot et composants dynamiques',
      'Génération de rapports en PDF',
    ],
    highlights: [
      'Analyse de CVs avec GPT-4 : extraction automatique de données, expérience et compétences',
      'Constructeur visuel de flux de chatbot sans nécessité de programmer',
      'Tableau de bord analytique : funnel de conversion, time-to-hire, performance par recruteur',
      'Intégration avec TalentTalent API pour publier sur de multiples portails',
      '3 rôles différenciés : administrateur, recruteur et lecteur',
      'Filament v3.3 comme panel principal avec tableau de bord professionnel',
      'Flux Kanban complet pour la gestion visuelle des candidats',
      'Laravel 12 avec Alpine.js, Livewire et Tailwind CSS v4',
    ],
  },
  'biznes': {
    subtitle: 'Plateforme SaaS de Cartes de Visite Numériques',
    categories: 'Web App • SaaS • E-commerce • QR • Mercado Pago • Redux',
    description:
      'Plateforme SaaS pour créer des cartes de visite numériques personnalisables et partageables par lien ou QR. Éditeur visuel avec aperçu en temps réel, réseaux sociaux intégrés, boutons personnalisés, vCard téléchargeable, système d\'abonnements avec Mercado Pago, boutique de produits avec panier, panel d\'administration complet, statistiques détaillées d\'interactions (visites, clics, téléchargements, temps d\'affichage) et communication en temps réel avec Socket.IO.',
    features: [
      {
        title: 'Éditeur de Cartes',
        items: [
          'Design étape par étape : photo, couverture, logo, bio, poste, entreprise',
          'Réseaux sociaux avec favoris mis en avant (Instagram, LinkedIn, TikTok, etc.)',
          'Personnalisation visuelle : couleurs, polices, bordures, alignement, arrière-plans',
          'Aperçu en temps réel au format téléphone',
          'QR automatique téléchargeable et vCard pour enregistrer le contact',
        ],
      },
      {
        title: 'Abonnements et Boutique',
        items: [
          'Plans avec permissions configurables à un niveau granulaire',
          'Paiements et abonnements avec Mercado Pago',
          'Boutique de produits avec catégories, variations et panier',
          'Coupons de réduction et remises par abonnement',
        ],
      },
      {
        title: 'Statistiques',
        items: [
          'Visites de la carte avec date et appareil',
          'Clics sur les réseaux sociaux, e-mail et boutons',
          'Téléchargements de vCard et temps d\'affichage',
          'Contacts reçus par formulaire intégré',
        ],
      },
      {
        title: 'Panel d\'Administration',
        items: [
          'Gestion des produits, catégories, abonnements et commandes',
          'Blog, FAQs, marques, Hero Cards et annonces',
          'Gestion des coupons, tickets et utilisateurs',
          'Import en masse depuis fichiers Excel',
        ],
      },
    ],
    integrationUses: [
      'Paiements d\'abonnements, souscriptions et achats en boutique',
      'Connexion rapide avec compte Google',
      'E-mails transactionnels (achat, connexion, abonnements)',
      'Génération automatique de codes QR par carte',
      'Fichiers de contact (.vcf) téléchargeables',
      'Communication en temps réel',
      'Optimisation et conversion d\'images en WebP',
      'Documentation interactive de l\'API',
    ],
    highlights: [
      'SaaS complet avec abonnements et permissions granulaires par plan',
      'Éditeur visuel avancé avec aperçu en temps réel au format téléphone',
      'Statistiques détaillées : visites, clics, téléchargements, temps d\'affichage',
      'QR + vCard automatiques pour chaque carte numérique',
      'Boutique de produits avec panier et checkout avec Mercado Pago',
      'Optimisation d\'images automatique en WebP avec Sharp',
      'Import en masse d\'utilisateurs/cartes depuis Excel',
      'Tâches programmées avec Agenda.js pour l\'expiration des abonnements',
    ],
  },
  'citamovil': {
    subtitle: 'Système de Gestion de Réparations de Dispositifs Mobiles',
    categories: 'Web App • Service Technique • WhatsApp Bot • Next.js 14 • Grossistes',
    description:
      'Plateforme web pour un service technique de réparation de téléphones, tablettes et appareils électroniques en Espagne. Deviseur automatique avec tableau de prix par modèle, panne et zone, système d\'ordres avec suivi par code à 5 chiffres, notifications automatiques par e-mail et WhatsApp, gestion de grossistes avec approbation et suivi, blog avec éditeur enrichi, et panel d\'administration avec contenu 100% éditable.',
    features: [
      {
        title: 'Pour le Client',
        items: [
          'Deviseur automatique par catégorie, marque, modèle et pannes',
          'Sélection multiple de pannes avec prix en temps réel',
          'Suivi de réparation avec code à 5 chiffres',
          'Notifications par e-mail et WhatsApp à chaque changement d\'état',
          'Données réelles des provinces et communes d\'Espagne',
        ],
      },
      {
        title: 'Système de Grossistes',
        items: [
          'Inscription avec approbation manuelle de l\'administrateur',
          'Commandes de réparation en volume avec adresse de collecte',
          'Suivi indépendant avec code et états propres',
          'Notifications par e-mail au grossiste et à l\'admin',
        ],
      },
      {
        title: 'Panel d\'Administration',
        items: [
          'Tableau de prix par modèle, panne et zone (local/extérieur/grossiste)',
          'Gestion des catégories, marques, modèles et pannes',
          'Ordres avec changement d\'état et notification automatique',
          'Blog avec éditeur enrichi, tags et articles associés',
          'Contenu 100% éditable sans toucher au code',
          'Export du tableau de prix en PDF',
        ],
      },
    ],
    integrationUses: [
      'Messages automatiques à la création de commandes ou au changement d\'état (connexion QR)',
      'E-mails avec modèles HTML pour commandes, états et grossistes',
      'Génération de PDFs avec tableau de prix',
      'Avis Google sur la page d\'accueil',
    ],
    highlights: [
      'Deviseur intelligent avec prix par modèle, panne et zone géographique',
      'Bot WhatsApp intégré avec whatsapp-web.js (sans services payants)',
      'Notifications multicanal : e-mail + WhatsApp automatiques',
      'Système de grossistes avec inscription, approbation et suivi',
      'Tableau de prix dynamique avec drag & drop et export PDF',
      'Contenu 100% éditable depuis le panel d\'administration',
    ],
  },
}
