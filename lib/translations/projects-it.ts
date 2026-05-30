import type { ProjectI18n } from './types'

export const it: Record<string, ProjectI18n> = {
  'cap-medical': {
    subtitle: 'Applicazione Mobile per la Gestione di Servizi Medici e Chirurgie',
    categories: 'App Mobile • React Native • Multi-Modulo',
    description:
      'Applicazione mobile multipiattaforma per la gestione integrale di servizi medici e chirurgie. Permette di amministrare servizi chirurgici con tracciamento degli stati, gestire tecnici, controllare sedi e ospedali, registrare pagamenti, amministrare cartelle cliniche dei pazienti e ricevere notifiche. Include sistema di permessi per ruolo, geolocalizzazione GPS, fotocamera integrata e generazione di codici QR.',
    features: [
      {
        title: 'Gestione dei Servizi',
        items: [
          'Elenco con filtro per stato e ricerca',
          'Creazione in 3 passaggi con cataloghi dinamici',
          'Movimenti con geolocalizzazione GPS e allegati',
          'Pagamenti, controricevute e cronologia delle modifiche',
        ],
      },
      {
        title: 'Rubrica dei Tecnici',
        items: [
          'Rubrica ricercabile con raggruppamento alfabetico',
          'Filtro per ruolo (ausiliare, titolare)',
          'Profilo dettagliato con dati lavorativi',
        ],
      },
      {
        title: 'Gestione delle Sedi',
        items: [
          'Ospedali e centri medici con ricerca',
          'Dettaglio completo con indirizzo e contatto',
          'Filtro per stato attivo/inattivo',
        ],
      },
    ],
    integrationUses: [
      'Mappe interattive per la localizzazione di ospedali e servizi',
      'Coordinate GPS alla registrazione dei movimenti',
      'Acquisizione di foto e video da allegare alle cartelle cliniche',
      'Generazione di codici QR',
      'Grafici e visualizzazione dei dati',
    ],
    highlights: [
      'Sistema di permessi granulare per ruolo',
      'Creazione di servizi in 3 passaggi con cataloghi dinamici',
      '10 schermate specializzate per servizio',
      'Movimenti con geolocalizzazione GPS automatica',
      'Audit completo di tutte le modifiche',
      'TypeScript completo in tutta l\'applicazione',
    ],
  },
  'petnder': {
    subtitle: 'Piattaforma Mobile Pet-Friendly con Adozione e Community',
    categories: 'App Mobile • React Native • Marketplace Pet',
    description:
      'Piattaforma mobile che connette i proprietari di animali domestici con servizi pet-friendly, adozione responsabile e una community impegnata nel benessere animale. Offre due profili differenziati — utente e azienda — ciascuno con il proprio flusso, navigazione e funzionalità.',
    features: [
      {
        title: 'Per gli Utenti',
        items: [
          'Esplorare servizi pet-friendly per categorie',
          'Adozione di animali con filtri e chat',
          'Segnalazioni di animali smarriti con posizione',
          'Benefici, coupon e fondazioni',
        ],
      },
      {
        title: 'Per le Aziende',
        items: [
          'Gestione dei servizi con mappe e orari',
          'Coupon con QR e statistiche di utilizzo',
          'Portafoglio digitale con saldo e cronologia',
          'Community con ruoli e moderazione',
        ],
      },
      {
        title: 'Generale',
        items: [
          'Onboarding animato con Reanimated',
          'Chat in tempo reale',
          'Notifiche push',
          'Mappe integrate con Google Maps',
        ],
      },
    ],
    integrationUses: [
      'Localizzazione dei servizi e selettore di posizione',
      'Avvisi push su adozioni e messaggi',
      'Codici QR per coupon e sconti',
      'Statistiche aziendali e di rendimento',
    ],
    highlights: [
      'Due profili differenziati (utente e azienda)',
      'Sistema di adozione con chat integrata',
      'Community con ruoli e moderazione dei contenuti',
      'Portafoglio digitale e statistiche finanziarie',
      'Gamification con sistema di traguardi',
      'Onboarding animato interattivo',
    ],
  },
  'controla2': {
    subtitle: 'Sistema di Gestione Aziendale (ERP)',
    categories: 'SaaS • ERP • Fatturazione Elettronica',
    description:
      'Piattaforma web integrale progettata per imprese di costruzione e ingegneria che necessitano di centralizzare e automatizzare le operazioni quotidiane. ERP completo con gestione progetti, risorse umane, fatturazione elettronica, approvvigionamenti, inventario e prevenzione dei rischi, adattato alla normativa cilena.',
    features: [
      {
        title: 'Progetti e Pianificazione',
        items: [
          'Budget e cronogrammi Gantt interattivi',
          'Monitoraggio dell\'avanzamento e controllo delle deviazioni',
          'Ufficio tecnico con ore uomo e produzione',
        ],
      },
      {
        title: 'Risorse Umane e Buste Paga',
        items: [
          'Ciclo completo del collaboratore',
          'Calcolo automatico delle buste paga (AFP, ISAPRE)',
          'Ferie, anticipi e liquidazioni',
        ],
      },
      {
        title: 'Fatturazione e Acquisti',
        items: [
          'Documenti tributari elettronici',
          'Flusso completo di acquisti e preventivi',
          'Controllo dello stock con tracciabilità',
        ],
      },
    ],
    integrationUses: [
      'Infrastruttura e hosting del sistema',
      'Fatturazione elettronica con normativa cilena',
      'Avvisi nei flussi di approvazione',
    ],
    highlights: [
      'Dashboard in tempo reale con metriche e KPI',
      'Generazione automatica di documenti (PDF, Excel, CSV)',
      '8 ruoli predefiniti con flussi di approvazione',
      'Adattato alla normativa cilena (AFP, ISAPRE, DTE, RUT)',
      'Modulo SSOMA di prevenzione dei rischi',
      'Notifiche istantanee per le approvazioni',
    ],
  },
  'alhambra': {
    subtitle: 'Sito Web di Turismo per Granada, Spagna',
    categories: 'Web App • Turismo • Pannello Admin • Multilingue',
    description:
      'Sito web professionale per un\'azienda di guide turistiche a Granada, Spagna, specializzata in visite guidate all\'Alhambra. Piattaforma completa con esplorazione dei circuiti, prenotazioni, blog e traduzione automatica in 7 lingue, con pannello di amministrazione per la gestione autonoma dei contenuti.',
    features: [
      {
        title: 'Per il Visitatore',
        items: [
          'Esplorazione dei circuiti turistici con pagine dedicate',
          'Sistema di prenotazioni integrato con modulo completo',
          'Blog di notizie con contenuti arricchiti',
          'Traduzione automatica in 7 lingue',
          'Contatto diretto tramite WhatsApp',
        ],
      },
      {
        title: 'Pannello di Amministrazione',
        items: [
          'Gestione dei circuiti con editor avanzato',
          'Gestione del blog con immagini e formattazione avanzata',
          'Modifica dei testi in tempo reale cliccandoci sopra',
          'Sistema di accesso sicuro',
        ],
      },
    ],
    integrationUses: [
      'Contatto diretto con un clic',
      'Ricezione delle prenotazioni via email',
      'Traduzione automatica in più lingue',
      'Link e banner verso il profilo dell\'azienda',
      'Integrazione con il profilo della guida',
    ],
    highlights: [
      'Contenuti 100% gestibili senza assistenza tecnica',
      'Modifica dei testi in linea direttamente nella pagina',
      'Rendering lato server (SSR) per la SEO',
      'Supporto per 7 lingue orientato al turismo internazionale',
      'Integrazione con WhatsApp ed email per massimizzare le prenotazioni',
      'Sicurezza con JWT, password criptate e ruoli',
    ],
  },
  'biznes-empresa': {
    subtitle: 'Piattaforma di Gestione di Biglietti da Visita Digitali Aziendali',
    categories: 'Web App • SaaS • Biglietti Digitali • Ruoli',
    description:
      'Applicazione web per consentire alle aziende di gestire in modo centralizzato i biglietti da visita digitali di tutti i dipendenti, con controllo dei ruoli, permessi, modelli aziendali e statistiche di utilizzo.',
    features: [
      {
        title: 'Gestione Aziendale',
        items: [
          'Registrazione e profilo aziendale con logo e branding',
          'Invito dei dipendenti via email o caricamento massivo da Excel',
          'Ruoli personalizzati con permessi granulari',
          'Abbonamenti aziendali con limiti configurabili',
        ],
      },
      {
        title: 'Biglietti Digitali',
        items: [
          'Modelli aziendali con design del brand',
          'Editor visuale completo con anteprima in tempo reale',
          'Codice QR automatico e vCard scaricabile',
          'Link personalizzato per ogni biglietto',
        ],
      },
      {
        title: 'Statistiche',
        items: [
          'Visite per biglietto con dettaglio per dispositivo',
          'Clic sui social network ed email',
          'Download di vCard e contatti aggiunti',
          'Grafici interattivi (barre, linee, torte)',
        ],
      },
    ],
    integrationUses: [
      'Inviti via email e notifiche',
      'Generazione automatica di codici QR',
      'File di contatto scaricabili',
      'Comunicazione in tempo reale',
      'Grafici interattivi per le statistiche',
      'Ottimizzazione delle immagini in WebP',
    ],
    highlights: [
      'Gestione aziendale completa da un unico pannello',
      'Modelli con branding applicati automaticamente',
      'Ruoli e permessi granulari per dipendente',
      'Caricamento massivo di dipendenti da file Excel',
      'Statistiche centralizzate con grafici interattivi',
      'Comunicazione in tempo reale con WebSocket',
    ],
  },
  'blackphone': {
    subtitle: 'Sistema di Gestione delle Riparazioni di Dispositivi Mobili',
    categories: 'Web App • E-commerce • WhatsApp Bot • Pannello Admin',
    description:
      'Piattaforma web completa per un servizio tecnico di riparazione cellulari in Spagna. Include preventivatore automatico, sistema di ordini con tracciamento, notifiche via email e WhatsApp, gestione dei grossisti e pannello di amministrazione integrale.',
    features: [
      {
        title: 'Per il Cliente',
        items: [
          'Preventivatore automatico per modello e guasto',
          'Selezione multipla di guasti con prezzo in tempo reale',
          'Tracciamento della riparazione con codice a 5 cifre',
          'Notifiche automatiche via email e WhatsApp',
        ],
      },
      {
        title: 'Sistema Grossisti',
        items: [
          'Registrazione e approvazione delle aziende grossiste',
          'Richieste di riparazione in volume',
          'Tracciamento indipendente con codice proprio',
          'Prezzi differenziati per zona',
        ],
      },
      {
        title: 'Pannello di Amministrazione',
        items: [
          'Tabella prezzi dinamica con drag & drop',
          'Gestione di categorie, marche, modelli e guasti',
          'Stati di riparazione personalizzati con notifiche',
          'Blog con editor avanzato e contenuti modificabili',
          'Esportazione in PDF delle tabelle prezzi',
        ],
      },
    ],
    integrationUses: [
      'Messaggi automatici alla creazione dell\'ordine o al cambio di stato',
      'Email con template HTML al cliente e all\'admin',
      'PDF scaricabili con tabelle prezzi',
      'Recensioni reali dei clienti nella home',
      'Drag & drop per riordinare i modelli',
    ],
    highlights: [
      'Preventivatore intelligente per modello, guasto e zona geografica',
      'Notifiche multicanale (email + WhatsApp automatico)',
      'Bot WhatsApp integrato senza servizi esterni a pagamento',
      'Sistema grossisti con flusso indipendente',
      'Tabella prezzi dinamica esportabile in PDF',
      'Dati reali di province e città della Spagna',
    ],
  },
  'casepe': {
    subtitle: 'Sito Web Istituzionale della Camera delle Operazioni Petrolifere',
    categories: 'Web Istituzionale • CMS in Tempo Reale • Blog • Next.js 14',
    description:
      'Sito web istituzionale per CASEPE (Camera delle Imprese di Operazioni Petrolifere Speciali), un\'associazione civile che raggruppa imprese di servizi petroliferi in Argentina. Tutti i contenuti si modificano direttamente dal sito senza pannello separato: testi, immagini e sezioni si modificano cliccandoci sopra quando l\'amministratore è collegato.',
    features: [
      {
        title: 'Per il Visitatore',
        items: [
          'Hero con immagine di sfondo e sezione istituzionale con galleria',
          'Servizi interattivi con navigazione per elementi',
          'Storia, visione, impegno ambientale e località',
          'Blog di notizie con articoli correlati',
          'Modulo di contatto con invio automatico di email',
        ],
      },
      {
        title: 'Modifica in Tempo Reale',
        items: [
          'Testi modificabili cliccando direttamente sulla pagina',
          'Immagini sostituibili senza uscire dalla pagina',
          'Aggiunta e rimozione di elementi in qualsiasi sezione',
          'Editor di testo avanzato integrato',
        ],
      },
      {
        title: 'Pannello di Amministrazione',
        items: [
          'Gestione del blog con editor avanzato',
          'Tag e articoli correlati',
          'Accesso sicuro',
        ],
      },
    ],
    integrationUses: [
      'Messaggi di contatto con template HTML professionale',
      'Animazioni di comparsa allo scroll',
      'Navigazione fluida verso le sezioni',
      'Editor di testo avanzato per contenuti in linea',
    ],
    highlights: [
      'Modifica in tempo reale senza pannello separato — tutto dalla stessa pagina',
      'Proprietà annidate aggiornabili dinamicamente con Lodash',
      'Sezioni espandibili: aggiunta e rimozione di elementi dal sito',
      'Blog con articoli correlati e tag',
      'Email di contatto con template HTML professionale',
      'Animazioni professionali in tutte le sezioni',
    ],
  },
  'dental-digital': {
    subtitle: 'Sistema di Gestione per Studi Odontoiatrici (SaaS)',
    categories: 'SaaS • Fatturazione AFIP • Odontogramma • Mercado Pago',
    description:
      'Piattaforma web SaaS per odontoiatri e studi dentistici in Argentina. Gestione integrale di pazienti, appuntamenti con calendario interattivo, odontogramma visuale, preventivi, fatturazione elettronica con ARCA/AFIP, mutue, documenti di consenso, abbonamenti con Mercado Pago, notifiche via email e WhatsApp e backup dei dati.',
    features: [
      {
        title: 'Gestione Clinica',
        items: [
          'Scheda completa dei pazienti con mutua',
          'Calendario interattivo con viste mensile, settimanale e giornaliera',
          'Odontogramma visuale con registrazione per elemento ed esportazione PDF',
          'Preventivi dettagliati convertibili in fattura',
          'Documenti di consenso con firma digitale',
        ],
      },
      {
        title: 'Fatturazione Elettronica',
        items: [
          'Emissione di Fatture, NC e ND tipo A, B e C con ARCA/AFIP',
          'CAE automatico e calcolo IVA (0%, 10,5%, 21%, 27%)',
          'Generazione di certificati RSA e CSR per AFIP',
          'PDF della fattura con invio via email e WhatsApp',
        ],
      },
      {
        title: 'SaaS e Amministrazione',
        items: [
          'Abbonamenti mensili/annuali con Mercado Pago',
          'Più studi e professionisti con ruoli',
          'Dashboard con grafici Chart.js',
          'Backup completo e ripristino intelligente',
        ],
      },
    ],
    integrationUses: [
      'Fatturazione elettronica con CAE valido',
      'Abbonamenti ricorrenti con webhook automatici',
      'Invio di fatture e notifiche via WhatsApp',
      'Email con fatture PDF e verifica della password',
      'Grafici di trattamenti, preventivi e appuntamenti',
      'Calendario interattivo degli appuntamenti',
      'Esportazione dell\'odontogramma in PDF',
    ],
    highlights: [
      'Fatturazione elettronica reale con ARCA/AFIP e CAE valido',
      'Generazione di certificati RSA/CSR per il collegamento con AFIP',
      'Odontogramma interattivo con registrazione per elemento ed esportazione PDF',
      'Abbonamenti con Mercado Pago e webhook automatici',
      'Multiutente con ruoli (proprietario, professionista, amministratore)',
      'Backup completo in JSON con ripristino intelligente',
    ],
  },
  'sunchales-pos': {
    subtitle: 'Sistema di Gestione Commerciale e Punto Vendita',
    categories: 'SaaS • POS • Fatturazione AFIP • Codice a Barre',
    description:
      'Piattaforma web completa di gestione commerciale per negozi e attività commerciali in Argentina. Gestione prodotti con codice a barre, registrazione di vendite e acquisti, clienti e fornitori, fatturazione elettronica con ARCA/AFIP, preventivi, controllo dello stock e materie prime, garanzie e resi (RMA), e statistiche con grafici interattivi. Include abbonamenti con Mercado Pago.',
    features: [
      {
        title: 'Vendite e Fatturazione',
        items: [
          'Registrazione vendite con calcolo automatico dell\'IVA',
          'Vendita rapida senza cliente registrato',
          'Fatturazione elettronica con ARCA/AFIP e CAE',
          'Conversione del preventivo in vendita direttamente',
          'PDF della fattura con invio via email',
        ],
      },
      {
        title: 'Prodotti e Stock',
        items: [
          'Catalogo con codice a barre per prodotto',
          'Controllo dello stock aggiornato in tempo reale',
          'Materie prime con inventario indipendente',
          'Prodotti fisici e servizi differenziati',
        ],
      },
      {
        title: 'Gestione Commerciale',
        items: [
          'Schede complete di clienti e fornitori',
          'Preventivi con stati e validità configurabile',
          'Sistema di garanzie e resi (RMA)',
          'Dashboard con grafici di vendite e acquisti',
        ],
      },
    ],
    integrationUses: [
      'Fatturazione elettronica con CAE valido',
      'Abbonamenti ricorrenti per l\'accesso al sistema',
      'Email con fatture PDF e notifiche di spedizione',
      'Grafici di vendite, acquisti e report',
      'Generazione e visualizzazione di codici a barre',
      'Stampa diretta di fatture ed etichette',
      'Generazione di PDF di fatture e preventivi',
    ],
    highlights: [
      'Ciclo commerciale completo: acquisti, stock, vendite, fatturazione e report',
      'Fatturazione elettronica reale con ARCA/AFIP e CAE valido',
      'Codice a barre con generazione visuale e lettura rapida',
      'Sistema RMA per garanzie e resi con tracciamento',
      'Preventivi convertibili direttamente in vendite',
      'SMTP personalizzabile per utente per l\'invio delle fatture',
    ],
  },
  'fuku-shop': {
    subtitle: 'Negozio Online di Abbigliamento Urbano e Anime',
    categories: 'E-commerce • Next.js • Mercado Pago • Cloudinary',
    description:
      'Negozio online completo per la vendita di abbigliamento con stile anime, asiatico e videogiochi. Catalogo con varianti per colore e taglia, filtri avanzati combinati, galleria con zoom, tabella taglie, carrello, cronologia ordini, recensioni, SEO con sitemap automatica e pannello di amministrazione per gestire tutto il catalogo. Originario di Rafaela, Santa Fe, Argentina.',
    features: [
      {
        title: 'Negozio Online',
        items: [
          'Catalogo con filtri combinati (categoria, tipo, colore, taglia, prezzo)',
          'Varianti per colore con immagini proprie (fronte, retro, indossato)',
          'Zoom dell\'immagine al passaggio del cursore',
          'Tabella taglie con misure reali',
          'Carrello e checkout con Mercado Pago',
        ],
      },
      {
        title: 'Account Utente',
        items: [
          'Registrazione e login con email o Google',
          'Cronologia degli acquisti',
          'Più indirizzi di spedizione',
          'Recensioni e valutazioni dei prodotti',
          'Notifiche interne',
        ],
      },
      {
        title: 'Pannello di Amministrazione',
        items: [
          'CRUD dei prodotti con varianti di colore e immagini',
          'Gestione dei colori con codice esadecimale',
          'Categorie, sottocategorie, tipi e sottotipi di capo',
          'Taglie con misure configurabili',
        ],
      },
    ],
    integrationUses: [
      'Elaborazione dei pagamenti per gli acquisti',
      'Archiviazione e ottimizzazione delle immagini nel cloud',
      'Comunicazione in tempo reale',
      'Messaggi di contatto via email',
      'Stato globale (carrello, autenticazione, filtri)',
      'Cache intelligente dei dati del server',
      'Generazione automatica della sitemap XML per la SEO',
    ],
    highlights: [
      'Varianti di prodotto con immagini indipendenti per colore',
      'Filtri combinati per ricerche precise nel catalogo',
      'Generazione statica (SSG) con rivalidazione incrementale per la SEO',
      'Sitemap XML generata automaticamente con priorità per sezione',
      'Immagini su Cloudinary per ottimizzazione e caricamento rapido',
      'Categorie gerarchiche con sottocategorie e sottotipi',
    ],
  },
  'julian-winners': {
    subtitle: 'Piattaforma di Lotterie Online con Biglietti Digitali',
    categories: 'Web App • Lotterie • Mercado Pago • Referral',
    description:
      'Piattaforma web completa per la vendita di biglietti di lotterie online. Gli utenti acquistano pacchetti di biglietti tramite Mercado Pago e ricevono numeri assegnati casualmente con fattura via email. Include sistema di referral con punti, carrello, assegnazione manuale di biglietti, selezione del vincitore, moderatori, esportazione in Excel e contenuti 100% modificabili. Valuta: pesos colombiani (COP).',
    features: [
      {
        title: 'Per l\'Utente',
        items: [
          'Catalogo di lotterie con pacchetti di biglietti e prezzi',
          'Carrello con pacchetti di più lotterie',
          'Numeri di biglietto generati casualmente senza ripetizioni',
          'Fattura PDF via email con dettaglio dei biglietti',
          'Sistema di referral con link e accumulo di punti',
        ],
      },
      {
        title: 'Pannello di Amministrazione',
        items: [
          'Gestione delle lotterie con pacchetti, immagini e in evidenza',
          'Assegnazione manuale dei biglietti (vendite presenziali)',
          'Selezione del vincitore cercando il numero del biglietto',
          'Cronologia degli acquisti con esportazione in Excel',
          'Moderatori per le vendite presenziali',
        ],
      },
      {
        title: 'Contenuti Modificabili',
        items: [
          'Testi, immagini e dati aziendali modificabili',
          'Configurazione di Mercado Pago e SMTP dal pannello',
          'Termini e condizioni modificabili',
        ],
      },
    ],
    integrationUses: [
      'Pagamenti con webhook per assegnazione automatica dei biglietti',
      'Fatture via email con template HTML e link al PDF',
      'Generazione di fatture PDF scaricabili',
      'Esportazione di utenti e cronologia in Excel',
      'Stato globale (carrello, utente, lotterie)',
    ],
    highlights: [
      'Biglietti casuali senza ripetizioni con formato in base al totale della lotteria',
      'Webhook di Mercado Pago con verifica anti-duplicati',
      'Assegnazione manuale da parte dei moderatori per le vendite presenziali',
      'Selezione del vincitore per numero di biglietto',
      'Esportazione completa in Excel (utenti, acquisti, fatture)',
      'Tre ruoli differenziati (utente, moderatore, amministratore)',
    ],
  },
  'limcal': {
    subtitle: 'Negozio Online di Prodotti per la Pulizia',
    categories: 'E-commerce • Mercado Pago • Rivenditori • CMS',
    description:
      'Negozio online completo per LIMCAL, azienda di prodotti per la pulizia in Argentina. Registrazione con CUIT e approvazione manuale degli account, catalogo con filtri, carrello con acquisto minimo per prodotto, pagamento con Mercado Pago, mappa dei rivenditori con Google Maps, tracciamento ordini con email, modulo di contatto con risposta dal pannello e contenuti 100% modificabili.',
    features: [
      {
        title: 'Negozio Online',
        items: [
          'Catalogo paginato con filtri per categoria e ricerca',
          'Acquisto minimo configurabile per prodotto',
          'Carrello con più indirizzi di spedizione',
          'Pagamento con Mercado Pago e registrazione automatica via webhook',
          'Tracciamento ordini con notifica via email',
        ],
      },
      {
        title: 'Rivenditori',
        items: [
          'Mappa dei rivenditori con Google Maps integrato',
          'Filtro per provincia, città e nome',
          'Pagina informativa per nuovi rivenditori',
        ],
      },
      {
        title: 'Pannello di Amministrazione',
        items: [
          'Gestione di prodotti, categorie e ordini',
          'Approvazione manuale degli account utenti',
          'Messaggi di contatto con risposta diretta via email',
          'Contenuti modificabili con Lodash per proprietà annidate',
          'Moderatori con permessi differenziati',
        ],
      },
    ],
    integrationUses: [
      'Pagamenti del carrello con webhook automatici (ARS)',
      'Contatto, risposte al cliente e notifiche degli ordini',
      'Mappa integrata per ogni rivenditore',
      'Monitoraggio delle visite e del comportamento',
      'Editor avanzato per politiche e sezioni',
      'Animazioni di comparsa allo scroll',
    ],
    highlights: [
      'Approvazione manuale degli account per il controllo degli accessi',
      'Acquisto minimo per prodotto ideale per la vendita all\'ingrosso',
      'Mappa dei rivenditori con Google Maps filtrabile per zona',
      'Risposta ai messaggi di contatto direttamente dal pannello',
      'Contenuti modificabili con proprietà annidate dinamiche',
      'Webhook di Mercado Pago con registrazione automatica degli ordini',
    ],
  },
  'limcal-pos': {
    subtitle: 'Applicazione Desktop di Gestione Commerciale e Punto Vendita',
    categories: 'App Desktop • Electron • Fatturazione AFIP • IndexedDB',
    description:
      'Applicazione desktop con Electron per la gestione commerciale completa di LIMCAL. Prodotti con importazione massiva da Excel, vendite e acquisti, fatturazione elettronica con ARCA/AFIP (Fattura A/B, Note di Credito), bolle di accompagnamento, stock, materie prime, rivenditori con commissioni e sconti, registro IVA, statistiche e backup. Database locale con IndexedDB. Sostituisce il vecchio sistema basato su FoxPro.',
    features: [
      {
        title: 'Vendite e Fatturazione',
        items: [
          'Fatturazione elettronica Fattura A e B con ARCA/AFIP',
          'Note di Credito tipo A e B associate alle fatture',
          'Generazione di bolle di accompagnamento scaricabili in PDF',
          'Registro IVA vendite e acquisti',
          'Sconti automatici per rivenditore e per cliente',
        ],
      },
      {
        title: 'Gestione Commerciale',
        items: [
          'Importazione massiva di prodotti da Excel',
          'Modifica massiva dei prezzi',
          'Controllo dello stock e delle materie prime',
          'Rivenditori con sconto o commissione configurabile',
          'Statistiche per giorno, cliente, prodotto e incrocio',
        ],
      },
      {
        title: 'Sistema',
        items: [
          'Database locale con IndexedDB (senza server)',
          'Utenti con ruoli e permessi configurabili',
          'Backup completo in JSON e ripristino',
          'Migrazione da FoxPro (Husky POS)',
        ],
      },
    ],
    integrationUses: [
      'Fatturazione elettronica con CAE (Fattura A/B, NC A/B)',
      'Database locale senza server esterno',
      'Importazione ed esportazione di prodotti e dati',
      'Fatture, note di credito e bolle in PDF',
      'Download di backup, PDF e file Excel',
    ],
    highlights: [
      'App desktop con Electron — funziona offline senza server',
      'Database locale con IndexedDB nel browser di Electron',
      'Fatturazione elettronica reale con AFIP (Fattura A/B, NC A/B)',
      'Rivenditori con sconto o commissione applicati alla fatturazione',
      'Importazione massiva di prodotti e modifica massiva dei prezzi da Excel',
      'Migrazione completa da FoxPro (Husky POS) a tecnologia moderna',
    ],
  },
  'movilprint': {
    subtitle: 'Piattaforma di Design e Stampa Personalizzata',
    categories: 'Web App • Editor Visuale • Drag & Drop • Login Social',
    description:
      'Piattaforma web per creare design personalizzati di stampa. L\'utente sceglie un modello, accede all\'editor visuale con drag & drop dove aggiunge testi con più di 15 font, immagini ed elementi decorativi, posiziona ogni elemento liberamente e invia il design per la stampa. Login con Google e Facebook, sistema a punti e pannello di amministrazione per gestire modelli e design ricevuti.',
    features: [
      {
        title: 'Editor Visuale',
        items: [
          'Canvas interattivo con trascinamento',
          'Testi con +15 font, dimensione, colore, grassetto, corsivo',
          'Immagini ed elementi decorativi per modello',
          'Ridimensionamento, rotazione, copia e incolla degli elementi',
          'Sistema di livelli (z-index) per la profondità',
          'Anteprima e stampa diretta dal browser',
        ],
      },
      {
        title: 'Per l\'Utente',
        items: [
          'Registrazione con email, Google o Facebook',
          'Selezione del modello con anteprima',
          'I miei design salvati con cronologia',
          'Sistema a punti fedeltà',
          'Recupero password via email',
        ],
      },
      {
        title: 'Pannello di Amministrazione',
        items: [
          'Gestione dei modelli con dimensioni in cm',
          'Risorse per modello (forme e immagini)',
          'Gestione dei design ricevuti',
          'Moderatori per la revisione dei design',
        ],
      },
    ],
    integrationUses: [
      'Login con account Google',
      'Login con account Facebook tramite Graph API',
      'Elaborazione dei pagamenti',
      'Codici di verifica per il recupero della password',
      'Trascinamento degli elementi nell\'editor',
    ],
    highlights: [
      'Editor visuale completo con canvas interattivo e drag & drop',
      'Modelli dinamici con dimensioni in cm e risorse proprie',
      '+15 font tipografici con controllo completo degli stili',
      'Sistema di livelli per controllare la profondità degli elementi',
      'Login social con Google e Facebook',
      'Design persistenti con tutti gli elementi salvati nel database',
    ],
  },
  'padel': {
    subtitle: 'Piattaforma di Gestione di Tornei di Padel',
    categories: 'Web App • Sport • Classifica • Next.js 15',
    description:
      'Piattaforma web per l\'organizzazione e il monitoraggio di tornei di padel. Gestione dei tornei con categorie, giocatori con club e punti, partite con risultati per set, calendario eventi, circuito per categoria, classifica filtrata per genere e categoria, e ricerca giocatori. Pannello di amministrazione e pannello moderatore per il caricamento dei risultati.',
    features: [
      {
        title: 'Per il Pubblico',
        items: [
          'Calendario dei tornei con sede e contatto',
          'Circuito organizzato per categoria con tutte le date',
          'Risultati dei tornei con partite e set',
          'Classifica dei giocatori per categoria e genere',
          'Ricerca giocatore con posizione e top 5',
        ],
      },
      {
        title: 'Pannello di Amministrazione',
        items: [
          'Gestione dei tornei con data, genere e categoria',
          'Gestione dei giocatori con club, categoria e punti',
          'Gestione delle categorie e dei club',
          'Amministrazione degli utenti con ruoli',
        ],
      },
      {
        title: 'Pannello Moderatore',
        items: [
          'Caricamento delle partite con squadre e risultati per set',
          'Modifica delle partite esistenti',
          'Creazione di giocatori e tornei',
        ],
      },
    ],
    integrationUses: [],
    highlights: [
      'Circuito di tornei organizzato automaticamente per categoria',
      'Classifica dinamica in tempo reale per categoria e genere',
      'Partite individuali e a squadre con risultati per set',
      'Stato automatico del torneo in base alle partite caricate',
      'Tre livelli di accesso (pubblico, moderatore, amministratore)',
      'Eliminazione logica nelle categorie per il ripristino',
    ],
  },
  '4me': {
    subtitle: 'Piattaforma di Podologia con Scansione 3D e Calzature Ortopediche',
    categories: 'App Mobile • Web Admin • Scansione 3D • Stripe',
    description:
      'Sistema integrale di podologia con scansione 3D dei piedi. I podologi scansionano i piedi dall\'app mobile, le foto vengono elaborate in modelli 3D con Metashape e si creano progetti di calzature ortopediche su misura. Pagamenti con Stripe in USD, archiviazione su Google Drive, visualizzazione 3D nel pannello web, notifiche via email e comunicazione in tempo reale.',
    features: [
      {
        title: 'App Mobile (Podologo)',
        items: [
          'Scansione dei piedi con fotocamera (angolazioni multiple)',
          'Caricamento massivo con progresso in tempo reale via WebSocket',
          'Visualizzazione del modello 3D del piede',
          'Creazione progetto scegliendo modello, colore, suola e plantare',
          'Monitoraggio di 12 stati del progetto',
        ],
      },
      {
        title: 'Pannello Web (Admin)',
        items: [
          'Gestione di cliniche, podologi, pazienti e progetti',
          'Visualizzazione 3D con Google Model Viewer',
          'Gestione dei modelli di calzatura con colori',
          'Aggiornamento degli stati con notifica via email',
        ],
      },
      {
        title: 'Elaborazione 3D',
        items: [
          'Foto elaborate con Agisoft Metashape (Python)',
          'Immagini archiviate su Google Drive per paziente',
          'Cron job per verificare lo stato dell\'elaborazione',
          'Pulizia automatica delle scansioni precedenti',
        ],
      },
    ],
    integrationUses: [
      'Link di pagamento automatici per i progetti in USD',
      'Archiviazione delle foto organizzata per paziente',
      'Elaborazione fotogrammetrica per modelli 3D',
      'Visualizzazione 3D dei piedi nel browser',
      'Progresso in tempo reale del caricamento delle immagini',
      'Email di stato e link di pagamento',
      'Acquisizione foto dall\'app mobile',
    ],
    highlights: [
      'Scansione 3D dei piedi dal cellulare con elaborazione Metashape',
      'Caricamento massivo su Google Drive con progresso in tempo reale',
      'Visualizzazione di modelli 3D (GLB) nel browser',
      'Pipeline di 12 stati con notifica via email a ogni cambio',
      'Pagamenti con Stripe in USD con link automatico per progetto',
      'Tre sistemi coordinati: app mobile + pannello web + server',
    ],
  },
  'trewa-club': {
    subtitle: 'Piattaforma di Vendita Biglietti per Eventi con Sistema a Punti',
    categories: 'Web App • Eventi • Fatturazione AFIP • QR • Mercado Pago',
    description:
      'Piattaforma web per la vendita di biglietti per eventi notturni e feste. Acquisto con Mercado Pago, biglietti con codice QR, fatturazione elettronica automatica con AFIP, sistema a punti riscattabili, codici sconto, tipologie di ingresso con posti limitati, rivenditori con statistiche, scansione QR all\'ingresso e login con Google/Facebook. Cinque ruoli differenziati.',
    features: [
      {
        title: 'Per l\'Utente',
        items: [
          'Catalogo di eventi con tipologie di ingresso (General, VIP, Early Bird)',
          'Codici sconto (fisso o percentuale) con limite e scadenza',
          'Biglietti con codice QR unico per la scansione all\'ingresso',
          'Fattura elettronica automatica con AFIP a ogni acquisto',
          'Sistema a punti (1000$ = 1 punto) riscattabili per prodotti',
          'Login con Google, Facebook o email',
        ],
      },
      {
        title: 'Pannello di Amministrazione',
        items: [
          'Analisi per evento: vendite, genere, età, ore di punta, lotti',
          'Scansione dei biglietti QR con validazione anti-doppia-scansione',
          'Generazione massiva di biglietti (omaggi)',
          'Gestione dei rivenditori con statistiche dettagliate',
          'Ricerca utenti con cronologia acquisti',
        ],
      },
      {
        title: 'Sistema dei Rivenditori',
        items: [
          'Link proprio per vendite associate',
          'Statistiche per rivenditore e per evento',
          'Rivenditore top ed evento più venduto',
        ],
      },
    ],
    integrationUses: [
      'Pagamenti con webhook automatici (ARS)',
      'Fattura B automatica con CAE a ogni acquisto',
      'Login con account Google',
      'Login con account Facebook',
      'Codici QR per biglietti e scansione all\'ingresso',
      'Conferma acquisto, punti e recupero password',
    ],
    highlights: [
      'Fatturazione elettronica automatica con AFIP a ogni acquisto',
      'Tipologie di ingresso con lotti, posti e orari di vendita indipendenti',
      'Scansione QR con validazione anti-doppia-scansione e margine di 6 ore',
      'Sistema a punti riscattabili per prodotti del catalogo',
      'Analisi dettagliata per evento (genere, età, ore di punta, lotti)',
      'Cinque ruoli: utente, cassa, operatore, rivenditore, amministratore',
    ],
  },
  'nodominium': {
    subtitle: 'Sito Web di un Centro Culturale ed Educativo in El Salvador',
    categories: 'Sito Statico • HTML/CSS/JS • Bitcoin • Google Maps',
    description:
      'Sito web per Casa de Nodominium, centro indipendente di educazione e cultura a Playa Las Tunas, La Unión, El Salvador. Eventi con slider tattile e lightbox, informazioni istituzionali, mappa interattiva di Google Maps, modulo di contatto con FormSubmit e donazioni in Bitcoin con codice QR. Sito completamente statico senza backend.',
    features: [
      {
        title: 'Contenuto del Sito',
        items: [
          'Slider di eventi con supporto tattile (swipe)',
          'Lightbox con descrizione, caratteristiche e sponsor',
          'Presentazione del centro con visione e attività',
          'Mappa interattiva di Google Maps con posizione',
          'Modulo di contatto funzionale con FormSubmit',
          'Donazioni in Bitcoin con codice QR scansionabile',
        ],
      },
      {
        title: 'Design e UX',
        items: [
          'Animazioni CSS (fadeInUp, zoomIn, float, slide-in)',
          'Navigazione fissa in basso in tutte le pagine',
          'Responsive con breakpoint a 480px, 768px e 1024px',
          'Gradienti scuri con accenti arancione/dorati',
        ],
      },
    ],
    integrationUses: [
      'Mappa interattiva con la posizione del centro',
      'Modulo di contatto senza backend',
      'Donazioni in criptovaluta con codice QR',
      'Iconografia in tutta l\'interfaccia',
    ],
    highlights: [
      'Sito completamente statico senza server né database',
      'Slider di eventi con supporto tattile per dispositivi mobili',
      'Lightbox con informazioni complete di ogni evento',
      'Donazioni in Bitcoin con QR scansionabile',
      'Animazioni CSS pure senza librerie esterne',
      'Modulo funzionale con FormSubmit senza backend proprio',
    ],
  },
  'mdt-ingenieros': {
    subtitle: 'Controllo Ore e Gestione Progetti di Topografia',
    categories: 'Web App • Risorse Umane • Fatturazione • Firme Digitali',
    description:
      'Piattaforma web per la registrazione e il controllo delle ore lavorate, gestione progetti e generazione di report per un\'azienda di topografia. Giornate con attività, firme digitali, approvazione degli straordinari, report paghe in PDF, fatturazione mensile con IVA e ritenute, calendario visuale con stati, rotazione del personale e monitoraggio delle ore non registrate. Valuta: USD.',
    features: [
      {
        title: 'Per il Collaboratore',
        items: [
          'Registrazione della giornata con attività, orari e firme digitali',
          'Richiesta di straordinari con motivazione e approvazione',
          'Cronologia delle registrazioni e stato delle richieste',
          'Notifiche interne di approvazioni e assegnazioni',
        ],
      },
      {
        title: 'Pannello di Amministrazione',
        items: [
          'Progetti con cronogramma settimanale e tariffe orarie',
          'Calendario visuale con stati giornalieri per progetto',
          'Approvazione degli straordinari con aggiornamento automatico',
          'Fatturazione mensile con IVA (13%) e ritenuta (1%)',
          'Report paghe e stipendi suddivisi per progetto',
          'Rotazione del personale e monitoraggio delle ore non registrate',
        ],
      },
      {
        title: 'Report e PDF',
        items: [
          'Riepilogo giornaliero in PDF inviato via email al supervisore',
          'Report paghe mensile scaricabile',
          'Fattura mensile per progetto con dettaglio dei costi',
          'Calendario degli straordinari in PDF',
        ],
      },
    ],
    integrationUses: [
      'Riepiloghi giornalieri, straordinari e fatture via email con PDF allegato',
      'PDF professionali A4 per riepiloghi, paghe e fatture',
      'Calcolo delle ore lavorate, straordinari e deduzione pausa pranzo',
      'Caricamento delle firme digitali',
    ],
    highlights: [
      'Calcolo intelligente degli straordinari per giorno, festività e pausa pranzo',
      'Firme digitali del topografo e del supervisore nei rapporti',
      'Fatturazione mensile automatica con IVA (13%) e ritenuta (1%)',
      'Calendario visuale con stati giornalieri per progetto',
      'Monitoraggio delle ore non registrate negli ultimi 7 giorni',
      'Rotazione del personale tra progetti con dettaglio mensile',
    ],
  },
  'storybox': {
    subtitle: 'Editor Interattivo di Storie e Presentazioni con Programmazione Visuale',
    categories: 'Web App • Educazione • Programmazione Visuale • Blockly',
    description:
      'Applicazione web interattiva per creare storie e presentazioni multimediali con programmazione visuale. L\'utente crea scene con sfondi, oggetti trascinabili e ridimensionabili, testi con più font e stili, musica di sottofondo per scena, transizioni animate e programma il comportamento degli oggetti usando blocchi visuali (Blockly). Modalità presentazione a schermo intero, esportazione in PDF, salvataggio sul server con miniatura automatica, sistema annulla/ripristina, copia e incolla e interfaccia bilingue spagnolo/inglese.',
    features: [
      {
        title: 'Editor di Scene',
        items: [
          'Scene illimitate con pannello laterale di miniature',
          'Scena di copertina con carosello di sfondi e titolo automatico',
          'Riordinare le scene con drag & drop',
          'Sfondi a colore (HSL) o immagine dalla libreria/caricamento personalizzato',
        ],
      },
      {
        title: 'Oggetti e Testi',
        items: [
          'Libreria di oggetti per categorie + caricamento personalizzato',
          'Drag & drop, ridimensionamento (8 punti), rotazione e livelli (z-index)',
          '5 font, 6 dimensioni, grassetto/corsivo/sottolineato e colore HSL',
          'Modalità narrazione fissa nella parte inferiore della scena',
        ],
      },
      {
        title: 'Programmazione Visuale (Blockly)',
        items: [
          '5 blocchi di movimento: destra, sinistra, su, giù, segui',
          '7 blocchi di aspetto: ingrandisci, riduci, ruota, commento, suono, mostra, nascondi',
          '2 blocchi di controllo: ripeti e ferma',
          'Esecuzione sequenziale automatica durante la presentazione',
        ],
      },
      {
        title: 'Multimedia ed Esportazione',
        items: [
          'Musica di sottofondo per scena con libreria e caricamento MP3',
          '8 direzioni di transizione con 3 velocità',
          'Presentazione a schermo intero con navigazione',
          'Esportazione in PDF (html2canvas + jsPDF) e stampa diretta',
        ],
      },
    ],
    integrationUses: [
      'Motore di programmazione visuale a blocchi per il comportamento degli oggetti',
      'Acquisizione delle scene come immagine per PDF e miniature',
      'Generazione di documenti PDF esportabili',
      'Riordinamento di scene e blocchi con drag & drop',
      'Posizionamento libero degli oggetti nella scena',
      'Selettore di colore HSL per sfondi e testi',
      'Animazioni di pannelli e interfaccia',
      'Notifiche visuali delle azioni',
    ],
    highlights: [
      'Programmazione visuale con 17 tipi di blocchi (movimento, aspetto, controllo)',
      'Editor con canvas e drag & drop, 8 punti di presa, rotazione e livelli',
      'Transizioni animate in 8 direzioni con 3 velocità',
      'Musica di sottofondo per scena con riproduzione automatica in loop',
      'Sistema completo annulla/ripristina basato su pile',
      'Esportazione in PDF di alta qualità con html2canvas + jsPDF',
      'Interfaccia bilingue spagnolo/inglese con testi dinamici',
      'Salvataggio sul server con miniatura generata automaticamente',
    ],
  },
  'konecta': {
    subtitle: 'Applicazione Mobile di Controllo Presenze e Permessi Lavorativi',
    categories: 'App Mobile • Risorse Umane • QR • Geolocalizzazione • Google Maps',
    description:
      'Applicazione mobile multipiattaforma per il controllo delle presenze dei dipendenti. Registrazione di entrata e uscita tramite codice QR o geolocalizzazione GPS, cronologia delle presenze con vista mappa su Google Maps, richiesta di permessi e incidenti con allegati, supporto multiazienda, selfie per la foto profilo, ruoli differenziati (dipendente e supervisore) e navigazione adattabile in base al ruolo dell\'utente.',
    features: [
      {
        title: 'Per il Dipendente',
        items: [
          'Registrazione presenze tramite QR o geolocalizzazione GPS',
          'Stato in tempo reale (in attesa, entrata, uscita)',
          'Cronologia presenze paginata con ricerca e filtri',
          'Vista mappa con indicatori di posizione delle registrazioni',
          'Richiesta di permessi con motivazione, date e allegati',
          'Selfie per la foto profilo con fotocamera frontale',
        ],
      },
      {
        title: 'Per il Supervisore',
        items: [
          'Pannello operazioni con gestione dei permessi',
          'Approvazione o rifiuto delle richieste dei dipendenti',
          'Configurazione avanzata dell\'associazione dipendente/azienda',
        ],
      },
      {
        title: 'Autenticazione e Sicurezza',
        items: [
          'Login con documento e codice di verifica per azienda',
          'Supporto per più aziende per utente',
          'Token di sessione con rilevamento della scadenza',
          'Recupero password via email',
        ],
      },
    ],
    integrationUses: [
      'Mappa interattiva con le posizioni delle registrazioni di presenza',
      'Acquisizione di selfie per la foto profilo',
      'Scansione di codici QR per la registrazione delle presenze',
      'Geolocalizzazione GPS per la registrazione delle presenze',
      'Allegare documentazione alle richieste di permesso',
      'Generazione di QR di conferma dopo la registrazione',
    ],
    highlights: [
      'Doppio metodo di registrazione: codice QR e geolocalizzazione GPS',
      'Mappa interattiva di Google Maps con cronologia delle posizioni',
      'Supporto multiazienda con selezione per sessione',
      'Ruoli differenziati con navigazione adattabile (dipendente/supervisore)',
      'Permessi e incidenti con allegati e flusso di approvazione',
      'Selfie per il profilo con fotocamera frontale codificata in Base64',
    ],
  },
  'el-lobito-4pe': {
    subtitle: 'Calcolatrice di Punteggi di Golf per 4 Giocatori',
    categories: 'App Mobile • Sport • Calcolo • React Native',
    description:
      'Applicazione mobile per calcolare i punteggi di un gioco di scommesse di golf tra 4 giocatori. Griglia interattiva di 18 buche per 4 giocatori con calcolo automatico dei punti secondo regole condizionali (pareggi precedenti, quantità di segnati per buca). Prezzo per unità configurabile e risultati in pesos colombiani. Applicazione autocontenuta senza backend né database.',
    features: [
      {
        title: 'Meccanica del Gioco',
        items: [
          'Griglia interattiva di 18 buche × 4 giocatori (A, B, C, D)',
          'Selezione delle celle con feedback visivo in verde',
          'Calcolo automatico dei punti con regole condizionali',
          'Pareggi cumulativi che moltiplicano la buca successiva',
        ],
      },
      {
        title: 'Risultati e Configurazione',
        items: [
          'Prezzo per unità configurabile come moltiplicatore',
          'Risultati in pesos colombiani (COP)',
          'Risultati negativi evidenziati in rosso',
          'Pulsante di reset per ricominciare il gioco',
        ],
      },
    ],
    integrationUses: [],
    highlights: [
      'Regole di punteggio calibrate per partite a 4 giocatori',
      'Motore di calcolo con moltiplicatori per pareggi precedenti',
      'Applicazione autocontenuta: un solo componente, senza backend',
      'Formato di valuta colombiana (COP) con locale es-CO',
      'APK compilato incluso pronto per l\'installazione',
      'Griglia con scroll orizzontale per una visualizzazione comoda',
    ],
  },
  'casino-online': {
    subtitle: 'Piattaforma di Giochi d\'Azzardo con Scommesse in Tempo Reale',
    categories: 'Web App • Gaming • WebSocket • Redux • Firebase',
    description:
      'Piattaforma di casinò online con 5 giochi interattivi (Slot Machine, Aviator, Blackjack, Roulette e Hunt the Ace), scommesse in tempo reale con WebSocket, pannello di amministrazione con grafici statistici, sistema di referral con bonus, programma di staking BFG, gestione di depositi e prelievi, CDN immagini con ImageKit e autenticazione sicura con JWT e ruoli differenziati.',
    features: [
      {
        title: 'Giochi Disponibili',
        items: [
          'Slot Machine con linee di pagamento multiple e jackpot',
          'Aviator con moltiplicatore crescente e incasso in tempo reale',
          'Blackjack classico contro il banco',
          'Roulette europea con scommesse su numeri, colori e sezioni',
          'Hunt the Ace: trovare l\'asso tra le carte mescolate',
        ],
      },
      {
        title: 'Sistema Finanziario',
        items: [
          'Scommesse in tempo reale con WebSocket (Socket.io)',
          'Saldo con aggiornamento istantaneo',
          'Depositi con elaborazione automatica',
          'Prelievi con flusso di approvazione',
          'Cronologia completa delle transazioni',
        ],
      },
      {
        title: 'Referral e Staking',
        items: [
          'Codice referral unico con bonus di $10',
          'Pannello referral con statistiche di conversione',
          'Programma BFG Staking con rendimenti calcolati',
          'Visualizzazione del capitale investito e dei guadagni',
        ],
      },
      {
        title: 'Pannello di Amministrazione',
        items: [
          'Dashboard con Chart.js e ApexCharts',
          'Gestione utenti con blocco degli account',
          'Monitoraggio dei giochi e delle sessioni attive',
          'Controllo delle transazioni e approvazione dei prelievi',
          'Report di ricavi e rendimento',
        ],
      },
    ],
    integrationUses: [
      'CDN immagini per gli asset del casinò e le risorse grafiche',
      'Scommesse, risultati e aggiornamenti del saldo in tempo reale',
      'Email transazionali e notifiche',
      'Autenticazione e notifiche push',
      'Grafici statistici nella dashboard di amministrazione',
    ],
    highlights: [
      '5 giochi completi con logica da casinò implementata da zero',
      'Scommesse e risultati in tempo reale con WebSocket (Socket.io)',
      'Stack MERN completo con tripla libreria UI (MUI + Ant Design + Bootstrap)',
      'Sistema di referral con bonus automatico di $10',
      'Programma BFG Staking con rendimenti calcolati',
      'CDN immagini con ImageKit per caricamento ottimizzato',
      'Stato globale con Redux Toolkit per un\'esperienza fluida tra i giochi',
      'Pannello di amministrazione con grafici in tempo reale',
    ],
  },
  'giordota': {
    subtitle: 'Marketplace di Oggetti Dota 2 con Scommesse e Negozio Gaming',
    categories: 'Web App • Gaming • Microservizi • Steam API • Astro + Svelte',
    description:
      'Piattaforma di commercio di oggetti di Dota 2 con marketplace, sistema di scommesse con monete virtuali, 5 tipi di loot box, bot di Steam automatizzati per lo scambio di oggetti, chat in tempo reale multicanale, sistema di triplo portafoglio, social network integrato, sistema VIP con livelli, bot Discord e gateway di pagamento per il Perù (Mercado Pago, PayPal, PagoEfectivo). Architettura a microservizi con Java Spring Boot, 4 servizi Node.js e frontend Astro/Svelte.',
    features: [
      {
        title: 'Marketplace e Bot',
        items: [
          'Catalogo di oggetti Dota 2 con prezzi di Steam',
          'Acquisto e vendita di oggetti con portafoglio interno',
          'Bot di Steam automatizzati con trade offer',
          'Gestione di bot multipli con Steam Guard integrato',
          'Verifica dell\'inventario in tempo reale',
        ],
      },
      {
        title: 'Loot Box e Scommesse',
        items: [
          '5 tipi di casse: normali, gratuite, social, fan e modulo',
          'Animazione di apertura con rivelazione dell\'oggetto vinto',
          'Scommesse con monete virtuali su eventi e partite',
          'Probabilità configurabili dall\'amministratore',
        ],
      },
      {
        title: 'Triplo Portafoglio e Pagamenti',
        items: [
          'Portafoglio acquisti, portafoglio prelievi e portafoglio gratuito',
          'Depositi con Mercado Pago, PayPal e PagoEfectivo',
          'Prelievi con richiesta ed elaborazione',
          'Cronologia completa delle transazioni',
        ],
      },
      {
        title: 'Community e Chat',
        items: [
          'Chat in tempo reale: supporto, gruppo, admin e codici',
          'Social network con pubblicazioni e sistema di amici',
          'Bot Discord con comandi e notifiche',
          'Sistema VIP con livelli e benefici esclusivi',
        ],
      },
    ],
    integrationUses: [
      'Autenticazione, inventari e dati degli oggetti di Dota 2',
      'Scambio automatizzato di oggetti con trade offer',
      'Gateway di pagamento per il mercato peruviano',
      'Gateway di pagamento internazionale',
      'Pagamenti in contanti nei punti di pagamento in Perù',
      'Community estesa con comandi e notifiche',
      'Chat, scommesse e aggiornamenti in tempo reale',
    ],
    highlights: [
      'Architettura a microservizi: Spring Boot + 4 servizi Node.js',
      'Bot di Steam automatizzati con trade offer e Steam Guard',
      '5 tipi di loot box con probabilità configurabili',
      'Triplo portafoglio (acquisti, prelievi, gratuito) per un controllo finanziario granulare',
      'Frontend moderno con Astro + Svelte per SSG + interattività',
      '3 gateway di pagamento per il Perù: Mercado Pago, PayPal e PagoEfectivo',
      'Chat multicanale in tempo reale con WebSocket',
      'Bot Discord integrato con la piattaforma',
    ],
  },
  'saucedo-abogados': {
    subtitle: 'Sistema di Gestione Legale con Firma Elettronica e Intelligenza Artificiale',
    categories: 'Web App • App Mobile • Legale • IA • Firma Elettronica • Laravel',
    description:
      'Sistema integrale di gestione per studio legale con casi legali in 6 schede specializzate, gestione clienti, preventivi con flusso di approvazione, recupero crediti, calendario integrato, 6 tipi di report, indicizzazione documenti con IA (OCR e riassunto automatico), firma elettronica con SignNow, integrazione con Google Drive e Google Calendar, pannello Filament, app mobile e 3 ruoli differenziati. Backend Laravel con 48 modelli e 88 endpoint.',
    features: [
      {
        title: 'Gestione dei Casi',
        items: [
          'Casi con 6 schede: info, parti, documenti, movimenti, note, attività',
          'Stati del caso: nuovo, in corso, in attesa, chiuso, archiviato',
          'Assegnazione a uno o più avvocati',
          'Movimenti processuali cronologici e note interne',
          'Attività pendenti con scadenza e responsabile',
        ],
      },
      {
        title: 'Preventivi e Recupero Crediti',
        items: [
          'Preventivi con flusso di approvazione (3 ruoli)',
          'Stati: bozza, in attesa, approvato, inviato, accettato, rifiutato',
          'Conversione automatica del preventivo in caso',
          'Monitoraggio dei pagamenti parziali e totali',
          'Promemoria per i recuperi crediti in scadenza',
        ],
      },
      {
        title: 'IA e Firma Elettronica',
        items: [
          'OCR dei documenti PDF con estrazione dei dati',
          'Riassunto automatico con IA (OpenAI)',
          'Ricerca intelligente nei documenti indicizzati',
          'Firma elettronica con SignNow con monitoraggio dello stato',
          'Download dei documenti firmati con validità giuridica',
        ],
      },
      {
        title: 'Calendario e Report',
        items: [
          'FullCalendar con sincronizzazione bidirezionale con Google Calendar',
          'Eventi: udienze, riunioni, scadenze e attività',
          '6 report: casi, fatturazione, crediti, produttività, clienti, preventivi',
          'Pannello Filament con dashboard e audit',
        ],
      },
    ],
    integrationUses: [
      'Firma elettronica di documenti legali con validità giuridica',
      'Archiviazione e sincronizzazione dei documenti del caso',
      'Sincronizzazione bidirezionale di eventi e udienze',
      'OCR, riassunto automatico ed estrazione dati dai documenti',
      'Calendario visuale interattivo con viste multiple',
      'Pannello di amministrazione con dashboard e gestione delle risorse',
      'Generazione di PDF per preventivi e report',
      'Test end-to-end automatizzati',
    ],
    highlights: [
      'Indicizzazione dei documenti con IA: OCR + riassunto automatico con OpenAI',
      'Firma elettronica con SignNow con validità giuridica',
      'Tripla integrazione Google: Drive, Calendar e OAuth',
      '48 modelli e 88 endpoint in Laravel per una gestione legale completa',
      'Flusso di approvazione dei preventivi con 3 ruoli differenziati',
      '6 tipi di report per il processo decisionale dello studio',
      'Casi con 6 schede specializzate per una gestione integrale',
      'Test E2E con Playwright e app mobile complementare',
    ],
  },
  'grupo-sdg': {
    subtitle: 'Sistema di Gestione Aziendale con Fatturazione Elettronica CFDI 4.0 (Messico)',
    categories: 'Web App • ERP • Fatturazione CFDI • Laravel 12 • SAT',
    description:
      'Sistema di gestione aziendale per il mercato messicano con fatturazione elettronica CFDI 4.0. Pipeline di vendita completa (preventivo → ordine → fattura → pagamento → riscossione), emissione di documenti fiscali con certificati CSD, timbro con PAC, validazione RFC contro la lista nera del SAT, modulo di tesoreria, politiche password con scadenza e 4 tabelle di audit. Backend Laravel 12 con 40+ modelli e 80+ endpoint documentati con Swagger.',
    features: [
      {
        title: 'Pipeline di Vendita',
        items: [
          'Flusso completo: preventivo → ordine → fattura → pagamento → riscossione',
          'Conversione automatica tra fasi con trasferimento dei dati',
          'Complementi di pagamento secondo la normativa SAT',
          'Monitoraggio dei crediti da incassare con scadenze',
        ],
      },
      {
        title: 'Fatturazione CFDI 4.0',
        items: [
          'Documenti fiscali digitali secondo la normativa SAT',
          'Firma digitale con Certificato di Sigillo Digitale (CSD)',
          'Timbro fiscale con PAC (Fornitore Autorizzato)',
          'Validazione RFC contro la lista nera del SAT',
          'Generazione di XML fiscale e rappresentazione stampata in PDF',
          'Cancellazione di CFDI con motivazione secondo la normativa',
        ],
      },
      {
        title: 'Tesoreria e Sicurezza',
        items: [
          'Conti bancari, movimenti e riconciliazione',
          'Flusso di cassa con proiezione di entrate e uscite',
          'Politiche password con scadenza e blocco',
          '4 tabelle di audit: accessi, dati, fiscale, admin',
        ],
      },
      {
        title: 'Amministrazione',
        items: [
          'Dashboard con metriche di vendita e fatturazione',
          'Cataloghi ufficiali del SAT integrati',
          'Imposte configurabili: IVA, ISR, IEPS',
          'Gestione utenti con ruoli e permessi',
        ],
      },
    ],
    integrationUses: [
      'Timbro fiscale dei documenti CFDI 4.0',
      'Cataloghi ufficiali e validazione RFC contro la lista nera',
      'Firma digitale dei documenti fiscali',
      'Rappresentazioni stampate dei CFDI in PDF',
      'Documentazione interattiva di 80+ endpoint',
    ],
    highlights: [
      'Fatturazione CFDI 4.0 completa con timbro PAC e certificati CSD',
      'Pipeline di vendita end-to-end: dal preventivo alla riscossione',
      'Validazione RFC contro la lista nera del SAT',
      '4 tabelle di audit per una tracciabilità completa',
      'Politiche password aziendali con scadenza periodica',
      '40+ modelli e 80+ endpoint documentati con Swagger',
      'Modulo di tesoreria con riconciliazione bancaria',
      'Cataloghi ufficiali del SAT integrati (uso CFDI, regime, forma di pagamento)',
    ],
  },
  'goodbye-friend': {
    subtitle: 'Cimitero Virtuale 3D per Animali Domestici con Tombe Interattive',
    categories: 'Web 3D • App Mobile • Three.js • React Three Fiber • Stripe • Laravel',
    description:
      'Piattaforma di memoriale virtuale per animali domestici con un cimitero 3D completo. Più di 1.075 parcelle in 25+ file, 3 stili di tomba, 57 oggetti 3D di tributo, nicchie circolari e mausolei. Camera in prima persona con pointer lock su desktop e joystick tattili su mobile, minimappa, rendering per distanza, profili degli animali con gallerie, memoriali collaborativi, marketplace di collaboratori e pagamenti con Stripe. App mobile con React Native e backend Laravel.',
    features: [
      {
        title: 'Cimitero 3D',
        items: [
          'Mondo 3D con terreno, prato, sentieri, alberi e decorazioni',
          '1.075+ parcelle in 25+ file con 3 stili di tomba',
          '57 oggetti 3D di tributo: fiori, candele, corone, giocattoli',
          '10 nicchie circolari e mausolei premium',
          'Illuminazione dinamica e rendering per distanza',
        ],
      },
      {
        title: 'Navigazione e Camera',
        items: [
          'Prima persona con pointer lock su desktop',
          'Joystick virtuali tattili su mobile',
          'Minimappa con posizione attuale e tombe occupate',
          'Navigazione diretta a una tomba specifica',
          'Sistema di collisioni con gli oggetti del cimitero',
        ],
      },
      {
        title: 'Memoriali e Community',
        items: [
          'Profilo dell\'animale con biografia e galleria fotografica',
          'Tributi virtuali da altri visitatori',
          'Messaggi di condoglianze in ogni memoriale',
          'Memoriale pubblico o privato secondo preferenza',
          'Marketplace di artisti per la personalizzazione',
        ],
      },
      {
        title: 'Pagamenti e App Mobile',
        items: [
          'Piani memoriale: base, premium, mausoleo (Stripe)',
          'Acquisto di tributi 3D aggiuntivi',
          'App mobile con percorso 3D e joystick tattili',
          'Gestione del profilo e della galleria dal cellulare',
        ],
      },
    ],
    integrationUses: [
      'Motore 3D per il cimitero con tombe, oggetti e ambiente',
      'Helper e componenti per Three.js (camera, controlli, loader)',
      'Pagamenti per piani memoriale, tributi e marketplace',
      'Acquisizione e selezione di foto dall\'app mobile',
    ],
    highlights: [
      'Cimitero 3D con 1.075+ parcelle, 3 stili di tomba e 57 oggetti di tributo',
      'Camera ibrida: pointer lock su desktop, joystick tattili su mobile',
      'Rendering ottimizzato per distanza per mantenere 60fps',
      'Minimappa di navigazione con posizione in tempo reale',
      'Marketplace di collaboratori per la personalizzazione dei memoriali',
      'Tre piattaforme: web 3D (Three.js/R3F), app mobile (React Native), backend (Laravel)',
      'Sistema di collisioni per un percorso realistico',
      'Monetizzazione con Stripe: piani, tributi e pagamenti ai collaboratori',
    ],
  },
  'safetrade': {
    subtitle: 'Marketplace di Segnali di Trading con Abbonamenti',
    categories: 'App Mobile • Fintech • Trading • Stripe • Zustand • React Query',
    description:
      'Applicazione mobile per l\'acquisto e la vendita di segnali di trading. I trader pubblicano segnali con analisi tecnica e i clienti si abbonano per riceverli. Due ruoli differenziati, abbonamenti ricorrenti con Stripe, dashboard di rendimento, esplorazione dei trader con metriche di performance, grafici statistici, navigazione per tab in base al ruolo e validazione con Zod. Stack moderno: React Native, Expo, TypeScript, Zustand e React Query.',
    features: [
      {
        title: 'Per i Trader',
        items: [
          'Pubblicare segnali con asset, direzione, take profit e stop loss',
          'Dashboard con % di successo, rendimento cumulativo e serie vincente',
          'Gestione degli abbonati e stato degli abbonamenti',
          'Cronologia dei segnali con risultato (vincente/perdente)',
          'Grafici di performance con linee e barre',
        ],
      },
      {
        title: 'Per i Clienti',
        items: [
          'Directory dei trader con metriche e prezzo dell\'abbonamento',
          'Abbonamento mensile a uno o più trader',
          'Segnali in tempo reale con dettaglio e analisi',
          'Gestione degli abbonamenti: visualizzare, sospendere o annullare',
        ],
      },
      {
        title: 'Pagamenti e Account',
        items: [
          'Abbonamenti ricorrenti mensili con Stripe SDK nativo',
          'Cronologia degli addebiti, fatture e stato dei pagamenti',
          'Configurazione delle notifiche e del profilo',
        ],
      },
    ],
    integrationUses: [
      'Abbonamenti ricorrenti con carta di credito/debito',
      'Configurazione dei servizi e notifiche',
      'Grafici di rendimento e statistiche dei trader',
    ],
    highlights: [
      'Due ruoli con interfacce e navigazione completamente differenziate',
      'Stack moderno: Zustand + React Query + Zod per stato, cache e validazione',
      'Stripe nativo in React Native per pagamenti senza uscire dall\'app',
      'Metriche automatiche: % successo, rendimento cumulativo, serie vincente',
      'TypeScript completo in tutta l\'applicazione',
      'Expo Router con tab condizionali in base al ruolo dell\'utente',
      'React Query con cache e sincronizzazione ottimistica',
      'Abbonamenti ricorrenti con addebito mensile automatico',
    ],
  },
  'talenthunt': {
    subtitle: 'Chatbot di Reclutamento con IA e Parsing dei CV',
    categories: 'Web App • Risorse Umane • IA • GPT-4 • Chatbot • Laravel 12 • Filament',
    description:
      'Piattaforma di reclutamento automatizzato con chatbot conversazionale con IA. Riceve candidati attraverso un chatbot configurabile, analizza i CV con GPT-4 (estrazione automatica di dati personali, esperienza e formazione dai PDF), gestisce le candidature con flusso Kanban, si integra con TalentTalent API per la pubblicazione delle offerte, costruttore di flussi del chatbot, dashboard analitica (funnel, time-to-hire, rendimento per reclutatore) e 3 ruoli. Pannello Filament.',
    features: [
      {
        title: 'Chatbot Conversazionale',
        items: [
          'Flusso di conversazione configurabile per offerta lavorativa',
          'Costruttore di flussi con passaggi: domande aperte, scelta multipla, file',
          'Risposte dinamiche in base alle risposte del candidato',
          'Caricamento del CV direttamente nella conversazione',
          'Interfaccia tipo chat amichevole per il candidato',
        ],
      },
      {
        title: 'Parsing dei CV con GPT-4',
        items: [
          'Lettura automatica del testo nei PDF con OCR',
          'Estrazione dei dati personali: nome, email, telefono, località',
          'Estrazione dell\'esperienza lavorativa: aziende, posizioni, date',
          'Identificazione delle competenze tecniche e trasversali',
          'Campi automatici salvati nel profilo del candidato',
        ],
      },
      {
        title: 'Gestione delle Candidature',
        items: [
          'Kanban: nuovo → revisione → colloquio → prova → offerta → assunto',
          'Dettaglio del candidato con CV analizzato e risposte del chatbot',
          'Note interne del reclutatore e timeline completa',
          'Assegnazione delle candidature ai reclutatori',
        ],
      },
      {
        title: 'Analisi e Amministrazione',
        items: [
          'Funnel di conversione: visite → candidature → assunzioni',
          'Time-to-hire e rendimento per reclutatore',
          'Pubblicazione delle offerte sui portali tramite TalentTalent API',
          '3 ruoli: amministratore, reclutatore, visualizzatore (Filament)',
        ],
      },
    ],
    integrationUses: [
      'Parsing intelligente dei CV: dati, esperienza, formazione e competenze',
      'Pubblicazione delle offerte su più portali di lavoro',
      'Pannello di amministrazione con dashboard e gestione delle risorse',
      'Interattività del chatbot e componenti dinamici',
      'Generazione di report in PDF',
    ],
    highlights: [
      'Parsing dei CV con GPT-4: estrazione automatica di dati, esperienza e competenze',
      'Costruttore visuale di flussi del chatbot senza necessità di programmare',
      'Dashboard analitica: funnel di conversione, time-to-hire, rendimento per reclutatore',
      'Integrazione con TalentTalent API per pubblicare su più portali',
      '3 ruoli differenziati: amministratore, reclutatore e visualizzatore',
      'Filament v3.3 come pannello principale con dashboard professionale',
      'Flusso Kanban completo per la gestione visuale dei candidati',
      'Laravel 12 con Alpine.js, Livewire e Tailwind CSS v4',
    ],
  },
  'biznes': {
    subtitle: 'Piattaforma SaaS di Biglietti da Visita Digitali',
    categories: 'Web App • SaaS • E-commerce • QR • Mercado Pago • Redux',
    description:
      'Piattaforma SaaS per creare biglietti da visita digitali personalizzabili e condivisibili tramite link o QR. Editor visuale con anteprima in tempo reale, social network integrati, pulsanti personalizzati, vCard scaricabile, sistema di abbonamenti con Mercado Pago, negozio prodotti con carrello, pannello di amministrazione completo, statistiche dettagliate delle interazioni (visite, clic, download, tempo sullo schermo) e comunicazione in tempo reale con Socket.IO.',
    features: [
      {
        title: 'Editor dei Biglietti',
        items: [
          'Design passo dopo passo: foto, copertina, logo, bio, posizione, azienda',
          'Social network con preferiti in evidenza (Instagram, LinkedIn, TikTok, ecc.)',
          'Personalizzazione visuale: colori, tipografie, bordi, allineamento, sfondi',
          'Anteprima in tempo reale in formato cellulare',
          'QR automatico scaricabile e vCard per salvare il contatto',
        ],
      },
      {
        title: 'Abbonamenti e Negozio',
        items: [
          'Piani con permessi configurabili a livello granulare',
          'Pagamenti e abbonamenti con Mercado Pago',
          'Negozio prodotti con categorie, varianti e carrello',
          'Coupon sconto e sconti per abbonamento',
        ],
      },
      {
        title: 'Statistiche',
        items: [
          'Visite al biglietto con data e dispositivo',
          'Clic su social network, email e pulsanti',
          'Download di vCard e tempo di visualizzazione',
          'Contatti ricevuti tramite modulo integrato',
        ],
      },
      {
        title: 'Pannello di Amministrazione',
        items: [
          'Gestione di prodotti, categorie, abbonamenti e ordini',
          'Blog, FAQ, marchi, Hero Card e annunci',
          'Gestione di coupon, ticket e utenti',
          'Importazione massiva da file Excel',
        ],
      },
    ],
    integrationUses: [
      'Pagamenti di abbonamenti, sottoscrizioni e acquisti nel negozio',
      'Accesso rapido con account Google',
      'Email transazionali (acquisto, login, abbonamenti)',
      'Generazione automatica di codici QR per biglietto',
      'File di contatto (.vcf) scaricabili',
      'Comunicazione in tempo reale',
      'Ottimizzazione e conversione delle immagini in WebP',
      'Documentazione interattiva dell\'API',
    ],
    highlights: [
      'SaaS completo con abbonamenti e permessi granulari per piano',
      'Editor visuale avanzato con anteprima in tempo reale in formato cellulare',
      'Statistiche dettagliate: visite, clic, download, tempo sullo schermo',
      'QR + vCard automatici per ogni biglietto digitale',
      'Negozio prodotti con carrello e checkout con Mercado Pago',
      'Ottimizzazione automatica delle immagini in WebP con Sharp',
      'Importazione massiva di utenti/biglietti da Excel',
      'Attività programmate con Agenda.js per la scadenza degli abbonamenti',
    ],
  },
  'citamovil': {
    subtitle: 'Sistema di Gestione delle Riparazioni di Dispositivi Mobili',
    categories: 'Web App • Servizio Tecnico • WhatsApp Bot • Next.js 14 • Grossisti',
    description:
      'Piattaforma web per un servizio tecnico di riparazione di cellulari, tablet e dispositivi elettronici in Spagna. Preventivatore automatico con tabella prezzi per modello, guasto e zona, sistema di ordini con tracciamento tramite codice a 5 cifre, notifiche automatiche via email e WhatsApp, gestione dei grossisti con approvazione e tracciamento, blog con editor avanzato e pannello di amministrazione con contenuti 100% modificabili.',
    features: [
      {
        title: 'Per il Cliente',
        items: [
          'Preventivatore automatico per categoria, marca, modello e guasti',
          'Selezione multipla di guasti con prezzo in tempo reale',
          'Tracciamento della riparazione con codice a 5 cifre',
          'Notifiche via email e WhatsApp a ogni cambio di stato',
          'Dati reali di province e città della Spagna',
        ],
      },
      {
        title: 'Sistema Grossisti',
        items: [
          'Registrazione con approvazione manuale dell\'amministratore',
          'Ordini di riparazione in volume con indirizzo di ritiro',
          'Tracciamento indipendente con codice e stati propri',
          'Notifiche via email al grossista e all\'admin',
        ],
      },
      {
        title: 'Pannello di Amministrazione',
        items: [
          'Tabella prezzi per modello, guasto e zona (locale/fuori/grossista)',
          'Gestione di categorie, marche, modelli e guasti',
          'Ordini con cambio di stato e notifica automatica',
          'Blog con editor avanzato, tag e articoli correlati',
          'Contenuti 100% modificabili senza toccare il codice',
          'Esportazione della tabella prezzi in PDF',
        ],
      },
    ],
    integrationUses: [
      'Messaggi automatici alla creazione degli ordini o al cambio di stato (connessione QR)',
      'Email con template HTML per ordini, stati e grossisti',
      'Generazione di PDF con tabella prezzi',
      'Recensioni di Google nella pagina iniziale',
    ],
    highlights: [
      'Preventivatore intelligente con prezzi per modello, guasto e zona geografica',
      'Bot WhatsApp integrato con whatsapp-web.js (senza servizi a pagamento)',
      'Notifiche multicanale: email + WhatsApp automatici',
      'Sistema grossisti con registrazione, approvazione e tracciamento',
      'Tabella prezzi dinamica con drag & drop ed esportazione in PDF',
      'Contenuti 100% modificabili dal pannello di amministrazione',
    ],
  },
}
