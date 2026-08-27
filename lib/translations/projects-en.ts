import type { ProjectI18n } from './types'

export const en: Record<string, ProjectI18n> = {
  'cap-medical': {
    subtitle: 'Mobile app for managing medical services and surgeries',
    categories: 'Mobile App • React Native • Multi-Module',
    description:
      'A mobile app for a company that manages surgical services. From the phone, users create services in three steps, follow their status, log movements with GPS location and attachments, and record payments and counter-receipts. It also has a directory of technicians, hospitals and medical centers, patient records and notifications. Permissions depend on each user\'s role.',
    features: [
      {
        title: 'Service Management',
        items: [
          'Listing with status filter and search',
          'Creation in 3 steps with dynamic catalogs',
          'Movements with GPS geolocation and attachments',
          'Payments, counter-receipts, and change history',
        ],
      },
      {
        title: 'Technician Directory',
        items: [
          'Searchable directory with alphabetical grouping',
          'Filter by role (assistant, lead)',
          'Detailed profile with employment data',
        ],
      },
      {
        title: 'Location Management',
        items: [
          'Hospitals and medical centers with search',
          'Complete details with address and contact',
          'Filter by active/inactive status',
        ],
      },
    ],
    integrationUses: [
      'Interactive maps for hospital and service locations',
      'GPS coordinates when recording movements',
      'Photo and video capture to attach to records',
      'QR code generation',
      'Charts and data visualization',
    ],
    highlights: [
      'Role-based permissions',
      'Service creation in 3 steps with dynamic catalogs',
      '10 screens per service',
      'Movements with automatic GPS location',
      'History of every change',
      'Whole app in TypeScript',
    ],
  },
  'petnder': {
    subtitle: 'An app for pet owners, with adoption and nearby services',
    categories: 'Mobile App • React Native • Pet Marketplace',
    description:
      'A mobile app for people with pets. From there they look up pet-friendly services by category, adopt animals using filters and chat, and report lost pets with a location. Businesses come in through a separate profile with its own navigation, where they add services with a map and hours, set up coupons with QR codes and check their stats. It has real-time chat, push notifications and communities with roles and moderation.',
    features: [
      {
        title: 'For Users',
        items: [
          'Explore pet-friendly services by categories',
          'Pet adoption with filters and chat',
          'Lost pet reports with location',
          'Benefits, coupons, and foundations',
        ],
      },
      {
        title: 'For Businesses',
        items: [
          'Service management with maps and schedules',
          'Coupons with QR and usage statistics',
          'Digital wallet with balance and history',
          'Communities with roles and moderation',
        ],
      },
      {
        title: 'General',
        items: [
          'Animated onboarding with Reanimated',
          'Real-time chat',
          'Push notifications',
          'Integrated maps with Google Maps',
        ],
      },
    ],
    integrationUses: [
      'Service location and position selector',
      'Push alerts about adoptions and messages',
      'QR codes for coupons and discounts',
      'Business statistics and performance',
    ],
    highlights: [
      'Two separate profiles, one for users and one for businesses',
      'Adoption with filters and chat between both sides',
      'Communities with roles and content moderation',
      'Digital wallet with balance and history for businesses',
      'Achievements to gamify usage',
      'Animated onboarding with Reanimated',
    ],
  },
  'controla2': {
    subtitle: 'ERP for construction and engineering companies in Chile',
    categories: 'SaaS • ERP • Electronic Billing',
    description:
      'A web ERP built for construction and engineering firms that want everything in one place. It covers projects with budgets and Gantt charts, HR with payroll calculation, electronic invoicing, purchasing, inventory and risk prevention. It follows Chilean regulations (AFP, ISAPRE, DTE, RUT) and has eight roles with approval workflows.',
    features: [
      {
        title: 'Projects and Planning',
        items: [
          'Budgets and interactive Gantt timelines',
          'Progress tracking and deviation control',
          'Technical office with man-hours and production',
        ],
      },
      {
        title: 'HR and Payroll',
        items: [
          'Complete employee lifecycle',
          'Automatic payroll calculation (AFP, ISAPRE)',
          'Vacations, advances, and severance',
        ],
      },
      {
        title: 'Billing and Procurement',
        items: [
          'Electronic tax documents',
          'Complete procurement and quotation flow',
          'Stock control with traceability',
        ],
      },
    ],
    integrationUses: [
      'System infrastructure and hosting',
      'Electronic billing with Chilean regulations',
      'Alerts in approval workflows',
    ],
    highlights: [
      'Dashboard with real-time metrics',
      'Generates PDF, Excel and CSV files automatically',
      '8 predefined roles with approval workflows',
      'Follows Chilean regulations (AFP, ISAPRE, DTE, RUT)',
      'SSOMA module for risk prevention',
      'Instant alerts whenever something needs approval',
    ],
  },
  'alhambra': {
    subtitle: 'Website for Alhambra tour guides, in 7 languages',
    categories: 'Web App • Tourism • Admin Panel • Multilingual',
    description:
      'A site for a tour guide company in Granada, Spain, that runs visits to the Alhambra. Each tour has its own page, bookings arrive by email from a form and there is direct contact through WhatsApp. It is translated automatically into 7 languages. The owner manages tours and the blog from the panel, and edits the text by clicking on it right on the page.',
    features: [
      {
        title: 'For the Visitor',
        items: [
          'Tour circuit exploration with dedicated pages',
          'Integrated reservation system with complete form',
          'News blog with enriched content',
          'Automatic translation into 7 languages',
          'Direct contact via WhatsApp',
        ],
      },
      {
        title: 'Administration Panel',
        items: [
          'Circuit management with rich text editor',
          'Blog management with images and advanced formatting',
          'Live text editing by clicking on them',
          'Secure access system',
        ],
      },
    ],
    integrationUses: [
      'Direct contact with one click',
      'Reservation reception via email',
      'Automatic translation to multiple languages',
      'Link and banner to the company profile',
      'Integration with the guide\'s profile',
    ],
    highlights: [
      'All content managed without technical help',
      'Text editable by clicking on the page',
      'Server-side rendering for SEO',
      '7 languages for international tourism',
      'Bookings by email and contact through WhatsApp',
      'JWT, encrypted passwords and roles',
    ],
  },
  'biznes-empresa': {
    subtitle: 'Digital cards for every employee in a company',
    categories: 'Web App • SaaS • Digital Cards • Roles',
    description:
      'The corporate version of Biznes. A company signs up with its logo and branding, invites its employees by email or with an Excel file, and builds their digital cards from templates that carry the brand identity. Each card has its own QR code, vCard and link. Roles define who can edit what, and the stats for visits, clicks and downloads are all shown together in charts.',
    features: [
      {
        title: 'Corporate Management',
        items: [
          'Company registration and profile with logo and branding',
          'Employee invitations by email or bulk Excel upload',
          'Custom roles with granular permissions',
          'Corporate memberships with configurable limits',
        ],
      },
      {
        title: 'Digital Cards',
        items: [
          'Corporate templates with brand design',
          'Complete visual editor with real-time preview',
          'Automatic QR code and downloadable vCard',
          'Custom link for each card',
        ],
      },
      {
        title: 'Statistics',
        items: [
          'Visits per card with device breakdown',
          'Social media and email clicks',
          'vCard downloads and contacts added',
          'Interactive charts (bar, line, pie)',
        ],
      },
    ],
    integrationUses: [
      'Email invitations and notifications',
      'Automatic QR code generation',
      'Downloadable contact files',
      'Real-time communication',
      'Interactive charts for statistics',
      'Image optimization to WebP',
    ],
    highlights: [
      'All corporate management from a single panel',
      'Branded templates that apply on their own',
      'Roles and permissions per employee',
      'Bulk employee onboarding from Excel',
      'Stats for every card in charts',
      'Real-time updates with WebSockets',
    ],
  },
  'blackphone': {
    subtitle: 'Website for a phone repair shop in Spain',
    categories: 'Web App • E-commerce • WhatsApp Bot • Admin Panel',
    description:
      'A website and management system for a phone repair shop in Spain. The customer picks the model and the faults, sees the price right away and then tracks the repair with a 5-digit code. Every status change reaches them by email and WhatsApp. There is a separate flow for wholesalers, with approval and bulk orders, and an admin panel to manage prices, models, faults, statuses and the blog.',
    features: [
      {
        title: 'For the Customer',
        items: [
          'Automatic repair quoter by model and fault',
          'Multiple fault selection with real-time pricing',
          'Repair tracking with 5-digit code',
          'Automatic notifications via email and WhatsApp',
        ],
      },
      {
        title: 'Wholesale System',
        items: [
          'Registration and approval of wholesale businesses',
          'Bulk repair requests',
          'Independent tracking with own code',
          'Differentiated pricing by zone',
        ],
      },
      {
        title: 'Administration Panel',
        items: [
          'Dynamic price table with drag & drop',
          'Management of categories, brands, models, and faults',
          'Custom repair statuses with notifications',
          'Blog with rich text editor and editable content',
          'PDF export of price tables',
        ],
      },
    ],
    integrationUses: [
      'Automatic messages when creating orders or changing status',
      'Emails with HTML templates to customer and admin',
      'Downloadable PDFs with price tables',
      'Real customer reviews on the homepage',
      'Drag & drop to reorder models',
    ],
    highlights: [
      'Quote calculator by model, fault and zone',
      'Email and WhatsApp alerts on every status change',
      'Custom WhatsApp bot, no paid services',
      'Wholesalers with their own order flow',
      'Editable price table, exportable to PDF',
      'Real provinces and towns from Spain',
    ],
  },
  'casepe': {
    subtitle: 'Institutional site for an oil industry chamber, edited live',
    categories: 'Institutional Web • Live CMS • Blog • Next.js 14',
    description:
      'A website for CASEPE, the chamber that brings together special oil operations companies in Argentina. What makes it different is that there is no separate panel for content. When the admin is logged in, they click on any text or image on the page and change it right there, and they can also add or remove items in each section. It has a news blog with related articles and a contact form that arrives by email.',
    features: [
      {
        title: 'For the Visitor',
        items: [
          'Hero with background image and institutional section with gallery',
          'Interactive services with item navigation',
          'History, vision, environmental commitment, and locations',
          'News blog with related articles',
          'Contact form with automatic email sending',
        ],
      },
      {
        title: 'Live Editing',
        items: [
          'Editable texts by clicking directly on the page',
          'Replaceable images without leaving the page',
          'Add and remove items in any section',
          'Integrated rich text editor',
        ],
      },
      {
        title: 'Administration Panel',
        items: [
          'Blog management with rich text editor',
          'Tags and related articles',
          'Secure login',
        ],
      },
    ],
    integrationUses: [
      'Contact messages with professional HTML template',
      'Scroll-triggered appearance animations',
      'Smooth navigation to sections',
      'Rich text editor for inline content',
    ],
    highlights: [
      'Live editing, no separate panel',
      'Nested properties updated with Lodash',
      'Sections where items get added and removed from the site itself',
      'Blog with tags and related articles',
      'Contact emails with an HTML template',
      'Scroll animations on every section',
    ],
  },
  'dental-digital': {
    subtitle: 'Management system for dental clinics, with AFIP invoicing',
    categories: 'SaaS • AFIP Billing • Dental Chart • Mercado Pago',
    description:
      'A SaaS for dentists and clinics in Argentina. It has patient records with health insurance, appointments on a calendar, a per-tooth dental chart, estimates that turn into invoices and consent forms with digital signature. It issues electronic invoices through ARCA/AFIP (types A, B and C, with credit and debit notes) and sends the PDF by email or WhatsApp. Subscriptions are charged through Mercado Pago and each clinic can have several professionals with roles.',
    features: [
      {
        title: 'Clinical Management',
        items: [
          'Complete patient records with health insurance',
          'Interactive calendar with monthly, weekly, and daily views',
          'Visual dental chart with per-tooth records and PDF export',
          'Detailed budgets convertible to invoices',
          'Consent documents with digital signature',
        ],
      },
      {
        title: 'Electronic Billing',
        items: [
          'Issuance of Invoices, CN, and DN type A, B, and C with ARCA/AFIP',
          'Automatic CAE and VAT calculation (0%, 10.5%, 21%, 27%)',
          'RSA and CSR certificate generation for AFIP',
          'Invoice PDF with email and WhatsApp delivery',
        ],
      },
      {
        title: 'SaaS and Administration',
        items: [
          'Monthly/annual subscriptions with Mercado Pago',
          'Multiple clinics and professionals with roles',
          'Dashboard with Chart.js graphs',
          'Complete backup and intelligent restoration',
        ],
      },
    ],
    integrationUses: [
      'Electronic billing with valid CAE',
      'Recurring subscriptions with automatic webhooks',
      'Invoice sending and WhatsApp notifications',
      'Emails with invoice PDFs and password verification',
      'Charts for treatments, budgets, and appointments',
      'Interactive appointment calendar',
      'Dental chart export to PDF',
    ],
    highlights: [
      'Electronic invoicing with ARCA/AFIP and CAE',
      'Generates the RSA and CSR certificates to link with AFIP',
      'Per-tooth dental chart with PDF export',
      'Subscriptions with Mercado Pago and webhooks',
      'Several users per clinic with owner, professional and admin roles',
      'Full JSON backup with restore',
    ],
  },
  'sunchales-pos': {
    subtitle: 'Business management and point of sale with AFIP invoicing',
    categories: 'SaaS • POS • AFIP Billing • Barcode',
    description:
      'A web business management system for shops in Argentina. You load products with barcodes, record sales and purchases, and keep track of stock and raw materials. It issues electronic invoices through ARCA/AFIP, turns quotes into sales and handles warranties and returns. Access is charged as a subscription through Mercado Pago.',
    features: [
      {
        title: 'Sales and Billing',
        items: [
          'Sales recording with automatic VAT calculation',
          'Quick sale without registered customer',
          'Electronic billing with ARCA/AFIP and CAE',
          'Budget to sale conversion directly',
          'Invoice PDF with email delivery',
        ],
      },
      {
        title: 'Products and Stock',
        items: [
          'Catalog with barcode per product',
          'Stock control updated in real time',
          'Raw materials with independent inventory',
          'Differentiated physical products and services',
        ],
      },
      {
        title: 'Commercial Management',
        items: [
          'Complete customer and supplier records',
          'Budgets with configurable statuses and validity',
          'Warranty and return system (RMA)',
          'Dashboard with sales and purchase charts',
        ],
      },
    ],
    integrationUses: [
      'Electronic billing with valid CAE',
      'Recurring subscriptions for system access',
      'Emails with invoice PDFs and shipping notifications',
      'Sales, purchase, and report charts',
      'Barcode generation and display',
      'Direct printing of invoices and labels',
      'PDF generation for invoices and budgets',
    ],
    highlights: [
      'Purchases, stock, sales, invoicing and reports in one place',
      'Electronic invoicing with ARCA/AFIP and CAE',
      'Barcodes generated and scanned from the system',
      'Warranties and returns (RMA) with tracking',
      'Quotes that turn into sales',
      'Configurable SMTP per user for sending invoices',
    ],
  },
  'fuku-shop': {
    subtitle: 'Online store for anime and streetwear clothing, from Rafaela',
    categories: 'E-commerce • Next.js • Mercado Pago • Cloudinary',
    description:
      'An online store for a clothing brand from Rafaela, Santa Fe, with an anime, Asian and video game style. Every product has color variants with their own photos, a size chart with real measurements and zoom in the gallery. You can filter by category, type, color, size and price, pay with Mercado Pago, and users have order history, addresses and reviews. The admin panel is where the whole catalog gets loaded.',
    features: [
      {
        title: 'Online Store',
        items: [
          'Catalog with combined filters (category, type, color, size, price)',
          'Color variants with own images (front, back, body)',
          'Image zoom on hover',
          'Size chart with real measurements',
          'Shopping cart and checkout with Mercado Pago',
        ],
      },
      {
        title: 'User Account',
        items: [
          'Registration and login with email or Google',
          'Purchase history',
          'Multiple shipping addresses',
          'Product reviews and ratings',
          'Internal notifications',
        ],
      },
      {
        title: 'Administration Panel',
        items: [
          'Product CRUD with color variants and images',
          'Color management with hex code',
          'Categories, subcategories, types, and garment subtypes',
          'Sizes with configurable measurements',
        ],
      },
    ],
    integrationUses: [
      'Payment processing for purchases',
      'Cloud image storage and optimization',
      'Real-time communication',
      'Contact messages via email',
      'Global state (cart, authentication, filters)',
      'Intelligent server data caching',
      'Automatic XML sitemap generation for SEO',
    ],
    highlights: [
      'Color variants with their own photos',
      'Combined filters by category, type, color, size and price',
      'Static generation with incremental revalidation for SEO',
      'Auto-generated XML sitemap',
      'Images on Cloudinary',
      'Categories with subcategories, types and subtypes',
    ],
  },
  'julian-winners': {
    subtitle: 'Online raffles with digital tickets and Mercado Pago payments',
    categories: 'Web App • Raffles • Mercado Pago • Referrals',
    description:
      'A platform for selling online raffle tickets in Colombia. The user buys ticket packs with Mercado Pago, gets random non-repeating numbers and receives the invoice as a PDF by email. It has a cart for several raffles, referrals with points, moderators who assign tickets by hand for in-person sales and a tool to pick the winner by number. Text, images and even the Mercado Pago and SMTP credentials are set from the panel.',
    features: [
      {
        title: 'For the User',
        items: [
          'Raffle catalog with ticket packs and prices',
          'Shopping cart with packs from multiple raffles',
          'Randomly generated ticket numbers without duplicates',
          'Invoice PDF by email with ticket details',
          'Referral system with link and point accumulation',
        ],
      },
      {
        title: 'Administration Panel',
        items: [
          'Raffle management with packs, images, and featured items',
          'Manual ticket assignment (in-person sales)',
          'Winner selection by searching ticket number',
          'Purchase history with Excel export',
          'Moderators for in-person sales',
        ],
      },
      {
        title: 'Editable Content',
        items: [
          'Editable texts, images, and business data',
          'Mercado Pago and SMTP configuration from the panel',
          'Editable terms and conditions',
        ],
      },
    ],
    integrationUses: [
      'Payments with webhooks for automatic ticket assignment',
      'Invoices by email with HTML template and PDF link',
      'Downloadable invoice PDF generation',
      'User and history export to Excel',
      'Global state (cart, user, raffles)',
    ],
    highlights: [
      'Random non-repeating tickets, formatted to the raffle\'s total',
      'Mercado Pago webhooks with duplicate checks',
      'Manual assignment by moderators for in-person sales',
      'Winner picked by ticket number',
      'Excel export of users, purchases and invoices',
      'Three roles: user, moderator and admin',
    ],
  },
  'limcal': {
    subtitle: 'Wholesale online store for cleaning products',
    categories: 'E-commerce • Mercado Pago • Resellers • CMS',
    description:
      'An online store for LIMCAL, an Argentine cleaning products company that sells to businesses. Accounts sign up with a CUIT and someone on the team approves them before they can buy. Every product has a minimum order, payment goes through Mercado Pago and the order gets recorded on its own via webhook. There is a reseller map with Google Maps filterable by province and city, and the site content is edited from the panel.',
    features: [
      {
        title: 'Online Store',
        items: [
          'Paginated catalog with category filters and search',
          'Configurable minimum purchase per product',
          'Cart with multiple shipping addresses',
          'Payment with Mercado Pago and automatic webhook registration',
          'Order tracking with email notification',
        ],
      },
      {
        title: 'Resellers',
        items: [
          'Reseller map with embedded Google Maps',
          'Filter by province, city, and name',
          'Informational page for new resellers',
        ],
      },
      {
        title: 'Administration Panel',
        items: [
          'Product, category, and order management',
          'Manual user account approval',
          'Contact messages with direct email response',
          'Editable content with Lodash for nested properties',
          'Moderators with differentiated permissions',
        ],
      },
    ],
    integrationUses: [
      'Cart payments with automatic webhooks (ARS)',
      'Contact, client responses, and order notifications',
      'Embedded map for each reseller',
      'Visit and behavior tracking',
      'Rich text editor for policies and sections',
      'Scroll-triggered appearance animations',
    ],
    highlights: [
      'Accounts approved by hand before they can buy',
      'Minimum order per product, built for wholesale',
      'Reseller map with Google Maps, filterable by area',
      'Reply to contact messages from the panel',
      'Editable content with nested properties',
      'Orders recorded automatically with Mercado Pago webhooks',
    ],
  },
  'limcal-pos': {
    subtitle: 'Desktop sales and invoicing system, built with Electron',
    categories: 'Desktop App • Electron • AFIP Billing • IndexedDB',
    description:
      'A desktop program for LIMCAL\'s business management that replaced an old FoxPro system. It handles products, sales, purchases, stock, raw materials and resellers with commission or discount. It issues A and B invoices through ARCA/AFIP, credit notes, delivery notes in PDF and the VAT ledger. The database is local with IndexedDB, so it works without a server or an internet connection.',
    features: [
      {
        title: 'Sales and Billing',
        items: [
          'Electronic billing Invoice A and B with ARCA/AFIP',
          'Credit Notes type A and B linked to invoices',
          'Downloadable delivery notes in PDF',
          'VAT ledger for sales and purchases',
          'Automatic discounts by reseller and by customer',
        ],
      },
      {
        title: 'Commercial Management',
        items: [
          'Bulk product import from Excel',
          'Bulk price changes',
          'Stock and raw materials control',
          'Resellers with configurable discount or commission',
          'Statistics by day, customer, product, and cross-reference',
        ],
      },
      {
        title: 'System',
        items: [
          'Local database with IndexedDB (no server)',
          'Users with configurable roles and permissions',
          'Complete JSON backup and restoration',
          'Migration from FoxPro (Husky POS)',
        ],
      },
    ],
    integrationUses: [
      'Electronic billing with CAE (Invoice A/B, CN A/B)',
      'Local database without external server',
      'Product and data import and export',
      'Invoices, credit notes, and delivery notes in PDF',
      'Download of backups, PDFs, and Excel files',
    ],
    highlights: [
      'Desktop app with Electron, works offline',
      'Local database with IndexedDB',
      'A and B invoices and credit notes with AFIP',
      'Reseller discount or commission applied at invoicing',
      'Product import and bulk price changes from Excel',
      'Data migration from FoxPro (Husky POS)',
    ],
  },
  'movilprint': {
    subtitle: 'Online design editor for sending to print',
    categories: 'Web App • Visual Editor • Drag & Drop • Social Login',
    description:
      'A website for putting together custom designs and sending them to print. The user picks a template and goes into an editor where they drag text with over 15 fonts, images and decorative elements, then resize, rotate and arrange them in layers. When they are done, they submit the design and it stays saved in their account. It has login with Google and Facebook, loyalty points and a panel for managing templates and reviewing the designs that come in.',
    features: [
      {
        title: 'Visual Editor',
        items: [
          'Interactive canvas with drag and drop',
          'Texts with 15+ fonts, size, color, bold, italic',
          'Images and decorative elements per template',
          'Resize, rotate, copy, and paste elements',
          'Layer system (z-index) for depth',
          'Preview and direct printing from the browser',
        ],
      },
      {
        title: 'For the User',
        items: [
          'Registration with email, Google, or Facebook',
          'Template selection with preview',
          'My saved designs with history',
          'Loyalty points system',
          'Password recovery by email',
        ],
      },
      {
        title: 'Administration Panel',
        items: [
          'Template management with dimensions in cm',
          'Resources per template (shapes and images)',
          'Received designs management',
          'Moderators for design review',
        ],
      },
    ],
    integrationUses: [
      'Login with Google account',
      'Login with Facebook account via Graph API',
      'Payment processing',
      'Verification codes for password recovery',
      'Drag and drop elements in the editor',
    ],
    highlights: [
      'Editor with an interactive canvas and drag and drop',
      'Templates with dimensions in cm and their own assets',
      'Over 15 fonts with style controls',
      'Layers to arrange element depth',
      'Login with Google and Facebook',
      'Designs saved to the database with all their elements',
    ],
  },
  'padel': {
    subtitle: 'Padel tournaments, results and rankings',
    categories: 'Web App • Sports • Ranking • Next.js 15',
    description:
      'A site for organizing and following padel tournaments. The public sees the tournament calendar, the circuit by category, match-by-match results with sets and the ranking by gender and category. They can also look up a player and see their position. A moderator loads matches and results, and the admin manages tournaments, players, clubs and categories.',
    features: [
      {
        title: 'For the Public',
        items: [
          'Tournament calendar with location and contact',
          'Circuit organized by category with all dates',
          'Tournament results with matches and sets',
          'Player ranking by category and gender',
          'Player search with position and top 5',
        ],
      },
      {
        title: 'Administration Panel',
        items: [
          'Tournament management with date, gender, and category',
          'Player management with club, category, and points',
          'Category and club management',
          'User administration with roles',
        ],
      },
      {
        title: 'Moderator Panel',
        items: [
          'Match entry with teams and set results',
          'Editing existing matches',
          'Player and tournament creation',
        ],
      },
    ],
    integrationUses: [],
    highlights: [
      'Circuit built automatically by category',
      'Ranking by category and gender that updates on its own',
      'Singles and team matches with results by set',
      'Tournament status changes based on the matches loaded',
      'Three access levels: public, moderator and admin',
      'Soft delete on categories so they can be restored',
    ],
  },
  '4me': {
    subtitle: '3D foot scanning and custom orthopedic footwear',
    categories: 'Mobile App • Web Admin • 3D Scanning • Stripe',
    description:
      'A system for podiatrists who make custom orthopedic footwear. From the mobile app they take photos of the foot from several angles, the photos upload to Google Drive with real-time progress and a Metashape process turns them into a 3D model. With that model they set up a project by choosing the shoe model, color, sole and insole, which goes through 12 statuses with an email on every change. The web panel shows the feet in 3D and payments go through Stripe in US dollars.',
    features: [
      {
        title: 'Mobile App (Podiatrist)',
        items: [
          'Foot scanning with camera (multiple angles)',
          'Bulk upload with real-time progress via WebSocket',
          '3D foot model visualization',
          'Create project choosing model, color, sole, and insole',
          'Tracking of 12 project statuses',
        ],
      },
      {
        title: 'Web Panel (Admin)',
        items: [
          'Management of clinics, podiatrists, patients, and projects',
          '3D visualization with Google Model Viewer',
          'Footwear model management with colors',
          'Status updates with email notification',
        ],
      },
      {
        title: '3D Processing',
        items: [
          'Photos processed with Agisoft Metashape (Python)',
          'Images stored on Google Drive by patient',
          'Cron job to check processing status',
          'Automatic cleanup of previous scans',
        ],
      },
    ],
    integrationUses: [
      'Automatic payment links for projects in USD',
      'Photo storage organized by patient',
      'Photogrammetric processing for 3D models',
      '3D foot visualization in the browser',
      'Real-time image upload progress',
      'Status emails and payment links',
      'Photo capture from the mobile app',
    ],
    highlights: [
      '3D foot scan from the phone, processed with Metashape',
      'Bulk upload to Google Drive with real-time progress',
      '3D models (GLB) viewable in the browser',
      '12 project statuses with an email on every change',
      'Stripe payment link in USD per project',
      'Three coordinated parts: mobile app, web panel and server',
    ],
  },
  'trewa-club': {
    subtitle: 'Ticket sales for parties, with QR codes and AFIP invoicing',
    categories: 'Web App • Events • AFIP Billing • QR • Mercado Pago',
    description:
      'A platform for selling tickets to nightlife events. The user pays with Mercado Pago, gets a ticket with a QR code and the AFIP electronic invoice goes out on its own with every purchase. There are ticket types with quotas and batches, discount codes, points redeemable for products and login with Google or Facebook. At the door, QR codes get scanned with double-scan protection, and resellers have their own link and stats.',
    features: [
      {
        title: 'For the User',
        items: [
          'Event catalog with ticket types (General, VIP, Early Bird)',
          'Discount codes (fixed or percentage) with quota and expiration',
          'Tickets with unique QR code for door scanning',
          'Automatic electronic invoice with AFIP on each purchase',
          'Points system ($1000 = 1 point) redeemable for products',
          'Login with Google, Facebook, or email',
        ],
      },
      {
        title: 'Administration Panel',
        items: [
          'Per-event analysis: sales, gender, age, peak hours, batches',
          'QR ticket scanning with anti-double-scan validation',
          'Bulk ticket generation (complimentary)',
          'Reseller management with detailed statistics',
          'User search with purchase history',
        ],
      },
      {
        title: 'Reseller System',
        items: [
          'Own link for associated sales',
          'Statistics per reseller and per event',
          'Top reseller and best-selling event',
        ],
      },
    ],
    integrationUses: [
      'Payments with automatic webhooks (ARS)',
      'Automatic Invoice B with CAE on each purchase',
      'Login with Google account',
      'Login with Facebook account',
      'QR codes for tickets and door scanning',
      'Purchase confirmation, points, and recovery',
    ],
    highlights: [
      'AFIP electronic invoice on every purchase',
      'Ticket types with their own batches, quotas and sale windows',
      'QR scanning with double-scan protection and a 6-hour margin',
      'Points redeemable for catalog products',
      'Per-event analysis: gender, age, peak hours and batches',
      'Five roles: user, cashier, operator, reseller and admin',
    ],
  },
  'nodominium': {
    subtitle: 'Static site for a cultural center in El Salvador',
    categories: 'Static Site • HTML/CSS/JS • Bitcoin • Google Maps',
    description:
      'A site for Casa de Nodominium, an education and culture center in Playa Las Tunas, El Salvador. It shows events in a swipeable slider with lightboxes for details and sponsors, the center\'s history, a Google Maps map and a contact form that runs on FormSubmit. It takes Bitcoin donations through a QR code. Plain HTML, CSS and JavaScript, no backend.',
    features: [
      {
        title: 'Site Content',
        items: [
          'Event slider with touch support (swipe)',
          'Lightboxes with description, features, and sponsors',
          'Center presentation with vision and activities',
          'Interactive Google Maps map with location',
          'Functional contact form with FormSubmit',
          'Bitcoin donations with scannable QR code',
        ],
      },
      {
        title: 'Design and UX',
        items: [
          'CSS animations (fadeInUp, zoomIn, float, slide-in)',
          'Fixed bottom navigation on all pages',
          'Responsive with breakpoints at 480px, 768px, and 1024px',
          'Dark gradients with orange/gold accents',
        ],
      },
    ],
    integrationUses: [
      'Interactive map with center location',
      'Contact form without backend',
      'Cryptocurrency donations with QR code',
      'Iconography throughout the interface',
    ],
    highlights: [
      'Static site, no server or database',
      'Event slider with swipe on mobile',
      'Lightboxes with each event\'s details',
      'Bitcoin donations with a QR code',
      'Pure CSS animations, no libraries',
      'Contact form with FormSubmit',
    ],
  },
  'mdt-ingenieros': {
    subtitle: 'Time and project tracking for a surveying company',
    categories: 'Web App • HR • Billing • Digital Signatures',
    description:
      'A web system for a surveying company that needed to track its people\'s hours per project. Each worker logs their day with activities and a digital signature and, if needed, requests overtime for the supervisor to approve. On the admin side there is a calendar per project, payroll reports in PDF and monthly invoicing with VAT and withholding. Daily summaries go out by email and everything is handled in US dollars.',
    features: [
      {
        title: 'For the Employee',
        items: [
          'Workday recording with activities, schedules, and digital signatures',
          'Overtime request with reason and approval',
          'Entry history and request status',
          'Internal notifications for approvals and assignments',
        ],
      },
      {
        title: 'Administration Panel',
        items: [
          'Projects with weekly schedule and hourly rates',
          'Visual calendar with daily statuses per project',
          'Overtime approval with automatic update',
          'Monthly billing with VAT (13%) and withholding (1%)',
          'Payroll and salary reports broken down by project',
          'Staff rotation and unregistered hours monitoring',
        ],
      },
      {
        title: 'Reports and PDFs',
        items: [
          'Daily summary PDF sent by email to supervisor',
          'Downloadable monthly payroll report',
          'Monthly invoice per project with cost breakdown',
          'Overtime calendar in PDF',
        ],
      },
    ],
    integrationUses: [
      'Daily summaries, overtime, and invoices by email with PDF attachment',
      'Professional A4 PDFs for summaries, payroll, and invoices',
      'Calculation of hours worked, overtime, and lunch deduction',
      'Digital signature upload',
    ],
    highlights: [
      'Overtime calculated by day, holiday and lunch deduction',
      'Digital signatures from the surveyor and the supervisor on every report',
      'Monthly invoice per project with 13% VAT and 1% withholding',
      'Calendar with daily status per project',
      'Alerts for unlogged hours in the last 7 days',
      'Staff rotation between projects with a monthly breakdown',
    ],
  },
  'storybox': {
    subtitle: 'Story editor with visual programming blocks',
    categories: 'Web App • Education • Visual Programming • Blockly',
    description:
      'A web app for building stories and presentations out of scenes. You add backgrounds, objects you can drag and resize, text in different fonts and music per scene, then program what each object does using Blockly visual blocks. It has a fullscreen presentation mode, PDF export, undo and redo, copy and paste, and the interface is in Spanish and English. Everything is saved to the server with an automatic thumbnail.',
    features: [
      {
        title: 'Scene Editor',
        items: [
          'Unlimited scenes with sidebar thumbnail panel',
          'Cover scene with background carousel and automatic title',
          'Reorder scenes with drag & drop',
          'Color backgrounds (HSL) or image from library/custom upload',
        ],
      },
      {
        title: 'Objects and Texts',
        items: [
          'Object library by categories + custom upload',
          'Drag & drop, resize (8 points), rotation, and layers (z-index)',
          '5 fonts, 6 sizes, bold/italic/underline, and HSL color',
          'Narration mode fixed at the bottom of the scene',
        ],
      },
      {
        title: 'Visual Programming (Blockly)',
        items: [
          '5 movement blocks: right, left, up, down, follow',
          '7 appearance blocks: grow, shrink, rotate, comment, sound, show, hide',
          '2 control blocks: repeat and stop',
          'Automatic sequential execution during presentation',
        ],
      },
      {
        title: 'Multimedia and Export',
        items: [
          'Per-scene background music with library and MP3 upload',
          '8 transition directions with 3 speeds',
          'Fullscreen presentation with navigation',
          'PDF export (html2canvas + jsPDF) and direct printing',
        ],
      },
    ],
    integrationUses: [
      'Visual block programming engine for object behavior',
      'Scene capture as image for PDFs and thumbnails',
      'Exportable PDF document generation',
      'Reorder scenes and blocks with drag & drop',
      'Free positioning of objects in the scene',
      'HSL color picker for backgrounds and texts',
      'Panel and interface animations',
      'Visual action notifications',
    ],
    highlights: [
      '17 block types for movement, appearance and control',
      'Canvas with drag and drop, 8 grab handles, rotation and layers',
      'Transitions in 8 directions at 3 speeds',
      'Background music per scene, on loop',
      'Stack-based undo and redo',
      'PDF export with html2canvas and jsPDF',
      'Interface in Spanish and English',
      'Saved to the server with an auto-generated thumbnail',
    ],
  },
  'konecta': {
    subtitle: 'Employee attendance app using QR or GPS',
    categories: 'Mobile App • HR • QR • Geolocation • Google Maps',
    description:
      'A mobile app for employees to clock in and out by scanning a QR code or using their GPS location. Every record goes into a searchable history and shows up on a Google Maps map. Employees can also request leave and report incidents with attachments, which the supervisor approves or rejects from their panel. One user can belong to several companies and the navigation changes with the role.',
    features: [
      {
        title: 'For the Employee',
        items: [
          'Attendance registration by QR or GPS geolocation',
          'Real-time status (pending, entry, exit)',
          'Paginated attendance history with search and filters',
          'Map view with location markers for records',
          'Leave requests with reason, dates, and attachments',
          'Selfie for profile photo with front camera',
        ],
      },
      {
        title: 'For the Supervisor',
        items: [
          'Operations panel with leave management',
          'Approval or rejection of employee requests',
          'Advanced employee/company association configuration',
        ],
      },
      {
        title: 'Authentication and Security',
        items: [
          'Login with document and company verification code',
          'Support for multiple companies per user',
          'Session tokens with expiration detection',
          'Password recovery by email',
        ],
      },
    ],
    integrationUses: [
      'Interactive map with attendance record locations',
      'Selfie capture for profile photo',
      'QR code scanning for attendance registration',
      'GPS geolocation for attendance registration',
      'Attach documentation to leave requests',
      'QR confirmation code generation after registration',
    ],
    highlights: [
      'Clock in by QR code or GPS location',
      'Google Maps map with the location history',
      'Several companies per user, chosen per session',
      'Different navigation for employee and supervisor',
      'Leave and incidents with attachments and approval',
      'Profile selfie with the front camera, stored in Base64',
    ],
  },
  'el-lobito-4pe': {
    subtitle: 'Golf betting calculator for 4 players',
    categories: 'Mobile App • Sports • Calculation • React Native',
    description:
      'A mobile app for keeping score in a golf betting game between four friends. It is a grid of 18 holes by 4 players. You mark who won each hole and the app works out the points using the game\'s rules, including ties that carry over to the next hole. You set the price per unit and the results come out in Colombian pesos. No backend or database.',
    features: [
      {
        title: 'Game Mechanics',
        items: [
          'Interactive grid of 18 holes x 4 players (A, B, C, D)',
          'Cell marking with green visual feedback',
          'Automatic point calculation with conditional rules',
          'Cumulative ties that multiply the next hole',
        ],
      },
      {
        title: 'Results and Configuration',
        items: [
          'Configurable price per unit as multiplier',
          'Results in Colombian pesos (COP)',
          'Negative results highlighted in red',
          'Clear button to reset the game',
        ],
      },
    ],
    integrationUses: [],
    highlights: [
      'Scoring rules for 4-player rounds',
      'Multipliers from carried-over ties',
      'A single component, no backend',
      'Colombian peso formatting with the es-CO locale',
      'Compiled APK ready to install',
      'Grid with horizontal scroll',
    ],
  },
  'casino-online': {
    subtitle: 'Online casino with 5 games and real-time betting',
    categories: 'Web App • Gaming • WebSocket • Redux • Firebase',
    description:
      'An online casino platform with five games: slots, Aviator, blackjack, roulette and Hunt the Ace. Bets and results go over WebSocket, so the balance updates instantly. It has deposits, withdrawals with approval, transaction history, referrals with a bonus and a staking program. The admin panel shows charts and active sessions and lets you block accounts.',
    features: [
      {
        title: 'Available Games',
        items: [
          'Slots with multiple paylines and jackpots',
          'Aviator with growing multiplier and real-time cash out',
          'Classic Blackjack against the house',
          'European Roulette with bets on numbers, colors, and sections',
          'Hunt the Ace: find the ace among shuffled cards',
        ],
      },
      {
        title: 'Financial System',
        items: [
          'Real-time betting with WebSocket (Socket.io)',
          'Balance with instant updates',
          'Deposits with automatic processing',
          'Withdrawals with approval flow',
          'Complete transaction history',
        ],
      },
      {
        title: 'Referrals and Staking',
        items: [
          'Unique referral code with $10 bonus',
          'Referral panel with conversion statistics',
          'BFG Staking program with calculated returns',
          'Invested capital and earnings visualization',
        ],
      },
      {
        title: 'Administration Panel',
        items: [
          'Dashboard with Chart.js and ApexCharts',
          'User management with account blocking',
          'Game and active session monitoring',
          'Transaction control and withdrawal approval',
          'Revenue and performance reports',
        ],
      },
    ],
    integrationUses: [
      'Image CDN for casino assets and graphic resources',
      'Bets, results, and balance updates in real time',
      'Transactional emails and notifications',
      'Authentication and push notifications',
      'Statistical charts in the administration dashboard',
    ],
    highlights: [
      '5 games with the casino logic coded from scratch',
      'Real-time bets and results with Socket.io',
      'MERN stack with MUI, Ant Design and Bootstrap',
      'Referrals with an automatic $10 bonus',
      'BFG Staking program with calculated returns',
      'Images served from ImageKit',
      'Global state with Redux Toolkit shared across games',
      'Admin panel with real-time charts',
    ],
  },
  'saucedo-abogados': {
    subtitle: 'Management system for a law firm, with e-signatures and AI',
    categories: 'Web App • Mobile App • Legal • AI • Electronic Signature • Laravel',
    description:
      'A management system for a law firm. Each case has its parties, documents, procedural motions, notes and tasks, and can be assigned to one or more attorneys. Quotes go through an approval flow with three roles and turn into cases, and collections come with due-date reminders. PDFs are indexed with OCR and summarized automatically with OpenAI, documents get signed with SignNow, and the calendar syncs both ways with Google Calendar. The backend is Laravel, with 48 models and 88 endpoints, plus a companion mobile app.',
    features: [
      {
        title: 'Case Management',
        items: [
          'Cases with 6 tabs: info, parties, documents, proceedings, notes, tasks',
          'Case statuses: new, in progress, on hold, closed, archived',
          'Assignment to one or more attorneys',
          'Chronological procedural motions and internal notes',
          'Pending tasks with deadline and responsible party',
        ],
      },
      {
        title: 'Budgets and Collections',
        items: [
          'Budgets with approval flow (3 roles)',
          'Statuses: draft, pending, approved, sent, accepted, rejected',
          'Automatic budget-to-case conversion',
          'Partial and full payment tracking',
          'Reminders for upcoming collection deadlines',
        ],
      },
      {
        title: 'AI and Electronic Signature',
        items: [
          'OCR of PDF documents with data extraction',
          'Automatic summary with AI (OpenAI)',
          'Intelligent search in indexed documents',
          'Electronic signature with SignNow with status tracking',
          'Download of signed documents with legal validity',
        ],
      },
      {
        title: 'Calendar and Reports',
        items: [
          'FullCalendar with bidirectional sync to Google Calendar',
          'Events: hearings, meetings, deadlines, and tasks',
          '6 reports: cases, billing, collections, productivity, clients, budgets',
          'Filament panel with dashboard and audit',
        ],
      },
    ],
    integrationUses: [
      'Electronic signature of legal documents with legal validity',
      'Document storage and synchronization for the case',
      'Bidirectional synchronization of events and hearings',
      'OCR, automatic summary, and data extraction from documents',
      'Interactive visual calendar with multiple views',
      'Administration panel with dashboard and resource management',
      'PDF generation for budgets and reports',
      'Automated end-to-end tests',
    ],
    highlights: [
      'OCR and automatic document summaries with OpenAI',
      'Electronic signatures with SignNow, legally valid',
      'Integration with Google Drive, Calendar and OAuth',
      '48 models and 88 endpoints in Laravel',
      'Quotes with three-role approval',
      '6 reports: cases, billing, collections, productivity, clients and quotes',
      'Cases organized in 6 tabs',
      'End-to-end tests with Playwright and a companion mobile app',
    ],
  },
  'grupo-sdg': {
    subtitle: 'ERP for Mexico with CFDI 4.0 invoicing',
    categories: 'Web App • ERP • CFDI Billing • Laravel 12 • SAT',
    description:
      'A management system for a Mexican company, with CFDI 4.0 electronic invoicing. The sales flow goes from quote to order, invoice, payment and collection, carrying the data from one stage to the next. Vouchers are signed with CSD certificates, stamped through a PAC, and the RFC is checked against the SAT blacklist. It has a treasury module with bank reconciliation, password policies with expiration and four audit tables. The backend is Laravel 12, with over 40 models and 80 endpoints documented in Swagger.',
    features: [
      {
        title: 'Sales Pipeline',
        items: [
          'Complete flow: quote to order to invoice to payment to collection',
          'Automatic conversion between stages with data carryover',
          'Payment supplements per SAT regulations',
          'Accounts receivable tracking with due dates',
        ],
      },
      {
        title: 'CFDI 4.0 Billing',
        items: [
          'Digital fiscal vouchers per SAT regulations',
          'Digital signature with Digital Seal Certificate (CSD)',
          'Fiscal stamping with PAC (Authorized Provider)',
          'RFC validation against SAT blacklist',
          'Fiscal XML generation and printed representation in PDF',
          'CFDI cancellation with reason per regulations',
        ],
      },
      {
        title: 'Treasury and Security',
        items: [
          'Bank accounts, movements, and reconciliation',
          'Cash flow with income and expense projection',
          'Password policies with expiration and lockout',
          '4 audit tables: access, data, fiscal, admin',
        ],
      },
      {
        title: 'Administration',
        items: [
          'Dashboard with sales and billing metrics',
          'Official SAT catalogs integrated',
          'Configurable taxes: IVA, ISR, IEPS',
          'User management with roles and permissions',
        ],
      },
    ],
    integrationUses: [
      'Fiscal stamping of CFDI 4.0 vouchers',
      'Official catalogs and RFC validation against blacklist',
      'Digital signature of fiscal vouchers',
      'Printed CFDI representations in PDF',
      'Interactive documentation of 80+ endpoints',
    ],
    highlights: [
      'CFDI 4.0 invoicing with PAC stamping and CSD certificates',
      'Sales flow from quote to collection',
      'RFC validation against the SAT blacklist',
      '4 audit tables: access, data, fiscal and admin',
      'Passwords with expiration and lockout',
      'Over 40 models and 80 endpoints documented with Swagger',
      'Treasury with bank reconciliation',
      'Official SAT catalogs: CFDI use, tax regime and payment method',
    ],
  },
  'goodbye-friend': {
    subtitle: 'A 3D virtual cemetery to remember pets',
    categories: 'Web 3D • Mobile App • Three.js • React Three Fiber • Stripe • Laravel',
    description:
      'A virtual pet memorial with a 3D cemetery you walk through in first person. It has over 1,075 plots, three grave styles, 57 tribute objects, niches and mausoleums. On desktop you move with pointer lock and on the phone with touch joysticks, with a minimap and collisions. Each pet has a profile with a biography and photos, where others leave tributes and condolences. Plans and tributes are paid through Stripe, there is an artist marketplace, a mobile app in React Native and a Laravel backend.',
    features: [
      {
        title: '3D Cemetery',
        items: [
          '3D world with terrain, grass, paths, trees, and decoration',
          '1,075+ plots in 25+ rows with 3 grave styles',
          '57 3D tribute objects: flowers, candles, wreaths, toys',
          '10 circular niches and premium mausoleums',
          'Dynamic lighting and distance-based rendering',
        ],
      },
      {
        title: 'Navigation and Camera',
        items: [
          'First person with pointer lock on desktop',
          'Virtual touch joysticks on mobile',
          'Minimap with current position and occupied graves',
          'Direct navigation to specific grave',
          'Collision system with cemetery objects',
        ],
      },
      {
        title: 'Memorials and Community',
        items: [
          'Pet profile with biography and photo gallery',
          'Virtual tributes from other visitors',
          'Condolence messages on each memorial',
          'Public or private memorial by preference',
          'Artist marketplace for customization',
        ],
      },
      {
        title: 'Payments and Mobile App',
        items: [
          'Memorial plans: basic, premium, mausoleum (Stripe)',
          'Purchase of additional 3D tributes',
          'Mobile app with 3D tour and touch joysticks',
          'Profile and gallery management from phone',
        ],
      },
    ],
    integrationUses: [
      '3D engine for cemetery with graves, objects, and environment',
      'Helpers and components for Three.js (camera, controls, loaders)',
      'Payments for memorial plans, tributes, and marketplace',
      'Photo capture and selection from the mobile app',
    ],
    highlights: [
      '3D cemetery with over 1,075 plots, 3 grave styles and 57 tribute objects',
      'Pointer lock on desktop and touch joysticks on mobile',
      'Distance-based rendering to hold 60 fps',
      'Minimap with real-time position',
      'Artist marketplace for customizing memorials',
      '3D web with Three.js and R3F, mobile app in React Native and Laravel backend',
      'Collisions with cemetery objects',
      'Stripe payments: plans, tributes and contributor payouts',
    ],
  },
  'safetrade': {
    subtitle: 'An app for selling and following trading signals',
    categories: 'Mobile App • Fintech • Trading • Stripe • Zustand • React Query',
    description:
      'A mobile app where traders publish trading signals and other users subscribe to receive them. The trader enters the asset, direction, take profit and stop loss, and gets a dashboard with win rate, cumulative return and streak. Clients browse traders, subscribe monthly through Stripe and can pause or cancel whenever they want. Built with React Native, Expo, TypeScript, Zustand and React Query.',
    features: [
      {
        title: 'For Traders',
        items: [
          'Publish signals with asset, direction, take profit, and stop loss',
          'Dashboard with win %, cumulative return, and winning streak',
          'Subscriber management and subscription status',
          'Signal history with result (winner/loser)',
          'Performance charts with lines and bars',
        ],
      },
      {
        title: 'For Clients',
        items: [
          'Trader directory with metrics and subscription price',
          'Monthly subscription to one or more traders',
          'Real-time signals with detail and analysis',
          'Subscription management: view, pause, or cancel',
        ],
      },
      {
        title: 'Payments and Account',
        items: [
          'Recurring monthly subscriptions with native Stripe SDK',
          'Billing history, invoices, and payment status',
          'Notification and profile settings',
        ],
      },
    ],
    integrationUses: [
      'Recurring subscriptions with credit/debit card',
      'Service configuration and notifications',
      'Performance charts and trader statistics',
    ],
    highlights: [
      'Two roles with different navigation and interface',
      'Zustand, React Query and Zod for state, cache and validation',
      'Native Stripe in React Native, without leaving the app',
      'Calculated metrics: win rate, cumulative return and streak',
      'Whole app in TypeScript',
      'Expo Router tabs that change with the role',
      'React Query with cache and optimistic updates',
      'Subscriptions with automatic monthly billing',
    ],
  },
  'biznes': {
    subtitle: 'Digital business cards, with QR codes and memberships',
    categories: 'Web App • SaaS • E-commerce • QR • Mercado Pago • Redux',
    description:
      'A SaaS for building digital business cards and sharing them by link or QR code. Users upload a photo, logo, bio, social links and buttons, change colors and fonts, and see the result in real time in a phone-shaped preview. Every card gets its own QR code and a vCard to save the contact. Memberships and the store are charged through Mercado Pago, and the dashboard shows visits, clicks, downloads and time on screen.',
    features: [
      {
        title: 'Card Editor',
        items: [
          'Step-by-step design: photo, cover, logo, bio, position, company',
          'Social media with featured favorites (Instagram, LinkedIn, TikTok, etc.)',
          'Visual customization: colors, fonts, borders, alignment, backgrounds',
          'Real-time preview in phone format',
          'Automatic downloadable QR and vCard to save contact',
        ],
      },
      {
        title: 'Memberships and Store',
        items: [
          'Plans with granular configurable permissions',
          'Payments and subscriptions with Mercado Pago',
          'Product store with categories, variations, and cart',
          'Discount coupons and membership discounts',
        ],
      },
      {
        title: 'Statistics',
        items: [
          'Card visits with date and device',
          'Social media, email, and button clicks',
          'vCard downloads and viewing time',
          'Contacts received via integrated form',
        ],
      },
      {
        title: 'Administration Panel',
        items: [
          'Product, category, membership, and order management',
          'Blog, FAQs, brands, Hero Cards, and announcements',
          'Coupon, ticket, and user management',
          'Bulk import from Excel files',
        ],
      },
    ],
    integrationUses: [
      'Membership payments, subscriptions, and store purchases',
      'Quick login with Google account',
      'Transactional emails (purchase, login, memberships)',
      'Automatic QR code generation per card',
      'Downloadable contact files (.vcf)',
      'Real-time communication',
      'Image optimization and conversion to WebP',
      'Interactive API documentation',
    ],
    highlights: [
      'Subscriptions with configurable permissions per plan',
      'Editor with real-time preview in phone format',
      'Stats for visits, clicks, downloads and time on screen',
      'QR code and vCard generated for every card',
      'Store with cart and Mercado Pago checkout',
      'Images converted to WebP with Sharp',
      'Bulk import of users and cards from Excel',
      'Scheduled jobs with Agenda.js to expire memberships',
    ],
  },
  'citamovil': {
    subtitle: 'Website for a phone and tablet repair service in Spain',
    categories: 'Web App • Technical Service • WhatsApp Bot • Next.js 14 • Wholesale',
    description:
      'A website for a repair service that fixes phones, tablets and other devices in Spain. The customer gets a quote by choosing category, brand, model and faults, and the price changes by zone. Then they track the repair with a 5-digit code and get every update by email and WhatsApp. Wholesalers sign up, the admin approves them and they place bulk orders with a pickup address. The site content is edited from the panel without touching code.',
    features: [
      {
        title: 'For the Customer',
        items: [
          'Automatic quoter by category, brand, model, and faults',
          'Multiple fault selection with real-time pricing',
          'Repair tracking with 5-digit code',
          'Email and WhatsApp notifications on each status change',
          'Real data from Spanish provinces and towns',
        ],
      },
      {
        title: 'Wholesale System',
        items: [
          'Registration with manual administrator approval',
          'Bulk repair orders with pickup address',
          'Independent tracking with own code and statuses',
          'Email notifications to wholesaler and admin',
        ],
      },
      {
        title: 'Administration Panel',
        items: [
          'Price table by model, fault, and zone (local/outside/wholesale)',
          'Category, brand, model, and fault management',
          'Orders with status change and automatic notification',
          'Blog with rich text editor, tags, and related articles',
          '100% editable content without touching code',
          'Price table export to PDF',
        ],
      },
    ],
    integrationUses: [
      'Automatic messages when creating orders or changing status (QR connection)',
      'Emails with HTML templates for orders, statuses, and wholesalers',
      'PDF generation with price tables',
      'Google reviews on the homepage',
    ],
    highlights: [
      'Prices by model, fault and zone',
      'WhatsApp bot with whatsapp-web.js, no paid services',
      'Automatic email and WhatsApp alerts',
      'Wholesalers with sign-up, approval and their own tracking',
      'Price table with drag and drop and PDF export',
      'All content editable from the panel',
    ],
  },
}
