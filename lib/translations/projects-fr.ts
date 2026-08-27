import type { ProjectI18n } from './types'

export const fr: Record<string, ProjectI18n> = {
  'cap-medical': {
    subtitle: 'App mobile pour gérer des services médicaux et des chirurgies',
    categories: 'App Mobile • React Native • Multi-Module',
    description:
      'App mobile pour une entreprise qui gère des services chirurgicaux. Depuis le téléphone, on crée des services en trois étapes, on suit leur état, on enregistre des mouvements avec position GPS et pièces jointes, et on saisit les paiements et les contre-reçus. Il y a aussi un répertoire de techniciens, d\'hôpitaux et de centres médicaux, des dossiers patients et des notifications. Les permissions dépendent du rôle de chaque utilisateur.',
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
      'Permissions par rôle',
      'Création de services en 3 étapes avec catalogues dynamiques',
      '10 écrans pour chaque service',
      'Mouvements avec position GPS automatique',
      'Historique de tous les changements',
      'Toute l\'app en TypeScript',
    ],
  },
  'petnder': {
    subtitle: 'App pour propriétaires d\'animaux, avec adoption et services à proximité',
    categories: 'App Mobile • React Native • Marketplace Pet',
    description:
      'C\'est une app mobile pour les gens qui ont des animaux. On y cherche des services pet-friendly par catégorie, on adopte des animaux avec des filtres et un chat, et on signale les animaux perdus avec leur position. Les entreprises entrent avec un autre profil, avec leur propre navigation, pour publier des services avec carte et horaires, créer des coupons avec QR et voir leurs statistiques. Il y a un chat en temps réel, des notifications push et des communautés avec rôles et modération.',
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
      'Deux profils séparés, un pour les utilisateurs et un pour les entreprises',
      'Adoption avec filtres et chat entre les deux parties',
      'Communautés avec rôles et modération du contenu',
      'Portefeuille numérique avec solde et historique pour les entreprises',
      'Succès à débloquer pour gamifier l\'usage',
      'Onboarding animé avec Reanimated',
    ],
  },
  'controla2': {
    subtitle: 'ERP pour entreprises de construction et d\'ingénierie au Chili',
    categories: 'SaaS • ERP • Facturation Électronique',
    description:
      'C\'est un ERP web pensé pour les entreprises de construction et d\'ingénierie qui veulent tout avoir au même endroit. Il couvre les projets avec budgets et Gantt, les RH avec calcul de la paie, la facturation électronique, les achats, l\'inventaire et la prévention des risques. Il est adapté à la réglementation chilienne (AFP, ISAPRE, DTE, RUT) et compte huit rôles avec des flux d\'approbation.',
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
      'Tableau de bord avec métriques en temps réel',
      'Génère des PDF, Excel et CSV automatiquement',
      '8 rôles prédéfinis avec flux d\'approbation',
      'Adapté à la réglementation chilienne (AFP, ISAPRE, DTE, RUT)',
      'Module SSOMA pour la prévention des risques',
      'Alertes immédiates quand quelque chose attend une approbation',
    ],
  },
  'alhambra': {
    subtitle: 'Site pour des guides touristiques de l\'Alhambra, en 7 langues',
    categories: 'Web App • Tourisme • Panel Admin • Multilingue',
    description:
      'Site pour une entreprise de guides touristiques de Grenade, en Espagne, qui organise des visites de l\'Alhambra. Chaque circuit a sa page, les réservations arrivent par e-mail depuis un formulaire et il y a un contact direct par WhatsApp. Il se traduit automatiquement en 7 langues. Le propriétaire gère les circuits et le blog depuis le panel, et modifie les textes en cliquant dessus directement sur la page.',
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
      'Tout le contenu se gère sans aide technique',
      'Textes modifiables en cliquant sur la page',
      'Rendu côté serveur pour le SEO',
      '7 langues pour le tourisme international',
      'Réservations par e-mail et contact par WhatsApp',
      'JWT, mots de passe chiffrés et rôles',
    ],
  },
  'biznes-empresa': {
    subtitle: 'Cartes numériques pour tous les employés d\'une entreprise',
    categories: 'Web App • SaaS • Cartes Numériques • Rôles',
    description:
      'Version entreprise de Biznes. Une entreprise s\'inscrit avec son logo et son identité visuelle, invite ses employés par e-mail ou via un fichier Excel, et leur crée des cartes numériques à partir de modèles aux couleurs de la marque. Chaque carte a son QR, sa vCard et son propre lien. Les rôles définissent qui peut modifier quoi, et les statistiques de visites, clics et téléchargements s\'affichent toutes ensemble dans des graphiques.',
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
      'Toute la gestion de l\'entreprise depuis un seul panel',
      'Modèles à l\'image de la marque qui s\'appliquent tout seuls',
      'Rôles et permissions par employé',
      'Ajout en masse d\'employés depuis Excel',
      'Statistiques de toutes les cartes dans des graphiques',
      'Mises à jour en temps réel avec WebSockets',
    ],
  },
  'blackphone': {
    subtitle: 'Site pour un service de réparation de téléphones en Espagne',
    categories: 'Web App • E-commerce • WhatsApp Bot • Panel Admin',
    description:
      'Site et système de gestion pour un atelier de réparation de téléphones en Espagne. Le client choisit son modèle et ses pannes, voit le prix tout de suite et suit ensuite sa réparation avec un code à 5 chiffres. Chaque changement d\'état lui arrive par e-mail et WhatsApp. Il y a un flux à part pour les grossistes, avec approbation et commandes en volume, et un panel pour gérer les prix, les modèles, les pannes, les états et le blog.',
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
      'Devis par modèle, panne et zone',
      'Alertes par e-mail et WhatsApp à chaque changement d\'état',
      'Bot WhatsApp maison, sans service payant',
      'Grossistes avec leur propre flux de commandes',
      'Grille de prix modifiable et exportable en PDF',
      'Provinces et communes réelles d\'Espagne',
    ],
  },
  'casepe': {
    subtitle: 'Site institutionnel d\'une chambre pétrolière, modifiable en direct',
    categories: 'Web Institutionnel • CMS en Direct • Blog • Next.js 14',
    description:
      'Site web pour CASEPE, la chambre qui regroupe les entreprises d\'opérations pétrolières spéciales en Argentine. Sa particularité, c\'est qu\'il n\'y a pas de panel à part pour le contenu. Quand l\'administrateur est connecté, il clique sur n\'importe quel texte ou image de la page et le modifie sur place, et il peut aussi ajouter ou retirer des éléments dans chaque section. Il y a un blog d\'actualités avec articles liés et un formulaire de contact qui arrive par e-mail.',
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
      'Édition en direct, sans panel séparé',
      'Propriétés imbriquées mises à jour avec Lodash',
      'Sections où l\'on ajoute et retire des éléments depuis le site',
      'Blog avec étiquettes et articles liés',
      'E-mails de contact avec modèle HTML',
      'Animations au scroll dans toutes les sections',
    ],
  },
  'dental-digital': {
    subtitle: 'Système de gestion pour cliniques dentaires, avec facture AFIP',
    categories: 'SaaS • Facturation AFIP • Odontogramme • Mercado Pago',
    description:
      'C\'est un SaaS pour dentistes et cliniques d\'Argentine. Il y a des fiches patients avec mutuelle, des rendez-vous dans un calendrier, un odontogramme par dent, des devis qui se transforment en facture et des consentements avec signature numérique. Il émet des factures électroniques avec ARCA/AFIP (A, B et C, avec notes de crédit et de débit) et envoie le PDF par e-mail ou WhatsApp. Les abonnements sont payés avec Mercado Pago et chaque clinique peut avoir plusieurs praticiens avec des rôles.',
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
      'Facture électronique avec ARCA/AFIP et CAE',
      'Génère les certificats RSA et CSR pour se lier à l\'AFIP',
      'Odontogramme par dent avec export PDF',
      'Abonnements avec Mercado Pago et webhooks',
      'Plusieurs utilisateurs par clinique avec rôles de propriétaire, praticien et administrateur',
      'Sauvegarde complète en JSON avec restauration',
    ],
  },
  'sunchales-pos': {
    subtitle: 'Gestion commerciale et point de vente avec facture AFIP',
    categories: 'SaaS • POS • Facturation AFIP • Code-barres',
    description:
      'Système web de gestion commerciale pour les commerces d\'Argentine. On enregistre les produits avec code-barres, on saisit les ventes et les achats, et on suit le stock et les matières premières. Il émet des factures électroniques avec ARCA/AFIP, transforme les devis en ventes et gère les garanties et les retours. L\'accès se paie par abonnement avec Mercado Pago.',
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
      'Achats, stock, ventes, facturation et rapports au même endroit',
      'Facture électronique avec ARCA/AFIP et CAE',
      'Codes-barres générés et lus depuis le système',
      'Garanties et retours (RMA) avec suivi',
      'Devis qui se transforment en ventes',
      'SMTP configurable par utilisateur pour envoyer les factures',
    ],
  },
  'fuku-shop': {
    subtitle: 'Boutique en ligne de vêtements anime et urbains, à Rafaela',
    categories: 'E-commerce • Next.js • Mercado Pago • Cloudinary',
    description:
      'Boutique en ligne pour une marque de vêtements de Rafaela, Santa Fe, au style anime, asiatique et jeux vidéo. Chaque produit a des variantes par couleur avec leurs propres photos, un guide des tailles avec mesures réelles et un zoom dans la galerie. On filtre par catégorie, type, couleur, taille et prix, on paie avec Mercado Pago et l\'utilisateur a son historique, ses adresses et ses avis. Le panel permet de charger tout le catalogue.',
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
      'Variantes par couleur avec photos indépendantes',
      'Filtres combinés par catégorie, type, couleur, taille et prix',
      'Génération statique avec revalidation incrémentale pour le SEO',
      'Sitemap XML généré automatiquement',
      'Images sur Cloudinary',
      'Catégories avec sous-catégories, types et sous-types',
    ],
  },
  'julian-winners': {
    subtitle: 'Tombolas en ligne avec tickets numériques et paiement Mercado Pago',
    categories: 'Web App • Tombolas • Mercado Pago • Parrainage',
    description:
      'Plateforme de vente de tickets de tombola en ligne en Colombie. L\'utilisateur achète des packs de tickets avec Mercado Pago, reçoit des numéros au hasard sans doublon et la facture en PDF lui arrive par e-mail. Il y a un panier pour plusieurs tombolas, un parrainage avec points, des modérateurs qui attribuent des tickets à la main pour les ventes en personne et un outil pour choisir le gagnant par numéro. Les textes, les images et même les identifiants Mercado Pago et SMTP se configurent depuis le panel.',
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
      'Tickets au hasard sans doublon, avec format selon le total de la tombola',
      'Webhooks Mercado Pago avec contrôle des doublons',
      'Attribution manuelle par les modérateurs pour les ventes en personne',
      'Gagnant choisi par numéro de ticket',
      'Export Excel des utilisateurs, achats et factures',
      'Trois rôles : utilisateur, modérateur et administrateur',
    ],
  },
  'limcal': {
    subtitle: 'Boutique en ligne en gros de produits d\'entretien',
    categories: 'E-commerce • Mercado Pago • Revendeurs • CMS',
    description:
      'Boutique en ligne pour LIMCAL, une entreprise argentine de produits d\'entretien qui vend aux commerces. Les comptes s\'inscrivent avec leur CUIT et quelqu\'un de l\'équipe les approuve avant qu\'ils puissent acheter. Chaque produit a un achat minimum, le paiement passe par Mercado Pago et la commande s\'enregistre toute seule via le webhook. Il y a une carte des revendeurs avec Google Maps, filtrable par province et par ville, et le contenu du site se modifie depuis le panel.',
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
      'Comptes approuvés à la main avant de pouvoir acheter',
      'Achat minimum par produit, pensé pour la vente en gros',
      'Carte des revendeurs avec Google Maps, filtrable par zone',
      'Réponse aux messages de contact depuis le panel',
      'Contenu modifiable avec propriétés imbriquées',
      'Commandes enregistrées automatiquement avec les webhooks de Mercado Pago',
    ],
  },
  'limcal-pos': {
    subtitle: 'Logiciel de bureau de ventes et facturation, avec Electron',
    categories: 'App Bureau • Electron • Facturation AFIP • IndexedDB',
    description:
      'Logiciel de bureau pour la gestion commerciale de LIMCAL, qui a remplacé un vieux système en FoxPro. Il gère les produits, les ventes, les achats, le stock, les matières premières et les revendeurs avec commission ou remise. Il émet des factures A et B avec ARCA/AFIP, des notes de crédit, des bons de livraison en PDF et le livre de TVA. La base de données est locale avec IndexedDB, donc ça fonctionne sans serveur ni connexion.',
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
      'App de bureau avec Electron, fonctionne hors ligne',
      'Base de données locale avec IndexedDB',
      'Factures A et B et notes de crédit avec l\'AFIP',
      'Remise ou commission par revendeur appliquée à la facturation',
      'Import de produits et changement de prix en masse depuis Excel',
      'Migration des données depuis FoxPro (Husky POS)',
    ],
  },
  'movilprint': {
    subtitle: 'Éditeur en ligne de designs à envoyer à l\'impression',
    categories: 'Web App • Éditeur Visuel • Drag & Drop • Connexion Sociale',
    description:
      'Site pour créer des designs personnalisés et les envoyer à l\'impression. L\'utilisateur choisit un modèle et entre dans un éditeur où il fait glisser des textes avec plus de 15 polices, des images et des éléments décoratifs, les redimensionne, les fait pivoter et les organise en calques. Quand il a fini, il envoie le design et celui-ci reste enregistré dans son compte. Il y a une connexion avec Google et Facebook, des points de fidélité et un panel pour gérer les modèles et examiner les designs reçus.',
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
      'Éditeur avec canevas interactif et drag and drop',
      'Modèles avec dimensions en cm et ressources propres',
      'Plus de 15 polices avec contrôle des styles',
      'Calques pour ordonner la profondeur des éléments',
      'Connexion avec Google et Facebook',
      'Designs enregistrés en base de données avec tous leurs éléments',
    ],
  },
  'padel': {
    subtitle: 'Tournois, résultats et classement de padel',
    categories: 'Web App • Sports • Classement • Next.js 15',
    description:
      'Site pour organiser et suivre des tournois de padel. Le public voit le calendrier des tournois, le circuit par catégorie, les résultats match par match avec les sets et le classement par genre et catégorie. Il peut aussi chercher un joueur et voir sa position. Un modérateur saisit les matchs et les résultats, et l\'administrateur gère les tournois, les joueurs, les clubs et les catégories.',
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
      'Circuit construit automatiquement par catégorie',
      'Classement par catégorie et genre mis à jour tout seul',
      'Matchs individuels et par équipes avec résultat par sets',
      'L\'état du tournoi change selon les matchs saisis',
      'Trois niveaux d\'accès : public, modérateur et administrateur',
      'Catégories avec suppression logique pour pouvoir les restaurer',
    ],
  },
  '4me': {
    subtitle: 'Scan 3D des pieds et chaussures orthopédiques sur mesure',
    categories: 'App Mobile • Web Admin • Scan 3D • Stripe',
    description:
      'Système pour des podologues qui fabriquent des chaussures orthopédiques sur mesure. Depuis l\'app mobile, ils prennent des photos du pied sous plusieurs angles, elles sont envoyées sur Google Drive avec une progression en temps réel et un traitement avec Metashape les transforme en modèle 3D. Avec ce modèle, on monte un projet en choisissant modèle, couleur, semelle et semelle intérieure, qui passe par 12 états avec un e-mail à chaque changement. Le panel web affiche les pieds en 3D et les paiements passent par Stripe en dollars.',
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
      'Scan 3D du pied depuis le téléphone, traité avec Metashape',
      'Envoi en masse sur Google Drive avec progression en temps réel',
      'Modèles 3D (GLB) visibles dans le navigateur',
      '12 états de projet avec e-mail à chaque changement',
      'Lien de paiement Stripe en USD par projet',
      'Trois parties coordonnées : app mobile, panel web et serveur',
    ],
  },
  'trewa-club': {
    subtitle: 'Billetterie pour soirées, avec QR et facture AFIP',
    categories: 'Web App • Événements • Facturation AFIP • QR • Mercado Pago',
    description:
      'Plateforme de vente de billets pour des événements nocturnes. L\'utilisateur paie avec Mercado Pago, reçoit un ticket avec QR et la facture électronique AFIP part toute seule à chaque achat. Il y a des types de billets avec quotas et vagues, des codes de réduction, des points échangeables contre des produits et une connexion avec Google ou Facebook. À l\'entrée, on scanne les QR avec contrôle du double scan, et les revendeurs ont leur lien et leurs statistiques.',
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
      'Facture électronique AFIP à chaque achat',
      'Types de billets avec vagues, quotas et horaires de vente propres',
      'Scan QR avec contrôle du double scan et marge de 6 heures',
      'Points échangeables contre des produits du catalogue',
      'Analyse par événement : genre, âge, heures de pointe et vagues',
      'Cinq rôles : utilisateur, caisse, opérateur, revendeur et administrateur',
    ],
  },
  'nodominium': {
    subtitle: 'Site statique pour un centre culturel au Salvador',
    categories: 'Site Statique • HTML/CSS/JS • Bitcoin • Google Maps',
    description:
      'Site pour Casa de Nodominium, un centre d\'éducation et de culture à Playa Las Tunas, au Salvador. Il présente les événements dans un slider avec swipe et des lightboxes avec le détail et les sponsors, l\'histoire du centre, une carte Google Maps et un formulaire de contact qui fonctionne avec FormSubmit. Il accepte les dons en Bitcoin avec un QR. C\'est du HTML, CSS et JavaScript pur, sans backend.',
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
      'Site statique, sans serveur ni base de données',
      'Slider d\'événements avec swipe sur mobile',
      'Lightboxes avec le détail de chaque événement',
      'Dons en Bitcoin avec QR',
      'Animations en CSS pur, sans bibliothèque',
      'Formulaire de contact avec FormSubmit',
    ],
  },
  'mdt-ingenieros': {
    subtitle: 'Suivi des heures et des projets pour une entreprise de topographie',
    categories: 'Web App • RH • Facturation • Signatures Numériques',
    description:
      'Système web pour une entreprise de topographie qui avait besoin de suivre les heures de son équipe par projet. Le collaborateur enregistre sa journée avec ses activités, une signature numérique et, si besoin, demande des heures supplémentaires que le superviseur approuve. Côté administratif, il y a un calendrier par projet, des rapports de paie en PDF et une facturation mensuelle avec TVA et retenue. Les résumés quotidiens partent par e-mail et tout est géré en dollars.',
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
      'Calcul des heures supplémentaires selon le jour, les fériés et la pause déjeuner',
      'Signature numérique du topographe et du superviseur sur chaque feuille',
      'Facture mensuelle par projet avec TVA de 13 % et retenue de 1 %',
      'Calendrier avec état quotidien par projet',
      'Alerte sur les heures non saisies des 7 derniers jours',
      'Rotation du personnel entre projets avec détail mensuel',
    ],
  },
  'storybox': {
    subtitle: 'Éditeur d\'histoires avec blocs de programmation visuelle',
    categories: 'Web App • Éducation • Programmation Visuelle • Blockly',
    description:
      'C\'est une app web pour créer des histoires et des présentations par scènes. On y place des arrière-plans, des objets qu\'on déplace et redimensionne, des textes avec différentes polices et de la musique par scène, puis on programme ce que fait chaque objet avec des blocs visuels Blockly. Il y a un mode présentation en plein écran, un export PDF, annuler et rétablir, copier-coller, et l\'interface est en espagnol et en anglais. Tout est enregistré sur le serveur avec une miniature automatique.',
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
      '17 types de blocs de mouvement, d\'apparence et de contrôle',
      'Canevas avec drag and drop, 8 poignées, rotation et calques',
      'Transitions dans 8 directions avec 3 vitesses',
      'Musique de fond par scène, en boucle',
      'Annuler et rétablir basés sur des piles',
      'Export PDF avec html2canvas et jsPDF',
      'Interface en espagnol et en anglais',
      'Enregistrement sur le serveur avec miniature générée automatiquement',
    ],
  },
  'konecta': {
    subtitle: 'App de pointage des employés par QR ou GPS',
    categories: 'App Mobile • RH • QR • Géolocalisation • Google Maps',
    description:
      'App mobile pour que les employés pointent à l\'entrée et à la sortie en scannant un QR ou avec leur position GPS. Chaque pointage reste dans un historique avec recherche et s\'affiche sur une carte Google Maps. On peut aussi demander des congés et signaler des incidents avec pièces jointes, que le superviseur approuve ou refuse depuis son panel. Un même utilisateur peut appartenir à plusieurs entreprises et la navigation change selon le rôle.',
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
      'Pointage par QR ou par position GPS',
      'Carte Google Maps avec l\'historique des positions',
      'Plusieurs entreprises par utilisateur, avec choix par session',
      'Navigation différente pour employé et superviseur',
      'Congés et incidents avec pièces jointes et approbation',
      'Selfie de profil avec la caméra frontale, enregistré en Base64',
    ],
  },
  'el-lobito-4pe': {
    subtitle: 'Calculatrice de paris de golf pour 4 joueurs',
    categories: 'App Mobile • Sports • Calcul • React Native',
    description:
      'App mobile pour tenir les comptes d\'un jeu de paris de golf entre quatre amis. C\'est une grille de 18 trous par 4 joueurs. On marque qui a gagné chaque trou et l\'app calcule les points selon les règles du jeu, y compris les égalités qui s\'accumulent pour le trou suivant. On règle le prix par unité et les résultats sortent en pesos colombiens. Pas de backend ni de base de données.',
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
      'Règles de score pour des parties à 4 joueurs',
      'Multiplicateurs pour les égalités accumulées',
      'Un seul composant, sans backend',
      'Format en pesos colombiens avec la locale es-CO',
      'APK compilé prêt à installer',
      'Grille avec défilement horizontal',
    ],
  },
  'casino-online': {
    subtitle: 'Casino en ligne avec 5 jeux et paris en temps réel',
    categories: 'Web App • Gaming • WebSocket • Redux • Firebase',
    description:
      'Plateforme de casino en ligne avec cinq jeux : machine à sous, Aviator, blackjack, roulette et Hunt the Ace. Les paris et les résultats passent par WebSocket, donc le solde se met à jour instantanément. Il y a des dépôts, des retraits avec approbation, un historique des transactions, un parrainage avec bonus et un programme de staking. Le panel d\'administration affiche des graphiques, les sessions actives et permet de bloquer des comptes.',
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
      '5 jeux avec la logique de casino programmée de zéro',
      'Paris et résultats en temps réel avec Socket.io',
      'Stack MERN avec MUI, Ant Design et Bootstrap',
      'Parrainage avec bonus automatique de 10 $',
      'Programme BFG Staking avec rendements calculés',
      'Images servies depuis ImageKit',
      'État global avec Redux Toolkit partagé entre les jeux',
      'Panel d\'administration avec graphiques en temps réel',
    ],
  },
  'saucedo-abogados': {
    subtitle: 'Gestion pour un cabinet d\'avocats, avec signature électronique et IA',
    categories: 'Web App • App Mobile • Juridique • IA • Signature Électronique • Laravel',
    description:
      'Système de gestion pour un cabinet d\'avocats. Chaque dossier a ses parties, ses documents, ses actes de procédure, ses notes et ses tâches, et peut être confié à un ou plusieurs avocats. Les devis passent par un flux d\'approbation à trois rôles et se transforment en dossier, et les recouvrements ont des rappels d\'échéance. Les PDF sont indexés avec OCR et résumé automatique via OpenAI, les documents se signent avec SignNow et le calendrier se synchronise dans les deux sens avec Google Calendar. Le backend est en Laravel, avec 48 modèles et 88 endpoints, et une app mobile l\'accompagne.',
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
      'OCR et résumé automatique des documents avec OpenAI',
      'Signature électronique avec SignNow, à valeur juridique',
      'Intégration avec Google Drive, Calendar et OAuth',
      '48 modèles et 88 endpoints en Laravel',
      'Devis avec approbation à trois rôles',
      '6 rapports : dossiers, facturation, recouvrements, productivité, clients et devis',
      'Dossiers organisés en 6 onglets',
      'Tests end-to-end avec Playwright et app mobile complémentaire',
    ],
  },
  'grupo-sdg': {
    subtitle: 'ERP pour le Mexique avec facturation CFDI 4.0',
    categories: 'Web App • ERP • Facturation CFDI • Laravel 12 • SAT',
    description:
      'Système de gestion pour une entreprise mexicaine, avec facturation électronique CFDI 4.0. Le flux de vente va du devis à la commande, à la facture, au paiement et au recouvrement, en reprenant les données d\'une étape à la suivante. Les justificatifs sont signés avec des certificats CSD, timbrés par un PAC et le RFC est vérifié contre la liste noire du SAT. Il y a un module de trésorerie avec rapprochement bancaire, des politiques de mots de passe avec expiration et quatre tables d\'audit. Le backend est en Laravel 12, avec plus de 40 modèles et 80 endpoints documentés dans Swagger.',
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
      'Facturation CFDI 4.0 avec timbrage PAC et certificats CSD',
      'Flux de vente du devis au recouvrement',
      'Vérification du RFC contre la liste noire du SAT',
      '4 tables d\'audit : accès, données, fiscal et admin',
      'Mots de passe avec expiration et blocage',
      'Plus de 40 modèles et 80 endpoints documentés avec Swagger',
      'Trésorerie avec rapprochement bancaire',
      'Catalogues officiels du SAT : usage CFDI, régime et mode de paiement',
    ],
  },
  'goodbye-friend': {
    subtitle: 'Cimetière virtuel en 3D pour se souvenir de ses animaux',
    categories: 'Web 3D • App Mobile • Three.js • React Three Fiber • Stripe • Laravel',
    description:
      'Mémorial virtuel pour animaux avec un cimetière en 3D qu\'on parcourt à la première personne. Il compte plus de 1 075 parcelles, trois styles de tombe, 57 objets de tribut, des niches et des mausolées. Sur ordinateur, on navigue avec pointer lock et sur téléphone avec des joysticks tactiles, avec minimap et collisions. Chaque animal a son profil avec biographie et photos, où les autres laissent des tributs et des condoléances. Les plans et les tributs se paient avec Stripe, il y a un marketplace d\'artistes, une app mobile en React Native et un backend en Laravel.',
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
      'Cimetière 3D avec plus de 1 075 parcelles, 3 styles de tombe et 57 objets de tribut',
      'Pointer lock sur ordinateur et joysticks tactiles sur mobile',
      'Rendu par distance pour tenir 60 fps',
      'Minimap avec la position en temps réel',
      'Marketplace d\'artistes pour personnaliser les mémoriaux',
      'Web 3D avec Three.js et R3F, app mobile en React Native et backend en Laravel',
      'Collisions avec les objets du cimetière',
      'Paiements avec Stripe : plans, tributs et paiements aux collaborateurs',
    ],
  },
  'safetrade': {
    subtitle: 'App pour vendre et suivre des signaux de trading',
    categories: 'App Mobile • Fintech • Trading • Stripe • Zustand • React Query',
    description:
      'App mobile où des traders publient des signaux de trading et d\'autres utilisateurs s\'abonnent pour les recevoir. Le trader saisit l\'actif, la direction, le take profit et le stop loss, et dispose d\'un tableau de bord avec taux de réussite, rendement cumulé et série en cours. Le client explore les traders, s\'abonne au mois avec Stripe et peut mettre en pause ou annuler quand il veut. Faite avec React Native, Expo, TypeScript, Zustand et React Query.',
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
      'Deux rôles avec navigation et interface différentes',
      'Zustand, React Query et Zod pour l\'état, le cache et la validation',
      'Stripe natif dans React Native, sans sortir de l\'app',
      'Métriques calculées : taux de réussite, rendement cumulé et série',
      'Toute l\'app en TypeScript',
      'Onglets Expo Router qui changent selon le rôle',
      'React Query avec cache et mises à jour optimistes',
      'Abonnements avec prélèvement mensuel automatique',
    ],
  },
  'biznes': {
    subtitle: 'Cartes de visite numériques, avec QR et abonnements',
    categories: 'Web App • SaaS • E-commerce • QR • Mercado Pago • Redux',
    description:
      'C\'est un SaaS pour créer des cartes de visite numériques et les partager par lien ou QR. L\'utilisateur ajoute photo, logo, bio, réseaux et boutons, change les couleurs et les polices, et voit le résultat en temps réel dans un format téléphone. Chaque carte génère son QR et une vCard pour enregistrer le contact. Les abonnements et la boutique sont payés avec Mercado Pago, et le panel affiche les visites, les clics, les téléchargements et le temps passé à l\'écran.',
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
      'Abonnements avec permissions configurables par plan',
      'Éditeur avec aperçu en temps réel au format téléphone',
      'Statistiques de visites, clics, téléchargements et temps à l\'écran',
      'QR et vCard générés pour chaque carte',
      'Boutique avec panier et paiement via Mercado Pago',
      'Images converties en WebP avec Sharp',
      'Import en masse d\'utilisateurs et de cartes depuis Excel',
      'Tâches planifiées avec Agenda.js pour expirer les abonnements',
    ],
  },
  'citamovil': {
    subtitle: 'Site pour un service de réparation de téléphones et tablettes en Espagne',
    categories: 'Web App • Service Technique • WhatsApp Bot • Next.js 14 • Grossistes',
    description:
      'Site pour un service technique qui répare téléphones, tablettes et autres appareils en Espagne. Le client fait son devis en choisissant catégorie, marque, modèle et pannes, et le prix change selon la zone. Il suit ensuite la réparation avec un code à 5 chiffres et reçoit chaque changement par e-mail et WhatsApp. Les grossistes s\'inscrivent, l\'administrateur les approuve et ils passent des commandes en volume avec adresse de collecte. Le contenu du site se modifie depuis le panel sans toucher au code.',
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
      'Prix par modèle, panne et zone',
      'Bot WhatsApp avec whatsapp-web.js, sans service payant',
      'Alertes automatiques par e-mail et WhatsApp',
      'Grossistes avec inscription, approbation et suivi dédié',
      'Grille de prix avec drag and drop et export PDF',
      'Tout le contenu modifiable depuis le panel',
    ],
  },
}
