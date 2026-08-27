import type { ProjectI18n } from './types'

export const de: Record<string, ProjectI18n> = {
  'cap-medical': {
    subtitle: 'Mobile App für medizinische Leistungen und Operationen',
    categories: 'Mobile App • React Native • Multi-Modul',
    description:
      'Mobile App für ein Unternehmen, das chirurgische Leistungen verwaltet. Vom Handy aus werden Leistungen in drei Schritten angelegt, ihr Status verfolgt, Bewegungen mit GPS-Standort und Anhängen erfasst und Zahlungen sowie Gegenbelege eingetragen. Dazu kommen ein Verzeichnis von Technikern, Krankenhäusern und medizinischen Zentren, Patientenakten und Benachrichtigungen. Die Rechte hängen von der Rolle des jeweiligen Nutzers ab.',
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
      'Rechte nach Rolle',
      'Anlegen von Leistungen in 3 Schritten mit dynamischen Katalogen',
      '10 Screens pro Leistung',
      'Bewegungen mit automatischem GPS-Standort',
      'Verlauf aller Änderungen',
      'Die ganze App in TypeScript',
    ],
  },
  petnder: {
    subtitle: 'App für Tierhalter, mit Adoption und Services in der Nähe',
    categories: 'Mobile App • React Native • Haustier-Marketplace',
    description:
      'Eine mobile App für Leute mit Haustieren. Man findet tierfreundliche Services nach Kategorie, adoptiert Tiere mit Filtern und Chat und meldet vermisste Tiere mit Standort. Unternehmen haben ein eigenes Profil mit eigener Navigation: Sie legen Services mit Karte und Öffnungszeiten an, erstellen Gutscheine mit QR-Code und sehen ihre Statistiken. Dazu kommen Chat in Echtzeit, Push-Benachrichtigungen und Communities mit Rollen und Moderation.',
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
      'Zwei getrennte Profile, eines für Nutzer und eines für Unternehmen',
      'Adoption mit Filtern und Chat zwischen beiden Seiten',
      'Communities mit Rollen und Moderation der Inhalte',
      'Digitale Geldbörse mit Guthaben und Verlauf für Unternehmen',
      'Erfolge als Gamification',
      'Animiertes Onboarding mit Reanimated',
    ],
  },
  controla2: {
    subtitle: 'ERP für Bau- und Ingenieurfirmen in Chile',
    categories: 'SaaS • ERP • Elektronische Rechnungsstellung',
    description:
      'Ein Web-ERP für Bau- und Ingenieurfirmen, die alles an einem Ort haben wollen. Es deckt Projekte mit Budgets und Gantt-Diagramm ab, Personal mit Lohnabrechnung, elektronische Rechnungen, Einkauf, Lager und Arbeitsschutz. Es ist an die chilenischen Vorschriften angepasst (AFP, ISAPRE, DTE, RUT) und hat acht Rollen mit Freigabeabläufen.',
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
      'Dashboard mit Kennzahlen in Echtzeit',
      'Erzeugt PDF, Excel und CSV automatisch',
      '8 vordefinierte Rollen mit Freigabeabläufen',
      'Angepasst an die chilenischen Vorschriften (AFP, ISAPRE, DTE, RUT)',
      'SSOMA-Modul für den Arbeitsschutz',
      'Sofortige Hinweise, wenn etwas freizugeben ist',
    ],
  },
  alhambra: {
    subtitle: 'Website für Alhambra-Reiseführer, in 7 Sprachen',
    categories: 'Web-App • Tourismus • Admin-Panel • Mehrsprachig',
    description:
      'Website für ein Unternehmen von Reiseführern in Granada, Spanien, das Führungen durch die Alhambra anbietet. Jede Tour hat ihre eigene Seite, Buchungen kommen über ein Formular per E-Mail an, und es gibt direkten Kontakt über WhatsApp. Die Seite wird automatisch in 7 Sprachen übersetzt. Der Inhaber verwaltet Touren und Blog im Panel und bearbeitet die Texte, indem er direkt auf der Seite darauf klickt.',
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
      'Alle Inhalte ohne technische Hilfe verwaltbar',
      'Texte per Klick auf der Seite editierbar',
      'Server-Rendering für SEO',
      '7 Sprachen für internationalen Tourismus',
      'Buchungen per E-Mail und Kontakt über WhatsApp',
      'JWT, verschlüsselte Passwörter und Rollen',
    ],
  },
  'biznes-empresa': {
    subtitle: 'Digitale Visitenkarten für alle Mitarbeiter einer Firma',
    categories: 'Web-App • SaaS • Digitale Visitenkarten • Rollen',
    description:
      'Firmenversion von Biznes. Ein Unternehmen registriert sich mit Logo und Branding, lädt seine Mitarbeiter per E-Mail oder mit einer Excel-Datei ein und erstellt ihnen digitale Visitenkarten aus Vorlagen im Look der Marke. Jede Karte hat ihren eigenen QR-Code, ihre vCard und ihren Link. Rollen legen fest, wer was bearbeiten darf, und die Statistiken zu Besuchen, Klicks und Downloads sieht man gesammelt in Diagrammen.',
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
      'Die ganze Firmenverwaltung in einem Panel',
      'Vorlagen im Markenlook, die sich von selbst anwenden',
      'Rollen und Rechte pro Mitarbeiter',
      'Massenanlage von Mitarbeitern aus Excel',
      'Statistiken aller Karten in Diagrammen',
      'Aktualisierungen in Echtzeit mit WebSockets',
    ],
  },
  blackphone: {
    subtitle: 'Website für eine Handy-Werkstatt in Spanien',
    categories: 'Web-App • E-Commerce • WhatsApp-Bot • Admin-Panel',
    description:
      'Website und Verwaltungssystem für eine Handy-Reparaturwerkstatt in Spanien. Der Kunde wählt Modell und Defekte, sieht sofort den Preis und verfolgt danach seine Reparatur mit einem 5-stelligen Code. Jede Statusänderung kommt per E-Mail und WhatsApp. Für Großhändler gibt es einen eigenen Ablauf mit Freigabe und Sammelbestellungen, und ein Panel für Preise, Modelle, Defekte, Status und den Blog.',
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
      'Preisrechner nach Modell, Defekt und Region',
      'Hinweise per E-Mail und WhatsApp bei jeder Statusänderung',
      'Eigener WhatsApp-Bot, ohne kostenpflichtige Dienste',
      'Großhändler mit eigenem Bestellablauf',
      'Editierbare Preistabelle mit PDF-Export',
      'Echte Provinzen und Orte Spaniens',
    ],
  },
  casepe: {
    subtitle: 'Website einer Erdölkammer, direkt auf der Seite editierbar',
    categories: 'Institutionelle Website • Live-CMS • Blog • Next.js 14',
    description:
      'Website für CASEPE, die Kammer, in der sich Unternehmen für spezielle Erdöloperationen in Argentinien zusammenschließen. Das Besondere: Es gibt kein separates Panel für die Inhalte. Wenn der Admin eingeloggt ist, klickt er auf einen beliebigen Text oder ein Bild und ändert es direkt dort, und er kann in jedem Bereich Einträge hinzufügen oder entfernen. Dazu gibt es einen News-Blog mit verwandten Artikeln und ein Kontaktformular, das per E-Mail ankommt.',
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
      'Bearbeitung direkt auf der Seite, ohne separates Panel',
      'Verschachtelte Eigenschaften mit Lodash aktualisierbar',
      'Bereiche, in denen Einträge von der Website aus hinzugefügt und entfernt werden',
      'Blog mit Tags und verwandten Artikeln',
      'Kontakt-E-Mails mit HTML-Vorlage',
      'Scroll-Animationen in allen Bereichen',
    ],
  },
  'dental-digital': {
    subtitle: 'Verwaltung für Zahnarztpraxen, mit AFIP-Rechnung',
    categories: 'SaaS • AFIP-Rechnungsstellung • Zahnschema • Mercado Pago',
    description:
      'Ein SaaS für Zahnärzte und Praxen in Argentinien. Es hat Patientenakten mit Krankenkasse, Termine in einem Kalender, ein Zahnschema pro Zahn, Kostenvoranschläge, die zur Rechnung werden, und Einwilligungen mit digitaler Unterschrift. Elektronische Rechnungen laufen über ARCA/AFIP (A, B und C, mit Gut- und Lastschriften), das PDF geht per E-Mail oder WhatsApp raus. Abos werden über Mercado Pago abgerechnet, und jede Praxis kann mehrere Behandler mit Rollen haben.',
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
      'Elektronische Rechnung mit ARCA/AFIP und CAE',
      'Erzeugt die RSA-Zertifikate und CSR für die Anbindung an AFIP',
      'Zahnschema pro Zahn mit PDF-Export',
      'Abos mit Mercado Pago und Webhooks',
      'Mehrere Nutzer pro Praxis mit den Rollen Inhaber, Behandler und Verwaltung',
      'Komplettes Backup als JSON mit Wiederherstellung',
    ],
  },
  'sunchales-pos': {
    subtitle: 'Warenwirtschaft und Kasse mit AFIP-Rechnung',
    categories: 'SaaS • POS • AFIP-Rechnungsstellung • Barcode',
    description:
      'Websystem für die Geschäftsverwaltung von Betrieben in Argentinien. Produkte werden mit Barcode angelegt, Verkäufe und Einkäufe erfasst, und Lager und Rohstoffe werden mitgeführt. Es stellt elektronische Rechnungen über ARCA/AFIP aus, macht aus Kostenvoranschlägen Verkäufe und kümmert sich um Garantien und Rückgaben. Der Zugang wird als Abo über Mercado Pago abgerechnet.',
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
      'Einkauf, Lager, Verkauf, Rechnungen und Berichte an einem Ort',
      'Elektronische Rechnung mit ARCA/AFIP und CAE',
      'Barcodes werden im System erzeugt und gelesen',
      'Garantien und Rückgaben (RMA) mit Verfolgung',
      'Kostenvoranschläge, die zu Verkäufen werden',
      'SMTP pro Nutzer konfigurierbar für den Rechnungsversand',
    ],
  },
  'fuku-shop': {
    subtitle: 'Online-Shop für Anime- und Streetwear aus Rafaela',
    categories: 'E-Commerce • Next.js • Mercado Pago • Cloudinary',
    description:
      'Online-Shop für eine Modemarke aus Rafaela, Santa Fe, mit Anime-, Asia- und Videospiel-Stil. Jedes Produkt hat Farbvarianten mit eigenen Fotos, eine Größentabelle mit echten Maßen und Zoom in der Galerie. Gefiltert wird nach Kategorie, Typ, Farbe, Größe und Preis, bezahlt wird mit Mercado Pago, und der Nutzer hat Bestellverlauf, Adressen und Bewertungen. Über das Panel wird der ganze Katalog gepflegt.',
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
      'Farbvarianten mit eigenen Fotos',
      'Kombinierte Filter nach Kategorie, Typ, Farbe, Größe und Preis',
      'Statische Generierung mit inkrementeller Revalidierung für SEO',
      'Automatisch erzeugte XML-Sitemap',
      'Bilder auf Cloudinary',
      'Kategorien mit Unterkategorien, Typen und Untertypen',
    ],
  },
  'julian-winners': {
    subtitle: 'Online-Verlosungen mit digitalen Losen und Mercado Pago',
    categories: 'Web-App • Tombola • Mercado Pago • Empfehlungsprogramm',
    description:
      'Plattform für den Verkauf von Losen für Online-Verlosungen in Kolumbien. Der Nutzer kauft Los-Pakete mit Mercado Pago, bekommt zufällige Nummern ohne Doppelungen und erhält die Rechnung als PDF per E-Mail. Es gibt einen Warenkorb für mehrere Verlosungen, Empfehlungen mit Punkten, Moderatoren, die Lose für den Verkauf vor Ort manuell zuweisen, und ein Werkzeug, um den Gewinner per Nummer zu ziehen. Texte, Bilder und sogar die Zugangsdaten für Mercado Pago und SMTP werden im Panel konfiguriert.',
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
      'Zufällige Lose ohne Doppelungen, formatiert nach Gesamtzahl der Verlosung',
      'Webhooks von Mercado Pago mit Duplikatprüfung',
      'Manuelle Zuweisung durch Moderatoren für den Verkauf vor Ort',
      'Gewinner per Losnummer ermittelt',
      'Excel-Export von Nutzern, Käufen und Rechnungen',
      'Drei Rollen: Nutzer, Moderator und Admin',
    ],
  },
  limcal: {
    subtitle: 'Online-Großhandel für Reinigungsprodukte',
    categories: 'E-Commerce • Mercado Pago • Wiederverkäufer • CMS',
    description:
      'Online-Shop für LIMCAL, ein argentinisches Unternehmen für Reinigungsprodukte, das an Geschäfte verkauft. Konten werden mit CUIT registriert und von jemandem aus dem Team freigegeben, bevor man einkaufen kann. Jedes Produkt hat eine Mindestbestellmenge, die Zahlung läuft über Mercado Pago, und die Bestellung wird per Webhook automatisch angelegt. Es gibt eine Händlerkarte mit Google Maps, filterbar nach Provinz und Stadt, und die Inhalte der Website werden im Panel bearbeitet.',
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
      'Konten werden manuell freigegeben, bevor man einkaufen kann',
      'Mindestbestellmenge pro Produkt, gedacht für den Großhandel',
      'Händlerkarte mit Google Maps, filterbar nach Region',
      'Antworten auf Kontaktanfragen direkt aus dem Panel',
      'Editierbare Inhalte mit verschachtelten Eigenschaften',
      'Bestellungen automatisch angelegt über Webhooks von Mercado Pago',
    ],
  },
  'limcal-pos': {
    subtitle: 'Desktop-Programm für Verkauf und Rechnungen, mit Electron',
    categories: 'Desktop-App • Electron • AFIP-Rechnungsstellung • IndexedDB',
    description:
      'Desktop-Programm für die Geschäftsverwaltung von LIMCAL, das ein altes System in FoxPro abgelöst hat. Es verwaltet Produkte, Verkäufe, Einkäufe, Lager, Rohstoffe und Händler mit Provision oder Rabatt. Es stellt Rechnungen A und B über ARCA/AFIP aus, dazu Gutschriften, Lieferscheine als PDF und das Mehrwertsteuerbuch. Die Datenbank liegt lokal in IndexedDB, also läuft es ohne Server und ohne Internet.',
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
      'Desktop-App mit Electron, funktioniert offline',
      'Lokale Datenbank mit IndexedDB',
      'Rechnungen A und B und Gutschriften mit AFIP',
      'Rabatt oder Provision pro Händler beim Abrechnen angewendet',
      'Produktimport und Massenänderung von Preisen aus Excel',
      'Datenmigration aus FoxPro (Husky POS)',
    ],
  },
  movilprint: {
    subtitle: 'Online-Editor für Designs, die gedruckt werden',
    categories: 'Web-App • Visueller Editor • Drag & Drop • Social Login',
    description:
      'Website, um eigene Designs zu erstellen und drucken zu lassen. Der Nutzer wählt eine Vorlage und kommt in einen Editor, in dem er Texte mit über 15 Schriften, Bilder und Deko-Elemente hineinzieht, sie skaliert, dreht und in Ebenen anordnet. Wenn er fertig ist, schickt er das Design ab, und es bleibt in seinem Konto gespeichert. Es gibt Login mit Google und Facebook, Treuepunkte und ein Panel, um Vorlagen zu verwalten und die eingehenden Designs zu prüfen.',
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
      'Editor mit interaktiver Leinwand und Drag and Drop',
      'Vorlagen mit Maßen in cm und eigenen Ressourcen',
      'Über 15 Schriften mit Stilkontrolle',
      'Ebenen, um die Tiefe der Elemente zu ordnen',
      'Login mit Google und Facebook',
      'Designs mit allen Elementen in der Datenbank gespeichert',
    ],
  },
  padel: {
    subtitle: 'Turniere, Ergebnisse und Rangliste im Padel',
    categories: 'Web-App • Sport • Rangliste • Next.js 15',
    description:
      'Website, um Padel-Turniere zu organisieren und zu verfolgen. Besucher sehen den Turnierkalender, die Tour nach Kategorie, die Ergebnisse Spiel für Spiel mit Sätzen und die Rangliste nach Geschlecht und Kategorie. Man kann auch einen Spieler suchen und seine Position sehen. Ein Moderator trägt Spiele und Ergebnisse ein, und der Admin verwaltet Turniere, Spieler, Clubs und Kategorien.',
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
      'Tour automatisch nach Kategorie zusammengestellt',
      'Rangliste nach Kategorie und Geschlecht, die sich von selbst aktualisiert',
      'Einzel- und Teamspiele mit Ergebnis nach Sätzen',
      'Der Turnierstatus ändert sich je nach eingetragenen Spielen',
      'Drei Zugriffsstufen: öffentlich, Moderator und Admin',
      'Kategorien mit Soft Delete, damit man sie wiederherstellen kann',
    ],
  },
  '4me': {
    subtitle: '3D-Fußscan und orthopädische Schuhe nach Maß',
    categories: 'Mobile App • Web-Admin • 3D-Scan • Stripe',
    description:
      'System für Podologen, die orthopädische Schuhe nach Maß anfertigen. Mit der mobilen App fotografieren sie den Fuß aus mehreren Winkeln, die Fotos gehen mit Fortschrittsanzeige in Echtzeit zu Google Drive, und ein Prozess mit Metashape macht daraus ein 3D-Modell. Mit diesem Modell wird ein Projekt angelegt, bei dem Modell, Farbe, Sohle und Einlage gewählt werden und das 12 Status durchläuft, mit E-Mail bei jeder Änderung. Das Web-Panel zeigt die Füße in 3D, und die Zahlungen laufen über Stripe in US-Dollar.',
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
      '3D-Fußscan vom Handy aus, verarbeitet mit Metashape',
      'Massen-Upload zu Google Drive mit Fortschritt in Echtzeit',
      '3D-Modelle (GLB), die im Browser angezeigt werden',
      '12 Projektstatus mit E-Mail bei jeder Änderung',
      'Stripe-Zahlungslink in USD pro Projekt',
      'Drei koordinierte Teile: mobile App, Web-Panel und Server',
    ],
  },
  'trewa-club': {
    subtitle: 'Ticketverkauf für Partys, mit QR-Code und AFIP-Rechnung',
    categories: 'Web-App • Events • AFIP-Rechnungsstellung • QR • Mercado Pago',
    description:
      'Plattform für den Ticketverkauf für Nachtveranstaltungen. Der Nutzer zahlt mit Mercado Pago, bekommt ein Ticket mit QR-Code, und die elektronische AFIP-Rechnung wird bei jedem Kauf automatisch erstellt. Es gibt Ticketarten mit Kontingenten und Verkaufsphasen, Rabattcodes, Punkte, die gegen Produkte eingelöst werden, und Login mit Google oder Facebook. Am Eingang werden die QR-Codes gescannt, mit Schutz vor doppeltem Scannen, und Wiederverkäufer haben ihren eigenen Link und ihre Statistiken.',
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
      'Elektronische AFIP-Rechnung bei jedem Kauf',
      'Ticketarten mit eigenen Verkaufsphasen, Kontingenten und Verkaufszeiten',
      'QR-Scan mit Schutz vor doppeltem Scannen und 6 Stunden Toleranz',
      'Punkte, die gegen Produkte aus dem Katalog eingelöst werden',
      'Auswertung pro Event: Geschlecht, Alter, Stoßzeiten und Verkaufsphasen',
      'Fünf Rollen: Nutzer, Kasse, Operator, Wiederverkäufer und Admin',
    ],
  },
  nodominium: {
    subtitle: 'Statische Website für ein Kulturzentrum in El Salvador',
    categories: 'Statische Website • HTML/CSS/JS • Bitcoin • Google Maps',
    description:
      'Website für Casa de Nodominium, ein Bildungs- und Kulturzentrum in Playa Las Tunas, El Salvador. Sie zeigt die Events in einem Slider mit Swipe und Lightboxes mit Details und Sponsoren, die Geschichte des Zentrums, eine Google-Maps-Karte und ein Kontaktformular, das über FormSubmit läuft. Spenden in Bitcoin gehen per QR-Code. Reines HTML, CSS und JavaScript, ohne Backend.',
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
      'Statische Website, ohne Server und ohne Datenbank',
      'Event-Slider mit Swipe am Handy',
      'Lightboxes mit den Details jedes Events',
      'Bitcoin-Spenden per QR-Code',
      'Animationen in reinem CSS, ohne Bibliotheken',
      'Kontaktformular mit FormSubmit',
    ],
  },
  'mdt-ingenieros': {
    subtitle: 'Stunden- und Projektkontrolle für ein Vermessungsbüro',
    categories: 'Web-App • Personalwesen • Rechnungsstellung • Digitale Unterschriften',
    description:
      'Websystem für ein Vermessungsbüro, das die Stunden seiner Leute pro Projekt erfassen musste. Der Mitarbeiter trägt seinen Arbeitstag mit Tätigkeiten und digitaler Unterschrift ein und beantragt bei Bedarf Überstunden, die der Vorgesetzte freigibt. Auf der Verwaltungsseite gibt es einen Kalender pro Projekt, Lohnberichte als PDF und eine monatliche Abrechnung mit Mehrwertsteuer und Vorabzug. Die Tageszusammenfassungen gehen per E-Mail raus, und alles läuft in US-Dollar.',
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
      'Überstunden nach Wochentag, Feiertag und Mittagspause berechnet',
      'Digitale Unterschrift von Vermesser und Vorgesetztem auf jedem Bericht',
      'Monatsrechnung pro Projekt mit 13 % Mehrwertsteuer und 1 % Vorabzug',
      'Kalender mit Tagesstatus pro Projekt',
      'Hinweis auf fehlende Stunden der letzten 7 Tage',
      'Personalwechsel zwischen Projekten mit monatlicher Aufschlüsselung',
    ],
  },
  storybox: {
    subtitle: 'Story-Editor mit visuellen Programmierblöcken',
    categories: 'Web-App • Bildung • Visuelle Programmierung • Blockly',
    description:
      'Eine Web-App, um Geschichten und Präsentationen mit Szenen zu bauen. Man setzt Hintergründe, Objekte zum Ziehen und Skalieren, Texte mit verschiedenen Schriften und Musik pro Szene, und dann legt man mit visuellen Blöcken von Blockly fest, was jedes Objekt tut. Es gibt einen Präsentationsmodus im Vollbild, PDF-Export, Rückgängig und Wiederholen, Kopieren und Einfügen, und die Oberfläche ist auf Spanisch und Englisch. Alles wird mit automatischer Miniaturansicht auf dem Server gespeichert.',
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
      '17 Blocktypen für Bewegung, Aussehen und Steuerung',
      'Leinwand mit Drag and Drop, 8 Anfasspunkten, Rotation und Ebenen',
      'Übergänge in 8 Richtungen mit 3 Geschwindigkeiten',
      'Hintergrundmusik pro Szene, in Schleife',
      'Rückgängig und Wiederholen auf Basis von Stacks',
      'PDF-Export mit html2canvas und jsPDF',
      'Oberfläche auf Spanisch und Englisch',
      'Speichern auf dem Server mit automatisch erzeugter Miniaturansicht',
    ],
  },
  konecta: {
    subtitle: 'Zeiterfassungs-App für Mitarbeiter per QR-Code oder GPS',
    categories: 'Mobile App • Personalwesen • QR • Geolokalisierung • Google Maps',
    description:
      'Mobile App, mit der Mitarbeiter Kommen und Gehen erfassen, indem sie einen QR-Code scannen oder ihren GPS-Standort nutzen. Jeder Eintrag landet in einem durchsuchbaren Verlauf und wird auf einer Google-Maps-Karte angezeigt. Außerdem beantragt man Freistellungen und meldet Vorfälle mit Anhängen, die der Vorgesetzte in seinem Panel freigibt oder ablehnt. Ein Nutzer kann zu mehreren Firmen gehören, und die Navigation ändert sich je nach Rolle.',
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
      'Erfassung per QR-Code oder GPS-Standort',
      'Google-Maps-Karte mit dem Standortverlauf',
      'Mehrere Firmen pro Nutzer, Auswahl pro Sitzung',
      'Eigene Navigation für Mitarbeiter und Vorgesetzte',
      'Freistellungen und Vorfälle mit Anhängen und Freigabe',
      'Profil-Selfie mit der Frontkamera, gespeichert als Base64',
    ],
  },
  'el-lobito-4pe': {
    subtitle: 'Golf-Wettrechner für 4 Spieler',
    categories: 'Mobile App • Sport • Berechnung • React Native',
    description:
      'Mobile App, um bei einem Golf-Wettspiel unter vier Freunden die Abrechnung zu führen. Es ist ein Raster mit 18 Löchern für 4 Spieler. Man markiert, wer jedes Loch gewonnen hat, und die App berechnet die Punkte nach den Spielregeln, inklusive der Unentschieden, die sich fürs nächste Loch aufsummieren. Der Preis pro Einheit ist einstellbar, und die Ergebnisse kommen in kolumbianischen Pesos. Kein Backend, keine Datenbank.',
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
      'Punkteregeln für Partien mit 4 Spielern',
      'Multiplikatoren bei aufgelaufenen Unentschieden',
      'Eine einzige Komponente, ohne Backend',
      'Format für kolumbianische Pesos mit Locale es-CO',
      'Fertig kompilierte APK zum Installieren',
      'Raster mit horizontalem Scroll',
    ],
  },
  'casino-online': {
    subtitle: 'Online-Casino mit 5 Spielen und Wetten in Echtzeit',
    categories: 'Web-App • Gaming • WebSocket • Redux • Firebase',
    description:
      'Online-Casino-Plattform mit fünf Spielen: Slots, Aviator, Blackjack, Roulette und Hunt the Ace. Wetten und Ergebnisse laufen über WebSocket, das Guthaben aktualisiert sich also sofort. Es gibt Einzahlungen, Auszahlungen mit Freigabe, Transaktionsverlauf, Empfehlungen mit Bonus und ein Staking-Programm. Das Admin-Panel zeigt Diagramme und aktive Sitzungen und erlaubt das Sperren von Konten.',
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
      '5 Spiele mit von Grund auf programmierter Casino-Logik',
      'Wetten und Ergebnisse in Echtzeit mit Socket.io',
      'MERN-Stack mit MUI, Ant Design und Bootstrap',
      'Empfehlungen mit automatischem Bonus von 10 USD',
      'BFG-Staking-Programm mit berechneten Erträgen',
      'Bilder über ImageKit ausgeliefert',
      'Globaler State mit Redux Toolkit, geteilt zwischen den Spielen',
      'Admin-Panel mit Diagrammen in Echtzeit',
    ],
  },
  'saucedo-abogados': {
    subtitle: 'Verwaltung für eine Anwaltskanzlei, mit E-Signatur und KI',
    categories: 'Web-App • Mobile App • Recht • KI • Elektronische Signatur • Laravel',
    description:
      'Verwaltungssystem für eine Anwaltskanzlei. Jeder Fall hat seine Parteien, Dokumente, Verfahrensschritte, Notizen und Aufgaben und kann einem oder mehreren Anwälten zugewiesen werden. Kostenvoranschläge durchlaufen eine Freigabe mit drei Rollen und werden dann zum Fall, das Inkasso hat Erinnerungen bei Fälligkeit. PDFs werden per OCR indexiert und mit OpenAI automatisch zusammengefasst, Dokumente werden mit SignNow unterschrieben, und der Kalender synchronisiert sich in beide Richtungen mit Google Calendar. Das Backend ist Laravel mit 48 Modellen und 88 Endpoints, dazu gibt es eine begleitende mobile App.',
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
      'OCR und automatische Zusammenfassung von Dokumenten mit OpenAI',
      'Elektronische Signatur mit SignNow, rechtsgültig',
      'Anbindung an Google Drive, Calendar und OAuth',
      '48 Modelle und 88 Endpoints in Laravel',
      'Kostenvoranschläge mit Freigabe über drei Rollen',
      '6 Berichte: Fälle, Rechnungen, Inkasso, Produktivität, Mandanten und Kostenvoranschläge',
      'Fälle in 6 Tabs organisiert',
      'End-to-End-Tests mit Playwright und ergänzende mobile App',
    ],
  },
  'grupo-sdg': {
    subtitle: 'ERP für Mexiko mit CFDI-4.0-Rechnungen',
    categories: 'Web-App • ERP • CFDI-Rechnungsstellung • Laravel 12 • SAT',
    description:
      'Verwaltungssystem für ein mexikanisches Unternehmen, mit elektronischer Rechnungsstellung nach CFDI 4.0. Der Verkaufsablauf geht von Angebot zu Auftrag, Rechnung, Zahlung und Inkasso und nimmt die Daten von einer Stufe zur nächsten mit. Die Belege werden mit CSD-Zertifikaten signiert, über einen PAC gestempelt, und der RFC wird gegen die schwarze Liste des SAT geprüft. Es gibt ein Treasury-Modul mit Bankabgleich, Passwortrichtlinien mit Ablauf und vier Audit-Tabellen. Das Backend ist Laravel 12, mit über 40 Modellen und 80 in Swagger dokumentierten Endpoints.',
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
      'CFDI-4.0-Rechnungen mit PAC-Stempel und CSD-Zertifikaten',
      'Verkaufsablauf vom Angebot bis zum Inkasso',
      'Prüfung des RFC gegen die schwarze Liste des SAT',
      '4 Audit-Tabellen: Zugriffe, Daten, Steuern und Admin',
      'Passwörter mit Ablauf und Sperre',
      'Über 40 Modelle und 80 Endpoints, dokumentiert mit Swagger',
      'Treasury mit Bankabgleich',
      'Offizielle SAT-Kataloge: CFDI-Verwendung, Steuerregime und Zahlungsart',
    ],
  },
  'goodbye-friend': {
    subtitle: 'Virtueller 3D-Friedhof zum Gedenken an Haustiere',
    categories: 'Web 3D • Mobile App • Three.js • React Three Fiber • Stripe • Laravel',
    description:
      'Virtuelles Gedenken für Haustiere mit einem 3D-Friedhof, den man in der Ego-Perspektive durchläuft. Es gibt über 1.075 Parzellen, drei Grabstile, 57 Tribut-Objekte, Nischen und Mausoleen. Am Desktop steuert man mit Pointer Lock, am Handy mit Touch-Joysticks, mit Minimap und Kollisionen. Jedes Tier hat ein Profil mit Biografie und Fotos, wo andere Tribute und Beileid hinterlassen. Pläne und Tribute werden mit Stripe bezahlt, es gibt einen Marketplace für Künstler, eine mobile App in React Native und ein Backend in Laravel.',
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
      '3D-Friedhof mit über 1.075 Parzellen, 3 Grabstilen und 57 Tribut-Objekten',
      'Pointer Lock am Desktop und Touch-Joysticks am Handy',
      'Rendering nach Entfernung, um 60 fps zu halten',
      'Minimap mit Position in Echtzeit',
      'Marketplace für Künstler zum Personalisieren der Gedenkseiten',
      '3D-Web mit Three.js und R3F, mobile App in React Native und Backend in Laravel',
      'Kollisionen mit den Objekten des Friedhofs',
      'Zahlungen mit Stripe: Pläne, Tribute und Auszahlungen an Mitwirkende',
    ],
  },
  safetrade: {
    subtitle: 'App zum Verkaufen und Folgen von Trading-Signalen',
    categories: 'Mobile App • Fintech • Trading • Stripe • Zustand • React Query',
    description:
      'Mobile App, in der Trader Trading-Signale veröffentlichen und andere Nutzer sie abonnieren. Der Trader gibt Asset, Richtung, Take Profit und Stop Loss ein und hat ein Dashboard mit Trefferquote, kumulierter Rendite und Serie. Der Kunde stöbert durch die Trader, abonniert monatlich über Stripe und kann jederzeit pausieren oder kündigen. Gebaut mit React Native, Expo, TypeScript, Zustand und React Query.',
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
      'Zwei Rollen mit eigener Navigation und Oberfläche',
      'Zustand, React Query und Zod für State, Cache und Validierung',
      'Stripe nativ in React Native, ohne die App zu verlassen',
      'Berechnete Kennzahlen: Trefferquote, kumulierte Rendite und Serie',
      'Die ganze App in TypeScript',
      'Expo-Router-Tabs, die sich je nach Rolle ändern',
      'React Query mit Cache und optimistischen Updates',
      'Abos mit automatischer monatlicher Abbuchung',
    ],
  },
  biznes: {
    subtitle: 'Digitale Visitenkarten, mit QR-Code und Mitgliedschaften',
    categories: 'Web-App • SaaS • E-Commerce • QR • Mercado Pago • Redux',
    description:
      'Ein SaaS, um digitale Visitenkarten zu erstellen und per Link oder QR-Code zu teilen. Der Nutzer lädt Foto, Logo, Bio, Social-Media-Profile und Buttons hoch, ändert Farben und Schriften und sieht das Ergebnis in Echtzeit in einer Handy-Ansicht. Jede Karte bekommt ihren QR-Code und eine vCard zum Speichern des Kontakts. Mitgliedschaften und Shop werden über Mercado Pago abgerechnet, und das Panel zeigt Besuche, Klicks, Downloads und Verweildauer.',
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
      'Abos mit konfigurierbaren Rechten pro Plan',
      'Editor mit Live-Vorschau in Handy-Ansicht',
      'Statistiken zu Besuchen, Klicks, Downloads und Verweildauer',
      'QR-Code und vCard für jede Karte',
      'Shop mit Warenkorb und Checkout über Mercado Pago',
      'Bilder mit Sharp zu WebP konvertiert',
      'Massenimport von Nutzern und Karten aus Excel',
      'Geplante Jobs mit Agenda.js, damit Mitgliedschaften auslaufen',
    ],
  },
  citamovil: {
    subtitle: 'Website für eine Handy- und Tablet-Werkstatt in Spanien',
    categories: 'Web-App • Technischer Service • WhatsApp-Bot • Next.js 14 • Großhändler',
    description:
      'Website für einen Reparaturservice für Handys, Tablets und andere Geräte in Spanien. Der Kunde holt sich einen Preis, indem er Kategorie, Marke, Modell und Defekte wählt, und der Preis hängt von der Region ab. Danach verfolgt er die Reparatur mit einem 5-stelligen Code und bekommt jede Änderung per E-Mail und WhatsApp. Großhändler registrieren sich, der Admin gibt sie frei, und sie bestellen in Mengen mit Abholadresse. Die Inhalte der Website werden im Panel bearbeitet, ohne Code anzufassen.',
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
      'Preise nach Modell, Defekt und Region',
      'WhatsApp-Bot mit whatsapp-web.js, ohne kostenpflichtige Dienste',
      'Automatische Hinweise per E-Mail und WhatsApp',
      'Großhändler mit Registrierung, Freigabe und eigener Verfolgung',
      'Preistabelle mit Drag and Drop und PDF-Export',
      'Alle Inhalte im Panel editierbar',
    ],
  },
}
