import type { ProjectI18n } from './types'

export const en: Record<string, ProjectI18n> = {
  'cap-medical': {
    subtitle: 'Mobile Application for Medical Services and Surgery Management',
    categories: 'Mobile App • React Native • Multi-Module',
    description:
      'Cross-platform mobile application for comprehensive medical services and surgery management. Allows managing surgical services with status tracking, managing technicians, controlling locations and hospitals, recording payments, managing patient records, and receiving notifications. Includes role-based permission system, GPS geolocation, integrated camera, and QR code generation.',
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
      'Granular role-based permission system',
      'Service creation in 3 steps with dynamic catalogs',
      '10 specialized screens per service',
      'Movements with automatic GPS geolocation',
      'Complete audit trail of all changes',
      'Full TypeScript throughout the application',
    ],
  },
  'petnder': {
    subtitle: 'Pet-Friendly Mobile Platform with Adoption and Community',
    categories: 'Mobile App • React Native • Pet Marketplace',
    description:
      'Mobile platform that connects pet owners with pet-friendly services, responsible adoption, and a community committed to animal welfare. Offers two differentiated profiles — user and business — each with its own flow, navigation, and features.',
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
      'Two differentiated profiles (user and business)',
      'Adoption system with integrated chat',
      'Communities with roles and content moderation',
      'Digital wallet and financial statistics',
      'Gamification with achievement system',
      'Interactive animated onboarding',
    ],
  },
  'controla2': {
    subtitle: 'Enterprise Resource Planning System (ERP)',
    categories: 'SaaS • ERP • Electronic Billing',
    description:
      'Comprehensive web platform designed for construction and engineering companies that need to centralize and automate their daily operations. Complete ERP with project management, HR, electronic billing, procurement, inventory, and risk prevention, adapted to Chilean regulations.',
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
      'Real-time dashboard with metrics and KPIs',
      'Automatic document generation (PDF, Excel, CSV)',
      '8 predefined roles with approval workflows',
      'Adapted to Chilean regulations (AFP, ISAPRE, DTE, RUT)',
      'SSOMA occupational risk prevention module',
      'Instant notifications for approvals',
    ],
  },
  'alhambra': {
    subtitle: 'Tourism Website for Granada, Spain',
    categories: 'Web App • Tourism • Admin Panel • Multilingual',
    description:
      'Professional website for a tour guide company in Granada, Spain, specializing in guided tours of the Alhambra. Complete platform with circuit exploration, reservations, blog, and automatic translation into 7 languages, with an administration panel for autonomous content management.',
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
      '100% manageable content without technical help',
      'Inline text editing directly on the page',
      'Server-side rendering (SSR) for SEO',
      'Support for 7 languages aimed at international tourism',
      'WhatsApp and email integration to maximize reservations',
      'Security with JWT, encrypted passwords, and roles',
    ],
  },
  'biznes-empresa': {
    subtitle: 'Corporate Digital Business Card Management Platform',
    categories: 'Web App • SaaS • Digital Cards • Roles',
    description:
      'Web application for companies to centrally manage digital business cards for all their employees, with role control, permissions, corporate templates, and usage statistics.',
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
      'Complete corporate management from a single panel',
      'Templates with branding that apply automatically',
      'Granular roles and permissions per employee',
      'Bulk employee onboarding via Excel file',
      'Centralized statistics with interactive charts',
      'Real-time communication with WebSockets',
    ],
  },
  'blackphone': {
    subtitle: 'Mobile Device Repair Management System',
    categories: 'Web App • E-commerce • WhatsApp Bot • Admin Panel',
    description:
      'Complete web platform for a mobile phone repair service in Spain. Includes automatic quoter, order system with tracking, email and WhatsApp notifications, wholesale management, and comprehensive administration panel.',
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
      'Smart quoter by model, fault, and geographic zone',
      'Multi-channel notifications (email + automatic WhatsApp)',
      'WhatsApp bot integrated without paid external services',
      'Wholesale system with independent flow',
      'Dynamic price table exportable to PDF',
      'Real data from Spanish provinces and towns',
    ],
  },
  'casepe': {
    subtitle: 'Institutional Website for the Petroleum Operations Chamber',
    categories: 'Institutional Web • Live CMS • Blog • Next.js 14',
    description:
      'Institutional website for CASEPE (Chamber of Special Petroleum Operations Companies), a civil association that brings together oil services companies in Argentina. All content is edited directly from the web without a separate panel: texts, images, and sections are modified by clicking on them when the administrator is logged in.',
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
      'Live editing without a separate panel — everything from the same page',
      'Dynamically updatable nested properties with Lodash',
      'Expandable sections: add and remove items from the web',
      'Blog with related articles and tags',
      'Contact emails with professional HTML template',
      'Professional animations across all sections',
    ],
  },
  'dental-digital': {
    subtitle: 'Dental Clinic Management System (SaaS)',
    categories: 'SaaS • AFIP Billing • Dental Chart • Mercado Pago',
    description:
      'SaaS web platform for dentists and dental clinics in Argentina. Comprehensive patient management, appointments with interactive calendar, visual dental chart, budgets, electronic billing with ARCA/AFIP, health insurance plans, consent documents, subscriptions with Mercado Pago, email and WhatsApp notifications, and data backup.',
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
      'Real electronic billing with ARCA/AFIP and valid CAE',
      'RSA/CSR certificate generation for AFIP linkage',
      'Interactive dental chart with per-tooth records and PDF export',
      'Subscriptions with Mercado Pago and automatic webhooks',
      'Multi-user with roles (owner, professional, administrator)',
      'Complete JSON backup with intelligent restoration',
    ],
  },
  'sunchales-pos': {
    subtitle: 'Commercial Management and Point of Sale System',
    categories: 'SaaS • POS • AFIP Billing • Barcode',
    description:
      'Complete commercial management web platform for businesses and shops in Argentina. Product management with barcodes, sales and purchase records, customers and suppliers, electronic billing with ARCA/AFIP, budgets, stock and raw materials control, warranties and returns (RMA), and statistics with interactive charts. Includes subscriptions with Mercado Pago.',
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
      'Complete commercial cycle: purchases, stock, sales, billing, and reports',
      'Real electronic billing with ARCA/AFIP and valid CAE',
      'Barcode with visual generation and quick reading',
      'RMA system for warranties and returns with tracking',
      'Budgets directly convertible into sales',
      'Customizable SMTP per user for invoice delivery',
    ],
  },
  'fuku-shop': {
    subtitle: 'Urban and Anime Clothing Online Store',
    categories: 'E-commerce • Next.js • Mercado Pago • Cloudinary',
    description:
      'Complete online store for selling anime, Asian, and video game style clothing. Catalog with color and size variants, advanced combined filters, gallery with zoom, size chart, shopping cart, history, reviews, SEO with automatic sitemap, and administration panel to manage the entire catalog. Based in Rafaela, Santa Fe, Argentina.',
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
      'Product variants with independent images per color',
      'Combined filters for precise catalog searches',
      'Static generation (SSG) with incremental revalidation for SEO',
      'Automatically generated XML sitemap with priorities per section',
      'Images on Cloudinary for optimization and fast loading',
      'Hierarchical categories with subcategories and subtypes',
    ],
  },
  'julian-winners': {
    subtitle: 'Online Raffle Platform with Digital Tickets',
    categories: 'Web App • Raffles • Mercado Pago • Referrals',
    description:
      'Complete web platform for selling online raffle tickets. Users buy ticket packs via Mercado Pago and receive randomly assigned numbers with an invoice by email. Includes referral system with points, shopping cart, manual ticket assignment, winner selection, moderators, Excel export, and 100% editable content. Currency: Colombian pesos (COP).',
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
      'Random tickets without duplicates with format based on raffle total',
      'Mercado Pago webhooks with anti-duplicate verification',
      'Manual assignment by moderators for in-person sales',
      'Winner selection by ticket number',
      'Complete Excel export (users, purchases, invoices)',
      'Three differentiated roles (user, moderator, administrator)',
    ],
  },
  'limcal': {
    subtitle: 'Cleaning Products Online Store',
    categories: 'E-commerce • Mercado Pago • Resellers • CMS',
    description:
      'Complete online store for LIMCAL, a cleaning products company in Argentina. Registration with CUIT and manual account approval, catalog with filters, cart with minimum purchase per product, payment with Mercado Pago, reseller map with Google Maps, order tracking with email, contact form with response from the panel, and 100% editable content.',
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
      'Manual account approval for access control',
      'Minimum purchase per product ideal for wholesale',
      'Reseller map with Google Maps filterable by zone',
      'Reply to contact messages directly from the panel',
      'Editable content with dynamic nested properties',
      'Mercado Pago webhooks with automatic order registration',
    ],
  },
  'limcal-pos': {
    subtitle: 'Desktop Commercial Management and Point of Sale Application',
    categories: 'Desktop App • Electron • AFIP Billing • IndexedDB',
    description:
      'Desktop application with Electron for complete commercial management of LIMCAL. Products with bulk import from Excel, sales and purchases, electronic billing with ARCA/AFIP (Invoice A/B, Credit Notes), delivery notes, stock, raw materials, resellers with commissions and discounts, VAT ledger, statistics, and backup. Local database with IndexedDB. Replaces the legacy FoxPro-based system.',
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
      'Desktop app with Electron — works offline without server',
      'Local database with IndexedDB in Electron browser',
      'Real electronic billing with AFIP (Invoice A/B, CN A/B)',
      'Resellers with discount or commission applied at billing',
      'Bulk product import and bulk price changes from Excel',
      'Complete migration from FoxPro (Husky POS) to modern technology',
    ],
  },
  'movilprint': {
    subtitle: 'Custom Design and Printing Platform',
    categories: 'Web App • Visual Editor • Drag & Drop • Social Login',
    description:
      'Web platform for creating custom print designs. The user chooses a template, accesses the visual editor with drag & drop where they add texts with 15+ fonts, images, and decorative elements, freely positions each element, and submits the design for printing. Login with Google and Facebook, points system, and administration panel for managing templates and received designs.',
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
      'Complete visual editor with interactive canvas and drag & drop',
      'Dynamic templates with dimensions in cm and own resources',
      '15+ typographic fonts with full style control',
      'Layer system to control element depth',
      'Social login with Google and Facebook',
      'Persistent designs with all elements saved in DB',
    ],
  },
  'padel': {
    subtitle: 'Padel Tournament Management Platform',
    categories: 'Web App • Sports • Ranking • Next.js 15',
    description:
      'Web platform for organizing and tracking padel tournaments. Tournament management with categories, players with clubs and points, matches with set results, event calendar, circuit by category, ranking filtered by gender and category, and player search. Administration panel and moderator panel for result entry.',
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
      'Tournament circuit automatically organized by category',
      'Dynamic real-time ranking by category and gender',
      'Individual and team matches with set results',
      'Automatic tournament status based on loaded matches',
      'Three access levels (public, moderator, administrator)',
      'Soft delete on categories for restoration',
    ],
  },
  '4me': {
    subtitle: 'Podiatry Platform with 3D Scanning and Orthopedic Footwear',
    categories: 'Mobile App • Web Admin • 3D Scanning • Stripe',
    description:
      'Comprehensive podiatry system with 3D foot scanning. Podiatrists scan feet from the mobile app, photos are processed into 3D models with Metashape, and custom orthopedic footwear projects are created. Payments with Stripe in USD, storage on Google Drive, 3D visualization in the web panel, email notifications, and real-time communication.',
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
      '3D foot scanning from phone with Metashape processing',
      'Bulk upload to Google Drive with real-time progress',
      '3D model visualization (GLB) in the browser',
      '12-status pipeline with email notification on each change',
      'Stripe payments in USD with automatic link per project',
      'Three coordinated systems: mobile app + web panel + server',
    ],
  },
  'trewa-club': {
    subtitle: 'Event Ticket Sales Platform with Points System',
    categories: 'Web App • Events • AFIP Billing • QR • Mercado Pago',
    description:
      'Web platform for selling tickets to nightlife events and parties. Purchase with Mercado Pago, tickets with QR code, automatic electronic billing with AFIP, redeemable points system, discount codes, ticket types with quotas, resellers with statistics, QR scanning at the door, and Google/Facebook login. Five differentiated roles.',
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
      'Automatic electronic billing with AFIP on each purchase',
      'Ticket types with batches, quotas, and independent sale schedules',
      'QR scanning with anti-double-scan validation and 6-hour margin',
      'Redeemable points system for catalog products',
      'Detailed per-event analysis (gender, age, peak hours, batches)',
      'Five roles: user, cashier, operator, reseller, administrator',
    ],
  },
  'nodominium': {
    subtitle: 'Cultural and Educational Center Website in El Salvador',
    categories: 'Static Site • HTML/CSS/JS • Bitcoin • Google Maps',
    description:
      'Website for Casa de Nodominium, an independent education and culture center in Playa Las Tunas, La Union, El Salvador. Events with touch slider and lightboxes, institutional information, interactive Google Maps map, contact form with FormSubmit, and Bitcoin donations with QR code. Fully static site without backend.',
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
      'Fully static site without server or database',
      'Event slider with touch support for mobile',
      'Lightboxes with complete information for each event',
      'Bitcoin donations with scannable QR',
      'Pure CSS animations without external libraries',
      'Functional form with FormSubmit without own backend',
    ],
  },
  'mdt-ingenieros': {
    subtitle: 'Time Tracking and Surveying Project Management',
    categories: 'Web App • HR • Billing • Digital Signatures',
    description:
      'Web platform for recording and tracking hours worked, project management, and report generation for a surveying company. Workdays with activities, digital signatures, overtime approval, payroll reports in PDF, monthly billing with VAT and withholdings, visual calendar with statuses, staff rotation, and unregistered hours monitoring. Currency: USD.',
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
      'Intelligent overtime calculation by day, holiday, and lunch',
      'Digital signatures from surveyor and supervisor on reports',
      'Automatic monthly billing with VAT (13%) and withholding (1%)',
      'Visual calendar with daily statuses per project',
      'Unregistered hours monitoring in the last 7 days',
      'Staff rotation between projects with monthly breakdown',
    ],
  },
  'storybox': {
    subtitle: 'Interactive Story and Presentation Editor with Visual Programming',
    categories: 'Web App • Education • Visual Programming • Blockly',
    description:
      'Interactive web application for creating multimedia stories and presentations with visual programming. Users create scenes with backgrounds, draggable and resizable objects, texts with multiple fonts and styles, per-scene background music, animated transitions, and program object behavior using visual blocks (Blockly). Fullscreen presentation mode, PDF export, server saving with automatic thumbnail, undo/redo system, copy and paste, and bilingual Spanish/English interface.',
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
      'Visual programming with 17 block types (movement, appearance, control)',
      'Canvas editor with drag & drop, 8 grip points, rotation, and layers',
      'Animated transitions in 8 directions with 3 speeds',
      'Per-scene background music with automatic looping playback',
      'Complete undo/redo system based on stacks',
      'High-quality PDF export with html2canvas + jsPDF',
      'Bilingual Spanish/English interface with dynamic texts',
      'Server saving with automatically generated thumbnail',
    ],
  },
  'konecta': {
    subtitle: 'Mobile Attendance Control and Leave Request Application',
    categories: 'Mobile App • HR • QR • Geolocation • Google Maps',
    description:
      'Cross-platform mobile application for employee attendance control. Entry and exit registration via QR code or GPS geolocation, attendance history with Google Maps map view, leave and incident requests with attachments, multi-company support, selfie for profile photo, differentiated roles (employee and supervisor), and adaptive navigation based on user role.',
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
      'Dual registration method: QR code and GPS geolocation',
      'Interactive Google Maps map with location history',
      'Multi-company support with per-session selection',
      'Differentiated roles with adaptive navigation (employee/supervisor)',
      'Leave and incidents with attachments and approval flow',
      'Profile selfie with front camera encoded in Base64',
    ],
  },
  'el-lobito-4pe': {
    subtitle: 'Golf Scoring Calculator for 4 Players',
    categories: 'Mobile App • Sports • Calculation • React Native',
    description:
      'Mobile application for calculating scores in a golf betting game between 4 players. Interactive grid of 18 holes x 4 players with automatic point calculation based on conditional rules (previous ties, number of marked per hole). Configurable price per unit and results in Colombian pesos. Self-contained application without backend or database.',
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
      'Scoring rules tailored for 4-player matches',
      'Calculation engine with multipliers from previous ties',
      'Self-contained application: single component, no backend',
      'Colombian currency format (COP) with es-CO locale',
      'Compiled APK included ready to install',
      'Grid with horizontal scroll for comfortable viewing',
    ],
  },
  'casino-online': {
    subtitle: 'Online Gambling Platform with Real-Time Betting',
    categories: 'Web App • Gaming • WebSocket • Redux • Firebase',
    description:
      'Online casino platform with 5 interactive games (Slots, Aviator, Blackjack, Roulette, and Hunt the Ace), real-time betting with WebSocket, administration panel with statistical charts, referral system with bonus, BFG staking program, deposit and withdrawal management, image CDN with ImageKit, and secure authentication with JWT and differentiated roles.',
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
      '5 complete games with casino logic implemented from scratch',
      'Real-time bets and results with WebSocket (Socket.io)',
      'Full MERN stack with triple UI library (MUI + Ant Design + Bootstrap)',
      'Referral system with automatic $10 bonus',
      'BFG Staking program with calculated returns',
      'Image CDN with ImageKit for optimized loading',
      'Global state with Redux Toolkit for fluid experience between games',
      'Administration panel with real-time charts',
    ],
  },
  'giordota': {
    subtitle: 'Dota 2 Item Marketplace with Betting and Gaming Store',
    categories: 'Web App • Gaming • Microservices • Steam API • Astro + Svelte',
    description:
      'Dota 2 item trading platform with marketplace, betting system with virtual coins, 5 types of loot boxes, automated Steam bots for item exchange, multi-channel real-time chat, triple wallet system, integrated social network, VIP system with levels, Discord bot, and payment gateways for Peru (Mercado Pago, PayPal, PagoEfectivo). Microservices architecture with Java Spring Boot, 4 Node.js services, and Astro/Svelte frontend.',
    features: [
      {
        title: 'Marketplace and Bots',
        items: [
          'Dota 2 item catalog with Steam prices',
          'Item buying and selling with internal wallet',
          'Automated Steam bots with trade offers',
          'Multiple bot management with integrated Steam Guard',
          'Real-time inventory verification',
        ],
      },
      {
        title: 'Loot Boxes and Betting',
        items: [
          '5 box types: normal, free, social, fan, and form',
          'Opening animation with won item reveal',
          'Betting with virtual coins on events and matches',
          'Administrator-configurable odds',
        ],
      },
      {
        title: 'Triple Wallet and Payments',
        items: [
          'Purchase wallet, withdrawal wallet, and free wallet',
          'Deposits with Mercado Pago, PayPal, and PagoEfectivo',
          'Withdrawals with request and processing',
          'Complete transaction history',
        ],
      },
      {
        title: 'Community and Chat',
        items: [
          'Real-time chat: support, group, admin, and keys',
          'Social network with posts and friend system',
          'Discord bot with commands and notifications',
          'VIP system with levels and exclusive benefits',
        ],
      },
    ],
    integrationUses: [
      'Authentication, inventories, and Dota 2 item data',
      'Automated item exchange with trade offers',
      'Payment gateway for the Peruvian market',
      'International payment gateway',
      'Cash payments at payment points in Peru',
      'Extended community with commands and notifications',
      'Chat, bets, and real-time updates',
    ],
    highlights: [
      'Microservices architecture: Spring Boot + 4 Node.js services',
      'Automated Steam bots with trade offers and Steam Guard',
      '5 types of loot boxes with configurable odds',
      'Triple wallet (purchases, withdrawals, free) for granular financial control',
      'Modern frontend with Astro + Svelte for SSG + interactivity',
      '3 payment gateways for Peru: Mercado Pago, PayPal, and PagoEfectivo',
      'Multi-channel real-time chat with WebSocket',
      'Discord bot integrated with the platform',
    ],
  },
  'saucedo-abogados': {
    subtitle: 'Legal Management System with Electronic Signature and Artificial Intelligence',
    categories: 'Web App • Mobile App • Legal • AI • Electronic Signature • Laravel',
    description:
      'Comprehensive management system for law firms with legal cases in 6 specialized tabs, client management, budgets with approval flow, collections, integrated calendar, 6 report types, document indexing with AI (OCR and automatic summary), electronic signature with SignNow, Google Drive and Google Calendar integration, Filament panel, mobile app, and 3 differentiated roles. Laravel backend with 48 models and 88 endpoints.',
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
      'Document indexing with AI: OCR + automatic summary with OpenAI',
      'Electronic signature with SignNow with legal validity',
      'Triple Google integration: Drive, Calendar, and OAuth',
      '48 models and 88 endpoints in Laravel for complete legal management',
      'Budget approval flow with 3 differentiated roles',
      '6 report types for firm decision-making',
      'Cases with 6 specialized tabs for comprehensive management',
      'E2E tests with Playwright and complementary mobile app',
    ],
  },
  'grupo-sdg': {
    subtitle: 'Enterprise Management System with CFDI 4.0 Electronic Billing (Mexico)',
    categories: 'Web App • ERP • CFDI Billing • Laravel 12 • SAT',
    description:
      'Enterprise management system for the Mexican market with CFDI 4.0 electronic billing. Complete sales pipeline (quote to order to invoice to payment to collection), fiscal voucher issuance with CSD certificates, PAC stamping, RFC validation against SAT blacklist, treasury module, password policies with expiration, and 4 audit tables. Laravel 12 backend with 40+ models and 80+ endpoints documented with Swagger.',
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
      'Complete CFDI 4.0 billing with PAC stamping and CSD certificates',
      'End-to-end sales pipeline: quote through collection',
      'RFC validation against SAT blacklist',
      '4 audit tables for complete traceability',
      'Enterprise password policies with periodic expiration',
      '40+ models and 80+ endpoints documented with Swagger',
      'Treasury module with bank reconciliation',
      'Official SAT catalogs integrated (CFDI use, regime, payment method)',
    ],
  },
  'goodbye-friend': {
    subtitle: '3D Virtual Pet Cemetery with Interactive Graves',
    categories: 'Web 3D • Mobile App • Three.js • React Three Fiber • Stripe • Laravel',
    description:
      'Virtual memorial platform for pets with a complete 3D cemetery. Over 1,075 plots in 25+ rows, 3 grave styles, 57 3D tribute objects, circular niches, and mausoleums. First-person camera with pointer lock on desktop and touch joysticks on mobile, minimap, distance-based rendering, pet profiles with galleries, collaborative memorials, contributor marketplace, and payments with Stripe. Mobile app with React Native and Laravel backend.',
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
      '3D cemetery with 1,075+ plots, 3 grave styles, and 57 tribute objects',
      'Hybrid camera: pointer lock on desktop, touch joysticks on mobile',
      'Distance-optimized rendering to maintain 60fps',
      'Navigation minimap with real-time position',
      'Contributor marketplace for memorial customization',
      'Three platforms: 3D web (Three.js/R3F), mobile app (React Native), backend (Laravel)',
      'Collision system for realistic walkthrough',
      'Monetization with Stripe: plans, tributes, and contributor payments',
    ],
  },
  'safetrade': {
    subtitle: 'Trading Signal Marketplace with Subscriptions',
    categories: 'Mobile App • Fintech • Trading • Stripe • Zustand • React Query',
    description:
      'Mobile application for buying and selling trading signals. Traders publish signals with technical analysis and clients subscribe to receive them. Two differentiated roles, recurring subscriptions with Stripe, performance dashboard, trader exploration with performance metrics, statistical charts, tab navigation by role, and validation with Zod. Modern stack: React Native, Expo, TypeScript, Zustand, and React Query.',
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
      'Two roles with completely differentiated interfaces and navigation',
      'Modern stack: Zustand + React Query + Zod for state, cache, and validation',
      'Native Stripe in React Native for payments without leaving the app',
      'Automatic metrics: win %, cumulative return, winning streak',
      'Full TypeScript throughout the application',
      'Expo Router with conditional tabs based on user role',
      'React Query with cache and optimistic synchronization',
      'Recurring subscriptions with automatic monthly billing',
    ],
  },
  'talenthunt': {
    subtitle: 'AI Recruitment Chatbot with CV Parsing',
    categories: 'Web App • HR • AI • GPT-4 • Chatbot • Laravel 12 • Filament',
    description:
      'Automated recruitment platform with AI conversational chatbot. Receives candidates through a configurable chatbot, parses CVs with GPT-4 (automatic extraction of personal data, experience, and education from PDFs), manages applications with Kanban flow, integrates with TalentTalent API for job posting, chatbot flow builder, analytics dashboard (funnel, time-to-hire, recruiter performance), and 3 roles. Filament panel.',
    features: [
      {
        title: 'Conversational Chatbot',
        items: [
          'Configurable conversation flow per job listing',
          'Flow builder with steps: open questions, multiple choice, files',
          'Dynamic responses based on candidate answers',
          'CV upload directly in the conversation',
          'Friendly chat-style interface for the candidate',
        ],
      },
      {
        title: 'CV Parsing with GPT-4',
        items: [
          'Automatic text reading from PDFs with OCR',
          'Personal data extraction: name, email, phone, location',
          'Work experience extraction: companies, positions, dates',
          'Technical and soft skills identification',
          'Automatic fields saved in candidate profile',
        ],
      },
      {
        title: 'Application Management',
        items: [
          'Kanban: new to review to interview to test to offer to hired',
          'Candidate detail with parsed CV and chatbot responses',
          'Internal recruiter notes and complete timeline',
          'Application assignment to recruiters',
        ],
      },
      {
        title: 'Analytics and Administration',
        items: [
          'Conversion funnel: visits to applications to hires',
          'Time-to-hire and performance per recruiter',
          'Job posting on portals via TalentTalent API',
          '3 roles: administrator, recruiter, viewer (Filament)',
        ],
      },
    ],
    integrationUses: [
      'Intelligent CV parsing: data, experience, education, and skills',
      'Job posting on multiple job portals',
      'Administration panel with dashboard and resource management',
      'Chatbot interactivity and dynamic components',
      'PDF report generation',
    ],
    highlights: [
      'CV parsing with GPT-4: automatic extraction of data, experience, and skills',
      'Visual chatbot flow builder without needing to code',
      'Analytics dashboard: conversion funnel, time-to-hire, recruiter performance',
      'Integration with TalentTalent API to post on multiple portals',
      '3 differentiated roles: administrator, recruiter, and viewer',
      'Filament v3.3 as main panel with professional dashboard',
      'Complete Kanban flow for visual candidate management',
      'Laravel 12 with Alpine.js, Livewire, and Tailwind CSS v4',
    ],
  },
  'biznes': {
    subtitle: 'SaaS Digital Business Card Platform',
    categories: 'Web App • SaaS • E-commerce • QR • Mercado Pago • Redux',
    description:
      'SaaS platform for creating customizable digital business cards shareable by link or QR. Visual editor with real-time preview, integrated social media, custom buttons, downloadable vCard, membership system with Mercado Pago, product store with cart, complete administration panel, detailed interaction statistics (visits, clicks, downloads, screen time), and real-time communication with Socket.IO.',
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
      'Complete SaaS with subscriptions and granular permissions per plan',
      'Advanced visual editor with real-time preview in phone format',
      'Detailed statistics: visits, clicks, downloads, screen time',
      'Automatic QR + vCard for each digital card',
      'Product store with cart and checkout with Mercado Pago',
      'Automatic image optimization to WebP with Sharp',
      'Bulk user/card import from Excel',
      'Scheduled tasks with Agenda.js for membership expiration',
    ],
  },
  'citamovil': {
    subtitle: 'Mobile Device Repair Management System',
    categories: 'Web App • Technical Service • WhatsApp Bot • Next.js 14 • Wholesale',
    description:
      'Web platform for a mobile phone, tablet, and electronic device repair service in Spain. Automatic quoter with price table by model, fault, and zone, order system with 5-digit code tracking, automatic email and WhatsApp notifications, wholesale management with approval and tracking, blog with rich text editor, and administration panel with 100% editable content.',
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
      'Smart quoter with prices by model, fault, and geographic zone',
      'WhatsApp bot integrated with whatsapp-web.js (no paid services)',
      'Multi-channel notifications: email + automatic WhatsApp',
      'Wholesale system with registration, approval, and tracking',
      'Dynamic price table with drag & drop and PDF export',
      '100% editable content from the administration panel',
    ],
  },
}
