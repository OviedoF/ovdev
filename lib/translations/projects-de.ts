import type { ProjectI18n } from './types'

export const de: Record<string, ProjectI18n> = {
  'cap-medical': {
    subtitle: 'Mobile App zur Verwaltung medizinischer Dienstleistungen und Operationen',
    categories: 'Mobile App • React Native • Multi-Modul',
    description:
      'Plattformübergreifende mobile Anwendung für die umfassende Verwaltung medizinischer Dienstleistungen und chirurgischer Eingriffe. Ermöglicht die Verwaltung chirurgischer Leistungen mit Statusverfolgung, Technikerverwaltung, Standort- und Krankenhauskontrolle, Zahlungserfassung, Patientenaktenverwaltung und Benachrichtigungen. Umfasst ein rollenbasiertes Berechtigungssystem, GPS-Geolokalisierung, integrierte Kamera und QR-Code-Generierung.',
    features: [
      {
        title: 'Dienstverwaltung',
        items: [
          'Auflistung mit Statusfilter und Suche',
          'Erstellung in 3 Schritten mit dynamischen Katalogen',
          'Bewegungen mit GPS-Geolokalisierung und Anhängen',
          'Zahlungen, Gegenbelege und Änderungshistorie',
        ],
      },
      {
        title: 'Technikerverzeichnis',
        items: [
          'Durchsuchbares Verzeichnis mit alphabetischer Gruppierung',
          'Filterung nach Rolle (Assistent, Inhaber)',
          'Detailliertes Profil mit beruflichen Daten',
        ],
      },
      {
        title: 'Standortverwaltung',
        items: [
          'Krankenhäuser und medizinische Zentren mit Suchfunktion',
          'Vollständige Details mit Adresse und Kontakt',
          'Filterung nach aktivem/inaktivem Status',
        ],
      },
    ],
    integrationUses: [
      'Interaktive Karten für Krankenhaus- und Dienststandorte',
      'GPS-Koordinaten bei der Erfassung von Bewegungen',
      'Foto- und Videoaufnahme zum Anhängen an Patientenakten',
      'Generierung von QR-Codes',
      'Diagramme und Datenvisualisierung',
    ],
    highlights: [
      'Granulares rollenbasiertes Berechtigungssystem',
      'Diensterstellung in 3 Schritten mit dynamischen Katalogen',
      '10 spezialisierte Bildschirme pro Dienst',
      'Bewegungen mit automatischer GPS-Geolokalisierung',
      'Vollständige Prüfung aller Änderungen',
      'Vollständiges TypeScript in der gesamten Anwendung',
    ],
  },
  petnder: {
    subtitle: 'Tierfreundliche Mobile Plattform mit Adoption und Community',
    categories: 'Mobile App • React Native • Haustier-Marketplace',
    description:
      'Mobile Plattform, die Tierbesitzer mit tierfreundlichen Dienstleistungen, verantwortungsvoller Adoption und einer engagierten Community für das Tierwohl verbindet. Bietet zwei differenzierte Profile — Nutzer und Unternehmen — jeweils mit eigenem Ablauf, Navigation und Funktionalitäten.',
    features: [
      {
        title: 'Für Nutzer',
        items: [
          'Tierfreundliche Dienste nach Kategorien erkunden',
          'Tieradoption mit Filtern und Chat',
          'Meldungen vermisster Haustiere mit Standort',
          'Vorteile, Gutscheine und Stiftungen',
        ],
      },
      {
        title: 'Für Unternehmen',
        items: [
          'Dienstverwaltung mit Karten und Öffnungszeiten',
          'Gutscheine mit QR und Nutzungsstatistiken',
          'Digitale Geldbörse mit Kontostand und Verlauf',
          'Communities mit Rollen und Moderation',
        ],
      },
      {
        title: 'Allgemein',
        items: [
          'Animiertes Onboarding mit Reanimated',
          'Echtzeit-Chat',
          'Push-Benachrichtigungen',
          'Integrierte Karten mit Google Maps',
        ],
      },
    ],
    integrationUses: [
      'Standort von Dienstleistungen und Positionsauswahl',
      'Push-Benachrichtigungen über Adoptionen und Nachrichten',
      'QR-Codes für Gutscheine und Rabatte',
      'Geschäfts- und Leistungsstatistiken',
    ],
    highlights: [
      'Zwei differenzierte Profile (Nutzer und Unternehmen)',
      'Adoptionssystem mit integriertem Chat',
      'Communities mit Rollen und Inhaltsmoderation',
      'Digitale Geldbörse und Finanzstatistiken',
      'Gamification mit Erfolge-System',
      'Interaktives animiertes Onboarding',
    ],
  },
  controla2: {
    subtitle: 'Unternehmensverwaltungssystem (ERP)',
    categories: 'SaaS • ERP • Elektronische Rechnungsstellung',
    description:
      'Umfassende Webplattform für Bau- und Ingenieurunternehmen, die ihre täglichen Abläufe zentralisieren und automatisieren müssen. Vollständiges ERP mit Projektmanagement, Personalwesen, elektronischer Rechnungsstellung, Beschaffung, Lagerverwaltung und Risikoprevention, angepasst an chilenische Vorschriften.',
    features: [
      {
        title: 'Projekte und Planung',
        items: [
          'Budgets und interaktive Gantt-Zeitpläne',
          'Fortschrittsverfolgung und Abweichungskontrolle',
          'Technisches Büro mit Arbeitsstunden und Produktion',
        ],
      },
      {
        title: 'Personalwesen und Gehaltsabrechnung',
        items: [
          'Vollständiger Mitarbeiterlebenszyklus',
          'Automatische Gehaltsberechnung (AFP, ISAPRE)',
          'Urlaub, Vorschüsse und Abfindungen',
        ],
      },
      {
        title: 'Rechnungsstellung und Einkauf',
        items: [
          'Elektronische Steuerdokumente',
          'Vollständiger Einkaufs- und Angebotsablauf',
          'Bestandskontrolle mit Rückverfolgbarkeit',
        ],
      },
    ],
    integrationUses: [
      'Infrastruktur und Hosting des Systems',
      'Elektronische Rechnungsstellung nach chilenischen Vorschriften',
      'Benachrichtigungen in Genehmigungsabläufen',
    ],
    highlights: [
      'Echtzeit-Dashboard mit Kennzahlen und KPIs',
      'Automatische Dokumentenerstellung (PDF, Excel, CSV)',
      '8 vordefinierte Rollen mit Genehmigungsabläufen',
      'Angepasst an chilenische Vorschriften (AFP, ISAPRE, DTE, RUT)',
      'SSOMA-Modul zur Risikoprevention',
      'Sofortige Benachrichtigungen für Genehmigungen',
    ],
  },
  alhambra: {
    subtitle: 'Tourismus-Website für Granada, Spanien',
    categories: 'Web-App • Tourismus • Admin-Panel • Mehrsprachig',
    description:
      'Professionelle Website für ein Reiseführerunternehmen in Granada, Spanien, spezialisiert auf geführte Besichtigungen der Alhambra. Vollständige Plattform mit Rundgang-Erkundung, Reservierungen, Blog und automatischer Übersetzung in 7 Sprachen, mit Administrationspanel zur eigenständigen Inhaltsverwaltung.',
    features: [
      {
        title: 'Für den Besucher',
        items: [
          'Erkundung touristischer Rundgänge mit eigenen Seiten',
          'Integriertes Reservierungssystem mit vollständigem Formular',
          'Nachrichten-Blog mit reichhaltigen Inhalten',
          'Automatische Übersetzung in 7 Sprachen',
          'Direkter Kontakt über WhatsApp',
        ],
      },
      {
        title: 'Administrationspanel',
        items: [
          'Rundgangverwaltung mit Rich-Text-Editor',
          'Blog-Verwaltung mit Bildern und erweiterter Formatierung',
          'Live-Textbearbeitung durch Klicken auf den Text',
          'Sicheres Zugangssystem',
        ],
      },
    ],
    integrationUses: [
      'Direkter Kontakt mit einem Klick',
      'Empfang von Reservierungen per E-Mail',
      'Automatische Übersetzung in mehrere Sprachen',
      'Verlinkung und Banner zum Unternehmensprofil',
      'Integration mit dem Profil des Reiseführers',
    ],
    highlights: [
      'Inhalte zu 100 % ohne technische Hilfe verwaltbar',
      'Inline-Textbearbeitung direkt auf der Seite',
      'Serverseitiges Rendering (SSR) für SEO',
      'Unterstützung für 7 Sprachen für internationalen Tourismus',
      'Integration mit WhatsApp und E-Mail zur Maximierung von Reservierungen',
      'Sicherheit mit JWT, verschlüsselten Passwörtern und Rollen',
    ],
  },
  'biznes-empresa': {
    subtitle: 'Plattform zur Verwaltung digitaler Unternehmensvisitenkarten',
    categories: 'Web-App • SaaS • Digitale Visitenkarten • Rollen',
    description:
      'Webanwendung für Unternehmen zur zentralen Verwaltung der digitalen Visitenkarten aller Mitarbeiter, mit Rollen- und Berechtigungskontrolle, Unternehmensvorlagen und Nutzungsstatistiken.',
    features: [
      {
        title: 'Unternehmensverwaltung',
        items: [
          'Unternehmensregistrierung und -profil mit Logo und Branding',
          'Mitarbeitereinladung per E-Mail oder massenhaftem Excel-Import',
          'Individuelle Rollen mit granularen Berechtigungen',
          'Unternehmensmitgliedschaften mit konfigurierbaren Limits',
        ],
      },
      {
        title: 'Digitale Visitenkarten',
        items: [
          'Unternehmensvorlagen mit Markendesign',
          'Vollständiger visueller Editor mit Echtzeit-Vorschau',
          'Automatischer QR-Code und herunterladbare vCard',
          'Personalisierter Link für jede Karte',
        ],
      },
      {
        title: 'Statistiken',
        items: [
          'Besuche pro Karte mit Geräteaufschlüsselung',
          'Klicks auf soziale Netzwerke und E-Mail',
          'vCard-Downloads und hinzugefügte Kontakte',
          'Interaktive Diagramme (Balken, Linien, Kreis)',
        ],
      },
    ],
    integrationUses: [
      'Einladungen per E-Mail und Benachrichtigungen',
      'Automatische Generierung von QR-Codes',
      'Herunterladbare Kontaktdateien',
      'Echtzeit-Kommunikation',
      'Interaktive Diagramme für Statistiken',
      'Bildoptimierung zu WebP',
    ],
    highlights: [
      'Vollständige Unternehmensverwaltung über ein einziges Panel',
      'Vorlagen mit Branding, die automatisch angewendet werden',
      'Granulare Rollen und Berechtigungen pro Mitarbeiter',
      'Massenimport von Mitarbeitern per Excel-Datei',
      'Zentralisierte Statistiken mit interaktiven Diagrammen',
      'Echtzeit-Kommunikation mit WebSockets',
    ],
  },
  blackphone: {
    subtitle: 'Verwaltungssystem für Mobilgerätereparaturen',
    categories: 'Web-App • E-Commerce • WhatsApp-Bot • Admin-Panel',
    description:
      'Vollständige Webplattform für einen Handy-Reparaturservice in Spanien. Umfasst automatischen Kostenvoranschlag, Auftragssystem mit Tracking, Benachrichtigungen per E-Mail und WhatsApp, Großhändlerverwaltung und umfassendes Administrationspanel.',
    features: [
      {
        title: 'Für den Kunden',
        items: [
          'Automatischer Kostenvoranschlag nach Modell und Defekt',
          'Mehrfachauswahl von Defekten mit Echtzeitpreis',
          'Reparaturverfolgung mit 5-stelligem Code',
          'Automatische Benachrichtigungen per E-Mail und WhatsApp',
        ],
      },
      {
        title: 'Großhändlersystem',
        items: [
          'Registrierung und Genehmigung von Großhändlern',
          'Volumen-Reparaturanfragen',
          'Unabhängiges Tracking mit eigenem Code',
          'Differenzierte Preise nach Zone',
        ],
      },
      {
        title: 'Administrationspanel',
        items: [
          'Dynamische Preistabelle mit Drag & Drop',
          'Verwaltung von Kategorien, Marken, Modellen und Defekten',
          'Individuelle Reparaturstatus mit Benachrichtigungen',
          'Blog mit Rich-Text-Editor und bearbeitbaren Inhalten',
          'PDF-Export von Preistabellen',
        ],
      },
    ],
    integrationUses: [
      'Automatische Nachrichten bei Auftragserstellung oder Statusänderung',
      'E-Mails mit HTML-Vorlagen an Kunden und Admin',
      'Herunterladbare PDFs mit Preistabellen',
      'Echte Kundenbewertungen auf der Startseite',
      'Drag & Drop zum Neuordnen von Modellen',
    ],
    highlights: [
      'Intelligenter Kostenvoranschlag nach Modell, Defekt und geografischer Zone',
      'Mehrkanalbenachrichtigungen (E-Mail + automatisches WhatsApp)',
      'Integrierter WhatsApp-Bot ohne kostenpflichtige externe Dienste',
      'Großhändlersystem mit unabhängigem Ablauf',
      'Dynamische Preistabelle exportierbar als PDF',
      'Echte Daten von Provinzen und Orten in Spanien',
    ],
  },
  casepe: {
    subtitle: 'Institutionelle Website der Kammer für Erdölbetriebe',
    categories: 'Institutionelle Website • Live-CMS • Blog • Next.js 14',
    description:
      'Institutionelle Website für CASEPE (Cámara de Empresas de Operaciones Petroleras Especiales), ein Zivilverband, der Erdöldienstleistungsunternehmen in Argentinien zusammenschließt. Alle Inhalte werden direkt auf der Website bearbeitet, ohne separates Panel: Texte, Bilder und Abschnitte werden per Klick geändert, wenn der Administrator angemeldet ist.',
    features: [
      {
        title: 'Für den Besucher',
        items: [
          'Hero mit Hintergrundbild und institutioneller Bereich mit Galerie',
          'Interaktive Dienstleistungen mit Elementnavigation',
          'Geschichte, Vision, Umweltengagement und Standorte',
          'Nachrichten-Blog mit verwandten Artikeln',
          'Kontaktformular mit automatischem E-Mail-Versand',
        ],
      },
      {
        title: 'Live-Bearbeitung',
        items: [
          'Texte bearbeitbar durch direktes Klicken auf der Seite',
          'Bilder austauschbar ohne die Seite zu verlassen',
          'Elemente in jedem Abschnitt hinzufügen und entfernen',
          'Integrierter Rich-Text-Editor',
        ],
      },
      {
        title: 'Administrationspanel',
        items: [
          'Blog-Verwaltung mit Rich-Text-Editor',
          'Tags und verwandte Artikel',
          'Sichere Anmeldung',
        ],
      },
    ],
    integrationUses: [
      'Kontaktnachrichten mit professioneller HTML-Vorlage',
      'Einblendungsanimationen beim Scrollen',
      'Sanftes Scrollen zu Abschnitten',
      'Rich-Text-Editor für Inline-Inhalte',
    ],
    highlights: [
      'Live-Bearbeitung ohne separates Panel — alles auf derselben Seite',
      'Dynamisch aktualisierbare verschachtelte Eigenschaften mit Lodash',
      'Erweiterbare Abschnitte: Elemente direkt über die Website hinzufügen und entfernen',
      'Blog mit verwandten Artikeln und Tags',
      'Kontakt-E-Mails mit professioneller HTML-Vorlage',
      'Professionelle Animationen in allen Abschnitten',
    ],
  },
  'dental-digital': {
    subtitle: 'Verwaltungssystem für Zahnarztpraxen (SaaS)',
    categories: 'SaaS • AFIP-Rechnungsstellung • Zahnschema • Mercado Pago',
    description:
      'SaaS-Webplattform für Zahnärzte und Zahnkliniken in Argentinien. Umfassende Patientenverwaltung, Termine mit interaktivem Kalender, visuelles Zahnschema, Kostenvoranschläge, elektronische Rechnungsstellung mit ARCA/AFIP, Krankenkassen, Einwilligungsdokumente, Abonnements mit Mercado Pago, Benachrichtigungen per E-Mail und WhatsApp sowie Datensicherung.',
    features: [
      {
        title: 'Praxisverwaltung',
        items: [
          'Vollständige Patientenakte mit Krankenkasse',
          'Interaktiver Kalender mit Monats-, Wochen- und Tagesansicht',
          'Visuelles Zahnschema mit Erfassung pro Zahn und PDF-Export',
          'Detaillierte Kostenvoranschläge umwandelbar in Rechnungen',
          'Einwilligungsdokumente mit digitaler Unterschrift',
        ],
      },
      {
        title: 'Elektronische Rechnungsstellung',
        items: [
          'Ausstellung von Rechnungen, Gutschriften und Lastschriften Typ A, B und C mit ARCA/AFIP',
          'Automatischer CAE und MwSt.-Berechnung (0 %, 10,5 %, 21 %, 27 %)',
          'Generierung von RSA- und CSR-Zertifikaten für AFIP',
          'Rechnungs-PDF mit Versand per E-Mail und WhatsApp',
        ],
      },
      {
        title: 'SaaS und Administration',
        items: [
          'Monatliche/jährliche Abonnements mit Mercado Pago',
          'Mehrere Praxen und Fachkräfte mit Rollen',
          'Dashboard mit Chart.js-Diagrammen',
          'Vollständiges Backup und intelligente Wiederherstellung',
        ],
      },
    ],
    integrationUses: [
      'Elektronische Rechnungsstellung mit gültigem CAE',
      'Wiederkehrende Abonnements mit automatischen Webhooks',
      'Versand von Rechnungen und Benachrichtigungen per WhatsApp',
      'E-Mails mit Rechnungs-PDFs und Passwortüberprüfung',
      'Diagramme für Behandlungen, Kostenvoranschläge und Termine',
      'Interaktiver Terminkalender',
      'Export des Zahnschemas als PDF',
    ],
    highlights: [
      'Echte elektronische Rechnungsstellung mit ARCA/AFIP und gültigem CAE',
      'Generierung von RSA/CSR-Zertifikaten zur Verknüpfung mit AFIP',
      'Interaktives Zahnschema mit Erfassung pro Zahn und PDF-Export',
      'Abonnements mit Mercado Pago und automatischen Webhooks',
      'Mehrbenutzer mit Rollen (Inhaber, Fachkraft, Administrator)',
      'Vollständiges JSON-Backup mit intelligenter Wiederherstellung',
    ],
  },
  'sunchales-pos': {
    subtitle: 'Geschäftsverwaltungs- und Kassensystem',
    categories: 'SaaS • POS • AFIP-Rechnungsstellung • Barcode',
    description:
      'Vollständige Web-Geschäftsverwaltungsplattform für Unternehmen und Geschäfte in Argentinien. Produktverwaltung mit Barcode, Erfassung von Verkäufen und Einkäufen, Kunden und Lieferanten, elektronische Rechnungsstellung mit ARCA/AFIP, Kostenvoranschläge, Bestands- und Rohstoffkontrolle, Garantien und Rücksendungen (RMA) sowie Statistiken mit interaktiven Diagrammen. Umfasst Abonnements mit Mercado Pago.',
    features: [
      {
        title: 'Verkauf und Rechnungsstellung',
        items: [
          'Verkaufserfassung mit automatischer MwSt.-Berechnung',
          'Schnellverkauf ohne registrierten Kunden',
          'Elektronische Rechnungsstellung mit ARCA/AFIP und CAE',
          'Direkte Umwandlung von Kostenvoranschlägen in Verkäufe',
          'Rechnungs-PDF mit E-Mail-Versand',
        ],
      },
      {
        title: 'Produkte und Bestand',
        items: [
          'Katalog mit Barcode pro Produkt',
          'Echtzeit-aktualisierte Bestandskontrolle',
          'Rohstoffe mit unabhängigem Inventar',
          'Differenzierte physische Produkte und Dienstleistungen',
        ],
      },
      {
        title: 'Geschäftsverwaltung',
        items: [
          'Vollständige Kunden- und Lieferantenkarteien',
          'Kostenvoranschläge mit Status und konfigurierbarer Gültigkeit',
          'Garantie- und Rücksendungssystem (RMA)',
          'Dashboard mit Verkaufs- und Einkaufsdiagrammen',
        ],
      },
    ],
    integrationUses: [
      'Elektronische Rechnungsstellung mit gültigem CAE',
      'Wiederkehrende Abonnements für Systemzugang',
      'E-Mails mit Rechnungs-PDFs und Versandbenachrichtigungen',
      'Diagramme für Verkäufe, Einkäufe und Berichte',
      'Generierung und Anzeige von Barcodes',
      'Direkter Druck von Rechnungen und Etiketten',
      'Generierung von PDFs für Rechnungen und Kostenvoranschläge',
    ],
    highlights: [
      'Vollständiger Geschäftszyklus: Einkauf, Bestand, Verkauf, Rechnungsstellung und Berichte',
      'Echte elektronische Rechnungsstellung mit ARCA/AFIP und gültigem CAE',
      'Barcode mit visueller Generierung und Schnelllesung',
      'RMA-System für Garantien und Rücksendungen mit Tracking',
      'Kostenvoranschläge direkt in Verkäufe umwandelbar',
      'Individuell konfigurierbares SMTP pro Benutzer für Rechnungsversand',
    ],
  },
  'fuku-shop': {
    subtitle: 'Online-Shop für urbane Mode und Anime',
    categories: 'E-Commerce • Next.js • Mercado Pago • Cloudinary',
    description:
      'Vollständiger Online-Shop für Kleidung im Anime-, asiatischen und Videospiel-Stil. Katalog mit Varianten nach Farbe und Größe, erweiterte kombinierte Filter, Galerie mit Zoom, Größentabelle, Warenkorb, Bestellverlauf, Bewertungen, SEO mit automatischer Sitemap und Administrationspanel zur Verwaltung des gesamten Katalogs. Ursprünglich aus Rafaela, Santa Fe, Argentinien.',
    features: [
      {
        title: 'Online-Shop',
        items: [
          'Katalog mit kombinierten Filtern (Kategorie, Typ, Farbe, Größe, Preis)',
          'Varianten nach Farbe mit eigenen Bildern (Vorderseite, Rückseite, Körper)',
          'Bildzoom beim Überfahren mit dem Cursor',
          'Größentabelle mit realen Maßen',
          'Warenkorb und Checkout mit Mercado Pago',
        ],
      },
      {
        title: 'Benutzerkonto',
        items: [
          'Registrierung und Login per E-Mail oder Google',
          'Bestellverlauf',
          'Mehrere Lieferadressen',
          'Produktbewertungen und -rezensionen',
          'Interne Benachrichtigungen',
        ],
      },
      {
        title: 'Administrationspanel',
        items: [
          'CRUD von Produkten mit Farbvarianten und Bildern',
          'Farbverwaltung mit Hexadezimalcode',
          'Kategorien, Unterkategorien, Typen und Untertypen',
          'Größen mit konfigurierbaren Maßen',
        ],
      },
    ],
    integrationUses: [
      'Zahlungsabwicklung für Einkäufe',
      'Cloud-Speicherung und -Optimierung von Bildern',
      'Echtzeit-Kommunikation',
      'Kontaktnachrichten per E-Mail',
      'Globaler State (Warenkorb, Authentifizierung, Filter)',
      'Intelligentes Caching von Serverdaten',
      'Automatische Generierung einer XML-Sitemap für SEO',
    ],
    highlights: [
      'Produktvarianten mit unabhängigen Bildern pro Farbe',
      'Kombinierte Filter für präzise Katalogsuchen',
      'Statische Generierung (SSG) mit inkrementeller Revalidierung für SEO',
      'Automatisch generierte XML-Sitemap mit Prioritäten nach Bereich',
      'Bilder in Cloudinary für Optimierung und schnelles Laden',
      'Hierarchische Kategorien mit Unterkategorien und Untertypen',
    ],
  },
  'julian-winners': {
    subtitle: 'Online-Tombola-Plattform mit digitalen Losen',
    categories: 'Web-App • Tombola • Mercado Pago • Empfehlungsprogramm',
    description:
      'Vollständige Webplattform für den Online-Verkauf von Tombola-Losen. Nutzer kaufen Los-Pakete über Mercado Pago und erhalten zufällig zugewiesene Nummern mit Rechnung per E-Mail. Umfasst ein Empfehlungsprogramm mit Punkten, Warenkorb, manuelle Loszuweisung, Gewinnerauswahl, Moderatoren, Excel-Export und zu 100 % bearbeitbare Inhalte. Währung: Kolumbianische Pesos (COP).',
    features: [
      {
        title: 'Für den Nutzer',
        items: [
          'Tombola-Katalog mit Los-Paketen und Preisen',
          'Warenkorb mit Paketen aus mehreren Tombolas',
          'Zufällig generierte Losnummern ohne Wiederholungen',
          'PDF-Rechnung per E-Mail mit Los-Details',
          'Empfehlungsprogramm mit Link und Punktesammlung',
        ],
      },
      {
        title: 'Administrationspanel',
        items: [
          'Tombolaverwaltung mit Paketen, Bildern und Highlights',
          'Manuelle Loszuweisung (Präsenzverkauf)',
          'Gewinnerauswahl durch Suche nach Losnummer',
          'Kaufhistorie mit Excel-Export',
          'Moderatoren für den Präsenzverkauf',
        ],
      },
      {
        title: 'Bearbeitbare Inhalte',
        items: [
          'Texte, Bilder und Geschäftsdaten bearbeitbar',
          'Mercado Pago- und SMTP-Konfiguration über das Panel',
          'Bearbeitbare Allgemeine Geschäftsbedingungen',
        ],
      },
    ],
    integrationUses: [
      'Zahlungen mit Webhooks für automatische Loszuweisung',
      'Rechnungen per E-Mail mit HTML-Vorlage und PDF-Link',
      'Generierung herunterladbarer PDF-Rechnungen',
      'Export von Nutzern und Verlauf nach Excel',
      'Globaler State (Warenkorb, Nutzer, Tombolas)',
    ],
    highlights: [
      'Zufällige Lose ohne Wiederholungen mit Format je nach Tombola-Gesamtanzahl',
      'Mercado Pago-Webhooks mit Anti-Duplikat-Überprüfung',
      'Manuelle Zuweisung durch Moderatoren für Präsenzverkäufe',
      'Gewinnerauswahl per Losnummer',
      'Vollständiger Excel-Export (Nutzer, Käufe, Rechnungen)',
      'Drei differenzierte Rollen (Nutzer, Moderator, Administrator)',
    ],
  },
  limcal: {
    subtitle: 'Online-Shop für Reinigungsprodukte',
    categories: 'E-Commerce • Mercado Pago • Wiederverkäufer • CMS',
    description:
      'Vollständiger Online-Shop für LIMCAL, ein Unternehmen für Reinigungsprodukte in Argentinien. Registrierung mit CUIT und manuelle Kontogenehmigung, Katalog mit Filtern, Warenkorb mit Mindestbestellmenge pro Produkt, Zahlung mit Mercado Pago, Wiederverkäuferkarte mit Google Maps, Auftragsverfolgung per E-Mail, Kontaktformular mit Antwort aus dem Panel und zu 100 % bearbeitbare Inhalte.',
    features: [
      {
        title: 'Online-Shop',
        items: [
          'Paginierter Katalog mit Kategoriefilter und Suche',
          'Konfigurierbare Mindestbestellmenge pro Produkt',
          'Warenkorb mit mehreren Lieferadressen',
          'Zahlung mit Mercado Pago und automatische Erfassung per Webhook',
          'Auftragsverfolgung mit E-Mail-Benachrichtigung',
        ],
      },
      {
        title: 'Wiederverkäufer',
        items: [
          'Wiederverkäuferkarte mit eingebettetem Google Maps',
          'Filter nach Provinz, Stadt und Name',
          'Informationsseite für neue Wiederverkäufer',
        ],
      },
      {
        title: 'Administrationspanel',
        items: [
          'Verwaltung von Produkten, Kategorien und Bestellungen',
          'Manuelle Genehmigung von Benutzerkonten',
          'Kontaktnachrichten mit direkter E-Mail-Antwort',
          'Bearbeitbare Inhalte mit Lodash für verschachtelte Eigenschaften',
          'Moderatoren mit differenzierten Berechtigungen',
        ],
      },
    ],
    integrationUses: [
      'Warenkorbzahlungen mit automatischen Webhooks (ARS)',
      'Kontakt, Kundenantworten und Bestellbenachrichtigungen',
      'Eingebettete Karte für jeden Wiederverkäufer',
      'Besuchs- und Verhaltenstracking',
      'Rich-Text-Editor für Richtlinien und Abschnitte',
      'Einblendungsanimationen beim Scrollen',
    ],
    highlights: [
      'Manuelle Kontogenehmigung für Zugangskontrolle',
      'Mindestbestellmenge pro Produkt ideal für Großhandel',
      'Wiederverkäuferkarte mit Google Maps filterbar nach Zone',
      'Antwort auf Kontaktnachrichten direkt aus dem Panel',
      'Bearbeitbare Inhalte mit dynamischen verschachtelten Eigenschaften',
      'Mercado Pago-Webhooks mit automatischer Auftragserfassung',
    ],
  },
  'limcal-pos': {
    subtitle: 'Desktop-Anwendung für Geschäftsverwaltung und Kasse',
    categories: 'Desktop-App • Electron • AFIP-Rechnungsstellung • IndexedDB',
    description:
      'Desktop-Anwendung mit Electron für die vollständige Geschäftsverwaltung von LIMCAL. Produkte mit Massenimport aus Excel, Verkäufe und Einkäufe, elektronische Rechnungsstellung mit ARCA/AFIP (Rechnung A/B, Gutschriften), Lieferscheine, Bestand, Rohstoffe, Wiederverkäufer mit Provisionen und Rabatten, MwSt.-Buch, Statistiken und Backup. Lokale Datenbank mit IndexedDB. Ersetzt das alte FoxPro-basierte System.',
    features: [
      {
        title: 'Verkauf und Rechnungsstellung',
        items: [
          'Elektronische Rechnungsstellung Rechnung A und B mit ARCA/AFIP',
          'Gutschriften Typ A und B zugeordnet zu Rechnungen',
          'Generierung herunterladbarer Lieferscheine als PDF',
          'MwSt.-Buch für Verkäufe und Einkäufe',
          'Automatische Rabatte pro Wiederverkäufer und pro Kunde',
        ],
      },
      {
        title: 'Geschäftsverwaltung',
        items: [
          'Massenimport von Produkten aus Excel',
          'Massenänderung von Preisen',
          'Bestands- und Rohstoffkontrolle',
          'Wiederverkäufer mit konfigurierbarem Rabatt oder Provision',
          'Statistiken nach Tag, Kunde, Produkt und Kreuzauswertung',
        ],
      },
      {
        title: 'System',
        items: [
          'Lokale Datenbank mit IndexedDB (ohne Server)',
          'Benutzer mit konfigurierbaren Rollen und Berechtigungen',
          'Vollständiges JSON-Backup und Wiederherstellung',
          'Migration von FoxPro (Husky POS)',
        ],
      },
    ],
    integrationUses: [
      'Elektronische Rechnungsstellung mit CAE (Rechnung A/B, Gutschrift A/B)',
      'Lokale Datenbank ohne externen Server',
      'Import und Export von Produkten und Daten',
      'Rechnungen, Gutschriften und Lieferscheine als PDF',
      'Download von Backups, PDFs und Excel-Dateien',
    ],
    highlights: [
      'Desktop-App mit Electron — funktioniert offline ohne Server',
      'Lokale Datenbank mit IndexedDB im Electron-Browser',
      'Echte elektronische Rechnungsstellung mit AFIP (Rechnung A/B, Gutschrift A/B)',
      'Wiederverkäufer mit Rabatt oder Provision bei der Rechnungsstellung',
      'Massenimport von Produkten und Massenänderung von Preisen aus Excel',
      'Vollständige Migration von FoxPro (Husky POS) zu moderner Technologie',
    ],
  },
  movilprint: {
    subtitle: 'Plattform für personalisiertes Design und Druck',
    categories: 'Web-App • Visueller Editor • Drag & Drop • Social Login',
    description:
      'Webplattform zum Erstellen personalisierter Druckdesigns. Der Nutzer wählt eine Vorlage, greift auf den visuellen Editor mit Drag & Drop zu, fügt Texte mit über 15 Schriftarten, Bilder und dekorative Elemente hinzu, positioniert jedes Element frei und sendet das Design zum Druck. Login mit Google und Facebook, Punktesystem und Administrationspanel zur Verwaltung von Vorlagen und eingegangenen Designs.',
    features: [
      {
        title: 'Visueller Editor',
        items: [
          'Interaktive Leinwand mit Drag & Drop',
          'Texte mit über 15 Schriftarten, Größe, Farbe, Fett, Kursiv',
          'Bilder und dekorative Elemente pro Vorlage',
          'Größe ändern, Drehen, Kopieren und Einfügen von Elementen',
          'Ebenensystem (z-index) für Tiefe',
          'Vorschau und Direktdruck aus dem Browser',
        ],
      },
      {
        title: 'Für den Nutzer',
        items: [
          'Registrierung per E-Mail, Google oder Facebook',
          'Vorlagenauswahl mit Vorschau',
          'Gespeicherte Designs mit Verlauf',
          'Treuepunktesystem',
          'Passwortwiederherstellung per E-Mail',
        ],
      },
      {
        title: 'Administrationspanel',
        items: [
          'Vorlagenverwaltung mit Abmessungen in cm',
          'Ressourcen pro Vorlage (Formen und Bilder)',
          'Verwaltung eingegangener Designs',
          'Moderatoren zur Designüberprüfung',
        ],
      },
    ],
    integrationUses: [
      'Login mit Google-Konto',
      'Login mit Facebook-Konto über Graph API',
      'Zahlungsabwicklung',
      'Verifizierungscodes zur Passwortwiederherstellung',
      'Drag & Drop von Elementen im Editor',
    ],
    highlights: [
      'Vollständiger visueller Editor mit interaktiver Leinwand und Drag & Drop',
      'Dynamische Vorlagen mit Abmessungen in cm und eigenen Ressourcen',
      'Über 15 Schriftarten mit vollständiger Stilkontrolle',
      'Ebenensystem zur Steuerung der Elementtiefe',
      'Social Login mit Google und Facebook',
      'Persistente Designs mit allen in der Datenbank gespeicherten Elementen',
    ],
  },
  padel: {
    subtitle: 'Plattform zur Verwaltung von Padel-Turnieren',
    categories: 'Web-App • Sport • Rangliste • Next.js 15',
    description:
      'Webplattform für die Organisation und Verfolgung von Padel-Turnieren. Turnierverwaltung mit Kategorien, Spieler mit Vereinen und Punkten, Spiele mit Satzergebnissen, Veranstaltungskalender, Turnierserie nach Kategorie, Rangliste gefiltert nach Geschlecht und Kategorie sowie Spielersuche. Administrations- und Moderatorenpanel zur Ergebniserfassung.',
    features: [
      {
        title: 'Für das Publikum',
        items: [
          'Turnierkalender mit Standort und Kontakt',
          'Turnierserie nach Kategorie mit allen Terminen',
          'Turnierergebnisse mit Spielen und Sätzen',
          'Spielerrangliste nach Kategorie und Geschlecht',
          'Spielersuche mit Position und Top 5',
        ],
      },
      {
        title: 'Administrationspanel',
        items: [
          'Turnierverwaltung mit Datum, Geschlecht und Kategorie',
          'Spielerverwaltung mit Verein, Kategorie und Punkten',
          'Verwaltung von Kategorien und Vereinen',
          'Benutzerverwaltung mit Rollen',
        ],
      },
      {
        title: 'Moderatorenpanel',
        items: [
          'Erfassung von Spielen mit Teams und Satzergebnissen',
          'Bearbeitung bestehender Spiele',
          'Erstellung von Spielern und Turnieren',
        ],
      },
    ],
    integrationUses: [],
    highlights: [
      'Turnierserie automatisch nach Kategorie organisiert',
      'Dynamische Echtzeit-Rangliste nach Kategorie und Geschlecht',
      'Einzel- und Teamspiele mit Satzergebnissen',
      'Automatischer Turnierstatus basierend auf erfassten Spielen',
      'Drei Zugangsstufen (öffentlich, Moderator, Administrator)',
      'Logisches Löschen von Kategorien zur Wiederherstellung',
    ],
  },
  '4me': {
    subtitle: 'Podologie-Plattform mit 3D-Scan und orthopädischem Schuhwerk',
    categories: 'Mobile App • Web-Admin • 3D-Scan • Stripe',
    description:
      'Umfassendes Podologiesystem mit 3D-Fußscan. Podologen scannen Füße über die mobile App, die Fotos werden mit Metashape zu 3D-Modellen verarbeitet und maßgefertigte orthopädische Schuhprojekte erstellt. Zahlungen mit Stripe in USD, Speicherung in Google Drive, 3D-Visualisierung im Web-Panel, E-Mail-Benachrichtigungen und Echtzeit-Kommunikation.',
    features: [
      {
        title: 'Mobile App (Podologe)',
        items: [
          'Fußscan mit Kamera (mehrere Winkel)',
          'Massenupload mit Echtzeit-Fortschritt über WebSocket',
          'Visualisierung des 3D-Fußmodells',
          'Projekt erstellen mit Auswahl von Modell, Farbe, Sohle und Einlage',
          'Verfolgung von 12 Projektstatus',
        ],
      },
      {
        title: 'Web-Panel (Admin)',
        items: [
          'Verwaltung von Praxen, Podologen, Patienten und Projekten',
          '3D-Visualisierung mit Google Model Viewer',
          'Verwaltung von Schuhmodellen mit Farben',
          'Statusaktualisierung mit E-Mail-Benachrichtigung',
        ],
      },
      {
        title: '3D-Verarbeitung',
        items: [
          'Fotos verarbeitet mit Agisoft Metashape (Python)',
          'Bilder in Google Drive pro Patient gespeichert',
          'Cron-Job zur Überprüfung des Verarbeitungsstatus',
          'Automatische Bereinigung früherer Scans',
        ],
      },
    ],
    integrationUses: [
      'Automatische Zahlungslinks für Projekte in USD',
      'Fotospeicherung organisiert nach Patient',
      'Photogrammetrische Verarbeitung für 3D-Modelle',
      '3D-Visualisierung von Füßen im Browser',
      'Echtzeit-Fortschritt beim Hochladen von Bildern',
      'Status-E-Mails und Zahlungslinks',
      'Fotoaufnahme über die mobile App',
    ],
    highlights: [
      '3D-Fußscan vom Smartphone mit Metashape-Verarbeitung',
      'Massenupload zu Google Drive mit Echtzeit-Fortschritt',
      'Visualisierung von 3D-Modellen (GLB) im Browser',
      'Pipeline mit 12 Status und E-Mail-Benachrichtigung bei jeder Änderung',
      'Zahlungen mit Stripe in USD mit automatischem Link pro Projekt',
      'Drei koordinierte Systeme: mobile App + Web-Panel + Server',
    ],
  },
  'trewa-club': {
    subtitle: 'Plattform für den Verkauf von Veranstaltungstickets mit Punktesystem',
    categories: 'Web-App • Events • AFIP-Rechnungsstellung • QR • Mercado Pago',
    description:
      'Webplattform für den Verkauf von Tickets für Nachtveranstaltungen und Partys. Kauf mit Mercado Pago, Tickets mit QR-Code, automatische elektronische Rechnungsstellung mit AFIP, einlösbares Punktesystem, Rabattcodes, Tickettypen mit Kontingenten, Wiederverkäufer mit Statistiken, QR-Scan am Eingang und Login mit Google/Facebook. Fünf differenzierte Rollen.',
    features: [
      {
        title: 'Für den Nutzer',
        items: [
          'Veranstaltungskatalog mit Tickettypen (General, VIP, Early Bird)',
          'Rabattcodes (fest oder prozentual) mit Kontingent und Ablaufdatum',
          'Tickets mit einzigartigem QR-Code für den Einlass-Scan',
          'Automatische elektronische Rechnung mit AFIP bei jedem Kauf',
          'Punktesystem ($1000 = 1 Punkt) einlösbar gegen Produkte',
          'Login mit Google, Facebook oder E-Mail',
        ],
      },
      {
        title: 'Administrationspanel',
        items: [
          'Analyse pro Veranstaltung: Verkäufe, Geschlecht, Alter, Spitzenzeiten, Tranchen',
          'QR-Ticket-Scan mit Anti-Doppelscan-Validierung',
          'Massengenerierung von Eintrittskarten (Freikarten)',
          'Wiederverkäuferverwaltung mit detaillierten Statistiken',
          'Nutzersuche mit Kaufhistorie',
        ],
      },
      {
        title: 'Wiederverkäufersystem',
        items: [
          'Eigener Link für zugeordnete Verkäufe',
          'Statistiken pro Wiederverkäufer und pro Veranstaltung',
          'Top-Wiederverkäufer und meistverkaufte Veranstaltung',
        ],
      },
    ],
    integrationUses: [
      'Zahlungen mit automatischen Webhooks (ARS)',
      'Automatische Rechnung B mit CAE bei jedem Kauf',
      'Login mit Google-Konto',
      'Login mit Facebook-Konto',
      'QR-Codes für Tickets und Einlass-Scan',
      'Kaufbestätigung, Punkte und Wiederherstellung',
    ],
    highlights: [
      'Automatische elektronische Rechnungsstellung mit AFIP bei jedem Kauf',
      'Tickettypen mit Tranchen, Kontingenten und unabhängigen Verkaufszeiten',
      'QR-Scan mit Anti-Doppelscan-Validierung und 6-Stunden-Toleranz',
      'Einlösbares Punktesystem gegen Produkte aus dem Katalog',
      'Detaillierte Analyse pro Veranstaltung (Geschlecht, Alter, Spitzenzeiten, Tranchen)',
      'Fünf Rollen: Nutzer, Kasse, Operator, Wiederverkäufer, Administrator',
    ],
  },
  nodominium: {
    subtitle: 'Website eines Kultur- und Bildungszentrums in El Salvador',
    categories: 'Statische Website • HTML/CSS/JS • Bitcoin • Google Maps',
    description:
      'Website für Casa de Nodominium, ein unabhängiges Bildungs- und Kulturzentrum in Playa Las Tunas, La Unión, El Salvador. Veranstaltungen mit Touch-Slider und Lightboxes, institutionelle Informationen, interaktive Google Maps-Karte, Kontaktformular mit FormSubmit und Bitcoin-Spenden mit QR-Code. Vollständig statische Website ohne Backend.',
    features: [
      {
        title: 'Website-Inhalt',
        items: [
          'Veranstaltungs-Slider mit Touch-Unterstützung (Swipe)',
          'Lightboxes mit Beschreibung, Merkmalen und Sponsoren',
          'Präsentation des Zentrums mit Vision und Aktivitäten',
          'Interaktive Google Maps-Karte mit Standort',
          'Funktionales Kontaktformular mit FormSubmit',
          'Bitcoin-Spenden mit scannbarem QR-Code',
        ],
      },
      {
        title: 'Design und UX',
        items: [
          'CSS-Animationen (fadeInUp, zoomIn, float, slide-in)',
          'Feste untere Navigation auf allen Seiten',
          'Responsive mit Breakpoints bei 480px, 768px und 1024px',
          'Dunkle Farbverläufe mit orangenen/goldenen Akzenten',
        ],
      },
    ],
    integrationUses: [
      'Interaktive Karte mit Standort des Zentrums',
      'Kontaktformular ohne Backend',
      'Kryptowährungsspenden mit QR-Code',
      'Ikonographie in der gesamten Benutzeroberfläche',
    ],
    highlights: [
      'Vollständig statische Website ohne Server oder Datenbank',
      'Veranstaltungs-Slider mit Touch-Unterstützung für Mobilgeräte',
      'Lightboxes mit vollständigen Informationen zu jeder Veranstaltung',
      'Bitcoin-Spenden mit scannbarem QR-Code',
      'Reine CSS-Animationen ohne externe Bibliotheken',
      'Funktionales Formular mit FormSubmit ohne eigenes Backend',
    ],
  },
  'mdt-ingenieros': {
    subtitle: 'Stundenerfassung und Projektverwaltung für Vermessung',
    categories: 'Web-App • Personalwesen • Rechnungsstellung • Digitale Unterschriften',
    description:
      'Webplattform zur Erfassung und Kontrolle geleisteter Arbeitsstunden, Projektverwaltung und Berichtserstellung für ein Vermessungsunternehmen. Arbeitstage mit Aktivitäten, digitale Unterschriften, Genehmigung von Überstunden, Gehaltsberichte als PDF, monatliche Rechnungsstellung mit MwSt. und Abzügen, visueller Kalender mit Status, Personalrotation und Überwachung nicht erfasster Stunden. Währung: USD.',
    features: [
      {
        title: 'Für den Mitarbeiter',
        items: [
          'Erfassung des Arbeitstags mit Aktivitäten, Zeiten und digitalen Unterschriften',
          'Überstundenantrag mit Begründung und Genehmigung',
          'Verlauf der Einträge und Status der Anträge',
          'Interne Benachrichtigungen über Genehmigungen und Zuweisungen',
        ],
      },
      {
        title: 'Administrationspanel',
        items: [
          'Projekte mit Wochenplan und Stundsätzen',
          'Visueller Kalender mit Tagesstatus pro Projekt',
          'Überstundengenehmigung mit automatischer Aktualisierung',
          'Monatliche Rechnungsstellung mit MwSt. (13 %) und Abzug (1 %)',
          'Gehalts- und Lohnberichte aufgeschlüsselt nach Projekt',
          'Personalrotation und Überwachung nicht erfasster Stunden',
        ],
      },
      {
        title: 'Berichte und PDFs',
        items: [
          'Tägliche Zusammenfassung als PDF per E-Mail an den Vorgesetzten',
          'Herunterladbarer monatlicher Gehaltsbericht',
          'Monatliche Rechnung pro Projekt mit Kostenaufschlüsselung',
          'Überstundenkalender als PDF',
        ],
      },
    ],
    integrationUses: [
      'Tägliche Zusammenfassungen, Überstunden und Rechnungen per E-Mail mit PDF-Anhang',
      'Professionelle A4-PDFs für Zusammenfassungen, Gehaltsabrechnungen und Rechnungen',
      'Berechnung von Arbeitsstunden, Überstunden und Mittagspausenabzug',
      'Hochladen digitaler Unterschriften',
    ],
    highlights: [
      'Intelligente Überstundenberechnung nach Tag, Feiertag und Mittagspause',
      'Digitale Unterschriften von Vermesser und Vorgesetztem in den Berichten',
      'Automatische monatliche Rechnungsstellung mit MwSt. (13 %) und Abzug (1 %)',
      'Visueller Kalender mit Tagesstatus pro Projekt',
      'Überwachung nicht erfasster Stunden der letzten 7 Tage',
      'Personalrotation zwischen Projekten mit monatlicher Aufschlüsselung',
    ],
  },
  storybox: {
    subtitle: 'Interaktiver Editor für Geschichten und Präsentationen mit visueller Programmierung',
    categories: 'Web-App • Bildung • Visuelle Programmierung • Blockly',
    description:
      'Interaktive Webanwendung zum Erstellen von Geschichten und Multimedia-Präsentationen mit visueller Programmierung. Der Nutzer erstellt Szenen mit Hintergründen, verschiebbaren und skalierbaren Objekten, Texten mit mehreren Schriftarten und Stilen, Hintergrundmusik pro Szene, animierten Übergängen und programmiert das Verhalten der Objekte mit visuellen Blöcken (Blockly). Vollbildpräsentation, PDF-Export, Speicherung auf dem Server mit automatischem Vorschaubild, Rückgängig-/Wiederholen-System, Kopieren und Einfügen sowie zweisprachige Oberfläche Spanisch/Englisch.',
    features: [
      {
        title: 'Szeneneditor',
        items: [
          'Unbegrenzte Szenen mit seitlichem Vorschaubildpanel',
          'Titelszene mit Hintergrundkarussell und automatischem Titel',
          'Szenen per Drag & Drop umordnen',
          'Hintergründe als Farbe (HSL) oder Bild aus Bibliothek/eigenem Upload',
        ],
      },
      {
        title: 'Objekte und Texte',
        items: [
          'Objektbibliothek nach Kategorien + eigener Upload',
          'Drag & Drop, Größenänderung (8 Punkte), Rotation und Ebenen (z-index)',
          '5 Schriftarten, 6 Größen, Fett/Kursiv/Unterstrichen und HSL-Farbe',
          'Erzählmodus fixiert am unteren Rand der Szene',
        ],
      },
      {
        title: 'Visuelle Programmierung (Blockly)',
        items: [
          '5 Bewegungsblöcke: rechts, links, hoch, runter, folgen',
          '7 Darstellungsblöcke: vergrößern, verkleinern, drehen, Kommentar, Sound, anzeigen, ausblenden',
          '2 Steuerungsblöcke: wiederholen und stoppen',
          'Automatische sequentielle Ausführung während der Präsentation',
        ],
      },
      {
        title: 'Multimedia und Export',
        items: [
          'Hintergrundmusik pro Szene mit Bibliothek und MP3-Upload',
          '8 Übergangsrichtungen mit 3 Geschwindigkeiten',
          'Vollbild-Präsentation mit Navigation',
          'PDF-Export (html2canvas + jsPDF) und Direktdruck',
        ],
      },
    ],
    integrationUses: [
      'Engine für visuelle Blockprogrammierung zum Steuern des Objektverhaltens',
      'Szenenaufnahme als Bild für PDFs und Vorschaubilder',
      'Generierung exportierbarer PDF-Dokumente',
      'Szenen und Blöcke per Drag & Drop umordnen',
      'Freie Positionierung von Objekten in der Szene',
      'HSL-Farbwähler für Hintergründe und Texte',
      'Animationen von Panels und Oberfläche',
      'Visuelle Aktionsbenachrichtigungen',
    ],
    highlights: [
      'Visuelle Programmierung mit 17 Blocktypen (Bewegung, Darstellung, Steuerung)',
      'Leinwand-Editor mit Drag & Drop, 8 Griffpunkten, Rotation und Ebenen',
      'Animierte Übergänge in 8 Richtungen mit 3 Geschwindigkeiten',
      'Hintergrundmusik pro Szene mit automatischer Schleifenwiedergabe',
      'Vollständiges Rückgängig-/Wiederholen-System basierend auf Stacks',
      'Hochwertiger PDF-Export mit html2canvas + jsPDF',
      'Zweisprachige Oberfläche Spanisch/Englisch mit dynamischen Texten',
      'Speicherung auf dem Server mit automatisch generiertem Vorschaubild',
    ],
  },
  konecta: {
    subtitle: 'Mobile App zur Anwesenheitskontrolle und Urlaubsverwaltung',
    categories: 'Mobile App • Personalwesen • QR • Geolokalisierung • Google Maps',
    description:
      'Plattformübergreifende mobile Anwendung zur Anwesenheitskontrolle von Mitarbeitern. Ein- und Ausstempeln per QR-Code oder GPS-Geolokalisierung, Anwesenheitsverlauf mit Kartenansicht in Google Maps, Urlaubs- und Vorfallsanträge mit Anhängen, Unterstützung für mehrere Unternehmen, Selfie für Profilfoto, differenzierte Rollen (Mitarbeiter und Vorgesetzter) und an die Benutzerrolle anpassbare Navigation.',
    features: [
      {
        title: 'Für den Mitarbeiter',
        items: [
          'Anwesenheitserfassung per QR oder GPS-Geolokalisierung',
          'Echtzeit-Status (ausstehend, Eingang, Ausgang)',
          'Paginierter Anwesenheitsverlauf mit Suche und Filtern',
          'Kartenansicht mit Standortmarkierungen der Erfassungen',
          'Urlaubsantrag mit Grund, Daten und Anhängen',
          'Selfie für Profilfoto mit Frontkamera',
        ],
      },
      {
        title: 'Für den Vorgesetzten',
        items: [
          'Betriebspanel mit Genehmigungsverwaltung',
          'Genehmigung oder Ablehnung von Mitarbeiteranträgen',
          'Erweiterte Konfiguration der Mitarbeiter-Unternehmen-Zuordnung',
        ],
      },
      {
        title: 'Authentifizierung und Sicherheit',
        items: [
          'Login mit Ausweisnummer und Verifizierungscode pro Unternehmen',
          'Unterstützung für mehrere Unternehmen pro Nutzer',
          'Sitzungstoken mit Ablauferkennung',
          'Passwortwiederherstellung per E-Mail',
        ],
      },
    ],
    integrationUses: [
      'Interaktive Karte mit Standorten der Anwesenheitserfassungen',
      'Selfie-Aufnahme für Profilfoto',
      'QR-Code-Scan für Anwesenheitserfassung',
      'GPS-Geolokalisierung für Anwesenheitserfassung',
      'Anhängen von Dokumenten an Urlaubsanträge',
      'Generierung eines Bestätigungs-QR nach der Erfassung',
    ],
    highlights: [
      'Doppelte Erfassungsmethode: QR-Code und GPS-Geolokalisierung',
      'Interaktive Google Maps-Karte mit Standortverlauf',
      'Unterstützung mehrerer Unternehmen mit Auswahl pro Sitzung',
      'Differenzierte Rollen mit anpassbarer Navigation (Mitarbeiter/Vorgesetzter)',
      'Urlaub und Vorfälle mit Anhängen und Genehmigungsablauf',
      'Selfie für Profil mit Frontkamera codiert in Base64',
    ],
  },
  'el-lobito-4pe': {
    subtitle: 'Golf-Punkterechner für 4 Spieler',
    categories: 'Mobile App • Sport • Berechnung • React Native',
    description:
      'Mobile Anwendung zur Berechnung der Punktzahlen eines Golf-Wettspiels zwischen 4 Spielern. Interaktives Raster mit 18 Löchern × 4 Spielern mit automatischer Punkteberechnung nach bedingten Regeln (vorherige Gleichstände, Anzahl der Markierungen pro Loch). Konfigurierbarer Einheitspreis und Ergebnisse in kolumbianischen Pesos. Eigenständige Anwendung ohne Backend oder Datenbank.',
    features: [
      {
        title: 'Spielmechanik',
        items: [
          'Interaktives Raster mit 18 Löchern × 4 Spielern (A, B, C, D)',
          'Zellenmarkierung mit visuellem Feedback in Grün',
          'Automatische Punkteberechnung mit bedingten Regeln',
          'Kumulative Gleichstände, die das nächste Loch multiplizieren',
        ],
      },
      {
        title: 'Ergebnisse und Konfiguration',
        items: [
          'Konfigurierbarer Einheitspreis als Multiplikator',
          'Ergebnisse in kolumbianischen Pesos (COP)',
          'Negative Ergebnisse in Rot hervorgehoben',
          'Löschen-Button zum Zurücksetzen des Spiels',
        ],
      },
    ],
    integrationUses: [],
    highlights: [
      'Punkteregeln angepasst für Partien mit 4 Spielern',
      'Berechnungsengine mit Multiplikatoren bei vorherigen Gleichständen',
      'Eigenständige Anwendung: eine einzige Komponente, kein Backend',
      'Kolumbianisches Währungsformat (COP) mit Locale es-CO',
      'Kompiliertes APK sofort installierbar enthalten',
      'Raster mit horizontalem Scrollen für komfortable Ansicht',
    ],
  },
  'casino-online': {
    subtitle: 'Glücksspielplattform mit Echtzeit-Wetten',
    categories: 'Web-App • Gaming • WebSocket • Redux • Firebase',
    description:
      'Online-Casino-Plattform mit 5 interaktiven Spielen (Spielautomat, Aviator, Blackjack, Roulette und Hunt the Ace), Echtzeit-Wetten mit WebSocket, Administrationspanel mit Statistikdiagrammen, Empfehlungsprogramm mit Bonus, BFG-Staking-Programm, Einzahlungs- und Auszahlungsverwaltung, Bild-CDN mit ImageKit und sichere Authentifizierung mit JWT und differenzierten Rollen.',
    features: [
      {
        title: 'Verfügbare Spiele',
        items: [
          'Spielautomat mit mehreren Gewinnlinien und Jackpots',
          'Aviator mit steigendem Multiplikator und Echtzeit-Auszahlung',
          'Klassisches Blackjack gegen das Haus',
          'Europäisches Roulette mit Wetten auf Zahlen, Farben und Sektionen',
          'Hunt the Ace: das As unter gemischten Karten finden',
        ],
      },
      {
        title: 'Finanzsystem',
        items: [
          'Echtzeit-Wetten mit WebSocket (Socket.io)',
          'Kontostand mit sofortiger Aktualisierung',
          'Einzahlungen mit automatischer Verarbeitung',
          'Auszahlungen mit Genehmigungsablauf',
          'Vollständiger Transaktionsverlauf',
        ],
      },
      {
        title: 'Empfehlungsprogramm und Staking',
        items: [
          'Einzigartiger Empfehlungscode mit $10 Bonus',
          'Empfehlungspanel mit Konversionsstatistiken',
          'BFG-Staking-Programm mit berechneten Renditen',
          'Visualisierung von investiertem Kapital und Gewinnen',
        ],
      },
      {
        title: 'Administrationspanel',
        items: [
          'Dashboard mit Chart.js und ApexCharts',
          'Benutzerverwaltung mit Kontosperrung',
          'Überwachung von Spielen und aktiven Sitzungen',
          'Transaktionskontrolle und Auszahlungsgenehmigung',
          'Einnahmen- und Leistungsberichte',
        ],
      },
    ],
    integrationUses: [
      'Bild-CDN für Casino-Assets und grafische Ressourcen',
      'Wetten, Ergebnisse und Kontostandaktualisierungen in Echtzeit',
      'Transaktions-E-Mails und Benachrichtigungen',
      'Authentifizierung und Push-Benachrichtigungen',
      'Statistikdiagramme im Administrations-Dashboard',
    ],
    highlights: [
      '5 vollständige Spiele mit von Grund auf implementierter Casino-Logik',
      'Wetten und Ergebnisse in Echtzeit mit WebSocket (Socket.io)',
      'Vollständiger MERN-Stack mit dreifacher UI-Bibliothek (MUI + Ant Design + Bootstrap)',
      'Empfehlungsprogramm mit automatischem $10-Bonus',
      'BFG-Staking-Programm mit berechneten Renditen',
      'Bild-CDN mit ImageKit für optimiertes Laden',
      'Globaler State mit Redux Toolkit für flüssiges Spielerlebnis',
      'Administrationspanel mit Echtzeit-Diagrammen',
    ],
  },
  'saucedo-abogados': {
    subtitle: 'Rechtsverwaltungssystem mit elektronischer Signatur und künstlicher Intelligenz',
    categories: 'Web-App • Mobile App • Recht • KI • Elektronische Signatur • Laravel',
    description:
      'Umfassendes Verwaltungssystem für Anwaltskanzleien mit Rechtsfällen in 6 spezialisierten Tabs, Mandantenverwaltung, Kostenvoranschläge mit Genehmigungsablauf, Inkasso, integriertem Kalender, 6 Berichtstypen, Dokumentenindexierung mit KI (OCR und automatische Zusammenfassung), elektronischer Signatur mit SignNow, Integration mit Google Drive und Google Calendar, Filament-Panel, mobile App und 3 differenzierte Rollen. Laravel-Backend mit 48 Modellen und 88 Endpunkten.',
    features: [
      {
        title: 'Fallverwaltung',
        items: [
          'Fälle mit 6 Tabs: Info, Parteien, Dokumente, Vorgänge, Notizen, Aufgaben',
          'Fallstatus: neu, in Bearbeitung, wartend, geschlossen, archiviert',
          'Zuweisung an einen oder mehrere Anwälte',
          'Chronologische Prozessvorgänge und interne Notizen',
          'Ausstehende Aufgaben mit Frist und Verantwortlichem',
        ],
      },
      {
        title: 'Kostenvoranschläge und Inkasso',
        items: [
          'Kostenvoranschläge mit Genehmigungsablauf (3 Rollen)',
          'Status: Entwurf, ausstehend, genehmigt, gesendet, akzeptiert, abgelehnt',
          'Automatische Umwandlung von Kostenvoranschlag zu Fall',
          'Verfolgung von Teil- und Gesamtzahlungen',
          'Erinnerungen für bald fällige Inkassovorgänge',
        ],
      },
      {
        title: 'KI und elektronische Signatur',
        items: [
          'OCR von PDF-Dokumenten mit Datenextraktion',
          'Automatische Zusammenfassung mit KI (OpenAI)',
          'Intelligente Suche in indexierten Dokumenten',
          'Elektronische Signatur mit SignNow mit Statusverfolgung',
          'Download signierter Dokumente mit Rechtsverbindlichkeit',
        ],
      },
      {
        title: 'Kalender und Berichte',
        items: [
          'FullCalendar mit bidirektionaler Synchronisation mit Google Calendar',
          'Termine: Anhörungen, Besprechungen, Fälligkeiten und Aufgaben',
          '6 Berichte: Fälle, Rechnungsstellung, Inkasso, Produktivität, Mandanten, Kostenvoranschläge',
          'Filament-Panel mit Dashboard und Prüfprotokoll',
        ],
      },
    ],
    integrationUses: [
      'Elektronische Signatur von Rechtsdokumenten mit Rechtsverbindlichkeit',
      'Speicherung und Synchronisation von Falldokumenten',
      'Bidirektionale Synchronisation von Terminen und Anhörungen',
      'OCR, automatische Zusammenfassung und Datenextraktion aus Dokumenten',
      'Visueller interaktiver Kalender mit mehreren Ansichten',
      'Administrationspanel mit Dashboard und Ressourcenverwaltung',
      'PDF-Generierung für Kostenvoranschläge und Berichte',
      'Automatisierte End-to-End-Tests',
    ],
    highlights: [
      'Dokumentenindexierung mit KI: OCR + automatische Zusammenfassung mit OpenAI',
      'Elektronische Signatur mit SignNow mit Rechtsverbindlichkeit',
      'Dreifache Google-Integration: Drive, Calendar und OAuth',
      '48 Modelle und 88 Endpunkte in Laravel für vollständige Rechtsverwaltung',
      'Genehmigungsablauf für Kostenvoranschläge mit 3 differenzierten Rollen',
      '6 Berichtstypen für die Entscheidungsfindung der Kanzlei',
      'Fälle mit 6 spezialisierten Tabs für umfassende Verwaltung',
      'E2E-Tests mit Playwright und ergänzende mobile App',
    ],
  },
  'grupo-sdg': {
    subtitle: 'Unternehmensverwaltungssystem mit elektronischer Rechnungsstellung CFDI 4.0 (Mexiko)',
    categories: 'Web-App • ERP • CFDI-Rechnungsstellung • Laravel 12 • SAT',
    description:
      'Unternehmensverwaltungssystem für den mexikanischen Markt mit elektronischer Rechnungsstellung CFDI 4.0. Vollständige Vertriebspipeline (Angebot → Bestellung → Rechnung → Zahlung → Inkasso), Ausstellung digitaler Steuerbelege mit CSD-Zertifikaten, Stempelung durch PAC, RFC-Validierung gegen die SAT-Sperrliste, Finanzmodul, Passwortrichtlinien mit Ablauf und 4 Prüfprotokolltabellen. Laravel 12-Backend mit über 40 Modellen und über 80 mit Swagger dokumentierten Endpunkten.',
    features: [
      {
        title: 'Vertriebspipeline',
        items: [
          'Vollständiger Ablauf: Angebot → Bestellung → Rechnung → Zahlung → Inkasso',
          'Automatische Konvertierung zwischen Stufen mit Datenübernahme',
          'Zahlungsergänzungen gemäß SAT-Vorschriften',
          'Verfolgung offener Forderungen mit Fälligkeiten',
        ],
      },
      {
        title: 'CFDI 4.0-Rechnungsstellung',
        items: [
          'Digitale Steuerbelege gemäß SAT-Vorschriften',
          'Digitale Signatur mit Sello-Digital-Zertifikat (CSD)',
          'Steuerliche Stempelung durch PAC (autorisierter Anbieter)',
          'RFC-Validierung gegen SAT-Sperrliste',
          'Generierung von Steuer-XML und druckfähiger PDF-Darstellung',
          'Stornierung von CFDI mit Begründung gemäß Vorschriften',
        ],
      },
      {
        title: 'Finanzen und Sicherheit',
        items: [
          'Bankkonten, Bewegungen und Abstimmung',
          'Cashflow mit Einnahmen- und Ausgabenprognose',
          'Passwortrichtlinien mit Ablauf und Sperrung',
          '4 Prüfprotokolltabellen: Zugriffe, Daten, Steuer, Admin',
        ],
      },
      {
        title: 'Administration',
        items: [
          'Dashboard mit Vertriebs- und Rechnungskennzahlen',
          'Integrierte offizielle SAT-Kataloge',
          'Konfigurierbare Steuern: IVA, ISR, IEPS',
          'Benutzerverwaltung mit Rollen und Berechtigungen',
        ],
      },
    ],
    integrationUses: [
      'Steuerliche Stempelung von CFDI 4.0-Belegen',
      'Offizielle Kataloge und RFC-Validierung gegen Sperrliste',
      'Digitale Signatur von Steuerbelegen',
      'Druckfähige Darstellungen von CFDI als PDF',
      'Interaktive Dokumentation von über 80 Endpunkten',
    ],
    highlights: [
      'Vollständige CFDI 4.0-Rechnungsstellung mit PAC-Stempelung und CSD-Zertifikaten',
      'End-to-End-Vertriebspipeline: vom Angebot bis zum Inkasso',
      'RFC-Validierung gegen SAT-Sperrliste',
      '4 Prüfprotokolltabellen für vollständige Rückverfolgbarkeit',
      'Unternehmenspasswortrichtlinien mit periodischem Ablauf',
      'Über 40 Modelle und über 80 mit Swagger dokumentierte Endpunkte',
      'Finanzmodul mit Bankabstimmung',
      'Integrierte offizielle SAT-Kataloge (CFDI-Verwendung, Steuerregime, Zahlungsform)',
    ],
  },
  'goodbye-friend': {
    subtitle: 'Virtueller 3D-Tierfriedhof mit interaktiven Gräbern',
    categories: 'Web 3D • Mobile App • Three.js • React Three Fiber • Stripe • Laravel',
    description:
      'Virtuelle Gedenkplattform für Haustiere mit einem vollständigen 3D-Friedhof. Über 1.075 Grabstellen in über 25 Reihen, 3 Grabstile, 57 3D-Tribute-Objekte, Rundnischen und Mausoleen. Ego-Perspektive mit Pointer Lock auf Desktop und virtuellen Touch-Joysticks auf Mobil, Minikarte, Distanz-Rendering, Haustierprofile mit Galerien, kollaborative Gedenkstätten, Künstler-Marketplace und Zahlungen mit Stripe. Mobile App mit React Native und Laravel-Backend.',
    features: [
      {
        title: '3D-Friedhof',
        items: [
          '3D-Welt mit Gelände, Rasen, Wegen, Bäumen und Dekoration',
          'Über 1.075 Grabstellen in über 25 Reihen mit 3 Grabstilen',
          '57 3D-Tribute-Objekte: Blumen, Kerzen, Kränze, Spielzeug',
          '10 Rundnischen und Premium-Mausoleen',
          'Dynamische Beleuchtung und Distanz-Rendering',
        ],
      },
      {
        title: 'Navigation und Kamera',
        items: [
          'Ego-Perspektive mit Pointer Lock auf Desktop',
          'Virtuelle Touch-Joysticks auf Mobilgeräten',
          'Minikarte mit aktueller Position und belegten Gräbern',
          'Direkte Navigation zu einem bestimmten Grab',
          'Kollisionssystem mit Friedhofsobjekten',
        ],
      },
      {
        title: 'Gedenkstätten und Community',
        items: [
          'Haustierprofil mit Biografie und Fotogalerie',
          'Virtuelle Tribute von anderen Besuchern',
          'Beileidsnachrichten an jeder Gedenkstätte',
          'Öffentliche oder private Gedenkstätte nach Wunsch',
          'Künstler-Marketplace zur Personalisierung',
        ],
      },
      {
        title: 'Zahlungen und Mobile App',
        items: [
          'Gedenkpläne: Basis, Premium, Mausoleum (Stripe)',
          'Kauf zusätzlicher 3D-Tribute',
          'Mobile App mit 3D-Rundgang und Touch-Joysticks',
          'Profil- und Galerieverwaltung vom Smartphone',
        ],
      },
    ],
    integrationUses: [
      '3D-Engine für den Friedhof mit Gräbern, Objekten und Atmosphäre',
      'Helfer und Komponenten für Three.js (Kamera, Steuerung, Loader)',
      'Zahlungen für Gedenkpläne, Tribute und Marketplace',
      'Foto- und Bildaufnahme und -auswahl über die mobile App',
    ],
    highlights: [
      '3D-Friedhof mit über 1.075 Grabstellen, 3 Grabstilen und 57 Tribute-Objekten',
      'Hybride Kamera: Pointer Lock auf Desktop, Touch-Joysticks auf Mobil',
      'Optimiertes Distanz-Rendering für stabile 60fps',
      'Navigations-Minikarte mit Echtzeit-Position',
      'Künstler-Marketplace zur Personalisierung von Gedenkstätten',
      'Drei Plattformen: Web 3D (Three.js/R3F), Mobile App (React Native), Backend (Laravel)',
      'Kollisionssystem für realistischen Rundgang',
      'Monetarisierung mit Stripe: Pläne, Tribute und Zahlungen an Künstler',
    ],
  },
  safetrade: {
    subtitle: 'Marketplace für Trading-Signale mit Abonnements',
    categories: 'Mobile App • Fintech • Trading • Stripe • Zustand • React Query',
    description:
      'Mobile Anwendung für den Kauf und Verkauf von Trading-Signalen. Trader veröffentlichen Signale mit technischer Analyse und Kunden abonnieren diese. Zwei differenzierte Rollen, wiederkehrende Abonnements mit Stripe, Performance-Dashboard, Trader-Erkundung mit Leistungskennzahlen, Statistikdiagramme, rollenbasierte Tab-Navigation und Validierung mit Zod. Moderner Stack: React Native, Expo, TypeScript, Zustand und React Query.',
    features: [
      {
        title: 'Für Trader',
        items: [
          'Signale veröffentlichen mit Asset, Richtung, Take Profit und Stop Loss',
          'Dashboard mit Trefferquote, kumulierter Rendite und Gewinnserie',
          'Abonnentenverwaltung und Abonnementstatus',
          'Signalverlauf mit Ergebnis (Gewinner/Verlierer)',
          'Performance-Diagramme mit Linien und Balken',
        ],
      },
      {
        title: 'Für Kunden',
        items: [
          'Trader-Verzeichnis mit Kennzahlen und Abonnementpreis',
          'Monatliches Abonnement bei einem oder mehreren Tradern',
          'Echtzeit-Signale mit Details und Analyse',
          'Abonnementverwaltung: anzeigen, pausieren oder kündigen',
        ],
      },
      {
        title: 'Zahlungen und Konto',
        items: [
          'Wiederkehrende monatliche Abonnements mit nativem Stripe SDK',
          'Zahlungsverlauf, Rechnungen und Zahlungsstatus',
          'Konfiguration von Benachrichtigungen und Profil',
        ],
      },
    ],
    integrationUses: [
      'Wiederkehrende Abonnements mit Kredit-/Debitkarte',
      'Dienstkonfiguration und Benachrichtigungen',
      'Performance- und Trader-Statistikdiagramme',
    ],
    highlights: [
      'Zwei Rollen mit vollständig differenzierten Oberflächen und Navigation',
      'Moderner Stack: Zustand + React Query + Zod für State, Cache und Validierung',
      'Natives Stripe in React Native für Zahlungen ohne App-Wechsel',
      'Automatische Kennzahlen: Trefferquote, kumulierte Rendite, Gewinnserie',
      'Vollständiges TypeScript in der gesamten Anwendung',
      'Expo Router mit bedingten Tabs je nach Benutzerrolle',
      'React Query mit Cache und optimistischer Synchronisation',
      'Wiederkehrende Abonnements mit automatischer monatlicher Abbuchung',
    ],
  },
  biznes: {
    subtitle: 'SaaS-Plattform für digitale Visitenkarten',
    categories: 'Web-App • SaaS • E-Commerce • QR • Mercado Pago • Redux',
    description:
      'SaaS-Plattform zum Erstellen personalisierbarer und per Link oder QR teilbarer digitaler Visitenkarten. Visueller Editor mit Echtzeit-Vorschau, integrierte soziale Netzwerke, benutzerdefinierte Schaltflächen, herunterladbare vCard, Mitgliedschaftssystem mit Mercado Pago, Produktshop mit Warenkorb, vollständiges Administrationspanel, detaillierte Interaktionsstatistiken (Besuche, Klicks, Downloads, Verweildauer) und Echtzeit-Kommunikation mit Socket.IO.',
    features: [
      {
        title: 'Karteneditor',
        items: [
          'Schrittweises Design: Foto, Titelbild, Logo, Bio, Position, Unternehmen',
          'Soziale Netzwerke mit hervorgehobenen Favoriten (Instagram, LinkedIn, TikTok usw.)',
          'Visuelle Anpassung: Farben, Schriftarten, Ränder, Ausrichtung, Hintergründe',
          'Echtzeit-Vorschau im Smartphone-Format',
          'Automatischer QR herunterladbar und vCard zum Speichern des Kontakts',
        ],
      },
      {
        title: 'Mitgliedschaften und Shop',
        items: [
          'Pläne mit granular konfigurierbaren Berechtigungen',
          'Zahlungen und Abonnements mit Mercado Pago',
          'Produktshop mit Kategorien, Varianten und Warenkorb',
          'Rabattgutscheine und Mitgliedschaftsrabatte',
        ],
      },
      {
        title: 'Statistiken',
        items: [
          'Kartenbesuche mit Datum und Gerät',
          'Klicks auf soziale Netzwerke, E-Mail und Buttons',
          'vCard-Downloads und Anzeigedauer',
          'Empfangene Kontakte über integriertes Formular',
        ],
      },
      {
        title: 'Administrationspanel',
        items: [
          'Verwaltung von Produkten, Kategorien, Mitgliedschaften und Bestellungen',
          'Blog, FAQs, Marken, Hero Cards und Ankündigungen',
          'Verwaltung von Gutscheinen, Tickets und Nutzern',
          'Massenimport aus Excel-Dateien',
        ],
      },
    ],
    integrationUses: [
      'Zahlungen für Mitgliedschaften, Abonnements und Shop-Einkäufe',
      'Schnelle Anmeldung mit Google-Konto',
      'Transaktions-E-Mails (Kauf, Login, Mitgliedschaften)',
      'Automatische QR-Code-Generierung pro Karte',
      'Herunterladbare Kontaktdateien (.vcf)',
      'Echtzeit-Kommunikation',
      'Bildoptimierung und -konvertierung zu WebP',
      'Interaktive API-Dokumentation',
    ],
    highlights: [
      'Vollständiges SaaS mit Abonnements und granularen Berechtigungen pro Plan',
      'Erweiterter visueller Editor mit Echtzeit-Vorschau im Smartphone-Format',
      'Detaillierte Statistiken: Besuche, Klicks, Downloads, Verweildauer',
      'Automatischer QR + vCard für jede digitale Visitenkarte',
      'Produktshop mit Warenkorb und Checkout über Mercado Pago',
      'Automatische Bildoptimierung zu WebP mit Sharp',
      'Massenimport von Nutzern/Karten aus Excel',
      'Geplante Aufgaben mit Agenda.js für Mitgliedschaftsablauf',
    ],
  },
  citamovil: {
    subtitle: 'Verwaltungssystem für Mobilgerätereparaturen',
    categories: 'Web-App • Technischer Service • WhatsApp-Bot • Next.js 14 • Großhändler',
    description:
      'Webplattform für einen Reparaturservice für Mobiltelefone, Tablets und elektronische Geräte in Spanien. Automatischer Kostenvoranschlag mit Preistabelle nach Modell, Defekt und Zone, Auftragssystem mit Tracking per 5-stelligem Code, automatische Benachrichtigungen per E-Mail und WhatsApp, Großhändlerverwaltung mit Genehmigung und Tracking, Blog mit Rich-Text-Editor und Administrationspanel mit zu 100 % bearbeitbaren Inhalten.',
    features: [
      {
        title: 'Für den Kunden',
        items: [
          'Automatischer Kostenvoranschlag nach Kategorie, Marke, Modell und Defekten',
          'Mehrfachauswahl von Defekten mit Echtzeitpreis',
          'Reparaturverfolgung mit 5-stelligem Code',
          'Benachrichtigungen per E-Mail und WhatsApp bei jeder Statusänderung',
          'Echte Daten von Provinzen und Orten in Spanien',
        ],
      },
      {
        title: 'Großhändlersystem',
        items: [
          'Registrierung mit manueller Genehmigung durch den Administrator',
          'Volumen-Reparaturaufträge mit Abholadresse',
          'Unabhängiges Tracking mit eigenem Code und Status',
          'E-Mail-Benachrichtigungen an Großhändler und Admin',
        ],
      },
      {
        title: 'Administrationspanel',
        items: [
          'Preistabelle nach Modell, Defekt und Zone (lokal/auswärts/Großhändler)',
          'Verwaltung von Kategorien, Marken, Modellen und Defekten',
          'Aufträge mit Statusänderung und automatischer Benachrichtigung',
          'Blog mit Rich-Text-Editor, Tags und verwandten Artikeln',
          'Zu 100 % bearbeitbare Inhalte ohne Code-Änderungen',
          'Export der Preistabelle als PDF',
        ],
      },
    ],
    integrationUses: [
      'Automatische Nachrichten bei Auftragserstellung oder Statusänderung (QR-Verbindung)',
      'E-Mails mit HTML-Vorlagen für Aufträge, Status und Großhändler',
      'PDF-Generierung mit Preistabellen',
      'Google-Bewertungen auf der Startseite',
    ],
    highlights: [
      'Intelligenter Kostenvoranschlag mit Preisen nach Modell, Defekt und geografischer Zone',
      'Integrierter WhatsApp-Bot mit whatsapp-web.js (ohne kostenpflichtige Dienste)',
      'Mehrkanalbenachrichtigungen: automatische E-Mail + WhatsApp',
      'Großhändlersystem mit Registrierung, Genehmigung und Tracking',
      'Dynamische Preistabelle mit Drag & Drop und PDF-Export',
      'Zu 100 % bearbeitbare Inhalte über das Administrationspanel',
    ],
  },
}
