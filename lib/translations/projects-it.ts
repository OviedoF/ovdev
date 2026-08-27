import type { ProjectI18n } from './types'

export const it: Record<string, ProjectI18n> = {
  'cap-medical': {
    subtitle: 'App mobile per gestire servizi medici e interventi chirurgici',
    categories: 'App Mobile • React Native • Multi-Modulo',
    description:
      'App mobile per un\'azienda che gestisce servizi chirurgici. Dal telefono si creano servizi in tre passaggi, se ne segue lo stato, si registrano movimenti con posizione GPS e allegati, e si caricano pagamenti e controricevute. Ha anche una rubrica di tecnici, ospedali e centri medici, cartelle dei pazienti e notifiche. I permessi dipendono dal ruolo di ogni utente.',
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
      'Permessi per ruolo',
      'Creazione dei servizi in 3 passaggi con cataloghi dinamici',
      '10 schermate per ogni servizio',
      'Movimenti con posizione GPS automatica',
      'Storico di tutte le modifiche',
      'Tutta l\'app in TypeScript',
    ],
  },
  'petnder': {
    subtitle: 'App per chi ha animali, con adozioni e servizi nelle vicinanze',
    categories: 'App Mobile • React Native • Marketplace Pet',
    description:
      'È un\'app mobile per chi ha animali domestici. Da lì si cercano servizi pet-friendly per categoria, si adottano animali con filtri e chat, e si segnalano animali smarriti con la posizione. Le aziende entrano con un profilo diverso, con una navigazione tutta loro, per caricare servizi con mappa e orari, creare coupon con QR e vedere le statistiche. Ha chat in tempo reale, notifiche push e community con ruoli e moderazione.',
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
      'Due profili separati, uno per gli utenti e uno per le aziende',
      'Adozioni con filtri e chat tra le parti',
      'Community con ruoli e moderazione dei contenuti',
      'Portafoglio digitale con saldo e storico per le aziende',
      'Obiettivi sbloccabili per gamificare l\'uso',
      'Onboarding animato con Reanimated',
    ],
  },
  'controla2': {
    subtitle: 'ERP per imprese di costruzione e ingegneria in Cile',
    categories: 'SaaS • ERP • Fatturazione Elettronica',
    description:
      'È un ERP web pensato per imprese di costruzione e studi di ingegneria che vogliono avere tutto in un unico posto. Copre progetti con preventivi e Gantt, risorse umane con calcolo delle buste paga, fatturazione elettronica, acquisti, magazzino e prevenzione dei rischi. È adattato alla normativa cilena (AFP, ISAPRE, DTE, RUT) e ha otto ruoli con flussi di approvazione.',
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
      'Dashboard con metriche in tempo reale',
      'Genera PDF, Excel e CSV in automatico',
      '8 ruoli predefiniti con flussi di approvazione',
      'Adattato alla normativa cilena (AFP, ISAPRE, DTE, RUT)',
      'Modulo SSOMA per la prevenzione dei rischi',
      'Avvisi immediati quando c\'è qualcosa da approvare',
    ],
  },
  'alhambra': {
    subtitle: 'Sito per guide turistiche dell\'Alhambra, in 7 lingue',
    categories: 'Web App • Turismo • Pannello Admin • Multilingue',
    description:
      'Sito per un\'azienda di guide turistiche di Granada, in Spagna, che fa visite all\'Alhambra. Ogni itinerario ha la sua pagina, le prenotazioni arrivano via email da un modulo e c\'è il contatto diretto su WhatsApp. Si traduce in automatico in 7 lingue. Il titolare gestisce itinerari e blog dal pannello, e modifica i testi cliccandoci sopra direttamente nella pagina.',
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
      'Tutti i contenuti si gestiscono senza aiuto tecnico',
      'Testi modificabili cliccando nella pagina',
      'Rendering lato server per la SEO',
      '7 lingue per il turismo internazionale',
      'Prenotazioni via email e contatto su WhatsApp',
      'JWT, password cifrate e ruoli',
    ],
  },
  'biznes-empresa': {
    subtitle: 'Biglietti digitali per tutti i dipendenti di un\'azienda',
    categories: 'Web App • SaaS • Biglietti Digitali • Ruoli',
    description:
      'Versione aziendale di Biznes. Un\'azienda si registra con logo e branding, invita i dipendenti via email o con un Excel, e crea per loro biglietti digitali partendo da template con l\'identità del marchio. Ogni biglietto ha il suo QR, la sua vCard e un link proprio. I ruoli definiscono chi può modificare cosa, e le statistiche di visite, clic e download si vedono tutte insieme in grafici.',
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
      'Tutta la gestione aziendale da un unico pannello',
      'Template con il marchio che si applicano da soli',
      'Ruoli e permessi per dipendente',
      'Inserimento massivo di dipendenti da Excel',
      'Statistiche di tutti i biglietti in grafici',
      'Aggiornamenti in tempo reale con WebSocket',
    ],
  },
  'blackphone': {
    subtitle: 'Sito per un centro di riparazione cellulari in Spagna',
    categories: 'Web App • E-commerce • WhatsApp Bot • Pannello Admin',
    description:
      'Sito e gestionale per un laboratorio di riparazione cellulari in Spagna. Il cliente sceglie modello e guasti, vede subito il prezzo e poi segue la riparazione con un codice di 5 cifre. Ogni cambio di stato gli arriva via email e WhatsApp. C\'è un flusso a parte per i grossisti, con approvazione e ordini all\'ingrosso, e un pannello per gestire prezzi, modelli, guasti, stati e il blog.',
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
      'Preventivatore per modello, guasto e zona',
      'Avvisi via email e WhatsApp a ogni cambio di stato',
      'Bot WhatsApp fatto in casa, senza servizi a pagamento',
      'Grossisti con un flusso di ordini tutto loro',
      'Listino prezzi modificabile ed esportabile in PDF',
      'Province e comuni reali della Spagna',
    ],
  },
  'casepe': {
    subtitle: 'Sito istituzionale di una camera petrolifera, modificabile dal vivo',
    categories: 'Web Istituzionale • CMS in Tempo Reale • Blog • Next.js 14',
    description:
      'Sito web per CASEPE, la camera che riunisce le imprese di operazioni petrolifere speciali in Argentina. La particolarità è che non c\'è un pannello a parte per i contenuti. Quando l\'amministratore è loggato, clicca su qualsiasi testo o immagine della pagina e lo cambia lì sul posto, e può anche aggiungere o togliere elementi in ogni sezione. Ha un blog di notizie con articoli correlati e un modulo di contatto che arriva via email.',
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
      'Modifica dal vivo, senza pannello separato',
      'Proprietà annidate aggiornabili con Lodash',
      'Sezioni in cui si aggiungono e tolgono elementi dal sito',
      'Blog con tag e articoli correlati',
      'Email di contatto con template HTML',
      'Animazioni allo scroll in tutte le sezioni',
    ],
  },
  'dental-digital': {
    subtitle: 'Gestionale per cliniche dentali, con fattura AFIP',
    categories: 'SaaS • Fatturazione AFIP • Odontogramma • Mercado Pago',
    description:
      'È un SaaS per dentisti e cliniche in Argentina. Ha schede pazienti con assicurazione sanitaria, appuntamenti in un calendario, odontogramma per dente, preventivi che diventano fattura e consensi con firma digitale. Emette fattura elettronica con ARCA/AFIP (A, B e C, con note di credito e di debito) e manda il PDF via email o WhatsApp. Gli abbonamenti si pagano con Mercado Pago e ogni clinica può avere più professionisti con ruoli.',
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
      'Fattura elettronica con ARCA/AFIP e CAE',
      'Genera i certificati RSA e CSR per il collegamento con AFIP',
      'Odontogramma per dente con esportazione in PDF',
      'Abbonamenti con Mercado Pago e webhook',
      'Più utenti per clinica con ruoli di titolare, professionista e amministratore',
      'Backup completo in JSON con ripristino',
    ],
  },
  'sunchales-pos': {
    subtitle: 'Gestione commerciale e punto vendita con fattura AFIP',
    categories: 'SaaS • POS • Fatturazione AFIP • Codice a Barre',
    description:
      'Sistema web di gestione commerciale per attività in Argentina. Si caricano prodotti con codice a barre, si registrano vendite e acquisti, e si tengono sotto controllo magazzino e materie prime. Emette fattura elettronica con ARCA/AFIP, trasforma i preventivi in vendite e gestisce garanzie e resi. L\'accesso si paga in abbonamento con Mercado Pago.',
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
      'Acquisti, magazzino, vendite, fatturazione e report in un unico posto',
      'Fattura elettronica con ARCA/AFIP e CAE',
      'Codici a barre generati e letti dal sistema',
      'Garanzie e resi (RMA) con tracciamento',
      'Preventivi che diventano vendite',
      'SMTP configurabile per utente per inviare le fatture',
    ],
  },
  'fuku-shop': {
    subtitle: 'Negozio online di abbigliamento anime e urban, di Rafaela',
    categories: 'E-commerce • Next.js • Mercado Pago • Cloudinary',
    description:
      'Negozio online per un marchio di abbigliamento di Rafaela, Santa Fe, con stile anime, asiatico e da videogiochi. Ogni prodotto ha varianti per colore con le proprie foto, tabella delle taglie con misure reali e zoom nella galleria. Si filtra per categoria, tipo, colore, taglia e prezzo, si paga con Mercado Pago e l\'utente ha storico, indirizzi e recensioni. Dal pannello si carica tutto il catalogo.',
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
      'Varianti per colore con foto indipendenti',
      'Filtri combinati per categoria, tipo, colore, taglia e prezzo',
      'Generazione statica con rivalidazione incrementale per la SEO',
      'Sitemap XML generata in automatico',
      'Immagini su Cloudinary',
      'Categorie con sottocategorie, tipi e sottotipi',
    ],
  },
  'julian-winners': {
    subtitle: 'Lotterie online con biglietti digitali e pagamento con Mercado Pago',
    categories: 'Web App • Lotterie • Mercado Pago • Referral',
    description:
      'Piattaforma per vendere biglietti di lotterie online in Colombia. L\'utente compra pacchetti di biglietti con Mercado Pago, riceve numeri casuali senza ripetizioni e gli arriva la fattura in PDF via email. Ha un carrello per più lotterie, referral con punti, moderatori che assegnano i biglietti a mano per le vendite di persona e uno strumento per scegliere il vincitore per numero. Testi, immagini e persino le credenziali di Mercado Pago e SMTP si configurano dal pannello.',
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
      'Biglietti casuali senza ripetizioni, con formato in base al totale della lotteria',
      'Webhook di Mercado Pago con controllo dei duplicati',
      'Assegnazione manuale dai moderatori per le vendite di persona',
      'Vincitore scelto per numero di biglietto',
      'Esportazione in Excel di utenti, acquisti e fatture',
      'Tre ruoli: utente, moderatore e amministratore',
    ],
  },
  'limcal': {
    subtitle: 'Negozio online all\'ingrosso di prodotti per la pulizia',
    categories: 'E-commerce • Mercado Pago • Rivenditori • CMS',
    description:
      'Negozio online per LIMCAL, un\'azienda argentina di prodotti per la pulizia che vende ai negozi. Gli account si registrano con il CUIT e qualcuno del team li approva prima che possano comprare. Ogni prodotto ha un ordine minimo, il pagamento passa da Mercado Pago e l\'ordine si registra da solo con il webhook. C\'è una mappa dei rivenditori con Google Maps filtrabile per provincia e città, e i contenuti del sito si modificano dal pannello.',
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
      'Account approvati a mano prima di poter comprare',
      'Ordine minimo per prodotto, pensato per la vendita all\'ingrosso',
      'Mappa dei rivenditori con Google Maps, filtrabile per zona',
      'Risposta ai messaggi di contatto dal pannello',
      'Contenuti modificabili con proprietà annidate',
      'Ordini registrati in automatico con i webhook di Mercado Pago',
    ],
  },
  'limcal-pos': {
    subtitle: 'Sistema desktop di vendite e fatturazione, con Electron',
    categories: 'App Desktop • Electron • Fatturazione AFIP • IndexedDB',
    description:
      'Programma desktop per la gestione commerciale di LIMCAL, che ha sostituito un vecchio sistema in FoxPro. Gestisce prodotti, vendite, acquisti, magazzino, materie prime e rivenditori con commissione o sconto. Emette fattura A e B con ARCA/AFIP, note di credito, bolle di consegna in PDF e registro IVA. Il database è locale con IndexedDB, quindi funziona senza server e senza connessione.',
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
      'App desktop con Electron, funziona senza connessione',
      'Database locale con IndexedDB',
      'Fattura A e B e note di credito con AFIP',
      'Sconto o commissione per rivenditore applicati in fattura',
      'Importazione di prodotti e cambio prezzi massivo da Excel',
      'Migrazione dei dati da FoxPro (Husky POS)',
    ],
  },
  'movilprint': {
    subtitle: 'Editor online di grafiche da mandare in stampa',
    categories: 'Web App • Editor Visuale • Drag & Drop • Login Social',
    description:
      'Sito per creare grafiche personalizzate e mandarle in stampa. L\'utente sceglie un template ed entra in un editor dove trascina testi con più di 15 caratteri, immagini ed elementi decorativi, li ridimensiona, li ruota e li ordina in livelli. Quando ha finito, invia la grafica e resta salvata nel suo account. Ha login con Google e Facebook, punti fedeltà e un pannello per gestire i template e controllare le grafiche che arrivano.',
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
      'Editor con tela interattiva e drag and drop',
      'Template con dimensioni in cm e risorse proprie',
      'Più di 15 caratteri con controllo degli stili',
      'Livelli per ordinare la profondità degli elementi',
      'Login con Google e Facebook',
      'Grafiche salvate nel database con tutti i loro elementi',
    ],
  },
  'padel': {
    subtitle: 'Tornei, risultati e classifica di padel',
    categories: 'Web App • Sport • Classifica • Next.js 15',
    description:
      'Sito per organizzare e seguire tornei di padel. Il pubblico vede il calendario dei tornei, il circuito per categoria, i risultati partita per partita con i set e la classifica per genere e categoria. Può anche cercare un giocatore e vedere la sua posizione. Un moderatore carica partite e risultati, e l\'amministratore gestisce tornei, giocatori, club e categorie.',
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
      'Circuito creato in automatico per categoria',
      'Classifica per categoria e genere che si aggiorna da sola',
      'Partite singole e a squadre con risultato per set',
      'Lo stato del torneo cambia in base alle partite caricate',
      'Tre livelli di accesso: pubblico, moderatore e amministratore',
      'Categorie con cancellazione logica per poterle ripristinare',
    ],
  },
  '4me': {
    subtitle: 'Scansione 3D dei piedi e calzature ortopediche su misura',
    categories: 'App Mobile • Web Admin • Scansione 3D • Stripe',
    description:
      'Sistema per podologi che fanno calzature ortopediche su misura. Dall\'app mobile scattano foto del piede da più angolazioni, che si caricano su Google Drive con avanzamento in tempo reale, e un processo con Metashape le trasforma in un modello 3D. Con quel modello si crea un progetto scegliendo modello, colore, suola e plantare, che passa per 12 stati con avviso via email a ogni cambio. Il pannello web mostra i piedi in 3D e i pagamenti passano da Stripe in dollari.',
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
      'Scansione 3D del piede dal telefono, elaborata con Metashape',
      'Caricamento massivo su Google Drive con avanzamento in tempo reale',
      'Modelli 3D (GLB) visibili nel browser',
      '12 stati di progetto con email a ogni cambio',
      'Link di pagamento Stripe in USD per progetto',
      'Tre parti coordinate: app mobile, pannello web e server',
    ],
  },
  'trewa-club': {
    subtitle: 'Vendita di biglietti per feste, con QR e fattura AFIP',
    categories: 'Web App • Eventi • Fatturazione AFIP • QR • Mercado Pago',
    description:
      'Piattaforma per vendere biglietti per eventi notturni. L\'utente paga con Mercado Pago, riceve un biglietto con QR e la fattura elettronica AFIP parte da sola a ogni acquisto. Ci sono tipi di biglietto con posti limitati e tranche, codici sconto, punti da riscattare con prodotti e login con Google o Facebook. All\'ingresso si scansionano i QR con controllo della doppia scansione, e i rivenditori hanno il loro link e le loro statistiche.',
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
      'Fattura elettronica AFIP a ogni acquisto',
      'Tipi di biglietto con tranche, posti e orari di vendita propri',
      'Scansione QR con controllo della doppia scansione e margine di 6 ore',
      'Punti riscattabili con prodotti del catalogo',
      'Analisi per evento: genere, età, ore di punta e tranche',
      'Cinque ruoli: utente, cassa, operatore, rivenditore e amministratore',
    ],
  },
  'nodominium': {
    subtitle: 'Sito statico per un centro culturale in El Salvador',
    categories: 'Sito Statico • HTML/CSS/JS • Bitcoin • Google Maps',
    description:
      'Sito per Casa de Nodominium, un centro di educazione e cultura a Playa Las Tunas, in El Salvador. Mostra gli eventi in uno slider con swipe e lightbox con dettagli e sponsor, la storia del centro, una mappa di Google Maps e un modulo di contatto che funziona con FormSubmit. Accetta donazioni in Bitcoin con un QR. È HTML, CSS e JavaScript puro, senza backend.',
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
      'Sito statico, senza server né database',
      'Slider degli eventi con swipe su mobile',
      'Lightbox con il dettaglio di ogni evento',
      'Donazioni in Bitcoin con QR',
      'Animazioni in CSS puro, senza librerie',
      'Modulo di contatto con FormSubmit',
    ],
  },
  'mdt-ingenieros': {
    subtitle: 'Controllo di ore e progetti per un\'azienda di topografia',
    categories: 'Web App • Risorse Umane • Fatturazione • Firme Digitali',
    description:
      'Sistema web per un\'azienda di topografia che aveva bisogno di tenere traccia delle ore del personale per progetto. Il collaboratore registra la sua giornata con le attività, firma digitale e, se serve, richiede straordinari che il supervisore approva. Sul lato amministrativo ci sono calendario per progetto, report per le buste paga in PDF e fatturazione mensile con IVA e ritenuta. I riepiloghi giornalieri partono via email e tutto si gestisce in dollari.',
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
      'Calcolo degli straordinari in base al giorno, ai festivi e alla pausa pranzo',
      'Firma digitale del topografo e del supervisore su ogni rapporto',
      'Fattura mensile per progetto con IVA del 13% e ritenuta dell\'1%',
      'Calendario con stato giornaliero per progetto',
      'Avviso di ore non registrate negli ultimi 7 giorni',
      'Rotazione del personale tra progetti con dettaglio mensile',
    ],
  },
  'storybox': {
    subtitle: 'Editor di storie con blocchi di programmazione visuale',
    categories: 'Web App • Educazione • Programmazione Visuale • Blockly',
    description:
      'È un\'app web per creare storie e presentazioni a scene. Si mettono sfondi, oggetti da trascinare e ridimensionare, testi con caratteri diversi e musica per ogni scena, e poi si programma cosa fa ogni oggetto con i blocchi visuali di Blockly. Ha una modalità presentazione a schermo intero, esportazione in PDF, annulla e ripeti, copia e incolla, e l\'interfaccia è in spagnolo e inglese. Tutto si salva sul server con una miniatura automatica.',
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
      '17 tipi di blocchi di movimento, aspetto e controllo',
      'Tela con drag and drop, 8 maniglie, rotazione e livelli',
      'Transizioni in 8 direzioni con 3 velocità',
      'Musica di sottofondo per scena, in loop',
      'Annulla e ripeti basati su pile',
      'Esportazione in PDF con html2canvas e jsPDF',
      'Interfaccia in spagnolo e inglese',
      'Salvataggio sul server con miniatura generata in automatico',
    ],
  },
  'konecta': {
    subtitle: 'App per le presenze dei dipendenti via QR o GPS',
    categories: 'App Mobile • Risorse Umane • QR • Geolocalizzazione • Google Maps',
    description:
      'App mobile con cui i dipendenti timbrano entrata e uscita scansionando un QR o con la posizione GPS. Ogni registrazione resta in uno storico con ricerca e si vede su una mappa di Google Maps. Si richiedono anche permessi e si segnalano incidenti con allegati, che il supervisore approva o rifiuta dal suo pannello. Uno stesso utente può appartenere a più aziende e la navigazione cambia in base al ruolo.',
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
      'Timbratura via QR o posizione GPS',
      'Mappa di Google Maps con lo storico delle posizioni',
      'Più aziende per utente, con selezione a ogni sessione',
      'Navigazione diversa per dipendente e supervisore',
      'Permessi e incidenti con allegati e approvazione',
      'Selfie del profilo con la fotocamera frontale, salvato in Base64',
    ],
  },
  'el-lobito-4pe': {
    subtitle: 'Calcolatrice di scommesse a golf per 4 giocatori',
    categories: 'App Mobile • Sport • Calcolo • React Native',
    description:
      'App mobile per tenere i conti di un gioco di scommesse a golf tra quattro amici. È una griglia di 18 buche per 4 giocatori. Si segna chi ha vinto ogni buca e l\'app calcola i punti con le regole del gioco, compresi i pareggi che si accumulano sulla buca successiva. Si imposta il prezzo per unità e i risultati escono in pesos colombiani. Non ha backend né database.',
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
      'Regole di punteggio per partite a 4 giocatori',
      'Moltiplicatori per pareggi accumulati',
      'Un solo componente, senza backend',
      'Formato in pesos colombiani con locale es-CO',
      'APK compilato pronto da installare',
      'Griglia con scorrimento orizzontale',
    ],
  },
  'casino-online': {
    subtitle: 'Casinò online con 5 giochi e puntate in tempo reale',
    categories: 'Web App • Gaming • WebSocket • Redux • Firebase',
    description:
      'Piattaforma di casinò online con cinque giochi: slot, Aviator, blackjack, roulette e Hunt the Ace. Le puntate e i risultati passano via WebSocket, così il saldo si aggiorna all\'istante. Ha depositi, prelievi con approvazione, storico delle transazioni, referral con bonus e un programma di staking. Il pannello di amministrazione mostra grafici, sessioni attive e permette di bloccare gli account.',
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
      '5 giochi con la logica del casinò scritta da zero',
      'Puntate e risultati in tempo reale con Socket.io',
      'Stack MERN con MUI, Ant Design e Bootstrap',
      'Referral con bonus automatico di $10',
      'Programma BFG Staking con rendimenti calcolati',
      'Immagini servite da ImageKit',
      'Stato globale con Redux Toolkit condiviso tra i giochi',
      'Pannello di amministrazione con grafici in tempo reale',
    ],
  },
  'saucedo-abogados': {
    subtitle: 'Gestionale per uno studio legale, con firma elettronica e IA',
    categories: 'Web App • App Mobile • Legale • IA • Firma Elettronica • Laravel',
    description:
      'Sistema di gestione per uno studio legale. Ogni caso ha le sue parti, documenti, atti processuali, note e attività, e si può assegnare a uno o più avvocati. I preventivi passano per un flusso di approvazione con tre ruoli e diventano un caso, e gli incassi hanno promemoria di scadenza. I PDF vengono indicizzati con OCR e riassunti in automatico con OpenAI, i documenti si firmano con SignNow e il calendario si sincronizza in entrambe le direzioni con Google Calendar. Il backend è in Laravel, con 48 modelli e 88 endpoint, e c\'è un\'app mobile di accompagnamento.',
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
      'OCR e riassunto automatico dei documenti con OpenAI',
      'Firma elettronica con SignNow, con validità legale',
      'Integrazione con Google Drive, Calendar e OAuth',
      '48 modelli e 88 endpoint in Laravel',
      'Preventivi con approvazione su tre ruoli',
      '6 report: casi, fatturazione, incassi, produttività, clienti e preventivi',
      'Casi organizzati in 6 schede',
      'Test end-to-end con Playwright e app mobile complementare',
    ],
  },
  'grupo-sdg': {
    subtitle: 'ERP per il Messico con fatturazione CFDI 4.0',
    categories: 'Web App • ERP • Fatturazione CFDI • Laravel 12 • SAT',
    description:
      'Sistema di gestione per un\'azienda messicana, con fatturazione elettronica CFDI 4.0. Il flusso di vendita va da preventivo a ordine, fattura, pagamento e incasso, portandosi dietro i dati da una fase alla successiva. I documenti si firmano con certificati CSD, si timbrano con un PAC e l\'RFC si verifica contro la lista nera del SAT. Ha un modulo di tesoreria con riconciliazione bancaria, politiche per le password con scadenza e quattro tabelle di audit. Il backend è in Laravel 12, con più di 40 modelli e 80 endpoint documentati in Swagger.',
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
      'Fatturazione CFDI 4.0 con timbratura PAC e certificati CSD',
      'Flusso di vendita da preventivo a incasso',
      'Verifica dell\'RFC contro la lista nera del SAT',
      '4 tabelle di audit: accessi, dati, fiscale e admin',
      'Password con scadenza e blocco',
      'Più di 40 modelli e 80 endpoint documentati con Swagger',
      'Tesoreria con riconciliazione bancaria',
      'Cataloghi ufficiali del SAT: uso CFDI, regime e forma di pagamento',
    ],
  },
  'goodbye-friend': {
    subtitle: 'Cimitero virtuale in 3D per ricordare gli animali',
    categories: 'Web 3D • App Mobile • Three.js • React Three Fiber • Stripe • Laravel',
    description:
      'Memoriale virtuale per animali domestici con un cimitero in 3D che si esplora in prima persona. Ha più di 1.075 lotti, tre stili di tomba, 57 oggetti di tributo, loculi e mausolei. Su desktop ci si muove con il pointer lock e sul telefono con joystick touch, con minimappa e collisioni. Ogni animale ha il suo profilo con biografia e foto, dove gli altri lasciano tributi e condoglianze. I piani e i tributi si pagano con Stripe, c\'è un marketplace di artisti, un\'app mobile in React Native e un backend in Laravel.',
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
      'Cimitero 3D con più di 1.075 lotti, 3 stili di tomba e 57 oggetti di tributo',
      'Pointer lock su desktop e joystick touch su mobile',
      'Rendering per distanza per tenere i 60 fps',
      'Minimappa con la posizione in tempo reale',
      'Marketplace di artisti per personalizzare i memoriali',
      'Web 3D con Three.js e R3F, app mobile in React Native e backend in Laravel',
      'Collisioni con gli oggetti del cimitero',
      'Pagamenti con Stripe: piani, tributi e pagamenti ai collaboratori',
    ],
  },
  'safetrade': {
    subtitle: 'App per vendere e seguire segnali di trading',
    categories: 'App Mobile • Fintech • Trading • Stripe • Zustand • React Query',
    description:
      'App mobile in cui i trader pubblicano segnali di trading e altri utenti si abbonano per riceverli. Il trader carica asset, direzione, take profit e stop loss, e ha una dashboard con percentuale di successo, rendimento cumulato e serie di risultati. Il cliente esplora i trader, si abbona mensilmente con Stripe e può mettere in pausa o cancellare quando vuole. Fatta con React Native, Expo, TypeScript, Zustand e React Query.',
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
      'Due ruoli con navigazione e interfaccia diverse',
      'Zustand, React Query e Zod per stato, cache e validazione',
      'Stripe nativo in React Native, senza uscire dall\'app',
      'Metriche calcolate: percentuale di successo, rendimento cumulato e serie',
      'Tutta l\'app in TypeScript',
      'Tab di Expo Router che cambiano in base al ruolo',
      'React Query con cache e aggiornamenti ottimistici',
      'Abbonamenti con addebito mensile automatico',
    ],
  },
  'biznes': {
    subtitle: 'Biglietti da visita digitali, con QR e abbonamenti',
    categories: 'Web App • SaaS • E-commerce • QR • Mercado Pago • Redux',
    description:
      'È un SaaS per creare biglietti da visita digitali e condividerli via link o QR. L\'utente carica foto, logo, bio, social e pulsanti, cambia colori e caratteri, e vede il risultato in tempo reale in formato smartphone. Ogni biglietto genera il suo QR e una vCard per salvare il contatto. Gli abbonamenti e il negozio si pagano con Mercado Pago, e il pannello mostra visite, clic, download e tempo sullo schermo.',
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
      'Abbonamenti con permessi configurabili per piano',
      'Editor con anteprima in tempo reale in formato smartphone',
      'Statistiche di visite, clic, download e tempo sullo schermo',
      'QR e vCard generati per ogni biglietto',
      'Negozio con carrello e checkout con Mercado Pago',
      'Immagini convertite in WebP con Sharp',
      'Importazione massiva di utenti e biglietti da Excel',
      'Attività pianificate con Agenda.js per far scadere gli abbonamenti',
    ],
  },
  'citamovil': {
    subtitle: 'Sito per un centro di riparazione cellulari e tablet in Spagna',
    categories: 'Web App • Servizio Tecnico • WhatsApp Bot • Next.js 14 • Grossisti',
    description:
      'Sito per un centro di assistenza che ripara cellulari, tablet e altri dispositivi in Spagna. Il cliente chiede un preventivo scegliendo categoria, marca, modello e guasti, e il prezzo cambia in base alla zona. Poi segue la riparazione con un codice di 5 cifre e riceve ogni aggiornamento via email e WhatsApp. I grossisti si registrano, l\'amministratore li approva e fanno ordini all\'ingrosso con indirizzo di ritiro. I contenuti del sito si modificano dal pannello senza toccare il codice.',
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
      'Prezzi per modello, guasto e zona',
      'Bot WhatsApp con whatsapp-web.js, senza servizi a pagamento',
      'Avvisi automatici via email e WhatsApp',
      'Grossisti con registrazione, approvazione e tracciamento dedicato',
      'Listino prezzi con drag and drop ed esportazione in PDF',
      'Tutti i contenuti modificabili dal pannello',
    ],
  },
}
